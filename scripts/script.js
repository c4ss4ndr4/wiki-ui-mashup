	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	//keep console in to double check the window dimensions
	//console.log( 'width ' + w);
	
	
	var xmlhttp = new XMLHttpRequest();
	
	//logic for the drop down menu
	//options relevance, just_match, none, incoming_links_asc, incoming_links_desc, last_edit_asc, last_edit_desc, create_timestamp_asc, create_timestamp_desc 
	function resort () {
		var sortValue = document.getElementById("sortInput");
		var sortReturn = sortValue.value;
		var sortName;
		var urlSort; 
		
		if (sortReturn == 1) {
			
			sortName = "relevance";
			
			
		} else if (sortReturn == 2) {
			
			sortName = "just_match";
			
			
		} else if (sortReturn == 3) {
			
			sortName = "none";
			
			
		} else if (sortReturn == 4) {
			
			sortName = "incoming_links_asc";
			
			
		} else if (sortReturn == 5) {
			
			sortName = "incoming_links_desc";
			
			
		} else if (sortReturn == 6) {
			
			sortName = "last_edit_asc";
			
			
		} else if (sortReturn == 7) {
			
			sortName = "last_edit_desc";
			
			
		} else if (sortReturn == 8) {
			
			sortName = "create_timestamp_asc";
			
			
		} else if (sortReturn == 9) {
			
			sortName = "create_timestamp_desc";
			
		}
		
		
		urlSort = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&srlimit=12&srsort=" + sortName + "&srsearch=black%20cats&utf8=&format=json&origin=*"
		xmlhttp.open("GET", urlSort , true);
		xmlhttp.send();
			
	}
	
	
	xmlhttp.onreadystatechange = function() {
		
		if (this.readyState == 4 && this.status == 200) {
			
			//put the json data into an object
			var searchResults = JSON.parse(this.responseText);
			var i;
			var j; 
			var k;
			var searchList = "";
			var searchArr = "";
			
				
			//iterate over the search array
			for (i in searchResults.query.search) {
				
				//console.log(searchResults.query.search[i].title);
				searchList += "<div class='col-6 col-md-4'><h3><a target='_blank' href='http://en.wikipedia.org/?curid=" + searchResults.query.search[i].pageid + "'>" + searchResults.query.search[i].title + "</a></h3>";
				searchList += "<p>" + searchResults.query.search[i].snippet + "</p></div>";
				
			}
		
			document.getElementById("results").innerHTML = searchList;
			
		}
	}
	
	
	
	xmlhttp.open("GET", "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&srlimit=12&srsort=relevance&srsearch=black%20cats&utf8=&format=json&origin=*", true);
	xmlhttp.send();
	

