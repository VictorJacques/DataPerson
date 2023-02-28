class Person {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }
  Introdução() {
    console.log(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`
    );
  }
}

class Person2 extends Person {
  constructor(nome, idade, altura, profissao, Introdução) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }
  Introdução() {
    console.log(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`
    );
  }
}

const pessoa = new Person("Victor", "20", "1,80");
pessoa.Introdução();

const pessoa2 = new Person2(
  "Victor",
  "20",
  "1,80",
  "Desenvolvedor de software"
);
pessoa2.Introdução();
