        function timeSince() {
            var fade = document.getElementById("body"); 
			var fadeMenu = document.getElementById("menu"); 
            var opacity = 0; 
			var opacityMenu = 0;
			var custom_date_formats = {
				past: [
					{ ceiling: null, text: "$years years, $months months and $days days." }
					]
			}
            var intervalID = setInterval(function() { 
                if (opacity < 1) { 
                    opacity = opacity + 0.02
                    fade.style.opacity = opacity; 
                } else { 
                    clearInterval(intervalID); 
                } 
            }, 10); 
			var intervalB = setInterval(function() { 
                if (opacityMenu < 1) { 
                    opacityMenu = opacityMenu + 0.01
                    fadeMenu.style.opacity = opacityMenu; 
                } else { 
                    clearInterval(intervalB); 
                } 
            }, 10); 
			var timeSince = humanized_time_span("2019/02/03 08:30:00", "", custom_date_formats);
			document.getElementById("timeSince").innerHTML = timeSince;
        }