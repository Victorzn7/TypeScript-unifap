/*
const comprador: string = "cliente"
let carro: any = "Porsche"
let preco: any = "Peixe"

console.log("Caro,", comprador, "o preço do seu carro  é:", "R$", preco)
*/


const comprador: unknown = "cliente"
let carro: unknown = "Porsche"
let preco: unknown = "peixe"

if(typeof carro === 'string' && typeof preco === 'number'){
    console.log("Caro,", comprador, "o preço do seu carro  é:", "R$", preco)
}
