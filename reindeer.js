// loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");

var k = 0;
var j = 0;
var colorReindeer = [];
var listItem = "";

for (var i = 0; i < colors.length; i++) {
	if (k < 8) {
		var combined = colors[i] + " " + reindeer[k]
		k++;
	} else {
		combined = colors[i] + " " + reindeer[j];
		j++;
	}
	colorReindeer.push(combined);
	listItem += "<li>" + colorReindeer[i] + "</li>";
}

hohohoElement.innerHTML = listItem;