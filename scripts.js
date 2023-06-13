// Business Logic for DestinationBook ---------
function DestinationBook() {
    this.destinations = {};
    this.currentId = 0;
  }
DestinationBook.prototype.addDestination = function(destination) {
    destination.id = this.assignId();
    this.destinations[destination.id] = destination;
  };
  
  DestinationBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
  
  DestinationBook.prototype.findDestinations = function(id) {
    if (this.destinations[id] !== undefined) {
      return this.destinations[id];
    }
    return false;
  };
  

// Business Logic for Destinations ---------
      function Destination(countryName, location, landmark, timeOfYear, review) {
        this.countryName = countryName;
        this.location = location;
        this.landmark = landmark;
        this.timeOfYear = timeOfYear;
        this.review = review;
    }
      Destination.prototype.loc = function() {
        return this.countryName + " " + this.location + " " + this.landmark + " " + this.timeOfYear + " " + this.review
      };

      
 
//UI Logic 
let destinationBook = new DestinationBook();
function listDestinations(destinationsToDisplay) {
  let destinationsDiv = document.querySelector("div#destination");
  destinationsDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(destinationsToDisplay.destinations).forEach(function(key) {
    const destination = destinationsToDisplay.findDestinations(key);
    console.log(destination.location);

    const li = document.createElement("li");
    li.append(destination.loc());
    

    li.setAttribute("id", destination.id);
    ul.append(li);
  });
  destinationsDiv.append(ul);
}
function displayDestinationDetails(event) {
    const destination =
    destinationBook.findDestinations(event.target.id);
    document.querySelector(".countryName").innerText = destination.countryName;
    document.querySelector(".location").innerText = destination.location;
    document.querySelector(".landmark").innerText = destination.landmark;
    document.querySelector(".timeOfYear").innerText = destination.timeOfYear;
    document.querySelector(".review").innerText = destination.review;document.querySelector("div#travel-details").removeAttribute("class");



}

      function handleFormSubmission(event) {
        event.preventDefault();
        const inputtedCountryName = document.querySelector("input#new-countryName").value;
        const inputtedLocation = document.querySelector("input#new-location").value;
        const inputtedLandmark = document.querySelector("input#new-landmark").value;
        const inputtedReview = document.querySelector("input#new-review").value;
        const inputtedTimeOfYear = document.querySelector("input#new-timeOfYear").value;
        let newDestination = new Destination(inputtedCountryName, inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedReview);
        destinationBook.addDestination(newDestination);
        listDestinations(destinationBook);
      }
      
      window.addEventListener("load", function (){
        document.querySelector("form#new-destination").addEventListener("submit", handleFormSubmission);
      });