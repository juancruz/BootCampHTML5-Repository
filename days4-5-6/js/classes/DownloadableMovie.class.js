

function DownloadableMovie(id,title){
    
    this.superConstructor = Movie;
    this.superConstructor(id,title);
   
    var movieDownloader = new MovieDownloader();
    this.download = function(){
        movieDownloader.download(title);
    }
 }

DownloadableMovie.prototype = new Movie();



