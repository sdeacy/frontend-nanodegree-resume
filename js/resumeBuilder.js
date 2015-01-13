
var work = {
    "jobs" : [
        {
            "employer": "deltastreams",
            "title": "Software developer",
            "location": "Cork",
            "dates": "August 2013 to Febuary 2014",
            "description": "Developing MVC web application in a RESTful web service framework."
        },
        {
            "employer": "tripmoney",
            "title": "Software developer",
            "location": "Cork",
            "dates": "September 2014 to November 2014",
            "description": "Developing a backbone.js web app"
        }
    ],
    "display" : function() {
        for( var job in work["jobs"]){
            $('#workExperience').append(HTMLworkStart);
            var formatedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formatedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formatedworkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            var formatedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $('.work-entry:last').append(formatedWorkEmployer+formatedWorkTitle+formatedworkDates+formatedWorkLocation+formatedWorkDescription);
        }
    }
}


var projects = {
    "projects": [
        {

            "title": "timer",
            "description": "A timer application",
            "datesWorked": "December 2014 to present",
            "images": [
                "images/197x148.gif", "images/197x148.gif"
            ]
        },
        {
            "description": "Another application",
            "title": "nano",
            "datesWorked": "December 2014 to present",
            "images": [
                "images/197x148.gif", "images/197x148.gif", "images/197x148.gif"
            ]
        }
    ],

    "display" : function () {
        for (var proj in projects.projects) {
            $('#projects').append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[proj].title);
            var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[proj].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[proj].description);
            $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
            var imageArray = projects.projects[proj].images;
            for (img in imageArray) {
                var formattedProjectimage = HTMLprojectImage.replace('%data%', imageArray[img]);
                $('.project-entry:last').append(formattedProjectimage);
            }
        }
    }
}



var bio = {
    "name": "Shay Deacy",
    "role": "Software Developer",
    "welcomeMessage": "A closed mouth catches no foot",
    "contacts": {
        "mobileNumber": "1234567890",
        "email": "alias@undercover.com",
        "github": "cantsay",
        "twitter": "ditto",
        "location": "evenidontknow"
    },
    "skills": [
        "javascript", "html", "css", "staring into space"
    ],
    "pic": "images/fry.jpg",
    "display": function () {
        var formattedHTMLmobile     = HTMLmobile.replace('%data%', bio.contacts.mobileNumber);
        var formattedHTMLemail      = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedHTMLgithub     = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedHTMLtwitter    = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedHTMLlocation   = HTMLlocation.replace('%data%', bio.contacts.location);

        $('#topContacts, #footerContacts').append(formattedHTMLmobile + formattedHTMLemail + formattedHTMLgithub + formattedHTMLtwitter
        + formattedHTMLlocation);


        var formattedHTMLbioPic = HTMLbioPic.replace('%data%', bio.pic);
        var formattedHTMLWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedHTMLbioPic + formattedHTMLWelcomeMsg);


        var formattedHTMLskillsArray = bio.skills;
        if (formattedHTMLskillsArray.length > 0) {
            $('#header:last').append(HTMLskillsStart);
            for (var skill in formattedHTMLskillsArray) {
                var formattedHTMLskill = HTMLskills.replace('%data%', formattedHTMLskillsArray[skill])
                $('#skills').append(formattedHTMLskill);
            }
        }
    }
}


var education = {
    "schools": [
        {
            "name": "dit",
            "location": "Dublin",
            "degree": "Postgrad in Mobile development",
            "majors": ["iOS", "Object Oriented Development"],
            "datesAttended": "October 2014 to present",
            "courseURL": "http://www.dit.ie"
        },
        {
            "name": "udacity",
            "location": "www",
            "degree": "Nano degree",
            "majors": ["front-end Development"],
            "datesAttended": "December 2014 to present",
            "courseURL": "http://www.udacity.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nano degree",
            "school": "udacity",
            "datesAttended": "December 2014 to present",
            "url": "http://www.udacity.com"
        }
    ],
    "display" : function() {
        for (var school in education.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].datesAttended);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
            $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates
            + formattedSchoolLocation + formattedSchoolMajor);
        }

         $('.education-entry:last').append(HTMLonlineClasses);

        for (var school in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[school].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[school].school);
            var formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[school].datesAttended);
            var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[school].url);
            $('.education-entry:last').append(formattedHTMLonlineTitle + formattedHTMLonlineSchool + formattedHTMLonlineDates
            + formattedHTMLonlineURL);
        }
    }
}

function header() {
    var name = "Shay Deacy";
    var role = "Web Developer";
    var formatedName = HTMLheaderName.replace('%data%', name);
    var formatedRole = HTMLheaderRole.replace('%data%', role);
    $('#header').prepend(formatedName, formatedRole);
}


function inName(name) {
    var splitName = name.split(" ");
    var lastName = splitName[1].toUpperCase();
    return splitName[0] + " " + lastName;
}


header();
bio.display();
work.display();
projects.display();
education.display();



$('#name').append(internationalizeButton);
$('#mapDiv').append(googleMap);


