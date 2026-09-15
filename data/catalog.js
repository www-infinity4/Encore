// Encore resilient catalog: strictly 1980-1999.
// Paid YouTube Movies/DRM listings are excluded. The live rotation uses ordinary
// full-length uploads instead of protected storefront IDs.
window.HERMIT_CATALOG = [
  { id:"ENC-SAFE-001", title:"Super Fuzz", year:1980, collection:"80s Action Comedy", runtimeSeconds:6000, videoId:"V9Fh3jqMZTk", source:"Established full-length upload", networkChannel:"Encore", cleared:true },
  { id:"ENC-SAFE-002", title:"Ator: The Fighting Eagle", year:1982, collection:"80s Fantasy Adventure", runtimeSeconds:5880, videoId:"6wRznqH9IbA", source:"TheArchiveMovies", networkChannel:"Encore", cleared:true },
  { id:"ENC-SAFE-003", title:"Earth Angel", year:1991, collection:"90s Fantasy Comedy", runtimeSeconds:5663, videoId:"jXwC-6tlKqY", source:"TheArchiveMovies", networkChannel:"Encore", cleared:true },
  { id:"ENC-SAFE-004", title:"Black Fox", year:1995, collection:"90s Western Adventure", runtimeSeconds:5520, videoId:"GI2TFFWrBlc", source:"Established full-length upload", networkChannel:"Encore", cleared:true },
  { id:"ENC-SAFE-005", title:"Chairman of the Board", year:1998, collection:"90s Comedy", runtimeSeconds:5735, videoId:"jse-_ROi4sI", source:"Ordinary full-length YouTube upload", networkChannel:"Encore", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"ENCORE",
  era:"1980-1999",
  strictEra:true,
  sourcePolicy:"No YouTube Movies DRM IDs, age-restricted videos, trailers, promos or short clips.",
  schedulePolicy:"Strict 1980-1999 ordinary full-length uploads only."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Encore intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Encore", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Encore station break", durationSeconds:60, videoId:"", cleared:true }
];

(function syncInfinityChannels(){
  if (document.querySelector('script[data-infinity-channels]')) return;
  const script = document.createElement('script');
  script.src = 'https://www-infinity4.github.io/TNT/channels.js?v=20260915-live1';
  script.dataset.infinityChannels = '1';
  document.head.appendChild(script);
})();
