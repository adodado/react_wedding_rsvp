import React from "react";
import "./Map.css";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLocations: [
        {
          name: "Međunarodni Aerodrom Sarajevo / Sarajevo International Airport",
          title: "Sarajevo Aerodrom",
          position: { lat: 43.821496714, lng: 18.325498698 },
          description: "BS: Međunarodni Aerodrom Sarajevo glavni je i najveći aerodrom u Bosni i Hercegovini.",
          englishdescription: "EN: Sarajevo international airport is on the outskirts of Sarajevo and the optimal choice if you are comming from abroad.",
          image: "/images/Mapimages/maps_sarajevo_international_airport.jpg",
          icon: "/images/Mapicons/yellow-dot.png"
        },
        {
          name: "Međunarodni Aerodrom Tuzla / Tuzla International Airport",
          title: "Međunarodni Aerodrom Tuzla",
          position: { lat: 44.455164846, lng: 18.721497114 },
          description:
            "BS: Međunarodni Aerodrom Tuzla je c:a 90km od Sarajeva.",
          englishdescription:
            "EN: This is the Tuzla internation airport. It is c:a 90km from sarajevo but it is the cheapest option since WizzAir has a route from sweden to Tuzla. And tickets can go for as low as 100SEK.",
          image: "/images/Mapimages/maps_tuzla_international_airport.jpg",
          icon: "/images/Mapicons/yellow-dot.png"
        },
        {
        name: "Sarajevo Golf Klub / Sarajevo Golf Club",
        title: "Sarajevo Golf Club",
        position: { lat: 43.885208, lng: 18.409371 },
        description:
          "BS: Kako sama ceremonija vjenčanja tako i prijem bit će organizovani u Sarajevo Golf Klubu.",
        englishdescription:
          "EN: Both the wedding ceremony and the reception will take place at Sarajevo golf club.",
        image: "https://lh5.googleusercontent.com/p/AF1QipPEvXRKrOXwMTebAvn9Tl64VCQuIm59ZeHHwBfS=w408-h272-k-no",
        icon: "/images/Mapicons/blue-dot.png"
        },
        {
        name: "Sarajevo Cable Car Station / Sarajevska žičara",
        title: "Sarajevo Cable Car Station",
        position: { lat:43.855695, lng: 18.434977 },
        description:
          "",
        englishdescription:
          "",
        image: "https://lh5.googleusercontent.com/p/AF1QipMM8QrTxWrhwvkZoos57LYIvsJBQCiYSXj8qYqt=w426-h240-k-no",
        icon: "/images/Mapicons/blue-dot.png"
        },
        {
        name: "Baščaršija",
        title: "Baščaršija",
        position: { lat:43.860643, lng: 18.430394 },
        description:"",
        englishdescription:"",        
        image: "https://sarajevo.travel/assets/photos/places/big/bascarsija-1461921168.jpg",
        icon: "/images/Mapicons/blue-dot.png"
        },
        {
        name: "Vrelo Bosne / Source Of The River Bosna",
        title: "Source Of The River Bosna",
        position: { lat:43.820524, lng: 18.267881 },
        description:"",
        englishdescription:"",        
        image: "https://lh5.googleusercontent.com/proxy/sznN8KYwuOSLHaIihGxEZ29ss8n7dHUZqfoJA8X5DaLs0rsu31jZBz5sdCp5j8ij3Y0hHrSy3ZshhjDl9BV0G9UOlWqyD_uB7gF15MvnPGFnHEWKkC0YIM8bGLBwe1hJFjw2WgLSQScGroCLf549FxU2vNBVvUw=w408-h270-k-no",
        icon: "/images/Mapicons/blue-dot.png"
        },
        {
        name: "Vječna vatra",
        title: "Vječna vatra",
        position: { lat:43.858994, lng: 18.421906 },
        description:"",
        englishdescription:"",        
        image: "https://lh5.googleusercontent.com/p/AF1QipPUMLP6n--XM6SQ-5WUL0nlMCzssn6ncexpvW-1=w408-h544-k-no",
        icon: "/images/Mapicons/blue-dot.png"
        }
      ]
    };
  }

  //lifecycle event to call the render map function
  componentDidMount() {
    this.loadMap();
  }
  //load the script
  loadMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCNn_ezyRyN-r88ZLhixrorglnHwu1ATng&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 43.84864, lng: 18.35644 },
      zoom: 12
    });

    //initializing the info wondow
    const infowindow = new window.google.maps.InfoWindow();

    this.state.mapLocations.forEach(location => {
      //getting the content of the info window from within the loop
      const contentString = `<div class="container">
      <h2>${location.name}</h2>

      <p><img src="${location.image}" /><em>${location.description}</em>
      <br /><em>${location.englishdescription}</em></p>
      `;

      const marker = new window.google.maps.Marker({
        position: { lat: location.position.lat, lng: location.position.lng },
        map: map,
        title: location.title,
        icon: location.icon
      });

      marker.addListener("click", function() {
        infowindow.setContent(contentString);
        //linking the marker and the info window with a click event
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

//Creating the script to access Google Maps API
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Map;
