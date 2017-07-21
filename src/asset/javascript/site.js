// import $ from 'jquery';


    var locations = [
      ['101 Dalmatians', 51.508742,-0.120850], //london
      ['Up', 6.423750, -66.589730], // venezuela
      ['Little Mermaid', 21.469114, -78.656894], //caribien
      ['The Lion King', 0.023559, 37.906193], //kenya
      ['Finding Nemo', -33.950198, 151.259302, 1], //australie
      ['Aladdin', 32.427908, 53.688046], //iran
      ['Mulan', 35.861660, 104.195397], //china
      ['Jungle Book', 20.593684, 78.962880], //india
      ['Tarzan', 9.081999, 8.675277], //Nigeria
      ['Frozen', 60.472024, 8.468946], //norwegen
      ['Beauty and the Beast', 46.227638, 2.213749], //france
      ['Pinocchio', 41.871940, 12.567380], //italy
      ['Brave', 56.490671, -4.202646], //schotland
      ['Lilo and Stitch', 19.896766, -155.582782], //hawaii
      ['Toy Story', 40.417287, -82.907123], // ohio
      ['Princess and the Frog', 29.951066, -90.071532], // new orleans
      ['Bambi', 56.056979, -118.389441], //Northern US/Canada
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(25.92, 51.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


