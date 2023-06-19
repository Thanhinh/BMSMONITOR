/////////////////////////////////////////////// start lay thong so 
database.ref("/ats/vphaseats/v1nats/data").on("value" , function(snapshot){
  var dienap1 = snapshot.val();
  document.getElementById("dienapV1N_NL").innerHTML = dienap1;
}); 
  /////////////////////////////////////////////// end lay thong so 
  /////////////////////////////////////////////// start lay thong so 
  database.ref("/ats/vphaseats/v2nats/data").on("value" , function(snapshot){
    var dienap1 = snapshot.val();
    document.getElementById("dienapV2N_NL").innerHTML = dienap1;
  }); 
  /////////////////////////////////////////////// end lay thong so 
  /////////////////////////////////////////////// start lay thong so 
  database.ref("/ats/vphaseats/v3nats/data").on("value" , function(snapshot){
    var dienap1 = snapshot.val();
    document.getElementById("dienapV3N_NL").innerHTML = dienap1;
  }); 
  /////////////////////////////////////////////// end lay thong so 
  /////////////////////////////////////////////// start lay thong so 
  database.ref("/ats/vwireats/v12ats/data").on("value" , function(snapshot){
    var dienap1 = snapshot.val();
    document.getElementById("dienapV12_NL").innerHTML = dienap1;
  }); 
  /////////////////////////////////////////////// end lay thong so 
  /////////////////////////////////////////////// start lay thong so 
  database.ref("/ats/vwireats/v23ats/data").on("value" , function(snapshot){
    var dienap1 = snapshot.val();
    document.getElementById("dienapV23_NL").innerHTML = dienap1;
  }); 
  /////////////////////////////////////////////// end lay thong so 
  /////////////////////////////////////////////// start lay thong so 
  database.ref("/ats/vwireats/v13ats/data").on("value" , function(snapshot){
    var dienap1 = snapshot.val();
    document.getElementById("dienapV13_NL").innerHTML = dienap1;
  }); 
  /////////////////////////////////////////////// end lay thong so 
  /////////////////////////////////////////////// start lay thong so 
  database.ref("/ats/fats/data").on("value" , function(snapshot){
    var dienap1 = snapshot.val();
    document.getElementById("tansoF_NL").innerHTML = dienap1;
  }); 
  database.ref("/ats/vphasegen/v1ngen/data").on("value" , function(snapshot){
    var dienap1 = snapshot.val();
    document.getElementById("dienapV1N_gen").innerHTML = dienap1;
  }); 
    /////////////////////////////////////////////// end lay thong so 
    /////////////////////////////////////////////// start lay thong so 
    database.ref("/ats/vphasegen/v2ngen/data").on("value" , function(snapshot){
      var dienap1 = snapshot.val();
      document.getElementById("dienapV2N_gen").innerHTML = dienap1;
    }); 
    /////////////////////////////////////////////// end lay thong so 
    /////////////////////////////////////////////// start lay thong so 
    database.ref("/ats/vphasegen/v3ngen/data").on("value" , function(snapshot){
      var dienap1 = snapshot.val();
      document.getElementById("dienapV3N_gen").innerHTML = dienap1;
    }); 
    database.ref("/ats/vwiregen/v12gen/data").on("value" , function(snapshot){
      var dienap1 = snapshot.val();
      document.getElementById("dienapV12_gen").innerHTML = dienap1;
    }); 
    /////////////////////////////////////////////// end lay thong so 
    /////////////////////////////////////////////// start lay thong so 
    database.ref("/ats/vwiregen/v23gen/data").on("value" , function(snapshot){
      var dienap1 = snapshot.val();
      document.getElementById("dienapV23_gen").innerHTML = dienap1;
    }); 
    /////////////////////////////////////////////// end lay thong so 
    /////////////////////////////////////////////// start lay thong so 
    database.ref("/ats/vwiregen/v13gen/data").on("value" , function(snapshot){
      var dienap1 = snapshot.val();
      document.getElementById("dienapV13_gen").innerHTML = dienap1;
    }); 
    database.ref("/ats/fgen/data").on("value" , function(snapshot){
      var dienap11 = snapshot.val();

      document.getElementById("tansoF_gen").innerHTML = dienap11;
    }); 
