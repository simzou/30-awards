
$(document).ready(function() {
$(function() {	
		$.getJSON( "https://spreadsheets.google.com/feeds/list/1npkTdmKUovft7cpO7FVTeNXSc0jgsclscuifmIFDfaY/od6/public/values?alt=json", function (data) {	
			$.each(data.feed.entry, function(i,entry) {
			var code ='';	
			code +='<div class="award"><b>'+entry.gsx$award.$t+'</b></div>';
			code +='<div class="name">'+entry.gsx$name.$t+'</div>';
			code += '<div class="picture"> <img src="'+ entry.gsx$picture.$t + '"/></div>' ;
			console.log(code);
			$('div#content').append(code); 
			})
		})
	})
})