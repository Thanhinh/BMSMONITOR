
function getAllData() {
    var sheet_dienap = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DIENAP");
    var sheet_comap = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SOLIEU");
    var sheet_tai = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("THONGSOTAI");
    var firebaseUrl = "https://bms-ats-default-rtdb.firebaseio.com";
    
    var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
    
    // Lấy giá trị oil và fuel từ Firebase
    
    
    ///
    var v1natsData = base.getData("ats/vphaseats/v1nats");
    var v2natsData = base.getData("ats/vphaseats/v2nats");
    var v3natsData = base.getData("ats/vphaseats/v3nats");
    var v12atsData = base.getData("ats/vwireats/v12ats");
    var v23atsData = base.getData("ats/vwireats/v23ats");
    var v13atsData = base.getData("ats/vwireats/v13ats");
    var fatsData = base.getData("ats/fats");
    var v1genData = base.getData("ats/vphasegen/v1ngen");
    var v2genData = base.getData("ats/vphasegen/v2ngen");
    var v3genData = base.getData("ats/vphasegen/v3ngen");
    var v12genData = base.getData("ats/vwiregen/v12gen");
    var v23genData = base.getData("ats/vwiregen/v23gen");
    var v13genData = base.getData("ats/vwiregen/v13gen");
    var fgenData = base.getData("ats/fgen");
    /////////////////////////////////
    var now = new Date(); // Lấy thời gian hiện tại
    var timestamp = now.toLocaleString(); // Định dạng thời gian dưới dạng chuỗi
    ////////////////////////////////////////
    // Lấy các giá trị hiện có từ bảng Google Sheets
    var values_dienap = sheet_dienap.getDataRange().getValues();
    
    // Đưa giá trị oil, fuel, và thời gian cập nhật vào mảng rows với label tương ứng
    
    var rows_dienap = [["Label", "V1N LƯỚI", "V2N LƯỚI", "V3N LƯỚI" , "V12 LƯỚI", "V23 LƯỚI", "V31 LƯỚI","F LƯỚI", "V1N MÁY PHÁT", "V2N MÁY PHÁT", "V3N MÁY PHÁT",
     "V12 MÁY PHÁT","V23 MÁY PHÁT","V31 MÁY PHÁT","F MÁY PHÁT"
    ,"Timestamp"]];
    for (var i = 1; i < values_dienap.length; i++) { // Lặp qua các hàng trong bảng (bỏ qua hàng đầu tiên vì đó là tiêu đề)
    rows_dienap.push(values_dienap[i]); // Thêm hàng hiện có vào mảng rows
    }
    rows_dienap.push(["Value",v1natsData,v2natsData,v3natsData,v12atsData,v23atsData,v13atsData,fatsData,
    v1genData,v2genData,v3genData,v12genData,v23genData,v13genData,fgenData, timestamp]); // Thêm giá trị mới vào cuối mảng
    
    // Ghi tất cả các giá trị trong mảng rows vào bảng Google Sheets
    dataRange_dienap = sheet_dienap.getRange(1, 1, rows_dienap.length, rows_dienap[0].length);
    dataRange_dienap.setValues(rows_dienap);
    /////////////////////////////
    var i1Data = base.getData("mfm383a/i/i1");
    var i2Data = base.getData("mfm383a/i/i2");
    var i3Data = base.getData("mfm383a/i/i3");
    ///
    var p1Data = base.getData("mfm383a/p/p1");
    var p2Data = base.getData("mfm383a/p/p2");
    var p3Data = base.getData("mfm383a/p/p3");
    //
    var q1Data = base.getData("mfm383a/q/q1");
    var q2Data = base.getData("mfm383a/q/q2");
    var q3Data = base.getData("mfm383a/q/q3");
    //
    var s1Data = base.getData("mfm383a/s/s1");
    var s2Data = base.getData("mfm383a/s/s2");
    var s3Data = base.getData("mfm383a/s/s3");
    //
    var pf1Data = base.getData("mfm383a/pf/pf1");
    var pf2Data = base.getData("mfm383a/pf/pf2");
    var pf3Data = base.getData("mfm383a/pf/pf3");
    //
    var fData = base.getData("mfm383a/f");
    //
    var kwhData = base.getData("mfm383a/kwh");
    var values_tai = sheet_tai.getDataRange().getValues();
    
    // Đưa giá trị oil, fuel, và thời gian cập nhật vào mảng rows với label tương ứng
    
    var rows_tai = [["Label","I1","I2","I3","P1","P2","P3","S1","S1","S3","Q1","Q2","Q3","PF1","PF2","PF3","F","KWH","Timestamp"]];
    for (var i = 1; i < values_tai.length; i++) { // Lặp qua các hàng trong bảng (bỏ qua hàng đầu tiên vì đó là tiêu đề)
    rows_tai.push(values_tai[i]); // Thêm hàng hiện có vào mảng rows
    }
    rows_tai.push(["Value",i1Data,i2Data,i3Data,p1Data,p2Data,p3Data,s1Data,s2Data,s3Data,q1Data,q2Data,q3Data,pf1Data,pf2Data,pf3Data,fData,kwhData, timestamp]); // Thêm giá trị mới vào cuối mảng
    
    // Ghi tất cả các giá trị trong mảng rows vào bảng Google Sheets
    dataRange_tai = sheet_tai.getRange(1, 1, rows_tai.length, rows_tai[0].length);
    dataRange_tai.setValues(rows_tai);
    /////////////////////////
    
    var batteryData = base.getData("comap/fuel");
    var co2Data = base.getData("comap/co2");
    var fuelData = 100- base.getData("comap/fuel");
    var hourData = base.getData("comap/hour");
    var maintainData = base.getData("comap/maintain");
    var numstartData = base.getData("comap/numstart");
    var oilData = base.getData("comap/oil");
    var rpmData = base.getData("comap/rpm");
    var tempData = base.getData("comap/temp");
    var values_comap = sheet_comap.getDataRange().getValues();
    
    // Đưa giá trị oil, fuel, và thời gian cập nhật vào mảng rows với label tương ứng
    
    var rows_comap = [["Label","ACQUY","CO2","NHIÊN LIỆU","SỐ GIỜ CHẠY","HỆ SỐ BẢO TRÌ","SỐ LẦN KHỞI ĐỘNG","ÁP LỰC NHỚT","TỐC ĐỘ ĐỘNG CƠ","NHIỆT ĐỘ","Timestamp"]];
    for (var i = 1; i < values_comap.length; i++) { // Lặp qua các hàng trong bảng (bỏ qua hàng đầu tiên vì đó là tiêu đề)
    rows_comap.push(values_tai[i]); // Thêm hàng hiện có vào mảng rows
    }
    rows_comap.push(["Value",batteryData,co2Data,fuelData,hourData,maintainData,numstartData,oilData,rpmData,tempData, timestamp]); // Thêm giá trị mới vào cuối mảng
    
    // Ghi tất cả các giá trị trong mảng rows vào bảng Google Sheets
    dataRange_comap = sheet_comap.getRange(1, 1, rows_comap.length, rows_comap[0].length);
    dataRange_comap.setValues(rows_comap);
    }
    ////
    