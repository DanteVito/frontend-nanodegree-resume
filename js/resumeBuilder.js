/*
This is empty on purpose! Your code to build the resume will go here.
 */
var myName = "Dante";
var formattedName = HTMLheaderName.replace("%data%", myName);


var myRole = "web develloper";
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var invert = function(word){
	var result = "";
	for (i=word.length; i>=0; i--){
		result = result.concat(word[i]);
	}

	return result
}

console.log(invert('vinicius'));