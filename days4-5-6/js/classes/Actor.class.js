
function Actor(name){
    var actorName=name;
    var actorBio;
    
    this.getName = function(){
        return actorName
    }
    this.setName = function(n){
        return actorName = n;
    }
    
    this.getBio = function(){
       return actorBio;
    }
    
    this.setBio = function(b){
        return actorBio=b;
    }
}


