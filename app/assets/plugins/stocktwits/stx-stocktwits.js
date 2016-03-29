stwt = window.stwt || {};

(function() {
  stwt.txt = {};
  stwt.txt.regexen = {};
  stwt.txt.regexen.cashtag = /(^|[\s\,\.\-\+\(\/\"]\$?|^\$)(\$([a-z1-9]{1}[a-z]{1,3}_F|(?!\d+[bmkts]{1}?(il(lion)?|ln|m|n)?\b|[\d]+\b)(?!\d+usd)[a-z0-9]{1,9}(?:[-\.]{1}[a-z]{1,2})?(?:[-\.]{1}[a-z]{1,2})?))\b(?!\$)/ig;

  stwt.txt.extractCashtags = function(text) {
    var matches = [];

    text.replace(stwt.txt.regexen.cashtag, function(match, prefix, cashtag) {
      matches.push(cashtag.slice(1));
    });

    return matches;
  };

  stwt.txt.autoLinkCashtags = function(text, options) {
    if (typeof(options) === "function") {
      return text.replace(stwt.txt.regexen.cashtag, function(match, before, cashtag) {
        return before + options.call(this, cashtag.toUpperCase(), cashtag.toUpperCase().slice(1));
      });
    }

    var html = [];
    var opts = options || {};

    opts.urlClass     = (opts.urlClass === undefined) ? "stwt-url cashtag" : opts.urlClass;
    opts.urlTarget    = opts.urlTarget || null;
    opts.urlNofollow  = opts.urlNofollow ? true : false;
    opts.url          = opts.url || "http://stocktwits.com/symbol/%s";

    if (opts.urlClass)    { html.push("class=\"" + opts.urlClass + "\""); }
    if (opts.urlTarget)   { html.push("target=\"" + opts.urlTarget + "\""); }
    if (opts.urlNofollow) { html.push("rel=\"nofollow\""); }

    html = (html.length > 0) ? (" " + html.join(" ") + " ") : " ";

    return text.replace(stwt.txt.regexen.cashtag, function(match, before, cashtag) {
      cashtag = cashtag.toUpperCase();
      return before + "<a" + html + "href=\"" + opts.url.replace('%s', cashtag.slice(1)) + "\">" + cashtag + "</a>";
    });
  };
})();

var clickSnapshotX=0;
var clickSnapshotY=0;
function clickDetect(){
	clickSnapshotX=STXChart.crosshairX;
	clickSnapshotY=STXChart.crosshairY;
}

var stConversions={
	"^GSPC":"SPX",
	"^DJI":"DJIA",
	"$INDU":"DJIA",
	"$DXY":"USDX",
	"^IXIC":"COMPQ",
	"$COMP":"COMPQ"
};

function symbologyST(symbol){
  if(!symbol) return symbol;
	var newS=stConversions[symbol];
	if(newS) return newS;
	if(symbol.charAt(0)=='^' || symbol.charAt(0)=='$'){
		return symbol.substring(1);
	}
	return symbol;
}

var tweetBuffer=[];

var oauthTokens=JSON.parse(STX.localStorage.getItem("oauthTokens"));
if(!oauthTokens) oauthTokens={};

window.addEventListener("message", receiveMessage, false);


function ajaxTransact(url, cb, payload, silent, synchronous){
	if(!synchronous) synchronous=false;
	if(!payload) payload="";
	var server=STX.getAjaxServer();
	if(!server) return null;
	var epoch=new Date();
	if(url.indexOf('?')==-1) url+="?" + epoch.getTime();
	else url+="&" + epoch.getTime();

	if(!STX.isIE9){
		try{
		server.open(payload?"POST":"GET", url, !synchronous);
		}catch(e){
			console.log(e + ":" + url);
			return;
		}
		if(payload) server.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	}else{
		url=url.replace("https","http");
		server.open(payload?"POST":"GET", url, !synchronous);
		server.onload=function(){
			cb(server.responseText, 200);
		};
		server.onerror=function(){
			cb(null, 0);
		};
		server.onprogress=function(){};
	}
	server.onreadystatechange=function(){
		if(server.readyState==4){
			if(server.status==404){
				cb(null, server.status);
			}else if(server.status!=200){
				if(!silent){
					if(server.status===0){
						STX.alert("There has been an error communicating with the server. Please check your Internet connection. If you are in a corporate environment the problem may lie with the http proxy. If contacting support@chartiq.com, please note the following message: Ajax 0");
					}else{
						STX.alert("There has been an error communicating with the server. Please check your Internet connection. If contacting support@chartiq.com please note the following error: ajax " + server.statusText + "(" + server.status + ")");
					}
				}
				cb(server.responseText, server.status);
			}else{
				cb(server.responseText, 200);
			}
		}
	};
	server.send(payload);
}

function receiveMessage(event){
	if (event.origin == "https://www.chartiq.com"){
		oauthTokens.stocktwits=event.data.substring(event.data.indexOf('=')+1);
		STX.localStorageSetItem("oauthTokens", JSON.stringify(oauthTokens));
		closeOauthContainer();
		//document.querySelector("#stwits .controls .post").style.display="block";
		STX.unappendClassName(document.querySelector("#stwits .container"), "stwits-unauthenticated");
		stPopulateProfile();
		if(document.querySelector("#stwits .container").className.indexOf("stwits-stream")!=-1){
			setStream("home");
		}
	}else if(event.data.handler){
		var fc;
		if(event.data.handler=="jsonpWindow"){
			if(event.data.func!="cbfunc" && event.data.func!="cbrtfunc" && event.data.func!="cblookup" && event.data.func!="cblkupalt") return;	// Security
			fc=window[event.data.func];
			fc.apply(this, [event.data.data]);
		}else if(event.data.handler=="splashHandler"){
			fc=window[event.data.func];
			fc.apply(this, [event.data.data]);
		}else if(event.data.handler=="ephemeral"){
			fc=window[event.data.id];
			fc.apply(this, event.data.data);
			delete window[event.data.id];
		}
	}
}

if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
  XMLHttpRequest.prototype.sendAsBinary = function(string) {
    var bytes = Array.prototype.map.call(string, function(c) {
      return c.charCodeAt(0) & 0xff;
    });
    this.send(new Uint8Array(bytes).buffer);
  };
}

var stockTwitsURL="https://app.chartiq.com/stocktwits";
/*if(isIOS){
	stockTwitsURL="https://api.stocktwits.com";
}*/

function stPost(id){
	var ta=id.parentNode.parentNode.querySelector("textarea");
	var sending=id.parentNode.parentNode.querySelector(".sending");
	STX.appendClassName(id.parentNode.parentNode.parentNode, "sending");
	sending.innerHTML="Sending Message...";
	function closeMe(id){
		return function(){
			STX.unappendClassName(id.parentNode.parentNode.parentNode, "sending");
			STX.appendClassName(id.parentNode.parentNode.parentNode, "success");
			sending=id.parentNode.parentNode.querySelector(".sending");
			sending.innerHTML="Message Sent!";
			if(id.parentNode.parentNode.parentNode.parentNode.id=="stMessageTemplate"){
				STX.unappendClassName(id.parentNode.parentNode.parentNode, "show");
				var c=function(id){
					return function(){
						STX.unappendClassName(id.parentNode.parentNode.parentNode, "success");
						stCloseOpenReplies();
						setTimeout(function(){
							refreshSTScroll();
						}, 750);
					};
				};
				setTimeout(c(id), 2500);
			}else{
				selectSentiment($$("post-new").querySelector(".bull"), "");
				if(currentSTStream.type=="symbol"){
					ta.value="$" + currentSTStream.data.toUpperCase()+ " ";
				}else{
					ta.value="";
				}
				stChangeText(ta);
				id.parentNode.chartAttached=false;
				STX.unappendClassName(id.parentNode.querySelector(".attach"), "true");
				setTimeout(function(){
					STX.unappendClassName(id.parentNode.parentNode.parentNode, "success");
				}, 3000);
			}
		};
	}
	if(1){
		if(id.parentNode.chartAttached){
			createSharedImage(function(imageData){
				sendStockTweet(ta.value, closeMe(id), id, imageData);
			});
		}else{
			sendStockTweet(ta.value, closeMe(id), id);			
		}
	}else{
		var url=stockTwitsURL + "/api/2/messages/create.json?access_token=" + oauthTokens.stocktwits;
		var payload="body=" + ta.value;
		if(id.parentNode.sentiment=="bull"){
			payload+="&sentiment=bullish";
		}else if(id.parentNode.sentiment=="bear"){
			payload+="&sentiment=bearish";
		}
		ajaxTransact(url, function(response, status){
			response=JSON.parse(response);
			if(response && response.response.status!=200){
				STX.alert(response.errors[0].message);
			}else{
				closeMe(id)();
			}
		}, payload, false);
	}
}

function createSharedImage(cb){
	STXSocial.createImage(stxx, null, null, null, cb);
}

function stAttachChart(id){
	if(!stxx.chart.symbol) return false;
	var ta=id.parentNode.parentNode.querySelector("textarea");
	if(id.parentNode.parentNode.chartAttached){
		id.parentNode.parentNode.chartAttached=false;
		STX.unappendClassName(id, "true");
	}else{
		id.parentNode.parentNode.chartAttached=true;
		STX.appendClassName(id, "true");
		if(ta.value.indexOf("$" + stxx.chart.symbol)==-1){
			if(ta.value==="") ta.value="$" + stxx.chart.symbol;
			else ta.value=ta.value + " $" + stxx.chart.symbol;
		}
	}
	stChangeText(ta);
	STX.focus(ta);
	return false;
}

function sendStockTweet(msg, cb, id, shareImageResized){
	var url=stockTwitsURL + "/api/2/messages/create.json";
	var type="image/png";
	if(id.parentNode.chartAttached){
		data = shareImageResized.replace('data:' + type + ';base64,', '');
	}
	var server = new XMLHttpRequest();
	server.open('POST', url, true);
	var boundary = 'ohaiimaboundary';
	server.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
	server.onreadystatechange=function(){
		if(server.readyState==4){
			if(server.status!=200){
				try{
					var stResponse=JSON.parse(server.response);
					if(stResponse.errors){
						for(var i in stResponse.errors){
							STX.alert("Error posting to StockTwits. Please try again. Status: " + server.status + " " + stResponse.errors[i].message);
						}
					}else{
						STX.alert("Error posting to StockTwits. No valid response received from server. Please try posting again.");
					}
				}catch(e){
					STX.alert("Error posting to StockTwits. Unexpected response received. Please try resubmitting your post. If the problem persists, check for any non ordinary characters in your post.");						
				}
			}else{
				if(cb){
					cb();
				}else{
					dismissDialog();
				}
			}
		}
	};
	var dataArray=[
    '--' + boundary,
    'Content-Disposition: form-data; name="access_token"',
    '',
    oauthTokens.stocktwits,
    '--' + boundary,
    'Content-Disposition: form-data; name="body"',
    '',
    msg,
    '--' + boundary
    ];
	if(id.parentNode.sentiment=="bull"){
		dataArray=dataArray.concat([
	    'Content-Disposition: form-data; name="sentiment"',
	    '',
	    "bullish",
	    '--' + boundary
	    ]);
	}else if(id.parentNode.sentiment=="bear"){
		dataArray=dataArray.concat([
	    'Content-Disposition: form-data; name="sentiment"',
	    '',
	    "bearish",
	    '--' + boundary
	    ]);
	}
	if(id.parentNode.chartAttached){
		dataArray=dataArray.concat([
	    'Content-Disposition: form-data; name="chart"; filename="chart.png"',
	    'Content-Type: ' + type,
	    '',
	    atob(data),
	    '--' + boundary
		]);
	}
	dataArray[dataArray.length-1]+="--";
	server.sendAsBinary(dataArray.join('\r\n'));
}

function stConnect(){
	var token=oauthTokens.stocktwits;
	if(token){
	}else{
		var oauthIframeHere=$$("oauthIframeHere");
		STX.clearNode(oauthIframeHere);
		var iframe=document.createElement("iframe");
		iframe.style.width="100%";
		iframe.style.height="100%";
		iframe.src="https://api.stocktwits.com/api/2/oauth/signin?client_id=3614b42398f3ba04&redirect_uri=https%3A%2F%2Fwww.chartiq.com%2Fstocktwitauth.html&response_type=token&scope=read%2Cwatch_lists%2Cpublish_messages%2Cpublish_watch_lists%2Cfollow_users%2Cfollow_stocks";
		oauthIframeHere.appendChild(iframe);
		STX.DialogManager.displayDialog("oauthContainer");
	}
	return false;
}

function stLoadProfile(){
	if(!stProfile) return;
	var w=window.open("https://stocktwits.com/" + stProfile.username, "_blank");
}

function stLoadSettings(){
	var w=window.open("https://stocktwits.com/settings/", "_blank");
}

function stLogout(){
	if(stStreamPlaying && currentSTStream.type!="symbol" && currentSTStream.type!="user"){
		pauseSTStream();
	}
	delete(oauthTokens.stocktwits);
	STX.localStorageSetItem("oauthTokens", JSON.stringify(oauthTokens));
	//document.querySelector("#stwits .controls .post").style.display="none";
	STX.appendClassName(document.querySelector("#stwits .container"), "stwits-unauthenticated");
	stProfile=null;
}

function stChangeText(id){
	var msg=id.value;
	var n=msg.match(regexen.url);
	var chars=msg.length;
	if(n){
		for(var i=0;i<n.length;n++){
			chars-=n[i].length;
			chars+=20;
		}
	}
	var stCC=id.parentNode.querySelectorAll("#stCharacterCount")[0];
	stCC.innerHTML=(140 - (id.parentNode.chartAttached?20:0) - chars);
	if(id.parentNode.chartAttached && chars>=120){
		stCC.className="charLimit";
	}else if(chars>=140){
		stCC.className="charLimit";
	}else{
		stCC.className="";
	}
}

function enableSTTab(which){
	closeSTLookup();
	if(stTimeout!==null) clearTimeout(stTimeout);
	document.querySelector("#stwits .container").className="container stwits-" + which;
	if(!oauthTokens.stocktwits) STX.appendClassName(document.querySelector("#stwits .container"), "stwits-unauthenticated");
	if(oauthTokens.stocktwits){
		if(which=="stream"){
			if(!prevST.stream){
				setStream("home");
			}else{
				stStream(prevST.stream);
			}
		}
	}else{
		if(which=="stream"){
			currentSTStream.reset(null, null);
			STX.clearNode($$("updates"));
			STX.appendClassName(document.querySelector("#stwits .container"), "empty");
			//setStream("suggested");
		}
		
	}
	if(which=="current"){
		if(stxx.chart.symbol){
			stStream("symbol", symbologyST(stxx.chart.symbol));
		}else{
			currentSTStream.reset(null, null);
			STX.clearNode($$("updates"));
			STX.appendClassName(document.querySelector("#stwits .container"), "empty");
		}
	}else if(which=="search"){
		if(prevST.searchType){
			stStream(prevST.searchType, prevST.searchData);
		}else{
			currentSTStream.reset(null, null);
			STX.clearNode($$("updates"));
			STX.appendClassName(document.querySelector("#stwits .container"), "empty");
			document.querySelector("#stwits .user-info").style.display="none";
			document.querySelector("#stwits .symbol-info").style.display="none";
		}
	}
    if(which=="news"){
		currentSTStream.reset(null, null);
		STX.clearNode($$("updates"));
		STX.appendClassName(document.querySelector("#stwits .container"), "empty");
		STX.appendClassName(document.querySelector("#stwits .container"), "news");
        //newsStream();
    }else{
		STX.unappendClassName(document.querySelector("#stwits .container"), "news");   	
    }
}

function slideSTStream(showSTStream){
	if(document.querySelector("#stwits .container").className.indexOf("stwits-current")!=-1){
		currentSTStream.type=null;
	}
	if(showSTStream){
		showSTStream=false;
		pauseSTStream();
		STX.clearNode($$("updates"));
	}else{
		showSTStream=true;
		if(!oauthTokens.stocktwits){
			STX.appendClassName(document.querySelector("#stwits .container"), "stwits-unauthenticated");
		}else{
			if(!stProfile){
				stPopulateProfile();
			}
		}
		if(!stGraphLastUpdated || (new Date().getTime() - stGraphLastUpdated > 24*60*60*60*1000)){
			updateSTGraph(true);
			setTimeout(playSTStream, 1000);
		}else{
			playSTStream();
		}
	}
	/*var a=stxx.chart.maxTicks;
	var prevScroll=stxx.chart.scroll;
	resizeScreen();
	if(!stxx.displayInitialized) return;	// No chart displayed yet
	var b=stxx.chart.maxTicks;
	stxx.chart.scroll=prevScroll+(b-a);
	stxx.draw();*/
}

function updateSTMinutesAgo(){
	var now=new Date().getTime();
	var u=$$("updates");
	for(var i in u.childNodes){
		var li=u.childNodes[i];
		if(!li.message) continue;
		var then=new Date(li.message.created_at).getTime();
		var diff=Math.floor((now-then)/1000);
		var howLongAgo=diff + "S";
		if(diff>60){
			diff=Math.floor(diff/60);
			howLongAgo=diff + "M";
			if(diff>60){
				diff=Math.floor(diff/60);
				howLongAgo=diff + "H";
				if(diff>24){
					diff=Math.floor(diff/24);
					howLongAgo=diff + "D";
				}
			}
		}
		li.querySelector(".message-time").innerHTML=howLongAgo;
	}
}

function stUpdateStreamFollow(username){
	var following=(stGraph.following.indexOf(username)!=-1);
	var divs=document.querySelectorAll("#updates>li");
	for(var i=0;i<divs.length;i++){
		if(!divs[i].message) continue;
		if(divs[i].message.user.username==username){
			if(following){
				divs[i].querySelector(".follow").style.display="none";
				divs[i].querySelector(".unfollow").style.display="block";
			}else{
				divs[i].querySelector(".follow").style.display="block";
				divs[i].querySelector(".unfollow").style.display="none";
			}
		}
	}
}

function stLikeUnlike(id, like){
	if(!oauthTokens.stocktwits) return;
	var url=stockTwitsURL + "/api/2/messages/" + (like?"like":"unlike") + ".json?access_token=" + oauthTokens.stocktwits;
	ajaxTransact(url, function(response, status){
		if(status==200){
			response=JSON.parse(response);
			if(response && response.response.status!=200){
				STX.alert(response.errors[0].message);
			}
		}
	}, "id=" + id, false);
}

function stFollowUnfollowBlock(id, username, action){
	if(!oauthTokens.stocktwits) return;
	var url=null;
	if(action=="block"){
		url=stockTwitsURL + "/api/2/blocks/create/";
	}
	if(action=="unblock") url=stockTwitsURL + "/api/2/blocks/destroy/";
	if(action=="follow"){
		url=stockTwitsURL + "/api/2/friendships/create/";
	}
	if(action=="unfollow") url=stockTwitsURL + "/api/2/friendships/destroy/";
	if(!url) return;
	url+=id+".json";
	url+="?access_token=" + oauthTokens.stocktwits;
	ajaxTransact(url, function(response, status){
	}, "bowwow", true);
	var i=stGraph.following.indexOf(username);
	if(i==-1 && action=="follow"){
		stGraph.following.push(username);
		stUpdateStreamFollow(username);
	}
	if(i!=-1 && action=="unfollow"){
		stGraph.following.splice(i, 1);
		stUpdateStreamFollow(username);
	}
}

function stFollowUnfollow(){
	if(!oauthTokens.stocktwits) return false;
	var url;
	var i;
	if(currentSTStream.type=="symbol"){
		url=stockTwitsURL + "/api/2/stockships/";
		var symbol=currentSTStream.data.toUpperCase();
		i=stGraph.symbols.indexOf(symbol);
		if(i==-1){
			stGraph.symbols.push(symbol);
			$$("followStock").innerHTML="Unfollow";
			url+="create/";
		}else{
			stGraph.symbols.splice(i, 1);
			$$("followStock").innerHTML="Follow";
			url+="destroy/";
		}
	}else if(currentSTStream.type=="user"){
		url=stockTwitsURL + "/api/2/friendships/";
		var user=currentSTStream.data.toLowerCase();
		i=stGraph.following.indexOf(user);
		if(i==-1){
			stGraph.following.push(user);
			$$("followUser").innerHTML="Unfollow";
			url+="create/";
		}else{
			stGraph.following.splice(i, 1);
			$$("followUser").innerHTML="Follow";
			url+="destroy/";
		}
		stUpdateStreamFollow(user);
	}
	url+=currentSTStream.id+".json";
	url+="?access_token=" + oauthTokens.stocktwits;
	ajaxTransact(url, function(response, status){
	}, "bowwow", true);
	return false;
}

function updateSTGraph(){
	if(!oauthTokens.stocktwits) return;
	var cb=function(i, url){
		return function(response,status){
			if(status!=200){
				return;
			}
			response=JSON.parse(response);
			var j;
			if(i=="symbols"){
				for(j in response.symbols){
					stGraph[i].push(response.symbols[j].symbol);
				}
			}else{
				for(j in response.users){
					stGraph[i].push(response.users[j].username);
				}
			}
		};
	};
	for(var i in stGraph){
		stGraph[i]=[];
		var url=stockTwitsURL + "/api/2/graph/" + i + ".json?access_token=" + oauthTokens.stocktwits;
		ajaxTransact(url, cb(i, url), null, true);
	}
	stGraphLastUpdated=new Date().getTime();
}

function stDetermineStream(text){
	var url=stockTwitsURL + "/api/2/search.json?q=" + text;
	STX.appendClassName(document.querySelector("#stwits .container"), "loading");
	//if(oauthTokens["stocktwits"]) url+="&access_token=" + oauthTokens["stocktwits"];
	ajaxTransact(url, function(response,status){
		STX.unappendClassName(document.querySelector("#stwits .container"), "loading");
		if(status!=200){
			setSearch("symbol", text);
			return;
		}
		response=JSON.parse(response);
		// Prioritize symbol lookups
		var i, result;
		for(i in response.results){
			result=response.results[i];
			if(result.type=="symbol"){
				if(result.symbol==text.toUpperCase()){
					setSearch("symbol", text);
					return;
				}
			}
		}
		for(i in response.results){
			result=response.results[i];
			if(result.type=="user"){
				if(result.username==text.toLowerCase()){
					setSearch("user", text);
					return;
				}
			}
		}
		stwitsLookup(text);
	}, null, true);
}

var cancelStStream=false;
var stStreamPlaying=false;
var stTimeout=null;
var stPollMS=60000;

function pauseSTStream(){
	stStreamPlaying=false;
	if(stTimeout!==null) clearTimeout(stTimeout);
	stTimeout=null;
	$$("play").style.display="block";
	$$("pause").style.display="none";
	cancelStStream=true;
	return false;
}

function playSTStream(){
	stStreamPlaying=true;
	$$("play").style.display="none";
	$$("pause").style.display="block";
	cancelStStream=false;
	STX.appendClassName(document.querySelector("#stwits .container"), "loading");
	if(currentSTStream.type=="news"){
		newsStreamPoll();
	}else{
		stStreamPoll();
	}
	return false;
}

function stStreamPoll(){
	if(!currentSTStream.type){
		enableSTTab("current");
		return;
	}
	stStream(currentSTStream.type, currentSTStream.data, "newer");
}

var stGraph={
		"following":[],
		"followers":[],
		"symbols":[],
		"blocking":[]
};

var stGraphLastUpdated=null;
var stProfile=null;

var prevST={
		stream: "home",
		searchType: null,
		searchData: null
};

var currentSTStream={
		type: null,
		data: null,
		id: null,
		since: null,
		max: null,
		more: true,
		reset: function(newType, newData){
			this.id=null;
			this.since=null;
			this.max=null;
			this.more=null;
			this.type=newType;
			this.data=newData;
		}
};

function stPopulateProfile(){
	if(!oauthTokens.stocktwits) return;
	var url=stockTwitsURL + "/api/2/account/verify.json?access_token=" + oauthTokens.stocktwits;
	ajaxTransact(url, function(response,status){
			if(status!=200){
				return;
			}
			response=JSON.parse(response);
			stProfile=response.user;
			document.querySelector("#control-user #user").innerHTML=stProfile.username;
		}, null, true);
}

var stLoadingOlder=null;
function stPanelEnd(){
	if(stLoadingOlder!==null) return;
	if(currentSTStream.type!="news"){
		if(this.y<=(this.maxScrollY + 5) && currentSTStream.more){
			stLoadingOlder=$$("stLoadMoreTemplate").cloneNode(true);
			stLoadingOlder.style.display="block";
			$$("updates").appendChild(stLoadingOlder);
			refreshSTScroll();
			stStreamScroll.scrollTo(0,stStreamScroll.maxScrollY,200);
			stStream(currentSTStream.type, currentSTStream.data, "older");
		}
	}
	if(this.y<0){
		STX.appendClassName(document.querySelector(".streamScrolled"), "true");
	}else{
		STX.unappendClassName(document.querySelector(".streamScrolled"), "true");
	}
}

function stScrollMove(){
	if(this.y<0){
		STX.appendClassName(document.querySelector(".streamScrolled"), "true");
	}else{
		STX.unappendClassName(document.querySelector(".streamScrolled"), "true");
	}
	if(this.y<-50){
		if(stNewCount===null){
			stNewCount=0;
		}
	}else{
		STX.unappendClassName(document.querySelector(".new-posts"), "true");
		stNewCount=null;
	}
	if(this.y>5){
		var updates=$$("updates");
		if(updates && updates.firstChild.id!="stLoadMoreTemplate"){
			if(stTimeout!==null) clearTimeout(stTimeout);
			var stLoadingNewer=$$("stLoadMoreTemplate").cloneNode(true);
			stLoadingNewer.style.display="block";
			$$("updates").insertBefore(stLoadingNewer, $$("updates").firstChild);
			if(currentSTStream.type=="news"){
				newsStreamPoll();
			}else{
				stStreamPoll();
			}
		}
	}
}

function setSearch(type, data){
	prevST.searchType=type;
	prevST.searchData=data;
	stStream(type, data);
	enableSTTab("search");
}

var friendlyStreamNames={
		"home": {
			title: "Following:People/Stocks",
			pulldown: "People/Stocks",
			authentication: true
		},
		"friends": {
			title: "Following:People",
			pulldown: "People",
			authentication: true
		},
		"suggested": {
			title: "Suggested",
			pulldown: "Suggested",
			authentication: false
		},
		"trending": {
			title: "Trending",
			pulldown: "Trending",
			authentication: false
		},
		"charts": {
			title: "Charts",
			pulldown: "Charts",
			authentication: false
		},
		"commentary": {
			title: "Commentary",
			pulldown: "Commentary",
			authentication: false
		},
		"equities": {
			title: "Equities",
			pulldown: "Equities",
			authentication: false
		},
		"forex": {
			title: "Forex",
			pulldown: "Forex",
			authentication: false
		},
		"futures": {
			title: "Futures",
			pulldown: "Futures",
			authentication: false
		},
		"private_companies": {
			title: "Private Companies",
			pulldown: "Private",
			authentication: false
		},
		"all": {
			title: "All",
			pulldown: "All",
			authentication: false
		}
};

var stNewCount=null;

function setStream(type){
	if(friendlyStreamNames[type].authentication && !oauthTokens.stocktwits) return;
	if(window.toggleMenu) toggleMenu();
	prevST.stream=type;
	stStream(type, null);
	//enableSTTab("stream");
	//document.querySelector("h4#viewing-stream").innerHTML=friendlyStreamNames[type].title;
	document.querySelector(".select-stream").innerHTML=friendlyStreamNames[type].pulldown;
}



// direction can be "older", "newer" or ""
function stStream(type, data, direction){
	if(!oauthTokens.stocktwits && type=="home") return;
	if(!type) return;	// Possible race condition if panel is closed while iscroll is still spinning
	var url=stockTwitsURL + "/api/2/streams/" + type;
	if(data) url+="/" + data;
	url+=".json?";
	if(oauthTokens.stocktwits) url+="access_token=" + oauthTokens.stocktwits;
	if(direction=="older"){
		if(url[url.length-1]!='?') url+="&";
		url+="max=" + currentSTStream.max;
	}else if(direction=="newer" && currentSTStream.since){
		//if(url[url.length-1]!='?') url+="&";
		//url+="since=" + currentSTStream.since;
	}else{
		direction="";
		currentSTStream.max=null;
		currentSTStream.since=null;
	}

	if(direction===""){
		STX.appendClassName(document.querySelector("#stwits .container"), "loading");
	}

	ajaxTransact(url, function(response, status){
		STX.unappendClassName(document.querySelector("#stwits .container"), "loading");
		if(status!=200 || !response){
			if(stLoadingOlder){
				$$("updates").removeChild(stLoadingOlder);
				stLoadingOlder=null;
				refreshSTScroll();
			}
			if(!response){
				return;
			}
			response=JSON.parse(response);
			try{
                 if(response.errors[0].message=="Invalid access token"){
                    stLogout();
                    return;
                 }
				STX.alert("A StockTwits API error has occurred. " + response.errors[0].message + ". Please try logging out and logging back in.");
			}catch(e){
				STX.alert("Error getting StockTwits stream. Please check your Internet connection and try again. Status=" + status);
			}
			return;
		}
		STX.unappendClassName(document.querySelector("#stwits .container"), "empty");
		if(type=="symbol"){
			document.querySelector("#stStreamWrapper").className="search symbols";
			document.querySelector("#updates").className="search-symbols";
		}else if(type=="user"){
			//document.querySelector("#stwits .container").className="container stwits-search";
			document.querySelector("#stStreamWrapper").className="search users";
			document.querySelector("#updates").className="search-users";
		}else{
			//document.querySelector("#stwits .container").className="container stwits-stream";
			document.querySelector("#stStreamWrapper").className="stream";
			document.querySelector("#updates").className="stream-list";
		}
		if(!oauthTokens.stocktwits){
			STX.appendClassName(document.querySelector("#stwits .container"), "stwits-unauthenticated");
		}
	
		response=JSON.parse(response);
		var prevScroll={
				y: stStreamScroll.y,
				maxScrollY: stStreamScroll.maxScrollY
		};
		var cursor=response.cursor;
		var messages=response.messages;
		if(direction===""){
			currentSTStream.reset(type, data);
		}
		if(type=="symbol"){
			currentSTStream.id=response.symbol.id;
			$$("viewing").innerHTML=data.toUpperCase();
			$$("sym-name").innerHTML=response.symbol.title;
			document.querySelector("#stwits .symbol-info").style.display="block";
			document.querySelector("#stwits .user-info").style.display="none";
			if(stGraph.symbols.indexOf(data.toUpperCase())!=-1){
				$$("followStock").innerHTML="Unfollow";
			}else{
				$$("followStock").innerHTML="Follow";
			}
			if($$("post-new").className=="show"){
                 if(regexen.initialTA.test($$("post-new-field").value)){
					$$("post-new-field").value="$" + currentSTStream.data.toUpperCase()+ " ";
                 }
			}
		}else if(type=="user"){
			currentSTStream.id=response.user.id;
			$$("viewing").innerHTML=data;
			$$("user-name").innerHTML=data;
			$$("user-full-name").innerHTML=response.user.name;
			document.querySelector("#stwits .user-info").style.display="block";
			document.querySelector("#stwits .symbol-info").style.display="none";
			document.querySelector("#stwits .user-info img").src=response.user.avatar_url;
			if(stGraph.following.indexOf(data.toLowerCase())!=-1){
				$$("followUser").innerHTML="Unfollow";
			}else{
				$$("followUser").innerHTML="Follow";
			}
			if(stProfile && data.toLowerCase()==stProfile.username){
				$$("followUser").style.display="none";
			}else{
				$$("followUser").style.display="block";
			}
		}else{
			document.querySelector(".select-stream").innerHTML=friendlyStreamNames[type].pulldown;
			document.querySelector("#stwits .user-info").style.display="none";
			document.querySelector("#stwits .symbol-info").style.display="none";
		}
		if(direction===""){
			stNewCount=null;
			STX.unappendClassName(document.querySelector(".new-posts"), "true");
			STX.unappendClassName(document.querySelector(".streamScrolled"), "true");
		}
		var i;
		if(direction=="older"){
			for(i=0;i<messages.length;i++){
				var li=createSTMessageDOM(messages[i]);
				$$("updates").appendChild(li);
			}
			currentSTStream.max=cursor.max;
			currentSTStream.more=cursor.more;
		}else if(direction=="newer"){
			var foundMatch=false;
			for(i=0;i<messages.length;i++){
				var m=messages[i];
				var c=$$("updates").childNodes;
				if(c.length && c[0].message){
					if(m.id<=c[0].message.id){
						foundMatch=true;
						messages=messages.slice(0, i);
						break;
					}
				}
			}
			if(!foundMatch){
				currentSTStream.max=cursor.max;
				currentSTStream.more=cursor.more;
				STX.clearNode($$("updates"));
			}
			if(!stStreamScroll.enabled){
				tweetBuffer=tweetBuffer.concat(messages);
			}else{
				for(i=messages.length-1;i>=0;i--){
					var li2=createSTMessageDOM(messages[i]);
					$$("updates").insertBefore(li2, $$("updates").firstChild);
				}
			}
			currentSTStream.since=cursor.since;
		}else{
			$$("searchStwits").value="";
			currentSTStream.since=cursor.since;
			currentSTStream.max=cursor.max;
			currentSTStream.more=cursor.more;
			STX.clearNode($$("updates"));
			for(i in messages){
				var li3=createSTMessageDOM(messages[i]);
				$$("updates").appendChild(li3);
			}
		}
		if(direction!="newer" && cursor.more){
			// Print "older posts" button
		}
		updateSTMinutesAgo();
		if(stLoadingOlder){
			try{
				$$("updates").removeChild(stLoadingOlder);
			}catch(e){}
			stLoadingOlder=null;
			refreshSTScroll();
		}
		if(messages.length>0){
			if(direction=="newer"){
				if(!stStreamScroll.enabled){
					var howMany=stNewCount;
					if(howMany===null) howMany=0;
					STX.appendClassName(document.querySelector(".streamScrolled"), "true");
					STX.appendClassName(document.querySelector(".new-posts"), "true");
					document.querySelector(".new-posts .total").innerHTML=howMany + tweetBuffer.length;
				}else{
					refreshSTScroll();
					var increasedLength=-stStreamScroll.maxScrollY+prevScroll.maxScrollY;
					var newY=prevScroll.y-increasedLength;
					stStreamScroll.scrollTo(0,newY,0);
					if(prevScroll.y>=-50){
						var mx=50;
						if($$("updates").childNodes.length>mx){
							currentSTStream.max=$$("updates").childNodes[mx].message.id;
							while($$("updates").childNodes.length>mx){
								$$("updates").removeChild($$("updates").lastChild);
							}
							refreshSTScroll();
						}
						stStreamScroll.scrollTo(0,0,400);
					}else{
						if(stNewCount!==null){
							stNewCount+=messages.length;
							STX.appendClassName(document.querySelector(".streamScrolled"), "true");
							STX.appendClassName(document.querySelector(".new-posts"), "true");
							document.querySelector(".new-posts .total").innerHTML=stNewCount;
						}
					}
				}
			}else if(direction=="older"){
				refreshSTScroll();
				//stStreamScroll.scrollTo(0,stStreamScroll.y-50,200);
			}else{
				refreshSTScroll();
				stStreamScroll.scrollTo(0,0,1);
			}
			stStreamPlaying=true;
			$$("play").style.display="none";
			$$("pause").style.display="block";
		}
		if(!cancelStStream){
			if(stTimeout!==null) clearTimeout(stTimeout);
			stTimeout=setTimeout(stStreamPoll,stPollMS);
		}
	}, null, true);
}

function stScrollToTop(){
	stCloseOpenReplies();
	if(!stStreamScroll.enabled) stStreamScroll.enable();
	emptyTweetBuffer();
	stStreamScroll.scrollTo(0,0,750);
}

function refreshSTScroll(){
	var newHeight=STX.pageHeight()-35-STX.getPos($$("stStreamWrapper")).y;
	$$("stStreamWrapper").style.height=newHeight + "px";
	stStreamScroll.enable();
	emptyTweetBuffer();
	stStreamScroll.refresh();
}

var stSpecialCashTags={
		"MACRO":"",
		"STUDY":"",
		"CRUDE":"",
		"SPREAD":""
};

function flashActive(node){
	STX.appendClassName(node, "active");
	setTimeout((function(node){ return function(){STX.unappendClassName(node, "active");};})(node), 1000);
}

function clickSTSymbol(node, symbol){
	if(!STX.touchDevice && Math.abs(STXChart.crosshairY-clickSnapshotY)>10) return false;
	if(STX.touchDevice && !node.parentNode.parentNode.parentNode.enableComponents) return false;
	if(STX.isAndroid) flashActive(node);
	if(stxx.chart.symbol==symbol || stSpecialCashTags[symbol]){
		setSearch("symbol", symbol);
	}else{
		//$$("headsUpSymbol").value=symbol; //TODO, convert from ST symbology
		//$$("dvClearSymbol").style.display="inline-block";
    	stxx.newChart(symbol, null, null, finishedLoadingNewChart(stxx.chart.symbol, symbol));
	}
	return false;
}

function clickSTUser(node, user){
	if(!STX.touchDevice && Math.abs(STXChart.crosshairY-clickSnapshotY)>10) return false;
	if(STX.touchDevice && !node.parentNode.parentNode.parentNode.enableComponents) return false;
	setSearch("user",user);
	return false;
}

function clickSTLink(node, url){
	if(!STX.touchDevice && Math.abs(STXChart.crosshairY-clickSnapshotY)>10) return false;
	if(STX.touchDevice && !node.parentNode.parentNode.parentNode.enableComponents) return false;
	var w=window.open(url, "_blank");
	return false;
}

var regexen = {
		usertag: /[@＠]([a-zA-Z0-9_]{1,20})/g,
		initialTA: /^\$[a-zA-Z]{1,10}\W$/,
		url: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g
};

function stProcessMessage(body){
	var formatted=body.replace(/&#x2F;/g,"/");
	formatted=stwt.txt.autoLinkCashtags(formatted, function(cashtag, symbol) {
		if(symbol==stxx.chart.symbol) return cashtag;
		return "<a class='ticker' href='#' onMouseDown='clickDetect()' onclick='return clickSTSymbol(this, \"" + symbol + "\")'>" + cashtag + "</a>";
	});
	formatted=formatted.replace(regexen.usertag, function(match){
		return "<a class='user' href='#' onMouseDown='clickDetect()' onclick='return clickSTUser(this, \"" + match.slice(1) + "\")'>" + match + "</a>";
	});
	formatted=formatted.replace(regexen.url, function(match){
		match=match.replace(/\&quot\;/g,"");
		return "<a class='URL' href='#' onMouseDown='clickDetect()' onclick='return clickSTLink(this, \"" + match + "\")'>" + match + "</a>";
	});
	return formatted;
}

function stFormatDate(dt){
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
}


function selectSentiment(node, sentiment){
	STX.unappendClassName(node.parentNode.querySelector(".bear"), "true");
	STX.unappendClassName(node.parentNode.querySelector(".bull"), "true");
	if(node.parentNode.parentNode.sentiment==sentiment){
		node.parentNode.parentNode.sentiment="";
	}else{
		node.parentNode.parentNode.sentiment=sentiment;
		if(sentiment) STX.appendClassName(node.parentNode.querySelector("." + sentiment), "true");
	}
}

function stCloseOpenReplies(){
	var allOfThem=document.querySelectorAll("#updates li.message");
	for(var i=0;i<allOfThem.length;i++){	// Only one reply open at a time, close any open ones
		if(allOfThem[i].classNameOld){
			allOfThem[i].className=allOfThem[i].classNameOld;
			delete allOfThem[i].classNameOld;
		}
	}
	return allOfThem.length>0;
}

function maintainScrollPosition(cb){
		var prevScroll={
				y: stStreamScroll.y,
				maxScrollY: stStreamScroll.maxScrollY
		};
		cb();
		var increasedLength=-stStreamScroll.maxScrollY+prevScroll.maxScrollY;
		var newY=prevScroll.y-increasedLength;
		stStreamScroll.scrollTo(0,newY,0);
}

function emptyTweetBuffer(){
	if(!tweetBuffer.length) return;
	stStreamScroll.refresh();
	var prevScroll={
			y: stStreamScroll.y,
			maxScrollY: stStreamScroll.maxScrollY
	};
	if(stNewCount!==null){
		stNewCount+=tweetBuffer.length;
	}else{
		STX.unappendClassName(document.querySelector(".new-posts"), "true");
		STX.unappendClassName(document.querySelector(".streamScrolled"), "true");
	}
	for(var i=tweetBuffer.length-1;i>=0;i--){
		var li=createSTMessageDOM(tweetBuffer[i]);
		$$("updates").insertBefore(li, $$("updates").firstChild);
	}
	stStreamScroll.refresh();
	var increasedLength=-stStreamScroll.maxScrollY+prevScroll.maxScrollY;
	var newY=prevScroll.y-increasedLength;
	stStreamScroll.scrollTo(0,newY,0);
	tweetBuffer=[];
	if(stNewCount===null){
		stStreamScroll.scrollTo(0,0,400);
	}
}

function createSTMessageDOM(message){
	function closureSetStream(type, data){
		return function(){
			if(!STX.touchDevice && Math.abs(STXChart.crosshairY-clickSnapshotY)>10) return;
			setSearch(type, data);
		};
	}
	function closureReply(message, li, type){
		return function(){
			function closureClose(li){
				return function(){
					li.className=li.classNameOld;
					setTimeout(function(){
						refreshSTScroll();
						if(stStreamScroll.y>-50) stNewCount=null;
					}, 750);
				};
			}
			if(li.classNameOld){
				li.className=li.classNameOld;
				delete li.classNameOld;
				setTimeout(function(){
					refreshSTScroll();
				}, 750);
				return;
			}
			stCloseOpenReplies();
			li.classNameOld=li.className;
			STX.appendClassName(li, "show");
			var sending=li.querySelector(".sending");
			sending.innerHTML="";
			STX.unappendClassName(sending, "success");
			var closes=li.querySelectorAll(".stx-ico-close");
			for(var v=0;v<closes.length;v++){
				closes[v].onclick=closureClose(li);
			}
			li.querySelectorAll("#replyTo")[0].innerHTML=message.user.username;
			selectSentiment(li.querySelector(".bull"), "");
			var ta=li.querySelectorAll("#post-response-field")[0];
			if(type=="retweet"){
				ta.value="RT @" + message.user.username + " " + message.body;
				li.querySelectorAll("#replyOrRetweet")[0].innerHTML="Retweet";
			}else{
				li.querySelectorAll("#replyOrRetweet")[0].innerHTML="Reply to";
				var ct=stwt.txt.extractCashtags(message.body);
				ta.value="@" + message.user.username + " ";
				for(var i in ct){
					ta.value+="$" + ct[i]+ " ";
				}
			}
			// Newly opened reply is off top of screen
			if((li.offsetTop + stStreamScroll.y)<0){
				//alert(li.offsetTop + stStreamScroll.y);
				stStreamScroll.scrollTo(0,stStreamScroll.y-(li.offsetTop+stStreamScroll.y)+20,0);
			}
			stChangeText(ta);
			STX.setCaretPosition(ta, ta.value.length);
			if(stStreamScroll.enabled) stStreamScroll.disable();
		};
	}
	function closureFollow(message, li, type){
		return function(){
			stFollowUnfollowBlock(message.user.id, message.user.username, type);
		};
	}
	function closureLikeUnlike(message, li){
		return function(){
			if(li.like){
				STX.unappendClassName(li.querySelector(".like"),"true");
				stLikeUnlike(message.id, false);
				li.like=false;
			}else{
				STX.appendClassName(li.querySelector(".like"),"true");
				stLikeUnlike(message.id, true);
				li.like=true;
			}
		};
	}
	function closureMore(message, li){
		return function(e){
			if(this.className.indexOf("active")==-1){
				STX.appendClassName(this, "active");
			}else{
				STX.unappendClassName(this, "active");
			}
		};
	}
	var li=$$("stMessageTemplate").cloneNode(true);
	li.message=message;
	li.style.display="block";
	li.querySelector("div.avatar a img").src=message.user.avatar_url;
	li.querySelector("div.avatar a").onclick=closureSetStream("user", message.user.username);
	li.querySelector("div.avatar a").onmousedown=clickDetect;
	li.querySelector("div.username a").innerHTML=message.user.username;
	li.querySelector("div.username a").onclick=closureSetStream("user", message.user.username);
	li.querySelector("div.username a").onmousedown=clickDetect;
	STX.innerHTML(li.querySelector("div.message-body"), stProcessMessage(message.body));
	//li.querySelector("div.message-body").innerHTML=stProcessMessage(message.body);
	var dt=new Date(message.created_at);
	message.jsDate=dt;
	li.querySelector("div.message-date").innerHTML=stFormatDate(dt);
	if(message.source.id!=1){
		li.querySelector("div.message-source span").innerHTML=message.source.title;
		//li.querySelector("div.message-source").href=message.source.url;
	}else{
		li.querySelector("div.message-source").style.display="none";
	}
	if(stProfile && message.user.username==stProfile.username){
		li.querySelector(".follow").style.display="none";
		li.querySelector(".unfollow").style.display="none";
	}else if(stGraph.following.indexOf(message.user.username)!=-1){
		li.querySelector(".follow").style.display="none";
		li.querySelector(".unfollow").style.display="block";
	}
	li.querySelector(".like").onclick=closureLikeUnlike(message, li);
	li.querySelector(".reply").onclick=closureReply(message, li, "reply");
	li.querySelector(".retweet").onclick=closureReply(message, li, "retweet");
	li.querySelector(".follow").onclick=closureFollow(message, li, "follow");
	li.querySelector(".unfollow").onclick=closureFollow(message, li, "unfollow");
	li.querySelector(".block").onclick=closureFollow(message, li, "block");
	if(STX.isAndroid) li.querySelector("li.more").onclick=closureMore(message, li);	// Android doesn't accept :active pseudoclass
	
	li.onmspointerdown=clickDetect;
	li.onclick=function(e){
		if(STX.isSurface && Math.abs(STXChart.crosshairY-clickSnapshotY)>5) return;
		var allOfThem=document.querySelectorAll("#updates > li");
		for(var i=0;i<allOfThem.length;i++){
			allOfThem[i].enableComponents=false;
			STX.unappendClassName(allOfThem[i], "true");
			if(allOfThem[i]==this) continue;
			if(STX.isAndroid) STX.unappendClassName(allOfThem[i].querySelector("li.more"), "active");
		}
		this.enableComponents=true;
		STX.appendClassName(this, "true");
	};
	return li;
}


function toggleSTPost(e){
	var ta=$$("post-new-field");
	if($$("post-new").className=="show"){
		$$("post-new").className="";
		setTimeout(function(){
			$$("post-new-field").blur();
			refreshSTScroll();
		}, 500);
		return false;
	}else{
		$$("post-new").className="show";
		selectSentiment($$("post-new").querySelector(".bull"), "");
	}
	var newHeight=STX.pageHeight()-40-STX.getPos($$("stStreamWrapper")).y;
	$$("stStreamWrapper").style.height=newHeight + "px";
	if(currentSTStream.type=="symbol"){
		ta.value="$" + currentSTStream.data.toUpperCase()+ " ";
	}
	stChangeText(ta);
	if(ta.value.length) STX.setCaretPosition(ta, ta.value.length);
	setTimeout(function(){
		refreshSTScroll();
	}, 750);
	return false;
}

function closeSTLookup(){
	$$("stLookupDiv").style.display="none";
	stxx.openDialog="";
}

function stwitsLookup(text){
	stLookupCancel=false;
	if(!text) text=$$("searchStwits").value;
	if(!text) return;
	var url=stockTwitsURL + "/api/2/search.json?q=" + text;
	ajaxTransact(url, displayStwitsLookup, null, true);
}

function displayStwitsLookup(response, status){
	if(stLookupCancel) return;
	function closure(result){
		return function(){
			if(!STX.touchDevice && Math.abs(STXChart.crosshairY-clickSnapshotY)>10) return;
			if(result.type=="symbol"){
				stStream("symbol", result.symbol);
			}else if(result.type=="user"){
				stStream("user", result.username);
			}
			$$("searchStwits").blur();
			//$$("dvClearSymbol").style.display="inline-block";
			$$("stLookupDiv").style.display="none";
			stxx.openDialog="";
		};
	}
	if(status!=200) return;
	$$("stLookupSymbolScrollWrapper").style.display="none";
	$$("stLookupUserScrollWrapper").style.display="none";
	var l1=$$("stwitsSymbolLookupResults");
	var l2=$$("stwitsUserLookupResults");
	STX.clearNode(l1);
	STX.clearNode(l2);
	var first=false;
	var howMany=0;
	var foundSymbol=false;
	var foundUser=false;
	response=JSON.parse(response);
	for(var i in response.results){
		var r=null;
		if(response.results[i].type=="symbol"){
			r=$$("stLookupSymbolTemplate").cloneNode(true);
			r.querySelector("#stlsTitle").innerHTML=response.results[i].title;
			r.querySelector("#stlsSymbol").innerHTML=response.results[i].symbol;
			l1.appendChild(r);
			$$("stLookupSymbolScrollWrapper").style.display="block";
			foundSymbol=true;
		}else if(response.results[i].type=="user"){
			r=$$("stLookupUserTemplate").cloneNode(true);
			r.querySelector("#stluAvatar").src=response.results[i].avatar_url;
			r.querySelector("#stluUsername").innerHTML=response.results[i].username;
			r.querySelector("#stluName").innerHTML=response.results[i].name;
			l2.appendChild(r);
			$$("stLookupUserScrollWrapper").style.display="block";
			foundUser=true;
		}
		if(r){
		r.style.display="block";
		r.onclick=closure(response.results[i]);
		r.onmousedown=clickDetect;
		if(!first) first=true;
		howMany++;
		}
	}
	if(foundSymbol && !foundUser){
		$$("stSymLookup").className="solo";
		$$("stUserLookup").className="hidden";
	}else if(foundUser && !foundSymbol){
		$$("stSymLookup").className="hidden";
		$$("stUserLookup").className="solo";
	}else{
		$$("stSymLookup").className="";
		$$("stUserLookup").className="";
	}

	if(first){
		$$("stLookupDiv").style.display="block";
		stxx.openDialog="stLookupDiv";
		if($$("stwitsSymbolLookupResults").offsetHeight<200){
			$$("stLookupSymbolScrollWrapper").style.height=($$("stwitsSymbolLookupResults").offsetHeight)+"px";
		}else{
			$$("stLookupSymbolScrollWrapper").style.height="200px";
		}
		if($$("stwitsUserLookupResults").offsetHeight<200){
			$$("stLookupUserScrollWrapper").style.height=($$("stwitsUserLookupResults").offsetHeight)+"px";
		}else{
			$$("stLookupUserScrollWrapper").style.height="200px";
		}
		stLookupSymbolScroll.refresh();
		stLookupUserScroll.refresh();
	}
}


function clearStSymbol(){
	$$("dvClearStSymbol").style.display="none";
	closeSTLookup();
	$$("searchStwits").value="";
	$$("searchStwits").blur();
}

function searchStwitsBlur(e){
}

function searchStwitsKeyUp(e){
	var div=STX.getEventDOM(e);
	var key = (window.event) ? event.keyCode : e.keyCode;
	switch(key){
		case 13:
			stLookupCancel=true;
			stDetermineStream(div.value);
			div.blur();
			closeSTLookup();
			break;
		case 27:
			stLookupCancel=true;
			closeSTLookup();
			$$("dvClearStSymbol").style.display="none";
			div.value="";
			div.blur();
			break;
		default:
			$$("dvClearStSymbol").style.display="block";
			stwitsLookup();
			break;
	}
	e = e||event;
	if(e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;
}

var stStreamScroll = new STXThirdParty.iScroll('stStreamWrapper', {vScrollbar: false, hScrollbar: false, hScroll: false, vScroll: true, bounce: false, bounceBottom: false, bounceTop: true, onScrollEnd: stPanelEnd, onScrollMove: stScrollMove, wheelMultiplier:20});
var stLookupSymbolScroll = new STXThirdParty.iScroll('stLookupSymbolScrollWrapper', {vScrollbar: false, hScrollbar: false, hScroll: false, vScroll: true});
var stLookupUserScroll = new STXThirdParty.iScroll('stLookupUserScrollWrapper', {vScrollbar: false, hScrollbar: false, hScroll: false, vScroll: true});

$$("searchStwits").onkeyup=searchStwitsKeyUp;
$$("searchStwits").onblur=searchStwitsBlur;

function closeOauthContainer(){
	STX.DialogManager.dismissDialog();
}

function initializeDialogs(){
	// move login dialog out of the body and into the stx-wrapper
	var oauthDialog=$$$("#oauthContainer");
	$$$("body").removeChild(oauthDialog);
	$$$(".stx-dialog-container").appendChild(oauthDialog);
}

initializeDialogs();