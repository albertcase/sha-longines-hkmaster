
/* ----------- 分享js ----------- */

$.ajax({  
        type: "GET",  
        url: "/valentine/access_token.php", //orderModifyStatus 
        data:{url:window.location.href},
        dataType:"json",  
        async:false,  
        cache:false,  
        success: function(data){  
       wechatShare(data.time,data.sign);
        },  
        error: function(json){  
            //alert("数据获取异常，请刷新后重试...");  
        }  
 });  



var SHARE_TITLE = '博主独家对话郭富城 直击顶级优雅马术赛';
var SHARE_LINK = 'http://longines.samesamechina.com/HKmaster';
var SHARE_IMG = 'http://longines.samesamechina.com/HKmaster/images/share6.jpg';
var SHARE_DESC = '博主独家对话郭富城 直击顶级优雅马术赛';

function wechatShare(timestamp_val,signature_val){
  wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wxf606ac3699439054', // 必填，公众号的唯一标识
      timestamp: timestamp_val, // 必填，生成签名的时间戳
      nonceStr: 'asdkhaedhqwui', // 必填，生成签名的随机串
      signature: signature_val,// 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });

  wx.ready(function(){
    
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    wx.onMenuShareTimeline({
        title: SHARE_TITLE, // 分享标题
        link: SHARE_LINK, // 分享链接
        imgUrl: SHARE_IMG, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            //alert('分享成功')
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
            // alert("分享失败")
        }
    });
    
    
    wx.onMenuShareAppMessage({
        title: SHARE_TITLE, // 分享标题
        link: SHARE_LINK, // 分享链接
        imgUrl: SHARE_IMG, // 分享图标
      desc: SHARE_DESC,
        success: function () { 
            // 用户确认分享后执行的回调函数
            //alert('分享成功')
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
           // alert("分享失败")
        }
    });
      
  });

  wx.error(function(res){
    //alert("无法使用微信JS")
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

  });

}





$(".morebtn").click(function(){
    ga('send','event','auction', 'newsinfo' ,$(this).attr("data-num"));
})



