// starting my objects

// biography
var bio = {
	"name": "Dante Vito",
	"role": "web developer",
	"contacts": {
		"mobile": "555-444-333",
		"email": "dante@vito.com",
		"github": "dantevito",
		"twitter": "dantevito",
		"blog": "myblog.dantevito",
		"location": "curitiba - brazil"
	},
	"welcomeMessage": "Welcome to my page! I am a very smart dog, trust me! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem neque, maximus viverra sapien eu, dapibus vehicula leo. Aenean tempor est quis dolor dapibus finibus. In hac habitasse platea dictumst. ",
	"skills": ["Advanced programming", "Problem solver", "Heuristic thinking"],
	"biopic": "images/dogbert.jpg"
};
bio.display = function(){
	// name and role
	var myHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
	var myHTMLheaderRole = HTMLheaderRole.replace("%data%", "web develloper");
	var myHTMLbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	var myHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	// contacts
	var myHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var myHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	var myHTMLgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var myHTMLtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var myHTMLblog = HTMLblog.replace("%data%",bio.contacts.blog);
	var myHTMLlocation = HTMLlocation.replace("%data%",bio.contacts.location);

	var myHTMLmobileTop = myHTMLmobile.replace("col-md-2","col-md-3");
	var myHTMLemailTop = myHTMLemail.replace("col-md-2","col-md-3");
	var myHTMLgithubTop = myHTMLgithub.replace("col-md-2","col-md-3");
	var myHTMLlocationTop = myHTMLlocation.replace("col-md-2","col-md-3");
	//top contacts
	$("#topContacts").append(myHTMLmobileTop, myHTMLemailTop, myHTMLgithubTop, myHTMLlocationTop);
	// footer contacts footerContacts
	$("#footerContacts").append(myHTMLmobile, myHTMLemail, myHTMLgithub, myHTMLtwitter, myHTMLblog, myHTMLlocation);
	// building header
	$("#header").append(myHTMLbioPic, myHTMLwelcomeMsg);
	$("#header").prepend(myHTMLheaderRole);
	$("#header").prepend(myHTMLheaderName);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(s){
			var myHTMLskills = HTMLskills.replace("%data%", s);
			$("#skills-h3:last").append(myHTMLskills);
		});
	}
};


// education
var education = {
	"schools" : [
			{
				"name": "Good Dog University",
				"location": "são paulo - brazil",
				"degree": "bach",
				"majors": ["CS"],
				"dates": "2000-2005",
				"url": "http://www.gduniv.com"
			},
			{
				"name": "Spatial Station College",
				"location": "Recife - brazil",
				"degree": "master",
				"majors": ["MS"],
				"dates": "2005-2010",
				"url": "http://www.outerspace.site.com"

			}
		],
	"onlineCourses" : [
			{
				"title": "Python",
				"school": "Udacity",
				"dates": "2017",
				"url": "http://www.udacity.com/course/python"
			},
			{
				"title": "JavaScript",
				"school": "Udacity",
				"dates": "2017",
				"url": "http://www.udacity.com/course/js"
			}
		]
};
education.display = function(){
	if (education.schools.length > 0){
		$("#education").append(HTMLschoolStart);
		education.schools.forEach(function(school){
			var myHTMLschoolName = HTMLschoolName.replace("%data%",school.name);
			var myHTMLschoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
			var myHTMLschoolDates = HTMLschoolDates.replace("%data%",school.dates);
			var myHTMLschoolLocation = HTMLschoolLocation.replace("%data%",school.location);
			var myHTMLschoolMajor = HTMLschoolMajor.replace("%data%",school.majors);
			$(".education-entry:last").append(myHTMLschoolName+myHTMLschoolDegree);
			$(".education-entry:last").append(myHTMLschoolDates);
			$(".education-entry:last").append(myHTMLschoolLocation);
			$(".education-entry:last").append(myHTMLschoolMajor);
		});
		$(".education-entry:last").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(course){
			var myHTMLonlineTitle = HTMLonlineTitle.replace("%data%",course.title);
			var myHTMLonlineSchool = HTMLonlineSchool.replace("%data%",course.school);
			var myHTMLonlineDates = HTMLonlineDates.replace("%data%",course.dates);
			var myHTMLonlineURL = HTMLonlineURL.replace("%data%",course.url);
			$(".education-entry:last").append(myHTMLonlineTitle+myHTMLonlineSchool);
			$(".education-entry:last").append(myHTMLonlineDates);
			$(".education-entry:last").append(myHTMLonlineURL);
		});
	}
};


