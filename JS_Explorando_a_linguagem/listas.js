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