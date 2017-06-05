'use strict'
angular.module("britishGas")
	   .directive("menuChk", menuDir);

function menuDir(){
	return{
		restrict : "EA",
		templateUrl : 'app/common/menulist.html',
		replace:true,
		scope:{
			menudata:"=data"
		}
	}
}