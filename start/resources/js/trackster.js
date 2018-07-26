$(document).ready(function() {
  var Trackster = {};
  const API_KEY = '5d3f8ff0fa58b7c124cf7925d72981d3';

  $(".search_button").click(function() {
    var key = $(".search_input").val();
    Trackster.searchTracksByTitle(

    );
  })
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
  Trackster.renderTracks = function(tracks) {

  };

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
  Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      url:'http://ws.audioscrobbler.com/2.0/?method=track.search&track+=title&api_key+=API_KEY&format=json',
      datatype:'jsonp',
      success: function(data) {
        console.log(data);
      }
    })
  };
});
