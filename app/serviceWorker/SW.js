const CACHE_NAME = "V1";
const URLS_TO_CACHE = ["/app/index.html", "/app/offline.html", "/app/public/styles.css", "/app/serviceWorker/scripts.js"];

const self = this;

self.addEventListener("install", (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE)));
});
self.addEventListener("fetch", (event) => {
    // event.respondWith(caches.match(event.request).then(() => fetch(event.request).catch(() => caches.match("/app/offline.html"))));
    event.respondWith(caches.match(event.request).then((respond) => {
        return (
            respond || fetch(event.request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                })
            })
        )
        .catch(() => {
            return caches.match("/app/offline.html")
        })
    }));
});
self.addEventListener("activate", (event) => {
    const cachedWhiteList = [];
    cachedWhiteList.push("CACHE_NAME");
    event.waitUntil(
        caches.keys().then((cacheNames) => 
            Promise.all(
                cacheNames.map((item) => {
                    if (!cachedWhiteList.includes(item)) {
                        // return caches.delete(item);
                    }
                    return item;
                })
            )
        )
    );
});