function kiraZakatAdaTanggungan () {
    console.log("Sekarang di 'function kiraZakatAdaTanggungan'");

    kira_zakat_ada_tanggungan = true;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let userHtml = '<p class="userText"><span>Ada Tanggungan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = '<div class="botText"><span>Berapakah jumlah gaji bulanan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function inputGajiBulanan() {

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = true;
    input_elaun_dan_lainlain = false;
    
    console.log("Sekarang di 'function inputGajiBulanan'");

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapakah jumlah elaun dan lain-lain bulanan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function inputElaunDanLainLain() {

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = true;

    console.log("Sekarang di 'function inputElaunDanLainLain'");

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapakah jumlah bonus tahun 2023?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function inputBonusTahunan() {

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;

    console.log("Sekarang di 'function inputBonusTahunan'");

    // ((Gaji pokok + Elaun + Lain-lain) x 12 + Bonus Tahunan)
    console.log("gajiBulanan = "+(gajiBulanan*12));
    console.log("elaunDanLainLain = "+(elaunDanLainLain*12));
    console.log("bonusTahunan = "+bonusTahunan);

    gajiTahunan = (gajiBulanan*12) + (elaunDanLainLain*12);
    console.log("gajiTahunan = "+gajiTahunan);
    pendapatanTahunan = Number(gajiTahunan) + Number(bonusTahunan);
    console.log("pendapatanTahunann = "+pendapatanTahunan);
    if (kira_zakat_tiada_tanggungan == true) {
        let botHtml =
        '<p class="botText"><span>Pendapatan tahunan anda = RM'+pendapatanTahunan+'</span></p>';
        $("#chatbox").append(botHtml);

        inputBilanganAnakAnda();
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    } else {
        let botHtml =
        '<p class="botText"><span>Pendapatan tahunan anda = RM'+pendapatanTahunan+'</span></p>'+
        '<p class="botText"><span>Isteri anda bekerja?</span></p>';
        $("#chatbox").append(botHtml);

        document.getElementById("buttonChatBox").innerHTML =
        '<div class="botText"><button onClick="isteriBekerja()" class="buttonChatBot">Bekerja</button></div>'+
        '<div class="botText"><button onClick="isteriTidakBekerja()" class="buttonChatBot">Tidak Bekerja</button></div>';
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
}

function isteriBekerja(){
    console.log("Sekarang di 'function isteriBekerja'");

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = true;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;

    getIsteriBekerja = true;
    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let userHtml = '<p class="userText"><span>Isteri Bekerja</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = '<div class="botText"><span>Berapakah jumlah bilangan anak?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function isteriTidakBekerja(){
    console.log("Sekarang di 'function isteriTidakBekerja'");

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = true;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;

    getIsteriBekerja = false;
    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let userHtml = '<p class="userText"><span>Isteri Tidak Bekerja</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = '<div class="botText"><span>Berapakah jumlah bilangan anak?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function inputBilanganAnakAnda() {
    console.log("Sekarang di 'function inputBilanganAnakAnda'");
    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;

    let perbelanjaanSetahun;
    if (getIsteriBekerja == true) {
        perbelanjaanSetahun = 8000.00 + (bilanganAnakAnda * 1000.00);
    } else {
        perbelanjaanSetahun = 8000.00 + 5000.00 + (bilanganAnakAnda * 1000.00);
    }

    let pendapatanLayakZakat = pendapatanTahunan - perbelanjaanSetahun;
    let wajibZakat = pendapatanLayakZakat * 0.025;
    let wajibZakatBulanan = wajibZakat / 12;

    let botHtml;
    if (pendapatanLayakZakat > nisab) {
        botHtml =
        '<p class="botText"><span>Jumlah Gaji Setahun = RM'+pendapatanTahunan+'</span></p>'+
        '<p class="botText"><span>Jumlah Keseluruhan Perbelanjaan(setahun) = RM'+perbelanjaanSetahun+'</span></p>'+
        '<p class="botText"><span>Pendapatan Yang Layak Dizakat = RM'+pendapatanLayakZakat+'</span></p>'+
        '<p class="botText"><span>Zakat Yang Wajib Dibayar = RM'+wajibZakat+'</span></p>'+
        '<p class="botText"><span>Anda hanya perlu membayar zakat setiap bulan RM'+wajibZakatBulanan+'</span></p>';
    } else {
        botHtml =
        '<p class="botText"><span>Jumlah Gaji Setahun = RM'+pendapatanTahunan+'</span></p>'+
        '<p class="botText"><span>Jumlah Nisab 2023 = RM'+nisab+'</span></p>'+
        '<p class="botText"><span>Pendapatan anda (RM'+pendapatanTahunan+') kurang daripada Nisab (RM'+nisab+'). Jadi anda tidak wajib mengeluarkan zakat</span></p>';
    }

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';
    $("#chatbox").append(botHtml);

    $("#textInput").val("");

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kiraZakatTiadaTanggungan () {
    console.log("Sekarang di 'function kiraZakatTiadaTanggungan'");

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = true;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let userHtml = '<p class="userText"><span>Tiada Tanggungan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = '<div class="botText"><span>Berapakah jumlah gaji bulanan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}