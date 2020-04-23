var zivot = 1;
var kouzlo = 0;

function tajKomnata() {
    if (zivot == 1) {
        document.getElementById("text0").innerHTML = '<br>Šel jsi do tajemné komnaty a zabil tě Bazilišek. Hra pro tebe končí.' +
            '<br> Chcete si hru zahrát znovu? <br> <button type="button" onclick="restart()">Restart</button><br>';
        zivot = 0;
    } else {}
}

function zacarovanyLes() {
    if (zivot == 1) {
        document.getElementById("text0").innerHTML = 'V začarovaném lese jsi nenašel s přáteli cestu zpět a pošli jste hlady.' +
            'Brumbál na vaši počest zakládá novou kolej Harronherm.<br> Chcete si hru zahrát znovu? <br> <button type="button" onclick="restart()">Restart</button><br>';
        zivot = 0;
    } else {}
}

function vez() {
    if (zivot == 1 && kouzlo == 0) {
        document.getElementById("text0").innerHTML = ',,Hagride, jsi v pořádku?¨ <br> ,,Ano děti, musíte mě dostat pryč, prosím¨' +
            'Naše parta se musí dozvědět kouzlo, kterým by dokázaly otevřít dveře ve věži - kde by se to asi mohli naučit? Zkuste někam zajít';
    } else if (zivot == 1 && kouzlo == 1) {
        document.getElementById("text0").innerHTML = ',,Hagride, jsi v pořádku?¨ <br> ,,Ano děti, musíte mě dostat pryč, prosím!¨<br>' +
            'Naše parta zná tajemné heslo, jaké je to heslo?' + '<form name=kouzloF onsubmit="return validateForm()" method="post">' +
            '<input type="text" name="kouzlo" required><br><input type="submit" value="Submit"> </form>';
    }
}

function knihovna() {
    if (zivot == 1 && kouzlo == 0) {
        document.getElementById("text0").innerHTML = 'Naši přátelé vešli do knihovny a našli na zemi knihu, ' +
            'byla na straně s odemykacími kouzly a obsahovala kouzelnou formuli: alohomora .<br>' +
            'Kdo ví, jaké má kouzlo využití';
        kouzlo = 1;
    } else if (zivot == 1 && kouzlo == 1) {
        document.getElementById("text0").innerHTML = ',,Zatraceně!! Kde je zase ta kniha?¨ posteskl si Ron. <br>' +
            ',,Tady!¨ vykřikla Hermiona a znovu nahlas a zřetelně zopakovala kouzelnou formuli: alohomora .<br>' +
            'Snad naše parta již kouzelnou formuli nezapomene!';
    }

}

function restart() {
    document.getElementById("text0").innerHTML = "";
    zivot = 1;
    kouzlo = 0;
}

function validateForm() {
    var x = document.forms["kouzloF"]["kouzlo"].value;
    if (x == "alohomora") {
        document.getElementById("text0").innerHTML = 'Správné kouzlo!! Osvobodili jste Hagrida.' +
            '<br> Chcete si hru zahrát znovu? <br> <button type="button" onclick="restart()">Restart</button><br>';
    } else {
        document.getElementById("text0").innerHTML = 'To není správné kouzlo, které osvobodí Hagrida, můžete znova pátrat' +
            'po správném kouzlu.';
    }
}