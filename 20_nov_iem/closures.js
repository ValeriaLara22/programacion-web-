function generadorDeNum(){
	var num = 8;
	function numero(){
		console.log(num);
	}
	num ++;
	return numero;
}

var nume=generadorDeNum();
nume();