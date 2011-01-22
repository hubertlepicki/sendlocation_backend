$(function() {
  if ($("#map_canvas").size() == 1) {
    var latlng = new google.maps.LatLng(
      parseFloat($("#map_canvas").attr('data-lat')),
      parseFloat($("#map_canvas").attr('data-lng'))
    );
    var myOptions = {
      zoom: parseInt($("#map_canvas").attr('data-zoom')),
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var marker = new google.maps.Marker({
                   position: latlng, 
                   map: map,
                   title: $("#map_canvas").attr('data-description')
                 }); 
    var infowindow = new google.maps.InfoWindow({
          content: $("#map_canvas").attr('data-description')
    });
    infowindow.open(map,marker);
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
  }
});
