const imagem = document.querySelector('.fotopersonagem-1');
const personagem2 = document.querySelector('.fotopersonagem-2');
const personagem3 = document.querySelector('.fotopersonagem-3');
const personagem4 = document.querySelector('.fotopersonagem-4');
const input = document.querySelector('input');

const exibirNome1 = document.querySelector('#exibirnome1');
const exibirNome2 = document.querySelector('#nomeDoPersonagem2');
const exibirNome3 = document.querySelector('#nomeDoPersonagem3');
const exibirNome4 = document.querySelector('#nomeDoPersonagem4');


const numeromaximodepersonagens = 671;
let nomeDoPersonagem01;

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * numeromaximodepersonagens);
}

window.onload = pegarPersonagem = () => {
    let id = gerarValorAleatorio();
    let numero2 = gerarValorAleatorio();
    let numero3 = gerarValorAleatorio();
    let numero4 = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${id}, ${numero2}, ${numero3}, ${numero4}`,{
method: 'GET',
headers: {
    Accept: 'application/json',
    "Content-type": 'application/json'}

    }).then((response) => response.json()).then((data) => { 
    imagem.src = data[0].image;
    imagem.alt = data[0].name;
    nomeDoPersonagem1 = data[0].name;
    personagem2.src = data[1].image;
    personagem2.alt = data[1].name;
    nomeDoPersonagem2 = data[1].name;
    personagem3.src = data[2].image;
    personagem3.alt = data[2].name;
    nomeDoPersonagem3 = data[2].name;
    personagem4.src = data[3].image;
    personagem4.alt = data[3].name;
    nomeDoPersonagem4 = data[3].name;
    

    });
}