self.addEventListener('install',(event) => {
    event.waitUntil(
        caches.open('calculator-v1').then((cache) => {
            return cache.addAll([
                'index.html',
                'style.css',
                'calculator.js',
                'manifest.json',
                'icon-192.png',
                'icon-512.png',
            ]);
        })
    );
})

self.addEventListener('fetch',(event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response; // Return cached response if available
            }
            return fetch(event.request); // Fetch from network if not cached
        })
    );
})