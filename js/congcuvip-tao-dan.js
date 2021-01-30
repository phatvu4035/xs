window.__cfRLUnblockHandlers = true;
function LayDanNhanh(strValue) {
    var id = document.getElementById("MainContent_txtDanNhanh");
    var dan = "";
    if (strValue == "dauchan") {
        dan = "00,01,02,03,04,05,06,07,08,09,20,21,22,23,24,25,26,27,28,29,40,41,42,43,44,45,46,47,48,49,60,61,62,63,64,65,66,67,68,69,80,81,82,83,84,85,86,87,88,89";
    } else if (strValue == "daule") {
        dan = "10,11,12,13,14,15,16,17,18,19,30,31,32,33,34,35,36,37,38,39,50,51,52,53,54,55,56,57,58,59,70,71,72,73,74,75,76,77,78,79,90,91,92,93,94,95,96,97,98,99";
    } else if (strValue == "daube") {
        dan = "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49";
    } else if (strValue == "daulon") {
        dan = "50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99";
    } else if (strValue == "duoichan") {
        dan = "00,02,04,06,08,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98";
    } else if (strValue == "duoile") {
        dan = "01,03,05,07,09,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99";
    } else if (strValue == "duoibe") {
        dan = "00,01,02,03,04,10,11,12,13,14,20,21,22,23,24,30,31,32,33,34,40,41,42,43,44,50,51,52,53,54,60,61,62,63,64,70,71,72,73,74,80,81,82,83,84,90,91,92,93,94";
    } else if (strValue == "duoilon") {
        dan = "05,06,07,08,09,15,16,17,18,19,25,26,27,28,29,35,36,37,38,39,45,46,47,48,49,55,56,57,58,59,65,66,67,68,69,75,76,77,78,79,85,86,87,88,89,95,96,97,98,99";
    } else if (strValue == "tongchan") {
        dan = "00,02,04,06,08,11,13,15,17,19,20,22,24,26,28,31,33,35,37,39,40,42,44,46,48,51,53,55,57,59,60,62,64,66,68,71,73,75,77,79,80,82,84,86,88,91,93,95,97,99";
    } else if (strValue == "tongle") {
        dan = "01,03,05,07,09,10,12,14,16,18,21,23,25,27,29,30,32,34,36,38,41,43,45,47,49,50,52,54,56,58,61,63,65,67,69,70,72,74,76,78,81,83,85,87,89,90,92,94,96,98";
    } else if (strValue == "tongbe") {
        dan = "00,01,02,03,04,10,11,12,13,19,20,21,22,28,29,30,31,37,38,39,40,46,47,48,49,55,56,57,58,59,64,65,66,67,68,73,74,75,76,77,82,83,84,85,86,91,92,93,94,95";
    } else if (strValue == "tonglon") {
        dan = "05,06,07,08,09,14,15,16,17,18,23,24,25,26,27,32,33,34,35,36,41,42,43,44,45,50,51,52,53,54,60,61,62,63,69,70,71,72,78,79,80,81,87,88,89,90,96,97,98,99";
    } else if (strValue == "chanchan") {
        dan = "00,22,44,66,88,02,20,04,40,06,60,08,80,24,42,26,62 ,28,82,46,64,48,84,68,86";
    } else if (strValue == "chanle") {
        dan = "01,03,05,07,09,21,23,25,27,29,41,43,45,47,49,61,63 ,65,67,69,81,83,85,87,89";
    } else if (strValue == "lechan") {
        dan = "10,12,14,16,18,30,32,34,36,38,50,52,54,56,58,70,72 ,74,76,78,90,92,94,96,98";
    } else if (strValue == "lele") {
        dan = "11,33,55,77,99,13,31,15,51,17,71,19,91,35,53,37,73 ,39,93,57,75,59,95,79,97";
    } else if (strValue == "bebe") {
        dan = "00,11,22,33,44,01,10,02,20,03,30,04,40,12,21,13,31 ,14,41,23,32,24,42,34,43";
    } else if (strValue == "belon") {
        dan = "05,06,07,08,09,15,16,17,18,19,25,26,27,28,29,35,36 ,37,38,39,45,46,47,48,49";
    } else if (strValue == "lonbe") {
        dan = "90,91,92,93,94,80,81,82,83,84,70,71,72,73,74,60,61 ,62,63,64,50,51,52,53,54";
    } else if (strValue == "lonlon") {
        dan = "55,66,77,88,99,56,65,57,75,58,85,59,95,67,76,68,86 ,69,96,78,87,79,97,89,98";
    } else if (strValue == "kepbang") {
        dan = "00,55,11,66,22,77,33,88,44,99";
    } else if (strValue == "keplech") {
        dan = "05,50,16,61,27,72,38,83,49,94";
    } else if (strValue == "kepam") {
        dan = "07,70,14,41,29,92,36,63,58,85";
    } else if (strValue == "satkep") {
        dan = "01,10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98";
    }
    var arraydan = dan.split(",");
    var target_div = $("#taodan_div");
    var target_ul = $("#taodan_ul");
    target_ul.empty();
    arraydan.forEach(function (element) {
        li = $("<li/>")
            .addClass("tool-li")
            .text(element + ",")
            .appendTo(target_ul);
    });
}
function TaoDanF1() {
    var dau = document.getElementById("MainContent_txtDau1");
    var duoi = document.getElementById("MainContent_txtDuoi1");
    var tong = document.getElementById("MainContent_txtTong1");
    var them = document.getElementById("MainContent_txtCong1");
    var loaibo = document.getElementById("MainContent_txtTru1");
    var ketqua = document.getElementById("MainContent_txtDan1");
    var arraydau = myTrim(dau.value).split(",");
    var arrayduoi = myTrim(duoi.value).split(",");
    var arraytong = myTrim(tong.value).split(",");
    var dan = "";
    var layso = "";
    if (arrayduoi.length > 0 && myTrim(dau.value) != "" && arraydau.length > 0 && myTrim(duoi.value) != "") {
        for (var i = 0; i < arraydau.length; i++) {
            if (arraydau[i].toString() != "") {
                for (var j = 0; j < arrayduoi.length; j++) {
                    if (arrayduoi[i].toString() != "") {
                        dan += arraydau[i].toString() + arrayduoi[j].toString() + ",";
                    }
                }
            }
        }
    } else if (arrayduoi.length > 0 && myTrim(dau.value) == "" && myTrim(duoi.value) != "") {
        arraydau = duoi.value.split(",");
        for (var i = 0; i < arraydau.length; i++) {
            if (arraydau[i].toString() != "") {
                for (var j = 0; j <= 9; j++) {
                    dan += j.toString() + arraydau[i].toString() + ",";
                }
            }
        }
    } else if (myTrim(dau.value) != "" && myTrim(duoi.value) == "" && arraydau.length > 0) {
        arraydau = dau.value.split(",");
        if (arraydau.length > 0) {
            for (var i = 0; i < arraydau.length; i++) {
                if (arraydau[i].toString() != "") {
                    for (var j = 0; j <= 9; j++) {
                        dan += arraydau[i].toString() + j.toString() + ",";
                    }
                }
            }
        }
    } else if (myTrim(dau.value) == "" && myTrim(duoi.value) == "" && myTrim(tong.value) != "" && arraytong.length > 0) {
        var tong = 0;
        var ss = "";
        for (var k = 0; k < arraytong.length; k++) {
            if (myTrim(arraytong[k].toString()) != "") {
                for (var i = 0; i <= 9; i++) {
                    for (var j = 0; j <= 9; j++) {
                        tong = i + j;
                        ss = tong.toString();
                        ss = ss.length == 2 ? ss.substring(1) : ss;
                        if (ss == arraytong[k].toString()) {
                            dan += i.toString() + j.toString() + ",";
                        }
                    }
                }
            }
        }
    }
    arraydau = dan.split(",");
    if (arraytong[0].toString() != "") {
        dan = "";
        var so = "";
        var a = 0;
        for (var i = 0; i < arraytong.length; i++) {
            if (arraytong[i].toString() != "") {
                for (var j = 0; j < arraydau.length; j++) {
                    if (arraydau[j].toString() != "") {
                        a = parseInt(arraydau[j].substring(0, 1)) + parseInt(arraydau[j].substring(1));
                        so = a.toString();
                        so = so.length == 2 ? so.substring(1) : so;
                        if (so == arraytong[i].toString()) {
                            dan += arraydau[j].toString() + ",";
                        }
                    }
                }
            }
        }
    }
    dan = BoTrung(dan);
    dan += dan + them.value;
    arraydau = loaibo.value.split(",");
    for (var i = 0; i < arraydau.length; i++) {
        if (arraydau[i].toString() != "") {
            layso = arraydau[i].toString() + ",";
            dan = dan.replace(layso, "");
        }
    }
    ketqua.value = BoTrung(dan);
    return false;
}
function ReTaoDanF1() {
    document.getElementById("MainContent_txtDau1").value = "";
    document.getElementById("MainContent_txtDuoi1").value = "";
    document.getElementById("MainContent_txtTong1").value = "";
    document.getElementById("MainContent_txtCong1").value = "";
    document.getElementById("MainContent_txtTru1").value = "";
    document.getElementById("MainContent_txtDan1").value = "";
    return false;
}
function BoTrung(valueloc) {
    var arrayValue = valueloc.split(",");
    var danloc = "";
    for (var i = 0; i < arrayValue.length; i++) {
        if (arrayValue[i].toString() != "") {
            if (danloc.indexOf(arrayValue[i].toString()) == -1) {
                danloc += arrayValue[i].toString() + ",";
            }
        }
    }
    return danloc;
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, "");
}
function TaoDanChamTong() {
    var cham = document.getElementById("MainContent_txtCham1");
    var tong = document.getElementById("MainContent_txtTong3");
    var cong = document.getElementById("MainContent_txtCong3");
    var tru = document.getElementById("MainContent_txtTru3");
    var ketqua = document.getElementById("MainContent_txtDan3");
    var arrayCham = myTrim(cham.value).split(",");
    var arrayTong = myTrim(tong.value).split(",");
    var dan = "";
    for (var i = 0; i < arrayCham.length; i++) {
        if (myTrim(arrayCham[i].toString()) != "") {
            for (var j = 0; j <= 9; j++) {
                dan += j.toString() + arrayCham[i].toString() + ",";
                dan += arrayCham[i].toString() + j.toString() + ",";
            }
        }
    }
    dan = BoTrung(dan);
    var arraydau = dan.split(",");
    if (arrayTong[0].toString() != "") {
        dan = "";
        var so = "";
        var a = 0;
        for (var i = 0; i < arrayTong.length; i++) {
            if (arrayTong[i].toString() != "") {
                for (var j = 0; j < arraydau.length; j++) {
                    if (arraydau[j].toString() != "") {
                        a = parseInt(arraydau[j].substring(0, 1)) + parseInt(arraydau[j].substring(1));
                        so = a.toString();
                        so = so.length == 2 ? so.substring(1) : so;
                        if (so == arrayTong[i].toString()) {
                            dan += arraydau[j].toString() + ",";
                        }
                    }
                }
            }
        }
    }
    dan = BoTrung(dan);
    dan += dan + cong.value;
    arraydau = tru.value.split(",");
    var layso = "";
    for (var i = 0; i < arraydau.length; i++) {
        if (arraydau[i].toString() != "") {
            layso = arraydau[i].toString() + ",";
            dan = dan.replace(layso, "");
        }
    }
    ketqua.value = BoTrung(dan);
    return false;
}
function ReTaoDanChamTong() {
    document.getElementById("MainContent_txtCham1").value = "";
    document.getElementById("MainContent_txtTong3").value = "";
    document.getElementById("MainContent_txtCong3").value = "";
    document.getElementById("MainContent_txtTru3").value = "";
    document.getElementById("MainContent_txtDan3").value = "";
    return false;
}
function TaoDanBong() {
    var bongso = document.getElementById("MainContent_txtBo1");
    var tong = document.getElementById("MainContent_txtTong5");
    var cong = document.getElementById("MainContent_txtCong5");
    var tru = document.getElementById("MainContent_txtTru5");
    var ketqua = document.getElementById("MainContent_txtDan5");
    var arrayBong = myTrim(bongso.value).split(",");
    var arrayTong = myTrim(tong.value).split(",");
    var dan = "";
    for (var i = 0; i < arrayBong.length; i++) {
        if (myTrim(arrayBong[i].toString()) != "") {
            for (var j = 0; j <= 9; j++) {
                dan += BOSO(arrayBong[i].toString());
            }
        }
    }
    dan = BoTrung(dan);
    var arraydau = dan.split(",");
    if (arrayTong[0].toString() != "") {
        dan = "";
        var so = "";
        var a = 0;
        for (var i = 0; i < arrayTong.length; i++) {
            if (arrayTong[i].toString() != "") {
                for (var j = 0; j < arraydau.length; j++) {
                    if (arraydau[j].toString() != "") {
                        a = parseInt(arraydau[j].substring(0, 1)) + parseInt(arraydau[j].substring(1));
                        so = a.toString();
                        so = so.length == 2 ? so.substring(1) : so;
                        if (so == arrayTong[i].toString()) {
                            dan += arraydau[j].toString() + ",";
                        }
                    }
                }
            }
        }
    }
    dan = BoTrung(dan);
    dan += dan + cong.value;
    arraydau = tru.value.split(",");
    var layso = "";
    for (var i = 0; i < arraydau.length; i++) {
        if (arraydau[i].toString() != "") {
            layso = arraydau[i].toString() + ",";
            dan = dan.replace(layso, "");
        }
    }
    ketqua.value = BoTrung(dan);
    return false;
}
function ReTaoDanBong() {
    document.getElementById("MainContent_txtBo1").value = "";
    document.getElementById("MainContent_txtTong5").value = "";
    document.getElementById("MainContent_txtCong5").value = "";
    document.getElementById("MainContent_txtTru5").value = "";
    document.getElementById("MainContent_txtDan5").value = "";
    return false;
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
