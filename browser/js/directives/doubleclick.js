juke.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			doubleClick: '&'
		},
		link: function(scope, element, attrb){
			element.on('dblclick', function(){
				console.log('i clicked myself', scope.toggle)
				scope.doubleClick();
			})
		}
	}
});