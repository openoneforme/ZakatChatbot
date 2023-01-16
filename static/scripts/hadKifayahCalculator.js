function permulaanHadKifayahCalculatorRumahSendiri() {
    let userHtml = '<p class="userText"><span>Rumah Sendiri</span></p>';
    $("#chatbox").append(userHtml);

    rumahSendiri();
}

function permulaanHadKifayahCalculatorRumahSewa() {
    let userHtml = '<p class="userText"><span>Rumah Sewa</span></p>';
    $("#chatbox").append(userHtml);
    
    rumahSewa();
}

function rumahSendiri() {
    //code sini
    jenisRumah = true;

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = true;
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
    enterSelainFakirMiskin = false;

    console.log("Sekarang di 'function rumahSendiri'");

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai orang dewasa yang bekerja di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}




function getDewasaBekerja() {
    //code sini
    console.log("Sekarang di 'function getDewasaBekerja'");

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = true;
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
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai orang dewasa yang tidak bekerja di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getDewasaTidakBekerja() {
    //code sini
    console.log("Sekarang di 'function getDewasaTidakBekerja'");

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = true;
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
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai remaja (13-17 Tahun) di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getSekolahMenengah() {
    //code sini
    console.log("Sekarang di 'function getSekolahMenengah'");

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = true;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai kanak-kanak (7-12 Tahun) di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getSekolahRendah() {
    //code sini
    console.log("Sekarang di 'function getSekolahRendah'");

    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = false;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = true;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai kanak-kanak pra sekolah (5-6 Tahun) di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getPraSekolah() {
    //code sini
    console.log("Sekarang di 'function getPraSekolah'");

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
    enterGetPraSekolah = true;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai bayi di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getBayi() {
    //code sini
    console.log("Sekarang di 'function getBayi'");

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
    enterGetBayi = true;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai pelajar univesiti di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getUnivesiti() {
    //code sini
    console.log("Sekarang di 'function getUniversiti'");

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
    enterGetUniversiti = true;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai pesakit kronik di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getSakitKronik() {
    //code sini
    console.log("Sekarang di 'function getSakitKronik'");

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
    enterGetSakitKronik = true;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai OKU di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getOKU() {
    //code sini
    console.log("Sekarang di 'function getSakitKronik'");

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
    enterGetOKU = true;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    // sampai sini buat coding calculation...
    if (jenisRumah == true) {
        hadKifayah = 620 + kifayahDewasaBekerja*315 + kifayahDewasaTidakBekerja*245 + kifayahSekolahMenengah*290 +
        kifayahSekolahRendah*250 + kifayahPraSekolah*230 + kifayahBayi*210 + kifayahUniversiti*260 + kifayahSakitKronik*260 + kifayahOKU*260;
    } else {
        hadKifayah = 1120 + kifayahDewasaBekerja*315 + kifayahDewasaTidakBekerja*245 + kifayahSekolahMenengah*290 +
        kifayahSekolahRendah*250 + kifayahPraSekolah*230 + kifayahBayi*210 + kifayahUniversiti*260 + kifayahSakitKronik*260 + kifayahOKU*260;
    }

    let botHtml = '<div class="botText"><span>Jumlah Had Kifayah anda adalah RM'+hadKifayah+'</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function rumahSewa() {
    //code sini
    jenisRumah = false;

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
    enterRumahSewa = true;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    enterSelainFakirMiskin = false;

    console.log("Sekarang di 'function rumahSendiri'");

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let botHtml = '<div class="botText"><span>Berapa ramai orang dewasa yang bekerja di bawah tanggungan anda?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}