var bio = {
  'name': 'Sandeep Danta',
  'role': 'Software Developer',
  'contacts': [{
    'mobile': '+919046452579',
    'email': 'sandeep.danta@gmail.com',
    'github': 'devmaestro',
    'twitter': '@SandeepDanta',
    'location': 'Bangalore'
  }],
  'welcomeMessage': 'Hello!',
  'skills': ['html', 'css', 'javascript', 'asp.net mvc', 'nodejs', 'mongodb', 'hapijs', 'android'],
  'biopic': '',
  'display': function() {
    $('#topName').append(HTMLheaderName.replace('%data%', this.name));
    $('#topRole').append(HTMLheaderRole.replace('%data%', this.role));
    $('#welcomeMessage').append(HTMLWelcomeMsg.replace('%data%',this.welcomeMessage));
    var skillsHTML = HTMLskillsStart;
    for(var skill in bio.skills) {
      skillsHTML += HTMLskills.replace('%data%', bio.skills[skill]);
    }
    skillsHTML = skillsHTML + HTMLskillsEnd;
    $('#topSkills').append(skillsHTML);
    var HTMLcontacts = '<li><span class="orange-text">mobile</span><span class="white-text">' + this.contacts[0].mobile + '</span></li>' + '<li><span class="orange-text">email</span><span class="white-text">' + this.contacts[0].email + '</span></li>' + '<li><span class="orange-text">github</span><span class="white-text">' + this.contacts[0].github + '</span></li>' + '<li><span class="orange-text">twitter</span><span class="white-text">' + this.contacts[0].twitter + '</span></li>' + '<li><span class="orange-text">location</span><span class="white-text">' + this.contacts[0].location + '</span></li>';
    $('#topContacts').append(HTMLcontacts);
    $('#footerContacts').append(HTMLcontacts);
  }
};
var education = {
'schools': [{
  'name': 'Indian Institute of Technology (IIT), Kharagpur',
  'location': 'Kharagpur, India',
  'degree': '5yr B.Tech + M.Tech Dual Degree',
  'majors': ['Ocean Engineering and Naval Architecture'],
  'dates': 'Jul 2009 - May 2014',
  'url': 'http://www.iitkgp.ac.in'
}],
'onlineCourses': [],
'displaySchools': function() {
  for(var school in this.schools) {
    var entrySchoolName = HTMLschoolName.replace('%data%', this.schools[school].name);
    var entrySchoolLocation = HTMLschoolLocation.replace('%data%', this.schools[school].location);
    var entrySchoolDegree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
    var entrySchoolMajors = HTMLschoolMajor.replace('%data%', this.schools[school].majors[0]);
    var entrySchoolDates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
    $('#education').append(HTMLschoolStart + entrySchoolName + entrySchoolDegree + entrySchoolDates + entrySchoolLocation + entrySchoolMajors + HTMLschoolEnd);
  }
},
'display': function() {
  this.displaySchools();
}
};
var work = {
  'jobs': [{
    'employer': 'Babajob Services Pvt. Ltd.',
    'title': 'Software Developer',
    'location': 'Bangalore, India',
    'dates': 'Jun 2014 - Present',
    'description': ''
  }],
  'display': function() {
    for(var job in this.jobs) {
      var entryWorkEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
      var entryWorkTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
      var entryWorkDates = HTMLworkDates.replace('%data%', this.jobs[job].dates);
      var entryWorkLocation = HTMLworkLocation.replace('%data%', this.jobs[job].location);
      var entryWorkDescription = HTMLworkDescription.replace('%data%', this.jobs[job].description);
      $('#workExperience').append(HTMLworkStart + entryWorkEmployer + entryWorkTitle + entryWorkDates + entryWorkLocation + entryWorkDescription + HTMLworkEnd);
    }
  }
};
var projects = {
  'projects': [{
    'title': 'chatsy',
    'dates': 'Oct 2014 - Present',
    'description': 'A simple but flexible group based chat application for web and android',
    'images': []
  }, {
    'title': 'Traffic Hell',
    'dates': 'Dec 2014 - Present',
    'description': 'A HTML5 game (partial clone of FROGGER) made using pure javascript',
    'images': []
  }, {
    'title': 'BPO Job Search',
    'dates': 'Jun 2014 - Aug 2014',
    'description': 'An android application for Call-center job search using babajob\'s API',
    'images': []
  }, {
    'title': 'TnP Lite',
    'dates': 'Jun 2013 -  Dec 2013',
    'description': 'An android application for the Training and Placement Notification for the campus of IIT Kharagpur',
    'images': []
  }],
  'display': function() {
    for(var project in this.projects) {
      var entryProjectTitle = HTMLprojectTitle.replace('%data%', this.projects[project].title);
      var entryProjectDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
      var entryProjectDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);
      var entryProjectImage = HTMLprojectImage.replace('%data%', this.projects[project].image);
      $('#projects').append(HTMLprojectStart + entryProjectTitle + entryProjectDates + entryProjectDescription + entryProjectImage + HTMLprojectEnd);
    }
  }
};

var addMap = function() {
  $('#mapDiv').append(googleMap);
}

bio.display();
education.display();
projects.display();
work.display();
addMap();
