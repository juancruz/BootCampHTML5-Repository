
var movieObserverPlaying = (function(){
    
    var topic = "playing";
    var callbackFunction = function(topic, data){
                console.log("playing "+data+"...");
        }
    return{
        getTopic : function(){
            return topic;
        },
        getCallBack : function(){
            return callbackFunction;
            
        }
    }
    
    
    
})

