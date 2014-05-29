function wallCtrl($scope){
	$scope.posts=[
	{id: 0,  text: "Learning Angular today! can't wait to get to it!", comments:[{message:"hi"}]},
	{id: 1, text: "Happy Tuesday!", comments:[{}]},
	{id: 2, text: "Creating an Angular app!", comments:[{}]}
	];
	var i = 2;
	$scope.post = function(){
		if($scope.newPost){
			i += 1;
			$scope.posts.push({id: i, text: $scope.newPost, comments:[{}]});
			$scope.newPost = "";
		}
		else{
			alert("Cannot submit an empty status");
		}
	}
	$scope.addComment = function(id){
		$scope.posts[id].comments.push({message:$scope.posts[id].newComment});
		$scope.posts[id].newComment = "";
	}
}