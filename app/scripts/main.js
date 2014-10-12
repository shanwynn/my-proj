/*AJAX Pull data from GitHub API (2 links on Basecamp) pull data, assign to variables.
profile and repo information, create templates (<%    %>) in HTML where I'll put data.*/

var profile = function () {
  $.getJSON('https://api.github.com/users/shanwynn', function (data) {
    $('.info').html(JSON.stringify(data));
    setProfileInfo(data);
  });
};

var profileTemplateString = $('#profileTemplate').html();
var profileTemplate = _.template(personTemplateString);
var finishedProfileTemplate=profileTemplate(profile);
