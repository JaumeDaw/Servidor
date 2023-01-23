var socket = io("http://localhost:8080");
/*var socket = io("10.0.109.9");*/

function enviar() {
  var nick = document.getElementById("nick").value;
  var texto = document.getElementById("texto").value;

  if (texto != "" && nick != "") {
    socket.emit("enviar", { nick: nick, texto: texto });
  }
}

socket.on("conectado", function () {
  alert("Conectado!");
  document.getElementById("formulario").style.display = "";
});

socket.on("difundir", function (datos) {
  var chat = document.getElementById("chat");
  chat.innerHTML += "<p><em>" + datos.nick + "</em>: " + datos.texto + "</p>";
});
