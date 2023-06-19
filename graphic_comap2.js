
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
const MAX_DATA_POINTS_rpm = 12; //////////////////////////// end gioi han diem
let intervalId_rpm = setInterval(updateChart_rpm, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
function updateInterval_rpm(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_rpm); ////////////////////////////////////////// chinh sua so 3
  intervalId_rpm = setInterval(updateChart_rpm, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_rpm = document.getElementById("myChart_rpm").getContext("2d");
const myChart_rpm = new Chart(ctx_rpm, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "TỐC ĐỘ ĐỘNG CƠ",
        data: [],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'RPM'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'THỜI GIAN'
        }
      }
    },
}
} );
	


database

.ref("/comap")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_rpm.data.labels.push(time2);
myChart_rpm.data.datasets[0].data.push(voltage2.rpm.data);
// myChart_rpm.data.datasets[0].data.push(voltage2.data);
myChart_rpm.update();
});

function updateChart_rpm() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
   document.getElementById("time-label_rpm").innerHTML = " Đồ thị tốc độ động cơ cập nhật lúc" + timeString2;
  database
  .ref("/comap")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_rpm.data.labels.push(time2);
  // myChart_rpm.data.datasets[0].data.push(voltage2.data);
  myChart_rpm.data.datasets[0].data.push(voltage2.rpm.data);
  if (myChart_rpm.data.labels.length > MAX_DATA_POINTS_rpm) {//////////////////////////////////////// end gioi han diem
    myChart_rpm.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_rpm.data.datasets[0].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }//////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_rpm.update();
  });
  }




/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
// const MAX_DATA_POINTS = 5; //////////////////////////// end gioi han diem

const MAX_DATA_POINTS_fuel = 12; //////////////////////////// end gioi han diem
var Mucdaudaybinh = 100;
let intervalId_fuel = setInterval(updateChart_fuel, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
function updateInterval_fuel(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_fuel); ////////////////////////////////////////// chinh sua so 3
  intervalId_fuel = setInterval(updateChart_fuel, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_fuel = document.getElementById("myChart_fuel").getContext("2d");
const myChart_fuel = new Chart(ctx_fuel, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "NHIÊN LIỆU",
        data: [],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'L'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'THỜI GIAN'
        }
      }
    },
}
} );
	
document.getElementById("time-label_fuel").innerHTML = " Đồ thị mức tiêu hao nhiên liệu  " 
database.ref('/comap/fuel/data').once("value", function(snapshot) { 
var oilLevel = snapshot.val();
var oilConsumption = Mucdaudaybinh - oilLevel;
document.getElementById("time-label_fuel2").innerHTML = "Lượng dầu còn lại :  " + oilConsumption  + " lit" ;
})

database
.ref("/comap")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_fuel.data.labels.push(time2);
myChart_fuel.data.datasets[0].data.push(voltage2.fuel.data);
myChart_fuel.update();
});

function updateChart_fuel() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  database.ref('/comap/fuel/data').once("value", function(snapshot) { 
    var oilLevel = snapshot.val();
    var oilConsumption = Mucdaudaybinh - oilLevel;
    document.getElementById("time-label_fuel2").innerHTML = "Lượng dầu còn lại :  " + oilConsumption  + " lit" ;
    })
   document.getElementById("time-label_fuel").innerHTML = " Đồ thị mức tiêu hao nhiên liệu cập nhật lúc " + timeString2;
  database
  .ref("/comap")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_fuel.data.labels.push(time2);
  myChart_fuel.data.datasets[0].data.push(voltage2.fuel.data);
    if (myChart_fuel.data.labels.length > MAX_DATA_POINTS_fuel) {//////////////////////////////////////// end gioi han diem
    myChart_fuel.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_fuel.data.datasets[0].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }//////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_fuel.update();
  });
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
// const MAX_DATA_POINTS = 5; //////////////////////////// end gioi han diem

const MAX_DATA_POINTS_battery = 12; //////////////////////////// end gioi han diem
let intervalId_battery = setInterval(updateChart_battery, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
function updateInterval_battery(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_battery); ////////////////////////////////////////// chinh sua so 3
  intervalId_battery = setInterval(updateChart_battery, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_battery = document.getElementById("myChart_battery").getContext("2d");
const myChart_battery = new Chart(ctx_battery, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "ACQUY",
        data: [],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'V'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'THỜI GIAN'
        }
      }
    },
}
} );
	
document.getElementById("time-label_battery").innerHTML = "Đồ thị dung lượng bình acquy " 

database
.ref("/comap")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_battery.data.labels.push(time2);
myChart_battery.data.datasets[0].data.push(voltage2.battery.data);
myChart_battery.update();
});

