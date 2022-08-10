function hasil(){
	var jumlah = parseInt(document.getElementById("jumlahBarang").value);
	var harga = parseInt(document.getElementById("harga").value);
	var total = jumlah * harga;
	document.getElementById("total").innerHTML = total;
	var pajak = 0.10;
	var bayar;
	if (total > 100000){
		bayar = total + (total * pajak)
		document.getElementById('bayar').innerHTML = bayar;
		document.getElementById('pajak').innerHTML = "10%";
	}	else {
		document.getElementById('bayar').innerHTML = bayar;
		document.getElementById('pajak').innerHTML = "0%";
	}
}
