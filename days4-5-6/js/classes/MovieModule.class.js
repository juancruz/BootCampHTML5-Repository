
var MovieModule = (function(id, title){
    
       //pvt attributes
        var mId = id;
        var mTitle = title;
        var mRating;
    
        return{
            //public methods
            getTitle: function(){
                return mTitle;
            },
            setTitle: function(t){
                return mTitle = t;
            },
            getId: function(){
                return mId;
            },
            setId: function(i){
                return mId = i;
            },
            getRating: function(){
                return mRating;
            },
            setRating: function(r){
                return mRating = r;
            },
            subscribe : function(obs){
                pubsubz.subscribe(obs.getTopic(), obs.getCallBack())
            },
            play: function(){
                pubsubz.publish('playing',mTitle) 
            },
            stop: function(){
                pubsubz.publish('stopped',mTitle)
            }   
        }
        
})


















