
//caracteristica comum para todos os usuarios
interface Usuario{
    email: string
    senha: string
    setEmail(email: string): void
    setSenha(senha: string): void
    getEmail(): string
    getSenha(): string
}

class Cliente implements Usuario{
    email: string
    senha: string

    constructor(email: string, senha: string){
        this.email = email
        this.senha = senha
    }

    setEmail(email: string): void{
        this.email = email
    }
    setSenha(senha: string): void{
        this.senha = senha
    }

    getEmail(): string{
        return this.email
    }
    getSenha(): string{
        return this.senha
    }

    fazerPedido(): void{
        console.log("Pedido feito com sucesso!")
    }
}

class Vendedor implements Usuario{
    email: string
    senha: string
    cnpj: string

    constructor(email: string, senha: string, cnpj: string){
        this.email = email
        this.senha = senha
        this.cnpj = cnpj
    }

    setEmail(email: string): void{
        this.email = email
    }
    setSenha(senha: string): void{
        this.senha = senha
    }

    getEmail(): string{
        return this.email
    }
    getSenha(): string{
        return this.senha
    }

    cadastrarProduto(): void{
        console.log("Produto cadastrado com sucesso!")
    }
}