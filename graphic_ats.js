const MAX_DATA_ats_VPHASE = 12;///abc
let intervalId_ats_VPHASE = setInterval(updateChart_ats_VPHASE, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_ats_VPHASE(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_ats_VPHASE); ////////////////////////////////////////// chinh sua so 3
  intervalId_ats_VPHASE = setInterval(updateChart_ats_VPHASE, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_ats_VPHASE = document.getElementById("myChart_ats_VPHASE").getContext("2d");
const myChart_ats_VPHASE = new Chart(ctx_ats_VPHASE, {
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
.ref("/ats/vphaseats")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_ats_VPHASE.data.labels.push(time2);
myChart_ats_VPHASE.data.datasets[0].data.push(voltage2.v1nats.data);
myChart_ats_VPHASE.data.datasets[1].data.push(voltage2.v2nats.data);
myChart_ats_VPHASE.data.datasets[2].data.push(voltage2.v3nats.data);
myChart_ats_VPHASE.update();
});

function updateChart_ats_VPHASE() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_ats_VPHASE").innerHTML = " Đồ thị điện áp pha của lưới theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/ats/vphaseats")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_ats_VPHASE.data.labels.push(time2);
  myChart_ats_VPHASE.data.datasets[0].data.push(voltage2.v1nats.data);
  myChart_ats_VPHASE.data.datasets[1].data.push(voltage2.v2nats.data);
  myChart_ats_VPHASE.data.datasets[2].data.push(voltage2.v3nats.data);
  
  if (myChart_ats_VPHASE.data.labels.length > MAX_DATA_ats_VPHASE) {//////////////////////////////////////// end gioi han diem
    myChart_ats_VPHASE.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_ats_VPHASE.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_ats_VPHASE.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_ats_VPHASE.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_ats_VPHASE.update();
  });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////end p
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////start  I
const MAX_DATA_ats_VWIRE = 12;///abc
let intervalId_ats_VWIRE = setInterval(updateChart_ats_VWIRE, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_ats_VWIRE(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_ats_VWIRE); ////////////////////////////////////////// chinh sua so 3
  intervalId_ats_VWIRE = setInterval(updateChart_ats_VWIRE, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_ats_VWIRE = document.getElementById("myChart_ats_VWIRE").getContext("2d");
const myChart_ats_VWIRE = new Chart(ctx_ats_VWIRE, {
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
.ref("/ats/vwireats")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_ats_VWIRE.data.labels.push(time2);
myChart_ats_VWIRE.data.datasets[0].data.push(voltage2.v12ats.data);
myChart_ats_VWIRE.data.datasets[1].data.push(voltage2.v23ats.data);
myChart_ats_VWIRE.data.datasets[2].data.push(voltage2.v13ats.data);
myChart_ats_VWIRE.update();
});

function updateChart_ats_VWIRE() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_ats_VWIRE").innerHTML = " Đồ thị điện áp dây của lưới theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/ats/vwireats")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_ats_VWIRE.data.labels.push(time2);
  myChart_ats_VWIRE.data.datasets[0].data.push(voltage2.v12ats.data);
  myChart_ats_VWIRE.data.datasets[1].data.push(voltage2.v23ats.data);
  myChart_ats_VWIRE.data.datasets[2].data.push(voltage2.v13ats.data);

  if (myChart_ats_VWIRE.data.labels.length > MAX_DATA_ats_VWIRE) {//////////////////////////////////////// end gioi han diem
    myChart_ats_VWIRE.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_ats_VWIRE.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_ats_VWIRE.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_ats_VWIRE.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem


  myChart_ats_VWIRE.update();
  });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  const MAX_DATA_genvphase = 12;///abc
  let intervalId_genvphase = setInterval(updateChart_genvphase, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_genvphase(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_genvphase); ////////////////////////////////////////// chinh sua so 3
  intervalId_genvphase = setInterval(updateChart_genvphase, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_genvphase = document.getElementById("myChart_genvphase").getContext("2d");
const myChart_genvphase = new Chart(ctx_genvphase, {
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
          text: 'THỜI GIAN'
        }
      }
    },
}
} );

database
.ref("/ats/vphasegen")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_genvphase.data.labels.push(time2);
myChart_genvphase.data.datasets[0].data.push(voltage2.v1ngen.data);
myChart_genvphase.data.datasets[1].data.push(voltage2.v2ngen.data);
myChart_genvphase.data.datasets[2].data.push(voltage2.v3ngen.data);
myChart_genvphase.update();
});

