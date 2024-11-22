// // -------------------- E x 1 - Cadastro de Alunos -------------------- //

// const usuario = {nome: 'Danel', idade: 17, time: 'Fluminense'}
// const bemVindo = 'Seja bem vindo'
// const bemVindoGeral = 'Seja bem vindo geral'
// const malVindo = 'Seja mal vindo'

// let numeroDeRepetições = 0;

// do {
//     usuario.time === 'Fluminense' && usuario.idade >= 18 
//     ? console.log(bemVindo) 
//     : usuario.time === 'Flamengo' && usuario.idade >= 18 
//     ? console.log(malVindo) 
//     :  usuario.idade >= 18 
//     ?  console.log(bemVindoGeral) 
//     : console.log('Não vendemos pra menores')/
//     numeroDeRepetições++
// } while (numeroDeRepetições < 1)

// // -------------------- E x 2 - Simulador de Notas -------------------- //

// let usuario1 = require ('prompt-sync')();
// let cadastroDeAlunos = [];
// let continuar ;

// do {
//     let nome = usuario1('Digite seu nome: ');
//     let idade = usuario1('Digite sua idade: ');

//     cadastroDeAlunos.push({nome: nome, idade: idade});

//     continuar = usuario1('Deseja cadastrar novo aluno? (s/n): ');
// } while (continuar.toLowerCase() === 's');

// console.log('Alunos cadastrados na lista, ',cadastroDeAlunos);

// // -------------------- E x 3 - Simulador de Notas -------------------- //

// const SimularNotas = require ('prompt-sync')();

// let NotaAlunos = [];
// let Prosseguir;

// do {
//     let Nota1 = parseFloat(SimularNotas(" Digite sua primeira nota: "));
//     let Nota2 = parseFloat(SimularNotas(" Digite sua segunda nota: "));
//     let Nota3 = parseFloat(SimularNotas(" Digite sua terceira nota: "));
//     let MediaNotas = (Nota1 + Nota2 + Nota3 ) /3;

//     console.log(MediaNotas);

//     NotaAlunos.push({nota1: Nota1, nota2: Nota2, nota3: Nota3});
//     NotaAlunos.push({MediaNotas});

//     Prosseguir = SimularNotas(" Deseja avaliar mais uma média de notas? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Média retirada de nossas notas, `,NotaAlunos);

// // -------------------- E x 4 - Simulador de Notas -------------------- //

// const usuario4 = {
//     nome: 'gomes',
//     senha: 1234
// };

// do{
// if (usuario4.nome === 'gomes' && usuario4.senha === 1234) {
//     console.log(Bem-vindo, ${usuario4.nome});
// } else {
//     console.log('Acesso negado.');
// }
// }while(false);

// // -------------------- E x 5 - Simulador de Notas -------------------- //

// let num = require ('prompt-sync')();
// let poten = [];
// let contin;

// do{
//     let numero = num("digite um numero");
//     let potencia = num("digite uma potencia");
//     let calculo = numero ** potencia

//     poten.push ({calculo});

//     contin = num('deseja colocar outra conta (s/n): ');
// }while(contin.toLowerCase() === 's');

// console.log('contas feitas,', poten);

// // -------------------- E x 6 - Simulador de Notas -------------------- //

// let usuario5 = require ('prompt-sync') ();

// function senhaForte(senha) {
//     let temLetra = /[A-Za-z]/.test(senha)
//     let temNumero = /[1-9]/.test(senha)
//     return senha.length >= 8 && temLetra && temNumero;
// }

// let senhaValida = false;

// do {
//     let senha = usuario5('Cadastre sua senha: ');
    
//     if (senhaForte(senha)) {
//         console.log('Senha aprovada');
//         senhaValida = true;
//     } else {
//         console.log('A senha cadastrada deve conter 8 ou mais caracteres, incluindo letras e números');
//     }
// } while (!senhaValida );

// // -------------------- E x 7 - Simulador de Notas -------------------- //

// let nota = require ('prompt-sync')();
// let fdp = [];
// let calcular;

// do{
//     let nota1 = parseFloat(nota("digite uma nota"));
//     let nota2 = parseFloat(nota("digite outra nota"));
//     let nota3 = parseFloat(nota("digite mais uma nota"));
//     let calculado = (nota1+nota2+nota3)/3;
   

//     fdp.push ({calculado});

//     calcular = nota('deseja calcular a nota de outro aluno?(s/n): ');
// }while(calcular.toLowerCase() === 's');

// console.log('notas', fdp);

// // -------------------- E x 8 - Simulador de Notas -------------------- //

