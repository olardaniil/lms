'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "471de7fdfc8cbe6b462f582b3a14c992",
"version.json": "e0baf117d147e462453f22e1de1e586e",
"index.html": "59242d7c1f108182062ee418751ed71c",
"/": "59242d7c1f108182062ee418751ed71c",
"main.dart.js": "53856a32a089b17cec12d83db4fbc490",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "e84d7f1fae3185205dacb05bd20679cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f0b4297948c36196542089b77a609b21",
"assets/AssetManifest.json": "77f8beeace929fb104fd486426ee26b5",
"assets/NOTICES": "6b14832b53a447738b990592a60e6045",
"assets/FontManifest.json": "aef95e1cb700623aa5f63de0152c9c8e",
"assets/AssetManifest.bin.json": "7033f0795fe173321cd7337b637e5c13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b888c3811af399d4de07b294cfa76085",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "aee2afeb7898d8a246d970438420e5cd",
"assets/fonts/MaterialIcons-Regular.otf": "dad2ddfa6b6190c271ea6bbf16fe9e48",
"assets/assets/images/compliance-learn-lesson-banner.png": "4dfbbad3750d7c1a4d6b97129d5d11cc",
"assets/assets/images/base_user_photo.png": "8ceb0e0265f297d6a8d5e4f048f305e2",
"assets/assets/images/img-2.png": "d7a0d30085c4b0e5901912ad6fd4c6e0",
"assets/assets/images/img-1.png": "8b1f9b3a0b36b665b891f6405b9b8b51",
"assets/assets/images/logo.png": "371bd8517c0d3fce1146a27e9de051ec",
"assets/assets/images/compliance-learn-banner.png": "84fd5030510ec668af2a7a8f3bbe3202",
"assets/assets/icons/check-mark-green.png": "74996e2cd1ccde60bd2260a682ef29d2",
"assets/assets/icons/check-mark-grey.png": "97540c6b4dc8be2e709347f3db2c9b44",
"assets/assets/icons/check-mark-purple.png": "76ea7940249e90a9a19e62bd2ac0c2f9",
"assets/assets/icons/player.png": "a975977d3e9bb98b0f852e188243bf32",
"assets/assets/fonts/MTS/MTSWide-Regular.ttf": "fd9daedbda4609ba58a1b0fc5dd14a45",
"assets/assets/fonts/MTS/MTSText-Bold.ttf": "25b23cd423d91466bb8b1c29ed04b843",
"assets/assets/fonts/MTS/MTSCompact-Black.ttf": "3b0ef94e35d602a23f9a760faf4bd805",
"assets/assets/fonts/MTS/MTSCompact-Bold.ttf": "255daf40a6ab3ba418426bccf3ee268e",
"assets/assets/fonts/MTS/MTSCompact-Medium.ttf": "094da059ee4cb33096ccb5aced433578",
"assets/assets/fonts/MTS/MTSCompact-Regular.ttf": "71a393a20158c36f77e76c711c3637db",
"assets/assets/fonts/MTS/MTSText-Black.ttf": "c7908a87c6194943fb796d56a7c53d12",
"assets/assets/fonts/MTS/MTSWide-Black.ttf": "6214c7b8fa2cc9d0b9f09b3335e9e3a1",
"assets/assets/fonts/MTS/MTSWide-Bold.ttf": "3f31d3e985f9c9cdf37fdfeee8f94bcf",
"assets/assets/fonts/MTS/MTSText-Medium.ttf": "0e04fa2f0def3563fa0d4e14e6358f75",
"assets/assets/fonts/MTS/MTSText-Regular.ttf": "7bf251b2e76910f1cc3d12847f6158f3",
"assets/assets/fonts/MTS/MTSWide-Medium.ttf": "34484f013b3ded5f14ee7fb5f21c9d92",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
