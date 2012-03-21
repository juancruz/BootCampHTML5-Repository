
var movieObserverStopped = (function(){
    
    var topic = "stopped";
    var callbackFunction = function(topic, data){
                console.log(data+" has been stopped.")
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

