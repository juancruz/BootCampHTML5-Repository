
var social = function(){}

social.prototype = {
    share: function(friendName){
        console.log("Sharing " + this.getTitle() +" with "+friendName);
    },
    like: function(){
        console.log("like");
    }
}


