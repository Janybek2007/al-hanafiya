if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c99c03bea3d7d134ab84d301c45a1f4b"},{url:"/_next/static/TI76XDHbwgYX5f9wR4yFy/_buildManifest.js",revision:"b3f8145b0c82cf09a55181a2051e2b53"},{url:"/_next/static/TI76XDHbwgYX5f9wR4yFy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e762574-1ba016e022773bc5.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/103-14f8783699e14b63.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/203.215f7ebb412294c3.js",revision:"215f7ebb412294c3"},{url:"/_next/static/chunks/21-e408f6ef3e2b2194.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/218.ad83b00c503fe8f6.js",revision:"ad83b00c503fe8f6"},{url:"/_next/static/chunks/4bd1b696-1daf63d8b61b1a61.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/517-81ba126874f91e60.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/5e22fd23-60304515c8d09111.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/710-56f1d6122c91486e.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/793-7278ead9122326c3.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/795d4814-40135d77a5404d22.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/97-de1ff971d0fd7c53.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/9c4e2130-ceb7eaddee8d1719.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/9cb54ea0-f01b23d6516dba0e.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/(home)/page-1e0c22bc84f55b83.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/articles/%5Bid%5D/page-8b88ad77b0a11630.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/articles/page-79805876709621c9.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/layout-7a3b975ae677600f.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/lessons/c/%5Bcategory%5D/page-68cd124a89dd88d6.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/lessons/d/%5Bid%5D/page-8eba1471a0e65cf4.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/lessons/m/%5Bid%5D/page-713c93c1e538cfc5.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/lessons/page-5aa97b5bf53d1850.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/profile/page-0621317a5cfe81c0.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/(site)/q&a/page-f8e552e57140ac7a.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/_not-found/page-319a4eb8357f7e8d.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/app/layout-5846af0c708d5170.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/b1644e8c-a9451229041e3d4b.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/eec3d76d-1b6df89e3d958a85.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/framework-084d7bd8f115a2e5.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/main-1956877decfd72e3.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/main-app-e4ecf1a98af18ac1.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/pages/_app-66de6c865428b55f.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/pages/_error-0401b8b0f2d23456.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-9e980db6e7d0418d.js",revision:"TI76XDHbwgYX5f9wR4yFy"},{url:"/_next/static/css/1a0ed02ca1f9b485.css",revision:"1a0ed02ca1f9b485"},{url:"/_next/static/css/4ff9a66f357961ed.css",revision:"4ff9a66f357961ed"},{url:"/_next/static/css/a8e09a32bf8563a3.css",revision:"a8e09a32bf8563a3"},{url:"/_next/static/css/d9e19f9e634ac37b.css",revision:"d9e19f9e634ac37b"},{url:"/_next/static/css/fd1efec6d49836bb.css",revision:"fd1efec6d49836bb"},{url:"/examples/example-audio.m4a",revision:"564a6ec8cbbedf4cc53ea007d03b88db"},{url:"/examples/example-video.mp4",revision:"5d68c622a038ee1ee406e4d55ada0ab1"},{url:"/favicon-192x192.png",revision:"398abdeae6bf0afec61e42e7d4dbcbdd"},{url:"/favicon-512x512.png",revision:"ceba03cb0cca7b00d07f0e401f60c0b8"},{url:"/icon/arrow-left.svg",revision:"e93f11995238f80743290a3cb5420acd"},{url:"/icon/audio-outlined.svg",revision:"098d658f38d07554c14ec169694f4a9b"},{url:"/icon/book.svg",revision:"814800ea214b6cbaa91c57f464c3aeca"},{url:"/icon/calendar-broken.svg",revision:"ffc83ffa019b0cd55311735c34946f5f"},{url:"/icon/chats-circle.svg",revision:"47989f09ee40c6c8a5675fa24f1097d2"},{url:"/icon/glaesses.svg",revision:"fa03e375cb70d102ffcf0b2ba9e4ddfc"},{url:"/icon/history-outlined.svg",revision:"9c27bdc55cc75abfc14c49b93c9bd72d"},{url:"/icon/install.svg",revision:"488a0d8a18b475dc9ac9623799bd16d5"},{url:"/icon/location-outline.svg",revision:"0a335db24495a61f6ff9268ac297d742"},{url:"/icon/next-pagination.svg",revision:"f54b674424689854bc2658e0901022d8"},{url:"/icon/prev-pagination.svg",revision:"d6abc9d366820d876df259d2d19743da"},{url:"/icon/profile_section_icon.png",revision:"dc1cb0afd3cec47aac63ef06669c643a"},{url:"/icon/section_title_left_type-flex.svg",revision:"e4e17b0d1e32f7383ae913e3a30b910a"},{url:"/icon/section_title_right_type-flex.svg",revision:"9a2f03a6e7b83d6a0e445ab8dba760a6"},{url:"/icon/section_title_type-col.svg",revision:"c4c4515040f13a8d5826886ab8236f2b"},{url:"/icon/social_links/facebook-colored.svg",revision:"161fa1d6b3b0d94fc8815a3cab207cbf"},{url:"/icon/social_links/facebook.svg",revision:"eba9dde63b7acd96a4e8f5714820f290"},{url:"/icon/social_links/instagram-colored.svg",revision:"0b75b44dd22132a6248f0888ccf21cbd"},{url:"/icon/social_links/instagram.svg",revision:"946edbe017f31f6a39541047c7a7ca8d"},{url:"/icon/social_links/telegram-colored.svg",revision:"ad37d50096938a3b4f307eb4432d3e23"},{url:"/icon/social_links/telegram.svg",revision:"4d4fbc33f5fbc03b3f6ffc90418c146a"},{url:"/icon/social_links/whatsapp-colored.svg",revision:"e00020b0a7efb1d1eaff4a89bc356e43"},{url:"/icon/social_links/whatsapp.svg",revision:"cafe8a76809b4cf4bdf7a15b441039f1"},{url:"/icon/tabs-bar/articles.svg",revision:"a8db61643ed0dd32321ea600551aea10"},{url:"/icon/tabs-bar/home.svg",revision:"f6e7024e66bbf5d6fc1ed955b409540c"},{url:"/icon/tabs-bar/lessons.svg",revision:"8cd182cfa585fdf8f30d19b437deb8d8"},{url:"/icon/tabs-bar/q&a.svg",revision:"6cd5ce4c5938e2cd729442c3f4bcd61c"},{url:"/icon/tabs-bar/user-profile.svg",revision:"5ca039c12b59ae4c593d70ca55978291"},{url:"/icon/video-outlined.svg",revision:"6bf5e5cb53ccbead7e03077a65b43203"},{url:"/icon/view.svg",revision:"cbe4269e2040363cac5a637b891f898e"},{url:"/icon/women-restroom.svg",revision:"90fadcd16ff86d9d84d003d69e1d181b"},{url:"/images/Q&Apage/Star1.svg",revision:"a84280807b7380b70befc0010e70f4bf"},{url:"/images/Q&Apage/Star2.svg",revision:"5c21b6ab734390b55df6fe2b76ae1ca7"},{url:"/images/Q&Apage/Star3.svg",revision:"7073b169d7d31548acd38d08fb5995e9"},{url:"/images/Q&Apage/message.svg",revision:"7c32e2d268badeffd10505d0895cce90"},{url:"/images/Q&Apage/question_img.svg",revision:"68e033c69870395498d4ffb53db8f159"},{url:"/images/article-card.png",revision:"941dd406ab4ec35fbe8c494c0d61161f"},{url:"/images/article-detail.png",revision:"b4d0e3b45713e0a1f8c0bbde0efddac5"},{url:"/images/article-image.png",revision:"63156bc624b70e23023e2ce984b753bd"},{url:"/images/article-list.png",revision:"b7be3b1ee190675a1f159c34f0b0f030"},{url:"/images/audio-module-image.png",revision:"aeedc5ac162ca5b75e08474fcf9ad705"},{url:"/images/header-background.png",revision:"deace6589a2da4fb2fe1787ca51891b7"},{url:"/images/hero.png",revision:"ee236825888679eb458f7ce637669aa0"},{url:"/images/iant-logo.png",revision:"f16103df4597a2093db95544c3f59cbb"},{url:"/images/lesson-card.png",revision:"3d5b2b7a7cbc2a50d7ba2325f5b9b675"},{url:"/images/lesson1.png",revision:"1795a25cfa775feb4845fd55cfb54215"},{url:"/images/lesson2.png",revision:"4f58121f9643b60734f1378d55936eca"},{url:"/images/mani-bg.png",revision:"7da9f8a010f4c9f16edaa8d7f7544838"},{url:"/images/meetings-card.png",revision:"8f0ba666c0cdcf288c0eebc730562a40"},{url:"/images/teacher.png",revision:"02e43436d4df0c6a5a3022c7f3d9d59c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
