let nomes = ['Eliane', 'Ana', 'Maria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);

// EXERCÍCIO 02 - Adicionando elementos ao final
nomes.push('Carlos', 'Fernanda');
console.log(nomes);

// EXERCÍCIO 03 - Inserindo no início
nomes.unshift('Roberto');
console.log(nomes);

// EXERCÍCIO 04 - Removendo o último
let removidoFinal = nomes.pop();
console.log("Removido:", removidoFinal);
console.log(nomes);

// EXERCÍCIO 05 - Removendo o primeiro
let removidoInicio = nomes.shift();
console.log("Removido:", removidoInicio);
console.log(nomes);

// EXERCÍCIO 06 - Removendo e adicionando elementos
let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva', 'Pera'];
frutas.splice(1, 2, 'Manga', 'Kiwi');
console.log(frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
console.log("O tamanho do Array frutas é: " + frutas.length);

// EXERCÍCIO 08 - Criando um histórico de páginas
let historico = [];
historico.push('home', 'sobre', 'contato');
console.log(historico);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
let saida = historico.pop();
console.log("Saída da página:", saida);
console.log(historico);

// EXERCÍCIO 10 - Alterando elementos
let cores = ['vermelho', 'verde', 'amarelo', 'roxo'];
cores.splice(2, 1, 'azul-marinho');
console.log(cores);
