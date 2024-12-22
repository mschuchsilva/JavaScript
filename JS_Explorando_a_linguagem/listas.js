console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array("Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro);
console.log("Destinos possíveis - Lista proveniente de array");
console.log(listaDeDestinos);

listaDeDestinos.push("Porto Alegre");
console.log("Destinos possíveis - Lista proveniente de array com adição de novo destino.");
console.log(listaDeDestinos);

//remoção do destino São Paulo
listaDeDestinos.splice(1,1);
console.log("Destinos possíveis - Lista proveniente de array com remoção de destino.");
console.log(listaDeDestinos);
//impressão de destino específico - Porto Alegre
console.log("Exibição do destino específico - Porto Alegre");
console.log(listaDeDestinos[2]);