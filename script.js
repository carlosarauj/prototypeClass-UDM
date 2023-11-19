class Pessoat1 {
  constructor (nome, sobre){
    this.nome = nome
    this.sobre = sobre
  }

  falar(){
    console.log(`${this.nome} está falando`)
  }
}

function Pessoat2(nome, sobre){
  this.nome = nome
  this.sobre = sobre
}

Pessoat2.prototype.falar= function(){
  console.log(`${this.nome} está falando`)
}

let pt1 = new Pessoat1('Carlos', 'Araújo')
let pt2 = new Pessoat2('Gislanny', 'Mendes')