function updateChart_genvphase() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_genvphase").innerHTML = " Đồ thị điện áp pha của máy phát theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/ats/vphasegen")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_genvphase.data.labels.push(time2);
  myChart_genvphase.data.datasets[0].data.push(voltage2.v1ngen.data);
  myChart_genvphase.data.datasets[1].data.push(voltage2.v2ngen.data);
  myChart_genvphase.data.datasets[2].data.push(voltage2.v3ngen.data);
  if (myChart_genvphase.data.labels.length > MAX_DATA_genvphase) {//////////////////////////////////////// end gioi han diem
    myChart_genvphase.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_genvphase.data.datasets[0].data.shift();//////////////////////////////////////////////////////
    myChart_genvphase.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
    myChart_genvphase.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_genvphase.update();
  });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////
  const MAX_DATA_genvwire = 12;///abc
  let intervalId_genvwire = setInterval(updateChart_genvwire, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

  function updateInterval_genvwire(interval) { ///////////// chinh sua wire
    updateInterval = interval * 1000;
    clearInterval(intervalId_genvwire); ////////////////////////////////////////// chinh sua so 3
    intervalId_genvwire = setInterval(updateChart_genvwire, updateInterval);////////////////////////////////////////// chinh sua so 3
  }
  const ctx_genvwire = document.getElementById("myChart_genvwire").getContext("2d");
  const myChart_genvwire = new Chart(ctx_genvwire, {
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
  .ref("/ats/vwiregen")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_genvwire.data.labels.push(time2);
  myChart_genvwire.data.datasets[0].data.push(voltage2.v12gen.data);
  myChart_genvwire.data.datasets[1].data.push(voltage2.v23gen.data);
  myChart_genvwire.data.datasets[2].data.push(voltage2.v13gen.data);
  myChart_genvwire.update();
  });
  
  function updateChart_genvwire() {
    var currentTime2 = new Date();
    var timeString2 = currentTime2.toLocaleTimeString();
    document.getElementById("time-label_genvwire").innerHTML = " Đồ thị điện áp dây của máy phát theo thời gian vào lúc " + timeString2;
    
    database
    .ref("/ats/vwiregen")
    .once("value")
    .then((snapshot) => {
    const voltage2 = snapshot.val();
    const time2 = new Date().toLocaleTimeString();
    myChart_genvwire.data.labels.push(time2);
    myChart_genvwire.data.datasets[0].data.push(voltage2.v12gen.data);
    myChart_genvwire.data.datasets[1].data.push(voltage2.v23gen.data);
    myChart_genvwire.data.datasets[2].data.push(voltage2.v13gen.data);
    if (myChart_genvwire.data.labels.length > MAX_DATA_genvwire) {//////////////////////////////////////// end gioi han diem
      myChart_genvwire.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
      myChart_genvwire.data.datasets[0].data.shift();//////////////////////////////////////////////////////
      myChart_genvwire.data.datasets[1].data.shift();///////////////////////////////////////////////////// 
      myChart_genvwire.data.datasets[2].data.shift();/////////////////////////////////////////////////// end gioi han diem
    }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
    myChart_genvwire.update();
    });
    }
  /////////////////////////////////////////////////////////////////////////////
  const MAX_DATA_atsf = 12;///abc
  let intervalId_atsf = setInterval(updateChart_atsf, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_atsf(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_atsf); ////////////////////////////////////////// chinh sua so 3
  intervalId_atsf = setInterval(updateChart_atsf, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_atsf = document.getElementById("myChart_atsf").getContext("2d");
const myChart_atsf = new Chart(ctx_atsf, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "TẦN SỐ",
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
          text: 'THỜI GIAN'
        }
      }
    },
}
} );

database
.ref("/ats")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_atsf.data.labels.push(time2);
myChart_atsf.data.datasets[0].data.push(voltage2.fats.data);
myChart_atsf.update();
});

function updateChart_atsf() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_atsf").innerHTML = "Đồ thị tần số của lưới theo thời gian vào lúc " + timeString2;
  
  database
  .ref("/ats")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_atsf.data.labels.push(time2);
  myChart_atsf.data.datasets[0].data.push(voltage2.fats.data);
  if (myChart_atsf.data.labels.length > MAX_DATA_atsf) {//////////////////////////////////////// end gioi han diem
    myChart_atsf.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_atsf.data.datasets[0].data.shift();//////////////////////////////////////////////////////
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_atsf.update();
  });
  }
  ///////////////////////////////////////////////////////////////////////////
  const MAX_DATA_genf = 12;///abc
  let intervalId_genf = setInterval(updateChart_genf, updateInterval);//////////////// chinh sua so 3 lai thanh so 4 hoac ten 

function updateInterval_genf(interval) { ///////////// chinh sua wire
  updateInterval = interval * 1000;
  clearInterval(intervalId_genf); ////////////////////////////////////////// chinh sua so 3
  intervalId_genf = setInterval(updateChart_genf, updateInterval);////////////////////////////////////////// chinh sua so 3
}
const ctx_genf = document.getElementById("myChart_genf").getContext("2d");
const myChart_genf = new Chart(ctx_genf, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "TẦN SỐ",
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
          text: 'THỜI GIAN'
        }
      }
    },
}
} );

database
.ref("/ats")
.once("value")
.then((snapshot) => {
const voltage2 = snapshot.val();
const time2 = new Date().toLocaleTimeString();
myChart_genf.data.labels.push(time2);
myChart_genf.data.datasets[0].data.push(voltage2.fgen.data);
myChart_genf.update();
});

function updateChart_genf() {
  var currentTime2 = new Date();
  var timeString2 = currentTime2.toLocaleTimeString();
  document.getElementById("time-label_genf").innerHTML = " Đồ thị tần số của máy phát theo thời gian vào lúc " + timeString2;

  database
  .ref("/ats")
  .once("value")
  .then((snapshot) => {
  const voltage2 = snapshot.val();
  const time2 = new Date().toLocaleTimeString();
  myChart_genf.data.labels.push(time2);
  myChart_genf.data.datasets[0].data.push(voltage2.fgen.data);
  if (myChart_genf.data.labels.length > MAX_DATA_genf) {//////////////////////////////////////// end gioi han diem
    myChart_genf.data.labels.shift();///////////////////////////////////////////////////////////// end gioi han diem
    myChart_genf.data.datasets[0].data.shift();//////////////////////////////////////////////////////
  }///////////////////////////////////////////////////////////////////////////////////////////////////// end gioi han diem
  myChart_genf.update();
  });
  }

  ////////////////////////////////////////////////////////