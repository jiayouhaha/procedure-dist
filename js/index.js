$(function(){
     setInterval(function(){
        $('.ding').toggle()
  },500)
     var curIndex=0;
     var timeInterval=500;
     var arr=new Array();
     arr[0]="img/lineTwo.png";
     arr[1]="img/lineOne.png";
     setInterval(changeImg,timeInterval);
     function changeImg(){
         if(curIndex==arr.length-1){
              curIndex=0;	
        }else{
              curIndex+=1;
        }
        $('.bg').css("background-image",'url('+arr[curIndex]+')');
  }


  $('button').click(function(){
   _hmt.push(['_trackEvent', "procedure-dist", "procedure-distClick"]);
   $(location).attr('href','slider.html')
})
  $('.dowload').click(function(){
        var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android ') > -1|| u.indexOf('Linux') > -1; //android终端或者uc浏览器
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if( isAndroid  ){
            	_hmt.push(['_trackEvent', "procedure-dist", "20171124-01Q00PdownloadAppAndroid"]);
                window.location.href = " http://zhcn.web.cdn.cootekservice.com/Downloads/ChuBaoDianHua_01Q00D.apk";
          }
          if( isiOS  ){
           _hmt.push(['_trackEvent', "procedure-dist", "20171124-01Q00PClickDownloadAppIOS"]);
           window.location.href = "http://dialer.cdn.cootekservice.com/web/external/laststep/index.html?code=01Q00P";
     }

})
        var audio=document.querySelector("#audio");
        document.addEventListener("WeixinJSBridgeReady",function(){
            audio.play();
      },false);

})




