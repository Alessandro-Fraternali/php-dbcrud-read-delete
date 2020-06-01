$(document).ready(function() {

  $.ajax({
    url: "getPagamenti.php",
    method: "GET",
    success: function(data, stato){

      for (var i = 0; i < data.length; i++) {
        var pory = data[i].id;
        var jax = data[i].name;
        var fazzoletto = data[i].lastname;
        var powerbank = data[i].address;
        $("main").append("<br>");
        $("main").append("<div data-id=" + pory + ">" + jax + "</div>");
        $("main").append("<div data-id=" + pory + ">" + fazzoletto + "</div>");
        $("main").append("<div data-id=" + pory + ">" + powerbank + "</div>");
        $("main").append("<div data-id=" + pory + " class='distruttore'>X</div>");
        $("main").append("<br>");
      }
    },
    error: function (err){
      alert("nope");
    }
  });

  $("main").on("click", ".distruttore", cancellaRiga);

  function cancellaRiga(){
    var mestesso = $(this);
    var mestesso_id = mestesso.data("id");

    $.ajax({
      url: "cancellatore.php",
      method: "POST",
      data: {
        "id": mestesso_id,
      },
      success: function (data, stato){
        $("[data-id =" + mestesso_id + "]").remove();
      },
      error: function(err){
        alert("nope2");
      }
    });
  }
})
