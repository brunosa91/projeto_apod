$("#enviar").click(function () {
  let apod = $("#date").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Ac7EEBSoSA2Jp3YNjDjCDRUy2HmkO86O0rwhaq1o&date=${apod}`,
    type: "GET",
    success: function (apodData) {
      console.log(apodData);
      $("#foto").attr("src", apodData.url);
      $("#titulo").text(apodData.title);
      $("#texto").text(apodData.explanation);

      $("#foto_entrada").css("display", "none");
      $(".texto_entrada").css("display", "none");
      $("#foto").css("display", "flex");
    },
  });
});
$("#today").click(function () {
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Ac7EEBSoSA2Jp3YNjDjCDRUy2HmkO86O0rwhaq1o`,
    type: "GET",
    success: function (apodData) {
      console.log(apodData);
      $("#foto").attr("src", apodData.url);
      $("#titulo").text(apodData.title);
      $("#texto").text(apodData.explanation);

      $("#foto_entrada").css("display", "none");
      $(".texto_entrada").css("display", "none");
      $("#foto").css("display", "flex");
    },
  });
});
