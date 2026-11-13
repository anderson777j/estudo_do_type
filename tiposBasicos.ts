//Array
let meuarray: string[] = [];
let meuarray2: Array<string> = [];
let meuarray3: (string | number)[] = []; //array que pode receber string ou number
let meuarray4: Array<string | number> = []; //array que pode receber string ou number
let meuarray5: Array<string | number | boolean> = []; //array que pode receber string, number ou boolean

meuarray.push("teste");
meuarray2.push("teste2", "teste2");
meuarray3.push("teste3", 2);
meuarray4.push("teste4", 3);
meuarray5.push("teste5", 4, true);

console.log(
    meuarray, "\n", 
    meuarray2, "\n",
    meuarray3, "\n", 
    meuarray4, "\n", 
    meuarray5, "\n"
);



// Enum quando você quer criar uma variavel de
// conjunto de valores com limite de opções,
// e que não podem ser alteradas(imutavel,
// você pode usar o enum
enum MetodoDePagamento {
    Pix = "pix",
    Boleto = "boleto",
    Cartao = "cartao"
}

const metodo: MetodoDePagamento = MetodoDePagamento.Pix;

console.log(metodo); //vai imprimir "pix"

//um outro valor não partecente do enum não pode ser atribuido a variavel
//const metodo2: MetodoDePagamento = "debito"; //vai dar erro, pois não é um valor do enum


//podemos criar um enum com valores numericos, que são atribuídos automaticamente
enum MetodoDePagamento2 {
    Pix, //0
    Boleto, //1
    Cartao //2
}

let metodo2: MetodoDePagamento2 = MetodoDePagamento2.Pix;

console.log(metodo2); //vai imprimir 0, pois é o primeiro valor do enum 



//para criar uma lista com tamanho definido onde os elementos podem variar
//podemos usar o tuple, que é um array com tamanho definido e tipos definidos para cada posição
let meuTuple: [string, number, boolean] = ["teste", 1, true];

class User {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name,
        this.age=age
    }

    //tuples podem ser usados como retorno de função, para retornar mais de um valor
    getUserNameAndAge = (user: User): [string, number] => {
        return [user.name, user.age];
    }
}


//quando não sabemos o tipo de dado que vamos receber, podemos usar o any e o unknown, 
//que são tipos de dados que podem receber qualquer valor, 
//mas o unknown é mais seguro, pois não permite operações com o valor recebido sem antes 
//verificar o tipo do dado
//é importante saber usar ambos no contexto certo, pois o any pode gerar problemas de tipagem 
//e o unknown pode gerar problemas de performance, pois é necessário verificar o tipo do dado antes de usá-lo


//e temos o já conhecido void, que é usado para funções que não retornam nenhum valor.

/**
 * setAge(age: number): void {
 *  this.age = age;
 * }   
*/