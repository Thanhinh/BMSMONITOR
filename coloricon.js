var icon1 = document.getElementById("circleIcon1");
database.ref("/ats/vphaseats/v1nats/data").on("value", function(snapshot) {
    var dieukienicon1 = snapshot.val();
    if (dieukienicon1 > 200) {
        // Nếu V1N > 200, thêm lớp CSS cho màu đỏ
        icon1.classList.add("red-icon");
      } else {
        // Nếu V1N <= 200, xóa lớp CSS của màu đỏ (nếu có)
        icon1.classList.remove("red-icon"); 
      }
});
// 
var icon2 = document.getElementById("circleIcon2");
database.ref("/ats/vphaseats/v2nats/data").on("value", function(snapshot) {
    var dieukienicon2 = snapshot.val();
    if (dieukienicon2 > 200) {
        // Nếu V1N > 200, thêm lớp CSS cho màu đỏ
        icon2.classList.add("yel-icon");
      } else {
        // Nếu V1N <= 200, xóa lớp CSS của màu đỏ (nếu có)
        icon2.classList.remove("yel-icon"); 
      }
});
// 
var icon3 = document.getElementById("circleIcon3");
database.ref("/ats/vphaseats/v3nats/data").on("value", function(snapshot) {
    var dieukienicon3 = snapshot.val();
    if (dieukienicon3 > 200) {
        // Nếu V1N > 200, thêm lớp CSS cho màu đỏ
        icon3.classList.add("blue-icon");
      } else {
        // Nếu V1N <= 200, xóa lớp CSS của màu đỏ (nếu có)
        icon3.classList.remove("blue-icon"); 
      }
});
// 
var icon4 = document.getElementById("circleIcon4");
database.ref("/ats/vphasegen/v1ngen/data").on("value", function(snapshot) {
    var dieukienicon4 = snapshot.val();
    if (dieukienicon3 > 200) {
        // Nếu V1N > 200, thêm lớp CSS cho màu đỏ
        icon4.classList.add("yel-icon");
      } else {
        // Nếu V1N <= 200, xóa lớp CSS của màu đỏ (nếu có)
        icon4.classList.remove("yel-icon"); 
      }
});
var icon4 = document.getElementById("circleIcon4");
database.ref("/ats/vphasegen/v1ngen/data").on("value", function(snapshot) {
    var dieukienicon4 = snapshot.val();
    if (dieukienicon4 > 200) {
        // Nếu V1N > 200, thêm lớp CSS cho màu đỏ
        icon4.classList.add("red-icon");
      } else {
        // Nếu V1N <= 200, xóa lớp CSS của màu đỏ (nếu có)
        icon4.classList.remove("red-icon"); 
      }
});
var icon5 = document.getElementById("circleIcon5");
database.ref("/ats/vphasegen/v2ngen/data").on("value", function(snapshot) {
    var dieukienicon5 = snapshot.val();
    if (dieukienicon5 > 200) {
        // Nếu V1N > 200, thêm lớp CSS cho màu đỏ
        icon5.classList.add("yel-icon");
      } else {
        // Nếu V1N <= 200, xóa lớp CSS của màu đỏ (nếu có)
        icon5.classList.remove("yel-icon"); 
      }
});
var icon6 = document.getElementById("circleIcon6");
database.ref("/ats/vphasegen/v3ngen/data").on("value", function(snapshot) {
    var dieukienicon6 = snapshot.val();
    if (dieukienicon6 > 200) {
        // Nếu V1N > 200, thêm lớp CSS cho màu đỏ
        icon6.classList.add("blue-icon");
      } else {
        // Nếu V1N <= 200, xóa lớp CSS của màu đỏ (nếu có)
        icon6.classList.remove("blue-icon"); 
      }
});