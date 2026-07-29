import React, { useState } from 'react';
import { X, Plus, Edit2, Trash2, Upload, Check, CloudUpload, Image as ImageIcon } from 'lucide-react';

export default function CMSModal({
  isOpen,
  onClose,
  data,
  refreshContent
}) {
  const [activeTab, setActiveTab] = useState('essays'); // essays | notes | projects | settings
  const [editingItem, setEditingItem] = useState(null); // null or object being edited
  const [publishing, setPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);

  if (!isOpen) return null;

  const { settings, essays, notes, projects } = data;

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
        { name: 'GitHub', url: formData.get('githubUrl') },
        { name: 'YouTube', url: formData.get('youtubeUrl') },
        { name: 'X (Twitter)', url: formData.get('xUrl') },
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
    const essay = {
      id: editingItem?.id || '',
      title: formData.get('title'),
      slug: formData.get('slug') || formData.get('title').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      date: formData.get('date') || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: formData.get('readTime') || '5 min read',
      excerpt: formData.get('excerpt'),
      content: formData.get('content'),
      footnotes: parseInt(formData.get('footnotes')) || 0,
      discussionCount: parseInt(formData.get('discussionCount')) || 0,
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
    const note = {
      id: editingItem?.id || '',
      date: formData.get('date') || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      shortDate: formData.get('shortDate') || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      content: formData.get('content')
    };

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note)
      });
      if (res.ok) {
        setEditingItem(null);
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

  // Save Project
  const handleSaveProject = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const proj = {
      id: editingItem?.id || '',
      title: formData.get('title'),
      description: formData.get('description'),
      icon: formData.get('icon'),
      link: formData.get('link')
    };

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proj)
      });
      if (res.ok) {
        setEditingItem(null);
        refreshContent();
      }
    } catch (err) {
      alert('Error saving project: ' + err.message);
    }
  };

  // Delete Project
  const handleDeleteProject = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      refreshContent();
    } catch (err) {
      alert('Error deleting project: ' + err.message);
    }
  };

  // Upload Image Handler
  const handleImageUpload = async (e, textareaId) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setUploadingImage(true);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.url) {
        const imageMarkdown = `\n![${file.name}](${data.url})\n`;
        const textarea = document.getElementById(textareaId);
        if (textarea) {
          textarea.value += imageMarkdown;
        }
        alert('Image uploaded successfully! Added to editor content.');
      }
    } catch (err) {
      alert('Image upload failed: ' + err.message);
    } finally {
      setUploadingImage(false);
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
    <div className="modal-overlay" onClick={onClose}>
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
              className={`cms-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('projects');
                setEditingItem(null);
              }}
            >
              Projects ({projects.length})
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

            <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
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
                      defaultValue={editingItem.title || ''}
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
                      <label className="form-label">Date (e.g. July 24, 2026)</label>
                      <input
                        name="date"
                        className="form-input"
                        defaultValue={editingItem.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Read Time</label>
                      <input
                        name="readTime"
                        className="form-input"
                        defaultValue={editingItem.readTime || '10 min read'}
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
                      defaultValue={editingItem.excerpt || ''}
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
                          onChange={(e) => handleImageUpload(e, 'essay-content-textarea')}
                        />
                      </label>
                    </div>
                    <textarea
                      id="essay-content-textarea"
                      name="content"
                      className="form-textarea"
                      rows={10}
                      defaultValue={editingItem.content || ''}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Footnotes Count</label>
                      <input
                        type="number"
                        name="footnotes"
                        className="form-input"
                        defaultValue={editingItem.footnotes || 0}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Discussion Count</label>
                      <input
                        type="number"
                        name="discussionCount"
                        className="form-input"
                        defaultValue={editingItem.discussionCount || 0}
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
                      onClick={() => setEditingItem({})}
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
                              <button onClick={() => setEditingItem(essay)}>
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
                    <label className="form-label">Note Content</label>
                    <textarea
                      name="content"
                      className="form-textarea"
                      rows={4}
                      defaultValue={editingItem.content || ''}
                      required
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Date (Full)</label>
                      <input
                        name="date"
                        className="form-input"
                        defaultValue={editingItem.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Short Date (e.g. Jul 29)</label>
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
                      onClick={() => setEditingItem({})}
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
                              <button onClick={() => setEditingItem(note)}>
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

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div>
              {editingItem !== null ? (
                <form onSubmit={handleSaveProject}>
                  <h3>{editingItem.id ? 'Edit Project' : 'Create New Project'}</h3>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label className="form-label">Project Title</label>
                    <input
                      name="title"
                      className="form-input"
                      defaultValue={editingItem.title || ''}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <input
                      name="description"
                      className="form-input"
                      defaultValue={editingItem.description || ''}
                      required
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Icon (cube, play, document)</label>
                      <input
                        name="icon"
                        className="form-input"
                        defaultValue={editingItem.icon || 'cube'}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Link URL</label>
                      <input
                        name="link"
                        className="form-input"
                        defaultValue={editingItem.link || '#'}
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
                      Save Project
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3>Manage Projects</h3>
                    <button
                      className="btn-primary"
                      onClick={() => setEditingItem({})}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <Plus size={16} /> New Project
                    </button>
                  </div>

                  <table className="cms-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Icon</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((proj) => (
                        <tr key={proj.id}>
                          <td>{proj.title}</td>
                          <td>{proj.description}</td>
                          <td>{proj.icon}</td>
                          <td>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button onClick={() => setEditingItem(proj)}>
                                <Edit2 size={16} style={{ color: 'var(--accent-blue)' }} />
                              </button>
                              <button onClick={() => handleDeleteProject(proj.id)}>
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
                  <label className="form-label">GitHub URL</label>
                  <input
                    name="githubUrl"
                    className="form-input"
                    defaultValue={settings.socialLinks?.[0]?.url || 'https://github.com/lroe'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">YouTube URL</label>
                  <input
                    name="youtubeUrl"
                    className="form-input"
                    defaultValue={settings.socialLinks?.[1]?.url || 'https://youtube.com'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">X (Twitter) URL</label>
                  <input
                    name="xUrl"
                    className="form-input"
                    defaultValue={settings.socialLinks?.[2]?.url || 'https://x.com'}
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