// const prompt = require('prompt-sync')();

// let totalNotas = 0;
// let contadorNotas = 0;
// let continuar;

// do {
//     let nota = parseFloat(prompt('Digite uma nota: '));

//     totalNotas += nota;
//     contadorNotas++;

//     continuar = prompt('Deseja inserir outra nota? (s/n): ').toLowerCase();
// } while (continuar === 's');

// const media = totalNotas / contadorNotas;
// console.log(`A média das notas é: ${media.toFixed(2)}.`);


// // -------------------- E x 9 - Simulador de Notas -------------------- //

// let n = require('prompt-sync')();

// let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// let chute;

// console.log('Um número aleatório foi gerado. Tente adivinhar!');

// do {
//     chute = parseInt(n("Faça um chute: "));

//     if (chute !== numeroAleatorio) {
//         console.log(`Você errou o número. Tente novamente: `)
//     } 
    
// } while (chute !== numeroAleatorio)

//     console.log(`Você acertou o número era ${numeroAleatorio}.`)

// // -------------------- E x 10 - Simulador de Notas -------------------- //

// const prompt= require ('prompt-sync')();

// let cadastroalunos = [ ];
// let continuar;

// do{
//     let nome = prompt('Digite o nome do aluno:  ');
//     let idade = prompt('Digite a idade do aluno:  ');
//     if (idade >=16 && idade <= 100) {
//         console.log(`A idade está entre 16 e 100 anos.`);
//     }

//     cadastroalunos.push({nome: nome, idade: idade});

//     continuar= prompt('Deseja cadatrar novo aluno? (s/n) ')
// } while (continuar.toLocaleLowerCase() == 's')

//     console.log( 'Alunos cadastro na lista: ', cadastroalunos)

// // -------------------- E x 11 - Simulador de Notas -------------------- //

// const AveriguarEstoqueEproduto = require (prompt-sync)();

// let EstoqueEproduto = [];
// let ProximoPasso;

// do {
//     let NomeProduto = AveriguarEstoqueEproduto(" Digite o nome de seu produto: ");
//     let QuantidadeEstoque = AveriguarEstoqueEproduto(" Digite a quantidade de produtos em seu estoque: ");

//     EstoqueEproduto.push({nomdeproduto: NomeProduto, quantidadeestoque: QuantidadeEstoque});

//     ProximoPasso = AveriguarEstoqueEproduto(" Deseja vincular o número de outro produto com a quantidade em estoque? (S/N): ");

// } while (ProximoPasso == "S" || ProximoPasso == "s");

// console.log(`Estoque dos produtos denidos, `,EstoqueEproduto);

// // -------------------- E x 12 - Simulador de Notas -------------------- //

// const prm = require('prompt-sync')()
// function fatorial(n) {
//     let resultado = 1;
//     for (let i = 2; i <= n; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }

// let cont;

// do {
  
//     let numero = parseInt(prm("Digite um número inteiro positivo para calcular seu fatorial:"));

//     if (numero >= 0) {
      
//         let resultado = fatorial(numero);
//         console.log("O fatorial de " + numero + " é " + resultado + ".");
//     } else {
//         console.log("Por favor, digite um número inteiro positivo.");
//     }

//     cont = prompt("Você deseja calcular outro fatorial? (sim/não):").toLowerCase();

// } while (continuar === "sim");

// -------------------- E x 13 - Simulador de Notas -------------------- //

const recebe = require('prompt-sync')();
let saldo = 0
while (true){

let operacao = recebe("digite 'deposito' para depositar, 'saque' para sacar, 'sair' para sair");
if(operacao === 'deposito'){
    let deposito = parseFloat(recebe('falar do deposito'));
    if(!isNaN(deposito) && deposito > 0){
        saldo += deposito; 
        console.log (`seu deposito foi realizado com sucesso, seu valor é ${saldo.toFixed(2)}.`);
    
    }else{ console.log("valor invalido");}


}
else if(operacao === 'saque'){
    let saque = parseFloat(recebe('valor do saque'));
    if (!isNaN(saque) && saque > 0 && saque <= saldo ){
        saldo -= saque;
        console.log(`saque realizado com sucesso ${saldo.toFixed(2)}.`);
        console.log (`seu saque foi realizado com sucesso, seu valor é ${saldo.toFixed(2)}.`);

    }else{(saldo < saque)
        console.log(`operacao invalida ou saldo insuficiente, seu saldo é de ${saldo.toFixed(2)}.`);
    } 
    
    } else if (operacao === 'sair'){
    console.log('operacao encerrada');
    break;

    }else{
        console.log("operacao invalida");

    }

}