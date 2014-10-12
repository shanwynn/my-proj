/*AJAX Pull data from GitHub API (2 links on Basecamp) pull data, assign to variables.
profile and repo information, create templates (<%    %>) in HTML where I'll put data.*/
/*var profile = {
  "login": "shanwynn",
  "id": 5588567,
  "avatar_url": "https://avatars.githubusercontent.com/u/5588567?v=2",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shanwynn",
  "html_url": "https://github.com/shanwynn",
  "followers_url": "https://api.github.com/users/shanwynn/followers",
  "following_url": "https://api.github.com/users/shanwynn/following{/other_user}",
  "gists_url": "https://api.github.com/users/shanwynn/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shanwynn/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shanwynn/subscriptions",
  "organizations_url": "https://api.github.com/users/shanwynn/orgs",
  "repos_url": "https://api.github.com/users/shanwynn/repos",
  "events_url": "https://api.github.com/users/shanwynn/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shanwynn/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shannon Wynn",
  "company": "",
  "blog": "http://www.shannonwynn.com",
  "location": "Tallahassee, FL",
  "email": "shannonwynn@mac.com",
  "hireable": false,
  "bio": null,
  "public_repos": 32,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2013-10-01T19:00:10Z",
  "updated_at": "2014-10-12T17:36:04Z"
};*/
/* api call */
var API_URL = 'https://api.github.com/users/shanwynn';

var withGetJSON = function () {
  $.getJSON(API_URL, function (data) {
    $('.info').html(JSON.stringify(data));
    setProfileInfo(data);
  });
};

var setProfileInfo = function (profileData) {
  $('.name').text(profileData.login);
  $('.avatar').html("<img src='" + profileData.avatar_url + "'/>");
  $('.location').text(profileData.location);
  $('.link').prop('href', profileData.html_url);

  $('.blog').html("<a href='" + profileData.blog + "'>" + profileData.blog + "</a>");
  $('.email').text(profileData.email);
};
 withGetJSON();

/* target ids*/
$('li').on('click', function (event) {
  var targetID = '#' +
  $(this).data('target');
  $(this).add(targetID)
         .addClass('active')
         .siblings()
         .removeClass('active');
});
