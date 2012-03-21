//Movie instances
var taxiDriver = new Movie("1","Taxi Driver");
var oneFlew = new Movie("2","One Flew Over The Cuckoo's Nest");
var scar = new Movie("3", "Scarface");
var forrestGump = new Movie("4","Forrest Gump");
var indy = new Movie("5","Raiders Of The Lost Ark");





//playing with the console
indy.setTitle("Indiana Jones And The Raiders Of The Lost Ark");
console.log(indy.getTitle());

oneFlew.setRating("*****");
console.log(oneFlew.getTitle() + "'s Id is: "+ oneFlew.getId()+ ", movie's rating is: "+oneFlew.getRating());


//Observer
var movieObserverPl = new movieObserverPlaying();
var movieObserverSt = new movieObserverStopped();


taxiDriver.subscribe(movieObserverPl);
taxiDriver.subscribe(movieObserverSt);
taxiDriver.play();
taxiDriver.stop();

//Singleton

var gf = new DownloadableMovie("6","The Godfather");
gf.download();

// Mixin
Movie.prototype['share']= social.prototype['share'];
Movie.prototype['like']= social.prototype['like'];

var gf2 = new Movie("7","The Godfather Part II")

gf2.share("V. Rivas");

//Actor Class

var jn = new Actor("Jack Nicholson");
jn.setBio("Abandoned by his father in his childhood, he was raised believing his grandmother was his mother and his mother was his older sister. The truth was revealed to him years later when a Time magazine journalist uncovered the truth while preparing a story on the star. Jack had an on-and-off relationship with actress Anjelica Huston...")

var mb = new Actor("Marlon Brando");
mb.setBio("Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem. Unlike Olivier, who preferred the stage to the screen, Brando concentrated his talents on movies after bidding the Broadway stage adieu in 1949...");

var ap = new Actor("Al Pacino");
var dk = new Actor("Diane Keaton");
var rd = new Actor("Robert Duvall");

actors = [mb,ap,dk,rd];

gf.setCast(actors);

console.log(gf.getCast()[0]);








