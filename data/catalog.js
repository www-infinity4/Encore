// Playback policy: R-rated and age-restricted movie entries are excluded from this channel rotation.
// Encore is strictly 1980-1999. Every enabled source was checked for a
// full-length runtime and playable YouTube embedding when this list was made.
window.HERMIT_CATALOG = [
  { id:"ENC-001", title:"Masters of the Universe", year:1987, collection:"Fantasy Adventure", runtimeSeconds:6346, videoId:"NTG2PESRurY", source:"YouTube Movies", networkChannel:"Encore", cleared:true },
  { id:"ENC-002", title:"UHF", year:1989, collection:"Cult Comedy", runtimeSeconds:5833, videoId:"uAiyO8oEG4E", source:"YouTube Movies", networkChannel:"Encore", cleared:true },
  { id:"ENC-005", title:"The Karate Kid", year:1984, collection:"Feel-Good Classic", runtimeSeconds:7616, videoId:"-slifyirmX0", source:"YouTube Movies", networkChannel:"Encore", cleared:true },
  { id:"ENC-006", title:"The Dark Crystal", year:1982, collection:"Fantasy World", runtimeSeconds:5596, videoId:"4XMRm9igLGo", source:"YouTube Movies", networkChannel:"Encore", cleared:true },
  { id:"ENC-007", title:"Labyrinth", year:1986, collection:"Fantasy Adventure", runtimeSeconds:6072, videoId:"lL_Q0VtrTxU", source:"YouTube Movies", networkChannel:"Encore", cleared:true },
  { id:"ENC-008", title:"Bill & Ted's Excellent Adventure", year:1989, collection:"Time-Travel Comedy", runtimeSeconds:5390, videoId:"a72W8hP9QNE", source:"YouTube Movies", networkChannel:"Encore", cleared:true },
  { id:"ENC-009", title:"Bill & Ted's Bogus Journey", year:1991, collection:"Afterlife Adventure", runtimeSeconds:5633, videoId:"2nwyLnPj6SI", source:"YouTube Movies", networkChannel:"Encore", cleared:true },
  { id:"ENC-014", title:"Deathtrap", year:1982, collection:"Mystery Classic", runtimeSeconds:6968, videoId:"t9w1izfm9qI", source:"YouTube Movies", networkChannel:"Encore", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"Encore",
  era:"1980-1999",
  strictEra:true,
  schedulePolicy:"No title or YouTube video ID may air on another Infinity channel on the same station date."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Encore intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Encore", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Encore station break", durationSeconds:60, videoId:"", cleared:true }
];

(function syncInfinityChannels(){
  if (document.querySelector('script[data-infinity-channels]')) return;
  const script = document.createElement('script');
  script.src = 'https://www-infinity4.github.io/TNT/channels.js';
  script.dataset.infinityChannels = '1';
  document.head.appendChild(script);
})();
