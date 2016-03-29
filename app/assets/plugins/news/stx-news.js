//TODO, polling

STX.News=function(container){
	this.container=container;
	this.wrapper=$$$(".stx-news-wrapper", container);
	this.ol=$$$("ol", this.wrapper);
	this.template=$$$("#stx-news-template", this.ol);
	this.loadMoreTemplate=$$$("#stx-news-refresh", this.ol);
	var self=this;
	var refresh=function(){
		if(this.y>5){
			self.refresh();
		}
	};
	this.iscroll=STX.iscroll.newScroller(this.wrapper, {version:"IScroll5", tap:true, probeType: 3});
	this.iscroll.on("scroll", refresh);
	this.iscroll.on("scrollEnd", function(){
		self.refreshing=false;
	});
	this.rss=[];
};

STX.News.prototype.toggle=function(open, symbol){
	if(open){
		this.changeSymbol(symbol);
	}{
	}
};

STX.News.prototype.addRSSFeed=function(rss){
	this.rss.push(rss);
};

STX.News.prototype.refresh=function(){
	if(!this.refreshing){
		this.refreshing=true;
		var loadMore=this.loadMoreTemplate.cloneNode(true);
		this.ol.insertBefore(loadMore, this.ol.firstChild);
		this.changeSymbol(this.symbol);
	}
};

STX.News.prototype.formatDate=function(dt){
	var msg="";
	var h=dt.getHours();
	var ampm="AM";
	if(h>12){
		h=h-12;
		ampm="PM";
	}
	var m=dt.getMinutes();
	if(m<10) m="0" + m;
	msg+=STX.monthAbv[dt.getMonth()].capitalize() + " " + dt.getDate() + ", " + h + ":" + m + " " + ampm;
	return msg;
};

STX.News.prototype.createNewsMessageDOM=function(message){
	var li=this.template.cloneNode(true);
	li.message=message;
	li.style.display="block";
	var link=li.querySelector(".message-body");
	link.innerHTML = message.title;
	if (message.link ) {
		link.addEventListener("tap", function(){
			window.open(message.link, "story");
		});
	}
	var dt=new Date(message.pubDate);
	li.querySelector("div.message-date").innerHTML=this.formatDate(dt);
	li.querySelector("div.message-source").innerHTML=message.source;
    li.querySelector("div.link-description").innerHTML=message.description;
    li.querySelector("div.description-source").innerHTML=message.descSource;
	return li;
};


STX.News.prototype.processFeedResults=function(results){
	STX.clearNode(this.ol);
	if(!results){
		return;
	}
	for(var r=0;r<results.length;r++){
		var result=results[r];
		if(result.error || result.query.count===0){ //no messages
			return;
		}

		/* break rss result into a usable array called messages */
	    var messages = [];
	    var i;
	    for(i = 0;i<result.query.count;i++){
	        var newsPiece = {};
	        if(!result.query.results.item[i]) continue;
	        newsPiece.title=result.query.results.item[i].title;
	        newsPiece.link=result.query.results.item[i].link;
	        var description=result.query.results.item[i].description;
	        if(!description){
	            newsPiece.descSource=null;
	            newsPiece.description=null;
	        }
	        else{
	        var n = description.indexOf("]");
	        if(n==-1){
	            newsPiece.descSource=null;
	            newsPiece.description=description;
	        }
	        else{
	            newsPiece.descSource=description.substring(1,n);
	            newsPiece.description=description.substring(n+1);
	        }
	        }
	        if(!result.query.results.item[i].source){
	        	newsPiece.source="";
	        }else{
	            newsPiece.source=result.query.results.item[i].source.content;        	
	        }
	        newsPiece.pubDate=result.query.results.item[i].pubDate;
	        messages.push(newsPiece);
	    }

		for(i in messages){
			var li=this.createNewsMessageDOM(messages[i]);
			this.ol.appendChild(li);
		}
	}

	this.iscroll.refresh();
	this.iscroll.scrollTo(0,0, 500, STXThirdParty.IScroll5.utils.ease.quadratic);
};

STX.News.prototype.changeSymbol=function(symbol){
	if(STX.hasClassName(this.container, "closed")) return;
	this.symbol=symbol;
	var results=[];
	var updates=this.rss.length;
	var self=this;
	function cb(result){
		results.push(result);
		updates--;
		if(!updates){
			self.processFeedResults(results);
		}
	}
	for(var i=0;i<this.rss.length;i++){
		this.rss[i].getData(symbol, cb);
	}
};

STX.News.YahooRSSProcessor=function(){};
STX.News.YahooRSSProcessor.prototype.getData=function(symbol, cb){
	var unique=STX.uniqueID();
	var self=this;
	window[unique]=function(result){
		cb(result);
	};
    var url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feed%20where%20url%3D'http%3A%2F%2Ffinance.yahoo.com%2Fnews%2F%3Fformat%3Drss'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=" + unique + "&seq=" + Date.now();
    if(symbol)
        url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feed%20where%20url%3D'http%3A%2F%2Ffeeds.finance.yahoo.com%2Frss%2F2.0%2Fheadline%3Fs%3D" + symbol.replace(/\^/,"") + "%261'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=" + unique + "&seq=" + Date.now();

    var newScript=document.createElement("script");
    newScript.src=url;
    document.body.appendChild(newScript);
    // show loading
    newScript.onload=function(){
    	// remove loading
    	document.body.removeChild(newScript);
    	window[unique]=null;
    };
    newScript.onerror=function(){
    	// remove loading
    	window[unique](null);
    	document.body.removeChild(newScript);
    	window[unique]=null;
    };	
};