//projects
var projects = {
	"projects" : [
	{"title": "Space Research of Life",
	"dates":"2000-2010",
	"description": "Trying to find life in the outer space. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem neque, maximus viverra sapien eu, dapibus vehicula leo. Aenean tempor est quis dolor dapibus finibus. In hac habitasse platea dictumst. Integer id malesuada quam. Mauris elementum risus euismod turpis convallis bibendum. Ut facilisis imperdiet pretium. Quisque commodo, leo et mattis imperdiet, quam diam viverra odio, ut sollicitudin est diam id dolor. Suspendisse potenti. Maecenas sed lacus eget orci suscipit imperdiet.",
	"images": ["images/project01a.png", "images/project01b.png"]
	},
	{"title": "Ancient Aliens Computers",
	"dates":"2010-2015",
	"description": "Alien technology are studied behind the lens of ancient aliens research. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem neque, maximus viverra sapien eu, dapibus vehicula leo. Aenean tempor est quis dolor dapibus finibus. In hac habitasse platea dictumst. Integer id malesuada quam. Mauris elementum risus euismod turpis convallis bibendum. Ut facilisis imperdiet pretium. Quisque commodo, leo et mattis imperdiet, quam diam viverra odio, ut sollicitudin est diam id dolor. Suspendisse potenti. Maecenas sed lacus eget orci suscipit imperdiet.",
	"images": ["images/project02a.png", "images/project02b.png"]
	}]
};
projects.display = function(){
	if (projects.projects.length > 0){
		projects.projects.forEach(function(project){
			$("#projects").append(HTMLprojectStart);
			var myHTMLprojectTitle = HTMLprojectTitle.replace("%data%",project.title);
			var myHTMLprojectDates = HTMLprojectDates.replace("%data%",project.dates);
			var myHTMLprojectDescription = HTMLprojectDescription.replace("%data%",project.description);

			$(".project-entry:last").append(myHTMLprojectTitle);
			$(".project-entry:last").append(myHTMLprojectDates);
			$(".project-entry:last").append(myHTMLprojectDescription);

			project.images.forEach(function(image){
				var myHTMLprojectImage = HTMLprojectImage.replace("%data%",image);
				$(".project-entry:last").append(myHTMLprojectImage);
			});
		});
	}
};


//work
var work = {
	"jobs" : [
		{"employer": "Ultra Spacial Security",
		"title": "Analyst",
		"location": "Rio Branco - Brazil",
		"dates": "2000-2010",
		"description": "Ultra secrets activites envolving aliens"},
		{"employer": "Global Space",
		"title": "Astronaut",
		"location": "São Carlos - Brazil",
		"dates": "2010-2017",
		"description": "Several importants activites. "}]
};
work.display = function(){
	if (work.jobs.length > 0){
		work.jobs.forEach(function(job){
			$("#workExperience").append(HTMLworkStart);
			var myHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var myHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
			var myHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
			var myHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
			var myHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);
			var formattedEmployerTittle = myHTMLworkEmployer + myHTMLworkTitle;
			$(".work-entry:last").append(formattedEmployerTittle);
			$(".work-entry:last").append(myHTMLworkLocation);
			$(".work-entry:last").append(myHTMLworkDates);
			$(".work-entry:last").append(myHTMLworkDescription);
		});
	}
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

var countSkilss = bio.skills.length;
var countPlaces = 1 + education.schools.length + work.jobs.length;
var countExperience = work.jobs.length;
var countProjects = projects.projects.length;

Highcharts.chart('graph', {  
    chart: {
        type: 'column'
    },
    title: {
        text: 'Counting metadata'
    },
    subtitle: {
        text: '# of places, courses and others'
    },
    xAxis: {
        categories: [
            'Skills',
            'Places',
            'Work Experience',
            'Projects'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Counts'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Counts',
        data: [countSkilss, countPlaces, countExperience, countProjects]
        //data: [1,2,3,4]
    }]
}); 

/*
function locationizer(work_obj){
    locations = [];
    for (w in work_obj){
        locations.push(work_obj[w]['location']);
    }
    return locations;
};

$('#main').append(internationalizeButton);
var inName = function(name){
	var first = name.split(" ")[0];
	var second = name.split(" ")[1];
	first = first.toLowerCase();
	second = second.toUpperCase();
	result = first[0].toUpperCase()+first.slice(1)+" "+second;
	return result;
};
*/
console.log([countSkilss, countPlaces, countExperience, countProjects]);