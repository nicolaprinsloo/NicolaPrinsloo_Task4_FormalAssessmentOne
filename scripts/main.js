// ----------------------------------------------------------------
// Plants Array
// ----------------------------------------------------------------

const arrPlants = [
  {
    "name": "Ficus Tree",
    "price": 350,
    "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    "image": "plant1.png",
    "lightAmount": "low",
    "addedDate": "2023-05-15",
    "sale": true,
    "origin":"Brakpan"
  },
  {
    "name": "White Sprite Succulent",
    "price": 200,
    "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    "image": "plant2.png",
    "lightAmount": "bright",
    "addedDate": "2023-03-25",
    "origin":"Texas"
  },
  {
    "name": "Snake Plant",
    "price": 400,
    "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    "image": "plant3.png",
    "lightAmount": "low",
    "addedDate": "2023-04-15",
    "onSale": "sale",
    "origin":"Pretoria"
  },
  {
    "name": "Parlour Palm",
    "price": 350,
    "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    "image": "plant4.png",
    "lightAmount": "low",
    "addedDate": "2023-03-16",
    "origin":"China"
  },
  {
    "name": "Japanese Maple",
    "price": 1200,
    "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
    "image": "plant5.png",
    "lightAmount": "bright",
    "addedDate": "2023-06-15",
    "onSale": "sale",
    "origin":"Japan"
  }
];

let appliedFilter = "";
let appliedSort = "date added";

// ----------------------------------------------------------------
// When the document loads
// ----------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    loadPlants(arrPlants);

}); 

// ----------------------------------------------------------------
// Load all plants
// ----------------------------------------------------------------

function loadPlants(plantsToShow) {

    // Load and display all the plants

    console.log(plantsToShow);

    $.ajax({
      type:"GET",
      URL:"https://api.openweathermap.org/data/2.5/weather?q=" + plant.origin + "&appid=6afff1b645e0f71655c4713f2f1c870c",
      success:function(data){
        temp = data
        console.log(temp);
      }
    }).done(function(){
      $(currentChild).find("#weatherTemp").text("OriginTemp: " + Math.round(temp.main.temp - 273));
    });

    // Clear all elements in container
    $("#plantsContainer").empty();

    // Loop through plants

    for (let i = 0; i < plantsToShow.length; i++) {
      const plant = plantsToShow[i];
      
      console.log(plant);

      // 1: Select plants container and add the current array plant to it
      $("#plantsContainer").append($("#plantCardTemplate").html());

      // 2: Create a variable that contains the most recently added plant card
      let currentChild = $("#plantsContainer").children().eq(i);

      // 3: Set the content for the plant card from the plants list
      $(currentChild).find(".card-img-top").attr('src','assets/' + plant.image);
      $(currentChild).find("#nameText").text(plant.name);
      $(currentChild).find("#priceText").text('R' + plant.price);
      $(currentChild).find("#descriptionText").text(plant.description);

      // 4: Hide the description text from the plant card
      $(currentChild).find("#descriptionText").hide();
      $(currentChild).find("#weatherTemp").hide();

    }
}

// ----------------------------------------------------------------
// When a filter or sort is clicked
// ----------------------------------------------------------------

$("input[name='filterRadio']").click(function() {
  appliedFilter = $(this).attr('value');

  console.log(appliedFilter);
  filterSortPlants();
});

$("input[name='sortRadio']").click(function() {
  appliedSort = $(this).attr('value');

  console.log(appliedSort);
  filterSortPlants();
});

function filterSortPlants() {

  let filteredSortedArrPlants = [];

  //Filter Plants
  filteredSortedArrPlants = arrPlants.filter(plant => plant.lightAmount == appliedFilter)
  
  loadPlants(filteredSortedArrPlants);

  

}


// ----------------------------------------------------------------
// When the plant card is clicked
// ----------------------------------------------------------------

$("#plantsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();
  $(this).find("#weatherTemp").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});

// ----------------------------------------------------------------
// Wishlist: removing items
// ----------------------------------------------------------------
  
$(document).ready(function() {
  // Attach a click event handler to the remove buttons
  $('.removeBtn').on('click', function() {
      // Find the parent row of the clicked button and remove it
      $(this).closest('tr').remove();
  });
});

// $(document).ready(function() {
//   $.ajax({
//     type:"GET",
//     URL:"https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=6afff1b645e0f71655c4713f2f1c870c",
//     success:function(data){
//       console.log(data);
//     }
//   }).done.(function(){
//     ("#weatherTemp").text(data.main.temp);
//   });
// })