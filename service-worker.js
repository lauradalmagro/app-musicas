const CACHE_NAME = "music-pwa-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./style.css",
    "./main.js",
    "./crud.js",
    "./configfirebase.js",
    "./manifest.json"
];

self.addEventListener("install", (evento) => {

    evento.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ARQUIVOS);
            })
    );

});