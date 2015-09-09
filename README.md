# JS201 Quiz

###Description 

1. Create a Github repo named JS201.
2. Clone it into your workspace directory and cd into the directory it creates.
3. Create a javascripts, css and a sass directory.
4. Use Bower to install the following packages - jQuery, RequireJS, Handlebars (make sure you use the require-handlebars-plugin 5. Bower library, not plain Handlebars). You may install more if you need to, but that is the minimum.
6. Copy your package.json file from an existing project into this directory and install the packages.
7. Set up a Gruntfile.js that builds any .scss files in your sass directory into your css directory. It must also have a task for 8running JSLint on the code in your javascripts directory.
8. Create a new Firebase application. Go to your dashboard and fill out the form. App name should be "family", and provide a unique URL. (e.g. nss-steve-family)
9. Using RequireJS, build a modular application that reads all family members from your Firebase DB, lets you add new family members, and lets you delete family members (like that annoying nephew you can't stand).
10. There should be a main module, a module that handles adding, and a module that handles deleting.
11. Use the JSON structure shown below when adding a family member. For the skills array, have a <textarea> field in your form where the user can enter in a comma-delimited list of skills that you will convert into an array.
12. Use a Handlebars template to create the DOM that lists all family members.
13. You can either use AJAX calls to handle all operations, or if you're comfortable with the Firebase native API, you can use that.
14. Commit early, commit often.
