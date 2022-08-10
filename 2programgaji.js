function hasil(){
	var jk = parseInt(document.getElementById("jk").value);
	var upj = parseInt(document.getElementById("upahPerJam").value);
	var anak = parseInt(document.getElementById("anak").value);
	var gaji = parseInt(document.getElementById("gaji").value);
	var tunjangan = 0.10;
	var totalGaji = jk + upj + anak + gaji;
	document.getElementById("totalGaji").innerHTML = totalGaji;

	if ( anak > 2){
		totalGaji = totalGaji - (totalGaji*tunjangan);
		document.getElementById('totalGaji').innerHTML = totalGaji;
		document.getElementById('tunjangan').innerHTML = "10%";
	} else{
		document.getElementById('totalGaji').innerHTML = totalGaji;
		document.getElementById('tunjangan').innerHTML = "0%";
	}
	
} 