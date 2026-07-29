import React, { useState } from 'react';
import { X, Plus, Edit2, Trash2, CloudUpload, Image as ImageIcon } from 'lucide-react';

export default function CMSModal({
  isOpen,
  onClose,
  data,
  refreshContent
}) {
  const [activeTab, setActiveTab] = useState('essays'); // essays | notes | settings
  const [editingItem, setEditingItem] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState('');

  // Draft states to prevent data loss
  const [essayTitle, setEssayTitle] = useState('');
  const [essayContent, setEssayContent] = useState('');
  const [essayExcerpt, setEssayExcerpt] = useState('');
  const [essayReadTime, setEssayReadTime] = useState('1 min read');
  const [noteContent, setNoteContent] = useState('');

  if (!isOpen) return null;

  const { settings, essays, notes } = data;

  // Auto calculate read time from word count
  const calculateReadTime = (text) => {
    if (!text || !text.trim()) return '1 min read';
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  };

  const handleEssayContentChange = (e) => {
    const val = e.target.value;
    setEssayContent(val);
    setEssayReadTime(calculateReadTime(val));
  };

  const startEditingEssay = (essay) => {
    setEditingItem(essay);
    setEssayTitle(essay.title || '');
    setEssayContent(essay.content || '');
    setEssayExcerpt(essay.excerpt || '');
    setEssayReadTime(essay.readTime || calculateReadTime(essay.content));
  };

  const startEditingNote = (note) => {
    setEditingItem(note);
    setNoteContent(note.content || '');
  };

  const handleSafeClose = () => {
    if (editingItem && (essayContent || noteContent)) {
      if (confirm('You have unsaved changes in the editor. Are you sure you want to close?')) {
        setEditingItem(null);
        onClose();
      }
    } else {
      onClose();
    }
  };

  // Save Settings
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedSettings = {
      siteTitle: formData.get('siteTitle'),
      heroHeading: formData.get('heroHeading'),
      aboutTitle: formData.get('aboutTitle'),
      aboutBio: formData.get('aboutBio'),
      socialLinks: [
        { name: 'YouTube', url: formData.get('youtubeUrl') },
        { name: 'Substack', url: formData.get('substackUrl') },
        { name: 'GitHub', url: formData.get('githubUrl') },
        { name: 'Email', url: formData.get('emailUrl') }
      ]
    };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSettings)
      });
      if (res.ok) {
        alert('Settings updated!');
        refreshContent();
      }
    } catch (err) {
      alert('Error updating settings: ' + err.message);
    }
  };

  // Save Essay
  const handleSaveEssay = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const essay = {
      id: editingItem?.id || '',
      title: essayTitle,
      slug: formData.get('slug') || essayTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      date: formData.get('date') || formattedDate,
      readTime: calculateReadTime(essayContent),
      excerpt: essayExcerpt,
      content: essayContent,
      nextSlug: formData.get('nextSlug') || '',
      nextTitle: formData.get('nextTitle') || '',
      published: formData.get('published') === 'on'
    };

    try {
      const res = await fetch('/api/essays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(essay)
      });
      if (res.ok) {
        setEditingItem(null);
        setEssayTitle('');
        setEssayContent('');
        setEssayExcerpt('');
        refreshContent();
      }
    } catch (err) {
      alert('Error saving essay: ' + err.message);
    }
  };

  // Delete Essay
  const handleDeleteEssay = async (id) => {
    if (!confirm('Are you sure you want to delete this essay?')) return;
    try {
      await fetch(`/api/essays/${id}`, { method: 'DELETE' });
      refreshContent();
    } catch (err) {
      alert('Error deleting essay: ' + err.message);
    }
  };

  // Save Note
  const handleSaveNote = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const formattedShortDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const note = {
      id: editingItem?.id || '',
      date: formData.get('date') || formattedDate,
      shortDate: formData.get('shortDate') || formattedShortDate,
      content: noteContent
    };

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note)
      });
      if (res.ok) {
        setEditingItem(null);
        setNoteContent('');
        refreshContent();
      }
    } catch (err) {
      alert('Error saving note: ' + err.message);
    }
  };

  // Delete Note
  const handleDeleteNote = async (id) => {
    if (!confirm('Are you sure you want to delete this note?')) return;
    try {
      await fetch(`/api/notes/${id}`, { method: 'DELETE' });
      refreshContent();
    } catch (err) {
      alert('Error deleting note: ' + err.message);
    }
  };

  // Upload Image Handler
  const handleImageUpload = async (e, setContentFn, contentVal) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.url) {
        const imageMarkdown = `\n![${file.name}](${data.url})\n`;
        setContentFn(contentVal + imageMarkdown);
        alert('Image uploaded successfully and added to content!');
      }
    } catch (err) {
      alert('Image upload failed: ' + err.message);
    }
  };

  // Publish to GitHub
  const handlePublishToGitHub = async () => {
    setPublishing(true);
    setPublishStatus('Building site and pushing to GitHub...');
    try {
      const res = await fetch('/api/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Publish update from CMS Editor' })
      });
      const data = await res.json();
      if (data.success) {
        setPublishStatus('Successfully published to GitHub!');
      } else {
        setPublishStatus('Publish failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      setPublishStatus('Publish error: ' + err.message);
    } finally {
      setPublishing(false);
      setTimeout(() => setPublishStatus(''), 6000);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="cms-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="cms-header">
          <div className="cms-tabs">
            <button
              className={`cms-tab-btn ${activeTab === 'essays' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('essays');
                setEditingItem(null);
              }}
            >
              Essays ({essays.length})
            </button>
            <button
              className={`cms-tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('notes');
                setEditingItem(null);
              }}
            >
              Notes ({notes.length})
            </button>
            <button
              className={`cms-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('settings');
                setEditingItem(null);
              }}
            >
              Site Settings
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              className="cms-publish-btn"
              onClick={handlePublishToGitHub}
              disabled={publishing}
            >
              <CloudUpload size={16} />
              {publishing ? 'Publishing...' : 'Publish to GitHub'}
            </button>

            <button onClick={handleSafeClose} style={{ color: 'var(--text-muted)' }} title="Close Editor">
              <X size={20} />
            </button>
          </div>
        </div>

        {publishStatus && (
          <div
            style={{
              padding: '0.6rem 1.5rem',
              background: publishStatus.includes('Successfully') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
              color: publishStatus.includes('Successfully') ? '#4ade80' : '#f87171',
              fontSize: '0.85rem'
            }}
          >
            {publishStatus}
          </div>
        )}

        {/* CMS Body Content */}
        <div className="cms-body">
          {/* ESSAYS TAB */}
          {activeTab === 'essays' && (
            <div>
              {editingItem !== null ? (
                <form onSubmit={handleSaveEssay}>
                  <h3 style={{ marginBottom: '1.25rem' }}>
                    {editingItem.id ? 'Edit Essay' : 'Create New Essay'}
                  </h3>
                  <div className="form-group">
                    <label className="form-label">Essay Title</label>
                    <input
                      name="title"
                      className="form-input"
                      value={essayTitle}
                      onChange={(e) => setEssayTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Slug (URL)</label>
                      <input
                        name="slug"
                        className="form-input"
                        defaultValue={editingItem.slug || ''}
                        placeholder="e.g. how-we-finally-looked-inside-ai"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Date (Auto-Published)</label>
                      <input
                        name="date"
                        className="form-input"
                        defaultValue={editingItem.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Calculated Read Time (Auto)</label>
                      <input
                        name="readTime"
                        className="form-input"
                        value={essayReadTime}
                        readOnly
                        style={{ opacity: 0.8 }}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>Published</span>
                        <input
                          type="checkbox"
                          name="published"
                          defaultChecked={editingItem.published !== false}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Excerpt / Summary</label>
                    <textarea
                      name="excerpt"
                      className="form-textarea"
                      rows={2}
                      value={essayExcerpt}
                      onChange={(e) => setEssayExcerpt(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label className="form-label">Content (Markdown / Formatted text)</label>
                      <label style={{ cursor: 'pointer', fontSize: '0.8rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <ImageIcon size={14} />
                        Insert Picture
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={(e) => handleImageUpload(e, setEssayContent, essayContent)}
                        />
                      </label>
                    </div>
                    <textarea
                      name="content"
                      className="form-textarea"
                      rows={10}
                      value={essayContent}
                      onChange={handleEssayContentChange}
                      required
                    />
                  </div>

                  <div className="cms-action-bar">
                    <button
                      type="button"
                      className="cms-tab-btn"
                      onClick={() => setEditingItem(null)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary">
                      Save Essay
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3>Manage Essays</h3>
                    <button
                      className="btn-primary"
                      onClick={() => startEditingEssay({})}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <Plus size={16} /> New Essay
                    </button>
                  </div>

                  <table className="cms-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {essays.map((essay) => (
                        <tr key={essay.id}>
                          <td>{essay.title}</td>
                          <td>{essay.date}</td>
                          <td>{essay.published !== false ? 'Published' : 'Draft'}</td>
                          <td>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button onClick={() => startEditingEssay(essay)}>
                                <Edit2 size={16} style={{ color: 'var(--accent-blue)' }} />
                              </button>
                              <button onClick={() => handleDeleteEssay(essay.id)}>
                                <Trash2 size={16} style={{ color: '#ef4444' }} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* NOTES TAB */}
          {activeTab === 'notes' && (
            <div>
              {editingItem !== null ? (
                <form onSubmit={handleSaveNote}>
                  <h3>{editingItem.id ? 'Edit Note' : 'Create New Note'}</h3>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label className="form-label">Note Content</label>
                      <label style={{ cursor: 'pointer', fontSize: '0.8rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <ImageIcon size={14} />
                        Insert Picture
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={(e) => handleImageUpload(e, setNoteContent, noteContent)}
                        />
                      </label>
                    </div>
                    <textarea
                      name="content"
                      className="form-textarea"
                      rows={5}
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      required
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Date (Auto-Published)</label>
                      <input
                        name="date"
                        className="form-input"
                        defaultValue={editingItem.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Short Date (Auto)</label>
                      <input
                        name="shortDate"
                        className="form-input"
                        defaultValue={editingItem.shortDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      />
                    </div>
                  </div>
                  <div className="cms-action-bar">
                    <button
                      type="button"
                      className="cms-tab-btn"
                      onClick={() => setEditingItem(null)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary">
                      Save Note
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3>Manage Notes</h3>
                    <button
                      className="btn-primary"
                      onClick={() => startEditingNote({})}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <Plus size={16} /> New Note
                    </button>
                  </div>

                  <table className="cms-table">
                    <thead>
                      <tr>
                        <th>Content</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {notes.map((note) => (
                        <tr key={note.id}>
                          <td>{note.content}</td>
                          <td>{note.shortDate || note.date}</td>
                          <td>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button onClick={() => startEditingNote(note)}>
                                <Edit2 size={16} style={{ color: 'var(--accent-blue)' }} />
                              </button>
                              <button onClick={() => handleDeleteNote(note.id)}>
                                <Trash2 size={16} style={{ color: '#ef4444' }} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings}>
              <h3 style={{ marginBottom: '1.25rem' }}>Site Settings & Profile</h3>
              
              <div className="form-group">
                <label className="form-label">Brand / Site Name (e.g. jeevan)</label>
                <input
                  name="siteTitle"
                  className="form-input"
                  defaultValue={settings.siteTitle || 'jeevan'}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Hero Title (Homepage Main Heading)</label>
                <textarea
                  name="heroHeading"
                  className="form-textarea"
                  rows={2}
                  defaultValue={settings.heroHeading || 'Essays about AI, software, learning, and building things from scratch.'}
                />
              </div>

              <div className="form-group">
                <label className="form-label">About Page Title</label>
                <input
                  name="aboutTitle"
                  className="form-input"
                  defaultValue={settings.aboutTitle || 'About'}
                />
              </div>

              <div className="form-group">
                <label className="form-label">About Bio Paragraphs</label>
                <textarea
                  name="aboutBio"
                  className="form-textarea"
                  rows={5}
                  defaultValue={settings.aboutBio || "Hi, I'm Jeevan.\n\nI build software.\n\nI make videos explaining difficult ideas.\n\nSometimes I write."}
                />
              </div>

              <h4 style={{ margin: '1.5rem 0 1rem 0', color: 'var(--text-secondary)' }}>Social Links (Elsewhere)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">YouTube URL</label>
                  <input
                    name="youtubeUrl"
                    className="form-input"
                    defaultValue={settings.socialLinks?.[0]?.url || 'https://youtube.com'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Substack URL</label>
                  <input
                    name="substackUrl"
                    className="form-input"
                    defaultValue={settings.socialLinks?.[1]?.url || 'https://substack.com'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">GitHub URL</label>
                  <input
                    name="githubUrl"
                    className="form-input"
                    defaultValue={settings.socialLinks?.[2]?.url || 'https://github.com/lroe'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email URL / Address</label>
                  <input
                    name="emailUrl"
                    className="form-input"
                    defaultValue={settings.socialLinks?.[3]?.url || 'mailto:jeevan@example.com'}
                  />
                </div>
              </div>

              <div className="cms-action-bar">
                <button type="submit" className="btn-primary">
                  Save All Settings
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
