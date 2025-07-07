const { json } = require("stream/consumers");

async function recieveJSON() {
    const response = await fetch('/', { method: 'POST'});
    const content = await response.json();
    document.getElementById('Teste').innerText = str(json);
}

setInterval(recieveJSON, 5000)