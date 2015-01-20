var bio = {
  "fullName": "Jonathan Wilson",
  "role": "Web Developer",
  "contacts": {
    "email": "wilsonwjonathan@gmail.com",
    "mobile": "707-372-3338",
    "github": "github.com/jonwils24",
    "linkedin": "linkedin.com/in/jwwilson/",
    "portfolio": "wilsonwjonathan.com"
  },
  "bioURL": "images/fry.jpg",
  "WelcomeMsg": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": ["Ruby", "Ruby on Rails", "Javascript", "Backbone.js", "jQuery",
            "HTML5", "CSS3", "responsive design"]
}
var formattedName = HTMLheaderName.replace("%data%", bio.fullName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var work = {};
work.position = "Director of Program Management";
work.employer = "Country Visions";
work.yearsWorked = "4 years";
work.city = "Vacaville, CA";

var education = {};
education["last school attended"] = "App Acadmey";
education["duration"] = 



