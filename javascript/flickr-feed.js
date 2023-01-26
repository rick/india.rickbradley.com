var apiKey = '5fb188471a31630cef8c69b085063596';
var feed = 'http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=72157622393701396&extras=date_upload&per_page=1&format=json';

// fill in the number of photos found on flickr in our India trip photoset
$(function(){
  //to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + apiKey + '&user_id=29096781@N02&per_page=15&page=2&format=json&jsoncallback=?
	$.getJSON('http://api.flickr.com/services/rest/?&method=flickr.photosets.getInfo&api_key=' + apiKey + '&photoset_id=72157622393701396&format=json&jsoncallback=?',
    function(data){
      $('#flickr-count').text(data.photoset.photos);
    });

	$.getJSON('http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=72157622393701396&extras=date_upload&per_page=1&format=json&jsoncallback=?',
    function(data){
      d = data;
      myDate = new Date(data.photoset.photo[0].dateupload * 1000);
      $('#flickr-when').attr('title', myDate.format('Y-m-d h:i:s'));
      $('#flickr-when').timeago();
    });

  $('#flickr').toggle();
  $('#flickr-loaded').toggle();
});
