


var animalContainer = document.getElementById("area");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://sushma95.github.io/json/shapes.json');
  ourRequest.onload = function() {
    
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    
    
  };
  ourRequest.send();

  

});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " having " + data[i].noof_sides;
    
    
    
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}