const CACHE_NAME = "my-app-cache-v1"

self.addEventListener("install", () => {
  console.log("Service Worker installing...")

  self.skipWaiting()
})

self.addEventListener("activate", event => {
  console.log("Service Worker activated!")

  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cache => {
        if (cache !== CACHE_NAME) {
          console.log("Deleting old cache:", cache)
          return caches.delete(cache)
        }
      }),
    )
  })

  event.waitUntil(
    (async () => {
      const clients = await self.clients.matchAll({ includeUncontrolled: true })
      for (const client of clients) {
        client.postMessage({ type: "CLEAR_STORAGE" })
      }
    })(),
  )
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    }),
  )
})
