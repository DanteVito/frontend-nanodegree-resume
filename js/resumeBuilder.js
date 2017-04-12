// starting my objects

// biography
var bio = {
	"name": "Dante Vito",
	"role": "web developer",
	"contacts": {
		"mobile": "555-444-333",
		"email": "dante@vito.com",
		"github": "dantevito",
		"location": "beagland island"
	},
	"welcome": "Welcome to me page! I am a very smart dog, trust me!",
	"skills": ["Advanced programming", "Problem solver", "Heuristic thinking"],
	"pictureUrl": "images/dogbert.jpg"
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
	var HTMLheaderName = HTMLheaderName.replace("%data%", bio["name"]);
	var HTMLheaderRole = HTMLheaderRole.replace("%data%", "web develloper");
	var HTMLbioPic = HTMLbioPic.replace("%data%",bio["pictureUrl"]);
	var HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio["welcome"]);
	// contacts
	var HTMLmobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
	var HTMLemail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
	var HTMLgithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
	var HTMLtwitter = HTMLtwitter.replace("%data%",bio.contacts["twitter"]);
	var HTMLlocation = HTMLlocation.replace("%data%",bio.contacts["location"]);
	
	$("#topContacts").append(HTMLmobile);
	$("#topContacts").append(HTMLemail);
	$("#topContacts").append(HTMLgithub);
	$("#topContacts").append(HTMLtwitter);
	$("#topContacts").append(HTMLlocation);

	$("#header").append(HTMLbioPic);
	$("#header").append(HTMLwelcomeMsg);
	$("#header").prepend(HTMLheaderRole);
	$("#header").prepend(HTMLheaderName);
	


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


