// output
function hasil(){
	var hargaBarang = parseInt(document.getElementById('hargaBarang').value);
	var jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);
	var total = hargaBarang * jumlahBarang;
	document.getElementById('total').innerHTML = total;

	var diskon = 0.10;
	var bayar;

	if (total > 1000000){
		bayar = total - (total*diskon);
		document.getElementById('bayar').innerHTML = bayar;
		document.getElementById('diskon').innerHTML = "10%";
	}	else {
		bayar = total;
		document.getElementById('bayar').innerHTML = bayar;
		document.getElementById('diskon').innerHTML = "0%";
	}
};