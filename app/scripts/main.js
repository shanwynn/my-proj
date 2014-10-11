/*AJAX Pull data from GitHub API (2 links on Basecamp) pull data, assign to variables.
profile and repo information, create templates (<%    %>) in HTML where I'll put data.*/

var profileTemplate = _.template($('script').html());
function getProfile (profileName) {
  $.getJSON('https://api.github.com/users/shanwynn',
  function (data) {
    $('.info').html(JSON.stringify(data));
    setProfileInfo(data);
  });
};

var repoTemplate = _.template($('script').html());
function getRepo (repoName) {
  $.getJSON('https://api.github.com/users/shanwynn/repos',
  function (data) {
    $('.info').html(JSON.stringify(data));
    setRepoInfo(data);
  });
};

var setProfileInfo = function (profileData) {
  $('#name').text(profileData.login);
  $('#avatar').html("<img src='" + profileData.avatar_url + "'/>");
  $('#location').text(profileData.location);

  $('#link').prop('href', profileData.html_url);

  $('#blog').html("<a href='" + profileData.blog + "'>" + profileData.blog + "</a>");
  $('#email').text(profileData.email);
};
