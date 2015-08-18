requirejs.config({
  baseUrl: './scripts',
  paths: {
    'requirejs' : '../bower_components/requirejs/require',
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'firebase': '../bower_components/firebase/firebase',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
        exports: 'Firebase'
    }
  }
});


requirejs(
        ["jquery","hbs","firebase","display"],
        function($, Handlebars, _firebase,displayToPage) {

// On Submit Push to Firebase 
$("#submit").on("click", function() {

var name = $("#name").val();
var age = $("#age").val();
var gender = $("#gender").val();
var skills = $("#skills").val().split(",");

var addFamily = { 
      "name": name,
      "age": age,
      "gender": gender,
      "skills": skills
}


$(document).ready(function() {

    $.ajax({
            url: "https://nss-lewis-family.firebaseio.com/family.json",
            method: "POST",
            data: JSON.stringify(addFamily)
            }).done(function() {
        console.log("Loaded Family Successfully");
        });
    });
});

// Display to page
var myFirebaseRef = new Firebase("https://nss-lewis-family.firebaseio.com/");
    myFirebaseRef.child("family").on("value", function(snapshot) {
      console.log(snapshot.val());
      var family = snapshot.val();
      var allFamily = [];
      // Convert Firebase's object of objects into an array of objects
      for (var key in family) {
        allFamily[allFamily.length] = family[key];
      }
      allFamilyObj = {
        family: allFamily
      };

      displayToPage(family);

    });
//End Display


});








