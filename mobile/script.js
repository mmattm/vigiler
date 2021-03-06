$(document).ready(function(event) {


	// TWITTER INIT
	var t = "";
	var selectedCategory = 0;
	var categories = [['Stratégies', 'Politiques tarifaires', 'Nouveaux produits', 'Résultats financiers'],['Valeur perçue', 'Identité de l’entreprise', 'Retombée d’une campagne', 'Perception des consommateurs'],['Recherches en cours', 'Dépôts de brevets', 'technologie', 'Rumeurs'],['Protection', 'comportements collaborateurs', 'vulnérabilités', 'voyages']]

	var searchTerm = 'Mercedes Benz',
		searchTerm2 = 'Mercedes-Benz'
	    numOfTweets = 100,
	    list=[],
	    url = 'twitter.php?q=' + searchTerm + '&count=' + numOfTweets;

	$.get(url, function (data) {
	    $.each(data.statuses, function () {
	       list.push(this); 
	    });
	    	addNewProfile();
	});


	$(".rate").bind('click', function(){
		if ( $("#notify").is(":visible")) {
		   $("#notify").stop().slideUp();
		   $("#switches").empty();
		   $('.rate').removeClass("active");
		   return;
		} 

		
		$(this).addClass("active");
		var i = 0;
		categories[$(this).index()].forEach(function(entry) {
		    $("#switches").append( '<div class="switch"><input type="checkbox" class="spec" name="toggle'+i+'" id="toggle'+i+'"><label for="toggle'+i+'"></label><span class="label">'+entry+'</span></div>' );
		    i++;
		});
		

		$("#notify").stop().slideDown();
		selectedCategory = $(this).attr('veille-id');
	});

	// SAVE
	$(".notifybutton").on('click touchstart', function () {
	//$(document.body).on('click touchstart', '.notifybutton' ,function(){

		$('.rate').removeClass("active");
		var eventsholded = [];

		$( ".spec" ).each(function( index, element ) {
			var checkboxStatus = $(this).prop('checked') ? 1 : 0;
			eventsholded[index] = checkboxStatus;
			
		});
		console.log($( ".spec" ));

		var now = new Date().getTime()
	
		var data = {
		     "data": 
		     {
		     	"veille": selectedCategory,
		     	"category": eventsholded,
		     	"content": ($('.inner').text()).replace(/['"]+/g, ''),
		     	"keywords": searchTerm,
		     	"source" : "twitter",
		     	"url" : $('.inner').attr('url')
		     }
		 };

		data = $(this).serialize() + "&" + $.param(data);
		$.ajax({
		  type: "POST",
		  dataType: "json",
		  url: "save_json.php", //Relative or absolute path to response.php file
		  data: data,
		  success: function(data) {
		   // console.log(data);
		  },
		  error: function (request, status, error) {
		          //console.log(error);
		      }
		});
		$("#notify").stop().slideToggle();
		swipeDislike();
		$("#switches").empty();
	});

	// document.ontouchstart = function(e){ 
	//     e.preventDefault(); 
	// }

	$("div#swipe_like").on( "click", function() {
		swipeLike();
	});	

	$("div#swipe_dislike").on( "click", function() {
		swipeDislike();
	});	



	function swipe() {
		Draggable.create("#photo", {
		   	throwProps:true,
		   	onDragEnd:function(endX) {
	   			if(Math.round(this.endX) > 0 ) {
	   				swipeLike();			
	   			}
	   			else {
	   				swipeDislike();
	   			}
	   			console.log(Math.round(this.endX));
			}
		});
	}

	function swipeLike() {
		
			var $photo = $("div.content").find('#photo');

			var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
			swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=400", top:"+=300", rotation:"60"}], ease:Power1.easeInOut});

			addNewProfile();
	}

	function swipeDislike() {
		
			var $photo = $("div.content").find('#photo');

			var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
			swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=-350", top:"+=300", rotation:"-60"}], ease:Power1.easeInOut});

			addNewProfile();
	}

	function remove(photo) {
	    $(photo).remove();
	}

	function addNewProfile() {
		var mess = list[Math.floor(list.length * Math.random())];
		//console.log(mess.entities.urls[0].url);
		var url = mess.entities.urls.length > 0 ? mess.entities.urls[0].url : null ;

		$("div.content").prepend('<div class="photo" id="photo" )">'
		+ '<span class="feedmessage"><div class="inner" url="'+ url +'">' 
		+ mess.text
		+ '</div></span>'
		+ '<span class="meta">' 
		+ '<span class="twitter"></span>' 
		+ '<p>' +parseTwitterDate(mess.created_at)+'</p>' 
		+ '</span>' 
		+ '</div>');

		$(".inner").each(function () {
		        var regex = new RegExp(searchTerm,'gi');
		        var regex2 = new RegExp(searchTerm2,'gi');
		        $(this).html($(this).text().replace(regex, "<span class='blue'>"+searchTerm+"</span>"));
		        $(this).html($(this).text().replace(regex2, "<span class='blue'>"+searchTerm+"</span>"));
		  });

		swipe();	
	}
});


function parseTwitterDate(tdate) {
    var system_date = new Date(Date.parse(tdate));
    var user_date = new Date();
    if (K.ie) {
        system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
    }
    var diff = Math.floor((user_date - system_date) / 1000);
    if (diff <= 1) {return "just now";}
    if (diff < 20) {return diff + " seconds ago";}
    if (diff < 40) {return "half a minute ago";}
    if (diff < 60) {return "less than a minute ago";}
    if (diff <= 90) {return "one minute ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
    if (diff <= 5400) {return "1 hour ago";}
    if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
    if (diff <= 129600) {return "1 day ago";}
    if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
    if (diff <= 777600) {return "1 week ago";}
    return "on " + system_date;
}

// from http://widgets.twimg.com/j/1/widget.js
var K = function () {
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();
