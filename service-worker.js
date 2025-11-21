const CACHE_NAME = "orbited-offline-v1";

// 👉 Add ALL your HTML pages here
const PAGES_TO_CACHE = [
  "/",
  "/index.html",
  "/farmer.html",
  "/student.html",
  "/educator.html",
  "/community.html",
  "/dashboard.html",
  "/chatbot.html",
  "/impact.html"
];

// 👉 Add your important CSS, JS, images here
const ASSETS_TO_CACHE = [
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/assets/space-illustration.png",
  "/assets/logo.png",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png"
];

// INSTALL EVENT
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("✅ Caching HTML Pages & Assets");
      return cache.addAll([...PAGES_TO_CACHE, ...ASSETS_TO_CACHE]);
    })
  );
});

// FETCH EVENT (OFFLINE MODE)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
        .catch(() => caches.match("/index.html")); 
    })
  );
});

// UPDATE CACHE WHEN NEW VERSION COMES
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});
