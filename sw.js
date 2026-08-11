const CACHE_NAME = 'typing-app-v1';
const urlsToCache = [
  './typing-test.html',
  './typing-style.css',
  './typing-script.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});