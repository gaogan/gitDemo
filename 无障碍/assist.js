// JavaScript Document

window.SITEINI={
	"sid":{"aversion":"","mversion":"","bhelp":"","ohelp":"","wurl":""}
	
	};

function addListener(target, evt, func) {
		  if(window.attachEvent) target.attachEvent('on' + evt, func);
		  else if(window.addEventListener) target.addEventListener(evt, func, false);  	
}
function openWza(node,iskey,isblind,ispack){
	if(!iskey&&node){
		var pn=node;var hasAccLink=false;
		var i=0;
		while(pn&&pn.tagName!="BODY"){
			i++;
			if(i>3) break;
			if(pn.id&&pn.id=="cniil_wza") {hasAccLink=true;break;}
			pn=pn.parentNode;
		}
		if(!hasAccLink) return false;
	}
	if(iskey&&!node) node=document.body;
	var d=node.ownerDocument==document?document:top.document;
	var scriptNode=d.getElementById("cniil_assist");
	if(scriptNode) {
		if(window.openWzaSetting&&typeof(window.openWzaSetting)=="function") window.openWzaSetting();
		return true;
	}
	scriptNode=d.createElement("script");
	scriptNode.type="text/javascript";
	scriptNode.id="cniil_assist";
	scriptNode.defer=true;
	scriptNode.async=true;
	var isRead=getAccCookie("read");
	var bindPara=(isblind?"blind=2":"blind=1")+(isRead===undefined&!isblind?"&snd=1":"");
	var splitor=window.setupWzaPath.indexOf("?")==-1?"?":"&";
	var keyParam=iskey?"&key=1":"";
	var packParam=ispack?"&pck=1":"";
	window.setupWzaPath=window.setupWzaPath.replace(/blind=\d{1,}/ig,"");
	window.setupWzaPath+=splitor+bindPara+keyParam+packParam;
	scriptNode.src=window.setupWzaPath;
	d.body.appendChild(scriptNode);
	
	
}

function getAccVal(key,reg){
	var match=reg.exec(window.setupWzaPath);
	if(!match) match=reg.exec(location.href);
	if(match) 
	{
		return match[1];
	}
}
function getAccCookie(key) {
		key="acc"+key;
		var result = key ? undefined : {};
		var cookies = document.cookie ? document.cookie.split('; ') : [];
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decodeURIComponent(parts.shift());
			var cookie = parts.join('=');
			if (key && key === name) {
				result = cookie;
				break;
			}
		}
		result=result&&!/[^\d]/.test(result)?parseInt(result):result;//ÊÇÕûÐÎ×ª»»³ÉÊýÖµÐÍ
		return result;
}

function setAccCookie(key, val, maindo){
	var exp = new Date();
    exp.setTime(exp.getTime() + 500*24*60*60*1000);
    var cookiee = "acc" + key + "="+ escape (val) + ";path=/;expires=" + exp.toGMTString();

    if(maindo){
    	cookiee += ";domain=" + maindo;
    }

    document.cookie = cookiee;
}

var accessGuide = {
	tabtar: null,
	tabsleep: 1500,
	tabcount: 0
};

function tabkeyPressed(){
	if(window.assist&&window.assist.module&&window.assist.module.face) return false;

	if(!accessGuide.tabtar){
		accessGuide.tabtar = window.setTimeout(function(){
			accessGuide.tabtar = null;
			accessGuide.tabcount = 0;
		}, accessGuide.tabsleep);
	}

	accessGuide.tabcount++;

	if(accessGuide.tabcount >= 3){
		window.clearTimeout(accessGuide.tabtar);
		accessGuide.tabtar = null;
		accessGuide.tabcount = 0;

		return true;
	}

	return false;
}