function updateChart_battery() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
   document.getElementById("time-label_battery").innerHTML = " Đồ thị dung lượng bình acquy cập nhật lúc " + timeString2;
  database
  .ref("/comap")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_battery.data.labels.push(time2);
  myChart_battery.data.datasets[0].data.push(voltage2.battery.data);
    if (myChart_battery.data.labels.length > MAX_DATA_POINTS_battery) {//////////////////////////////////////// end gioi han diem
    myChart_battery.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_battery.data.datasets[0].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }//////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_battery.update();
  });
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
const MAX_DATA_POINTS_temp = 12; //////////////////////////// end gioi han diem
let intervalId_temp = setInterval(updateChart_temp, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
function updateInterval_temp(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_temp); ////////////////////////////////////////// chinh sua so 3
  intervalId_temp = setInterval(updateChart_temp, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_temp = document.getElementById("myChart_temp").getContext("2d");
const myChart_temp = new Chart(ctx_temp, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "NHIỆT ĐỘ",
        data: [],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: '*C'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'THỜI GIAN'
        }
      }
    },
}
} );
	
document.getElementById("time-label_temp").innerHTML = "Đồ thị nhiệt độ " 

database
.ref("/comap")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_temp.data.labels.push(time2);
myChart_temp.data.datasets[0].data.push(voltage2.temp.data);
myChart_temp.update();
});

function updateChart_temp() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
   document.getElementById("time-label_temp").innerHTML = "Đồ thị nhiệt độ cập nhật lúc " + timeString2;
  database
  .ref("/comap")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_temp.data.labels.push(time2);
  myChart_temp.data.datasets[0].data.push(voltage2.temp.data);
    if (myChart_temp.data.labels.length > MAX_DATA_POINTS_temp) {//////////////////////////////////////// end gioi han diem
    myChart_temp.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_temp.data.datasets[0].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }//////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_temp.update();
  });
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
const MAX_DATA_POINTS_oil = 12; //////////////////////////// end gioi han diem
let intervalId_oil = setInterval(updateChart_oil, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
function updateInterval_oil(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_oil); ////////////////////////////////////////// chinh sua so 3
  intervalId_oil = setInterval(updateChart_oil, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_oil = document.getElementById("myChart_oil").getContext("2d");
const myChart_oil = new Chart(ctx_oil, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "ÁP LỰC NHỚT",
        data: [],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'BAR'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'THỜI GIAN'
        }
      }
    },
}
} );
	
document.getElementById("time-label_oil").innerHTML = "Đồ thị áp lực nhớt " 

database
.ref("/comap")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_oil.data.labels.push(time2);
myChart_oil.data.datasets[0].data.push(voltage2.oil.data);
myChart_oil.update();
});

function updateChart_oil() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
   document.getElementById("time-label_oil").innerHTML = "Đồ thị áp lực nhớt cập nhật lúc " + timeString2;
  database
  .ref("/comap")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_oil.data.labels.push(time2);
  myChart_oil.data.datasets[0].data.push(voltage2.oil.data);
    if (myChart_oil.data.labels.length > MAX_DATA_POINTS_oil) {//////////////////////////////////////// end gioi han diem
    myChart_oil.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_oil.data.datasets[0].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }//////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_oil.update();
  });
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
const MAX_DATA_POINTS_co2 = 12; //////////////////////////// end gioi han diem
let intervalId_co2 = setInterval(updateChart_co2, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
function updateInterval_oil(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_co2); ////////////////////////////////////////// chinh sua so 3
  intervalId_co2 = setInterval(updateChart_co2, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_co2 = document.getElementById("myChart_co2").getContext("2d");
const myChart_co2 = new Chart(ctx_co2, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "CO2",
        data: [],
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'PPM'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'THỜI GIAN'
        }
      }
    },
}
} );
	


document.getElementById("time-label_co2").innerHTML = "Đồ thị nông độ co2 " 

database
.ref("/comap")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_co2.data.labels.push(time2);
myChart_co2.data.datasets[0].data.push(voltage2.co2.data);
myChart_co2.update();
});

function updateChart_co2() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
   document.getElementById("time-label_co2").innerHTML = "Đồ thị nông độ CO2 cập nhật lúc " + timeString2;
  database
  .ref("/comap")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_co2.data.labels.push(time2);
  myChart_co2.data.datasets[0].data.push(voltage2.co2.data);
    if (myChart_co2.data.labels.length > MAX_DATA_POINTS_co2) {//////////////////////////////////////// end gioi han diem
    myChart_co2.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_co2.data.datasets[0].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }//////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_co2.update();
  });
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end
/////////////////////////////////////////////////////////////////////////////////////////////////////////// start
/////////////////////////////////////////////////////////////////////////////////////////////////////////// end