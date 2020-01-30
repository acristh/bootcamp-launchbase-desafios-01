const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS', 'C#'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS', 'GO'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
];

usuarios.forEach(usuario => {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`);
});