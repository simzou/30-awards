
$(document).ready(function() {
$(function() {	
		$.getJSON( "https://spreadsheets.google.com/feeds/list/1npkTdmKUovft7cpO7FVTeNXSc0jgsclscuifmIFDfaY/od6/public/values?alt=json", function (data) {	
			$.each(data.feed.entry, function(i,entry) {
			var code ='';	
			code +='<h1>'+entry.gsx$award.$t+'</h1>';
			code +='<h2>'+entry.gsx$name.$t+'</h2>';
			code += '<div class="picture"> <img src="'+ entry.gsx$picture.$t + '"/></div>' ;
			console.log(code);
			$('div#content').append(code); 
			})
		})
	})
})
