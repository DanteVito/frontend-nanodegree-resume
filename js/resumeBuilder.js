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
				"name": "Good Dog University",
				"location": "Russia",
				"degree": "bach",
				"majors": ["CS"],
				"dates": 2000,
				"url": "http://www.gduniv.com"

			},
			{
				"name": "Spatial Station College",
				"location": "Outer Space",
				"degree": "master",
				"majors": ["MS"],
				"dates": 2005,
				"url": "http://www.outerspace.site.com"

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
	{"title": "Space Research of Life",
	"dates":"2000-2010",
	"description": "Trying to find life in the outer space",
	"images": ["https://advocateofentropy.files.wordpress.com/2014/05/multiple-cells.jpg",
		"https://userscontent2.emaze.com/images/e5c42ed8-aafd-49dc-bbe7-44ffa0364500/640e0690ab563144364b74fa67d6f6ae.jpg"]
	},
	{"title": "Ancient Aliens Computers",
	"dates":"2010-2015",
	"description": "Alien technology are studied behind the lens of",
	"images": ["http://www.openminds.tv/wp-content/uploads/I-Dont-Always-Aliens.jpg",
		"https://pogd.es/assets/bg/Ancient-Aliens.jpg"]
	}]
}

//work
var work = {
	"jobs" : [
		{"employer": "Ultra Spacial Security",
		"title": "Analyst",
		"location": "top secret location",
		"dates": "2000-2010",
		"description": "Ultra secrets activites envolving aliens"},
		{"employer": "Global Space",
		"title": "Astronaut",
		"location": "Moon",
		"dates": "2010-",
		"description": "Several importants activites"}]
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


