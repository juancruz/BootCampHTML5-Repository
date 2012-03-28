
var MovieCollection = Backbone.Collection.extend({
    
    model: MovieModel,
    
    localStorage: new Store("movies")
    
});

var movies = new MovieCollection;
