//Change the background color of the entire document to red
document.body.style.backgroundColor = "red";
// Change the background color of just the "about me" portion to blue
document.getElementById("about").style.backgroundColor = "blue";
// Change the font-family of the entire document to sans-serif
document.body.style.fontFamily="sans-serif";
// Add your nickname 
document.getElementById("nickname").innerHTML="SusieQ";
//Add your favorites
document.getElementById("favorites").innerHTML="Cooking, Cooding, Photography, and Running";
// Add your hometown
document.getElementById("hometown").innerHTML="Philadelphia, PA";

//Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

var items = document.getElementsByTagName('li');

for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem';
    
     items[i].style.color = "red";
     
     items[i].style.backgroundColor = "#b7011d";
     
}
     
     
    
// Create a new `img` element and set its src attribute to a picture of you. Append that element to the page.

var img = document.createElement("img");
     
img.src = "https://lh3.googleusercontent.com/-cu5NARU4IZ4/AAAAAAAAAAI/AAAAAAAAAAA/6qWUTjIPvbY/s128-c-k/photo.jpg";

var src = document.getElementById("photo");




     
src.appendChild(img);