$(document).ready(function() {
	var parks = [
		["Independence Grove, Liberyville", "ig.jpg", "ig.html", 42.309161, -87.9535807],
		["Old School, Liberyville", "os.jpg", "os.html", 42.271289, -87.9270137],
		["Fort Sheridan Beach, Lake Forest", "fs.jpg", "fs.html", 42.2335933, -87.8487661],
		["Captain Daniel Wright Woods, Mettawa", "cd.jpg","cd.html", 42.2188159, -87.9295407],
		["Half Day Forest Preserve, Vernon Hills", "hd.jpg", "hd.html", 42.2139721, -87.9344434],
		["Rollins Savanna, Grayslake", "rs.jpg", "rs.html", 42.3613496, -88.0261668]
	];

	var x = Math.floor(Math.random()*parks.length);

	$("#text").html(parks[x][0]);

	$("#parkImages").css({"background-image":"url(images/"+parks[x][1]+")"});

	$("#link").attr("href", parks[x][2]);

	
	$( '#filter' ).click(function(){
  		$('#refineSearch').toggleClass('expandedRefineSearchFilter');
  		$('#parkList').toggleClass('parkList');
  		$('#parkList').toggleClass('shortParkListFilter');
  		$('#filter').toggleClass('filterActive');
  		$('#sort').removeClass('sortActive');
  		$('#filterOptions').toggleClass('filterOptions');
  		$('#filterOptions').toggleClass('showFilterOptions');

	});

	$( '#sort' ).click(function(){
  		$('#refineSearch').toggleClass('expandedRefineSearchSort');
  		$('#parkList').toggleClass('parkList');
  		$('#parkList').toggleClass('shortParkListSort');
  		$('#sort').toggleClass('sortActive');
  		$('#filter').removeClass('filterActive');
  		$('#sortOptions').toggleClass('sortOptions');
  		$('#sortOptions').toggleClass('showSortOptions');





	});
	 
	

});