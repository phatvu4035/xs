window.__cfRLUnblockHandlers = true;
function loaiso() {
    var list_number_all =
        "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99";
    var idtext = document.getElementById("dnn_ctr460_ViewLOAIDANDB_txtNumber");
    var idloaidau = document.getElementById("iddau");
    var idloaiduoi = document.getElementById("idduoi");
    var idloaicham = document.getElementById("idcham");
    var idloaibo = document.getElementById("idbo");
    var idloaitong = document.getElementById("idtong");
    var idloaisochuan = document.getElementById("idloaiso");
    var idthemsochuan = document.getElementById("idthemso");
    if (idloaidau.value.endsWith(",")) {
        idloaidau.value = idloaidau.value.substring(0, idloaidau.value.length - 1);
    }
    if (idloaiduoi.value.endsWith(",")) {
        idloaiduoi.value = idloaiduoi.value.substring(0, idloaiduoi.value.length - 1);
    }
    if (idloaibo.value.endsWith(",")) {
        idloaibo.value = idloaibo.value.substring(0, idloaibo.value.length - 1);
    }
    if (idloaitong.value.endsWith(",")) {
        idloaitong.value = idloaitong.value.substring(0, idloaitong.value.length - 1);
    }
    if (idloaisochuan.value.endsWith(",")) {
        idloaisochuan.value = idloaisochuan.value.substring(0, idloaisochuan.value.length - 1);
    }
    if (idloaisochuan.value.startsWith(",")) {
        idloaisochuan.value = idloaisochuan.value.substring(1);
    }
    if (idthemsochuan.value.endsWith(",")) {
        idthemsochuan.value = idthemsochuan.value.substring(0, idthemsochuan.value.length - 1);
    }
    var stloai = list_number_all;
    var arraychuoi = myTrim(stloai).split(",");
    var arrayloaidau = myTrim(idloaidau.value).split(",");
    for (var i = 0; i < arraychuoi.length; i++) {
        for (var j = 0; j < arrayloaidau.length; j++) {
            if (arraychuoi[i][0] == arrayloaidau[j]) {
                stloai = stloai.replace(arraychuoi[i] + ",", "");
                stloai = stloai.replace(arraychuoi[i], "");
            }
        }
    }
    arraychuoi = myTrim(stloai).split(",");
    var arrayloaiduoi = myTrim(idloaiduoi.value).split(",");
    for (var i = 0; i < arraychuoi.length; i++) {
        for (var j = 0; j < arrayloaiduoi.length; j++) {
            if (arraychuoi[i][1] == arrayloaiduoi[j]) {
                stloai = stloai.replace(arraychuoi[i] + ",", "");
                stloai = stloai.replace(arraychuoi[i], "");
            }
        }
    }
    arraychuoi = myTrim(stloai).split(",");
    var arrayloaicham = myTrim(idloaicham.value).split(",");
    for (var i = 0; i < arraychuoi.length; i++) {
        for (var j = 0; j < arrayloaicham.length; j++) {
            if (arraychuoi[i][0] == arrayloaicham[j] || arraychuoi[i][1] == arrayloaicham[j]) {
                stloai = stloai.replace(arraychuoi[i] + ",", "");
                stloai = stloai.replace(arraychuoi[i], "");
            }
        }
    }
    arraychuoi = myTrim(stloai).split(",");
    var arrayloaitong = myTrim(idloaitong.value).split(",");
    for (var i = 0; i < arraychuoi.length; i++) {
        var tong = sumdigits(arraychuoi[i]);
        for (var j = 0; j < arrayloaitong.length; j++) {
            if (arrayloaitong[j].length > 0) {
                if (tong - arrayloaitong[j] == 0 || tong - arrayloaitong[j] == 10) {
                    stloai = stloai.replace(arraychuoi[i] + ",", "");
                    stloai = stloai.replace(arraychuoi[i], "");
                }
            }
        }
    }
    var arrayloaibo = myTrim(idloaibo.value).split(",");
    for (var i = 0; i < arrayloaibo.length; i++) {
        if (myTrim(arrayloaibo[i]) != "" && myTrim(arrayloaibo[i]).length == 2) {
            var danbo = BOSO(arrayloaibo[i]);
            arraychuoi = myTrim(danbo).split(",");
            for (var j = 0; j < arraychuoi.length; j++) {
                if (myTrim(arraychuoi[j]) != "" && myTrim(arraychuoi[j]).length == 2) {
                    stloai = stloai.replace(arraychuoi[j] + ",", "");
                    stloai = stloai.replace(arraychuoi[j], "");
                }
            }
        }
    }
    if (myTrim(idloaisochuan.value) != "") {
        arraychuoi = myTrim(idloaiso.value).split(",");
        for (var j = 0; j < arraychuoi.length; j++) {
            stloai = stloai.replace(arraychuoi[j] + ",", "");
            stloai = stloai.replace(arraychuoi[j], "");
        }
    }
    if (myTrim(idthemsochuan.value) != "") {
        arraychuoi = myTrim(idthemsochuan.value).split(",");
        for (var j = 0; j < arraychuoi.length; j++) {
            if (myTrim(arraychuoi[j]) != "" && arraychuoi[j].length == 2 && stloai.indexOf(arraychuoi[j]) < 0) {
                stloai = stloai + "," + arraychuoi[j];
            }
        }
    }
    idtext.value = stloai;
    return false;
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, "");
}
function BOSO(so) {
    var dau = so.substring(0, 1);
    var duoi = so.substring(1);
    var bongdau = BONGSO(dau);
    var bongduoi = BONGSO(duoi);
    var dan = "";
    dan += dau + duoi + ",";
    dan += duoi + dau + ",";
    dan += dau + bongduoi + ",";
    dan += bongduoi + dau + ",";
    dan += bongdau + duoi + ",";
    dan += duoi + bongdau + ",";
    dan += bongdau + bongduoi + ",";
    dan += bongduoi + bongdau + ",";
    return dan;
}
function sumdigits(num) {
    var tong = 0;
    while (num > 0) {
        tong = tong + (num % 10);
        num = Math.floor(num / 10);
    }
    return tong;
}
function BONGSO(so) {
    switch (so) {
        case "0":
            return "5";
        case "5":
            return "0";
        case "1":
            return "6";
        case "6":
            return "1";
        case "2":
            return "7";
        case "7":
            return "2";
        case "3":
            return "8";
        case "8":
            return "3";
        case "4":
            return "9";
        case "9":
            return "4";
        default:
            break;
    }
}
