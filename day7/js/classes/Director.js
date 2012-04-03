
define(

    function(){
                
        function Director(name){
            var dName = name;
            var dQuotes = new Array();
                
            
            this.setName = function(n){
                    return dName=n
                };
            this.getName = function(){
                    return dName
                };
            this.setQuotes = function(q){
                    return dQuotes=q
                };
            this.speak = function(){
                    $("#quotes").append(dQuotes);
                }
            
        }
        
        return (Director);
    }
);
