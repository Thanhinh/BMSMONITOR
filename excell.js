
// var data = [];
// // Hàm lưu trữ giá trị
// function saveData() {
//   // Lấy giá trị của biến fuel
  

//   var dienapV1N = document.getElementById("Fuel").textContent;
//   var oila = document.getElementById("dienapV2N").textContent;
//   var useda = document.getElementById("dienapV3N").textContent;
  
//   // Lấy thời gian hiện tại
//   var now = new Date();
//   var timestampa = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

//   // Lưu giá trị và thời gian vào danh sách các mảng lưu trữ
//   data.push([dienapV1N, oila, useda, timestampa]);

// }
// // Gọi hàm lưu trữ giá trị sau mỗi 10 phút
// setInterval(saveData, 1 * 5 * 1000);
// // Xử lý sự kiện click vào nút xuất file Excel
// var exportBtn = document.getElementById("exportBtn");
// exportBtn.addEventListener("click", function() {
//   // Tạo một đối tượng Workbook mới
//   var wb = XLSX.utils.book_new();
//   // Tạo một đối tượng Worksheet mới và gán dữ liệu từ danh sách các mảng lưu trữ vào

//   var ws = XLSX.utils.json_to_sheet(data.map(function(row) {
//     return {
//       'Fuell': row[0],
//       'Oil Pressurel': row[1],
//       'Usedl': row[2],
//       'Timel': row[3]
//     };
//   }));
//   // hêm Worksheet vào Workbook
//   XLSX.utils.book_append_sheet(wb, ws, "fuel");
//   // Xuất file Excel
//   XLSX.writeFile(wb, "fuel.xlsx");
// });
// // 
function goToLink() {
  window.location.href = "https://docs.google.com/spreadsheets/d/1kGflX_ykTOI83akDag8ss6E7dgnrt54d0bYDzV2YX0s/edit?usp=sharing"; // Thay đổi địa chỉ liên kết tại đây
}