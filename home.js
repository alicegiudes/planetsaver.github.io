var JSONdefVal = JSON.stringify(70);
var JSONco2Val = JSON.stringify(75);
var JSONairVal = JSON.stringify(80);
var JSONspeciesVal = JSON.stringify(50);
var JSONwaterVal = JSON.stringify(40);
var JSONplasticVal = JSON.stringify(60);
var JSONdefVal2;
var JSONco2Val2;
var JSONairVal2;
var JSONspeciesVal2;
var JSONwaterVal2;
var JSONplasticVal2;
var JSONdefVal3;
var JSONco2Val3;
var JSONairVal3;
var JSONspeciesVal3;
var JSONwaterVal3;
var JSONplasticVal3;
var JSONdefVal4;
var JSONco2Val4;
var JSONairVal4;
var JSONspeciesVal4;
var JSONwaterVal4;
var JSONplasticVal4;

function backHome() {
    window.open("index.html", "_self");
}
function playAgain() {
    window.open("game1-2.html", "_self");
    document.getElementById('def-val').innerHTML = JSONdefVal;
    document.getElementById('air-val').innerHTML = JSONairVal;
    document.getElementById('co2-val').innerHTML = JSONco2Val;
    document.getElementById('species-val').innerHTML = JSONspeciesVal;
    document.getElementById('water-val').innerHTML = JSONwaterVal;
    document.getElementById('plastic-val').innerHTML = JSONplasticVal;
}
function loadVal() {
    document.getElementById('def-val').innerHTML = JSONdefVal;
    document.getElementById('air-val').innerHTML = JSONairVal;
    document.getElementById('co2-val').innerHTML = JSONco2Val;
    document.getElementById('species-val').innerHTML = JSONspeciesVal;
    document.getElementById('water-val').innerHTML = JSONwaterVal;
    document.getElementById('plastic-val').innerHTML = JSONplasticVal;
}
function valUpdated1() {
    document.getElementById('def-val').innerHTML = sessionStorage.getItem("defvalue1");
    document.getElementById('air-val').innerHTML = sessionStorage.getItem("airvalue1");
    document.getElementById('co2-val').innerHTML = sessionStorage.getItem("co2value1");
    document.getElementById('species-val').innerHTML = sessionStorage.getItem("speciesvalue1");
    document.getElementById('water-val').innerHTML = sessionStorage.getItem("watervalue1");
    document.getElementById('plastic-val').innerHTML = sessionStorage.getItem("plasticvalue1");
}
function valUpdated2() {
    document.getElementById('def-val').innerHTML = sessionStorage.getItem("defvalue2");
    document.getElementById('air-val').innerHTML = sessionStorage.getItem("airvalue2");
    document.getElementById('co2-val').innerHTML = sessionStorage.getItem("co2value2");
    document.getElementById('species-val').innerHTML = sessionStorage.getItem("speciesvalue2");
    document.getElementById('water-val').innerHTML = sessionStorage.getItem("watervalue2");
    document.getElementById('plastic-val').innerHTML = sessionStorage.getItem("plasticvalue2");
}
function valUpdated3() {
    document.getElementById('def-val').innerHTML = sessionStorage.getItem("defvalue3");
    document.getElementById('air-val').innerHTML = sessionStorage.getItem("airvalue3");
    document.getElementById('co2-val').innerHTML = sessionStorage.getItem("co2value3");
    document.getElementById('species-val').innerHTML = sessionStorage.getItem("speciesvalue3");
    document.getElementById('water-val').innerHTML = sessionStorage.getItem("watervalue3");
    document.getElementById('plastic-val').innerHTML = sessionStorage.getItem("plasticvalue3");
}
function valUpdated4() {
    document.getElementById('def-val').innerHTML = sessionStorage.getItem("defvalue4");
    document.getElementById('air-val').innerHTML = sessionStorage.getItem("airvalue4");
    document.getElementById('co2-val').innerHTML = sessionStorage.getItem("co2value4");
    document.getElementById('species-val').innerHTML = sessionStorage.getItem("speciesvalue4");
    document.getElementById('water-val').innerHTML = sessionStorage.getItem("watervalue4");
    document.getElementById('plastic-val').innerHTML = sessionStorage.getItem("plasticvalue4");
    JSONdefVal4 = sessionStorage.getItem("defvalue4");
    JSONairVal4 = sessionStorage.getItem("airvalue4");
    JSONco2Val4 = sessionStorage.getItem("co2value4");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue4");
    JSONwaterVal4 = sessionStorage.getItem("watervalue4");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue4");
    if (JSONdefVal4 <= 60 && JSONco2Val4 <=55 && JSONairVal4 <= 70 && JSONspeciesVal4 <= 45 && JSONwaterVal4 <= 30 && JSONplasticVal4 <= 60) {
        document.getElementById('game-results').innerHTML = "Good job! You improved all indicators and now the world is doing better!";
    } else {
        document.getElementById('game-results').innerHTML = "Though luck! You improved some indicators, but you could've done better. Try again next time!";
    }
}
function value1or2() {
    if (document.getElementById('choice1').checked == true) {
        JSONdefVal -= 10;
        document.getElementById('def-val').innerHTML = JSONdefVal;
        JSONco2Val -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val;
        JSONairVal -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal;
        JSONspeciesVal -= 5;
        document.getElementById('species-val').innerHTML = JSONspeciesVal;
        JSONwaterVal -= 5;
        document.getElementById('water-val').innerHTML = JSONwaterVal;
        window.open("game3-4.html", "_self");
    } else if (document.getElementById('choice2').checked == true) {
        JSONairVal -= 10;
        document.getElementById('air-val').innerHTML = JSONairVal;
        JSONco2Val -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val;
        window.open("game4-5.html", "_self");
    }
    sessionStorage.setItem("defvalue1", JSONdefVal);
    sessionStorage.setItem("co2value1", JSONco2Val);
    sessionStorage.setItem("airvalue1", JSONairVal);
    sessionStorage.setItem("speciesvalue1", JSONspeciesVal);
    sessionStorage.setItem("watervalue1", JSONwaterVal);
    sessionStorage.setItem("plasticvalue1", JSONplasticVal);
}
function value3or4() {
    JSONdefVal2 = sessionStorage.getItem("defvalue1");
    JSONairVal2 = sessionStorage.getItem("airvalue1");
    JSONco2Val2 = sessionStorage.getItem("co2value1");
    JSONspeciesVal2 = sessionStorage.getItem("speciesvalue1");
    JSONwaterVal2 = sessionStorage.getItem("watervalue1");
    JSONplasticVal2 = sessionStorage.getItem("plasticvalue1");
    if (document.getElementById('choice3').checked == true) {
        JSONwaterVal2 -= 10;
        document.getElementById('water-val').innerHTML = JSONwaterVal2;
        window.open("game6-7.html", "_self");
    } else if (document.getElementById('choice4').checked == true) {
        JSONplasticVal2 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal2;
        JSONco2Val2 -= 5;
        document.getElementById('co2-val').innerHTML = JSONco2Val2;
        window.open("game7-8.html", "_self");
    }
    sessionStorage.setItem("defvalue2", JSONdefVal2);
    sessionStorage.setItem("co2value2", JSONco2Val2);
    sessionStorage.setItem("airvalue2", JSONairVal2);
    sessionStorage.setItem("speciesvalue2", JSONspeciesVal2);
    sessionStorage.setItem("watervalue2", JSONwaterVal2);
    sessionStorage.setItem("plasticvalue2", JSONplasticVal2);
}
function value4or5() {
    JSONdefVal2 = sessionStorage.getItem("defvalue1");
    JSONairVal2 = sessionStorage.getItem("airvalue1");
    JSONco2Val2 = sessionStorage.getItem("co2value1");
    JSONspeciesVal2 = sessionStorage.getItem("speciesvalue1");
    JSONwaterVal2 = sessionStorage.getItem("watervalue1");
    JSONplasticVal2 = sessionStorage.getItem("plasticvalue1");
    if (document.getElementById('choice4').checked == true) {
        JSONplasticVal2 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal2;
        JSONco2Val2 -= 5;
        document.getElementById('co2-val').innerHTML = JSONco2Val2;
        window.open("game9-6.html", "_self");
    } else if (document.getElementById('choice5').checked == true) {
        JSONdefVal2 -= 10;
        document.getElementById('def-val').innerHTML = JSONdefVal2;
        JSONco2Val2 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val2;
        JSONairVal2 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal2;
        JSONspeciesVal2 -= 5;
        document.getElementById('species-val').innerHTML = JSONspeciesVal2;
        JSONwaterVal2 -= 5;
        document.getElementById('water-val').innerHTML = JSONwaterVal2;
        window.open("game8-9.html", "_self");
    }
    sessionStorage.setItem("defvalue2", JSONdefVal2);
    sessionStorage.setItem("co2value2", JSONco2Val2);
    sessionStorage.setItem("airvalue2", JSONairVal2);
    sessionStorage.setItem("speciesvalue2", JSONspeciesVal2);
    sessionStorage.setItem("watervalue2", JSONwaterVal2);
    sessionStorage.setItem("plasticvalue2", JSONplasticVal2);
}
function value9or6() {
    JSONdefVal3 = sessionStorage.getItem("defvalue2");
    JSONairVal3 = sessionStorage.getItem("airvalue2");
    JSONco2Val3 = sessionStorage.getItem("co2value2");
    JSONspeciesVal3 = sessionStorage.getItem("speciesvalue2");
    JSONwaterVal3 = sessionStorage.getItem("watervalue2");
    JSONplasticVal3 = sessionStorage.getItem("plasticvalue2");
    if (document.getElementById('choice9').checked == true) {
        JSONco2Val3 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val3;
        JSONairVal3 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal3;
        window.open("game8-3.html", "_self");
    } else if (document.getElementById('choice6').checked == true) {
        JSONco2Val3 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val3;
        JSONairVal3 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal3;
        window.open("game10-7.html", "_self");
    }
    sessionStorage.setItem("defvalue3", JSONdefVal3);
    sessionStorage.setItem("co2value3", JSONco2Val3);
    sessionStorage.setItem("airvalue3", JSONairVal3);
    sessionStorage.setItem("speciesvalue3", JSONspeciesVal3);
    sessionStorage.setItem("watervalue3", JSONwaterVal3);
    sessionStorage.setItem("plasticvalue3", JSONplasticVal3);
}
function value6or7() {
    JSONdefVal3 = sessionStorage.getItem("defvalue2");
    JSONairVal3 = sessionStorage.getItem("airvalue2");
    JSONco2Val3 = sessionStorage.getItem("co2value2");
    JSONspeciesVal3 = sessionStorage.getItem("speciesvalue2");
    JSONwaterVal3 = sessionStorage.getItem("watervalue2");
    JSONplasticVal3 = sessionStorage.getItem("plasticvalue2");
    if (document.getElementById('choice6').checked == true) {
        JSONco2Val3 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val3;
        JSONairVal3 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal3;
        window.open("game10-11.html", "_self");
    } else if (document.getElementById('choice7').checked == true) {
        JSONplasticVal3 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal3;
        JSONwaterVal3 -= 10;
        document.getElementById('water-val').innerHTML = JSONwaterVal3;
        window.open("game2-9.html", "_self");
    }
    sessionStorage.setItem("defvalue3", JSONdefVal3);
    sessionStorage.setItem("co2value3", JSONco2Val3);
    sessionStorage.setItem("airvalue3", JSONairVal3);
    sessionStorage.setItem("speciesvalue3", JSONspeciesVal3);
    sessionStorage.setItem("watervalue3", JSONwaterVal3);
    sessionStorage.setItem("plasticvalue3", JSONplasticVal3);
}
function value7or8() {
    JSONdefVal3 = sessionStorage.getItem("defvalue2");
    JSONairVal3 = sessionStorage.getItem("airvalue2");
    JSONco2Val3 = sessionStorage.getItem("co2value2");
    JSONspeciesVal3 = sessionStorage.getItem("speciesvalue2");
    JSONwaterVal3 = sessionStorage.getItem("watervalue2");
    JSONplasticVal3 = sessionStorage.getItem("plasticvalue2");
    if (document.getElementById('choice7').checked == true) {
        JSONplasticVal3 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal3;
        JSONwaterVal3 -= 10;
        document.getElementById('water-val').innerHTML = JSONwaterVal3;
        window.open("game12-11.html", "_self");
    } else if (document.getElementById('choice8').checked == true) {
        JSONco2Val3 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val3;
        JSONairVal3 -= 10;
        document.getElementById('air-val').innerHTML = JSONairVal3;
        JSONplasticVal3 -= 5;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal3;
        window.open("game9-5.html", "_self");
    }
    sessionStorage.setItem("defvalue3", JSONdefVal3);
    sessionStorage.setItem("co2value3", JSONco2Val3);
    sessionStorage.setItem("airvalue3", JSONairVal3);
    sessionStorage.setItem("speciesvalue3", JSONspeciesVal3);
    sessionStorage.setItem("watervalue3", JSONwaterVal3);
    sessionStorage.setItem("plasticvalue3", JSONplasticVal3);
}
function value8or9() {
    JSONdefVal3 = sessionStorage.getItem("defvalue2");
    JSONairVal3 = sessionStorage.getItem("airvalue2");
    JSONco2Val3 = sessionStorage.getItem("co2value2");
    JSONspeciesVal3 = sessionStorage.getItem("speciesvalue2");
    JSONwaterVal3 = sessionStorage.getItem("watervalue2");
    JSONplasticVal3 = sessionStorage.getItem("plasticvalue2");
    if (document.getElementById('choice8').checked == true) {
        JSONco2Val3 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val3;
        JSONairVal3 -= 10;
        document.getElementById('air-val').innerHTML = JSONairVal3;
        window.open("game12-1.html", "_self");
        JSONplasticVal3 -= 5;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal3;
    } else if (document.getElementById('choice9').checked == true) {
        JSONco2Val3 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val3;
        JSONairVal3 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal3;
        window.open("game6-11.html", "_self");
    }
    sessionStorage.setItem("defvalue3", JSONdefVal3);
    sessionStorage.setItem("co2value3", JSONco2Val3);
    sessionStorage.setItem("airvalue3", JSONairVal3);
    sessionStorage.setItem("speciesvalue3", JSONspeciesVal3);
    sessionStorage.setItem("watervalue3", JSONwaterVal3);
    sessionStorage.setItem("plasticvalue3", JSONplasticVal3);
}
function value2or9() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice2').checked == true) {
        JSONairVal4 -= 10;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        JSONco2Val4 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        window.open("end.html", "_self");
    } else if (document.getElementById('choice9').checked == true) {
        JSONco2Val4 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        window.open("end.html", "_self");
    }
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}
function value6or11() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice6').checked == true) {
        JSONco2Val4 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        window.open("end.html", "_self");
    } else if (document.getElementById('choice11').checked == true) {
        JSONco2Val4 -= 5;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONplasticVal4 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal4;
        window.open("end.html", "_self");
    }
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}
function value8or3() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice8').checked == true) {
        JSONco2Val4 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 10;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        window.open("end.html", "_self");
        JSONplasticVal3 -= 5;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal3;
    } else if (document.getElementById('choice3').checked == true) {
        JSONwaterVal4 -= 10;
        document.getElementById('water-val').innerHTML = JSONwaterVal4;
        window.open("end.html", "_self");
    }
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}
function value9or5() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice9').checked == true) {
        JSONco2Val4 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        window.open("end.html", "_self");
    } else if (document.getElementById('choice5').checked == true) {
        JSONdefVal4 -= 10;
        document.getElementById('def-val').innerHTML = JSONdefVal4;
        JSONco2Val4 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        JSONspeciesVal4 -= 5;
        document.getElementById('species-val').innerHTML = JSONspeciesVal4;
        JSONwaterVal4 -= 5;
        document.getElementById('water-val').innerHTML = JSONwaterVal4;
        window.open("end.html", "_self");
    }
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}
function value10or7() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice10').checked == true) {
        JSONspeciesVal4 -= 15;
        document.getElementById('species-val').innerHTML = JSONspeciesVal4;
        window.open("end.html", "_self");
    } else if (document.getElementById('choice7').checked == true) {
        JSONplasticVal4 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal4;
        JSONwaterVal4 -= 10;
        document.getElementById('water-val').innerHTML = JSONwaterVal4;
        window.open("end.html", "_self");
    }
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}
function value10or11() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice10').checked == true) {
        JSONspeciesVal4 -= 15;
        document.getElementById('species-val').innerHTML = JSONspeciesVal4;
        window.open("end.html", "_self");
    } else if (document.getElementById('choice11').checked == true) {
        JSONco2Val4 -= 5;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONplasticVal4 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal4;
        window.open("end.html", "_self");
    }
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}
function value12or1() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice12').checked == true) {
        JSONdefVal4 -= 5;
        document.getElementById('def-val').innerHTML = JSONdefVal4;
        JSONco2Val4 -= 5;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        JSONspeciesVal4 -= 5;
        document.getElementById('species-val').innerHTML = JSONspeciesVal4;
        JSONwaterVal4 -= 5;
        document.getElementById('water-val').innerHTML = JSONwaterVal4;
        window.open("end.html", "_self");
    } else if (document.getElementById('choice1').checked == true) {
        JSONdefVal4 -= 10;
        document.getElementById('def-val').innerHTML = JSONdefVal4;
        JSONco2Val4 -= 10;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        JSONspeciesVal4 -= 5;
        document.getElementById('species-val').innerHTML = JSONspeciesVal4;
        JSONwaterVal4 -= 5;
        document.getElementById('water-val').innerHTML = JSONwaterVal4;
        window.open("end.html", "_self");
    } 
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}
function value12or11() {
    JSONdefVal4 = sessionStorage.getItem("defvalue3");
    JSONairVal4 = sessionStorage.getItem("airvalue3");
    JSONco2Val4 = sessionStorage.getItem("co2value3");
    JSONspeciesVal4 = sessionStorage.getItem("speciesvalue3");
    JSONwaterVal4 = sessionStorage.getItem("watervalue3");
    JSONplasticVal4 = sessionStorage.getItem("plasticvalue3");
    if (document.getElementById('choice12').checked == true) {
        JSONdefVal4 -= 5;
        document.getElementById('def-val').innerHTML = JSONdefVal4;
        JSONco2Val4 -= 5;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONairVal4 -= 5;
        document.getElementById('air-val').innerHTML = JSONairVal4;
        JSONspeciesVal4 -= 5;
        document.getElementById('species-val').innerHTML = JSONspeciesVal4;
        JSONwaterVal4 -= 5;
        document.getElementById('water-val').innerHTML = JSONwaterVal4;
        window.open("end.html", "_self");
    } else if (document.getElementById('choice11').checked == true) {
        JSONco2Val4 -= 5;
        document.getElementById('co2-val').innerHTML = JSONco2Val4;
        JSONplasticVal4 -= 10;
        document.getElementById('plastic-val').innerHTML = JSONplasticVal4;
        window.open("end.html", "_self");
    }
    sessionStorage.setItem("defvalue4", JSONdefVal4);
    sessionStorage.setItem("co2value4", JSONco2Val4);
    sessionStorage.setItem("airvalue4", JSONairVal4);
    sessionStorage.setItem("speciesvalue4", JSONspeciesVal4);
    sessionStorage.setItem("watervalue4", JSONwaterVal4);
    sessionStorage.setItem("plasticvalue4", JSONplasticVal4);
}