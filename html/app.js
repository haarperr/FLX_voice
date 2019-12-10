window.addEventListener('message', function(e) {
	$("#boite").stop(false, true);
    if (e.data.displayWindow == 'true') {
        $("#boite").css('display', 'flex');
  		
        $("#boite").animate({
        	bottom: "25%",
        	opacity: "1.0"
        	},
        	750, function() {

        });

    } else {
    	$("#boite").animate({
        	bottom: "-50%",
        	opacity: "0.0"
        	},
        	700, function() {
        		$("#boite").css('display', 'none');
	         	
        });
    }
});

