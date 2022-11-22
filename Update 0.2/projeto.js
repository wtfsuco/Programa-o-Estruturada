caderneta = [];
alunos = 0;
uix = document.getElementById("ui");

seletor =
  "<option value=0>0</option>" +
  "<option value=1>1</option>" +
  "<option value=2>2</option>" +
  "<option value=3>3</option>" +
  "<option value=4>4</option>" +
  "<option value=5>5</option>" +
  "<option value=6>6</option>" +
  "<option value=7>7</option>" +
  "<option value=8>8</option>" +
  "<option value=9>9</option>" +
  "<option value=10>10</option>";

formulario =
  "<h1>Formulario</h1>" +
  "<p>Nome do aluno</p>" +
  '<input id="nome">' +
  "<p>Nota AV1</p>" +
  '<select id="av1">' +
  seletor +
  "</select>" +
  "<p>Nota AV2</p>" +
  '<select id="av2">' +
  seletor +
  "</select>" +
  "<p>Nota AV3</p>" +
  '<select id="av3">' +
  seletor +
  "</select>" +
  "<p>Turno</p>" +
  '<select id="turno">' +
  "<option value=1>Matutino</option>" +
  "<option value=2>Vespertino</option>" +
  "<option value=3>Noturno</option>" +
  "</select>" +
  '<button onclick="adicionaraluno(caderneta)">Enviar</button>';

tabela = document.createElement("table");
tabela.innerHTML =
  "<tr><th>Nome</th>" +
  "<th>AV1</th>" +
  "<th>AV2</th>" +
  "<th>AV3</th>" +
  "<th>Media</th>" +
  "<th>Turno</th></tr>";

uix.innerHTML = formulario;
controle = true;

function criarMatriz(l, c, m) {
  for (var i = 0; i < l; i++) {
    aluno = [];
    m.push(aluno);
  }
}

function calcMedia(a, b, c) {
  return (a + b + c) / 3;
}

function alternar() {
  if (controle == true) {
    uix.innerHTML = "<h1>Tabela</h1>";
    uix.appendChild(tabela);
    controle = !controle;
  } else if (controle == false) {
    uix.innerHTML = formulario;
    controle = !controle;
  }
}

function adicionaraluno(m) {
  nome = document.getElementById("nome").value;
  av1 = Number(document.getElementById("av1").value);
  av2 = Number(document.getElementById("av2").value);
  av3 = Number(document.getElementById("av3").value);
  media = Number(calcMedia(av1, av2, av3).toFixed(0));
  switch (Number(document.getElementById("turno").value)) {
    case 1:
      turno = "Matutino";
      break;
    case 2:
      turno = "Vespertino";
      break;
    case 3:
      turno = "Noturno";
      break;
  }

  alunos++;

  m.push([]);
  m[alunos].push(nome);
  m[alunos].push(av1);
  m[alunos].push(av2);
  m[alunos].push(av3);
  m[alunos].push(media);
  m[alunos].push(turno);
  m[alunos].push(alunos);

  atualizarTabela();
}

function atualizarTabela() {
  linha = document.createElement("tr");

  linha.innerHTML =
    "<td>" +
    caderneta[alunos][0] +
    "</td>" +
    "<td>" +
    caderneta[alunos][1] +
    "</td>" +
    "<td>" +
    caderneta[alunos][2] +
    "</td>" +
    "<td>" +
    caderneta[alunos][3] +
    "</td>" +
    "<td>" +
    caderneta[alunos][4] +
    "</td>" +
    "<td>" +
    caderneta[alunos][5] +
    "</td>";

  tabela.appendChild(linha);
}

for (let i = 0; i < 4; i++) {
  criarMatriz(1, 6, caderneta);
  caderneta[0][0] = "Nome";
  caderneta[0][1] = "Av1";
  caderneta[0][2] = "Av2";
  caderneta[0][3] = "Av3";
  caderneta[0][4] = "Media";
  caderneta[0][5] = "Turno";
}
