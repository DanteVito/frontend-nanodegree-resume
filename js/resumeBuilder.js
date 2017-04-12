// starting my objects

// biography
var bio = {
	"name": "Dante Vito",
	"role": "web developer",
	"contacts": {
		"mobile": "555-444-333",
		"email": "dante@vito.com",
		"github": "dantevito",
		"location": "beagland"
	},
	"welcome": "Welcome to me page!",
	"skills": ["awesomeness", "goodness", "topness"],
	"pictureUrl": "images/fry.jpg"
}

// education
var education = {
	"schools" : [
			{
				"name": "university",
				"location": "brazil",
				"degree": "bach",
				"majors": ["CS"],
				"dates": 2000,
				"url": "http://site.com"

			},
			{
				"name": "university",
				"location": "brazil",
				"degree": "bach",
				"majors": ["CS"],
				"dates": 2000,
				"url": "http://site.com"

			}
		],

	"onlineCourses" : [
			{
				"title": "python",
				"school": "udacity",
				"dates": 2017,
				"url": "http://www.udacity.com/course/"
			},
			{
				"title": "python",
				"school": "udacity",
				"dates": 2017,
				"url": "http://www.udacity.com/course/"
			}
		]	
}

//projects
var projects = {
	"project" : [
	{"title": "title of project",
	"dates":"dates worked",
	"description": "description of project",
	"images": ["link1","link2"]
	},
	{"title": "title of project",
	"dates":"dates worked",
	"description": "description of project",
	"images": ["link1","link2"]
	}]
}

//work
var work = {
	"jobs" : [
		{"employer": "employer",
		"title": "title",
		"location": "location",
		"dates": "dates",
		"description": "description"},
		{"employer": "employer",
		"title": "title",
		"location": "location",
		"dates": "dates",
		"description": "description"}]
}

// starting header

	// name and role
	var myHTMLheaderName = HTMLheaderName.replace("%data%", bio["name"]);
	var myHTMLheaderRole = HTMLheaderRole.replace("%data%", "web develloper");
	
	// contacts
	var myHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", "mobile");
	var HTMLmobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
	var HTMLemail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
	
	$("#topContacts").append(HTMLmobile);
	$("#topContacts").append(HTMLemail);

	$("#header").prepend(myHTMLheaderRole);
	$("#header").prepend(myHTMLheaderName);
	


// building HTMLskillsStart to the id=header
if (bio["skills"].length > 0) {

	$("#header").append(HTMLskillsStart);
	// write a loop to append all skills
	for (k=0; k<bio["skills"].length; k++){
		var myHTMLskills = HTMLskills.replace("%data%", bio["skills"][k]);
		$("#skills").append(myHTMLskills);
	}
}




/*
var myName = "Dante";
var formattedName = HTMLheaderName.replace("%data%", myName);


var myRole = "web develloper";
var formattedRole = HTMLheaderRole.replace("%data%", myRole);
var skills = ["awesomeness", "programming", "teaching", "JavaScript"];

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var genMySkills = function(){
	for (var i = 0; i <= skills.length-1; i++) {
		var myHTMLskills = HTMLskills.replace("%data%", skills[i]);
		$("#header").append(myHTMLskills);
	}
}

genMySkills()

var work = {

	"jobPosition": "ninja Master",
	"employer": "Secret Service",
	"yearsWorked": "5 years",
	"city": "Moscow"
}

var education = {
	"lastSchool": "NASA",
	"yearsAttended": "3 years",

}
$("#main").append(bio.name);
*/


