

$(document).ready(function(){
    alert("Page Finished Loading");
    $("#alias").focus();
}); 


$("#button1").click(function(event){
    event.preventDefault();
    var text = $("#alias").val();
     
    $.ajax({
       type:"GET",
       url: "http://localhost/app/api/dispatcher.php",
//       crossDomain: true,
//       dataType: "jsonp",
       data: {service:'welcome.hello', params: {name: text}} ,
       success: function(data){
           $("#result").append(data)
       },
       error: function(){
           $("#result").css({'color':'red'})
       }
  })
  
});
var url = "http://localhost/app/api/dispatcher.php";
$("#button2").click(function(event){
    event.preventDefault();
    $.ajax({
        type:'GET',
        url: url,
        //dataType: 'JSON',
        //crossDomain: 'true',
        data: {service: 'movie.getTop',params:{'name':'null'}},
        succes: function(data){
            alert("sabee!");
            //console.log(data);
         
            var obj=data;
            var i=0;
            var lista= '<h2>Lista de películas</h2>';
            while (obj[i]!= null) {
                lista += "<div><b>"+obj[i].Name+"</b> ("+obj[i].ReleaseYear+")";
                lista += "<h2><img src='"+obj[i].BoxArt.SmallUrl+"' /></h2>";
                lista += "<p>"+obj[i].Synopsis+"</p></div>";
                 ++i;
            }
         $("#movies").html(lista)
      }
  })   
}) 

 