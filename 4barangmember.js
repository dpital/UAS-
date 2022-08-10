function hasil(){
	var jumlah = parseInt(document.getElementById("jumlah").value);
	var status = (document.form.status.value);
	var harga = parseInt(document.getElementById("harga").value);
	var total = jumlah * harga;
	document.getElementById("total").innerHTML = total;

	var diskon = 0.0;
	var bayar;
	if (status == "Member"){
		diskon = 0.10 * total;
		document.form.diskon.value=eval(diskon).innerHTML = "10%";
	} else {
		status = "nonMember"
		diskon = 0.0;
		document.form.diskon.value=eval(diskon).innerHTML = "0%";
	}
	bayar = total - diskon;
	document.getElementById("bayar").innerHTML = bayar;
}