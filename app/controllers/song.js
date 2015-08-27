app.controller("SongCtrl", function($scope) {
  $scope.title = "Song List";
  $scope.inputField = "";
  $scope.songSearchText = "";
  $scope.theSongs = "";

  $scope.newSongs = {
    name: "",
    artist: "",
    album: ""
  };

  $scope.songs = [
  { "name": "Two Dope Boyz in a Cadillac", "artist": "Outkast", "album": "ATLiens"},
  { "name": "Lookout Mountain", "artist": "Drive-by Truckers", "album": "The Dirty South"},
  { "name": "Blue Sky", "artist": "Allman Brothers", "album": "Eat a Peach"},
  { "name": "Statesboro Blues", "artist": "Allman Brothers Band", "album": "Eat a Peach"},
  { "name": "One Way Out", "artist": "Allman Brothers Band", "album": "Eat a Peach"},
  { "name": "In Memory of Elizabeth Reed", "artist": "Allman Brothers Band", "album": "Eat a Peach"},
  { "name": "Midnight Rider", "artist": "Allman Brothers Band", "album": "Eat a Peach"},
  { "name": "ATLiens", "artist": "Outkast", "album": "ATLiens"},
  { "name": "Wheelz of Steel", "artist": "Outkast", "album": "ATLiens"},
  { "name": "Elevators (Me & You)", "artist": "Outkast", "album": "ATLiens"},
  { "name": "Where the Devil Don't Stay", "artist": "Drive-by Truckers", "album": "The Dirty South"},
  { "name": "Danko/Manuel", "artist": "Drive-by Truckers", "album": "The Dirty South"},
  { "name": "Daddy's Cup", "artist": "Drive-by Truckers", "album": "The Dirty South"},
  { "name": "Never Gonna Change", "artist": "Drive-by Truckers", "album": "The Dirty South"}
 
 ];

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
        $scope.songs.splice(songIndex, 1);
    }
  };


  $scope.addSong = function(){
    $scope.songs.push({
      name: $scope.newSongs.name,
      artist: $scope.newSongs.artist,
      album: $scope.newSongs.album
    });

    $scope.newSongs = {
    name: "",
    artist: "",
    album: ""
  };
  };

});
  