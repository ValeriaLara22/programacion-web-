//ejemplo solicitud sincrona
let req = new XMLHttpRequest();
req.open('GET', '', false);
req.send(null);
if (req.status == 200)
console.log(req.responseText);