let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const tituloLista = document.getElementById("tituloLista");

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    const tituloLista = document.getElementById("tituloLista");

    lista.innerHTML = "";

    if (amigos.length > 0) {
        tituloLista.classList.remove("hidden"); 
    } else {
        tituloLista.classList.add("hidden"); 
    }

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    const mensagemErro = document.getElementById("mensagemErro");
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        mensagemErro.textContent = "A lista está vazia. Adicione nomes antes de sortear.";
        resultado.innerHTML = "";
        return;
    }

    mensagemErro.textContent = "";
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = "Amigo secreto sorteado: " + amigoSorteado;
}

function reiniciarJogo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("mensagemErro").textContent = "";
    document.getElementById("tituloLista").classList.add("hidden"); 
}
