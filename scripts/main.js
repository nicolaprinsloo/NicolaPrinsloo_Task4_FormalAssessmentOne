// -----------------------------------------
// Plant Array
// -----------------------------------------

let arrPlants = [
  {
    name: "Ficus Tree",
    price: 350,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor."
  }
];

// -----------------------------------------
// When the document loads
// -----------------------------------------

$(document).ready(function(){

    console.log("Hello");


    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});


    //Tap on browse button
    $("#btn2").click(function() {
      $(".hero2-image").slideDown(2000).slideDown(2000);
    });


    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

    }); 

    // -----------------------------------------
    // When the card is clicked
    // -----------------------------------------

    $(".card").click(function() {

      // Toggle the price & description text
      $("#priceText").toggle();
      $("#descriptionText").toggle();

      // Resize the image to fit the additional content
      $(".card-img-top").toggleClass("small");

    });

 