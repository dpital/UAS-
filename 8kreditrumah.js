function hasil(){
	var tipeRumah = (document.form.kategori.value);
	var harga;
	var kredit = document.getElementById("Kredit").value;
	document.getElementById("lamaKredit").innerHTML = kredit;
	if (tipeRumah == "Alamanda"){
		document.getElementById("tipe").innerHTML = tipeRumah;
		harga = 120000000;
		document.getElementById("harga").innerHTML = harga;
	} else {
		document.getElementById("tipe").innerHTML = tipeRumah;
		harga = 130000000;
		document.getElementById("harga").innerHTML = harga;
	}

	var uangMuka;
	uangMuka = harga * 0.20;
	document.getElementById("uangMuka").innerHTML = uangMuka;

	var sisa;
	sisa = harga - uangMuka;
	document.getElementById("sisa").innerHTML = sisa;
	
	var angsuran;
	angsuran = sisa / kredit;
	document.getElementById("angsuran").innerHTML = angsuran;
	var bulan = "";
	var angsuranTabel = "";
	var sisaTabel = "";
	for (i = 1; i <= kredit; i++){
		bulan +=+ i + "<br>";
		sisa = sisa - angsuran;
		angsuranTabel += angsuran + "<br>";
		sisaTabel += sisa + "<br>";
		
		document.getElementById("bulan").innerHTML = bulan;
		document.getElementById("angsuranTabel").innerHTML = angsuranTabel;
		document.getElementById("sisaTabel").innerHTML = sisaTabel;
	}
}

