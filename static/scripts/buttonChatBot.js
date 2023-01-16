function infoZakatButton() {
    first_bot_message = true;
    let userHtml = '<p class="userText"><span>Info Zakat</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="zakatPendapatan()" class="buttonChatBot">Zakat Pendapatan</button></div>'+
    '<div class="botText"><button onClick="zakatWangSimpanan()" class="buttonChatBot">Zakat Wang Simpanan</button></div>'+
    '<div class="botText"><button onClick="zakatPerniagaan()" class="buttonChatBot">Zakat Perniagaan</button></div>'+
    '<div class="botText"><button onClick="zakatEmasPerak()" class="buttonChatBot">Zakat Emas/Perak</button></div>'+
    '<div class="botText"><button onClick="zakatSaham()" class="buttonChatBot">Zakat Saham</button></div>'+
    '<div class="botText"><button onClick="zakatPertanian()" class="buttonChatBot">Zakat Pertanian</button></div>'+
    '<div class="botText"><button onClick="zakatTernakan()" class="buttonChatBot">Zakat Ternakan</button></div>'+
    '<div class="botText"><button onClick="zakatFitrah()" class="buttonChatBot">Zakat Fitrah</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
// Bermulanya info zakat pendapatan
function zakatPendapatan() {
    let userHtml = '<p class="userText"><span>Zakat Pendapatan</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatPendapatan()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="pengertiaGajiZakatPendapatan()" class="buttonChatBot">Pengertian Gaji</button></div>'+
    '<div class="botText"><button onClick="pendapatanBebasZakatPendapatan()" class="buttonChatBot">Pendapatan Bebas</button></div>'+
    '<div class="botText"><button onClick="pengertianPerolehanZakatPendapatan()" class="buttonChatBot">Pengertian Perolehan</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatPendapatan()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="syaratWajibZakatPendapatan()" class="buttonChatBot">Syarat-syarat Wajib</button></div>'+
    '<div class="botText"><button onClick="testingButton()" class="buttonChatBot">Kadar Zakat</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatPendapatan() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Pendapatan termasuklah segala jenis hasil pendapatan atau pulangan sebagai balasan perkhidmatan wang berupa gaji, upah, bonus, dividen, hasil sewaan, royalti, hibah, elaun, honorarium, pampasan, pencen, perniagaan bermusim dan lain-lain bentuk perolehan dan apa jua pendapatan berdasarkan kerjaya atau sebagai ahli profesional.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertiaGajiZakatPendapatan() {
    let userHtml = '<p class="userText"><span>Pengertian Gaji</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Iaitu pendapatan seseorang yang merupakan ganjaran perkhidmatannya dengan majikan atau orang perseorangan atau syarikat atau institusi. Pendapatan penggajian merangkumi:<p>i)	 	Gaji tahunan.</p><p>ii)	 	Tunggakan gaji.</p><p>iii)	 	Imbuhan tetap.</p><p>iv)	 	Lain-lain (termasuk bonus atau sesuatu yang boleh dikira sebagai pendapatan yang berkaitan dengan penggajian).</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pendapatanBebasZakatPendapatan() {
    let userHtml = '<p class="userText"><span>Pendapatan Bebas</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Iaitu pendapatan seseorang melalui sesuatu kerja atau usaha kepakaran atau perkhidmatan yang merupakan ganjaran kepada khidmatnya. Pendapatan bebas ini merangkumi:<p>i)	 	Khidmat guaman</p><p>ii)	 	Khidmat nasihat.</p><p>iii)	 	Juru perunding.</p><p>iv)	 	Rawatan perubatan.</p><p>v)	 	Kejuruteraan.</p><p>vi)	 	Lain-lain.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianPerolehanZakatPendapatan() {
    let userHtml = '<p class="userText"><span>Pengertian Perolehan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Perolehan bermaksud pendapatan yang dihasilkan daripada pemilikan harta seperti hasil kebun/ladang, rumah sewa, hasil pajakan tanah dan lain-lain perolehan.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatPendapatan() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Firman Allah S.W.T. mafhumnya: “Wahai orang-orang yang beriman, belanjakanlah (pada jalan Allah) sebahagian daripada hasil usaha kamu yang baik-baik.” (Al-Baqarah: 267).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function syaratWajibZakatPendapatan() {
    let userHtml = '<p class="userText"><span>Syarat-syarat Wajib</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Pendapatan wajib dikeluarkan zakat apabila memenuhi syarat-syarat berikut:<p>i)	 	Islam</p><p>Zakat hanya diwajibkan keatas individu Islam yang cukup syarat untuk berzakat. Bagi syarikat atau perniagaan yang mempunyai pemilikan bercampur (bahagian orang Islam dan bukan Islam), hanya bahagian pemilikan orang Islam sahaja yang dikenakan zakat.</p><p>ii)	 	Pemilikan sempurna</p><p>Harta yang dikenakan zakat mestilah ada kesempurnaan dari segi pemilikan (hak milik aset) dan keupayaan mengurus iaitu mempunyai kuasa penuh ke atas harta.</p><p>iii)	 	Pendapatan/hasil yang halal</p><p>Pendapatan dari sumber yang halal. Pendapatan yang diperolehi oleh seseorang dari sumber yang haram seperti riba, perjudian dan seumpamanya hendaklah ditolak dari kiraan pendapatannya yang dizakatkan. Pendapatan-pendapatan dari sumber haram tersebut hendaklah diserahkan kepada Baitulmal, Majlis Agama Islam Melaka.</p><p>iv)	 	Cukup Nisab</p><p>Apabila pendapatan bersamaan atau melebihi nilai semasa 85gm emas maka pendapatan tersebut dikenakan zakat.</p><p>v)	 	Haul</p><p>Apabila pendapatan yang disimpan melebihi tempoh setahun.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kadarZakatZakatPendapatan() {
    let userHtml = '<p class="userText"><span>Kadar Zakat</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Kadar zakatnya ialah sebanyak 2.5% berpandukan kepada kadar Zakat Emas kerana gaji dan pendapatan bebas itu diterima dalam bentuk matawang/nilai wang.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Bermulanya info zakat wang simpanan
function zakatWangSimpanan() {
    let userHtml = '<p class="userText"><span>Zakat Wang Simpanan</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatWangSimpanan()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="pengertiaGajiZakatPendapatan()" class="buttonChatBot">Pengertian Gaji</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatWangSimpanan()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="syaratWajibZakatPendapatan()" class="buttonChatBot">Syarat-syarat Wajib</button></div>'+
    '<div class="botText"><button onClick="kaedahPengiraanZakatWangSimpanan()" class="buttonChatBot">Kaedah Pengiraan</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatWangSimpanan() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Zakat Wang Simpanan merupakan zakat yang dikenakan ke atas wang yang disimpan sama ada dalam bentuk wang kertas, syiling atau yang setaraf dengan emas dan perak di mana ia memberi kuasa beli kepada penggunaanya. Zakat Wang Simpanan adalah merangkumi simpanan di dalam Akaun Simpanan, Simpanan Tetap, Simpanan Semasa serta lain-lain bentuk simpanan.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatWangSimpanan() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Saidina Ali telah meriwayat bahawa Nabi Muhammad S.A.W telah bersabda; “Apabila kamu mempunyai 200 dirham dan telah cukup haul (genap setahun) diwajibkan zakatnya 5 dirham, dan tidak diwajibkan mengeluarkan zakat (emas) kecuali kamu mempunyai 20 dinar (salah satu matawang zaman dahulu yang digunakan di negara Arab). Apabila kamu mempunyai 20 dinar dan telah cukup haulnya diwajibkan zakatnya setengah dinar. Demikian juga kadarnya jika nilainya bertambah dan tidak diwajibkan zakat bagi sesuatu harta kecuali genap setahun.” (Riwayat Abu Dawud dan Baihaqi).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kaedahPengiraanZakatWangSimpanan() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Pengiraan Zakat Wang Simpanan adalah berdasarkan kepada jumlah baki yang paling rendah pada simpanan-simpanan yang dimiliki setelah ditolak dengan faedah (akaun konvensional) dan dicampur dengan hibah (Akaun Wadiah) yang diterima pada tahun tersebut.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
// Bermulanya info zakat perniagaan
function zakatPerniagaan() {
    let userHtml = '<p class="userText"><span>Zakat Perniagaan</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatPerniagaan()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatPerniagaan()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="syaratWajibZakatPerniagaan()" class="buttonChatBot">Syarat-syarat Wajib</button></div>'+
    '<div class="botText"><button onClick="pengiraanZakatPerniagaan()" class="buttonChatBot">Kaedah Pengiraan</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatPerniagaan() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Zakat Perniagaan ialah zakat yang wajib dikeluarkan hasil daripada harta perniagaan sama ada yang melibatkan barangan atau perkhidmatan. Bentuk-bentuk perniagaan ialah:<p>i)	 	Perniagaan persendirian (tunggal)</p><p>ii)	 	Perniagaan perkongsian</p><p>iii)	 	Perniagaan syarikat</p><p>iv)	 	Koperasi</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatPerniagaan() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Hadis Rasulullah daripada Samrah katanya: “Adalah Rasulullah S.A.W menyuruh kami mengeluarkan zakat daripada barang- barang yang disediakan untuk jual beli.” (Riwayat Abu Daud).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function syaratWajibZakatPerniagaan() {
    let userHtml = '<p class="userText"><span>Syarat-syarat Wajib</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span><p>i)	 	Muslim.</p><p>ii)	 	Harta dan perkhidmatan yang halal.</p><p>iii)	 	Cukup nisab.</p><p>iv)	 	Cukup haul.</p><p>v)	 	Harta yang produktif (al-Nama’).</p><p>vi)	 	Milik sempurna.</p><p>vii)	 	Sumber harta perniagaan.</p><p>viii)	 	Niat untuk diniagakan.</p><p>ix)	 	Harta perniagaan tidak digunakan untuk kegunaan sendiri.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengiraanZakatPerniagaan() {
    let userHtml = '<p class="userText"><span>Kaedah Pengiraan</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="modalKerjaZakatPerniagaan()" class="buttonChatBot">Modal Kerja</button></div>'+
    '<div class="botText"><button onClick="modalBerkembangZakatPerniagaan()" class="buttonChatBot">Modal Berkembang</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function modalKerjaZakatPerniagaan() {
    let userHtml = '<p class="userText"><span>Modal Kerja</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>[(Aset Semasa – Tanggungan Semasa) +/- Pelarasan] x % Pemilikan Saham Muslim x 2.5%.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function modalBerkembangZakatPerniagaan() {
    let userHtml = '<p class="userText"><span>Modal Berkembang</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>[(Ekuiti pemilik + Liabiliti Jangka Panjang – Aset Tetap – Aset Bukan Semasa) +/- Pelarasan] x % Pemilikan Saham Muslim x 2.5%.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
// Bermulanya info zakat emas perak
function zakatEmasPerak() {
    let userHtml = '<p class="userText"><span>Zakat Emas/Perak</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatEmasPerak()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatEmasPerak()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="syaratWajibZakatEmasPerak()" class="buttonChatBot">Syarat-syarat Wajib</button></div>'+
    '<div class="botText"><button onClick="kategoriWajibZakatEmasPerak()" class="buttonChatBot">Kategori Emas yang Diwajibkan Zakat</button></div>'+
    '<div class="botText"><button onClick="nisabEmasZakatEmasPerak()" class="buttonChatBot">Nisab dan Kadar Zakat Emas</button></div>'+
    '<div class="botText"><button onClick="nisabPerakZakatEmasPerak()" class="buttonChatBot">Nisab dan Kadar Zakat Perak</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatEmasPerak() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Emas dan perak adalah hasil bumi yang memberi manfaat sama ada dalam bentuk asal atau siap diproses. Syariat mengharuskan emas dan perak digunakan dalam bentuk wang dan perhiasan.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatEmasPerak() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Emas dan perak adalah dua jenis harta yang disepakati kewajipan zakat ke atasnya dengan syarat-syarat tertentu. Firman Allah S.W.T. mafhumnya: “Dan (ingatlah) orang yang menyimpan emas dan perak tetapi tidak membelanjakannya pada jalan Allah, maka khabarkanlah kepada mereka dengan (balasan) azab seksa yang tidak terperi sakitnya.” (Al-Taubah: 34).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function syaratWajibZakatEmasPerak() {
    let userHtml = '<p class="userText"><span>Syarat-syarat Wajib</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span><p>i)	 	Islam.</p><p>ii)	 	Milik sempurna.</p><p>iii)	 	Cukup nisab.</p><p>iv)	 	Cukup haul.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kategoriWajibZakatEmasPerak() {
    let userHtml = '<p class="userText"><span>Kategori Emas yang Diwajibkan Zakat</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span><p>i).	Emas yang tidak dipakai.</p><p>Emas yang tidak dipakai bermaksud emas yang disimpan, tidak digunakan atau dipakai walaupun sekali dalam tempoh setahun samada dalam bentuk asal atau dijadikan perhiasan.</p><p>ii).	Emas perhiasan wanita</p><p>Emas sama ada dipakai (sebagai perhiasan yang halal) sekali sekala atau secara berterusan dalam tempoh setahun tidak wajib dikeluarkan zakat ke atasnya. Walau bagaimanapun, jika ia melebihi uruf (kebiasaan) maka wajib dikeluarkan zakat. Kadar yang diambil kira adalah berat emas yang melebihi uruf (tidak termasuk batu permata atau seumpamanya).</p><p>Nota : Uruf adalah merupakan had pemakaian setempat yang dibenarkan dan uruf berbeza mengikut negeri.</p><p>iii).	Emas sebagai alat pertukaran (wang)</p><p>Semua matawang yang berdasarkan emas dan perak diwajibkan zakat.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function nisabEmasZakatEmasPerak() {
    let userHtml = '<p class="userText"><span>Nisab dan Kadar Zakat Emas</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Nisab dan kadar Zakat Emas adalah berdasarkan dalil berikut: Hadis Nabi S.A.W.yang bermaksud; “Tiada wajib atas engkau sesuatu (pada emas) sehingga engkau memiliki 20 dinar (85 gram). Apabila ada pada engkau 20 dinar dan cukup haul, maka wajiblah zakat padanya ½ dinar (2.5%) maka sekiranya lebih (dari 20 dinar), hendaklah dihisab menurut lebihannya itu (2.5%) daripada keseluruhannya.” (Riwayat Abu Daud).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function nisabPerakZakatEmasPerak() {
    let userHtml = '<p class="userText"><span>Nisab dan Kadar Zakat Perak</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Ijma’ Ulama’ telah menetapkan nisab Zakat Perak sebanyak lima (5) auqiyah. Satu auqiyah bersamaan 40 dirham (5 x 40 = 200 dirham) iaitu bersamaan 595 gram. [satu auqiyah = 119 gram].</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Bermulanya zakat saham
function zakatSaham() {
    let userHtml = '<p class="userText"><span>Zakat Saham</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatSaham()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatSaham()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="kaedahPengiraanZakatSaham()" class="buttonChatBot">Kaedah Pengiraan</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatSaham() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Saham adalah wang modal yang dilaburkan dalam perniagaan sesebuah syarikat dan seumpamanya. Perniagaan saham dilaksanakan berpandukan harga saham dalam pasaran semasa bukan atas nilai saham asal semasa belian.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatSaham() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Rasulullah S.A.W bersabda; “Bayarlah zakat kekayaan kamu yang dengannya kamu memperoleh kesenangan.” (Riwayat Tabrani Daripada Abu Darda).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kaedahPengiraanZakatSaham() {
    let userHtml = '<p class="userText"><span>Kaedah Pengiraan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>i)	 	Pemilik saham boleh mengasingkan pengiraan zakat atas saham kepada dua kumpulan iaitu saham yang masih dimiliki di hujung haul dan saham-saham yang dijualbeli sepanjang haul.<p>ii)	 	Bagi saham-saham yang masih dimiliki selepas cukup haul, maka pengiraan zakat ialah 2.5% atas harga terendah antara harga pasaran dan harga belian.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
// Bermulanya zakat pertanian
function zakatPertanian() {
    let userHtml = '<p class="userText"><span>Zakat Pertanian</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatPertanian()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatPertanian()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="syaratWajibZakatPertanian()" class="buttonChatBot">Syarat-syarat Wajib</button></div>'+
    '<div class="botText"><button onClick="nisabZakatPertanian()" class="buttonChatBot">Nisab Zakat</button></div>'+
    '<div class="botText"><button onClick="kadarZakatPertanian()" class="buttonChatBot">Kadar Zakat</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatPertanian() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Zakat Pertanian merupakan zakat hasil tanaman yang menjadi makanan asasi penduduk sesebuah negeri. Di Malaysia ini, dipersetujui bahawa makanan asasi utama ialah beras yang dihasilkan dari padi. Oleh itu, diwajibkan zakat ke atas hasil padi yang telah sempurna syarat-syarat tertentu.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatPertanian() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Dari Abu Hurairah berkata, bersabda Rasulullah S.A.W; “Tanaman yang diairi dengan hujan zakatnya 10%, dan yang diairi dengan selain air hujan zakatnya 5%.” (Riwayat Tarmizi).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function syaratWajibZakatPertanian() {
    let userHtml = '<p class="userText"><span>Syarat-syarat Wajib</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span><p>i)	 	Islam</p><p>ii)	 	Sempurna milik.</p><p>iii)	 	Merdeka.</p><p>iv)	 	Cukup nisab.</p><p>v)	 	Biji-bijian dan makanan asasi setempat sahaja.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function nisabZakatPertanian() {
    let userHtml = '<p class="userText"><span>Nisab Zakat</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Kadar nisab Zakat Padi ialah 363 gantang atau 1,300kg padi.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kadarZakatPertanian() {
    let userHtml = '<p class="userText"><span>Kadar Zakat</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Terdapat tiga kadar yang telah ditentukan oleh Para Ulama’ iaitu:<p>i)	 	Bagi tanaman yang dijaga dengan sumber percuma (seperti air hujan) maka kadarnya ialah 10%.</p><p>ii)	 	Bagi tanaman yang dijaga dengan sumber yang dibeli maka kadar zakatnya ialah 5%.</p><p>iii)	 	Bagi tanaman yang dijaga dengan menggunakan kedua-dua sumber di atas maka kadarnya ialah 7.5%.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Bermulanya zakat ternakan
function zakatTernakan() {
    let userHtml = '<p class="userText"><span>Zakat Ternakan</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatTernakan()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatTernakan()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="binatangWajibZakatTernakan()" class="buttonChatBot">Binatang Ternakan yang Wajib Zakat</button></div>'+
    '<div class="botText"><button onClick="kaedahZakatLembuZakatTernakan()" class="buttonChatBot">Kaedah Pengeluaran Zakat Lembu/Kerbau</button></div>'+
    '<div class="botText"><button onClick="kaedahZakatKambingZakatTernakan()" class="buttonChatBot">Kaedah Pengeluaran Zakat Kambing/Biri-biri</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatTernakan() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Zakat binatang ternakan ialah zakat yang diwajibkan ke atas binatang-binatang yang dipelihara iaitu lembu, kerbau, kambing, biri-biri, kibas dan unta apabila sempurna syarat-syaratnya.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatTernakan() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Hadis Nabi S.A.W. yang bermaksud; “Daripada Muaz Ibnu Jabal, beliau berkata: Baginda Rasullullah S.A.W. telah mengutus aku ke Yaman dan beliau memerintahkan aku mengambil dari setiap 40 ekor lembu, satu ekor lembu musinnah (seekor lembu betina yang umurnya mencapai 3 tahun) dan tiap-tiap 30 ekor lembu, tabi’ atau tabiah (satu ekor lembu jantan atau betina yang mencapai umur 2 tahun).” (Riwayat Ibnu Majah).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function binatangWajibZakatTernakan() {
    let userHtml = '<p class="userText"><span>Binatang Ternakan yang Wajib Zakat</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Binatang ternakan yang wajib dikenakan zakat ialah:<p>i)	 	Lembu (termasuk kerbau).</p><p>ii)	 	Kambing (termasuk biri-biri) dan kibas.</p><p>iii)	 	Unta.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kaedahZakatLembuZakatTernakan() {
    let userHtml = '<p class="userText"><span>Kaedah Pengeluaran Zakat Lembu/Kerbau</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Pendapatan wajib dikeluarkan zakat apabila memenuhi syarat-syarat berikut:<p>i)	 	 Apabila bilangan itu lebih daripada yang dinyatakan di atas, maka bagi setiap 30 ekor lembu diwajibkan zakat satu ekor anak lembu jantan yang berumur satu tahun. Bagi setiap 40 ekor lembu diwajibkan zakat satu ekor anak lembu betina yang berumur dua tahun</p><p>ii)	 	Jika ternakan bercampur, maka zakatnya terserah kepada pembayar sama ada mahu mengeluarkan zakat lembu/kerbau. Pilihlah yang sederhana atau boleh diganti dengan nilai harga bagi ternakan berkenaan untuk dikeluarkan zakat.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kaedahZakatKambingZakatTernakan() {
    let userHtml = '<p class="userText"><span>Kaedah Pengeluaran Zakat Kambing/Biri-biri</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Pendapatan wajib dikeluarkan zakat apabila memenuhi syarat-syarat berikut:<p>i)	 	Setiap pertambahan 100 ekor, zakatnya ditambahkan satu ekor kambing dua tahun dan seterusnya.</p><p>ii)	 	Jika semua kambing yang sampai nisab itu jantan maka harus dikeluarkan yang jantan sebagai zakat, tetapi apabila ada antaranya yang betina hendaklah sebahagian dari zakat yang dikeluarkan itu betina.</p><p>iii)	 	Jika bercampur kambing dan biri-biri serta beberapa jenisnya maka apabila cukup nisab, bolehlah dikeluarkan zakat mengikut pilihan tuannya sama ada kambing/biri-biri atau diganti dengan nilai harga bagi ternakan berkenaan untuk dikeluarkan zakat.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
// Bermulanya zakat fitrah
function zakatFitrah() {
    let userHtml = '<p class="userText"><span>Zakat Fitrah</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="pengertianZakatFitrah()" class="buttonChatBot">Pengertian</button></div>'+
    '<div class="botText"><button onClick="dalilPensyariatanZakatFitrah()" class="buttonChatBot">Dalil Pensyariatan</button></div>'+
    '<div class="botText"><button onClick="syaratWajibZakatFitrah()" class="buttonChatBot">Syarat-syarat Wajib</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function pengertianZakatFitrah() {
    let userHtml = '<p class="userText"><span>Pengertian</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Zakat Fitrah ialah zakat diri yang difardhukan ke atas setiap individu Muslim lelaki dan perempuan yang berkemampuan mengikut syarat-syarat yang ditetapkan oleh syarak.</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function dalilPensyariatanZakatFitrah() {
    let userHtml = '<p class="userText"><span>Dalil Pensyariatan</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Hadis Nabi S.A.W yang bermaksud; “Daripada Ibnu Umar meriwayatkan bahawa Rasulullah S.A.W; telah memfardhukan Zakat Fitrah pada bulan Ramadhan ke atas manusia dengan mengeluarkan satu gantang kurma atau satu gantang gandum ke atas setiap orang yang merdeka atau hamba lelaki atau perempuan Muslim.” (Riwayat Muslim).</span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function syaratWajibZakatFitrah() {
    let userHtml = '<p class="userText"><span>Syarat-syarat Wajib</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = 
    '<div class="botText"><span>Orang Islam yang wajib mengeluarkan Zakat Fitrah untuk diri, keluarga dan tanggungannya hendaklah memenuhi syarat-syarat berikut:<p>i)	 	Mempunyai lebihan makanan atau harta dari keperluan tanggungannya pada malam dan pagi Hari Raya.</p><p>ii)	 	Anak yang lahir sebelum matahari jatuh pada akhir Ramadhan dan masih hidup selepas terbenam matahari.</p><p>iii)	 	Memeluk Islam sebelum terbenam matahari pada akhir bulan Ramadhan dan berkekalan Islamnya.</p><p>iv)	 	Seseorang yang meninggal selepas terbenam matahari akhir Ramadhan.</p></span></div>';

    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kiraZakatButton() {
    console.log("Sekarang di 'function kiraZakatButton'");
    first_bot_message = false;
    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    input_gaji_bulanan = false;

    let userHtml = '<p class="userText"><span>Kira Zakat</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="kiraZakatTiadaTanggungan()" class="buttonChatBot">Zakat Pendapatan (Tiada Tanggungan)</button></div>'+
    '<div class="botText"><button onClick="kiraZakatAdaTanggungan()" class="buttonChatBot">Zakat Pendapatan (Ada Tanggungan)</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function kelayakanZakatButton() {
    let userHtml = '<p class="userText"><span>Kelayakan Zakat</span></p>';
    $("#chatbox").append(userHtml);

    let botHtml = '<div class="botText"><span>Kategori manakah anda ingin semak?</span></div>';
    $("#chatbox").append(botHtml);

    document.getElementById("buttonChatBox").innerHTML =
    '<div class="botText"><button onClick="semakFakirMiskin()" class="buttonChatBot">Fakir/Miskin</button></div>'+
    '<div class="botText"><button onClick="semakPermulaanSelainFakirMiskin ()" class="buttonChatBot">Selain Fakir/Miskin</button></div>'+
    '<div class="botText"><button onClick="home()" class="buttonChatBot">Home</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function testingButton() {
    let userHtml = '<p class="userText"><span>Testing</span></p>';
    $("#chatbox").append(userHtml);

    document.getElementById("buttonChatBox").innerHTML = '<div class="botText"><button onClick="testingButton()" class="buttonChatBot">Testing Je</button></div>';

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}