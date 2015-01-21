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
};

var work = {
  "companies": [
    {
      "name": "Country Visions Inc.",
      "position": "Director of Program Management",
      "years": 4,
      "city": "Vacaville, CA"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "App Academy",
      "city": "San Francisco, CA",
      "degree": "",
      "major": "Web Development",
      "dates": 2014
    },
    {
      "name": "San Francisco State University",
      "city": "San Francisco, CA",
      "degree": "MBA",
      "major": "Decision Sciences",
      "dates": 2010
    },
    {
      "name": "University of California Santa Barbara",
      "city": "Santa Barbara, CA",
      "degree": "BA",
      "major": "Business Economics",
      "dates": 2006
    }
  ]
};

var project = {
  "projects": [
    {
      "name": "Mellow-Yellow-Trellow",
      "description": "Clone of the popular project management app Trello"
    },
    {
      "name": "Contactr.io",
      "description": "Chrome extension that displays the company information, founders, and founders email for the current website"
    },
    {
      "name": "Snake",
      "description": "Classic snake game built with Javascript and HTML canvas"
    }
  ]
};


if (bio.skills) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  });
};

var displayWork = function() {
  for (company in work.companies) {
    $("#workExperience").append(HTMLworkStart);
  
    var companyName = work.companies[company].name;
    var companyPosition = work.companies[company].position;
    var companyYears = work.companies[company].years;
    var companyCity = work.companies[company].city;
  
    var formattedName = HTMLworkEmployer.replace("%data%", companyName);
    var formattedPosition = HTMLworkTitle.replace("%data%", companyPosition);
    var formattedYears = HTMLworkDates.replace("%data%", companyYears);
    var formattedCity = HTMLworkLocation.replace("%data%", companyCity);
  
    $(".work-entry").append(formattedName + formattedPosition);
    $(".work-entry").append(formattedCity + formattedYears);
    $(".work-entry").append(formattedCity + formattedYears)
  }
}();

$("#main").append(internationalizeButton);

var inName = function(name) {
  var firstName = name.split(" ")[0];
  
  
  var lastName = name.split(" ")[1];
  lastName = lastName.toUpperCase();
  console.log(firstName + lastName);
}("jonathan wilson");




