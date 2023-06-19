
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Vstartphase
const MAX_DATA_V= 12;///abc
let updateInterval = 5000;
let intervalId2 = setInterval(updateChart_vphase, updateInterval);
function updateInterval_V(interval) {
  updateInterval = interval * 1000;
  clearInterval(intervalId2);
  intervalId2 = setInterval(updateChart_vphase, updateInterval);
}
const ctx_V = document.getElementById("myChart_mfm_V").getContext("2d");
const myChart_V = new Chart(ctx_V, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "V1N",
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "V2N",
        data: [],
        borderColor: "green",
        fill: false,
      },
      {
        label: "V3N",
        data: [],
        borderColor: "blue",
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
          text: 'Thời gian'
        }
      }
    },
}
} );


database
  .ref("/mfm383a/vphase")
  .once("value")
  .then((snapshot) => {
  const voltage = snapshot.val();
  const time = new Date().toLocaleTimeString();
  myChart_V.data.labels.push(time);
  myChart_V.data.datasets[0].data.push(voltage.v1n.data);
  myChart_V.data.datasets[1].data.push(voltage.v2n.data);
  myChart_V.data.datasets[2].data.push(voltage.v3n.data);
  myChart_V.update();
  });



function updateChart_vphase() {
  var currentTime = new Date();
  var timeString = currentTime.toLocaleTimeString();
  document.getElementById("time-label_V").innerHTML = "Đồ thị điện áp pha theo thời gian vào lúc " + timeString;
  
  database
  .ref("/mfm383a/vphase")
  .once("value")
  .then((snapshot) => {
  const voltage = snapshot.val();
  const time = new Date().toLocaleTimeString();
  myChart_V.data.labels.push(time);
  myChart_V.data.datasets[0].data.push(voltage.v1n.data);
  myChart_V.data.datasets[1].data.push(voltage.v2n.data);
  myChart_V.data.datasets[2].data.push(voltage.v3n.data);
  if (myChart_V.data.labels.length > MAX_DATA_V) {//////////////////////////////////////// end gioi han diem
    myChart_V.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_V.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_V.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_V.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_V.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// end Vphase


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// start Vwire
let intervalId3 = setInterval(updateChart_wire, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
const MAX_DATA_wire = 12;///abc
function updateInterval_wire(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId3); ////////////////////////////////////////// chinh sua so 3
  intervalId3 = setInterval(updateChart_wire, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_wire = document.getElementById("myChart_mfm_wire").getContext("2d");
const myChart_wire = new Chart(ctx_wire, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "V12",
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "V23",
        data: [],
        borderColor: "green",
        fill: false,
      },
      {
        label: "V13",
        data: [],
        borderColor: "blue",
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
          text: 'Thời gian'
        }
      }
    },
}
} );

  
database
.ref("/mfm383a/vwire")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_wire.data.labels.push(time2);
myChart_wire.data.datasets[0].data.push(voltage2.v12.data);
myChart_wire.data.datasets[1].data.push(voltage2.v23.data);
myChart_wire.data.datasets[2].data.push(voltage2.v13.data);
myChart_wire.update();
});

function updateChart_wire() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_wire").innerHTML = " Đồ thị điện áp dây theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a/vwire")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_wire.data.labels.push(time2);
  myChart_wire.data.datasets[0].data.push(voltage2.v12.data);
  myChart_wire.data.datasets[1].data.push(voltage2.v23.data);
  myChart_wire.data.datasets[2].data.push(voltage2.v13.data);
  if (myChart_wire.data.labels.length > MAX_DATA_wire) {//////////////////////////////////////// end gioi han diem
    myChart_wire.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_wire.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_wire.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_wire.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_wire.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end Vwire
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start p
const MAX_DATA_P = 12;///abc
let intervalId_P = setInterval(updateChart_P, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_P(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_P); ////////////////////////////////////////// chinh sua so 3
  intervalId_P = setInterval(updateChart_P, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_P = document.getElementById("myChart_mfm_P").getContext("2d");
const myChart_P = new Chart(ctx_P, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "P1",
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "P2",
        data: [],
        borderColor: "green",
        fill: false,
      },
      {
        label: "P3",
        data: [],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'W'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian'
        }
      }
    },
}
} );

database
.ref("/mfm383a/p")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_P.data.labels.push(time2);
myChart_P.data.datasets[0].data.push(voltage2.p1.data);
myChart_P.data.datasets[1].data.push(voltage2.p2.data);
myChart_P.data.datasets[2].data.push(voltage2.p3.data);
myChart_P.update();
});

