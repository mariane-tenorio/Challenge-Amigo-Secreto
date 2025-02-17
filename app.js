let amigos = [];

function adicionarAmigo() {
    let nomes = document.getElementById('amigo').value;
    if (nomes) {
        amigos.push(nomes);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    } else {
        alert('Por favor, insira um nome');
    }
    limparCampo();
}

function limparCampo() {
    nome = document.querySelector('input');
    CharacterData.value = '';
}

function mostrarAmigos() {
	let amigosHTML = document.querySelector("#listaAmigos");
	amigosHTML.innerHTML = "";
	for (let i = 0; i < amigos.length; i++) {
		let amigo = amigos[i];
		let li = document.createElement("li");
		li.textContent = amigo;
		amigosHTML.appendChild(li);
	}
}

function sortearAmigo() {
	if (amigos.length == 0) {
		alert("Não tem amigos para sortear");
		return;
	}
	let resultadoHTML = document.querySelector("#resultado");
	let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
	resultadoHTML.innerHTML = `${amigoSorteado}`;
}