
require(["js/classes/Director.class.js","js/classes/Movie.class.js"], function(Director,Movie){
    
    var rDogs = new Movie("1","Reservoir Dogs");
    var quentin = new Director("Quentin Tarantino");
    quentin.setQuotes(['We love making movies',"I guess I'll have to marry Elvis Presley to get even.", 'When people ask me if I went to film school I tell them, no, I went to films.'])
    rDogs.setDirector(quentin);
    
    console.log(rDogs.getDirector().getName);
})




