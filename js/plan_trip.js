function doFirst(){
    navigator.geolocation.getCurrentPosition(succCallback); 
    
}
function succCallback(e){
  var lati = e.coords.latitude;
  var longi = e.coords.longitude;

  var latlng =new google.maps.latlng(lati,longi);
  var map= new google.maps.Map(document.getElementById('myMap'),{
    zoom:14,
    center:latlng,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position:latlng,
    map:map,
    icon:'../images/camera.png'
  });

   marker.addListener('click', function() {
    map.setZoom(15);
    map.setCenter(marker.getPosition());  
  
  });
}

window.addEventListener('load',doFirst,false);