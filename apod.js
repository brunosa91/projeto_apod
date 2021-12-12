$("#enviar").click(function () {
  let apod = $("#date").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Ac7EEBSoSA2Jp3YNjDjCDRUy2HmkO86O0rwhaq1o&date=${apod}`,
    type: "GET",
    success: function (helioSoprazuar) {
      console.log(helioSoprazuar);
      $("#foto").attr("src", helioSoprazuar.url);
      $("#titulo").text(helioSoprazuar.title);
      $("#texto").text(helioSoprazuar.explanation);
      $("#foto").css("borde-radius", "10px");
      $("#texto").css("color", "red");
      $("#texto").css("border", "3px solid red");
      $("#texto").css("border-radius", "10px");
      $("#foto").css("height", "300px");
    },
  });
});
