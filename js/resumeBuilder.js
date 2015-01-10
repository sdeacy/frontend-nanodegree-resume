/*work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.
    projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.*/



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
     ]

};



 var projects = [
                    {

                        "title": "timer",
                        "description" : "A timer application",
                        "datesWorked" : "December 2014 to present",
                        "images" :[ "images/197x148.gif", "images/197x148.gif"]
                    },
                    {
                        "description" : "Another application",
                        title: "nano",
                        datesWorked : "December 2014 to present",
                        "images" :[ "images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
                        }
 ];




var bio = {
        name : "Shay Deacy",
        role: "Software Developer",
        welcomeMessage : "A closed mouth catches no foot",
        contacts : {
            mobileNumber : "1234567890",
            email : "alias@undercover.com",
            github : "cantsay",
            twitter : "ditto",
            location : "evenidontknow"
        },
        skills : ["javascript","html","css","staring into space"],
        "pic" : "images/fry.jpg"
};


var education = {
    "schools" : [
        {
                name: "dit",
                location: "Dublin",
                degree: "Postgrad in Mobile development",
                majors: ["iOS", "Object Oriented Development"],
                datesAttended: "October 2014 to present",
                courseURL: "http://www.dit.ie"
        },
    {
        name : "udacity",
        location : "www",
        degree : "Nano degree",
        majors : ["front-end Development"],
        datesAttended : "December 2014 to present",
        courseURL : "http://www.udacity.com"
    }],
    "onlineCourses" : [
        {
            "title" : "Nano degree",
            "school" : "udacity",
            "datesAttended" : "December 2014 to present",
            "url" : "http://www.udacity.com"
        }
    ]
};






var formatedName = HTMLheaderName.replace('%data%', 'Shay Deacy');
var formatedRole = HTMLheaderRole.replace('%data%', 'Web Developer');
$('#header').prepend(formatedName, formatedRole);


//var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
//var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
//var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
//var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
//var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
//var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
//var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';

var formattedHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobileNumber);
var formattedHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedHTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);

$('#topContacts').append(formattedHTMLmobile + formattedHTMLemail + formattedHTMLgithub + formattedHTMLtwitter
+ formattedHTMLlocation);
//
//var HTMLbioPic = '<img src="%data%" class="biopic">';
//var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var formattedHTMLbioPic = HTMLbioPic.replace('%data%', bio.pic);
var formattedHTMLWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').append(formattedHTMLbioPic + formattedHTMLWelcomeMsg);


$('#header:last').append(HTMLskillsStart);
var formattedHTMLskillsArray = bio.skills;
for(var skill in formattedHTMLskillsArray) {
    var formattedHTMLskill = HTMLskills.replace('%data%',formattedHTMLskillsArray[skill] )
    $('#skills').append(formattedHTMLskill);
}

for( var job in work["jobs"]){
    $('#workExperience').append(HTMLworkStart);
    var formatedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formatedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formatedworkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
    var formatedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
    var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $('.work-entry:last').append(formatedWorkEmployer+formatedWorkTitle+formatedworkDates+formatedWorkLocation+formatedWorkDescription);
}

for(var proj in projects){
    $('#projects').append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects[proj].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects[proj].datesWorked);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects[proj].description);
    $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
    var imageArray = projects[proj].images;
    for (img in imageArray){
        var formattedProjectimage = HTMLprojectImage.replace('%data%', imageArray[img]);
        console.log(formattedProjectimage);
        $('.project-entry:last').append(formattedProjectimage);
    }
}



for (var school in education.schools) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].datesAttended);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
    $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree  + formattedSchoolDates
    + formattedSchoolLocation + formattedSchoolMajor);
}


$('.education-entry:last').append(HTMLonlineClasses);

for (var school in education.onlineCourses) {
    $('#education').append(HTMLschoolStart);
    var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[school].title);
    var formattedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[school].school);
    var formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[school].datesAttended);
    var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[school].url);
    $('.education-entry:last').append(formattedHTMLonlineTitle + formattedHTMLonlineSchool  + formattedHTMLonlineDates
    + formattedHTMLonlineURL);

}

