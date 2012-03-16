

$("#pagehome").live( 'pageinit',function(){
    alert("Page Finished Loading");
    $("#alias").focus();
}); 


$("#button1").click(function() {
   $.mobile.showPageLoadingMsg();
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
  
$(document).keypress(function(e){
    if(e.keyCode == 27){
        $.mobile.hidePageLoadingMsg();
    }
});