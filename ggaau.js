
var firebaseRef = firebase.database().ref("/comap/fuel/data");
firebaseRef.on("value", function(snapshot) {
  var valueFromFirebase = snapshot.val();
  data[0].value = valueFromFirebase;
  Plotly.redraw('myDiv1');
});
var data = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    title: { text: "Nhiên liệu còn lại(%)", font: { size: 24 } },
    // delta: { reference: 200, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "RGBA( 0, 255, 255, 1 )" },
      bgcolor: "red",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 10], color: "red" },
        { range: [10, 30], color: "orange" },
        { range: [30, 100], color: "RGBA( 127, 255, 0, 1 )" }
      ],
      threshold: {
        line: { color: "red", width: 40 },
        thickness: 2,
        // value: 490
      }
    }
    
  }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var firebaseRef = firebase.database().ref("/comap/battery/data");

firebaseRef.on("value", function(snapshot) {
  var valueFromFirebase = snapshot.val();
  data2[0].value = valueFromFirebase;
  Plotly.redraw('myDiv2');
});
var data2 = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    value: 200,
    title: { text: "ACQUY(V)", font: { size: 24 } },
    // delta: { reference: 200, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 30], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "RGBA( 0, 255, 255, 1 )" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0,10], color: "rgb(255, 0, 0)" },
        { range: [10, 20], color: "RGBA( 255, 215, 0, 1 )" },
        { range: [20, 30], color: "RGBA( 127, 255, 0, 1 )" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        // value: 490
      }
    }
  }
];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var firebaseRef = firebase.database().ref("/comap/rpm/data");
firebaseRef.on("value", function(snapshot) {
  var valueFromFirebase = snapshot.val();
  data3[0].value = valueFromFirebase;
  Plotly.redraw('myDiv3');
});
var data3 = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    title: { text: "RPM(V/P)", font: { size: 24 } },
    // delta: { reference: 200, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [1000, 1700], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "RGBA( 0, 255, 255, 1 )" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [1490, 1520], color: "RGBA( 127, 255, 0, 1 )" },
        { range: [1520, 1600], color: "RGBA( 255, 215, 0, 1 )" },
        { range: [1600, 1700], color: "rgb(255, 0, 0)" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
      }
    }
  }
];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var firebaseRef = firebase.database().ref("/comap/co2/data");
firebaseRef.on("value", function(snapshot) {
  var valueFromFirebase = snapshot.val();
  data4[0].value = valueFromFirebase;
  Plotly.redraw('myDiv4');
});
var data4 = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    title: { text: "PPM", font: { size: 24 } },
    // delta: { reference: 200, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 50], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "RGBA( 0, 255, 255, 1 )" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0,9], color: "RGBA( 127, 255, 0, 1 )" },
        { range: [9, 35], color: "RGBA( 255, 215, 0, 1 )" },
        { range: [35, 50], color: "rgb(255, 0, 0)" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
      }
    }
  }
];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////
var firebaseRef = firebase.database().ref("/comap/temp/data");
firebaseRef.on("value", function(snapshot) {
  var valueFromFirebase = snapshot.val();
  data5[0].value = valueFromFirebase;
  Plotly.redraw('myDiv5');
});
var data5 = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    title: { text: "Nhiệt độ(*C)", font: { size: 24 } },
    // delta: { reference: 200, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "RGBA( 0, 255, 255, 1 )" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0,80], color: "RGBA( 127, 255, 0, 1 )" },
        { range: [80, 95], color: "RGBA( 255, 215, 0, 1 )" },
        { range: [95, 100], color: "rgb(255, 0, 0)" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
      }
    }
  }
];


/////////////////////////////////
///////////////////////////////
var firebaseRef = firebase.database().ref("/comap/oil/data");
firebaseRef.on("value", function(snapshot) {
  var valueFromFirebase = snapshot.val();
  data6[0].value = valueFromFirebase;
  Plotly.redraw('myDiv6');
});
var data6 = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    title: { text: "Áp lực nhớt(bar)", font: { size: 24 } },
    // delta: { reference: 200, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "RGBA( 0, 255, 255, 1 )" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0,3], color: "red" },
        { range: [3, 5], color: "RGBA( 127, 255, 0, 1 )" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
      }
    }
  }
];



var currentTime3 = new Date();
var timeString3 = currentTime3.toLocaleTimeString();
document.getElementById("time-label_oil").innerHTML = "Đồ thị áp lực nhớt cập nhật lúc " + timeString3;
document.getElementById("time-label_temp").innerHTML = "Đồ thị nhiệt độ nước làm mát cập nhật lúc " + timeString3;
document.getElementById("time-label_co2").innerHTML = "Đồ thị nồng độ khí CO cập nhật lúc " + timeString3;
  document.getElementById("time-label_rpm").innerHTML = "Đồ thị tốc độ động cơ cập nhật lúc " + timeString3;
    document.getElementById("time-label_fuel").innerHTML = "Đồ thị nhiên liệu cập nhật lúc " + timeString3;
    document.getElementById("time-label_battery").innerHTML = "Đồ thị dung lượng acquy cập nhật lúc " + timeString3;
function updateTime3() {
  var currentTime3 = new Date();
  var timeString3 = currentTime3.toLocaleTimeString();
  document.getElementById("time-label_oil").innerHTML = "Đồ thị áp lực nhớt cập nhật lúc " + timeString3;
  document.getElementById("time-label_temp").innerHTML = "Đồ thị nhiệt độ nước làm mát cập nhật lúc " + timeString3;
  document.getElementById("time-label_co2").innerHTML = "Đồ thị nồng độ khí CO cập nhật lúc " + timeString3;
    document.getElementById("time-label_rpm").innerHTML = "Đồ thị tốc độ động cơ cập nhật lúc " + timeString3;
      document.getElementById("time-label_fuel").innerHTML = "Đồ thị nhiên liệu cập nhật lúc " + timeString3;
      document.getElementById("time-label_battery").innerHTML = "Đồ thị dung lượng acquy cập nhật lúc " + timeString3;
}
setInterval(updateTime3, 5000);
/////////////////////////
var layout1 = {
  width: 500,
  height: 400,
  // margin: { t: 25, r: 25, l: 25, b: 25 },
  paper_bgcolor: "RGBA( 224, 255, 255, 1 )",
  font: { color: "darkblue", family: "Arial" }
};
Plotly.newPlot('myDiv1', data, layout1);
Plotly.newPlot('myDiv2', data2, layout1);
Plotly.newPlot('myDiv3', data3, layout1);
Plotly.newPlot('myDiv4', data4, layout1);
Plotly.newPlot('myDiv5', data5, layout1);
Plotly.newPlot('myDiv6', data6, layout1);