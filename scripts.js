//business logic for place object
function testDestination(place) {
    this.name = 'Name:' + " " + place.name;
    this.loc = place.location;
    this.landmarks = place.landmarks;
    this.timeOfYear = place.timeOfYear;
    this.review = place.review;
    console.log(place)
  }

  
  const uae = {
      name: 'UAE',
      location: 'Dubai',
      landmarks: ['Burj Khalifa', 'Dubai Fountain'],
      timeOfYear: 'winter',
      review: 'best city in the middle east '
    };

    const kenya = {
        name: 'Kenya',
        location: 'Nairobi',
        landmarks: ['safari', 'kenyan Museum'],
        timeOfYear: 'spring',
        review: 'Best city know for its national park'
      }

      const bali = {
        name: 'Bali',
        location: 'Indonesia',
        landmarks: ['volcanoes', 'islands'],
        timeOfYear: 'summer',
        review: 'Best city known for its beautiful islands'
      };

      //UI Logic 


function Destinations(place) {
    document.getElementById('name').innerHTML = 'Name:' + " " + place.name;
    document.getElementById('location').innerHTML = 'Location:' + " " + place.location;
    document.getElementById('location').innerHTML = 'landmark:' + " " + place.landmark;
    document.getElementById('location').innerHTML = 'timeOfYear:' + " " + place.timeOfYear;
    document.getElementById('location').innerHTML = 'review:' + " " + place.review;



    this.landmarks = place.landmarks;
    this.timeOfYear = place.timeOfYear;
    this.review = place.review;
  }


