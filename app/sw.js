importScripts('/cache-polyfill.js');

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('mannar-blog-cache').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/blog.html',
                '/portfolio.html',
                '/toplikes.html',
                '/about.html',
                '/img/avatar-mobile-shadow.png',
                '/img/about-foto-cut.png',
                '/img/ar-bar.svg',
                '/img/de-bar.svg',
                '/img/eng-bar.svg',
                '/img/ch.svg',
                '/img/syr.svg',
                '/img/turk.svg',
                '/blog/01blog-vochabular.html',
                '/projects/antarctica/index.html',
                '/projects/antarctica/css/style.css',
                '/projects/antarctica/img/header.png',
                '/projects/antarctica/img/01slide.png',
                '/projects/antarctica/img/penguin.png',
                '/projects/antarctica/img/pic01.png',
                '/projects/antarctica/img/siegel.png',
                '/projects/antarctica/img/icons/01trips.png',
                '/projects/antarctica/img/icons/02venues.png',
                '/projects/antarctica/img/icons/03tickets.png',
                '/projects/antarctica/img/icons/04reviews.png',
                '/projects/antarctica/img/icons/hover-dot.png',
                '/projects/forty3/forty3.html',
                '/projects/forty3/css/styles.css',
                '/404.html',
                '/js/main.js',
                '/css/style.css',
                '/css/animate.css',
                '/img/contents/projects/antarctica.jpg',
                '/img/contents/projects/forty.jpg',
                '/img/contents/projects/infographic.jpg',
                '/img/contents/projects/jemalt.jpg',
                '/img/contents/projects/vochabular-hero.jpg',
                '/img/contents/projects/vochabular.jpg',
                '/img/contents/projects/vochabular02.jpg',
                '/img/contents/projects/vochabular03.jpg',
                '/img/contents/toplikes/cssguidelines.jpg',
                '/img/contents/toplikes/derekbanas.jpg',
                '/img/contents/toplikes/shoptask.jpg',
                '/img/contents/toplikes/slowgerman.jpg',
                '/img/contents/toplikes/thenetninja.jpg',
                '/img/contents/toplikes/w3school.jpg',
                '/img/contents/toplikes/zuzkalight.jpg',
                '/img/icons/fb-side.svg',
                '/img/icons/email-side.svg',
                '/img/icons/linkedin-side.svg'
                // '/blockrain/blockrain.jquery.min.js',
                // '/img/original-portrait-bw.png',
                // '/img/portrait-bw.png',
                // '/js/isotope-docs.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});