

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
  
