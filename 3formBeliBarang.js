function hasil(){
	var hargaBarang = parseInt(document.getElementById('hargaBarang').value);
	var jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);
	var total = hargaBarang * jumlahBarang;
	document.getElementById('total').innerHTML = total;
};