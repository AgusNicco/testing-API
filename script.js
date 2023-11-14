const call = await fetch("http://localhost:5291");
const data = await call.json();
console.log(data);