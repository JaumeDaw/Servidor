function nuevaCategoria(){
  $.ajax({
    url: "/nueva_categoria",
    type: "POST",
    data: JSON.stringify({
      codigo: $("#codigo").val(),
      descripcion: $("#descripcion").val(),
      edadMinima: $("min").val,
      edadMaxima: $("max").val
    }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      if (data.error) {
        console.log("error")
      } else {
        cargar("/index");
      }
    },
  });
}
