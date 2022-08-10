function hasil(){
	var merk = (document.form.merk.value);
	var aksesoris = parseInt(document.getElementById("barang").value);
	var pembayaran = parseInt(document.getElementById("Pembayaran" ).value);
	var harga = 0.0;
	var pajakDiskon = 0.0;
	var total;
	if (merk == "Honda"){
		harga = 15000000;
	} else if (merk == "Yamaha"){
		harga = 14000000;
	} else {
		harga = 13000000;
	}
	merk = harga;
	document.getElementById("harga").innerHTML = merk;

	if (document.getElementById("barang").checked){
		aksesoris = "Velg";
		harga = 450000;
	} else if (document.getElementById("barang1").checked){
		aksesoris = "Helm";
		harga = 250000;
	}else {
		harga = 300000;
	}
	aksesoris = harga;
	document.getElementById("harga").innerHTML = aksesoris;

	harga = aksesoris + merk ;
	document.getElementById("harga").innerHTML = harga;

	if (document.getElementById("Pembayaran").checked){
		pembayaran = "Tunai";
		pajakDiskon = 0.10;
		total = harga - (pajakDiskon * harga);
		document.getElementById("pajakDiskon").innerHTML = "10%";
	} else if (document.getElementById("Pembayaran")){
		pembayaran = "Kredit";
		pajakDiskon = 0.15;
		total = harga + (pajakDiskon * harga);
		document.getElementById("pajakDiskon").innerHTML = "15%";
	}
	document.getElementById("total").innerHTML = total;

	
}
