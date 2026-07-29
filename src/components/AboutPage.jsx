import React from 'react';

export default function AboutPage({ settings }) {
  const socialLinks = settings.socialLinks || [
    { name: 'GitHub', url: 'https://github.com/lroe' },
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'X (Twitter)', url: 'https://x.com' },
    { name: 'Email', url: 'mailto:jeevan@example.com' }
  ];

  return (
    <div className="about-container">
      <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>
        {settings.aboutTitle || 'About'}
      </h1>

      <div className="about-bio">
        {settings.aboutBio ||
          "Hi, I'm Jeevan.\n\nI build software.\n\nI make videos explaining difficult ideas.\n\nSometimes I write."}
      </div>

      <div className="elsewhere-section">
        <h3 className="elsewhere-title">Elsewhere</h3>
        <div className="social-links-list">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
