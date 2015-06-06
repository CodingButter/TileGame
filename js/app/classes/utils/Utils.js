define(['jquery','Class'],function($,Class){
	var Utils = Class.extend({
		init:function(){		
			
		}
	});
	Utils.prototype.loadFileAsString = function(_path){
		var string = "";
		$.ajax({
			url : _path,
			type : "get",
			async: false,
			success : function(_contents) {
				string = _contents;
			},
			error: function() {
				alert("file:'" + _path +"' can not be loaded");
			}
		});
		return string;
	}
	
	
	window.Utils = new Utils();
});	