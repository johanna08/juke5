juke.directive('songList', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/song/songlist.html',
		scope: {
			songsObj: '=',
		},
		link: function(scope, element, attrs){
			scope.getCurrentSong = function () {
				return PlayerFactory.getCurrentSong();
			};

			scope.isPlaying = function (song) {
				return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			};

			scope.toggle = function (song) {
				if (song !== PlayerFactory.getCurrentSong()) {
				PlayerFactory.start(song, scope.songsObj);
				} else if ( PlayerFactory.isPlaying() ) {
				PlayerFactory.pause();
				} else {
				PlayerFactory.resume();
				}
			};
		}
	}
})