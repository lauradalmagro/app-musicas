const CACHE_NAME = "music-pwa-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./style.css",
    "./main.js",
    "./crud.js",
    "./configfirebase.js",
    "./manifest.json",
    "./icon.png"
];


// INSTALAÇÃO

self.addEventListener("install", (evento) => {

    evento.waitUntil(

        caches.open(CACHE_NAME)

            .then((cache) => {

                return cache.addAll(ARQUIVOS);

            })

    );

});


// ATIVAÇÃO

self.addEventListener("activate", (evento) => {

    evento.waitUntil(

        caches.keys().then((nomesCaches) => {

            return Promise.all(

                nomesCaches
                    .filter((nome) => nome !== CACHE_NAME)
                    .map((nome) => caches.delete(nome))

            );

        })

    );

});


// BUSCAR ARQUIVOS NO CACHE

self.addEventListener("fetch", (evento) => {

    evento.respondWith(

        caches.match(evento.request)

            .then((resposta) => {

                if (resposta) {
                    return resposta;
                }

                return fetch(evento.request);

            })

    );

});