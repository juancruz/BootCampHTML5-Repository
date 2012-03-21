
DownloadableMovie.prototype = new Movie();
DownloadableMovie.constructor = Movie;

function DownloadableMovie(id,title){
    var movieDownloader = new MovieDownloader();
    
    
    this.download = function(){
        movieDownloader.download(title);
    }
 }





