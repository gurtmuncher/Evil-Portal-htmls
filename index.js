const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

function getPortals() {
    const portalsDir = path.join(__dirname, 'portals');
    if (!fs.existsSync(portalsDir)) {
        fs.mkdirSync(portalsDir);
        return [];
    }
    return fs.readdirSync(portalsDir)
        .filter(f => f.endsWith('.html'))
        .map(file => ({
            file,
            name: file.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        }));
}

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'));
        return;
    }

    if (req.url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8'));
        return;
    }

    if (req.url === '/api/portals') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(getPortals()));
        return;
    }

    if (req.url.startsWith('/portals/')) {
        const filename = req.url.replace('/portals/', '');
        const filepath = path.join(__dirname, 'portals', filename);
        if (fs.existsSync(filepath)) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fs.readFileSync(filepath, 'utf8'));
            return;
        }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
});

server.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
});