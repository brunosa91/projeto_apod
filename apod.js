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
    },
  });
});
