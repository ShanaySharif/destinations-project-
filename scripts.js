//business logic for place object
function testDestination(place) {
    this.name = 'Name:' + " " + place.name;
    this.loc = place.location;
    this.landmarks = place.landmarks;
    this.timeOfYear = place.timeOfYear;
    this.notes = place.notes;
    console.log(place)
  }

  
  const uae = {
      name: 'UAE',
      location: 'Dubai',
      landmarks: ['Burj Khalifa', 'Dubai Fountain'],
      timeOfYear: 'winter',
      notes: 'best city in the middle east '
    };
