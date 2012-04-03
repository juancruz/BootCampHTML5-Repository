
$(document).ready(function(){
   //local storage-----------
   var area = document.createElement('textarea');
   area.style.width = '300px';
   area.style.height = '150px';
   $('#content').append(area);
   
   $("#saveButton").click(function(){
       window.localStorage.setItem('value', area.value);
       window.localStorage.setItem('timestamp', (new Date()).getTime());
   })
   
   
   if(!((window.localStorage.getItem('value')))){
       area.value = 'Type your text here...';
   }
   else {
       if (!area.value) {
           area.value = window.localStorage.getItem('value');
       }
   }
   
   //drag and drop------------
   
   window.addEventListener('load', function(e) {
       var controller = new DNDFileController('dropzone', 'dropzone');
   }, false);
   
   //cache-------------------
   
   cache = window.applicationCache;
   var cacheUpdatereadyListener = function() {
       // Swap cache with updated data
       cache.swapCache();
   }
   
   cache.addEventListener('updateready', cacheUpdatereadyListener, false);
   if(cache.status == cache.UPDATEREADY) {
       // Update cached data and call updateready listener after
       cache.update();
       window.addEventListener('offline', function() {
           if(navigator.onLine == false) {
               alert('We went offline');
           } 
           else {
               alert('We are online again!');
           }
       }, true);
   }   

   //geolocation---------------
   //
  
  (function() {
      var map = null;
      var geolog = document.querySelector('#geo-log');
      var geoMap = document.querySelector('#geo-map');
      
      function showPosition(position) {
          geolog.textContent = "You're within " + position.coords.accuracy + " meters of (" + position.coords.latitude + ", " + position.coords.longitude + ")";
          var latLng = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
          var marker = new google.maps.Marker({
              position: latLng,
              map: map
          });
          map.setCenter(latLng);
          map.setZoom(15);
      }
      function handlePositionError(evt) {
          geolog.textContent = evt.message;
      }
      function successPositionHandler(evt) {
      // Load map if it doesn't already exist and when user clicks the button.
          if (!map) {
              map = new google.maps.Map(geoMap, {
                  zoom: 3,
                  center: new google.maps.LatLng(37.4419, -94.1419), // United States
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              });
          map.getDiv().style.border = '1px solid #ccc';
          }
          
          if (navigator.geolocation) {
              geolog.style.visibility = 'visible';
              geolog.textContent = 'Looking for location...';
              navigator.geolocation.getCurrentPosition(showPosition, handlePositionError);
           // Also monitor position as it changes.
           //navigator.geolocation.watchPosition(showPosition, handlePositionError);
          } 
          else {
              geolog.textContent = 'Oops! Your browser does not support geolocation.';
          }
      }
      document.querySelector('#see-position').addEventListener('click', successPositionHandler, false);
      geoMap.addEventListener('click', successPositionHandler, false);
})(); 
   
});
