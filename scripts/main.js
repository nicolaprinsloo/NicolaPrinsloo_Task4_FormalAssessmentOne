// -----------------------------------------
// Plant Array
// -----------------------------------------

const arrPlants = [
  {
    name: "Ficus Tree",
    price: 350,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor."
    image: "plant1.png"
  },
  {
    name: "White Sprite Succulent",
    price: 200,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor."
    image: "plant2.png"
  },
  {
    name: "Snake Plant",
    price: 400,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor."
    image: "plant3.png"
  },
  {
    name: "Parlour Palm",
    price: 350,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor."
    image: "plant4.png"
  },
  {
    name: "Japanese Maple",
    price: 1200,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor."
    image: "plant5.png"
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


    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();
    loadPlants();

}); 






    // -----------------------------------------
    // Pages
    // -----------------------------------------

    // -----------------------------------------
    // Home Page

    //Tap on browse button
    $("#btn2").click(function() {
      $(".hero2-image").slideDown(2000).slideDown(2000);
    });



    // -----------------------------------------
    // Browse Page

    // -----------------------------------------
    // Load All Plants
    // -----------------------------------------

    function loadPlants(){

      console.log(arrPlants);

      for (let i = 0; 0 < arrPlants.length; i++) {
        const plant = arrPlants[i];

        console.log(plant);
        
        //1: Select the plants container and add the current array to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        //2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantContainer").children().eq(i+1);

        //3: Set the content for the current plant card from the array
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        $(currentChild).find(".card-img-top").attr('src', 'assets/' + plant.image)

        //4: Hide the description text from the current card item
        $(currentChild).find("#descriptionText").hide();

      }

    };

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

    
 