const btnOn = document.querySelector('.btn-on');
const btnOff = document.querySelector('.btn-off');


btnOn.addEventListener('click', function() {
  btnOn.classList.add('active');
  btnOff.classList.remove('active');
  database.ref("/battat").update({
    "data" : 1 
  });
  
});
btnOff.addEventListener('click', function() {
  btnOff.classList.add('active');
  btnOn.classList.remove('active');
  database.ref("/battat").update({
    "data" : 0 
  });

});

// database.ref("/battat/data").on("value" , function(snapshot){
//     var trangtrai = snapshot.val();
//       database.ref("/ddc/do3/data").on("value" , function(snapshot){
//       var do33 = snapshot.val();
//         database.ref("/ats/vphasegen/v1ngen/data").on("value" , function(snapshot){
//         var dieukienv1 = snapshot.val();
//         database.ref("/ats/vphasegen/v2ngen/data").on("value" , function(snapshot){
//           var dieukienv2 = snapshot.val();
//           database.ref("/ats/vphasegen/v3ngen/data").on("value" , function(snapshot){
//             var dieukienv3 = snapshot.val();
//         if((trangtrai==1  &&  ( dieukienv1>200 || dieukienv2>200 || dieukienv3>200 )) || (  ( dieukienv1>200 && dieukienv2>200 && dieukienv3>200 )) )
//         {
//           // setTimeout(function() {
//             btnOn.classList.add('active');
//             btnOff.classList.remove('active');// Đoạn mã bạn muốn thực thi sau 3 giây ở đây
//           // }, 10000);

//             // database.ref("/battat").update({
//             //   "data" : 0 
//             // });

//         }
//         else
//         // else if(trangtrai==0 ||  dieukienv1<200)
//         {
//             btnOff.classList.add('active');
//             btnOn.classList.remove('active');
//             database.ref("/battat").update({
//               "data" : 0 
//             });
    
//         }    
//         });    
//       })})});



//   }); 

  // database.ref("/battat/data").on("value" , function(snapshot){
  //   var trangtrai = snapshot.val();
  //     database.ref("/ddc/do3/data").on("value" , function(snapshot){
  //     var do33 = snapshot.val();
  //       database.ref("/ats/vphasegen/v1ngen/data").on("value" , function(snapshot){
  //       var dieukienv1 = snapshot.val();
  //       database.ref("/ats/vphasegen/v2ngen/data").on("value" , function(snapshot){
  //         var dieukienv2 = snapshot.val();
  //         database.ref("/ats/vphasegen/v3ngen/data").on("value" , function(snapshot){
  //           var dieukienv3 = snapshot.val();
  //       if((trangtrai==1  &&  ( dieukienv1>200 || dieukienv2>200 || dieukienv3>200 )) || (  ( dieukienv1>200 && dieukienv2>200 && dieukienv3>200 )) )
  //       {
  //         // setTimeout(function() {
  //           btnOn.classList.add('active');
  //           btnOff.classList.remove('active');// Đoạn mã bạn muốn thực thi sau 3 giây ở đây
  //         // }, 10000);

  //           // database.ref("/battat").update({
  //           //   "data" : 0 
  //           // });

  //       }
  //       else
  //       // else if(trangtrai==0 ||  dieukienv1<200)
  //       {
  //           btnOff.classList.add('active');
  //           btnOn.classList.remove('active');
  //           database.ref("/battat").update({
  //             "data" : 0 
  //           });
    
  //       }    
  //       });    
  //     })})});



  // }); 

  /////////////////
  const btnOnn = document.querySelector('.btn-onn');
const btnOfff = document.querySelector('.btn-offf');

btnOnn.addEventListener('click', function() {

  btnOnn.classList.add('activee');
  btnOfff.classList.remove('activee');
  database.ref("/quathut").update({
    "data" : 1 
  });
});

btnOfff.addEventListener('click', function() {
  btnOfff.classList.add('activee');
  btnOnn.classList.remove('activee');
  database.ref("/quathut").update({
    "data" : 0 
  });
});

database.ref("/quathut/data").on("value" , function(snapshot){
  var trangthai = snapshot.val();
 database.ref("/comap/co2/data").on("value", function(snapshot) {
  var dieukienco = snapshot.val();
  database.ref("/ddc/do4/data").on("value" , function(snapshot){
        var do44 = snapshot.val();

    if( trangthai==1 || dieukienco > 50   )
    {
        btnOnn.classList.add('activee');
        btnOfff.classList.remove('activee');
    }
    else 
    {
        btnOfff.classList.add('activee');
        btnOnn.classList.remove('activee');
    }


      });
     
  })}); 