function cniil_setup(){
	var ismob=function(){
			 var arrs=['iphone','android'];
			 var info=navigator.userAgent.toLowerCase();
			 for(var i=0; i<arrs.length; i++){
				 var result=info.indexOf(arrs[i]);
				 if(result > -1)return true;
			 }
			 return false;
	};
	if(/cniil/i.test(navigator.userAgent)) return;//
	var path="";
	var src=document.scripts[document.scripts.length-1].src;
	for(var i=0;i<document.scripts.length;i++){if(document.scripts[i].src&&/assist\.js/i.test(document.scripts[i].src)) {path=document.scripts[i].src;break;}}
	if(path.indexOf("://")==-1){var n=document.createElement("a");n.href=src;path=n.href;n=null;}
	var mobFlag=ismob()?"m":"a";
	if(!/mob=1/.test(path)&&mobFlag=="m") return;
	if(!path) return;
	mobFlag=mobFlag+(/lang=en/.test(path)?"e":(/lang=big5/.test(path)?"b":""));
	
	var src=document.scripts[document.scripts.length-1].src;
	var siteMatch=/[\?&]sid\s*=\s*(\d{1,})/i.exec(path);
	if(!siteMatch)siteMatch=/[\?&]sid\s*=\s*(\d{1,})/i.exec(top.location.href);
	var siteId=siteMatch?siteMatch[1]:"";
	var jsVersion=siteId&&window.SITEINI[siteId]&&window.SITEINI[siteId][mobFlag+"version"]?window.SITEINI[siteId][mobFlag+"version"]:"";
	var period=mobFlag=='m'?1:100000000;
	var wurl=siteId&&window.SITEINI[siteId]&&window.SITEINI[siteId]["wurl"]?window.SITEINI[siteId]["wurl"]:"";
	if(wurl) path=wurl;
	path=path.replace(/assist\.js/i,"assist"+mobFlag+jsVersion+".js");
	path=path+(path.indexOf("?")==-1?"?v=":"&v=")+Math.round((new Date()).getTime()/period);
	window.setupWzaPath=path;
	
	if(document.body){
		addListener(document,"click",function(e){
				var node = e.target||e.srcElement;
				openWza(node);
		});
		addListener(document,"keyup",function(e){
				if(window.assist&&window.assist.module&&window.assist.module.face) return true;							  
				e = e ||window.event; 
				var key=e.which||e.keyCode;
				var node=(e.target||e.srcElement);
				if(node&&(node.tagName=="TEXTAREA"||(node.tagName=="INPUT"&&(node.getAttribute("type")=="text"||node.getAttribute("type")=="")))) return true;
				if(!e.altKey&&e.shiftKey&&!e.ctrlKey&&(key==50||key==98))openWza(node,true,true);
				if(!e.altKey&&e.shiftKey&&!e.ctrlKey&&(key==49||key==97))openWza(node,true,false);

				if(!e.altKey && !e.shiftKey && !e.ctrlKey && key == 9){
					//tab x 3
					if(tabkeyPressed()){
						openWza(node,true,true);
					}
				}

				if(e.altKey && (key >= 49 && key <= 55)){
					//alt + [1,7]
					openWza(node,true,true);
				}
				//if(!e.altKey&&!e.shiftKey&&!e.ctrlKey&&key==9&&!window.accTabed) {window.accTabed=true;openWza(node,true,true,true);return true;}
		});
		addListener(document,"keydown",function(e){
				if(window.assist&&window.assist.module&&window.assist.module.face) return true;							  
				e = e ||window.event; 
				var key=e.which||e.keyCode;
				var node=(e.target||e.srcElement);
				if(!e.altKey&&!e.shiftKey&&!e.ctrlKey&&key==13) openWza(node,false,true);
		});
		var accRole=getAccCookie("blind")||getAccVal("blind",(/[\?&]blind\s*=\s*(0|1|2|3)/i));
		if(accRole==1){
			openWza(document.body,true,false);
		}else if(accRole==2){
			openWza(document.body,true,true);
		}
	}else{
		setTimeout(function(){cniil_setup();},1000);
	}
}

function address(){
	var src=document.scripts[document.scripts.length-1].src;
	for(var i=0;i<document.scripts.length;i++){if(document.scripts[i].id&&document.scripts[i].id=="cniil_assist") {src=document.scripts[i].src;break;}}
	if(window.setupWzaPath) src=window.setupWzaPath;
	//for debug
	if(!src)
	{
		for(var i=0;i<document.scripts.length;i++){if(document.scripts[i].src&&document.scripts[i].src.indexOf("/assist")!=-1) {src=document.scripts[i].src;break;}}
		
	}
	if(src.indexOf("://")==-1){var n=document.createElement("a");n.href=src;src=n.href;n=null;}

	return src;
}

cniil_setup();