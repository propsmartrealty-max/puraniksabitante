// Puraniks Abitante Fiore Bavdhan - High-Performance PWA Service Worker
const CACHE_NAME = 'puraniks-abitante-v2026';
const PRECACHE_URLS = [
  '/',
  '/favicon.svg',
  '/manifest.json',
  '/puraniks-abitante-fiore',
  '/puraniks-abitante-fiore-price',
  '/puraniks-abitante-floor-plans',
  '/puraniks-abitante-fiore-rera',
  '/bavdhan-connectivity'
];

// 1. Install Event - Cache Core App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('Pre-caching warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event - Clean Up Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event - Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Exclude API requests, POST/PUT methods, and external origins from SW interception
  if (
    request.method !== 'GET' ||
    url.pathname.startsWith('/api/') ||
    !url.protocol.startsWith('http')
  ) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and not in cache, fallback to root or cached shell
          return cachedResponse || caches.match('/');
        });

      return cachedResponse || fetchPromise;
    })
  );
});
