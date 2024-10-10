'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cf2328f203ceb15d448867215dd94f2b",
"assets/AssetManifest.bin.json": "f048ef2fba8f3b26b38b534118ef0317",
"assets/AssetManifest.json": "403169beddd75e8e3ee113e75a2344a2",
"assets/assets/images/Abhay.jpg": "f50167aa471ebfc65d2dae46ab0d7684",
"assets/assets/images/Abhijat.jpg": "704e845c649757231457d02799347077",
"assets/assets/images/Aditya.jpg": "c5cc270ff03e20ac29accfc03ca302f7",
"assets/assets/images/Amit.jpg": "2a3079f282b07b80a118fb1ce3f05826",
"assets/assets/images/AnanyaV1.jpg": "7214321c213d912f9a291c610342d70e",
"assets/assets/images/AnanyaV2.jpg": "07dccecbaf52809aa88f81eb96b40c3b",
"assets/assets/images/Arnav.jpg": "1c4c73fcc0cfeb438b640267bbcc4b12",
"assets/assets/images/Aryamaan.jpg": "49c56f8ae72cd0a3cc59c67f79518ef0",
"assets/assets/images/Asmi.jpg": "c1ebf68dd52e0c60dcacb7058efb05bd",
"assets/assets/images/Ayushmaan.jpg": "2759198c03f4640c9b658d87424e506e",
"assets/assets/images/Bhumi.jpg": "99ea2800dc2365ff7d8f7064d8211a21",
"assets/assets/images/Chinmay.jpg": "c86efbd5b8442b045ba9537eda3dbc84",
"assets/assets/images/Dev.jpg": "2b9e38927e624d3b158e83f178130128",
"assets/assets/images/Dhruvi.jpg": "af043f1687458687355bf2f167577b58",
"assets/assets/images/Hari.jpg": "c8379726c6b6197a573ae1803aae04f7",
"assets/assets/images/Harsh.jpg": "d79748b5cf2291cb6b4da593e184f420",
"assets/assets/images/Kanika.jpg": "e3f26674915087aa629ec0bb4fff9a6c",
"assets/assets/images/Mahesh.jpg": "0b77ec60f5bb1343589e8f5b7ddf38c7",
"assets/assets/images/Manan.jpg": "2e9e8558eb4b4e86c58721162b1628f6",
"assets/assets/images/Manish.jpg": "12693611c525285327d24bcc24daaa65",
"assets/assets/images/Panav.jpg": "6b8943ef96e0b9061a1ef2df7ced9660",
"assets/assets/images/Pranav.jpg": "80238c608877c035e2d61c26acafd0be",
"assets/assets/images/Prathmesh.jpg": "468381d64e42f9fa28d5af312e3ce8e5",
"assets/assets/images/Priyam.jpg": "a3dc45e540cfcc11fc0d7cb85c5c3199",
"assets/assets/images/Rakshit.jpg": "faf40177c4c10ddd1e28f6268ca67466",
"assets/assets/images/Ritesh.jpg": "fc326a2ca349bbad3aca2a56fff7cb4c",
"assets/assets/images/Ronak.jpg": "e226104e69e14f669b29645587c9c088",
"assets/assets/images/Sajjad.jpg": "d0d231b6873dba9054c47e8edd805d34",
"assets/assets/images/Satyam.jpg": "5bee0c876c3cbca6b904d37928415ef6",
"assets/assets/images/Senjeet.jpg": "0f6438df5ef7f081b8fd739e813022c4",
"assets/assets/images/Shaurya.jpg": "6a5b1217aa0de08f2f52049d6c52d918",
"assets/assets/images/Shivtej.jpg": "7656a13efa7188ee4f55df3bd05c44a6",
"assets/assets/images/Sreehari.jpg": "1c14a2e5dc38e3e95d81b6d7ccde5024",
"assets/assets/images/Tanmay.jpg": "3b9f77025e2e3f7a3fcbd33f11a4aa2f",
"assets/assets/images/Tarus.jpg": "ecb10afd01113b5d19aaabd61f9f19f9",
"assets/assets/images/Vaibhav.jpg": "2bb5003b6e0f89fe29a6c024a6e5f325",
"assets/assets/images/Vidit.jpg": "fc0422c2e353920b510ab3399a7b2e1d",
"assets/assets/images/Vivek.jpg": "a196f59db07df402f8bf3fd904863ffc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6256cc3fcac20152ce4bc3c4f707ba",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "8c52826867abc99cdd52b07a319a4bdc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b4077a166d78123db1e18759a01ac582",
"/": "b4077a166d78123db1e18759a01ac582",
"main.dart.js": "282759fe3dc7ce550b0cd9ddcd453cbe",
"manifest.json": "902cdd50bdfab9f85c397de3c978a383",
"version.json": "5e44b557a26b0b3a8afb4f07cbc833f2"};
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
