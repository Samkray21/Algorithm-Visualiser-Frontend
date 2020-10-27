export const Coordinate = {


    flightPlanCoordinates: [
        { lat: 38.820311, lng: -9.152610 },//d
        { lat: 53.349188, lng: -6.260762 },//g
        { lat: 53.349188, lng: -6.260762 },//g
        { lat: 51.507405, lng: -0.127705 },//e
        { lat: 51.507405, lng: -0.127705 },//e
        { lat: 55.675936, lng: 12.568498 },//i
        { lat: 55.675936, lng: 12.568498 },//i
        { lat: 53.900622, lng: 27.559060 },//h
        { lat: 56.939717, lng: 24.097965 },//j
        { lat: 56.939717, lng: 24.097965 },//j
        { lat: 55.675936, lng: 12.568498 },//i
        { lat: 53.900622, lng: 27.559060 },//h
        { lat: 50.075249, lng: 14.437143 },//f
        { lat: 50.075249, lng: 14.437143 },//f
        { lat: 51.507405, lng: -0.127705 },//e
        { lat: 50.075249, lng: 14.437143 },//f
        { lat: 44.494931, lng: 26.089397 },//b
        { lat: 44.494931, lng: 26.089397 },//b
        { lat: 53.900622, lng: 27.559060 },//h
        { lat: 44.494931, lng: 26.089397 },//b
        { lat: 48.856373, lng: 2.352178 },//a
        { lat: 44.494931, lng: 26.089397 },//b
        { lat: 41.902590, lng: 12.496173 },//c
        { lat: 41.902590, lng: 12.496173 },//c
        { lat: 38.820311, lng: -9.152610 },//d
        { lat: 38.820311, lng: -9.152610 },//d
        { lat: 51.507405, lng: -0.127705 },//e
        { lat: 51.507405, lng: -0.127705 },//e
        { lat: 48.856373, lng: 2.352178 },//a
        { lat: 48.856373, lng: 2.352178 },//a
        { lat: 50.075249, lng: 14.437143 },//f
        { lat: 48.856373, lng: 2.352178 },//a
        { lat: 38.820311, lng: -9.152610 }//d
      ],


      europeanNodeMarkers: [
        {
          position: new google.maps.LatLng(48.856373, 2.352178),
          label: "A",
          map: null,
          title: "A",
        },
        {
          position: new google.maps.LatLng(44.494931, 26.089397),
          label: "B",
          map: null,
          title: "B"
        },
        {
          position: new google.maps.LatLng(41.902590, 12.496173),
          label: "C",
          map: null,
          title: "C"
        },
        {
          position: new google.maps.LatLng(38.820311, -9.152610),
          label: "D",
          map: null,
          title: "D"
        },
        {
          position: new google.maps.LatLng(51.507405, -0.127705),
          label: "E",
          map: null,
          title: "E"
        },
        {
          position: new google.maps.LatLng(50.075249, 14.437143),
          label: "F",
          map: null,
          title: "F"
        },
        {
          position: new google.maps.LatLng(53.349188, -6.260762), 
          label: "G",
          map: null,
          title: "G"
        },
      
        {
          position: new google.maps.LatLng(53.900622, 27.559060), 
          label: "H",
          map: null,
          title: "H"
        }
        ,
        {
          position: new google.maps.LatLng(55.675936, 12.568498), 
          label: "I",
          map: null,
          title: "I"
        },
        {
          position: new google.maps.LatLng(56.939717, 24.097965), 
          label: "J",
          map: null,
          title: "J"
        }
      ],

      
      europeanEdgeLabels: [
       new google.maps.Marker({
        position: { lat:45.705133, lng: 14.371636},
        map: null,
        icon: '1866.png',
        title: "BA",
        label: {
            color: '#000000',
            fontWeight: 'bold',
            text: '1866',
            fontSize: '20px',
        },
    }),
    new google.maps.Marker({
      position: { lat:44.048647, lng: -0.936490},
      map: null,
      icon: '/1866.png', 
      title: "DA",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1444',
          fontSize: '20px',
      },
    }),
     new google.maps.Marker({
      position: { lat:49.595886, lng: 0.117901},
      map: null,
      icon: '1866.png',
      title: "EA",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '343',
          fontSize: '20px',
      },
    }),
     new google.maps.Marker({
      position: { lat:48.473252, lng: 8.467687},
      map: null,
      icon: '1866.png',
      title: "FA",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '882',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:47.254100, lng: 21.865841},
      map: null,
      icon: '1866.png',
      title: "FB",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1073',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:50.372426, lng: 28.565581},
      map: null,
      icon: '1866.png',
      title: "BH",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1051',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:41.881416, lng: 18.933250},
      map: null,
      icon: '1866.png',
      title: "CB",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1137',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:51.390768, lng: 8.501313},
      map: null,
      icon: '1866.png',
      title: "EF",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1034',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:45.692117, lng: -5.552479},
      map: null,
      icon: '1866.png',
      title: "ED",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1575',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:39.708526, lng: 5.788317},
      map: null,
      icon: '1866.png',
      title: "DC",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1860',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:48.404559, lng: -9.136374},
      map: null,
      icon: '1866.png',
      title: "GD",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '1630',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:52.784602, lng: -2.624015},
      map: null,
      icon: '1866.png',
      title: "GE",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '463',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:53.898269, lng: 4.764466},
      map: null,
      icon: '1866.png',
      title: "IE",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '955',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:54.250470, lng: 18.483420},
      map: null,
      icon: '1866.png',
      title: "HI",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '979',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:50.897901, lng: 21.384066},
      map: null,
      icon: '1866.png',
      title: "HF",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '992',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:55.738350, lng: 26.462933},
      map: null,
      icon: '1866.png',
      title: "HJ",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '402',
          fontSize: '20px',
      },
    }),
    new google.maps.Marker({
      position: { lat:56.658540,lng: 18.209540},
      map: null,
      icon: '1866.png',
      title: "JI",
      label: {
          color: '#000000',
          fontWeight: 'bold',
          text: '724',
          fontSize: '20px',
      },
    })
      ]
}


