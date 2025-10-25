function exibir(){
    let paragrafo = document.getElementById("nome");
    console.log(paragrafo);
    paragrafo.innerHTML = "Exibindo Nome!!!"
}

function ocultar(){
   document.getElementById("nome"),innerHTML = ''

}

function Indo(){

    document.getElementById("Aguia").src = 'Aguiaindo.webp'
}

function Voltando(){

    document.getElementById("Aguia").src = 'Aguiavoltando.webp'
}

function estilizar(){

    let texto = document.getElementById('texto2');
    texto.style.fontSize = '40px';
    texto.style = 'color: green;';
}

function esconder(){

    document.getElementById('teste').style.display = 'none';
}

function ExibirParagrafo(){

    document.getElementById('oculto').style.display = 'block';
}

function exibirmensagem(){

    window.alert("Perigooooooo, uma ameaça foi detectada");
}



