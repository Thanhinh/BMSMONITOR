// ////////////////////////////////////////////////////////////////////////////////////////////start do thi v-phase
// const ctx_V = document.getElementById("myChart_V").getContext("2d");
//       const myChart_V = new Chart(ctx_V, {
//         type: "line",
//         data: {
//           labels: [],
//           datasets: [
//             {
//               label: "V1",
//               data: [],
//               borderColor: "red",
//               fill: false,
//             },
//             {
//               label: "V2",
//               data: [],
//               borderColor: "green",
//               fill: false,
//             },
//             {
//               label: "V3",
//               data: [],
//               borderColor: "blue",
//               fill: false,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               title: {
//                 display: true,
//                 text: 'V'
//               },
//               ticks: {
//                 beginAtZero: true
//               }
//             },
//             x: {
//               title: {
//                 display: true,
//                 text: 'Thời gian'
//               }
//             }
//           },
//       }});
//       database
//       .ref("/mfm383a/vphase")
//       .once("value")
//       .then((snapshot) => {
//         const voltage = snapshot.val();
//         const time = new Date().toLocaleTimeString();
//         myChart_V.data.labels.push(time);
//         myChart_V.data.datasets[0].data.push(voltage.v1n);
//         myChart_V.data.datasets[1].data.push(voltage.v2n);
//         myChart_V.data.datasets[2].data.push(voltage.v3n);
//         myChart_V.update();
//       });
//       setInterval(() => {
//         var currentTime = new Date();
//         var timeString = currentTime.toLocaleTimeString();
//         document.getElementById("time-label_V").innerHTML = "Lần cuối cập nhật  " + timeString;

//         database
//           .ref("/mfm383a/vphase")
//           .once("value")
//           .then((snapshot) => {
//             const voltage = snapshot.val();
//             const time = new Date().toLocaleTimeString();
//             myChart_V.data.labels.push(time);
//             myChart_V.data.datasets[0].data.push(voltage.v1n);
//             myChart_V.data.datasets[1].data.push(voltage.v2n);
//             myChart_V.data.datasets[2].data.push(voltage.v3n);
//             myChart_V.update();
//           });
//       }, 5000);

// ////////////////////////////////////////////////////////////////////////////////////////////end do thi v-phase
// // muốn cập nhật theo ngày thì coppy đoạn code trong thời gian 5s lên
// ////////////////////////////////////////////////////////////////////////////////////////////start do thi p
// const ctx_P = document.getElementById("myChart_mfm_P").getContext("2d");
//       const myChart_P = new Chart(ctx_P, {
//         type: "line",
//         data: {
//           labels: [],
//           datasets: [
//             {
//               label: "P1",
//               data: [],
//               borderColor: "red",
//               fill: false,
//             },
//             {
//               label: "P2",
//               data: [],
//               borderColor: "green",
//               fill: false,
//             },
//             {
//               label: "P3",
//               data: [],
//               borderColor: "blue",
//               fill: false,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               title: {
//                 display: true,
//                 text: 'P(w)'
//               },
//               ticks: {
//                 beginAtZero: true
//               }
//             },
//             x: {
//               title: {
//                 display: true,
//                 text: 'Thời gian'
//               }
//             }
//           },
//       }});
//       database
//       .ref("/P")
//       .once("value")
//       .then((snapshot) => {
//         const voltage = snapshot.val();
//         const time = new Date().toLocaleTimeString();
//         myChart_P.data.labels.push(time);
//         myChart_P.data.datasets[0].data.push(voltage.P1);
//         myChart_P.data.datasets[1].data.push(voltage.P2);
//         myChart_P.data.datasets[2].data.push(voltage.P3);
//         myChart_P.update();
//       });
//       setInterval(() => {
//         var currentTime = new Date();
//         var timeString = currentTime.toLocaleTimeString();
//         document.getElementById("time-label_mfm_P").innerHTML = "Lần cuối cập nhật  " + timeString;

//         database
//           .ref("/P")
//           .once("value")
//           .then((snapshot) => {
//             const voltage = snapshot.val();
//             const time = new Date().toLocaleTimeString();
//             myChart_P.data.labels.push(time);
//             myChart_P.data.datasets[0].data.push(voltage.P1);
//             myChart_P.data.datasets[1].data.push(voltage.P2);
//             myChart_P.data.datasets[2].data.push(voltage.P3);
//             myChart_P.update();
//           });
//       }, 5000);
// ////////////////////////////////////////////////////////////////////////////////////////////end do thi p
// ////////////////////////////////////////////////////////////////////////////////////////////start do thi v-phase
// const ctx_wire = document.getElementById("myChart_mfm_wire").getContext("2d");//sửa lại myChart_mfm_abcxyz,ctx_abcxyz
//       const myChart_wire = new Chart(ctx_wire, { // sửa lại myChart_abczyz, ctx_abcxyz
//         type: "line",
//         data: {
//           labels: [],
//           datasets: [
//             {
//               label: "V1",
//               data: [],
//               borderColor: "red",
//               fill: false,
//             },
//             {
//               label: "V2",
//               data: [],
//               borderColor: "green",
//               fill: false,
//             },
//             {
//               label: "V3",
//               data: [],
//               borderColor: "blue",
//               fill: false,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               title: {
//                 display: true,
//                 text: 'V'
//               },
//               ticks: {
//                 beginAtZero: true
//               }
//             },
//             x: {
//               title: {
//                 display: true,
//                 text: 'Thời gian'
//               }
//             }
//           },
//       }});
//       database
//       .ref("/WIRE")// trỏ đến đường dẫn chứa thông số
//       .once("value")
//       .then((snapshot) => {
//         const voltage = snapshot.val();
//         const time = new Date().toLocaleTimeString();
        
//         myChart_wire.data.labels.push(time);
//         myChart_wire.data.datasets[0].data.push(voltage.V12);// sửa lại khúc đuôi myChart_ABCXYZ với abcxyz là cái mình cần điền
//         // myChart_wire.data.datasets[1].data.push(voltage.V23);// sửa lại cai đuôi voltage. qwe với QWE là nhánh của firebase
//         //myChart_wire.data.datasets[2].data.push(voltage.V31);   
//         myChart_wire.update();
//       });
//       setInterval(() => {
//         var currentTime = new Date();
//         var timeString = currentTime.toLocaleTimeString();
//         document.getElementById("time-label_wire").innerHTML = "Lần cuối cập nhật  " + timeString;/// sửa lại time-label_ABCXYZ với abcxyz là cái mình cần điền

//         database
//           .ref("/WIRE")// trỏ đến đường dẫn chứa thông số
//           .once("value")
//           .then((snapshot) => {
//             const voltage = snapshot.val();
//             const time = new Date().toLocaleTimeString();
            
//             myChart_wire.data.labels.push(time);
//             myChart_wire.data.datasets[0].data.push(voltage.V12);// sửa lại khúc đuôi myChart_ABCXYZ với abcxyz là cái mình cần điền
//             // myChart_wire.data.datasets[1].data.push(voltage.V23);// sửa lại cai đuôi voltage. qwe với QWE là nhánh của firebase
//             //myChart_wire.data.datasets[2].data.push(voltage.V31);   
//             myChart_wire.update();
//           });
//       }, 5000);
// ////////////////////////////////////////////////////////////////////////////////////////////end do thi v-phae

