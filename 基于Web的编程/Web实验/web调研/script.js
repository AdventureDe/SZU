var isProd = true
window._SHOP_STATIC_PACK_URL = "https://assets.vivo.com.cn/vivoshop/"
var s = document.createElement('script');s.onload = s.onreadystatechange = function () {if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {s.onload = s.onreadystatechange = null;window.VMonitor && window.VMonitor.init({id:155,enableSPA:true,reportRender:false,isProd: isProd});}};s.src = '//sentinelapi.vivo.com.cn/jssdk/vmonitor.min.js';document.head.appendChild(s);

// pad访问PC适配
  ;(function () {
    var tid = null
    var setScale = function () {
      var frameWidth = 1300 // 多预留100px，解决内容完全贴边展示问题
      var deviceWidth = document.documentElement.clientWidth
      let scaleX = deviceWidth / frameWidth
      scaleX = scaleX.toFixed(3)
      document.documentElement.style = ''
      if (deviceWidth < frameWidth) {
        document.documentElement.style.width = frameWidth + 'px'
        document.documentElement.style.transform = 'scale(' + scaleX + ')'
        document.documentElement.style.height = '100%'
        document.documentElement.style.transformOrigin = '0 0'
        document.documentElement.style.overflowX = 'hidden'
        document.documentElement.style.margin = '0 auto'
      }
    }
    setScale()
    // 横竖屏切换后重新计算
    window.addEventListener(
      'resize',
      function () {
        clearTimeout(tid)
          tid = setTimeout(setScale, 300)
      },
      false
    )
  })()




    var vpHeader = {
        pageType: 'pc',
        pageBoundary: 1199,
        clientId: '3',
        memberIsCus: false,
        headerType: 0,
        target: 'vivoShop',
        ceilingType: 0,
        showDownLink: 1,
        darkWords: [{"name":"X200 Pro"},{"name":"S20 Pro"},{"name":"iQOO 13"},{"name":"iQOO Neo10"},{"name":"X Fold3 Pro"},{"name":"vivo Pad3 Pro"},{"name":"查找体验店"}]
    }
    var VP_Emmiter


        var vpFooter = {
            pageType: 'pc',
            pageBoundary: 1199
        }
    

    var vpHeader = {
        pageType: 'pc',
        pageBoundary: 1199,
        clientId: '3',
        memberIsCus: false,
        headerType: 0,
        target: 'vivoShop',
        ceilingType: 0,
        showDownLink: 1,
        darkWords: [{"name":"X200 Pro"},{"name":"S20 Pro"},{"name":"iQOO 13"},{"name":"iQOO Neo10"},{"name":"X Fold3 Pro"},{"name":"vivo Pad3 Pro"},{"name":"查找体验店"}]
    }
    var VP_Emmiter


        var vpFooter = {
            pageType: 'pc',
            pageBoundary: 1199
        }
    