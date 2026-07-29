const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Ensure directories exist
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// Helper to read/write JSON
const readJson = (filename) => {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeJson = (filename, data) => {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});
const upload = multer({ storage });

// API Endpoints
app.get('/api/content', (req, res) => {
  try {
    const settings = readJson('settings.json') || {};
    const essays = readJson('essays.json') || [];
    const notes = readJson('notes.json') || [];
    const projects = readJson('projects.json') || [];
    res.json({ settings, essays, notes, projects });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/settings', (req, res) => {
  try {
    writeJson('settings.json', req.body);
    res.json({ success: true, settings: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Essays CRUD
app.post('/api/essays', (req, res) => {
  try {
    let essays = readJson('essays.json') || [];
    const essay = req.body;
    if (!essay.id) {
      essay.id = Date.now().toString();
    }
    const index = essays.findIndex((e) => e.id === essay.id);
    if (index >= 0) {
      essays[index] = essay;
    } else {
      essays.unshift(essay);
    }
    writeJson('essays.json', essays);
    res.json({ success: true, essay });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/essays/:id', (req, res) => {
  try {
    let essays = readJson('essays.json') || [];
    essays = essays.filter((e) => e.id !== req.params.id);
    writeJson('essays.json', essays);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Notes CRUD
app.post('/api/notes', (req, res) => {
  try {
    let notes = readJson('notes.json') || [];
    const note = req.body;
    if (!note.id) {
      note.id = Date.now().toString();
    }
    const index = notes.findIndex((n) => n.id === note.id);
    if (index >= 0) {
      notes[index] = note;
    } else {
      notes.unshift(note);
    }
    writeJson('notes.json', notes);
    res.json({ success: true, note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  try {
    let notes = readJson('notes.json') || [];
    notes = notes.filter((n) => n.id !== req.params.id);
    writeJson('notes.json', notes);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Projects CRUD
app.post('/api/projects', (req, res) => {
  try {
    let projects = readJson('projects.json') || [];
    const proj = req.body;
    if (!proj.id) {
      proj.id = Date.now().toString();
    }
    const index = projects.findIndex((p) => p.id === proj.id);
    if (index >= 0) {
      projects[index] = proj;
    } else {
      projects.push(proj);
    }
    writeJson('projects.json', projects);
    res.json({ success: true, project: proj });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/projects/:id', (req, res) => {
  try {
    let projects = readJson('projects.json') || [];
    projects = projects.filter((p) => p.id !== req.params.id);
    writeJson('projects.json', projects);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Image Upload Endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ success: true, url: fileUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Publish Endpoint (Builds & Pushes to GitHub)
app.post('/api/publish', (req, res) => {
  const commitMsg = req.body.message || 'Update blog content via CMS';
  const command = `npm run build && git add . && git commit -m "${commitMsg}" || true && git push origin main`;
  
  exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Publish error: ${error.message}`);
      return res.status(500).json({ error: error.message, details: stderr });
    }
    res.json({ success: true, output: stdout });
  });
});

// Serve Vite frontend in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`CMS Backend Server listening on http://localhost:${PORT}`);
});
