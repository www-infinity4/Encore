// Unique seed bucket 7/8 for Encore.
// Control Phi's movie source farm expands this channel toward 96 distinct,
// profile-matched full movies. The seed IDs are never shared with another
// movie-channel seed catalog.
(function(){
  "use strict";

  const rows = [
    ["Daddy Daughter Trip",5795,"fIhM9MiEN50","Movie Central"],
    ["Mayberry Man",5927,"a_AwfI9TPY8","EncourageTV"],
    ["Bunyan & Babe",5093,"_f9pyIOgrAs","Family Central"],
    ["The Tree That Saved Christmas",5283,"7jhgkEuCfiQ","Family Central"],
    ["Camp Cool Kids",6265,"y428AwGDCnE","Family Central"],
    ["Finding Callaro",4768,"2_Cej0gyVhY","Family Central"],
    ["Santa Claws",5188,"pwOPU84i538","Family Central"],
    ["The Last Warrior",5628,"1y1B03RysOc","Shout! Studios"],
    ["Mee-Shee: The Water Giant",5664,"jAYtNYu5pp4","FilmRise Movies"]
  ];

  window.HERMIT_CATALOG=rows.map(function(row,index){return{id:"ENCORE-SEED-"+String(index+1).padStart(3,"0"),title:row[0],year:null,collection:"1980s / 1990s Seed",runtimeSeconds:row[1],videoId:row[2],source:row[3],networkChannel:"Encore",contentClass:"Seed Feature",rating:"Unrated",cleared:true,posterUrl:""};});
  window.INFINITY_CHANNEL={id:"ENCORE",sourcePolicy:"Unique static seed bucket 7/8. Runtime catalog expansion comes from Encore's own Control Phi source profile.",schedulePolicy:"Seven-day no-repeat scheduler. Missing inventory stays empty until unique sources are harvested; it never wraps the seed list."};
  window.HERMIT_COMMERCIALS=[{id:"AD-001",title:"Encore intermission",durationSeconds:60,videoId:"",cleared:true}];
})();
