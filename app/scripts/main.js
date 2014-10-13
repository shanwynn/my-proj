/*AJAX Pull data from GitHub API (2 links on Basecamp) pull data, assign to variables.
profile and repo information, create templates (<%    %>) in HTML where I'll put data.*/

/* API */
var seeProfile = function () {
  $.getJSON('https://api.github.com/users/shanwynn', function (data) {
    $('.info').html(JSON.stringify(data));
    setProfileInfo(data);
  });
};

var setProfileInfo = function (profileData) {
  $('#name').text(profileData.login);
  $('#avatar').html("<img src='" + profileData.avatar_url + "'/>");
  $('#location').text(profileData.location);
  $('#blog').html("<a href='" + profileData.blog + "'>" + profileData.blog + "</a>");
  $('#email').text(profileData.email);
  $('#joined').text(profileData.joined);
};

 seeProfile();

/* var repoProfile = function () {
   $.getJSON('https://api.github.com/users/shanwynn/repos', function (data) {
     $('.info').html(JSON.stringify(data));
     setProfileInfo(data);
   });
 };

 var setProfileInfo = function (profileData) {

 };

  repoProfile();
*/

/* target ids */
$('li').on('click', function (event) {
  var targetID = '#' +
  $(this).data('target');
  $(this).add(targetID)
         .addClass('active')
         .siblings()
         .removeClass('active');
});
