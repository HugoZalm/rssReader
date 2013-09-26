$(function(){
alert('laden is klaar.');
	var rssurl="http://www.nu.nl/feeds/rss/algemeen.rss";
	$.get(rssurl, function(data){
alert('functie gestart');
		var $xml = $(data);
		$xml.find('item').each(function() {
alert('item gevonden.');
			var $this = $(this);
			item = {
				title: $this.find('title').text(),
				link: $this.find('link').text(),
				description: $this.find('description').text(),
				pubDate: $this.find('pubDate').text(),
				author: $this.find('author').text()
			};
			// do something with item here	
			var html = '<div class=feedItem">';
			html += '<div class="title"><a href="'+item.link+'">'+item.title+'</a></div>';
			html += '<div class="info">'+item.author+' ('+item.pubDate+')</div>';
			html += '<div class="text">'+item.description+'</div>';
			html += '</div>';
			$('#tabContent').append(html);
		});
	});
});