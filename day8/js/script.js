
$(document).ready(function(){
    
    $("#mustacheTemplate").html (Mustache.render(profileMustache,profile));
    $("#underScoreTemplate").html(_.template (profileUnderScore,profile));
    $("#jSmartTemplate").html(new jSmart(profilejSmart).fetch(profile));
 
 
})