function updateChart_P() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_mfm_P").innerHTML = " Đồ thị công suất theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a/p")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_P.data.labels.push(time2);
  myChart_P.data.datasets[0].data.push(voltage2.p1.data);
  myChart_P.data.datasets[1].data.push(voltage2.p2.data);
  myChart_P.data.datasets[2].data.push(voltage2.p3.data);
  if (myChart_P.data.labels.length > MAX_DATA_P) {//////////////////////////////////////// end gioi han diem
    myChart_P.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_P.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_P.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_P.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_P.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end p
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start  I
const MAX_DATA_PF = 12;///abc
let intervalId_PF = setInterval(updateChart_PF, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_PF(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_PF); ////////////////////////////////////////// chinh sua so 3
  intervalId_PF = setInterval(updateChart_PF, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_PF = document.getElementById("myChart_mfm_PF").getContext("2d");
const myChart_PF = new Chart(ctx_PF, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "PF1",
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "PF2",
        data: [],
        borderColor: "green",
        fill: false,
      },
      {
        label: "PF3",
        data: [],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: ''
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian'
        }
      }
    },
}
} );

database
.ref("/mfm383a/pf")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_PF.data.labels.push(time2);
myChart_PF.data.datasets[0].data.push(voltage2.pf1.data);
myChart_PF.data.datasets[1].data.push(voltage2.pf2.data);
myChart_PF.data.datasets[2].data.push(voltage2.pf3.data);
myChart_PF.update();
});

function updateChart_PF() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_mfm_PF").innerHTML = " Đồ thị hệ số công suất theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a/pf")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_PF.data.labels.push(time2);
  myChart_PF.data.datasets[0].data.push(voltage2.pf1.data);
  myChart_PF.data.datasets[1].data.push(voltage2.pf2.data);
  myChart_PF.data.datasets[2].data.push(voltage2.pf3.data);
  if (myChart_PF.data.labels.length > MAX_DATA_PF) {//////////////////////////////////////// end gioi han diem
    myChart_PF.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_PF.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_PF.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_PF.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_PF.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end  I
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start  q
let intervalId_Q = setInterval(updateChart_Q, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
const MAX_DATA_Q = 12;///abc
function updateInterval_Q(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_Q); ////////////////////////////////////////// chinh sua so 3
  intervalId_Q = setInterval(updateChart_Q, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_Q = document.getElementById("myChart_mfm_Q").getContext("2d");
const myChart_Q = new Chart(ctx_Q, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Q1",
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "Q2",
        data: [],
        borderColor: "green",
        fill: false,
      },
      {
        label: "Q3",
        data: [],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'VAR'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian'
        }
      }
    },
}
} );

database
.ref("/mfm383a/q")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_Q.data.labels.push(time2);
myChart_Q.data.datasets[0].data.push(voltage2.q1.data);
myChart_Q.data.datasets[1].data.push(voltage2.q2.data);
myChart_Q.data.datasets[2].data.push(voltage2.q3.data);
myChart_Q.update();
});

function updateChart_Q() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_mfm_Q").innerHTML = " Đồ thị công suất biểu kiến theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a/q")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_Q.data.labels.push(time2);
  myChart_Q.data.datasets[0].data.push(voltage2.q1.data);
  myChart_Q.data.datasets[1].data.push(voltage2.q2.data);
  myChart_Q.data.datasets[2].data.push(voltage2.q3.data);
  if (myChart_Q.data.labels.length > MAX_DATA_Q) {//////////////////////////////////////// end gioi han diem
    myChart_Q.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_Q.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_Q.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_Q.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_Q.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end  q
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start  s
const MAX_DATA_S = 12;///abc
let intervalId_S = setInterval(updateChart_S, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_S(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_S); ////////////////////////////////////////// chinh sua so 3
  intervalId_S = setInterval(updateChart_S, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_S = document.getElementById("myChart_mfm_S").getContext("2d");
const myChart_S = new Chart(ctx_S, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "S1",
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "S2",
        data: [],
        borderColor: "green",
        fill: false,
      },
      {
        label: "S3",
        data: [],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'VA'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian'
        }
      }
    },
}
} );

database
.ref("/mfm383a/s")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_S.data.labels.push(time2);
myChart_S.data.datasets[0].data.push(voltage2.s1.data);
myChart_S.data.datasets[1].data.push(voltage2.s2.data);
myChart_S.data.datasets[2].data.push(voltage2.s3.data);
myChart_S.update();
});

