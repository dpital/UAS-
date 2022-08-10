function hasil(){
	var kategori = document.getElementById("kategori").value;
	var jmlh_pemakaian = document.getElementById("jumlahListrik").value;
	var pajak;
	switch (kategori) {
		case "sosial":
			pajak = 0;
			break;
			case "rumah":
			pajak = 0.1;
			break;
			case "industri":
			pajak = 0.3;      
			break;
		}
	var tarif = 0;
	var abodemen;
	var subtotal;
	var teks = "";
	var jumlahListrik = "";
	var hasil_abodemen = "";
	var hasil_total = "";
	for(i = 1; i <= jmlh_pemakaian; i++){
		jumlahListrik +=+ i + "<br>";
		if (kategori == "sosial"){
			tarif += 300;
			teks += tarif + "<br>";
			abodemen = 10000;
			subtotal = abodemen + tarif;
			hasil_abodemen += abodemen + "<br>";
			hasil_total += subtotal + "<br>";
		} else if (kategori == "rumah"){
			tarif += 500;
			teks += tarif + "<br>";
			abodemen = 30000;
			subtotal = abodemen + tarif;
			hasil_abodemen += abodemen + "<br>";
			hasil_total += subtotal + "<br>";
		} else if (kategori == "industri"){
			tarif += 1000;
			teks += tarif + "<br>";
			abodemen = 50000;
			subtotal = abodemen + tarif;
			hasil_abodemen += abodemen + "<br>";
			hasil_total += subtotal + "<br>";
		} 
		document.getElementById("jumlahHasil").innerHTML = jumlahListrik;
		document.getElementById("tarifHasil").innerHTML = teks;
		document.getElementById("AbodemenHasil").innerHTML = hasil_abodemen;
		document.getElementById("SubtotalHasil").innerHTML = hasil_total;
		if(i==i){
			document.getElementById("outputTotal").innerHTML= subtotal;  
			let outpajak=pajak*subtotal;
			document.getElementById("outputPajak").innerHTML= outpajak;
			let bayar = outpajak + subtotal;
			document.getElementById("outputBayar").innerHTML= bayar;
	  }
	}
}