 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/battery/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Battery_Volatge").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/oil/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Oil_Pressure").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/rpm/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("RPM").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/fuel/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Fuel").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/maintain/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Maintain").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/numstart/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Numstart").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/temp/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Temp").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/hour/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Hour").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 
 /////////////////////////////////////////////// start lay thong so 
 database.ref("/comap/co2/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("Co2").innerHTML = dienap1;
});
/////////////////////////////////////////////// end lay thong so 