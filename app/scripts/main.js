/*AJAX Pull data from GitHub API (2 links on Basecamp) pull data, assign to variables.
profile and repo information, create templates (<%    %>) in HTML where I'll put data.*/

var profileInfo = function () {
  $.getJSON('https://api.github.com/users/shanwynn', function (data) {
    $('.info').html(JSON.stringify(data));
    setProfileInfo(data);
  });
};

var repoInfo = function () {
  $.getJSON('https://api.github.com/users/shanwynn/repos', function (data) {
    $('.info').html(JSON.stringify(data));
    setrepoInfo(data);
  });
};
