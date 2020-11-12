let generalidades = document.getElementById("generalidades");
let http = document.getElementById("http");
let arq = document.getElementById("arq");

let con = document.getElementById("control");
let col = document.getElementById("color");

let g = document.getElementById("gen");
let a = document.getElementById("arqu");
let d = document.getElementById("cara");
let v = document.getElementById("cont");

generalidades.onmouseup = function(){
	generalidades.size.width = "500px";
	http.size.width = "500px";
	arq.size.width = "500px";
}

/*function incrementaAncho(){
	generalidades.size.width = "500px";
	http.size.width = "500px";
	arq.size.width = "500px";

}*/
con.onmouseup = function (){
	con.style.backgroundColor = "#B1B3F2";
	col.style.backgroundColor = "#B1B3F2";
	g.style.backgroundColor = "00FF15";
	a.style.backgroundColor = "00FF15";
	d.style.backgroundColor = "00FF15";
	v.style.backgroundColor = "00FF15";
	//g.style.color="00FF15";
	//a.style.color="00FF15";
	//d.style.color="00FF15";
	//v.style.color="00FF15";
}

/*generalidades.addEventListener('mouseover', incrementaAncho);
http.addEventListener('mouseover', incrementaAncho);
arq.addEventListener('mouseover',incrementaAncho);*/

