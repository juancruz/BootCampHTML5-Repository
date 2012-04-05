
yepnope({
    test : Modernizr.geolocation,  
    nope : 'geolocationPolyfill.js'
});

yepnope({
    test: Modernizr.draganddrop, 
    nope: 'dropfile.js'
});


yepnope({
    test: Modernizr.webworkers,
    nope: 'fakeworker-0.1.js'
});

yepnope({
    test: Modernizr.mq,
    nope: 'unloadPage.js'
})



