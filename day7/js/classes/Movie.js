
define([
    "./Director"
    ],
    
    function(Director){
        
        function Movie(id, title){
             //pvt attributes
            var mId = id;
            var mTitle = title;
            var mRating;
            var mDirector;
                
            
                //public methods
             this.getTitle = function(){
                        return mTitle;
                    };
             this.setTitle = function(t){
                        return mTitle = t;
                    };
                    
             this.getId = function(){
                        return mId;
                    };
             this.setId = function(i){
                        return mId = i;
                    };
             this.getRating = function(){
                        return mRating;
                    };
             this.setRating = function(r){
                        return mRating = r;
                    };
             this.setDirector = function(d){
                        return mDirector = d;
                    };
             this.getDirector = function(){
                        return mDirector;
                    };
                
            }
        return (Movie);
    }
);



