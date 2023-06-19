// database.ref("/ats/vphaseats/v1nats/data").on("value", function(snapshot) {
//     var dieukien2 = snapshot.val();
//     if (dieukien2 > 200 && dieukien3 > 200 && dieukien4 > 200 ) {
//       document.getElementById("dungnguon").innerHTML = "NGUỒN LƯỚI";
//     } else if (dieukien2 < 180) {
//       document.getElementById("dungnguon").innerHTML = "NGUỒN MÁY PHÁT";
//     }
//   });
//   database.ref("/ats/vphaseats/v2nats/data").on("value", function(snapshot) {
//     var dieukien3 = snapshot.val();
//     if (dieukien2 > 200 && dieukien3 > 200 && dieukien4 > 200) {
//       document.getElementById("dungnguon").innerHTML = "NGUỒN LƯỚI";
//     } else if (dieukien3 < 180) {
//       document.getElementById("dungnguon").innerHTML = "NGUỒN MÁY PHÁT";
//     }
//   });
//   database.ref("/ats/vphaseats/v3nats/data").on("value", function(snapshot) {
//     var dieukien4 = snapshot.val();
//     if (dieukien2 > 200 && dieukien3 > 200 && dieukien4 > 200) {
//       document.getElementById("dungnguon").innerHTML = "NGUỒN LƯỚI";
//     } else if (dieukien4 < 180) {
//       document.getElementById("dungnguon").innerHTML = "NGUỒN MÁY PHÁT";
//     }
//   });

database.ref("/ats/vphaseats/v1nats/data").on("value", function(snapshot) {
  var dieukien2 = snapshot.val();
database.ref("/ats/vphaseats/v2nats/data").on("value", function(snapshot) {
  var dieukien3 = snapshot.val();

database.ref("/ats/vphaseats/v3nats/data").on("value", function(snapshot) {
  var dieukien4 = snapshot.val();
    if ((dieukien2 > 200 &&  dieukien3 > 200 && dieukien4 > 200)||(dieukien2 > 200) ) {
      document.getElementById("dungnguon").innerHTML = "NGUỒN LƯỚI";}
      if ((dieukien2 < 190 &&  dieukien3 < 190 &&   dieukien4 < 190  ) || (dieukien2 < 190) ) {
        document.getElementById("dungnguon").innerHTML = "NGUỒN MÁY PHÁT";}
})})});
//////////////////////
//////////////////////////////////////////battatquathut
// database.ref("/comap/co2/data").on("value", function(snapshot) {
//   var dieukienco = snapshot.val();
//   if(dieukienco > 50   )
//   {
//     database.ref("/quathut").update({
//       "data" : 1 
//     });
//   }
//   if(dieukienco < 50)
//   {
//     database.ref("/quathut").update({
//       "data" : 0 
//     });
//   }
// });
//////////////////////////////////////////battatquathut