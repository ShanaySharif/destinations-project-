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

    const kenya = {
        name: 'Kenya',
        location: 'Nairobi',
        landmarks: ['safari', 'kenyan Museum'],
        timeOfYear: 'spring',
        notes: 'Best city know for its national park'
      }

      const bali = {
        name: 'Bali',
        location: 'Indonesia',
        landmarks: ['volcanoes', 'islands'],
        timeOfYear: 'summer',
        notes: 'Best city know for its beautiful islands'
      };