function semakFakirMiskin () {
    //code sini
    console.log("Sekarang di 'function semakFakirMiskin'");

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="permulaanHadKifayahCalculatorRumahSendiri()" class="buttonChatBot">Rumah Sendiri</button></div>'+
    '<div class="botText"><button onClick="permulaanHadKifayahCalculatorRumahSewa()" class="buttonChatBot">Rumah Sewa</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    let userHtml = '<p class="userText"><span>Semak Fakir/Miskin</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = '<div class="botText"><span>Rumah yang anda diami adakah Rumah Sendiri atau Rumah Sewa?</span></div>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function semakPermulaanSelainFakirMiskin () {
    let userHtml = '<p class="userText"><span>Semak selain Fakir/Miskin</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = '<div class="botText"><span>Terdapat 8 golongan asnaf. Selain daripada Fakir dan Miskin adalah Amil, Muallaf, Al-Riqab, Al-Gharimin, Fisabilillah, Ibnu Sabil. Anda boleh bertanya kepada saya untuk meletakkan anda di kategori yang mana ataupun anda boleh bertanya berkenaan apakah yang dimaksudkan dengan golongan yang saya senaraikan.</span></div>';
    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    semakSelainFakirMiskin();
}

function semakSelainFakirMiskin () {
    enterSelainFakirMiskin = true;
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

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';
    
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}