function updateChart_S() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_mfm_S").innerHTML = " Đồ thị công suất phản kháng theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a/s")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_S.data.labels.push(time2);
  myChart_S.data.datasets[0].data.push(voltage2.s1.data);
  myChart_S.data.datasets[1].data.push(voltage2.s2.data);
  myChart_S.data.datasets[2].data.push(voltage2.s3.data);
  if (myChart_S.data.labels.length > MAX_DATA_S) {//////////////////////////////////////// end gioi han diem
    myChart_S.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_S.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_S.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_S.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_S.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end  s
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start  I
let intervalId_F = setInterval(updateChart_F, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
const MAX_DATA_F = 12;///abc
function updateInterval_F(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_F); ////////////////////////////////////////// chinh sua so 3
  intervalId_F = setInterval(updateChart_F, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_F = document.getElementById("myChart_mfm_F").getContext("2d");
const myChart_F = new Chart(ctx_F, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "F",
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
          text: 'Hz'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian'
        }
      }
    },
}
} );

database
.ref("/mfm383a")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_F.data.labels.push(time2);
myChart_F.data.datasets[0].data.push(voltage2.f.data);
myChart_F.update();
});

function updateChart_F() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_mfm_F").innerHTML = " Đồ thị tần số theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_F.data.labels.push(time2);
  myChart_F.data.datasets[0].data.push(voltage2.f.data);
  if (myChart_F.data.labels.length > MAX_DATA_F) {//////////////////////////////////////// end gioi han diem
    myChart_F.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_F.data.datasets[0].data.shift();//////////////////////////////////////////////////////
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_F.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end  I
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start  KƯH
let intervalId_KWH = setInterval(updateChart_KWH, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
const MAX_DATA_KWH = 12;///abc
function updateInterval_KWH(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_KWH); ////////////////////////////////////////// chinh sua so 3
  intervalId_KWH = setInterval(updateChart_KWH, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_KWH = document.getElementById("myChart_mfm_KWH").getContext("2d");
const myChart_KWH = new Chart(ctx_KWH, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "KWH",
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
          text: 'KWH'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian'
        }
      }
    },
}
} );

database
.ref("/mfm383a")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_KWH.data.labels.push(time2);
myChart_KWH.data.datasets[0].data.push(voltage2.kwh.data);
myChart_KWH.update();
});

function updateChart_KWH() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_mfm_KWH").innerHTML = " Đồ thị công suất tiêu thụ theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_KWH.data.labels.push(time2);
  myChart_KWH.data.datasets[0].data.push(voltage2.kwh.data);
  if (myChart_KWH.data.labels.length > MAX_DATA_KWH) {//////////////////////////////////////// end gioi han diem
    myChart_KWH.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_KWH.data.datasets[0].data.shift();//////////////////////////////////////////////////////
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_KWH.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end  IKWH
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start  
let intervalId_I = setInterval(updateChart_I, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 
const MAX_DATA_I = 12;///abc
function updateInterval_I(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_I); ////////////////////////////////////////// chinh sua so 3
  intervalId_I = setInterval(updateChart_I, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_I = document.getElementById("myChart_mfm_I").getContext("2d");
const myChart_I = new Chart(ctx_I, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "I1",
        data: [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "I2",
        data: [],
        borderColor: "green",
        fill: false,
      },
      {
        label: "I3",
        data: [],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Ampe'
        },
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian'
        }
      }
    },
}
} );

database
.ref("/mfm383a/i")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_I.data.labels.push(time2);
myChart_I.data.datasets[0].data.push(voltage2.i1.data);
myChart_I.data.datasets[1].data.push(voltage2.i2.data);
myChart_I.data.datasets[2].data.push(voltage2.i3.data);
myChart_I.update();
});

function updateChart_I() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_mfm_I").innerHTML = " Đồ thị dòng điện theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/mfm383a/i")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_I.data.labels.push(time2);
  myChart_I.data.datasets[0].data.push(voltage2.i1.data);
  myChart_I.data.datasets[1].data.push(voltage2.i2.data);
  myChart_I.data.datasets[2].data.push(voltage2.i3.data);
  if (myChart_I.data.labels.length > MAX_DATA_I) {//////////////////////////////////////// end gioi han diem
    myChart_I.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_I.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_I.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_I.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_I.update();
  });
  }I
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end  I