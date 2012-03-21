
function Movie(id,title){
    var mId = id;
    var mTitle = title;
    var mRating;
    var mCast = new Array();
  
    this.toString= this.getTitle = function(){return mTitle};
    this.setTitle = function(t){return mTitle = t}
    this.getId = function(){return mId};
    this.setId = function(i){return mId = i}
    this.getRating = function(){return mRating};
    this.setRating = function(rating){return mRating = rating}
    this.subscribe = function(obs){pubsubz.subscribe(obs.getTopic(), obs.getCallBack())}
    
    this.play = function(){pubsubz.publish('playing',mTitle)};
    this.stop = function(){pubsubz.publish('stopped',mTitle)};
    
    this.setCast = function(cast){return mCast = cast};
    this.getCast = function(){
        cast= new Array();
        for(var i=0; i<mCast.length;i++){
            cast[i]=mCast[i].getName() 
        }
        return cast
    }
}
