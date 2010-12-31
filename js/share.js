var j=$.parseJSON('{"facebook":{"favicon":"facebook.png","url":"http://www.facebook.com/share.php?u=_PERMALINK_&amp;t=_TITLE_", "params":"" },"twitter" : { "favicon":"twitter.png","url":"http://twitter.com/home?status=_TITLE_+%20-%20_PERMALINK_","params":"" },"douban" : { "favicon":"douban.png","url":"http://www.douban.com/recommend/?url=_PERMALINK_&amp;title=_TITLE_","params":"" },"renren" : { "favicon":"renren.png","url":"http://share.renren.com/share/buttonshare?link=_PERMALINK_&amp;title=_TITLE_","params":"toolbar=0,status=0,resizable=1,width=626,height=436" },"buzz" : { "favicon":"buzz.png","url":"http://www.google.com/buzz/post?message=_TITLE_&amp;url=_PERMALINK_","params":"" },"sina" : { "favicon":"sina.png","url":"http://v.t.sina.com.cn/share/share.php?url=_PERMALINK_&amp;title=_TITLE_&amp;content=utf-8","params":"" },"tencent" : { "favicon":"tencent.png","url":"http://v.t.qq.com/share/share.php?title=_TITLE_&amp;url=_PERMALINK_&amp;jumpback=2&amp;noui=1","params":"" },"xianguo" : { "favicon":"xianguo.png","url":"http://www.xianguo.com/service/submitdigg/?link=_PERMALINK_&amp;title=_TITLE_&amp;content=utf-8","params":"" },"delicious" : { "favicon":"delicious.png","url":"http://www.delicious.com/save?url=_PERMALINK_&amp;title=_TITLE_&amp;v=5","params":"" }}');var e=encodeURIComponent;var l=document.location.href;t=document.title;
$(document).ready(function() {
  $('a.social-button').each(function(index) {
		$(this).click(function(){
			var s = $(this)[0].id; // get which social site clicked
			//console.log(j.douban.url); http://www.douban.com/recommend/?url=_PERMALINK_&amp;title=_TITLE_
			switch(s)
			{
			case "douban":
			  getShare(j.douban.url); 
			  break;
			case "twitter":
			  getShare(j.twitter.url);
			  break;			
			case "facebook":
			  getShare(j.facebook.url);
			  break;
			case "buzz":
			  getShare(j.buzz.url);
			  break;
			case "sina":
			  getShare(j.sina.url);
			  break;
			case "tencent":
			  getShare(j.tencent.url);
			  break;
			case "delicious":
				getShare(j.delicious.url);
				break;
			case "xianguo":
			 	getShare(j.xianguo.url);
				break;
			case "renren":
				getShare(j.renren.url);
				break;
			}
		});
  });
});

function getShare(url) {
	// http://www.douban.com/recommend/?url=_PERMALINK_&amp;title=_TITLE_
	// TODO: replace _PERMALINK_ and _TITLE_
	u=url.replace(/_PERMALINK_/, e(l)).replace(/_TITLE_/, e(t));
	console.log(u);
	a = function() {
		if(!window.open(u,'Sharing with...','toolbar=0,status=0,resizable=1,scrollbars=no,width=600,height=700')) location.href = u + '&apm;rel=social-buttons'
	};
	if (/Firefox/.test(navigator.userAgent)) {
    setTimeout(a, 0)
  } else {
    a()
  }	
}