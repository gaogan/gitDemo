; window.assistFaceHtml = {
    "code": "<style type=\"text\/css\" id=\"accoscss\">#accface * {\r\n    font-family: 'Microsoft YaHei', '\u5fae\u8f6f\u96c5\u9ed1', \u5b8b\u4f53, SimSun, Heiti, sans-serif;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\n#accface a{\r\n    display: block;    \r\n}\r\n\r\n#accface div, #accface span,\r\n#accface li, #accface p, #accface a,\r\n#accface ul{\r\n    overflow: visible;\r\n}   \r\n\r\n#accface ul,\r\n#accface li {\r\n    display: block;\r\n    -webkit-margin-before: 0;\r\n    -webkit-margin-after: 0;\r\n    -webkit-margin-start: 0;\r\n    -webkit-margin-end: 0;\r\n    -webkit-padding-start: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n#accface .acc-action {\r\n    display: block !important;\r\n}\r\n\r\n#accface .acc-noaction {\r\n    display: none !important;\r\n}\r\n\r\n#accface .acc-visble {\r\n    visibility: visible !important;\r\n}\r\n\r\n#accface .acc-novisble {\r\n    visibility: none !important;\r\n}\r\n\r\n#accface .ml8 {\r\n    margin-left: 10px;\r\n}\r\n\r\n.acc-mt100cc {\r\n    margin-top: 100px;\r\n}\r\n\r\n#accface .acc-tj {\r\n    background-image: url({relurl}face\/imgs\/tuji41.png?v1);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#accface .acc-sh {\r\n    background-image: url({relurl}face\/imgs\/sh41.png?v1);\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n#accface .acc-sz {\r\n    background-image: url({relurl}face\/imgs\/sz41.png?v1);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#accface .acc-fold {\r\n    background-image: url({relurl}face\/imgs\/fold41png?v1);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#accface .acc-cb {\r\n    background-image: url({relurl}face\/imgs\/cb41.png?v1);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#accface .acc-dz {\r\n    background-image: url({relurl}face\/imgs\/dz41.png?v1);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#accface .cursor {\r\n    cursor: pointer;\r\n}\r\n\r\n\/*\u5173\u95ed\u6309\u94ae*\/\r\n.switchtool {\r\n    width: 100px;\r\n    position: fixed;\r\n    top: 5px;\r\n    right: 10px;\r\n    z-index: 3147483646;\r\n    text-align: right;\r\n    display: none !important;\r\n}\r\n.switchtool span{\r\n    cursor: pointer;\r\n}\r\n.switchtool .closetool{\r\n    color: #fff !important;\r\n    font-size: 20px !important;\r\n}\r\n.switchtool > .closetool:before{\r\n    content: \"\u25b2\";\r\n}\r\n.switchtool .closetool span{ display: inline;}\r\n.switchtool .opentool{\r\n    color: #505050 !important;\r\n    font-size: 20px !important;\r\n}\r\n.switchtool .opentool span{ display: none;}\r\n.switchtool > .opentool:before{\r\n    content: \"\u25bc\";\r\n}\r\nlabel.accelem{\r\n    height:150px;\r\n    display: block;\r\n}\r\n\r\n\/*\u5927\u5b57\u5e55*\/\r\n.accright #accscreen{\r\n    right: 60px !important;\r\n}\r\n\r\n.accleft #accscreen{\r\n    left: 60px !important;\r\n}\r\n\r\n#accscreen{\r\n    height:150px;\r\n    background-color:#505050 !important;\r\n    display:none;\r\n    overflow:hidden;\r\n    z-index: 2147483640;\r\n    text-align:center;\r\n    position:fixed;\r\n    bottom:0px;\r\n    right: 0;\r\n    left: 0;\r\n}\r\n\r\n#accscreen #acctip{\r\n    height: 150px;\r\n    position: absolute;\r\n    left: 5px;\r\n    right: 100px;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-weight: bold;\r\n    bottom: 0;\r\n    top: 0;\r\n\/*    letter-spacing: 10px;*\/\r\n}\r\n\r\n#accface .white #acctip{\r\n    background-color: #fff !important;\r\n    color: #333 !important;\r\n    border-top:1px solid #505050;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#accface .black #acctip{\r\n    background-color:#505050 !important;\r\n    color: #fff !important;\r\n}\r\n\r\n#accface .black td{\r\n    color: #fff !important;\r\n}\r\n\r\n#accscreen span {\r\n    position: absolute;\r\n    right: 11px;\r\n    width: 75px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -webkit-border-radius: 5px;\r\n    color: #fff !important;\r\n}\r\n\r\n#accscreen #accscreen-py {\r\n    top: 45px;\r\n}\r\n\r\n#accscreen #accscreen-jt {\r\n    top: 100px;  \r\n}\r\n\r\n#accscreen #accscreen-close {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: block;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 4px;\r\n    background-position: -422px -112px;\r\n}\r\n\r\n#accscreen #accscreen-vol {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: block;\r\n    position: absolute;\r\n    right: 52px;\r\n    top: 4px;\r\n}\r\n\r\n#accscreen .vol-k{\r\n    background-position: -425px -161px;\r\n}\r\n\r\n#accscreen .vol-g{\r\n    background-position: -425px -206px;\r\n}\r\n\r\n\/************\u5de5\u5177\u6761*********\/\r\n\r\n#accface .acccont-e {\r\n    width: 100%;\r\n    background-color: #505050 !important;\r\n    overflow: hidden;\r\n    z-index: 2147483645;\r\n    position: fixed;\r\n    top: 0;\r\n    box-shadow: 0 0 10px 2px #999;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n#accface #acccont {\r\n    height: 100px; \r\n}\r\n\r\n#accface #acccont-fold {\r\n    height: 60px;  \r\n}\r\n\r\n.acccont-e .acccont-e-body {\r\n    width: 1080px;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.acccont-e #acccont-fold-body {\r\n    width: 1020px;\r\n    margin: 0 auto;\r\n}\r\n\r\n\/*\u4e24\u4e2a*\/\r\n#acccont .acc-s-wrap {\r\n    width: 152px;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n\/*\u4e09\u4e2a*\/\r\n#acccont .acc-m-wrap {\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n\/*4\u4e2a*\/\r\n#acccont .acc-l-wrap {\r\n    width: 215px;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n.acccont-e-body .acccont-body-e {\r\n    width: 60px;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n#acccont #accrscreen,\r\n#acccont #accaux,\r\n#acccont #accread-ver {\r\n    width: 92px;\r\n\/*    display: block !important;*\/\r\n}\r\n\r\n.acccont-body-e span,\r\n.acccont-body-e i,\r\n.acccont-body-e a,\r\n.acccont-fs-e i,\r\n.acccont-fs-e span {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.acccont-body-e span {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    font-size: 14px !important;\r\n}\r\n\r\n#acccont .acccont-e-body .acccont-body-i {\r\n    display: block;\r\n    width: 100%;\r\n    height: 62px;\r\n    margin-top: -8px;\r\n}\r\n\r\n\r\n#acccont #accreset i {\r\n    background-position: -42px -105.5px;\r\n}\r\n\r\n#acccont #accreset i:hover {\r\n    background-position: -133px -105.5px;\r\n}\r\n\r\n#acc-text-big i {\r\n    background-position: -42px -178px;\r\n}\r\n\r\n#acc-text-big i:hover {\r\n    background-position: -133px -178px;\r\n}\r\n\r\n\r\n#acc-text-small i {\r\n    background-position: -42px -252px;\r\n}\r\n\r\n#acc-text-small i:hover {\r\n    background-position: -133px -252px;\r\n}\r\n\r\n#acccont .acc-default-btn i {\r\n  background-position: -42px -325.5px;\r\n}\r\n\r\n#acccont .acc-default-btn i:hover {\r\n  background-position: -133px -325.5px;\r\n}   \r\n\r\n#acccont .acc-blue-btn i {\r\n  background-position: -42px -398px; \r\n}\r\n\r\n#acccont .acc-blue-btn i:hover {\r\n  background-position: -133px -398px; \r\n}\r\n\r\n#acccont .acc-black-btn i {\r\n  background-position: -42px -470.5px;  \r\n}\r\n\r\n#acccont .acc-black-btn i:hover {\r\n  background-position: -133px -470.5px;  \r\n}\r\n\r\n#acccont #accmouse i {\r\n    background-position: -42px -544px;\r\n}\r\n\r\n#acccont #accmouse i:hover {\r\n    background-position: -133px -544px;  \r\n}\r\n\r\n#acccont #acccross i {\r\n  background-position: -42px -616px;  \r\n}\r\n\r\n#acccont #acccross i:hover {\r\n  background-position: -133px -616px;  \r\n}\r\n\r\n#acccont #accbig i {\r\n  background-position: -42px -690px;  \r\n}\r\n\r\n#acccont #accbig i:hover {\r\n  background-position: -133px -690px;  \r\n}\r\n\r\n#acccont #accblind i {\r\n  background-position: -42px -763px;  \r\n}\r\n\r\n#acccont #accblind i:hover {\r\n    background-position: -133px -763px;  \r\n}\r\n\r\n#acccont #acchelpbook i{\r\n    background-position: -42px -836px;  \r\n}\r\n\r\n#acccont #acchelpbook i:hover{\r\n    background-position: -133px -836px;  \r\n}\r\n\r\n#acccont #accpick i{\r\n    background-position: -42px -908px;  \r\n}\r\n\r\n#acccont #accpick i:hover{\r\n    background-position: -133px -908px;  \r\n}\r\n\r\n\r\n\r\n#acccont #accspeed-m i{\r\n    background-position: -42px -1056px;  \r\n}\r\n\r\n#acccont #accspeed-m i:hover{\r\n    background-position: -132px -1056px;  \r\n}\r\n\r\n#acccont #accspeed-k i{\r\n    background-position: -42px -1128px;  \r\n}\r\n\r\n#acccont #accspeed-k i:hover{\r\n    background-position: -132px -1128px;  \r\n}\r\n\r\n#acccont #accread-d i{\r\n    background-position: -43px -1202px;  \r\n}\r\n\r\n#acccont #accread-d i:hover{\r\n    background-position: -132px -1202px;  \r\n}\r\n\r\n#acccont #accread-l i{\r\n    background-position: -43px -1275px;  \r\n}\r\n\r\n#acccont #accread-l i:hover{\r\n    background-position: -132px -1275px;  \r\n}\r\n\r\n\r\n\r\n#acccont #accvol-k i{\r\n    background-position: -42px -1501px;  \r\n}\r\n\r\n#acccont #accvol-k i:hover{\r\n    background-position: -132px -1501px;  \r\n}\r\n\r\n#acccont #accvol-g i{\r\n    background-position: -42px -1574px;  \r\n}\r\n\r\n#acccont #accvol-g i:hover{\r\n    background-position: -132px -1574px;  \r\n}\r\n\r\n.accrscreen-old {\r\n    background-position: -26px -1429px;\r\n}\r\n\r\n.accrscreen-blind {\r\n    background-position: -26px -1350px;\r\n}\r\n\r\n.accrscreen-raad {\r\n    background-position: -26px -1646px;\r\n}\r\n\r\n#acccont #accclose i {\r\n    background-position: -133px -1347px;\r\n}\r\n\r\n#acccont #accywz i {\r\n    background-position: -43px -33.5px;\r\n}\r\n\r\n#acccont #accywz i:hover {\r\n    background-position: -133px -33.5px;\r\n}\r\n\r\n#acccont #acciwz i {\r\n    background-position: -42px -983.5px;\r\n}\r\n\r\n#acccont #acciwz i:hover {\r\n    background-position: -132px -983.5px;\r\n}\r\n\r\n.acccont-e div {\r\n    background-color: #505050 !important;\r\n}\r\n\r\n#acccont #accrole {\r\n    width: 90px;\r\n}\r\n\r\n#acccont #accrole i {\r\n    background-position: -28px -1347px; \r\n}\r\n\r\n#acccont #accmore i {\r\n    background-position: -134px -2073px;  \r\n}\r\n\r\n\/**********\u76f2\u9053************\/\r\n.accright #accinfor {\r\n    left: 0;\r\n}\r\n\r\n.accleft #accinfor {\r\n    right: 0;\r\n}\r\n\r\n#accface #accinfor {\r\n    z-index: 2147483646;\r\n    position: fixed;\r\n    top: 100px;\r\n    width: 198px;\r\n    bottom: 120px;\r\n    border-right: 1px solid #fff;\r\n    border-left: 1px solid #fff;\r\n    opacity: .94;\r\n    background-color: #002E53;\r\n}\r\n\r\n#accinfor #accinfor-close {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: #A71A20;\r\n    width: 100%;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    z-index: 9;\r\n}\r\n\r\n#accinfor-close i,\r\n#accinfor-close span {\r\n    display: block;\r\n    float: left;\r\n}\r\n\r\n#accinfor-close i {\r\n    height: 100%;\r\n    width: 45px;\r\n    margin-left: 10px;\r\n    background-position: 0 0;\r\n    display: none;\r\n\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n}\r\n\r\n#accinfor-close span {\r\n    height: 100%;\r\n    width: 100%;\r\n    line-height: 50px;\r\n    text-align: center;\r\n}\r\n\r\n#accinfor #accinfor-none {\r\n    width: 100%;\r\n    height: 90px;\r\n    display: none;\r\n}\r\n\r\n#accinfor #accinfor-main-wrap {\r\n    position: absolute;\r\n    top:0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 50px;\r\n    overflow: auto;\r\n}\r\n\r\n#accinfor #accinfor-main {\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n#accinfor .accinfor-title {\r\n    width: 100%;\r\n    height: 45px;\r\n    background-color: #0d4288 !important;\r\n    color: #000 !important;\r\n    text-align: center;\r\n    line-height: 45px;\r\n    font-size: 0.7em;\r\n    background-position: -221px -185px;\r\n}\r\n\r\n.accinfor-title-open {\r\n    background-position: -221px -185px !important;\r\n}\r\n\r\n#accinfor .accinfor-content {\r\n    max-height: 350px;\r\n    overflow-y: auto;\r\n    overflow-x:hidden;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n#accinfor .accinfor-content-one {\r\n    width: 100%;\r\n    font-size: .8em;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    border-bottom: 1px solid #121032;\r\n    cursor: pointer;\r\n}\r\n\r\n#accinfor .accinfor-content-w {\r\n    width: 198px;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n}\r\n\r\n#accinfor .accinfor-content-w-over {\r\n    width: 188px;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n}\r\n\r\n#accinfor .accinfor-content-e {\r\n    width: 98.5px;\r\n    height: 30px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    color: #D9E2EF !important;\r\n    float: left;\r\n    font-size: .8em;\r\n    border-bottom: 1px solid #121032;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n#accinfor .accinfor-content-e-over {\r\n    width: 93.5px;\r\n    height: 30px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    color: #D9E2EF !important;\r\n    float: left;\r\n    font-size: .8em;\r\n    border-bottom: 1px solid #121032;\r\n}\r\n\r\n#accinfor .accinfor-content-nav {\r\n    width: 1px;\r\n    height: 30px;\r\n    background-color: #121032;\r\n    float: left;\r\n}\r\n\r\n#accinfor .accinfor-content-action {\r\n    color:  #FF9027 !important;\r\n}\r\n\r\n#accinfor .accinfor-content-e:hover {\r\n    color: #FF9027 !important;\r\n}\r\n\r\n#accinfor .accinfor-content-one:hover {\r\n    color: #FF9027 !important;\r\n}\r\n\r\n#accface .xx11{\r\n    width:300px !important;\r\n}\r\n\r\n#acccont-logo{\r\n    position: relative;\r\n    width:110px;\r\n    height:66px;\r\n    margin-top: 19px;\r\n    margin-right: 30px;\r\n    margin-left: 20px;\r\n    float:left;\r\n}\r\n\r\n#acccont-logo-img {\r\n    position: absolute;\r\n    width:110px;\r\n    height:64px;\r\n    background-image:url({relurl}face\/imgs\/logo41.png);\r\n    background-repeat: no-repeat;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-transition: all .2s linear;\r\n    transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n}\r\n\r\n\/*.acccont-logo-img-hover {\r\n    top: -1px !important;\r\n    -moz-box-shadow:0px 7px 2px #333333; \r\n    -webkit-box-shadow:0px 7px 2px #333333; \r\n    box-shadow: 0px 7px 2px #333333;\r\n}*\/\r\n\r\n\r\n\/*\u6eda\u52a8\u6761*\/\r\n::-webkit-scrollbar{width:10px;}\r\n::-webkit-scrollbar-track{background-color:#fff;}\r\n::-webkit-scrollbar-thumb{background-color:#ccc;}\r\n::-webkit-scrollbar-thumb:hover {background-color:#626262}\r\n\/*::-webkit-scrollbar-thumb:active {background-color:#00aff0}*\/\r\n\r\nscrollbar-track-color {\r\n    background-color:#fff;\r\n}\r\n\r\nscrollbar-arrow-color {\r\n    background-color:#fff;\r\n}\r\n\r\nscrollbar-dark-shadow-color {\r\n    background-color:#ccc;\r\n}\r\n\r\nscrollbar-face-color {\r\n    background-color:#ccc;\r\n}\r\n\r\nscrollbar-shadow-color {\r\n    background-color:#ccc;\r\n}\r\n\r\n.accosname{\r\n    font-size:13px !important;\r\n    font-weight:bold !important;\r\n    color:#fff !important;\r\n    padding-right:6px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\/*\u4ee5\u8f69\u5934\u90e8*\/\r\n\/*.accright #acc-blindtool {\r\n    right: 60px;\r\n    left: 0;\r\n}\r\n\r\n.accleft #acc-blindtool {\r\n    left: 60px;\r\n    right: 0;\r\n}*\/\r\n\r\n#accface #acc-blindtool {\r\n    position: fixed;\r\n    z-index: 2147483646;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    box-shadow: 0 0 10px 2px rgba(0,0,0,.9);\r\n    background-color: #505050 !important;\r\n}\r\n\r\n#accface #acc-blindtool-wrap {\r\n    height: 100%;\r\n    width: 1200px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n#accface table {\r\n    display: table;\r\n    border-collapse: separate;\r\n    border-spacing: 2px;\r\n    border-color: grey;\r\n}\r\n\r\n#accface tbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n#accface tr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\n#accface td, \r\n#accface th {\r\n    display: table-cell;\r\n    vertical-align: inherit;\r\n}\r\n\r\n#acc-blindtool-logo {\r\n    position: absolute;\r\n    width: 120px;\r\n    height: 100%;\r\n    background-image: url({relurl}face\/imgs\/logo413.png?v1);\r\n    background-repeat: no-repeat;\r\n    background-position: 9px 19px;\r\n    left: 0px;\r\n    top:0;\r\n}\r\n\r\n#acc-blindtool-tool {\r\n    height: 78px;\r\n    width: 340px;\r\n    position: absolute;\r\n    right: 0px;\r\n    top:20px;\r\n}\r\n\r\n#acc-blindtool-role,\r\n#acc-blindtool-close,\r\n#acc-blindtool-help,\r\n.acc-blindtool-voice,\r\n#acc-blindtool-big,\r\n#acc-blindtool-navi {\r\n    width: 90px;\r\n    height: 75px;\r\n    background-position: -28px -1426px;\r\n    float: left;\r\n}\r\n\r\n#acc-blindtool-close,\r\n#acc-blindtool-help,\r\n#acc-blindtool-big,\r\n.acc-blindtool-voice,\r\n#acc-blindtool-navi {\r\n     width: 60px;\r\n}\r\n\r\n#acc-blindtool-navi {\r\n    background-position: -41px -907px;\r\n}\r\n\r\n#acc-blindtool-navi:hover{\r\n    background-position: -132px -907px;\r\n}\r\n\r\n#acc-blindtool-big {\r\n    right:106px;\r\n    background-position: -42px -1935px;\r\n}\r\n\r\n#acc-blindtool-big:hover{\r\n    background-position: -132px -1935px;\r\n}\r\n\r\n#acc-blindtool-close {\r\n    background-position: -131px -1346px;\r\n}\r\n#acc-blindtool-help {\r\n    margin-top: 2px;\r\n    background-position: -42px -836px;\r\n}\r\n#acc-blindtool-help:hover{\r\n    margin-top: 2px;\r\n    background-position: -133px -836px;\r\n}\r\n\r\n.acc-blindtool-voice{\r\n    margin-top: 3px;\r\n    background-position: -42px -1574px;\r\n}\r\n.acc-blindtool-voice:hover{\r\n    margin-top: 3px;\r\n    background-position: -132px -1574px;\r\n}\r\n.acc-blindtool-voice-open{\r\n    margin-top: 3px;\r\n    background-position: -42px -1501px !important;\r\n}\r\n.acc-blindtool-voice-open:hover{\r\n    margin-top: 3px;\r\n    background-position: -132px -1501px !important;\r\n}\r\n\r\n#acc-blindtool table {\r\n    position: absolute;\r\n    height: 60px;\r\n    width: 740px;\r\n    left: 130px;\r\n}\r\n\r\n#acc-blindtool .bt-item {\r\n    width: 100px;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    height: 100px;\r\n    float: left;\r\n    margin-left: 5px;\r\n}\r\n\r\n#acc-blindtool #bt-back .icon {\r\n    background-position: 0px -34px;\r\n}\r\n\r\n#acc-blindtool .bt-item .icon {\r\n    display: block;\r\n    float: left;\r\n    width: 34px;\r\n    height: 34px;\r\n    margin: 34px 0px;\r\n    cursor: pointer;\r\n}\r\n\r\n#acc-blindtool .bt-item .title {\r\n   \/* display: none;*\/\r\n    float: left;\r\n    margin-left: 6px;\r\n    cursor: pointer;\r\n    margin-top: 15px;\r\n}\r\n\r\n#acc-blindtool .title-string {\r\n    letter-spacing: 1px;\r\n\/*    display: block;*\/\r\n    cursor: pointer;\r\n    line-height: 45px;\r\n    overflow: hidden;\r\n    height: 35px;\r\n    font-weight: bold;\r\n    font-size: 18px !important;\r\n    clear: both;\r\n    color: gray;\r\n}\r\n\r\n#acc-blindtool .title-shortcut {\r\n    cursor: pointer;\r\n    display: block;\r\n    font-size: 15px !important;\r\n    line-height: 10px;\r\n    height: 35px;\r\n    clear: both;\r\n    color: gray;\r\n}\r\n.title.title-action{\r\n    display: block !important;\r\n}\r\n#acc-blindtool .title span{\r\n    margin: 0px;\r\n    float: none;\r\n}\r\n#acc-blindtool .title-action {\r\n    color: #fff;\r\n}\r\n\r\n#acc-blindtool .bt-icon label {\r\n    color: #fcfcfc;\r\n}\r\n\r\n#acc-blindtool #bt-refresh .icon {\r\n    background-position: 0px -68px;\r\n}\r\n\r\n#acc-blindtool #bt-voladd .icon {\r\n    background-position: 0px -272px;\r\n}\r\n\r\n#acc-blindtool #bt-volsub .icon {\r\n    background-position: 0px -306px;\r\n}\r\n\r\n#acc-blindtool #bt-speedadd .icon {\r\n    background-position: 0px -374px;\r\n}\r\n\r\n#acc-blindtool #bt-speedsub .icon {\r\n    background-position: 0px -408px;\r\n}\r\n\r\n#acc-blindtool #bt-pointer .icon {\r\n    background-position: 0px -340px;\r\n}\r\n\r\n#acc-blindtool #bt-continue .icon {\r\n    background-position: 0px -442px;\r\n}\r\n\r\n#acc-blindtool #bt-help {\r\n    background-position: 0px -102px;\r\n}\r\n\r\n#acc-blindtool .bt-func {\r\n    float: left;\r\n    margin: 3px 5px;\r\n    height: 34px;\r\n    width: 34px;\r\n    cursor: pointer;\r\n}\r\n\r\n#acc-blindtool .title-num {\r\n    color: #ff9027;\r\n}\r\n\r\n\/************\u4fa7\u8fb9\u680f*********\r\n\/*\u4e00\u7ec4\u63a7\u5236\u65b9\u5411*\/\r\n#accface #accnavi {\r\n    position: fixed;\r\n    top:0;\r\n    bottom: 0;\r\n    width: 60px;\r\n    background-color: #1D1F22;\r\n    z-index: 2147483646;\r\n}\r\n\r\n.accright #accnavi {\r\n    right: 0;\r\n}\r\n\r\n.accleft #accnavi {\r\n    left: 0;\r\n}\r\n\r\n.accright .accnavi-hover-e,\r\n.accright .accnavi-hoverh-e {\r\n    right: 59px;\r\n    margin-left: 0;\r\n}\r\n\r\n.accleft .accnavi-hover-e,\r\n.accleft .accnavi-hoverh-e {\r\n    left: 59px;\r\n    margin-left: 0 !important;\r\n}\r\n\r\n\r\n#accface .accnavi-e {\r\n    display: block;\r\n    width: 100%;\r\n    height:60px;\r\n    margin-top: 13px;\r\n}\r\n\r\n#accface #accnavi-title {\r\n    color: #967d5d;\r\n    margin-top: 20px !important;\r\n    background-position: -19px -27px;\r\n    height: 42px !important;\r\n    margin-bottom:30px;\r\n}\r\n\r\n#accface .accnavi-hover-e {\r\n    position: absolute;\r\n    margin-top: 20px;\r\n    width: 188px;\r\n    height: 73px;\r\n    background-color: #1D1F22;\r\n    line-height: 20px;\r\n}\r\n\r\n#accface #accnavi-eyes-hover {\r\n    top: 77px;\r\n}\r\n\r\n#accface #accnavi-eyes {\r\n    background-position: -19px -86px;\r\n}\r\n\r\n#accface #accnavi-eyes:hover {\r\n    background-position: -19px -143px; \r\n}\r\n\r\n#accface #accnavi-read-hover {\r\n    top: 144px;\r\n}\r\n\r\n#accface #accnavi-read {\r\n    background-position: -67px -86px;\r\n}\r\n\r\n#accface #accnavi-read:hover {\r\n    background-position: -67px -141px; \r\n}\r\n\r\n#accface #accnavi-aux-hover {\r\n    width: 296px;\r\n    top: 220px;\r\n    height: 95px;\r\n}\r\n\r\n#accface #accnavi-aux {\r\n   display:none;\r\n   background-position: -179px -84px;\r\n}\r\n\r\n#accface #accnavi-cgb {\r\n    text-align: center;\r\n    text-decoration: underline;\r\n    line-height: 40px;\r\n    margin-left:10px;\r\n}\r\n\r\n#accface #accnavi-guide {\r\n\tdisplay:none;\r\n    background-position: -484px -84px;\r\n}\r\n\r\n#accface #accnavi-guide-hover {\r\n    top: 290px;\r\n    height: 60px\r\n}\r\n\r\n#accface #accnavi-guide-hover a{\r\n    width: 100%;\r\n    height: 20px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    text-decoration:underline;\r\n}\r\n\r\n\r\n\r\n#accface #accnavi-guide:hover {\r\n    background-position: -484px -144px; \r\n}\r\n\r\n\r\n\r\n\r\n#accface #accnavi-help {\r\n    position: absolute;\r\n    bottom: 75px;\r\n    background-position: -235px -84px;\r\n}\r\n#accface #accnavi-help-hover {\r\n    bottom: 85px;\r\n    height: 56px\r\n}\r\n\r\n#accface #accnavi-help-hover a{\r\n    width: 100%;\r\n    height: 20px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    text-decoration:underline;\r\n}\r\n\r\n\r\n\r\n#accface #accnavi-help:hover {\r\n    background-position: -235px -139px; \r\n}\r\n\r\n\r\n#accface .accnavi-hover-e p {\r\n    padding: 0px 20px;\r\n    margin: 0;\r\n    padding-top: 17px;\r\n    line-height: 10px;\r\n}\r\n\r\n#accface #accnavi-close {\r\n    bottom: 28px;\r\n    position: absolute;\r\n    background-position: -18px -196px; \r\n}\r\n\r\n#accface #accnavi-close-hover {\r\n    bottom: 20px;\r\n}\r\n\r\n#accface .accnavi-hoverh-e{\r\n    position: fixed;\r\n    width: 140px !important;\r\n    height: 175px !important;\r\n    background-color: #152838;\r\n    z-index: 2147483646;\r\n}\r\n\r\n#accface #accnavi-khd {\r\n\tmargin-top:20px;\r\n    background-position: -293px -85px;\r\n}\r\n\r\n#accface #accnavi-khd:hover {\r\n    background-position: -293px -148px;\r\n}\r\n\r\n#accface #accnavi-khd-hover {\r\n    top: 475px;\r\n    margin-top: 0;\r\n}\r\n\r\n#accface #accnavi-khd-hover i {\r\n    background-position: -29px -160px;\r\n}\r\n\r\n\r\n\r\n\r\n#accface #accnavi-code {\r\n\tdisplay:none;\r\n    background-position: -122px -95px;\r\n    margin-top: 25px;\r\n}\r\n\r\n#accface #accnavi-code:hover{\r\n    background-position: -122px -163px;\r\n}\r\n\r\n#accface #accnavi-code-hover {\r\n    top: 380px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#accface #accnavi-code-hover i {\r\n     background-size: 100% 100%;\r\n}\r\n\r\n#accface .accnavi-hoverh-e i {\r\n    display: block;\r\n    width: 86px;\r\n    height: 86px;\r\n    margin-top: 20px;\r\n    margin-left: 25px;\r\n}\r\n\r\n#accface .accnavi-hoverh-e p {\r\n    width: 86px;\r\n    height: 20px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    margin-left: 25px;\r\n    line-height: 22px;\r\n}\r\n\r\n#acc-keyword {\r\n    display: block;\r\n    color: #fff;\r\n    float: left;\r\n    border: 0;\r\n    background-color: #1D1F22;\r\n    width: 267px;\r\n    height: 38px;\r\n    line-height: 30px;\r\n    font-size: 16px;\r\n    padding-left: 2px;\r\n    outline: none;\r\n    border: 1px solid #fff;\r\n    margin-left: 11px;\r\n    margin-top: 14px;\r\n}\r\n\r\n#acc-submit {\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 0px;\r\n    display: block;\r\n    float: right;\r\n    margin-top: -35px;\r\n    margin-right: 23px;\r\n    background-color: #1D1F22;\r\n    background-position: -455px -86px;\r\n}<\/style><!-- \u5927\u5b57\u5e55 -->\r\n<div id=\"accscreen\" class=\"white\">\r\n\t<div id=\"acctip\"><\/div>\r\n\t<i id=\"accscreen-close\" title=\"Shift+Ctrl+3\" class=\"acc-tj k11051\"><\/i>\r\n\t<i id=\"accscreen-vol\" class=\"acc-tj vol-k\" title=\"Shift+A\" style=\"display: none\"><\/i>\r\n\t<span id=\"accscreen-py\" class=\"accscreen-span\" title=\"Shift+Ctrl+2\" class=\"k11050\">\u62fc\u97f3<\/span>\r\n\t<span id=\"accscreen-jt\" title=\"Shift+Ctrl+1\" class=\"k11049\">\u7b80\u4f53<\/span>\r\n<\/div>\r\n\r\n<!-- \u8bbe\u7f6e\u5de5\u5177\u6761 -->\r\n<div id=\"acccont\" class=\"acccont-e acc-noaction\">\r\n\t<div id=\"acccont-body\" class=\"acccont-e-body\">\r\n\t\t<div id=\"acccont-logo\">\r\n\t\t\t<i id=\"acccont-logo-img\"><\/i>\r\n\t\t<\/div>\r\n\t\t\r\n\t\t<div class=\"acc-m-wrap ml8\">\r\n\t\t\t<div id=\"accreset\" class=\"acccont-body-e accreset-btn\">\r\n\t\t\t\t<span>\u91cd\u7f6e<\/span>\t\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader  k01067 cursor\" title=\"\u91cd\u65b0\u8bbe\u7f6eShift+C\"><\/i>\r\n\t\t\t<\/div>\r\n\t\t\t<!-- \u58f0\u97f3\u5f00\u5173 -->\r\n\t\t\t<div id=\"accvol-k\" class=\"acccont-body-e accvol-k-btn accvol-e acc-noaction\">\r\n\t\t\t\t<span>\u58f0\u97f3\u5f00\u5173<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor\" title=\"\u5f53\u524d\u58f0\u97f3\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u58f0\u97f3Shift+A\"><\/i>\r\n\t\t\t<\/div>\r\n\t\t\t\r\n\t\t\t<div id=\"accvol-g\" class=\"acccont-body-e accvol-g-btn accvol-e acc-noaction\">\r\n\t\t\t\t<span>\u58f0\u97f3\u5f00\u5173<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor\" title=\"\u5f53\u524d\u58f0\u97f3\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u58f0\u97f3Shift+A\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<!-- \u8bed\u901f -->\r\n\t\t\t<div id=\"accspeed-m\" class=\"acccont-body-e acccont-l-e accspeed-m-btn accspeed-e acc-noaction\" read=\"\u8bed\u901f\u6162\">\r\n\t\t\t\t<span>\u8bed\u901f<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i k01072 acc_pointer_reader cursor\" title=\"\u5f53\u524d\u8bed\u901f\u6b63\u5e38\uff0c\u8c03\u8282\u8bed\u901fShift+H\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div id=\"accspeed-k\" class=\"acccont-body-e accspeed-e acccont-l-e accspeed-k-btn acc-noaction\" read=\"\u8bed\u901f\u5feb\">\r\n\t\t\t\t<span>\u8bed\u901f<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor\" title=\"\u5f53\u524d\u8bed\u901f\u5feb\uff0c\u8c03\u8282\u8bed\u901fShift+H\"><\/i>\r\n\t\t\t<\/div>\r\n\t\t\t\r\n\t\t\t<!-- \u70b9\u8bfb\u8fde\u8bfb -->\r\n\t\t\t<div id=\"accread-d\" class=\"acccont-body-e accread-d-btn acccont-l-e accread-e acc-noaction\">\r\n\t\t\t\t<span>\u9605\u8bfb\u65b9\u5f0f<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor\" title=\"\u5f53\u524d\u4e3a\u6307\u8bfb\uff0c\u5207\u6362\u9605\u8bfb\u65b9\u5f0fShift+L\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div id=\"accread-l\" class=\"acccont-body-e accread-l-btn acccont-l-e accread-e acc-noaction\">\r\n\t\t\t\t<span>\u9605\u8bfb\u65b9\u5f0f<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor\" title=\"\u5f53\u524d\u4e3a\u8fde\u8bfb\u6a21\u5f0f\uff0c\u5207\u6362\u9605\u8bfb\u65b9\u5f0fShift+L\"><\/i>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\r\n\t\t<div class=\"acc-m-wrap ml8\">\r\n\t\t\t<div class=\"acc-default-btn acc-contrast-e acc-noaction acccont-body-e\">\r\n\t\t\t\t<span>\u914d\u8272<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor k01066\" title=\"\u5f53\u524d\u4e3a\u539f\u8272\uff0c\u5207\u6362\u914d\u8272Shift+B\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div class=\"acc-black-btn acc-contrast-e acc-noaction acccont-body-e\">\r\n\t\t\t\t<span>\u914d\u8272<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i cursor acc_pointer_reader\" title=\"\u5f53\u524d\u4e3a\u9ed1\u8272\uff0c\u5207\u6362\u914d\u8272Shift+B\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div class=\"acc-blue-btn acc-contrast-e acc-noaction acccont-body-e\">\r\n\t\t\t\t<span>\u914d\u8272<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i cursor acc_pointer_reader\" title=\"\u5f53\u524d\u4e3a\u84dd\u8272\uff0c\u5207\u6362\u914d\u8272Shift+B\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div id=\"acc-text-big\" class=\"acccont-l-e acc-text-big-btn acccont-body-e\" read=\"\u7f51\u9875\u653e\u5927\">\r\n\t\t\t\t<span>\u653e\u5927<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i k01039 acc_pointer_reader cursor\" title=\"\u7f51\u9875\u653e\u5927Shift+\u53f3\u65b9\u5411\u952e\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div id=\"acc-text-small\" class=\"acccont-l-e  acc-text-small-btn acccont-body-e\" read=\"\u7f51\u9875\u7f29\u5c0f\">\r\n\t\t\t\t<span>\u7f29\u5c0f<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader k01037 cursor\" title=\"\u7f51\u9875\u7f29\u5c0fShift+\u5de6\u65b9\u5411\u952e\"><\/i>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\r\n\t\t\r\n\t\t<div class=\"acc-m-wrap ml8\">\r\n\t\t\t<div id=\"accmouse\" class=\"acccont-body-e accmouse-btn acccont-l-e\" read=\"\u5927\u9f20\u6807\">\r\n\t\t\t\t<span>\u9f20\u6807\u6837\u5f0f<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i k01068 acc_pointer_reader cursor\" title=\"\u5f53\u524d\u5927\u9f20\u6807\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5927\u9f20\u6807Shift+D\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div id=\"acccross\" class=\"acccont-body-e acccross-btn acccont-l-e\">\r\n\t\t\t\t<span>\u5341\u5b57\u7ebf<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i k01083 acc_pointer_reader cursor\" title=\"\u5f53\u524d\u5341\u5b57\u7ebf\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5341\u5b57\u7ebfShift+S\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div id=\"accbig\" class=\"acccont-body-e accbig-btn acccont-l-e\">\r\n\t\t\t\t<span>\u5927\u5b57\u5e55<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i k01075 acc_pointer_reader cursor\" title=\"\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5927\u5b57\u5e55Shift+K\"><\/i>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\r\n\t\t<div class=\"acc-m-wrap ml8\">\r\n\t\t\t<div id=\"acchelpbook\" class=\"acccont-body-e acchelpbook-btn\">\r\n\t\t\t\t<span>\u8bf4\u660e<\/span>\r\n\t\t\t\t<a href=\"\" target=\"_blank\" class=\"\">\r\n\t\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor\"  title=\"\u5f00\u542f\u64cd\u4f5c\u8bf4\u660eShift+\u95ee\u53f7\u952e\"><\/i>\r\n\t\t\t\t<\/a>\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"accmore\" class=\"acccont-body-e\">\r\n\t\t\t\t<span>\u66f4\u591a\u670d\u52a1<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor\" title=\"\u5f00\u542f\u66f4\u591a\u670d\u52a1Shift+V\"><\/i>\r\n\t\t\t<\/div>\t\t\t\t\t\t\r\n\t\t\t<div id=\"accrole\" class=\"accread-btn acccont-body-e accrole-hover k01050\">\r\n\t\t\t\t<span>\u8bfb\u5c4f\u4e13\u7528<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i cursor\" title=\"\u8bfb\u5c4f\u4e13\u7528\uff1a\u5feb\u6377\u952eShift+2\uff0c\u9002\u7528\u4e8e\u4f7f\u7528\u8bfb\u5c4f\u8f6f\u4ef6\u7684\u7528\u6237\uff0c\u82e5\u65e0\u8bfb\u5c4f\u8f6f\u4ef6\u53ef\u901a\u8fc7Shift+A\u5f00\u542f\u58f0\u97f3\u83b7\u53d6\u8bed\u97f3\u63d0\u793a\"><\/i>\r\n\t\t\t<\/div>\r\n\r\n\t\t\t<div id=\"accclose\" class=\"acccont-body-e\">\r\n\t\t\t\t<span>\u9000\u51fa\u670d\u52a1<\/span>\r\n\t\t\t\t<i class=\"acc-sh acccont-body-i acc_pointer_reader cursor k01027 accclose-btn\" title=\"\u9000\u51fa\u670d\u52a1Shift+Esc\"><\/i>\r\n\t\t\t<\/div>\t\t\t\r\n\t\t<\/div>\r\n\t<\/div>\t\r\n<\/div>\r\n\r\n<!-- \u4ee5\u8f69\u5934\u90e8 -->\r\n<div id=\"acc-blindtool\" class=\"acc-noaction\">\r\n\t<div id=\"acc-blindtool-wrap\"> \r\n\t\t<table>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div id=\"dt-type\" class=\"bt-item\">\r\n\t\t\t\t\t\t\t<span class=\"title title-action\">\r\n\t\t\t\t\t\t\t\t<p class=\"title-first title-action\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title-string acc-blindtool title-action\">\u9875\u9762\u7c7b\u578b<\/span>\r\n\t\t\t\t\t\t\t\t<\/p>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"title-shortcut title-action\"><\/p>\r\n\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div id=\"bt-dh\" class=\"bt-item\">\r\n\t\t\t\t\t\t\t<span class=\"title\">\r\n\t\t\t\t\t\t\t\t<p class=\"title-first\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title-string acc-blindtool\">\u5bfc\u822a\u533a<\/span>\r\n\t\t\t\t\t\t\t\t<\/p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<p class=\"title-shortcut\">ALT+1<\/p>\r\n\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div id=\"bt-sc\" class=\"bt-item\">\r\n\t\t\t\t\t\t\t<span class=\"title\">\r\n\t\t\t\t\t\t\t\t<p class=\"title-first\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title-string\">\u89c6\u7a97\u533a<\/span>\r\n\t\t\t\t\t\t\t\t<\/p>\r\n\t\t\t\t\t\t\t\t<p class=\"title-shortcut\">ALT+2<\/p>\r\n\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/td>\r\n\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div id=\"bt-jh\" class=\"bt-item\">\r\n\t\t\t\t\t\t\t<span class=\"title\">\r\n\t\t\t\t\t\t\t\t<p class=\"title-first\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title-string\">\u4ea4\u4e92\u533a<\/span>\r\n\t\t\t\t\t\t\t\t<\/p>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"title-shortcut\">ALT+4<\/p>\r\n\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/td>\r\n\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div id=\"bt-lb\" class=\"bt-item\">\r\n\t\t\t\t\t\t\t<span class=\"title\">\r\n\t\t\t\t\t\t\t\t<p class=\"title-first\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title-string\">\u5217\u8868\u533a<\/span>\r\n\t\t\t\t\t\t\t\t<\/p>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"title-shortcut\">ALT+5<\/p>\r\n\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/td>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div id=\"bt-zw\" class=\"bt-item\">\r\n\t\t\t\t\t\t\t<span class=\"title\">\r\n\t\t\t\t\t\t\t\t<p class=\"title-first\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title-string\">\u6b63\u6587\u533a<\/span>\r\n\t\t\t\t\t\t\t\t<\/p>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"title-shortcut\">ALT+6<\/p>\r\n\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/td>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div id=\"bt-fw\" class=\"bt-item\">\r\n\t\t\t\t\t\t\t<span class=\"title\">\r\n\t\t\t\t\t\t\t\t<p class=\"title-first\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"title-string\">\u670d\u52a1\u533a<\/span>\r\n\t\t\t\t\t\t\t\t<\/p>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"title-shortcut\">ALT+7<\/p>\r\n\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/td>\r\n\t\t\t\t<\/tr>\r\n\t\t\t<\/tbody>\r\n\t\t<\/table>\r\n\t\t\r\n\t\t<div id=\"acc-blindtool-logo\"><\/div>\r\n\t\t\r\n\t\t<div id=\"acc-blindtool-tool\">\r\n\t\t\t<div class=\"acc-blindtool-voice acc-sh accclose-btn cursor\" title=\"\u5f53\u524d\u58f0\u97f3\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u58f0\u97f3Shift+A\"><\/div>\r\n\t\t\t<a id=\"acc-blindtool-help2\" href=\"\" target=\"_blank\"><div id=\"acc-blindtool-help\" class=\"acc-sh accclose-btn cursor\" title=\"\u5f00\u542f\u64cd\u4f5c\u8bf4\u660eShift+\u95ee\u53f7\u952e\"><\/div><\/a>\r\n\t\t\t<div id=\"acc-blindtool-role\" class=\"accaux-btn accrole-hover acc-sh k01049\" title=\"\u8001\u4eba\u670d\u52a1\uff1a\u5feb\u6377\u952eShift+1\uff0c\u9002\u7528\u4e8e\u89c6\u529b\u548c\u6587\u5316\u8ba4\u77e5\u5e95\u4e0b\u7684\u4eba\u7fa4\"><\/div>\r\n\t\t\t<div id=\"acc-blindtool-big\" title=\"\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u5927\u5b57\u5e55Shift+K\" class=\"acc-sh accbig-btn cursor\"><\/div>\r\n\t\t\t<div id=\"acc-blindtool-close\" class=\"accclose-btn acc-sh cursor\" title=\"\u9000\u51fa\u670d\u52a1Shift+Esc\"><\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n<div class=\"switchtool\"><span class=\"closetool\" title=\"\u5934\u90e8\u663e\u793a\u5f00\u5173Shift+Z\"><span>&nbsp;\u6536\u8d77<\/span><\/span><\/div>\r\n<ul id=\"accnavi\" class=\"acc-noaction\">\r\n\t<a target=\"_self\" href=\"javascript:void(0)\" id=\"accnavi-title\" class=\"acc-dz cursor\">\r\n\t<\/a>\r\n\t\r\n\t<li id=\"accnavi-eyes\" class=\"acc-dz accnavi-e cursor\" mask=\"accnavi-eyes-hover\"><\/li>\r\n\t<li id=\"accnavi-eyes-hover\" class=\"accnavi-hover-e accnavi-e acc-noaction\" mask=\"accnavi-eyes-hover\">\r\n\t\t<p>\u70b9\u51fb\u56fe\u6807\u8fdb\u5165\u8001\u4eba\u7248<\/p>\r\n\t\t<p>Shift+1<\/p>\r\n\t<\/li>\r\n\r\n\t<li id=\"accnavi-read\" class=\"acc-dz accnavi-e cursor\" mask=\"accnavi-read-hover\"><\/li>\r\n\t<li id=\"accnavi-read-hover\" class=\"accnavi-hover-e accnavi-e acc-noaction\" mask=\"accnavi-read-hover\">\r\n\t\t<p>\u70b9\u51fb\u56fe\u6807\u8fdb\u5165\u8bfb\u5c4f\u7248<\/p>\r\n\t\t<p>Shift+2<\/p>\r\n\t<\/li>\r\n\t\r\n\t<a id=\"accnavi-aux\" class=\"acc-dz accnavi-e cursor\" mask=\"accnavi-aux-hover\"><\/a>\r\n\t<li id=\"accnavi-aux-hover\" class=\"accnavi-hover-e accnavi-e acc-noaction\" mask=\"accnavi-aux-hover\">\r\n\t\t<form id=\"acc-search-form\" target=\"_blank\" method=\"post\" accept-charset=\"utf-8\" action=\"\">\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t<input id=\"acc-keyword\" name=\"key\" type=\"text\" maxlength=\"25\" value=\"\">\r\n\t\t\t<input id=\"acc-submit\" class=\"cursor acc-dz\" type=\"submit\" value=\"\"><\/input>\r\n\t\t<\/form>\r\n\r\n\t\t<!-- <a id=\"accnavi-cgb\" href=\"\" class=\"k01071\">\u70b9\u51fb\u8fdb\u5165\u641c\u7d22\u9996\u9875(Shift+G)<\/a> -->\r\n\t<\/li>\r\n\t\r\n\t<a href=\"#\" target=\"_blank\" id=\"accnavi-guide\" class=\"acc-dz accnavi-e cursor\" mask=\"accnavi-guide-hover\"><\/a>\r\n\t<li id=\"accnavi-guide-hover\" class=\"accnavi-hover-e accnavi-e acc-noaction\" mask=\"accnavi-guide-hover\">\r\n\t\t<a id=\"accnavi-guide-a1\" class=\"cursor k01084\" href=\"#\" target=\"_blank\">\u7cfb\u7edf\u5bfc\u822a&nbsp;Shift+T<\/a>\r\n\t<\/li>\r\n\t\r\n\r\n\r\n\t\r\n\t<li id=\"accnavi-code\" class=\"acc-dz accnavi-e\" mask=\"accnavi-code-hover\"><\/li>\r\n\t<li id=\"accnavi-code-hover\" class=\"accnavi-hoverh-e accnavi-e acc-noaction\" mask=\"accnavi-code-hover\">\r\n\t\t<i><\/i>\r\n\t\t<p>\u79fb\u52a8APP Android<\/p>\r\n\t<\/li>\r\n\t\r\n\t<li id=\"accnavi-khd\" class=\"acc-dz accnavi-e\" mask=\"accnavi-khd-hover\"><\/li>\r\n\t<li id=\"accnavi-khd-hover\" class=\"accnavi-hoverh-e accnavi-e cursor acc-noaction\" mask=\"accnavi-khd-hover\">\r\n\t\t<a style=\"display:inline;\" id=\"acc-khd\" href=\"#\" target=\"_blank\">\r\n\t\t<i class=\"acc-tj\"><\/i>\r\n\t\t<p>\u5ba2\u6237\u7aef\u4e0b\u8f7d Windows<\/p>\r\n\t\t<\/a>\r\n\t<\/li>\r\n\t\r\n\t\r\n\r\n\t<!--<a href=\"#\" target=\"_blank\" id=\"accnavi-help\" class=\"acc-dz accnavi-e cursor\" mask=\"accnavi-help-hover\"><\/a>-->\r\n\t<li id=\"accnavi-help-hover\" class=\"accnavi-hover-e accnavi-e acc-noaction\" mask=\"accnavi-help-hover\">\r\n\t\t<a id=\"accnavi-help-a1\" class=\"cursor k01081\" href=\"\" target=\"_blank\">\u610f\u89c1\u53cd\u9988&nbsp;Shift+Q<\/a>\r\n\t\t<!--<a id=\"accnavi-help-a2\" class=\"cursor\" href=\"\" target=\"_blank\">\u5e2e\u52a9\u8bf4\u660e&nbsp;Shift+?<\/a>-->\r\n\t<\/li>\r\n\r\n\t<li id=\"accnavi-close\" class=\"acc-dz accnavi-e cursor\" mask=\"accnavi-close-hover\"><\/li>\r\n\t<!-- <li id=\"accnavi-close-hover\" class=\"accnavi-hover-e accnavi-e acc-noaction\" mask=\"accnavi-close-hover\">\r\n\t\t<p>\u70b9\u51fb\u56fe\u6807\u5173\u95ed\u4fa7\u8fb9\u680f<\/p>\r\n\t\t<p>Shift+V<\/p>\r\n\t<\/li> -->\r\n<\/ul><script type=\"text\/javascript\">function accMianInit() {\r\n        accJudgeSetState();\r\n\r\n        accSetClickEvent();\r\n\r\n        accHrefGet();\r\n\r\n        accSideHover();\r\n\r\n        accSideClick();\/\/ \u4fa7\u8fb9\u680f\u70b9\u51fb\u4e8b\u4ef6\r\n\r\n\t\tif(parseInt(window.assist.module.face.state.blind)==1||parseInt(window.assist.module.face.state.blind)==2){\r\n            window.assie(\".switchtool\").hide();\r\n\t\t}\r\n\t\tif(window.hidebar==1){\r\n\t\t\tswitchTopBar(0);\r\n\t\t}\r\n\t\tif(window.assist.module.wza.state.screen==0){\r\n\t\t\t$(\"#acc_screen_space\").css(\"height\",\"0px\");\r\n\t\t}\r\n\r\n};\r\n\r\nfunction accSideClick() {\r\n\twindow.assie('#accnavi-help').off('click').on('click', function() {\r\n\t\tvar mask = window.assie('#accnavi-help-hover').css('display');\r\n\t\tif (mask == 'block') \r\n\t\t\twindow.assie('#accnavi-help-hover').addClass('acc-noaction');\r\n\r\n\t\tif (mask == 'none') \r\n\t\t\twindow.assie('#accnavi-help-hover').removeClass('acc-noaction');\r\n\t});\r\n\r\n\twindow.assie('#accnavi-eyes').off('click').on('click', function() {\r\n\t\twindow.assie('#acc-blindtool-role').trigger('click');\r\n\t});\r\n\r\n\twindow.assie('#accnavi-read').off('click').on('click', function() {\r\n\t\twindow.assie('#accrole').trigger('click');\r\n\t});\r\n\r\n\twindow.assie('#accmore').off('click').on('click', function() {\r\n\t\tvar mask = window.assie('#accnavi').css('display');\r\n\t\tif (mask == 'none') {\r\n\t\t\twindow.assie('#accnavi').removeClass('acc-noaction');\r\n\t\t\twindow.assie('#accscreen').removeClass('acc-re');\r\n\t\t\twindow.accside = window.assist.module.cookie.set('accside', 1);\r\n\t\t\taccJudgeDirection('open');\r\n\t\t}\r\n\r\n\t\tif (mask == 'block')\r\n\t\t\twindow.assie('#accnavi-close').trigger('click');\r\n\t});\r\n\r\n\twindow.assie('#accnavi-close').off('click').on('click', function() {\r\n\t\twindow.assie('#accnavi').addClass('acc-noaction');\r\n\t\twindow.accside = window.assist.module.cookie.set('accside', 0);\r\n\t\taccJudgeDirection('close');\r\n\t});\r\n\r\n   window.assie('.acc-blindtool-voice').off('click').on('click', function() {\r\n        var read = window.assist.module.voice.state.read;\r\n\r\n\r\n        if (!read){\r\n            window.assie('.acc-blindtool-voice').addClass('acc-blindtool-voice-open');\r\n            window.assie('#accscreen-vol').click();\r\n            \/\/window.assist.module.voice.open(1);\r\n            \/\/window.assie('.accvol-g-btn').find('i').click();\r\n        }\r\n        else\r\n        {\r\n            window.assie('.acc-blindtool-voice').removeClass('acc-blindtool-voice-open');\r\n            window.assie('#accscreen-vol').click();\r\n            \/\/window.assie('.accvol-k-btn').find('i').click();\r\n        }\r\n    });\r\n    window.assie('.switchtool > span').off('click').on('click', function() {\r\n        switchTopBar();\r\n\t});\r\n\r\n\r\n};\r\n\r\nfunction accSideHover() {\r\n\twindow.assie('.accnavi-e').off('mouseover').on('mouseover', function() {\r\n\t\tvar mask = window.assie(this).attr('mask'),\r\n\t\t\ttarget = window.assie('#'+mask);\r\n\t\t\ttarget.removeClass('acc-noaction');\r\n\t}).off('mouseleave').on('mouseleave', function() {\r\n\t\tvar mask = window.assie(this).attr('mask'),\r\n\t\t\ttarget = window.assie('#'+mask);\r\n\t\t\ttarget.addClass('acc-noaction');\r\n\t});\r\n};\r\n\r\nfunction accJudgeDirection(type) {\r\n\twindow.accDirection = window.assist.module.face.state.side;\r\n\tif (type == 'open') {\r\n\t\twindow.assie('#accface').removeClass('accleft accright').addClass('acc' + window.accDirection);\r\n\t}\r\n\r\n\tif (type == 'close') {\r\n\t\twindow.assie('#accface').removeClass('accleft accright')\r\n\t}\r\n};\r\n\r\nfunction accHrefGet() {\r\n\twindow.blind=window.assist.module.face.state.blind;\r\n\r\n\tvar\r\n\t\thost = window.acchost,\r\n\t\tsid = window.asssid;\r\n\r\n\twindow.blind=window.assist.module.face.state.blind;\r\n\r\n\tvar\r\n\r\n\t\tnews = host + 'yxsm\/platform\/?tno=go&choice=news&sid=' + sid + '&blind=' + window.blind,\r\n\t\tsitenav = host + 'yxsm\/platform\/?tno=go&choice=sitenav&sid=' + sid + '&wzaid='+window.assist.module.config.wid+'&blind=' + window.blind,\r\n\t\tservice = host + 'yxsm\/platform\/?tno=go&choice=service&sid=' + sid + '&blind=' + window.blind,\r\n\r\n\t\thelp = host+'wzahelp\/index.htm?wzaid='+window.assist.module.config.wid+'&sid=' + sid + '&blind=' + window.blind, \/\/ \u76f2\u4eba\u5728\u7ebf\r\n\t\thelp2 = host+'wzahelp\/index2.htm?wzaid='+window.assist.module.config.wid+'&sid=' + sid + '&blind=' + window.blind, \/\/ \u8bfb\u5c4f\u5728\u7ebf\r\n\t\tpc = host + (window.assist.module.face.myPlatform?'client\/':'yxsm\/?m=api&a=loadpc&sid=' + sid),\r\n\t\tpt = 'javascript:void(0)',\/\/host + '?wzaid='+window.assist.module.config.wid+'&sid='+sid+'&blind='+ window.blind, \/\/ \u5e73\u53f0\r\n\t\tweb = host + 'yxsm\/web\/?tno=1&wzaid='+window.assist.module.config.wid+'&sid=' + sid + '&blind=' + window.blind, \/\/\u91cd\u6784\u7248\r\n\t\tad = host+'help\/?wzaid='+window.assist.module.config.wid+'&sid=' + sid + '&blind='+ window.blind,\/\/\u53cd\u9988\r\n\t\tapp = host + 'yxsm\/?m=qr&a=apk&wzaid='+window.assist.module.config.wid+'&sid='+sid+(window.assist.module.face.myPlatform?\"&pt=1\":\"\"),\/\/ app\u4e8c\u7ef4\u7801\u5730\u5740\r\n\t\taction = host+'yxsm\/index.php?m=search&a=query&sid='+sid+'&wzaid='+window.assist.module.config.wid+'&blind='+ window.blind,\r\n\t\tcode = host + 'yxsm\/?m=qr&a=mob&wzaid='+window.assist.module.config.wid+'&sid='+sid+\"&wzaid=\"+window.assist.module.config.wid;\/\/\u79fb\u52a8\u7f51\u7ad9\u4e8c\u7ef4\u7801\u5730\u5740\r\n\t\tif(window.SITEINI!=undefined&&window.SITEINI[sid]!=undefined&&window.SITEINI[sid].bhelp!=undefined&&window.SITEINI[sid].bhelp!=\"\"){\r\n            help=window.SITEINI[sid].bhelp;\r\n\t\t}\r\n\t\tif(window.SITEINI!=undefined&&window.SITEINI[sid]!=undefined&&window.SITEINI[sid].ohelp!=undefined&&window.SITEINI[sid].ohelp!=\"\"){\r\n            help2=window.SITEINI[sid].ohelp;\r\n\t\t}\r\n\r\n\r\n\tif (window.accplatform)\r\n\t\tcode = host + 'yxsm\/?m=qr&a=pltm';\/\/\u79fb\u52a8\u5e73\u53f0\u7684\u4e8c\u7ef4\u7801\u5730\u5740\r\n\r\n\tif (window.proxy != 0) var proxy = host+\"yxsm\/?wzaid=\"+window.assist.module.config.wid+\"&sid=\"+sid+\"&m=proxy&a=show&q_url=\"+escape(window.assist.module.config.url);\r\n\r\n\twindow.assie('.acchelpbook-btn').find('a').attr('href', help);\r\n\twindow.assie('#acc-khd').attr('href', pc);\r\n\twindow.assie('#accnavi-help,#accnavi-help-a1').attr('href', ad);\r\n\twindow.assie('#accnavi-help-a2').attr('href', help);\r\n\twindow.assie('#acc-blindtool-help2').attr('href', help2);\r\n\twindow.assie('#accnavi-guide,#accnavi-guide-a1').attr('href', sitenav);\r\n\r\n\twindow.assie('#accnavi-title').attr('href', pt);\r\n\twindow.assie('#accnavi-cgb').attr('href', web).css(\"display\",(window.assist.module.face.myPlatform?\"none\":\"inline\"));\r\n\twindow.assie('#acc-search-form').attr('action', action);\r\n\r\n\twindow.assie('#accnavi-code-hover').find('i').css('backgroundImage', 'url('+app+')');\r\n\twindow.assie('#accnavi-code-hover').find('i').get(0).style.filter = \"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"+app+\",  sizingMethod='scale')\";\r\n\r\n\r\n};\r\n\r\nfunction accJudgeSetState() {\r\n\tvar accLink = window.assie('#' + window.accLinkId);\r\n\tif(accLink.length<1) try{accLink= window.assie(\"iframe,frame\").contents().find(\"#\" +window.accLinkId);}catch(e){}\r\n\r\n\t\/\/ \u65e0\u969c\u788d\u94fe\u63a5\r\n\tif(accLink.length > 0) {accLinkClickEvent(accLink);}\r\n\telse{\r\n\t\taccLinkClickEvent(accLink);\r\n\t\twindow.assie('iframe,frame').bind(\"load\",function(){\r\n\t\t\tvar db=null;try{db=window.assie(this).contents().get(0).body;}catch(e){}\r\n\t\t\tif(db)accLink = window.assie(db).find('#' + window.accLinkId);\r\n\t\t\tif(accLink.length>0) accLinkClickEvent(accLink);\r\n\t\t});\r\n\t}\r\n\r\n\tvar service=window.assist.module.face.state.service;\r\n\tif(service&&service.length>0&&service[0]!=\"0\")window.assie('#accnavi-aux').css(\"display\",\"block\");\r\n\tif(service&&service.length>1&&service[1]!=\"0\")window.assie('#accnavi-guide').css(\"display\",\"block\");\r\n\tif(service&&service.length>2&&service[2]!=\"0\")window.assie('#accnavi-code').css(\"display\",\"block\");\r\n\tvar servicePos={\r\n\t\t\t\t\t\t\t\"111\":{guide:290,code:380,khd:475},\r\n\t\t\t\t\t\t\t\"110\":{khd:380},\r\n\t\t\t\t\t\t\t\"101\":{khd:380,code:290},\r\n\t\t\t\t\t\t\t\"100\":{khd:300},\r\n\t\t\t\t\t\t\t\"011\":{guide:220,code:290,khd:380},\r\n\t\t\t\t\t\t\t\"010\":{guide:220,khd:300},\r\n\t\t\t\t\t\t\t\"001\":{code:230,khd:320}\r\n\t\t\t};\r\n\tif(service&&service!=\"111\"){\r\n\t\tfor(var k in servicePos[service]){\r\n\t\t\twindow.assie('#accnavi-'+k+\"-hover\").css(\"top\",servicePos[service][k]+\"px\");\r\n\t\t}\r\n\t}\r\n\r\n\r\n\taccSetPara();\r\n\r\n\t\/\/ \u8bb0\u5f55\u5927\u5b57\u5e55\r\n\tvar screen = window.assist.module.wza.state.screen,\r\n\t\tlang = window.assist.module.wza.state.lang;\r\n\r\n\r\n\tif (lang == 'zh') {\r\n\t\twindow.assie('#accscreen-jt').text('\u7b80\u4f53');\r\n\t}\r\n\telse if (lang == 'tw') {\r\n\t\twindow.assie('#accscreen-jt').text('\u7e41\u4f53');\r\n\t}\r\n\r\n\tif (screen) {\r\n\t\twindow.assist.module.wza.screen.open(1);\r\n\t\twindow.assie('.accbig-btn').find('i').attr('title', '\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5f00\u542f\uff0c\u5173\u95edShift+K');\r\n\t}\r\n\r\n\t\/\/ \u5224\u65ad\u4e3b\u9898\r\n\tvar theme = window.assist.module.wza.state.theme;\r\n\tif (theme == 'default') {\r\n\t\twindow.assie('.acc-default-btn').removeClass('acc-noaction');\r\n\t}\r\n\telse if (theme == 'black') {\r\n\t\twindow.assie('.acc-black-btn').removeClass('acc-noaction');\r\n\t}\r\n\telse if (theme == 'blue') {\r\n\t\twindow.assie('.acc-blue-btn').removeClass('acc-noaction');\r\n\t}\r\n\r\n\t\/\/\u5224\u65ad\u8bed\u901f\r\n\tvar speed = window.assist.module.voice.state.speed;\r\n\tif (speed) {\r\n\t\twindow.assie('.accspeed-k-btn').removeClass('acc-noaction');\r\n\t}\r\n\telse {\r\n\t\twindow.assie('.accspeed-m-btn').removeClass('acc-noaction');\r\n\t}\r\n\r\n\t\/\/ \u5224\u65ad\u53ea\u8bfb\u8fde\u8bfb\r\n\tvar read = window.assist.module.voice.mode();\r\n\tif (read == 1) {\r\n\t\twindow.assie('.accread-d-btn').removeClass('acc-noaction');\r\n\t\twindow.assie('#bt-pointer').removeClass('acc-noaction');\r\n\t}\r\n\telse if (read == 2) {\r\n\t\twindow.assie('.accread-l-btn').removeClass('acc-noaction');\r\n\t\twindow.assie('#bt-continue').removeClass('acc-noaction');\r\n\t}\r\n\r\n\twindow.assie('.accvol-k-btn').removeClass('acc-noaction');\r\n\r\n\t\/\/ \u5224\u65ad\u5927\u9f20\u6807\r\n\tvar cursor = window.assist.module.wza.state.cursor;\r\n\tif (cursor) {\r\n\t\twindow.assie('.accmouse-btn').find('i').attr('title','\u5f53\u524d\u5927\u9f20\u6807\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u5927\u9f20\u6807Shift+D');\r\n\t}\r\n\telse {\r\n\t\twindow.assie('.accmouse-btn').find('i').attr('title','\u5f53\u524d\u5927\u9f20\u6807\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5927\u9f20\u6807Shift+D');\r\n\t}\r\n\r\n\t\/\/ \u5341\u5b57\u7ebf\r\n\tvar cross = window.assist.module.wza.state.ruler;\r\n\tif (cross) {\r\n\t\twindow.assie('.acccross-btn').find('i').attr('title','\u5f53\u524d\u5341\u5b57\u7ebf\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u5341\u5b57\u7ebfShift+S');\r\n\t}\r\n\telse {\r\n\t\twindow.assie('.acccross-btn').find('i').attr('title','\u5f53\u524d\u5341\u5b57\u7ebf\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5341\u5b57\u7ebfShift+S');\r\n\t}\r\n\r\n\t\/\/\u5224\u8bfb\u5728\u7ebf\u8bfb\u5c4f\r\n\tvar blind = window.blind;\r\n\tif (blind == 1) {\r\n\t\taccRepairbodyHeight(window.accch); \/\/ \u5934\u90e8 \u53f3\u4fa7\u8fb9\u680f\r\n\t\taccRemoveAccClass('old');\r\n\t}\r\n\telse if(blind == 2){\r\n\t\taccRemoveAccClass('read');\r\n\t\taccRepairbodyHeight(window.accch);\r\n\t}\r\n\r\n\r\n\r\n\r\n\tvar read = window.assist.module.voice.state.read;\r\n\twindow.assie('#accface .accvol-e').addClass('acc-noaction');\r\n\twindow.assie('#accscreen-vol').removeClass('vol-k vol-g');\r\n\r\n    var read = window.assist.module.voice.state.read;\r\n\tif (read) {\r\n\t\twindow.assie('.accvol-k-btn').removeClass('acc-noaction');\r\n\t\twindow.assie('#accscreen-vol').addClass('vol-k');\r\n\t}\r\n\telse {\r\n\t\twindow.assie('.accvol-g-btn').removeClass('acc-noaction');\r\n\t\twindow.assie('#accscreen-vol').addClass('vol-g');\r\n\t}\r\n};\r\n\r\nfunction accSetPara(type) {\r\n\t\/\/ \u8bb0\u5f55\u8bbe\u7f6e\u5de5\u5177\u6761\u662f\u5426\u6253\u5f00\r\n \tvar accread = window.assist.module.cookie.get('accread'),\r\n \t\taccside = window.assist.module.cookie.get('accside'),\r\n\t\tbar = window.assist.module.face.state.bar; \/\/ \u4fa7\u8fb9\u680f\r\n\r\n \tif (bar == 0) {\r\n \t\twindow.assie('#accmore').addClass('acc-noaction');\r\n \t}\r\n\r\n \tif (bar == 1 && accside) {\r\n \t\twindow.assie('#accmore').removeClass('acc-noaction');\r\n \t\twindow.assie('#accnavi').removeClass('acc-noaction');\r\n \t\taccJudgeDirection('open');\r\n \t}\r\n};\r\n\r\nfunction userRunAcc(){\r\n\twindow.assie('#acccont').removeClass('acc-noaction');\r\n\twindow.assist.module.face.setParam(\"bar\",1);\r\n\taccRepairbodyHeight(window.accch);\r\n\twindow.assist.module.face.blind(1);\r\n\twindow.assie('#accvol-g').find('i').trigger('click');\r\n\taccHrefGet();\/\/\u91cd\u65b0\u5b9a\u4e49\u94fe\u63a5\u56e0\u4e3ablind\u6570\u503c\u4f1a\u6539\u53d8\r\n\tif(typeof(window.onHeader)==\"function\") window.onHeader(1);\r\n}\r\n\r\nfunction accLinkClickEvent(target, type) {\r\n\t\/\/target.die('click').live('click', function(e) {\r\n\t\/\/\tif(this.onclick) return;\r\n\t\/\/\tuserRunAcc();\r\n\t\/\/});\r\n};\r\n\r\nfunction accSetClickEvent() {\r\n\twindow.assie('.accreset-btn').find('i').off('click').on('click', function() {\r\n\t\taccReset();\r\n\t});\r\n\r\n\twindow.assie('.acc-text-big-btn').find('i').off('click').on('click', function() {\r\n\t\tvar zoom = window.assist.module.wza.state.zoom;\r\n\t\tif(zoom == 1.3) {\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u653e\u81f3\u6700\u5927');\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (zoom == 1) {\r\n\t\t\twindow.assist.module.wza.zoom(1.1);\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u653e\u5927');\r\n\t\t}\r\n\t\telse if (zoom == 1.1) {\r\n\t\t\twindow.assist.module.wza.zoom(1.2);\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u653e\u5927');\r\n\t\t}\r\n\t\telse if (zoom == 1.2) {\r\n\t\t\twindow.assist.module.wza.zoom(1.3);\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u653e\u81f3\u6700\u5927');\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('.acc-text-small-btn').find('i').off('click').on('click', function() {\r\n\t\tvar zoom = window.assist.module.wza.state.zoom;\r\n\t\tif (zoom == 1) {\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u7f29\u81f3\u6700\u5c0f');\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (zoom == 1.3) {\r\n\t\t\twindow.assist.module.wza.zoom(1.2);\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u7f29\u5c0f');\r\n\t\t}\r\n\t\telse if (zoom == 1.2) {\r\n\t\t\twindow.assist.module.wza.zoom(1.1);\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u7f29\u5c0f');\r\n\t\t}\r\n\t\telse if (zoom == 1.1) {\r\n\t\t\twindow.assist.module.wza.zoom(1);\r\n\t\t\taccClickRead('\u9875\u9762\u5df2\u7f29\u81f3\u6700\u5c0f');\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('.acccross-btn').find('i').off('click').on('click', function() {\r\n\t\tvar ruler = window.assist.module.wza.state.ruler;\r\n\t\tif (ruler) {\r\n\t\t\twindow.assist.module.wza.ruler(0);\r\n\t\t\taccClickRead('\u5341\u5b57\u7ebf\u5df2\u5173\u95ed');\r\n\t\t\twindow.assie('.acccross-btn').find('i').attr('title', '\u5f53\u524d\u5341\u5b57\u7ebf\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5341\u5b57\u7ebfShift+S');\r\n\t\t}\r\n\t\telse {\r\n\t\t\twindow.assist.module.wza.ruler(1);\r\n\t\t\taccClickRead('\u5341\u5b57\u7ebf\u5df2\u5f00\u542f');\r\n\t\t\twindow.assie('.acccross-btn').find('i').attr('title', '\u5f53\u524d\u5341\u5b57\u7ebf\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u5341\u5b57\u7ebfShift+S');\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('.accmouse-btn').find('i').off('click').on('click', function() {\r\n\t\tvar cursor = window.assist.module.wza.state.cursor;\r\n\r\n\t\tif (cursor) {\r\n\t\t\twindow.assist.module.wza.cursor(0);\r\n\t\t\taccClickRead('\u5927\u9f20\u6807\u5df2\u5173\u95ed');\r\n\t\t\twindow.assie('.accmouse-btn').find('i').attr('title', '\u5f53\u524d\u5927\u9f20\u6807\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5927\u9f20\u6807Shift+D');\r\n\t\t}\r\n\t\telse {\r\n\t\t\taccClickRead('\u5927\u9f20\u6807\u5df2\u5f00\u542f');\r\n\t\t\twindow.assist.module.wza.cursor(1);\r\n\t\t\twindow.assie('.accmouse-btn').find('i').attr('title', '\u5f53\u524d\u5927\u9f20\u6807\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u5927\u9f20\u6807Shift+D');\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('.accbig-btn').off('click').on('click', function() {\r\n\t\tvar screen = window.assist.module.wza.state.screen;\r\n\t\tif (screen) {\r\n\t\t\twindow.assist.module.wza.screen.open(0);\r\n\t\t\taccClickRead('\u5927\u5b57\u5e55\u5df2\u5173\u95ed');\r\n\t\t\twindow.assie('.accbig-btn').find('i').attr('title', '\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5927\u5b57\u5e55Shift+K');\r\n\t\t\twindow.assie('#acc-blindtool .accbig-btn').attr('title', '\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5173\u95ed\uff0c\u5f00\u542f\u5927\u5b57\u5e55Shift+K');\r\n\t\t}\r\n\t\telse {\r\n\t\t\twindow.assist.module.wza.screen.open(1);\r\n\t\t\taccClickRead('\u5927\u5b57\u5c4f\u5df2\u5f00\u542f');\r\n\t\t\twindow.assie('.accbig-btn').find('i').attr('title', '\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u5927\u5b57\u5e55Shift+K');\r\n\t\t\twindow.assie('#acc-blindtool .accbig-btn').attr('title', '\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5f00\u542f\uff0c\u5173\u95ed\u5927\u5b57\u5e55Shift+K');\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('.accspeed-e').find('i').off('clcik').on('click', function() {\r\n\t\tvar speed = window.assist.module.voice.state.speed;\r\n\t\twindow.assie('.accspeed-e').addClass('acc-noaction');\r\n\r\n\t\tif (speed) {\r\n\t\t\taccClickRead('\u8bed\u901f\u6b63\u5e38');\r\n\t\t\twindow.assist.module.voice.speed(0);\r\n\t\t\twindow.assie('.accspeed-m-btn').removeClass('acc-noaction');\r\n\t\t}\r\n\t\telse {\r\n\t\t\taccClickRead('\u8bed\u901f\u5df2\u52a0\u5feb');\r\n\t\t\twindow.assist.module.voice.speed(1);\r\n\t\t\twindow.assie('.accspeed-k-btn').removeClass('acc-noaction');\r\n\t\t}\r\n\t});\r\n\r\n\t\/\/\u58f0\u97f3\u5f00\r\n\twindow.assie('.accvol-g-btn').find('i').off('click').on('click', function(e, isauto) {\r\n\t\twindow.assist.module.voice.open(1);\r\n\t\twindow.assie('.accvol-e').addClass('acc-noaction');\r\n\t\twindow.assie('.accvol-k-btn').removeClass('acc-noaction');\r\n\r\n\t\twindow.assie('#accscreen-vol').removeClass('vol-k vol-g');\r\n\t\twindow.assie('#accscreen-vol').addClass('vol-k');\r\n        window.assie(\".acc-blindtool-voice\").addClass(\"acc-blindtool-voice-open\");\r\n\r\n\r\n\t\tif (!isauto) accClickRead('\u58f0\u97f3\u5df2\u5f00\u542f');\r\n\t});\r\n\r\n\t\/\/\u58f0\u97f3\u5173\r\n\twindow.assie('.accvol-k-btn').find('i').off('click').on('click', function(e, isauto) {\r\n\t\twindow.assist.module.voice.open(0);\r\n\t\twindow.assist.module.voice.stop();\r\n\t\twindow.assie('.accvol-e').addClass('acc-noaction');\r\n\t\twindow.assie('.accvol-g-btn').removeClass('acc-noaction');\r\n\r\n\t\twindow.assie('#accscreen-vol').removeClass('vol-k vol-g');\r\n\t\twindow.assie('#accscreen-vol').addClass('vol-g');\r\n\r\n        window.assie(\".acc-blindtool-voice\").removeClass(\"acc-blindtool-voice-open\");\r\n\r\n\t\tif (!isauto) accClickRead('\u58f0\u97f3\u5df2\u5173\u95ed');\r\n\t});\r\n\r\n\twindow.assie('.accread-e').find('i').off('clcik').on('click', function() {\r\n\t\tvar read = window.assist.module.voice.mode();\r\n\t\twindow.assie('.accread-e').addClass('acc-noaction');\r\n\r\n\t\tif (read == 1) {\r\n\t\t\taccClickRead('\u5df2\u5f00\u542f\u8fde\u8bfb\u6a21\u5f0f\u3002\u8bf7\u5c06\u9f20\u6807\u79fb\u5230\u60a8\u9700\u8981\u9605\u8bfb\u6587\u5b57\u4e0a\uff0c\u4e09\u79d2\u540e\u5f00\u59cb\u9605\u8bfb\u3002\u5728\u9605\u8bfb\u94fe\u63a5\u65f6\u6572\u51fb\u56de\u8f66\u952e\u5373\u53ef\u8fdb\u5165\u6240\u6307\u5411\u7684\u9875\u9762');\r\n\t\t\twindow.assie('.accread-l-btn').removeClass('acc-noaction');\r\n\t\t\twindow.assist.module.voice.mode(2);\r\n\t\t\twindow.assie('#bt-pointer').addClass('acc-noaction');\r\n\t\t\twindow.assie('#bt-continue').removeClass('acc-noaction');\r\n\t\t}\r\n\t\telse if (read == 2) {\r\n\t\t\taccClickRead('\u5df2\u5f00\u542f\u6307\u8bfb\u6a21\u5f0f\u3002\u8bf7\u5c06\u9f20\u6807\u79fb\u5230\u60a8\u9700\u8981\u9605\u8bfb\u6587\u5b57\u4e0a\uff0c\u76f2\u4eba\u7528\u6237\u76f4\u63a5\u64cd\u4f5c\u952e\u76d8\u5373\u53ef\u3002');\r\n\t\t\twindow.assie('.accread-d-btn').removeClass('acc-noaction');\r\n\t\t\twindow.assist.module.voice.mode(1);\r\n\r\n\t\t\twindow.assie('#bt-continue').addClass('acc-noaction');\r\n\t\t\twindow.assie('#bt-pointer').removeClass('acc-noaction');\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('.acc-contrast-e').find('i').off('click').on('click', function() {\r\n\t\tvar theme = window.assist.module.wza.state.theme;\r\n\t\twindow.assie('.acc-contrast-e').addClass('acc-noaction');\r\n\r\n\t\tif (theme == 'default') {\r\n\t\t\twindow.assist.module.wza.theme('black');\r\n\t\t\twindow.assie('.acc-black-btn').removeClass('acc-noaction');\r\n\t\t\taccClickRead('\u9ed1\u8272\u914d\u8272\u5df2\u5f00\u542f');\r\n\t\t}\r\n\t\telse if (theme == 'black') {\r\n\t\t\twindow.assist.module.wza.theme('blue');\r\n\t\t\twindow.assie('.acc-blue-btn').removeClass('acc-noaction');\r\n\t\t\taccClickRead('\u84dd\u8272\u914d\u8272\u5df2\u5f00\u542f');\r\n\t\t}\r\n\t\telse if (theme == 'blue') {\r\n\t\t\twindow.assist.module.wza.theme('default');\r\n\t\t\twindow.assie('.acc-default-btn').removeClass('acc-noaction');\r\n\t\t\taccClickRead('\u539f\u8272\u914d\u8272\u5df2\u5f00\u542f');\r\n\t\t}\r\n\t});\r\n\r\n\r\n\r\n\r\n\r\n\t\/\/ \u5927\u5b57\u5e55\u4e8b\u4ef6\r\n\twindow.assie('#accscreen-jt').off('click').on('click', function() {\r\n\t\tvar text = window.assie(this).text();\r\n\t\tif (text == '\u7e41\u4f53') {\r\n\t\t\twindow.assist.module.wza.lang('zh');\r\n\t\t\twindow.assie(this).text('\u7b80\u4f53');\r\n\t\t\taccClickRead('\u5df2\u5f00\u542f\u7b80\u4f53');\r\n\t\t}\r\n\t\telse if (text == '\u7b80\u4f53'){\r\n\t\t\twindow.assist.module.wza.lang('tw');\r\n\t\t\twindow.assie(this).text('\u7e41\u4f53');\r\n\t\t\taccClickRead('\u5df2\u5f00\u542f\u7e41\u4f53');\r\n\t\t}\r\n\t\t\/\/window.assie('#accscreen-py').text('\u62fc\u97f3');\r\n\t});\r\n\r\n\twindow.assie('#accscreen-py').off('click').on('click', function() {\r\n\t\tvar text = window.assie(this).text();\r\n\t\tif (text == '\u62fc\u97f3') {\r\n\t\t\t\/\/ window.assie(this).text('l\u0101');\r\n\t\t\twindow.assist.module.wza.lang('py');\r\n\t\t\taccClickRead('\u5df2\u5f00\u542f\u62fc\u97f3');\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('#accscreen-close').off('click').on('click', function() {\r\n\t\twindow.assist.module.wza.screen.open(0);\r\n\t\taccClickRead('\u5927\u5b57\u5c4f\u5e55\u5df2\u5173\u95ed');\r\n\t\twindow.assie('.accbig-btn').attr('title', '\u5f53\u524d\u5927\u5b57\u5e55\u5df2\u5173\u95ed\uff0c\u5f00\u542fShift+K');\r\n\t});\r\n\r\n\twindow.assie('.accclose-btn').off('click').on('click', function(e) {\r\n        window.assie('.switchtool').hide();\r\n\t\twindow.assist.module.wza.clear();\r\n\t});\r\n\r\n\twindow.assie('#acccont-logo-img').off('mouseenter').on('mouseenter', function() {\r\n\t\twindow.assie(this).addClass('acccont-logo-img-hover');\r\n\t}).off('mouseleave').on('mouseleave', function() {\r\n\t\twindow.assie(this).removeClass('acccont-logo-img-hover');\r\n\t});\r\n\r\n\t\/\/ ********* \u89d2\u8272\u5207\u6362 *************\r\n\r\n\twindow.assie('.accaux-btn').off('click').on('click', function() {\r\n\t\t\/\/ \u8001\u4eba\u7248\r\n\t\twindow.accChangeRole('old');\r\n\t});\r\n\r\n\twindow.assie('.accread-btn').off('click').on('click', function() {\r\n\t\t\/\/ \u8bfb\u5c4f\u7248\r\n\t\twindow.accChangeRole('read');\r\n\t});\r\n\r\n\twindow.assie('#accscreen-vol').off('click').on('click', function(e) {\r\n\t\tvar read = window.assist.module.voice.state.read;\r\n\r\n\t\tif (read) {\r\n\t\t\twindow.assie(window.assie('#accvol-k').find('i').get(0)).trigger('click', [true]);\r\n\t\t\twindow.assist.module.voice.forceStop();\r\n\t\t\twindow.assie('#accscreen-vol').removeClass('vol-k vol-g').addClass('vol-g');\r\n\r\n\t\t}\r\n\t\telse {\r\n\t\t\twindow.assie(window.assie('#accvol-g').find('i').get(0)).trigger('click', [true]);\r\n\t\t\twindow.assie('#accscreen-vol').removeClass('vol-k vol-g').addClass('vol-k');\r\n\r\n\t\t}\r\n\t});\r\n\r\n\twindow.assie('#accnavi-eyes').off('click').on('click', function() {\r\n\t\tvar accLink = window.assie('#' + window.accLinkId);\r\n\t\taccLink.trigger('click');\r\n\t});\r\n\r\n    window.assie('#acc-blindtool-help').off('click').on('click', function() {\r\n        \/\/window.assie('#acc-blindtool-help2').click();\r\n        document.getElementById(\"acc-blindtool-help2\").click();\r\n    });\r\n\r\n\t\/\/\u70b9\u51fb\u533a\u57df\u5feb\u6377\u952e\r\n    window.assie('#bt-dh').off('click').on('click', function() {\r\n        assist.module.region.skip(1);\r\n    });\r\n    window.assie('#bt-sc').off('click').on('click', function() {\r\n            assist.module.region.skip(2);\r\n    });\r\n    window.assie('#bt-jh').off('click').on('click', function() {\r\n        assist.module.region.skip(4);\r\n    });\r\n    window.assie('#bt-lb').off('click').on('click', function() {\r\n        assist.module.region.skip(5);\r\n    });\r\n    window.assie('#bt-zw').off('click').on('click', function() {\r\n            assist.module.region.skip(6);\r\n    });\r\n    window.assie('#bt-fw').off('click').on('click', function() {\r\n            assist.module.region.skip(7);\r\n        });\r\n }\r\n\r\n\r\n\/\/ \u5f15\u5bfc\u754c\u9762\u7ed8\u5236\r\nfunction accInforDraw() {\r\n\r\n\tvar data = window.accrank;\r\n\tif (data) {\r\n\t\tfor (var i in data) {\r\n\t\t\tif (!data[i].key) continue;\r\n\r\n\t\t\tif (data[i].key == '1') {\r\n\t\t\t\twindow.assie('#bt-dh').find('*').addClass('title-action');\r\n\r\n\t\t\t\tvar node = '<span class=\"title-num\">'\r\n\t\t\t\t\t\t +\t\t'('+data[i].nodes.length+')'\r\n\t\t\t\t\t\t + '<\/span>';\r\n\t\t\t\twindow.assie('#bt-dh .title-first').append(node);\r\n\t\t\t}\r\n\r\n\t\t\tif (data[i].key == '2') {\r\n\t\t\t\twindow.assie('#bt-sc').find('*').addClass('title-action');\r\n\r\n\t\t\t\tvar node = '<span class=\"title-num\">'\r\n\t\t\t\t\t\t +\t\t'('+data[i].nodes.length+')'\r\n\t\t\t\t\t\t + '<\/span>';\r\n\t\t\t\twindow.assie('#bt-sc .title-first').append(node);\r\n\t\t\t}\r\n\r\n\t\t\tif (data[i].key == '4') {\r\n\t\t\t\twindow.assie('#bt-jh').find('*').addClass('title-action');\r\n\r\n\t\t\t\tvar node = '<span class=\"title-num\">'\r\n\t\t\t\t\t\t +\t\t'('+data[i].nodes.length+')'\r\n\t\t\t\t\t\t + '<\/span>';\r\n\t\t\t\twindow.assie('#bt-jh .title-first').append(node);\r\n\t\t\t}\r\n\r\n\t\t\tif (data[i].key == '5') {\r\n\t\t\t\twindow.assie('#bt-lb').find('*').addClass('title-action');\r\n\r\n\t\t\t\tvar node = '<span class=\"title-num\">'\r\n\t\t\t\t\t\t +\t\t'('+data[i].nodes.length+')'\r\n\t\t\t\t\t\t + '<\/span>';\r\n\t\t\t\twindow.assie('#bt-lb .title-first').append(node);\r\n\t\t\t}\r\n\r\n\t\t\tif (data[i].key == '6') {\r\n\t\t\t\twindow.assie('#bt-zw').find('*').addClass('title-action');\r\n\r\n\t\t\t\tvar node = '<span class=\"title-num\">'\r\n\t\t\t\t\t\t +\t\t'('+data[i].nodes.length+')'\r\n\t\t\t\t\t\t + '<\/span>';\r\n\t\t\t\twindow.assie('#bt-zw .title-first').append(node);\r\n\t\t\t}\r\n\r\n\t\t\tif (data[i].key == '7') {\r\n\t\t\t\twindow.assie('#bt-fw').find('*').addClass('title-action');\r\n\r\n\t\t\t\tvar node = '<span class=\"title-num\">'\r\n\t\t\t\t\t\t +\t\t'('+data[i].nodes.length+')'\r\n\t\t\t\t\t\t + '<\/span>';\r\n\t\t\t\twindow.assie('#bt-fw .title-first').append(node);\r\n\t\t\t}\r\n\t\t}\r\n\r\n        accSethead();\r\n\r\n\r\n\t}\r\n\r\n    var read = window.assist.module.voice.state.read;\r\n    if (read){\r\n        window.assie('.acc-blindtool-voice').addClass('acc-blindtool-voice-open');\r\n    }\r\n    else\r\n    {\r\n        window.assie('.acc-blindtool-voice').removeClass('acc-blindtool-voice-open');\r\n    }\r\n\r\n};\r\n\r\n\/\/\u91cd\u65b0\u7ed8\u5236\u5934\u90e8\r\nfunction accSethead() {\r\n    \/\/\u83b7\u53d6\u7f51\u9875\u7c7b\u578b\r\n    var pageType=parseInt(assist.module.accessbility.pageType);\r\n    if(pageType==undefined || pageType==NaN || pageType<=0 || pageType>=4){\r\n        window.assie(\"#dt-type\").parent().hide();\r\n        window.assie(\"#dt-type\").find(\".title-action\").removeClass(\"title-action\");\r\n    }\r\n    switch (pageType) {\r\n        case 1:pageType=\"\u7efc\u5408\u9875\";break;\r\n        case 2:pageType=\"\u5217\u8868\u9875\";break;\r\n        case 3:pageType=\"\u6b63\u6587\u9875\";break;\r\n        default:pageType=\"\u672a\u77e5\";break;\r\n    }\r\n\r\n\r\n    window.assie(\"#dt-type .title-shortcut\").html(pageType);\r\n\r\n    \/\/\u9690\u85cf\u6ca1\u6709\u7684\u533a\u57df\r\n    var wrapwidth=0;\r\n    window.assie(\"#acc-blindtool-wrap td\").each(function () {\r\n        if(window.assie(this).find(\".title-action\").length<=0){\r\n            window.assie(this).hide();\r\n        }else\r\n        {\r\n            wrapwidth=wrapwidth+window.assie(this).find(\".bt-item\").width();\r\n        }\r\n    });\r\n\r\n    window.assie(\"#acc-blindtool-wrap table\").width(wrapwidth);\r\n}\r\n\r\n\/\/ \u5f15\u5bfc\u91cc\u8282\u70b9\u7684\u70b9\u51fb\u4e8b\u4ef6 \u5f15\u5bfc\u5173\u95ed\r\nfunction accInforNodeClickEvent() {\r\n\twindow.assie('.accinfor-node').off('click').on('click', function() {\r\n\t\tvar fmask = window.assie(this).attr('fmask'),\r\n\t\t\tsmask = window.assie(this).attr('smask');\r\n\r\n\t\tvar node = window.assist.module.region.rank()[fmask].nodes[smask];\r\n\t\twindow.assist.module.region.locate(node, true);\r\n\t});\r\n\r\n\twindow.assie('#accinfor-close').off('click').on('click', function() {\r\n\t\twindow.assie('#accinfor').addClass('acc-noaction');\r\n\t});\r\n}\r\n\r\nwindow.accLocateArea = function(node) {\r\n\tvar data = window.accrank;\r\n\tif (data) {\r\n\t\tfor (var i in data) {\r\n\t\t\tfor (var j in data[i].nodes) {\r\n\t\t\t\tif (data[i].nodes[j] == node) {\r\n\t\t\t\t\tvar f = window.assie('#accinfor-title-'+i+'');\r\n\t\t\t\t\tvar e = f.next().find('.accinfor-node').eq(j);\r\n\t\t\t\t\twindow.assie('.accinfor-node').removeClass('accinfor-content-action');\r\n\t\t\t\t\te.addClass('accinfor-content-action');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\r\nwindow.assistKey = function(key,node,e,assist){\r\n\tif(e.shiftKey && key == 65) {\r\n\t\tvar read = window.assist.module.voice.state.read;\r\n\t\tif (read) {\r\n            window.assist.module.voice.forceStop();\r\n\t\t\twindow.assie('#accvol-k').find('i').trigger('click');\r\n\t\t}\r\n\t\tif (!read) {\r\n\t\t\twindow.assie('#accvol-g').find('i').trigger('click');\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tif(e.shiftKey && key == 76) {\r\n\t\tvar read = window.assist.module.voice.mode();\r\n\t\tif (read == 1) {\r\n\t\t\twindow.assie('#accread-d').find('i').trigger('click');\r\n\t\t}\r\n\t\telse if (read == 2) {\r\n\t\t\twindow.assie('#accread-l').find('i').trigger('click');\r\n\t\t}\r\n\t}\r\n\r\n    if(e.shiftKey && key == 90) {\r\n        \tswitchTopBar();\r\n    }\r\n\tif(!e.altKey&&!e.ctrlKey&&e.shiftKey && key == 191) {\r\n\t\tif(window.assie(\"#acc-blindtool-role:visible\").length==0){\r\n            var helpurl=window.assie('#acchelpbook a:eq(0)').attr('href');\r\n            window.location.href=helpurl;\r\n\t\t}\r\n\t\telse\r\n\t\t{\r\n            var helpurl=window.assie(\"#acc-blindtool-help2\").attr(\"href\");\r\n\t\t\twindow.location.href=helpurl;\r\n\t\t}\r\n\t}\r\n\r\n\tif(e.shiftKey && e.ctrlKey && key == 50) {\r\n\t\twindow.assie('#accscreen-py').trigger('click');\r\n\t}\r\n\r\n\t\/\/ if(e.shiftKey && key == 50) {\r\n\t\/\/ \tvar mask = window.assie('#acc-blindtool').hasClass('acc-noaction');\r\n\t\/\/ \tif (mask) {\r\n\t\/\/ \t\twindow.assie('#accvol-k').find('i').trigger('click');\r\n\t\/\/ \t\twindow.assie('#accrole').trigger('click');\r\n\t\/\/ \t}\r\n\t\/\/ }\r\n\r\n\t\/\/ \u6253\u5f00\u5173\u95ed\u4fa7\u8fb9\u680f\r\n\tif(e.shiftKey && key == 86) {\r\n\t\tvar mask = window.assie('#accnavi').hasClass('acc-noaction');\r\n\t\tif (mask) {\r\n\t\t\twindow.assie('#accmore').trigger('click');\r\n\t\t}\r\n\t\telse {\r\n\t\t\twindow.assie('#accnavi-close').trigger('click');\r\n\t\t}\r\n\t}\r\n};\r\n\r\n\/\/\u5207\u6362\u663e\u793a\u5934\u90e8\u5bfc\u822a\u5df2\u7ecf\u5927\u5b57\u5e55\r\nfunction switchTopBar(id){\r\n\tif(id!=undefined){\r\n\t\twindow.hidebar=id;\r\n\t}\r\n    window.assie(\".switchtool\").hide();\r\n\r\n    if(window.assist.module.wza.state.screen==0){\r\n\t\t\/\/....\r\n        \/\/console.log(\"123\");\r\n        \/\/window.assie(\"label[class='accelem']\").css(\"height\",\"0px\");\r\n    }\r\n\r\n\r\n\tif(window.hidebar==0)\r\n\t{\r\n        window.assie(\"#acccont\").hide();\r\n        window.assie(\"#acc-blindtool\").hide();\r\n        window.assie(\"#accface [style^='opacity']\").hide();\r\n        window.assie(\"body\").css(\"margin-top\",(parseInt(window.assie(\"body\").css('margin-top'))-100)+\"px\");\r\n        window.assie(\"#accscreen\").hide();\r\n        window.assie(\"label[class='accelem']\").hide();\r\n        window.assie(\".switchtool > span\").removeClass('closetool').addClass('opentool');\r\n        window.assist.module.wza.screen.open(0);\r\n        window.hidebar=1;\r\n        window.assist.module.cookie.set('hidebar','1');\r\n\r\n\t}\r\n\telse\r\n\t{\r\n        window.assie(\"#acccont\").show();\r\n        window.assie(\"#acc-blindtool\").show();\r\n        if(window.assie(\"#acccont:visible\").length<=0||window.assie(\"#acccont\").css('display')==\"none\"||document.getElementById('acccont').style.display==\"none\"){\r\n            window.assie(\"body\").css(\"margin-top\",(parseInt(window.assie(\"body\").css('margin-top'))+100)+\"px\");\r\n        }\r\n        if(window.assist.module.wza.state.screen==1){\r\n            window.assie(\"#accscreen\").show();\r\n            window.assie(\"label[class='accelem']\").show();\r\n            window.assist.module.wza.screen.open(1);\r\n\t\t}\r\n        window.assie(\".switchtool > span\").removeClass('opentool').addClass('closetool');\r\n\r\n        window.hidebar=0;\r\n        window.assist.module.cookie.set('hidebar','0');\r\n\t}\r\n}\r\n\r\nwindow.assistFace = function(assist){\r\n        window.assie = assist.$;\r\n        window.assist = assist;\r\n        window.asssid = assist.module.accessbility.state.sid;\r\n        window.acchost = assist.module.config.host;\r\n        window.accLinkId = assist.module.face.accLinkId;\r\n        window.accplatform = assist.module.face.myPlatform;\r\n        window.accmysite = window.assist.module.face.mySite;\r\n        window.accmp3 = assist.module.config.scriptPath + 'face\/mp3\/qq.mp3';\r\n        window.proxy = window.assist.module.face.state.proxy;\r\n        window.accch = parseInt(window.assie('#acccont').height());\r\n        window.acccfh = parseInt(window.assie('#acccont-fold').height());\r\n        window.blind = window.assist.module.face.state.blind;\r\n    \twindow.hidebar=window.assist.module.cookie.get('hidebar');\r\n    \tif(window.hidebar==undefined){window.hidebar=0;window.assist.module.cookie.set('hidebar',0);}\r\n    \tif(assist.module.face.state.packup!=undefined&&assist.module.face.state.packup>0){\r\n    \t\tif(window.hidebar==0){\r\n            \twindow.hidebar=1;window.assist.module.cookie.set('hidebar',1);\r\n    \t\t}\r\n\t\t}\r\n        accMianInit();\r\n\r\n\r\n};\r\n\r\nwindow.assistData = function(assist){\r\n\twindow.accrank = assist.module.region.rank();\r\n\twindow.assie = assist.$;\r\n\tif (!window.accrank || window.accrank.length == 0) {\r\n\t\twindow.assie('.accinfor-none-span1').text('\u5f53\u524d\u9875\u9762\u6682\u65e0\u667a\u80fd\u5bfc\u76f2\u3002');\r\n\t\twindow.assie('.accinfor-none-span2').text('\u8bf7\u7528TAB\u952e\u64cd\u4f5c\u81ea\u7136\u5bfc\u76f2\u3002');\r\n        accSethead();\r\n\t}\r\n\telse\r\n\t{\r\n\t\taccInforDraw();\r\n\t\taccInforNodeClickEvent();\r\n\t}\r\n};\r\n\r\n\/\/ \u8f85\u52a9\u65b9\u6cd5\r\n\/\/ \u5927\u5b57\u5e55\u5bbd\u5ea6\u8c03\u6574\r\nfunction accScreenMove() {\r\n\tvar mask = window.assie('#accface').hasClass('accleft'),\r\n\t\taccinfor = window.assie('#accinfor').css('display');\r\n\r\n\tif (accinfor == 'block') {\r\n\t\tif (mask) {\r\n\t\twindow.assie('#accscreen').removeClass('accscreen-full accscreen-left-200 accscreen-right-200').addClass('accscreen-right-200');\r\n\t\t}\r\n\t\telse {\r\n\t\t\twindow.assie('#accscreen').removeClass('accscreen-full accscreen-left-200 accscreen-right-200').addClass('accscreen-left-200');\r\n\t\t}\r\n\t}\r\n\telse {\r\n\t\twindow.assie('#accscreen').removeClass('accscreen-full accscreen-left-200 accscreen-right-200').addClass('accscreen-full');\r\n\t}\r\n};\r\n\r\nwindow.accInforSwitch = function () {\r\n\twindow.assie('#accinfor').removeClass('acc-noaction');\r\n};\r\n\r\nfunction accRepairbodyHeight(height) {\r\n\twindow.assie('body').css('margin-top', height+'px');\r\n};\r\n\r\nwindow.accChangeRole = function(type) {\r\n\tif (type == 'old') {\r\n\t\taccReset();\r\n\t\twindow.assist.module.face.blind(1);\r\n\t\twindow.assist.module.wza.screen.open(0);\r\n\t\taccRemoveAccClass('old');\r\n\t}\r\n\telse if(type == 'read') {\r\n\t\taccReset();\r\n\t\twindow.assist.module.face.blind(2);\r\n\t\twindow.assist.module.wza.screen.open(1);\r\n        var read = window.assist.module.voice.state.read;\r\n        if (read){\r\n            window.assie('.acc-blindtool-voice').addClass('acc-blindtool-voice-open');\r\n        }\r\n        else\r\n        {\r\n            window.assie('.acc-blindtool-voice').removeClass('acc-blindtool-voice-open');\r\n        }\r\n\r\n        var tx = window.assist.module.region.summary();\r\n\t\twindow.assist.module.wza.help(tx);\r\n\t\taccRemoveAccClass('read');\r\n\r\n\r\n\t}\r\n};\r\n\r\nfunction accRemoveAccClass(type) {\r\n\twindow.assie('#acc-blindtool').addClass('acc-noaction');\r\n\twindow.assie('.acccont-e').addClass('acc-noaction');\r\n\r\n\tif (type == 'old') {\r\n\t\twindow.assie('#accrscreen').find('span').text('\u8001\u4eba\u7248');\r\n\t\twindow.assie('.accrscreen-e').attr('title', '\u5f53\u524d\u4e3a\u8001\u4eba\u7248');\r\n\t\twindow.assie('.acccont-e').addClass('acc-noaction');\r\n\t\twindow.assie('#acccont').removeClass('acc-noaction');\r\n\t\twindow.assie('#accface #accscreen').removeClass('white black').addClass('white');\r\n\t}\r\n\r\n\tif (type == 'read') {\r\n\t\twindow.assie('#accrscreen').find('span').text('\u8bfb\u5c4f\u7248');\r\n\t\twindow.assie('.accrscreen-e').attr('title', '\u5f53\u524d\u4e3a\u8bfb\u5c4f\u7248');\r\n\t\twindow.assie('.acccont-e').addClass('acc-noaction');\r\n\t\twindow.assie('#acc-blindtool').removeClass('acc-noaction');\r\n\t\twindow.assie('#accface #accscreen').removeClass('white black').addClass('black');\r\n\t}\r\n\r\n\tif(typeof(window.onHeader)==\"function\") window.onHeader(1);\r\n};\r\n\r\nfunction accClickRead(tx) {\r\n\tsetTimeout(function() {\r\n\t\twindow.assist.module.voice.stop();\r\n    \twindow.assist.module.voice.read(tx);\t\r\n\t}, 800);\r\n};\r\n\r\nvar timer;\r\nfunction accPointerRead() {\r\n\twindow.assie('.acc_pointer_reader').off('mouseover').on('mouseover', function(ev){\r\n\t   \t\/\/ tx = tx.replace(\/(shift|ctrl|alt)\\+[a-z\\d\\+\\s]+$\/ig,\"\");\t\r\n\r\n      \tif (timer) clearTimeout(timer);\r\n      \tvar thiss = window.assie(this);\r\n\r\n        timer = setTimeout(function() {\r\n        \twindow.assist.module.voice.stop();\r\n\t        var tx = thiss.attr('read');\r\n\t        if (!tx) tx = thiss.attr('title');\r\n\t        if (!tx) tx = thiss.text();\r\n        \twindow.assist.module.voice.read(tx);\t\r\n        }, 500);\r\n\t});\r\n};\r\n\r\nfunction accReset() {\r\n\twindow.assist.module.wza.zoom(1);\r\n\twindow.assist.module.wza.ruler(0);\r\n\twindow.assist.module.wza.cursor(0);\r\n\twindow.assist.module.wza.screen.open(0);\r\n\twindow.assie('#accinfor').addClass('acc-noaction');\r\n\r\n\twindow.assist.module.wza.theme('default');\r\n\twindow.assie('.acc-contrast-e').addClass('acc-noaction');\r\n\twindow.assie('.acc-default-btn').removeClass('acc-noaction');\r\n\r\n\twindow.assist.module.voice.speed(0);\r\n\twindow.assie('.accspeed-e').addClass('acc-noaction');\r\n\twindow.assie('.accspeed-m-btn').removeClass('acc-noaction');\r\n\r\n\twindow.assist.module.voice.mode(1);\r\n\twindow.assie('.accread-e').addClass('acc-noaction');\r\n\twindow.assie('.accread-d-btn').removeClass('acc-noaction');\r\n\twindow.assie('#bt-continue').addClass('acc-noaction');\r\n\twindow.assie('#bt-pointer').removeClass('acc-noaction');\r\n};\r\n\r\nsetTimeout(function () {\r\n\r\n},1);<\/script>"
};
window.assistTplHtml = {
    "bigeyes": "<style type=\"text\/css\">\r\n#tpl_bigeyes{\r\n\tz-index:2147483646;\r\n\tbackground-color:#424242;\r\n\tposition:absolute;\r\n\ttop:80px;\r\n\twidth:100%;\r\n\tpadding-left:50px;\r\n\tpadding-top:50px;\r\n\theight:auto;\r\n\t\r\n}\r\n#tpl_bigeyes *{\r\n\tfont-size:40px;\r\n\tline-height:60px;\r\n\tcolor:#fff !important;\r\n}\r\n#tpl_bigeyes .accregiontitle{\r\n\tfont-size:60px;\r\n\tdisplay:block;\r\n\tclear:both;\r\n\tline-height:60px;\r\n\tpadding:30px 0px 20px 0px;\r\n\tcolor:#ffff00;\r\n\twidth:90%;\r\n\tborder-bottom:2px solid #999;\r\n}\r\n#tpl_bigeyes ul li{\r\n\tlist-style-position: inside;\r\n\tlist-style-type:disc;\r\n\tmargin:20px 0px;\r\n}\r\n\r\n\r\n<\/style>\r\n<div id=\"tpl_bigeyes\">\r\n<div id=\"tpldir\"><\/div>\r\n<div id=\"tplslist\"><\/div>\r\n<div id=\"tplcontent\"><\/div>\r\n<div id=\"tpllist\"><\/div>\r\n<\/div>\r\n"
};
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cu(a) {
        if (!cj[a]) {
            var b = c.body
                , d = f("<" + a + ">").appendTo(b)
                , e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"),
                    ck.frameBorder = ck.width = ck.height = 0),
                    b.appendChild(ck);
                if (!cl || !ck.createElement)
                    cl = (ck.contentWindow || ck.contentDocument).document,
                        cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
                        cl.close();
                d = cl.createElement(a),
                    cl.body.appendChild(d),
                    e = f.css(d, "display"),
                    b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }
    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }
    function cs() {
        cq = b
    }
    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }
    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) { }
    }
    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) { }
    }
    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters)
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
                k = d[g];
            if (k === "*")
                k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                    n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                    o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                    n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)
            i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")
            f.shift(),
                h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d)
            j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function b_(a, b, c, d) {
        if (f.isArray(b))
            f.each(b, function (b, e) {
                c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            });
        else if (!c && f.type(b) === "object")
            for (var e in b)
                b_(a + "[" + e + "]", b[e], c, d);
        else
            d(a, b)
    }
    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
            g = g || {},
            g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++)
            l = h[i](c, d, e),
                typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l),
                    l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }
    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b,
                b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)
                    h = d[e],
                        j = /^\+/.test(h),
                        j && (h = h.substr(1) || "*"),
                        i = a[h] = a[h] || [],
                        i[j ? "unshift" : "push"](c)
            }
        }
    }
    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight
            , e = b === "width" ? 1 : 0
            , g = 4;
        if (d > 0) {
            if (c !== "border")
                for (; e < g; e += 2)
                    c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0),
                        c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null)
            d = a.style[b];
        if (bt.test(d))
            return d;
        d = parseFloat(d) || 0;
        if (c)
            for (; e < g; e += 2)
                d += parseFloat(f.css(a, "padding" + bx[e])) || 0,
                    c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0),
                    c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }
    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b),
            b.innerHTML = a.outerHTML;
        return b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio")
            a.defaultChecked = a.checked
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase(),
            c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked),
                b.value !== a.value && (b.value = a.value)),
            b.removeAttribute(f.expando),
            b.removeAttribute("_submit_attached"),
            b.removeAttribute("_change_attached"))
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle,
                    h.events = {};
                for (c in i)
                    for (d = 0,
                        e = i[c].length; d < e; d++)
                        f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }
    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        var b = V.split("|")
            , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType)
            return f.grep(a, function (a, d) {
                return a === b === c
            });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b))
                return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function K() {
        return !0
    }
    function J() {
        return !1
    }
    function n(a, b, c) {
        var d = b + "defer"
            , e = b + "queue"
            , g = b + "mark"
            , h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0),
                h.fire())
        }, 0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b]))
                continue;
            if (b !== "toJSON")
                return !1
        }
        return !0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) { }
                f.data(a, c, d)
            } else
                d = b
        }
        return d
    }
    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0,
            d = a.length; c < d; c++)
            b[a[c]] = !0;
        return b
    }
    var c = a.document
        , d = a.navigator
        , e = a.location
        , f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
                return (b + "").toUpperCase()
            }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a)
                        return this;
                    if (a.nodeType) {
                        this.context = this[0] = a,
                            this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c,
                            this[0] = c.body,
                            this.selector = a,
                            this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d,
                                    k = d ? d.ownerDocument || d : c,
                                    j = m.exec(a),
                                    j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])],
                                        e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]),
                                            a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2])
                                    return f.find(a);
                                this.length = 1,
                                    this[0] = h
                            }
                            this.context = c,
                                this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a))
                        return f.ready(a);
                    a.selector !== b && (this.selector = a.selector,
                        this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                        d.prevObject = this,
                        d.context = this.context,
                        b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(),
                        A.add(a);
                    return this
                },
                eq: function (a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            },
                e.fn.init.prototype = e.fn,
                e.extend = e.fn.extend = function () {
                    var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
                    typeof i == "boolean" && (l = i,
                        i = arguments[1] || {},
                        j = 2),
                        typeof i != "object" && !e.isFunction(i) && (i = {}),
                        k === j && (i = this,
                            --j);
                    for (; j < k; j++)
                        if ((a = arguments[j]) != null)
                            for (c in a) {
                                d = i[c],
                                    f = a[c];
                                if (i === f)
                                    continue;
                                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1,
                                    h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {},
                                    i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                            }
                    return i
                }
                ,
                e.extend({
                    noConflict: function (b) {
                        a.$ === e && (a.$ = g),
                            b && a.jQuery === e && (a.jQuery = f);
                        return e
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (a) {
                        a ? e.readyWait++ : e.ready(!0)
                    },
                    ready: function (a) {
                        if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                            if (!c.body)
                                return setTimeout(e.ready, 1);
                            e.isReady = !0;
                            if (a !== !0 && --e.readyWait > 0)
                                return;
                            A.fireWith(c, [e]),
                                e.fn.trigger && e(c).trigger("ready").off("ready")
                        }
                    },
                    bindReady: function () {
                        if (!A) {
                            A = e.Callbacks("once memory");
                            if (c.readyState === "complete")
                                return setTimeout(e.ready, 1);
                            if (c.addEventListener)
                                c.addEventListener("DOMContentLoaded", B, !1),
                                    a.addEventListener("load", e.ready, !1);
                            else if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", B),
                                    a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null
                                } catch (d) { }
                                c.documentElement.doScroll && b && J()
                            }
                        }
                    },
                    isFunction: function (a) {
                        return e.type(a) === "function"
                    },
                    isArray: Array.isArray || function (a) {
                        return e.type(a) === "array"
                    }
                    ,
                    isWindow: function (a) {
                        return a != null && a == a.window
                    },
                    isNumeric: function (a) {
                        return !isNaN(parseFloat(a)) && isFinite(a)
                    },
                    type: function (a) {
                        return a == null ? String(a) : I[C.call(a)] || "object"
                    },
                    isPlainObject: function (a) {
                        if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
                            return !1;
                        try {
                            if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))
                                return !1
                        } catch (c) {
                            return !1
                        }
                        var d;
                        for (d in a)
                            ;
                        return d === b || D.call(a, d)
                    },
                    isEmptyObject: function (a) {
                        for (var b in a)
                            return !1;
                        return !0
                    },
                    error: function (a) {
                        throw new Error(a)
                    },
                    parseJSON: function (b) {
                        if (typeof b != "string" || !b)
                            return null;
                        b = e.trim(b);
                        if (a.JSON && a.JSON.parse)
                            return a.JSON.parse(b);
                        if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
                            return (new Function("return " + b))();
                        e.error("Invalid JSON: " + b)
                    },
                    parseXML: function (c) {
                        if (typeof c != "string" || !c)
                            return null;
                        var d, f;
                        try {
                            a.DOMParser ? (f = new DOMParser,
                                d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                                    d.async = "false",
                                    d.loadXML(c))
                        } catch (g) {
                            d = b
                        }
                        (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                        return d
                    },
                    noop: function () { },
                    globalEval: function (b) {
                        b && j.test(b) && (a.execScript || function (b) {
                            a.eval.call(a, b)
                        }
                        )(b)
                    },
                    camelCase: function (a) {
                        return a.replace(w, "ms-").replace(v, x)
                    },
                    nodeName: function (a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },
                    each: function (a, c, d) {
                        var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                        if (d) {
                            if (i) {
                                for (f in a)
                                    if (c.apply(a[f], d) === !1)
                                        break
                            } else
                                for (; g < h;)
                                    if (c.apply(a[g++], d) === !1)
                                        break
                        } else if (i) {
                            for (f in a)
                                if (c.call(a[f], f, a[f]) === !1)
                                    break
                        } else
                            for (; g < h;)
                                if (c.call(a[g], g, a[g++]) === !1)
                                    break;
                        return a
                    },
                    trim: G ? function (a) {
                        return a == null ? "" : G.call(a)
                    }
                        : function (a) {
                            return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                        }
                    ,
                    makeArray: function (a, b) {
                        var c = b || [];
                        if (a != null) {
                            var d = e.type(a);
                            a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                        }
                        return c
                    },
                    inArray: function (a, b, c) {
                        var d;
                        if (b) {
                            if (H)
                                return H.call(b, a, c);
                            d = b.length,
                                c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                            for (; c < d; c++)
                                if (c in b && b[c] === a)
                                    return c
                        }
                        return -1
                    },
                    merge: function (a, c) {
                        var d = a.length
                            , e = 0;
                        if (typeof c.length == "number")
                            for (var f = c.length; e < f; e++)
                                a[d++] = c[e];
                        else
                            while (c[e] !== b)
                                a[d++] = c[e++];
                        a.length = d;
                        return a
                    },
                    grep: function (a, b, c) {
                        var d = [], e;
                        c = !!c;
                        for (var f = 0, g = a.length; f < g; f++)
                            e = !!b(a[f], f),
                                c !== e && d.push(a[f]);
                        return d
                    },
                    map: function (a, c, d) {
                        var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                        if (k)
                            for (; i < j; i++)
                                f = c(a[i], i, d),
                                    f != null && (h[h.length] = f);
                        else
                            for (g in a)
                                f = c(a[g], g, d),
                                    f != null && (h[h.length] = f);
                        return h.concat.apply([], h)
                    },
                    guid: 1,
                    proxy: function (a, c) {
                        if (typeof c == "string") {
                            var d = a[c];
                            c = a,
                                a = d
                        }
                        if (!e.isFunction(a))
                            return b;
                        var f = F.call(arguments, 2)
                            , g = function () {
                                return a.apply(c, f.concat(F.call(arguments)))
                            };
                        g.guid = a.guid = a.guid || g.guid || e.guid++;
                        return g
                    },
                    access: function (a, c, d, f, g, h, i) {
                        var j, k = d == null, l = 0, m = a.length;
                        if (d && typeof d == "object") {
                            for (l in d)
                                e.access(a, c, l, d[l], 1, h, f);
                            g = 1
                        } else if (f !== b) {
                            j = i === b && e.isFunction(f),
                                k && (j ? (j = c,
                                    c = function (a, b, c) {
                                        return j.call(e(a), c)
                                    }
                                ) : (c.call(a, f),
                                    c = null));
                            if (c)
                                for (; l < m; l++)
                                    c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                            g = 1
                        }
                        return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                    },
                    now: function () {
                        return (new Date).getTime()
                    },
                    uaMatch: function (a) {
                        a = a.toLowerCase();
                        var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                        return {
                            browser: b[1] || "",
                            version: b[2] || "0"
                        }
                    },
                    sub: function () {
                        function a(b, c) {
                            return new a.fn.init(b, c)
                        }
                        e.extend(!0, a, this),
                            a.superclass = this,
                            a.fn = a.prototype = this(),
                            a.fn.constructor = a,
                            a.sub = this.sub,
                            a.fn.init = function (d, f) {
                                f && f instanceof e && !(f instanceof a) && (f = a(f));
                                return e.fn.init.call(this, d, f, b)
                            }
                            ,
                            a.fn.init.prototype = a.fn;
                        var b = a(c);
                        return a
                    },
                    browser: {}
                }),
                e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                    I["[object " + b + "]"] = b.toLowerCase()
                }),
                z = e.uaMatch(y),
                z.browser && (e.browser[z.browser] = !0,
                    e.browser.version = z.version),
                e.browser.webkit && (e.browser.safari = !0),
                j.test("聽") && (k = /^[\s\xA0]+/,
                    l = /[\s\xA0]+$/),
                h = e(c),
                c.addEventListener ? B = function () {
                    c.removeEventListener("DOMContentLoaded", B, !1),
                        e.ready()
                }
                    : c.attachEvent && (B = function () {
                        c.readyState === "complete" && (c.detachEvent("onreadystatechange", B),
                            e.ready())
                    }
                    );
            return e
        }()
        , g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0,
                e = b.length; d < e; d++)
                g = b[d],
                    h = f.type(g),
                    h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        }, o = function (b, f) {
            f = f || [],
                e = !a.memory || [b, f],
                i = !0,
                j = !0,
                m = k || 0,
                k = 0,
                l = c.length;
            for (; c && m < l; m++)
                if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                    e = !0;
                    break
                }
            j = !1,
                c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(),
                    p.fireWith(e[0], e[1])))
        }, p = {
            add: function () {
                if (c) {
                    var a = c.length;
                    n(arguments),
                        j ? l = c.length : e && e !== !0 && (k = a,
                            o(e[0], e[1]))
                }
                return this
            },
            remove: function () {
                if (c) {
                    var b = arguments
                        , d = 0
                        , e = b.length;
                    for (; d < e; d++)
                        for (var f = 0; f < c.length; f++)
                            if (b[d] === c[f]) {
                                j && f <= l && (l--,
                                    f <= m && m--),
                                    c.splice(f--, 1);
                                if (a.unique)
                                    break
                            }
                }
                return this
            },
            has: function (a) {
                if (c) {
                    var b = 0
                        , d = c.length;
                    for (; b < d; b++)
                        if (a === c[b])
                            return !0
                }
                return !1
            },
            empty: function () {
                c = [];
                return this
            },
            disable: function () {
                c = d = e = b;
                return this
            },
            disabled: function () {
                return !c
            },
            lock: function () {
                d = b,
                    (!e || e === !0) && p.disable();
                return this
            },
            locked: function () {
                return !d
            },
            fireWith: function (b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            },
            fire: function () {
                p.fireWith(this, arguments);
                return this
            },
            fired: function () {
                return !!i
            }
        };
        return p
    }
        ;
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {
                resolve: b,
                reject: c,
                notify: d
            }, h = {
                done: b.add,
                fail: c.add,
                progress: d.add,
                state: function () {
                    return e
                },
                isResolved: b.fired,
                isRejected: c.fired,
                then: function (a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },
                always: function () {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                },
                pipe: function (a, b, c) {
                    return f.Deferred(function (d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [b, "reject"],
                            progress: [c, "notify"]
                        }, function (a, b) {
                            var c = b[0], e = b[1], g;
                            f.isFunction(c) ? i[a](function () {
                                g = c.apply(this, arguments),
                                    g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                },
                promise: function (a) {
                    if (a == null)
                        a = h;
                    else
                        for (var b in h)
                            a[b] = h[b];
                    return a
                }
            }, i = h.promise({}), j;
            for (j in g)
                i[j] = g[j].fire,
                    i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock),
                a && a.call(i, i);
            return i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                        j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                        --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0)
                , c = 0
                , d = b.length
                , e = Array(d)
                , g = d
                , h = d
                , j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred()
                , k = j.promise();
            if (d > 1) {
                for (; c < d; c++)
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else
                j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }),
        f.support = function () {
            var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
            p.setAttribute("className", "t"),
                p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
                d = p.getElementsByTagName("*"),
                e = p.getElementsByTagName("a")[0];
            if (!d || !d.length || !e)
                return {};
            g = c.createElement("select"),
                h = g.appendChild(c.createElement("option")),
                i = p.getElementsByTagName("input")[0],
                b = {
                    leadingWhitespace: p.firstChild.nodeType === 3,
                    tbody: !p.getElementsByTagName("tbody").length,
                    htmlSerialize: !!p.getElementsByTagName("link").length,
                    style: /top/.test(e.getAttribute("style")),
                    hrefNormalized: e.getAttribute("href") === "/a",
                    opacity: /^0.55/.test(e.style.opacity),
                    cssFloat: !!e.style.cssFloat,
                    checkOn: i.value === "on",
                    optSelected: h.selected,
                    getSetAttribute: p.className !== "t",
                    enctype: !!c.createElement("form").enctype,
                    html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    pixelMargin: !0
                },
                f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
                i.checked = !0,
                b.noCloneChecked = i.cloneNode(!0).checked,
                g.disabled = !0,
                b.optDisabled = !h.disabled;
            try {
                delete p.test
            } catch (r) {
                b.deleteExpando = !1
            }
            !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
                b.noCloneEvent = !1
            }),
                p.cloneNode(!0).fireEvent("onclick")),
                i = c.createElement("input"),
                i.value = "t",
                i.setAttribute("type", "radio"),
                b.radioValue = i.value === "t",
                i.setAttribute("checked", "checked"),
                i.setAttribute("name", "t"),
                p.appendChild(i),
                j = c.createDocumentFragment(),
                j.appendChild(p.lastChild),
                b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
                b.appendChecked = i.checked,
                j.removeChild(i),
                j.appendChild(p);
            if (p.attachEvent)
                for (n in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                })
                    m = "on" + n,
                        o = m in p,
                        o || (p.setAttribute(m, "return;"),
                            o = typeof p[m] == "function"),
                        b[n + "Bubbles"] = o;
            j.removeChild(p),
                j = g = h = p = i = null,
                f(function () {
                    var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
                    !u || (m = 1,
                        t = "padding:0;margin:0;border:",
                        r = "position:absolute;top:0;left:0;width:1px;height:1px;",
                        s = t + "0;visibility:hidden;",
                        n = "style='" + r + t + "5px solid #000;",
                        q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>",
                        d = c.createElement("div"),
                        d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px",
                        u.insertBefore(d, u.firstChild),
                        p = c.createElement("div"),
                        d.appendChild(p),
                        p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>",
                        k = p.getElementsByTagName("td"),
                        o = k[0].offsetHeight === 0,
                        k[0].style.display = "",
                        k[1].style.display = "none",
                        b.reliableHiddenOffsets = o && k[0].offsetHeight === 0,
                        a.getComputedStyle && (p.innerHTML = "",
                            l = c.createElement("div"),
                            l.style.width = "0",
                            l.style.marginRight = "0",
                            p.style.width = "2px",
                            p.appendChild(l),
                            b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                                marginRight: 0
                            }).marginRight, 10) || 0) === 0),
                        typeof p.style.zoom != "undefined" && (p.innerHTML = "",
                            p.style.width = p.style.padding = "1px",
                            p.style.border = 0,
                            p.style.overflow = "hidden",
                            p.style.display = "inline",
                            p.style.zoom = 1,
                            b.inlineBlockNeedsLayout = p.offsetWidth === 3,
                            p.style.display = "block",
                            p.style.overflow = "visible",
                            p.innerHTML = "<div style='width:5px;'></div>",
                            b.shrinkWrapBlocks = p.offsetWidth !== 3),
                        p.style.cssText = r + s,
                        p.innerHTML = q,
                        e = p.firstChild,
                        g = e.firstChild,
                        i = e.nextSibling.firstChild.firstChild,
                        j = {
                            doesNotAddBorder: g.offsetTop !== 5,
                            doesAddBorderForTableAndCells: i.offsetTop === 5
                        },
                        g.style.position = "fixed",
                        g.style.top = "20px",
                        j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15,
                        g.style.position = g.style.top = "",
                        e.style.overflow = "hidden",
                        e.style.position = "relative",
                        j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5,
                        j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m,
                        a.getComputedStyle && (p.style.marginTop = "1%",
                            b.pixelMargin = (a.getComputedStyle(p, null) || {
                                marginTop: 0
                            }).marginTop !== "1%"),
                        typeof d.style.zoom != "undefined" && (d.style.zoom = 1),
                        u.removeChild(d),
                        l = p = d = null,
                        f.extend(b, j))
                });
            return b
        }();
    var j = /^(?:\{.*\}|\[.*\])$/
        , k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)
                    return;
                n || (l ? a[j] = n = ++f.uuid : n = j),
                    m[n] || (m[n] = {},
                        l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function")
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n],
                    e || (h.data || (h.data = {}),
                        h = h.data),
                    d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c])
                    return g.events;
                k ? (i = h[c],
                    i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k])
                    return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b),
                            b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0,
                            g = b.length; e < g; e++)
                            delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d))
                            return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k]))
                        return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                    i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b)
                    return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }),
        f.fn.extend({
            data: function (a, c) {
                var d, e, g, h, i, j = this[0], k = 0, m = null;
                if (a === b) {
                    if (this.length) {
                        m = f.data(j);
                        if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                            g = j.attributes;
                            for (i = g.length; k < i; k++)
                                h = g[k].name,
                                    h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)),
                                        l(j, h, m[h]));
                            f._data(j, "parsedAttrs", !0)
                        }
                    }
                    return m
                }
                if (typeof a == "object")
                    return this.each(function () {
                        f.data(this, a)
                    });
                d = a.split(".", 2),
                    d[1] = d[1] ? "." + d[1] : "",
                    e = d[1] + "!";
                return f.access(this, function (c) {
                    if (c === b) {
                        m = this.triggerHandler("getData" + e, [d[0]]),
                            m === b && j && (m = f.data(j, a),
                                m = l(j, a, m));
                        return m === b && d[1] ? this.data(d[0]) : m
                    }
                    d[1] = c,
                        this.each(function () {
                            var b = f(this);
                            b.triggerHandler("setData" + e, d),
                                f.data(this, a, c),
                                b.triggerHandler("changeData" + e, d)
                        })
                }, null, c, arguments.length > 1, null, !1)
            },
            removeData: function (a) {
                return this.each(function () {
                    f.removeData(this, a)
                })
            }
        }),
        f.extend({
            _mark: function (a, b) {
                a && (b = (b || "fx") + "mark",
                    f._data(a, b, (f._data(a, b) || 0) + 1))
            },
            _unmark: function (a, b, c) {
                a !== !0 && (c = b,
                    b = a,
                    a = !1);
                if (b) {
                    c = c || "fx";
                    var d = c + "mark"
                        , e = a ? 0 : (f._data(b, d) || 1) - 1;
                    e ? f._data(b, d, e) : (f.removeData(b, d, !0),
                        n(b, c, "mark"))
                }
            },
            queue: function (a, b, c) {
                var d;
                if (a) {
                    b = (b || "fx") + "queue",
                        d = f._data(a, b),
                        c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                    return d || []
                }
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = f.queue(a, b)
                    , d = c.shift()
                    , e = {};
                d === "inprogress" && (d = c.shift()),
                    d && (b === "fx" && c.unshift("inprogress"),
                        f._data(a, b + ".run", e),
                        d.call(a, function () {
                            f.dequeue(a, b)
                        }, e)),
                    c.length || (f.removeData(a, b + "queue " + b + ".run", !0),
                        n(a, b, "queue"))
            }
        }),
        f.fn.extend({
            queue: function (a, c) {
                var d = 2;
                typeof a != "string" && (c = a,
                    a = "fx",
                    d--);
                if (arguments.length < d)
                    return f.queue(this[0], a);
                return c === b ? this : this.each(function () {
                    var b = f.queue(this, a, c);
                    a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    f.dequeue(this, a)
                })
            },
            delay: function (a, b) {
                a = f.fx ? f.fx.speeds[a] || a : a,
                    b = b || "fx";
                return this.queue(b, function (b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, c) {
                function m() {
                    --h || d.resolveWith(e, [e])
                }
                typeof a != "string" && (c = a,
                    a = b),
                    a = a || "fx";
                var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
                while (g--)
                    if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))
                        h++,
                            l.add(m);
                m();
                return d.promise(c)
            }
        });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b,
                        delete this[a]
                } catch (c) { }
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0,
                    d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1)
                            e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0,
                                i = b.length; h < i; h++)
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0,
                    e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0,
                                j = c.length; i < j; i++)
                                h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else
                            g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a
                , d = typeof b == "boolean";
            if (f.isFunction(a))
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++])
                        i = d ? i : !h.hasClass(e),
                            h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean")
                    this.className && f._data(this, "__className__", this.className),
                        this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " "
                , c = 0
                , d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)
                    return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this), h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a,
                                h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                                    return a == null ? "" : a + ""
                                })),
                                c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b)
                                this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b)
                        return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }),
        f.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function (a) {
                        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                        if (g < 0)
                            return null;
                        c = j ? g : 0,
                            d = j ? g + 1 : i.length;
                        for (; c < d; c++) {
                            e = i[c];
                            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                                b = f(e).val();
                                if (j)
                                    return b;
                                h.push(b)
                            }
                        }
                        if (j && !h.length && i.length)
                            return f(i[g]).val();
                        return h
                    },
                    set: function (a, b) {
                        var c = f.makeArray(b);
                        f(a).find("option").each(function () {
                            this.selected = f.inArray(f(this).val(), c) >= 0
                        }),
                            c.length || (a.selectedIndex = -1);
                        return c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function (a, c, d, e) {
                var g, h, i, j = a.nodeType;
                if (!!a && j !== 3 && j !== 8 && j !== 2) {
                    if (e && c in f.attrFn)
                        return f(a)[c](d);
                    if (typeof a.getAttribute == "undefined")
                        return f.prop(a, c, d);
                    i = j !== 1 || !f.isXMLDoc(a),
                        i && (c = c.toLowerCase(),
                            h = f.attrHooks[c] || (u.test(c) ? x : w));
                    if (d !== b) {
                        if (d === null) {
                            f.removeAttr(a, c);
                            return
                        }
                        if (h && "set" in h && i && (g = h.set(a, d, c)) !== b)
                            return g;
                        a.setAttribute(c, "" + d);
                        return d
                    }
                    if (h && "get" in h && i && (g = h.get(a, c)) !== null)
                        return g;
                    g = a.getAttribute(c);
                    return g === null ? b : g
                }
            },
            removeAttr: function (a, b) {
                var c, d, e, g, h, i = 0;
                if (b && a.nodeType === 1) {
                    d = b.toLowerCase().split(p),
                        g = d.length;
                    for (; i < g; i++)
                        e = d[i],
                            e && (c = f.propFix[e] || e,
                                h = u.test(e),
                                h || f.attr(a, e, ""),
                                a.removeAttribute(v ? e : c),
                                h && c in a && (a[c] = !1))
                }
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (r.test(a.nodeName) && a.parentNode)
                            f.error("type property can't be changed");
                        else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b),
                                c && (a.value = c);
                            return b
                        }
                    }
                },
                value: {
                    get: function (a, b) {
                        if (w && f.nodeName(a, "button"))
                            return w.get(a, b);
                        return b in a ? a.value : null
                    },
                    set: function (a, b, c) {
                        if (w && f.nodeName(a, "button"))
                            return w.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (a, c, d) {
                var e, g, h, i = a.nodeType;
                if (!!a && i !== 3 && i !== 8 && i !== 2) {
                    h = i !== 1 || !f.isXMLDoc(a),
                        h && (c = f.propFix[c] || c,
                            g = f.propHooks[c]);
                    return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }),
        f.attrHooks.tabindex = f.propHooks.tabIndex,
        x = {
            get: function (a, c) {
                var d, e = f.prop(a, c);
                return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function (a, b, c) {
                var d;
                b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,
                    d in a && (a[d] = !0),
                    a.setAttribute(c, c.toLowerCase()));
                return c
            }
        },
        v || (y = {
            name: !0,
            id: !0,
            coords: !0
        },
            w = f.valHooks.button = {
                get: function (a, c) {
                    var d;
                    d = a.getAttributeNode(c);
                    return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
                },
                set: function (a, b, d) {
                    var e = a.getAttributeNode(d);
                    e || (e = c.createAttribute(d),
                        a.setAttributeNode(e));
                    return e.nodeValue = b + ""
                }
            },
            f.attrHooks.tabindex.set = w.set,
            f.each(["width", "height"], function (a, b) {
                f.attrHooks[b] = f.extend(f.attrHooks[b], {
                    set: function (a, c) {
                        if (c === "") {
                            a.setAttribute(b, "auto");
                            return c
                        }
                    }
                })
            }),
            f.attrHooks.contenteditable = {
                get: w.get,
                set: function (a, b, c) {
                    b === "" && (b = "false"),
                        w.set(a, b, c)
                }
            }),
        f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
            f.attrHooks[c] = f.extend(f.attrHooks[c], {
                get: function (a) {
                    var d = a.getAttribute(c, 2);
                    return d === null ? b : d
                }
            })
        }),
        f.support.style || (f.attrHooks.style = {
            get: function (a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function (a, b) {
                return a.style.cssText = "" + b
            }
        }),
        f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
            get: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex,
                    b.parentNode && b.parentNode.selectedIndex);
                return null
            }
        })),
        f.support.enctype || (f.propFix.enctype = "encoding"),
        f.support.checkOn || f.each(["radio", "checkbox"], function () {
            f.valHooks[this] = {
                get: function (a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        }),
        f.each(["radio", "checkbox"], function () {
            f.valHooks[this] = f.extend(f.valHooks[this], {
                set: function (a, b) {
                    if (f.isArray(b))
                        return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            })
        });
    var z = /^(?:textarea|input|select)$/i
        , A = /^([^\.]*)?(?:\.(.+))?$/
        , B = /(?:^|\s)hover(\.\S+)?\b/
        , C = /^key/
        , D = /^(?:mouse|contextmenu)|click/
        , E = /^(?:focusinfocus|focusoutblur)$/
        , F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
        , G = function (a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(),
                b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }
        , H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }
        , I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d,
                    d = p.handler,
                    g = p.selector),
                    d.guid || (d.guid = f.guid++),
                    j = h.events,
                    j || (h.events = j = {}),
                    i = h.handle,
                    i || (h.handle = i = function (a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                    }
                        ,
                        i.elem = a),
                    c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [],
                        m = l[1],
                        n = (l[2] || "").split(".").sort(),
                        s = f.event.special[m] || {},
                        m = (g ? s.delegateType : s.bindType) || m,
                        s = f.event.special[m] || {},
                        o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: g && G(g),
                            namespace: n.join(".")
                        }, p),
                        r = j[m];
                    if (!r) {
                        r = j[m] = [],
                            r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1)
                            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o),
                        o.handler.guid || (o.handler.guid = d.guid)),
                        g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                        f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [],
                        j = k = i[1],
                        l = i[2];
                    if (!j) {
                        for (j in o)
                            f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {},
                        j = (d ? p.delegateType : p.bindType) || j,
                        r = o[j] || [],
                        m = r.length,
                        l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++)
                        s = r[n],
                            (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1),
                                s.selector && r.delegateCount--,
                                p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle),
                        delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle,
                    q && (q.elem = null),
                    f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered))
                    return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1),
                    k = !0),
                    h.indexOf(".") >= 0 && (i = h.split("."),
                        h = i.shift(),
                        i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h])
                    return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h),
                    c.type = h,
                    c.isTrigger = !0,
                    c.exclusive = k,
                    c.namespace = i.join("."),
                    c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                    o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j)
                        j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b,
                    c.target || (c.target = e),
                    d = d != null ? f.makeArray(d) : [],
                    d.unshift(c),
                    p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1)
                    return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h,
                        m = E.test(s + h) ? e : e.parentNode,
                        n = null;
                    for (; m; m = m.parentNode)
                        r.push([m, s]),
                            n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
                    m = r[l][0],
                        c.type = r[l][1],
                        q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                        q && q.apply(m, d),
                        q = o && m[o],
                        q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h,
                    !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o],
                        n && (e[o] = null),
                        f.event.triggered = h,
                        e[h](),
                        f.event.triggered = b,
                        n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c,
                c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this),
                        n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this)
                        if (m.disabled !== !0) {
                            p = {},
                                r = [],
                                n[0] = m;
                            for (k = 0; k < e; k++)
                                s = d[k],
                                    t = s.selector,
                                    p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
                                    p[t] && r.push(s);
                            r.length && j.push({
                                elem: m,
                                matches: r
                            })
                        }
                }
                d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k],
                        c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))
                            c.data = s.data,
                                c.handleObj = s,
                                o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g),
                                o !== b && (c.result = o,
                                    o === !1 && (c.preventDefault(),
                                        c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c,
                    f = e.documentElement,
                    g = e.body,
                    a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                    a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                    !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
                    !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando])
                return a;
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;)
                e = i[--d],
                    a[e] = g[e];
            a.target || (a.target = g.srcElement || c),
                a.target.nodeType === 3 && (a.target = a.target.parentNode),
                a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
        }
    },
        f.event.handle = f.event.dispatch,
        f.removeEvent = c.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
            : function (a, b, c) {
                a.detachEvent && a.detachEvent("on" + b, c)
            }
        ,
        f.Event = function (a, b) {
            if (!(this instanceof f.Event))
                return new f.Event(a, b);
            a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a,
                b && f.extend(this, b),
                this.timeStamp = a && a.timeStamp || f.now(),
                this[f.expando] = !0
        }
        ,
        f.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(),
                    a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = K,
                    this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        },
        f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                    if (!d || d !== c && !f.contains(c, d))
                        a.type = e.origType,
                            h = e.handler.apply(this, arguments),
                            a.type = b;
                    return h
                }
            }
        }),
        f.support.submitBubbles || (f.event.special.submit = {
            setup: function () {
                if (f.nodeName(this, "form"))
                    return !1;
                f.event.add(this, "click._submit keypress._submit", function (a) {
                    var c = a.target
                        , d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                        a._submit_bubble = !0
                    }),
                        d._submit_attached = !0)
                })
            },
            postDispatch: function (a) {
                a._submit_bubble && (delete a._submit_bubble,
                    this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function () {
                if (f.nodeName(this, "form"))
                    return !1;
                f.event.remove(this, "._submit")
            }
        }),
        f.support.changeBubbles || (f.event.special.change = {
            setup: function () {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio")
                        f.event.add(this, "propertychange._change", function (a) {
                            a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }),
                            f.event.add(this, "click._change", function (a) {
                                this._just_changed && !a.isTrigger && (this._just_changed = !1,
                                    f.event.simulate("change", this, a, !0))
                            });
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }),
                        b._change_attached = !0)
                })
            },
            handle: function (a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
                    return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }),
        f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var d = 0
                , e = function (a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function () {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function () {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }),
        f.fn.extend({
            on: function (a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c,
                        c = b);
                    for (i in a)
                        this.on(i, c, d, a[i], g);
                    return this
                }
                d == null && e == null ? (e = c,
                    d = c = b) : e == null && (typeof c == "string" ? (e = d,
                        d = b) : (e = d,
                            d = c,
                            c = b));
                if (e === !1)
                    e = J;
                else if (!e)
                    return this;
                g === 1 && (h = e,
                    e = function (a) {
                        f().off(a);
                        return h.apply(this, arguments)
                    }
                    ,
                    e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function () {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function (a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a)
                        this.off(g, c, a[g]);
                    return this
                }
                if (c === !1 || typeof c == "function")
                    d = c,
                        c = b;
                d === !1 && (d = J);
                return this.each(function () {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            live: function (a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function (a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function (a, b) {
                return this.each(function () {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                if (this[0])
                    return f.event.trigger(a, b, this[0], !0)
            },
            toggle: function (a) {
                var b = arguments
                    , c = a.guid || f.guid++
                    , d = 0
                    , e = function (c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1),
                            c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length)
                    b[d++].guid = c;
                return this.click(e)
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            f.fn[b] = function (a, c) {
                c == null && (c = a,
                    a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
                ,
                f.attrFn && (f.attrFn[b] = !0),
                C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
                D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function () {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c,
                                    j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c,
                                j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
                , d = "sizcache" + (Math.random() + "").replace(".", "")
                , e = 0
                , g = Object.prototype.toString
                , h = !1
                , i = !0
                , j = /\\/g
                , k = /\r\n/g
                , l = /\W/;
            [0, 0].sort(function () {
                i = !1;
                return 0
            });
            var m = function (b, d, e, f) {
                e = e || [],
                    d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9)
                    return [];
                if (!b || typeof b != "string")
                    return e;
                var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
                do {
                    a.exec(""),
                        i = a.exec(x);
                    if (i) {
                        x = i[3],
                            w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i); if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]])
                        j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length)
                            b = w.shift(),
                                o.relative[b] && (b += w.shift()),
                                j = y(b, j, f)
                    }
                else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v),
                        d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v),
                            j = n.expr ? m.filter(n.expr, n.set) : n.set,
                            w.length > 0 ? k = s(j) : u = !1;
                        while (w.length)
                            q = w.pop(),
                                r = q,
                                o.relative[q] ? r = w.pop() : q = "",
                                r == null && (r = d),
                                o.relative[q](k, r, v)
                    } else
                        k = w = []
                }
                k || (k = j),
                    k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u)
                        e.push.apply(e, k);
                    else if (d && d.nodeType === 1)
                        for (t = 0; k[t] != null; t++)
                            k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                    else
                        for (t = 0; k[t] != null; t++)
                            k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else
                    s(k, e);
                l && (m(l, h, e, f),
                    m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function (a) {
                if (u) {
                    h = i,
                        a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++)
                            a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }
                ,
                m.matches = function (a, b) {
                    return m(a, null, null, b)
                }
                ,
                m.matchesSelector = function (a, b) {
                    return m(b, null, null, [a]).length > 0
                }
                ,
                m.find = function (a, b, c) {
                    var d, e, f, g, h, i;
                    if (!a)
                        return [];
                    for (e = 0,
                        f = o.order.length; e < f; e++) {
                        h = o.order[e];
                        if (g = o.leftMatch[h].exec(a)) {
                            i = g[1],
                                g.splice(1, 1);
                            if (i.substr(i.length - 1) !== "\\") {
                                g[1] = (g[1] || "").replace(j, ""),
                                    d = o.find[h](g, b, c);
                                if (d != null) {
                                    a = a.replace(o.match[h], "");
                                    break
                                }
                            }
                        }
                    }
                    d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                    return {
                        set: d,
                        expr: a
                    }
                }
                ,
                m.filter = function (a, c, d, e) {
                    var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
                    while (a && c.length) {
                        for (h in o.filter)
                            if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                                k = o.filter[h],
                                    l = f[1],
                                    g = !1,
                                    f.splice(1, 1);
                                if (l.substr(l.length - 1) === "\\")
                                    continue;
                                s === r && (r = []);
                                if (o.preFilter[h]) {
                                    f = o.preFilter[h](f, s, d, r, e, t);
                                    if (!f)
                                        g = i = !0;
                                    else if (f === !0)
                                        continue
                                }
                                if (f)
                                    for (n = 0; (j = s[n]) != null; n++)
                                        j && (i = k(j, f, n, s),
                                            p = e ^ i,
                                            d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j),
                                                g = !0));
                                if (i !== b) {
                                    d || (s = r),
                                        a = a.replace(o.match[h], "");
                                    if (!g)
                                        return [];
                                    break
                                }
                            }
                        if (a === q)
                            if (g == null)
                                m.error(a);
                            else
                                break;
                        q = a
                    }
                    return s
                }
                ,
                m.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }
                ;
            var n = m.getText = function (a) {
                var b, c, d = a.nodeType, e = "";
                if (d) {
                    if (d === 1 || d === 9 || d === 11) {
                        if (typeof a.textContent == "string")
                            return a.textContent;
                        if (typeof a.innerText == "string")
                            return a.innerText.replace(k, "");
                        for (a = a.firstChild; a; a = a.nextSibling)
                            e += n(a)
                    } else if (d === 3 || d === 4)
                        return a.nodeValue
                } else
                    for (b = 0; c = a[b]; b++)
                        c.nodeType !== 8 && (e += n(c));
                return e
            }
                , o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href")
                        },
                        type: function (a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function (a, b) {
                            var c = typeof b == "string"
                                , d = c && !l.test(b)
                                , e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++)
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1)
                                        ;
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            e && m.filter(b, a, !0)
                        },
                        ">": function (a, b) {
                            var c, d = typeof b == "string", e = 0, f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++)
                                    c = a[e],
                                        c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function (a, b, c) {
                            var d, f = e++, g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                                d = b,
                                g = w),
                                g("parentNode", b, f, a, d, c)
                        },
                        "~": function (a, b, c) {
                            var d, f = e++, g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(),
                                d = b,
                                g = w),
                                g("previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function (a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function (a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = []
                                    , d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++)
                                    d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function (a, b) {
                            if (typeof b.getElementsByTagName != "undefined")
                                return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f)
                                return a;
                            for (var g = 0, h; (h = b[g]) != null; g++)
                                h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                            return !1
                        },
                        ID: function (a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function (a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function (a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]),
                                    a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0,
                                    a[3] = b[3] - 0
                            } else
                                a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                                a[4] = (a[4] || a[5] || "").replace(j, ""),
                                a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function (b, c, d, e, f) {
                            if (b[1] === "not")
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
                                    b[3] = m(b[3], null, null, c);
                                else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                                return !0;
                            return b
                        },
                        POS: function (a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function (a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function (a) {
                            return a.disabled === !0
                        },
                        checked: function (a) {
                            return a.checked === !0
                        },
                        selected: function (a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function (a) {
                            return !!a.firstChild
                        },
                        empty: function (a) {
                            return !a.firstChild
                        },
                        has: function (a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function (a) {
                            var b = a.getAttribute("type")
                                , c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (a, b) {
                            return b === 0
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function (a, b) {
                            return b % 2 === 0
                        },
                        odd: function (a, b) {
                            return b % 2 === 1
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1]
                                , f = o.filters[e];
                            if (f)
                                return f(a, c, b, d);
                            if (e === "contains")
                                return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a)
                                        return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function (a, b) {
                            var c, e, f, g, h, i, j, k = b[1], l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling)
                                        if (l.nodeType === 1)
                                            return !1;
                                    if (k === "first")
                                        return !0;
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling)
                                        if (l.nodeType === 1)
                                            return !1;
                                    return !0;
                                case "nth":
                                    c = b[2],
                                        e = b[3];
                                    if (c === 1 && e === 0)
                                        return !0;
                                    f = b[0],
                                        g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l.nextSibling)
                                            l.nodeType === 1 && (l.nodeIndex = ++i);
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function (a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function (a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function (a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function (a, b) {
                            var c = b[1]
                                , d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c)
                                , e = d + ""
                                , f = b[2]
                                , g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2]
                                , f = o.setFilters[e];
                            if (f)
                                return f(a, c, b, d)
                        }
                    }
                }
                , p = o.match.POS
                , q = function (a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match)
                o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                    o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            o.match.globalPOS = p;
            var s = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function (a, b) {
                    var c = 0
                        , d = b || [];
                    if (g.call(a) === "[object Array]")
                        Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++)
                            d.push(a[c]);
                    else
                        for (; a[c]; c++)
                            d.push(a[c]);
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function (a, b) {
                if (a === b) {
                    h = !0;
                    return 0
                }
                if (!a.compareDocumentPosition || !b.compareDocumentPosition)
                    return a.compareDocumentPosition ? -1 : 1;
                return a.compareDocumentPosition(b) & 4 ? -1 : 1
            }
                : (u = function (a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex)
                        return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
                    if (g === i)
                        return v(a, b);
                    if (!g)
                        return -1;
                    if (!i)
                        return 1;
                    while (j)
                        e.unshift(j),
                            j = j.parentNode;
                    j = i;
                    while (j)
                        f.unshift(j),
                            j = j.parentNode;
                    c = e.length,
                        d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k])
                            return v(e[k], f[k]);
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }
                    ,
                    v = function (a, b, c) {
                        if (a === b)
                            return c;
                        var d = a.nextSibling;
                        while (d) {
                            if (d === b)
                                return -1;
                            d = d.nextSibling
                        }
                        return 1
                    }
                ),
                function () {
                    var a = c.createElement("div")
                        , d = "script" + (new Date).getTime()
                        , e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>",
                        e.insertBefore(a, e.firstChild),
                        c.getElementById(d) && (o.find.ID = function (a, c, d) {
                            if (typeof c.getElementById != "undefined" && !d) {
                                var e = c.getElementById(a[1]);
                                return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                            }
                        }
                            ,
                            o.filter.ID = function (a, b) {
                                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                                return a.nodeType === 1 && c && c.nodeValue === b
                            }
                        ),
                        e.removeChild(a),
                        e = a = null
                }(),
                function () {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")),
                        a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                            var c = b.getElementsByTagName(a[1]);
                            if (a[1] === "*") {
                                var d = [];
                                for (var e = 0; c[e]; e++)
                                    c[e].nodeType === 1 && d.push(c[e]);
                                c = d
                            }
                            return c
                        }
                        ),
                        a.innerHTML = "<a href='#'></a>",
                        a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                            return a.getAttribute("href", 2)
                        }
                        ),
                        a = null
                }(),
                c.querySelectorAll && function () {
                    var a = m
                        , b = c.createElement("div")
                        , d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        m = function (b, e, f, g) {
                            e = e || c;
                            if (!g && !m.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1])
                                        return s(e.getElementsByTagName(b), f);
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName)
                                        return s(e.getElementsByClassName(h[2]), f)
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body)
                                        return s([e.body], f);
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode)
                                            return s([], f);
                                        if (i.id === h[3])
                                            return s([i], f)
                                    }
                                    try {
                                        return s(e.querySelectorAll(b), f)
                                    } catch (j) { }
                                } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                    var k = e
                                        , l = e.getAttribute("id")
                                        , n = l || d
                                        , p = e.parentNode
                                        , q = /^\s*[+~]/.test(b);
                                    l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                                        q && p && (e = e.parentNode);
                                    try {
                                        if (!q || p)
                                            return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    } catch (r) { } finally {
                                        l || k.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        }
                            ;
                        for (var e in a)
                            m[e] = a[e];
                        b = null
                    }
                }(),
                function () {
                    var a = c.documentElement
                        , b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div")
                            , e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function (a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a))
                                try {
                                    if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                        var f = b.call(a, c);
                                        if (f || !d || a.document && a.document.nodeType !== 11)
                                            return f
                                    }
                                } catch (g) { }
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1)
                            return;
                        o.order.splice(1, 0, "CLASS"),
                            o.find.CLASS = function (a, b, c) {
                                if (typeof b.getElementsByClassName != "undefined" && !c)
                                    return b.getElementsByClassName(a[1])
                            }
                            ,
                            a = null
                    }
                }(),
                c.documentElement.contains ? m.contains = function (a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                }
                    : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
                        return !!(a.compareDocumentPosition(b) & 16)
                    }
                        : m.contains = function () {
                            return !1
                        }
                ,
                m.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                }
                ;
            var y = function (a, b, c) {
                var d, e = [], f = "", g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a))
                    f += d[0],
                        a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++)
                    m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr,
                m.selectors.attrMap = {},
                f.find = m,
                f.expr = m.selectors,
                f.expr[":"] = f.expr.filters,
                f.unique = m.uniqueSort,
                f.text = m.getText,
                f.isXMLDoc = m.isXML,
                f.contains = m.contains
        }();
    var L = /Until$/
        , M = /^(?:parents|prevUntil|prevAll)/
        , N = /,/
        , O = /^.[^:#\[\.,]*$/
        , P = Array.prototype.slice
        , Q = f.expr.match.globalPOS
        , R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string")
                return f(a).filter(function () {
                    for (c = 0,
                        d = b.length; c < d; c++)
                        if (f.contains(b[c], this))
                            return !0
                });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0,
                d = this.length; c < d; c++) {
                g = e.length,
                    f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a]))
                        return !0
            })
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++)
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        });
                    g = g.parentNode,
                        h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0,
                e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                        break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a)
                return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string")
                return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a)
                , d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }),
        f.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && b.nodeType !== 11 ? b : null
            },
            parents: function (a) {
                return f.dir(a, "parentNode")
            },
            parentsUntil: function (a, b, c) {
                return f.dir(a, "parentNode", c)
            },
            next: function (a) {
                return f.nth(a, 2, "nextSibling")
            },
            prev: function (a) {
                return f.nth(a, 2, "previousSibling")
            },
            nextAll: function (a) {
                return f.dir(a, "nextSibling")
            },
            prevAll: function (a) {
                return f.dir(a, "previousSibling")
            },
            nextUntil: function (a, b, c) {
                return f.dir(a, "nextSibling", c)
            },
            prevUntil: function (a, b, c) {
                return f.dir(a, "previousSibling", c)
            },
            siblings: function (a) {
                return f.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function (a) {
                return f.sibling(a.firstChild)
            },
            contents: function (a) {
                return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
            }
        }, function (a, b) {
            f.fn[a] = function (c, d) {
                var e = f.map(this, b, c);
                L.test(a) || (d = c),
                    d && typeof d == "string" && (e = f.filter(d, e)),
                    e = this.length > 1 && !R[a] ? f.unique(e) : e,
                    (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
                return this.pushStack(e, a, P.call(arguments).join(","))
            }
        }),
        f.extend({
            filter: function (a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
            },
            dir: function (a, c, d) {
                var e = []
                    , g = a[c];
                while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
                    g.nodeType === 1 && e.push(g),
                        g = g[c];
                return e
            },
            nth: function (a, b, c, d) {
                b = b || 1;
                var e = 0;
                for (; a; a = a[c])
                    if (a.nodeType === 1 && ++e === b)
                        break;
                return a
            },
            sibling: function (a, b) {
                var c = [];
                for (; a; a = a.nextSibling)
                    a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , W = / jQuery\d+="(?:\d+|null)"/g
        , X = /^\s+/
        , Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
        , Z = /<([\w:]+)/
        , $ = /<tbody/i
        , _ = /<|&#?\w+;/
        , ba = /<(?:script|style)/i
        , bb = /<(?:script|object|embed|option|style)/i
        , bc = new RegExp("<(?:" + V + ")[\\s/>]", "i")
        , bd = /checked\s*(?:[^=]|=\s*.checked.)/i
        , be = /\/(java|ecma)script/i
        , bf = /^\s*<!(?:\[CDATA\[|\-\-)/
        , bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }
        , bh = U(c);
    bg.optgroup = bg.option,
        bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
        bg.th = bg.td,
        f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
        f.fn.extend({
            text: function (a) {
                return f.access(this, function (a) {
                    return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function (a) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        f(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function () {
                            var a = this;
                            while (a.firstChild && a.firstChild.nodeType === 1)
                                a = a.firstChild;
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function (a) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        f(this).wrapInner(a.call(this, b))
                    });
                return this.each(function () {
                    var b = f(this)
                        , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                var b = f.isFunction(a);
                return this.each(function (c) {
                    f(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this)
                    });
                if (arguments.length) {
                    var a = f.clean(arguments);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments)
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, f.clean(arguments));
                    return a
                }
            },
            remove: function (a, b) {
                for (var c = 0, d; (d = this[c]) != null; c++)
                    if (!a || f.filter(a, [d]).length)
                        !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")),
                            f.cleanData([d])),
                            d.parentNode && d.parentNode.removeChild(d);
                return this
            },
            empty: function () {
                for (var a = 0, b; (b = this[a]) != null; a++) {
                    b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                    while (b.firstChild)
                        b.removeChild(b.firstChild)
                }
                return this
            },
            clone: function (a, b) {
                a = a == null ? !1 : a,
                    b = b == null ? a : b;
                return this.map(function () {
                    return f.clone(this, a, b)
                })
            },
            html: function (a) {
                return f.access(this, function (a) {
                    var c = this[0] || {}
                        , d = 0
                        , e = this.length;
                    if (a === b)
                        return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                    if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Y, "<$1></$2>");
                        try {
                            for (; d < e; d++)
                                c = this[d] || {},
                                    c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")),
                                        c.innerHTML = a);
                            c = 0
                        } catch (g) { }
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function (a) {
                if (this[0] && this[0].parentNode) {
                    if (f.isFunction(a))
                        return this.each(function (b) {
                            var c = f(this)
                                , d = c.html();
                            c.replaceWith(a.call(this, b, d))
                        });
                    typeof a != "string" && (a = f(a).detach());
                    return this.each(function () {
                        var b = this.nextSibling
                            , c = this.parentNode;
                        f(this).remove(),
                            b ? f(b).before(a) : f(c).append(a)
                    })
                }
                return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function (a) {
                return this.remove(a, !0)
            },
            domManip: function (a, c, d) {
                var e, g, h, i, j = a[0], k = [];
                if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))
                    return this.each(function () {
                        f(this).domManip(a, c, d, !0)
                    });
                if (f.isFunction(j))
                    return this.each(function (e) {
                        var g = f(this);
                        a[0] = j.call(this, e, c ? g.html() : b),
                            g.domManip(a, c, d)
                    });
                if (this[0]) {
                    i = j && j.parentNode,
                        f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                            fragment: i
                        } : e = f.buildFragment(a, this, k),
                        h = e.fragment,
                        h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                    if (g) {
                        c = c && f.nodeName(g, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                            d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                    k.length && f.each(k, function (a, b) {
                        b.src ? f.ajax({
                            type: "GET",
                            global: !1,
                            url: b.src,
                            async: !1,
                            dataType: "script"
                        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
                            b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }),
        f.buildFragment = function (a, b, d) {
            var e, g, h, i, j = a[0];
            b && b[0] && (i = b[0].ownerDocument || b[0]),
                i.createDocumentFragment || (i = c),
                a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0,
                    h = f.fragments[j],
                    h && h !== 1 && (e = h)),
                e || (e = i.createDocumentFragment(),
                    f.clean(a, i, e, d)),
                g && (f.fragments[j] = h ? e : 1);
            return {
                fragment: e,
                cacheable: g
            }
        }
        ,
        f.fragments = {},
        f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            f.fn[a] = function (c) {
                var d = []
                    , e = f(c)
                    , g = this.length === 1 && this[0].parentNode;
                if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                    e[b](this[0]);
                    return this
                }
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = (h > 0 ? this.clone(!0) : this).get();
                    f(e[h])[b](j),
                        d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }),
        f.extend({
            clone: function (a, b, c) {
                var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
                if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                    bk(a, h),
                        d = bl(a),
                        e = bl(h);
                    for (g = 0; d[g]; ++g)
                        e[g] && bk(d[g], e[g])
                }
                if (b) {
                    bj(a, h);
                    if (c) {
                        d = bl(a),
                            e = bl(h);
                        for (g = 0; d[g]; ++g)
                            bj(d[g], e[g])
                    }
                }
                d = e = null;
                return h
            },
            clean: function (a, b, d, e) {
                var g, h, i, j = [];
                b = b || c,
                    typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
                for (var k = 0, l; (l = a[k]) != null; k++) {
                    typeof l == "number" && (l += "");
                    if (!l)
                        continue;
                    if (typeof l == "string")
                        if (!_.test(l))
                            l = b.createTextNode(l);
                        else {
                            l = l.replace(Y, "<$1></$2>");
                            var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r;
                            b === c ? bh.appendChild(p) : U(b).appendChild(p),
                                p.innerHTML = n[1] + l + n[2];
                            while (o--)
                                p = p.lastChild;
                            if (!f.support.tbody) {
                                var s = $.test(l)
                                    , t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                                for (i = t.length - 1; i >= 0; --i)
                                    f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                            }
                            !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
                                l = p.childNodes,
                                p && (p.parentNode.removeChild(p),
                                    q.length > 0 && (r = q[q.length - 1],
                                        r && r.parentNode && r.parentNode.removeChild(r)))
                        }
                    var u;
                    if (!f.support.appendChecked)
                        if (l[0] && typeof (u = l.length) == "number")
                            for (i = 0; i < u; i++)
                                bn(l[i]);
                        else
                            bn(l);
                    l.nodeType ? j.push(l) : j = f.merge(j, l)
                }
                if (d) {
                    g = function (a) {
                        return !a.type || be.test(a.type)
                    }
                        ;
                    for (k = 0; j[k]; k++) {
                        h = j[k];
                        if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type)))
                            e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                        else {
                            if (h.nodeType === 1) {
                                var v = f.grep(h.getElementsByTagName("script"), g);
                                j.splice.apply(j, [k + 1, 0].concat(v))
                            }
                            d.appendChild(h)
                        }
                    }
                }
                return j
            },
            cleanData: function (a) {
                var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
                for (var h = 0, i; (i = a[h]) != null; h++) {
                    if (i.nodeName && f.noData[i.nodeName.toLowerCase()])
                        continue;
                    c = i[f.expando];
                    if (c) {
                        b = d[c];
                        if (b && b.events) {
                            for (var j in b.events)
                                e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                            delete d[c]
                    }
                }
            }
        });
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }
        ,
        f.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = by(a, "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (a, c, d, e) {
                if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                    var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                    c = f.cssProps[i] || i;
                    if (d === b) {
                        if (k && "get" in k && (g = k.get(a, !1, e)) !== b)
                            return g;
                        return j[c]
                    }
                    h = typeof d,
                        h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)),
                            h = "number");
                    if (d == null || h === "number" && isNaN(d))
                        return;
                    h === "number" && !f.cssNumber[i] && (d += "px");
                    if (!k || !("set" in k) || (d = k.set(a, d)) !== b)
                        try {
                            j[c] = d
                        } catch (l) { }
                }
            },
            css: function (a, c, d) {
                var e, g;
                c = f.camelCase(c),
                    g = f.cssHooks[c],
                    c = f.cssProps[c] || c,
                    c === "cssFloat" && (c = "float");
                if (g && "get" in g && (e = g.get(a, !0, d)) !== b)
                    return e;
                if (by)
                    return by(a, c)
            },
            swap: function (a, b, c) {
                var d = {}, e, f;
                for (f in b)
                    d[f] = a.style[f],
                        a.style[f] = b[f];
                e = c.call(a);
                for (f in b)
                    a.style[f] = d[f];
                return e
            }
        }),
        f.curCSS = f.css,
        c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
            var c, d, e, g, h = a.style;
            b = b.replace(br, "-$1").toLowerCase(),
                (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b),
                    c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
                !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width,
                    h.width = c,
                    c = e.width,
                    h.width = g);
            return c
        }
        ),
        c.documentElement.currentStyle && (bA = function (a, b) {
            var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
            f == null && g && (e = g[b]) && (f = e),
                bt.test(f) && (c = g.left,
                    d = a.runtimeStyle && a.runtimeStyle.left,
                    d && (a.runtimeStyle.left = a.currentStyle.left),
                    g.left = b === "fontSize" ? "1em" : f,
                    f = g.pixelLeft + "px",
                    g.left = c,
                    d && (a.runtimeStyle.left = d));
            return f === "" ? "auto" : f
        }
        ),
        by = bz || bA,
        f.each(["height", "width"], function (a, b) {
            f.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c)
                        return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                            return bB(a, b, d)
                        })
                },
                set: function (a, b) {
                    return bs.test(b) ? b + "px" : b
                }
            }
        }),
        f.support.opacity || (f.cssHooks.opacity = {
            get: function (a, b) {
                return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function (a, b) {
                var c = a.style
                    , d = a.currentStyle
                    , e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : ""
                    , g = d && d.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                    c.removeAttribute("filter");
                    if (d && !d.filter)
                        return
                }
                c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
            }
        }),
        f(function () {
            f.support.reliableMarginRight || (f.cssHooks.marginRight = {
                get: function (a, b) {
                    return f.swap(a, {
                        display: "inline-block"
                    }, function () {
                        return b ? by(a, "margin-right") : a.style.marginRight
                    })
                }
            })
        }),
        f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
            var b = a.offsetWidth
                , c = a.offsetHeight;
            return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
        }
            ,
            f.expr.filters.visible = function (a) {
                return !f.expr.filters.hidden(a)
            }
        ),
        f.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (a, b) {
            f.cssHooks[a + b] = {
                expand: function (c) {
                    var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                    for (d = 0; d < 4; d++)
                        f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                    return f
                }
            }
        });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"),
            bU.href = "",
            bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [],
        f.fn.extend({
            load: function (a, c, d) {
                if (typeof a != "string" && bR)
                    return bR.apply(this, arguments);
                if (!this.length)
                    return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var g = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                var h = "GET";
                c && (f.isFunction(c) ? (d = c,
                    c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional),
                        h = "POST"));
                var i = this;
                f.ajax({
                    url: a,
                    type: h,
                    dataType: "html",
                    data: c,
                    complete: function (a, b, c) {
                        c = a.responseText,
                            a.isResolved() && (a.done(function (a) {
                                c = a
                            }),
                                i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)),
                            d && i.each(d, [c, b, a])
                    }
                });
                return this
            },
            serialize: function () {
                return f.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? f.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
                }).map(function (a, b) {
                    var c = f(this).val();
                    return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                        return {
                            name: b.name,
                            value: a.replace(bE, "\r\n")
                        }
                    }) : {
                            name: b.name,
                            value: c.replace(bE, "\r\n")
                        }
                }).get()
            }
        }),
        f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
            f.fn[b] = function (a) {
                return this.on(b, a)
            }
        }),
        f.each(["get", "post"], function (a, c) {
            f[c] = function (a, d, e, g) {
                f.isFunction(d) && (g = g || e,
                    e = d,
                    d = b);
                return f.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: g
                })
            }
        }),
        f.extend({
            getScript: function (a, c) {
                return f.get(a, b, c, "script")
            },
            getJSON: function (a, b, c) {
                return f.get(a, b, c, "json")
            },
            ajaxSetup: function (a, b) {
                b ? b$(a, f.ajaxSettings) : (b = a,
                    a = f.ajaxSettings),
                    b$(a, b);
                return a
            },
            ajaxSettings: {
                url: bU,
                isLocal: bI.test(bV[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": bW
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": f.parseJSON,
                    "text xml": f.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: bY(bS),
            ajaxTransport: bY(bT),
            ajax: function (a, c) {
                function w(a, c, l, m) {
                    if (s !== 2) {
                        s = 2,
                            q && clearTimeout(q),
                            p = b,
                            n = m || "",
                            v.readyState = a > 0 ? 4 : 0;
                        var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                        if (a >= 200 && a < 300 || a === 304) {
                            if (d.ifModified) {
                                if (y = v.getResponseHeader("Last-Modified"))
                                    f.lastModified[k] = y;
                                if (z = v.getResponseHeader("Etag"))
                                    f.etag[k] = z
                            }
                            if (a === 304)
                                w = "notmodified",
                                    o = !0;
                            else
                                try {
                                    r = cb(d, x),
                                        w = "success",
                                        o = !0
                                } catch (A) {
                                    w = "parsererror",
                                        u = A
                                }
                        } else {
                            u = w;
                            if (!w || a)
                                w = "error",
                                    a < 0 && (a = 0)
                        }
                        v.status = a,
                            v.statusText = "" + (c || w),
                            o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                            v.statusCode(j),
                            j = b,
                            t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                            i.fireWith(e, [v, w]),
                            t && (g.trigger("ajaxComplete", [v, d]),
                                --f.active || f.event.trigger("ajaxStop"))
                    }
                }
                typeof a == "object" && (c = a,
                    a = b),
                    c = c || {};
                var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a,
                                l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n))
                                    o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort",
                            p && p.abort(a),
                            w(0, a);
                        return this
                    }
                };
                h.promise(v),
                    v.success = v.done,
                    v.error = v.fail,
                    v.complete = i.add,
                    v.statusCode = function (a) {
                        if (a) {
                            var b;
                            if (s < 2)
                                for (b in a)
                                    j[b] = [j[b], a[b]];
                            else
                                b = a[v.status],
                                    v.then(b, b)
                        }
                        return this
                    }
                    ,
                    d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"),
                    d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO),
                    d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()),
                        d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))),
                    d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
                    bZ(bS, d, c, v);
                if (s === 2)
                    return !1;
                t = d.global,
                    d.type = d.type.toUpperCase(),
                    d.hasContent = !bJ.test(d.type),
                    t && f.active++ === 0 && f.event.trigger("ajaxStart");
                if (!d.hasContent) {
                    d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data,
                        delete d.data),
                        k = d.url;
                    if (d.cache === !1) {
                        var x = f.now()
                            , y = d.url.replace(bP, "$1_=" + x);
                        d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                    }
                }
                (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
                    d.ifModified && (k = k || d.url,
                        f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
                        f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
                    v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers)
                    v.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                    v.abort();
                    return !1
                }
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    v[u](d[u]);
                p = bZ(bT, d, c, v);
                if (!p)
                    w(-1, "No Transport");
                else {
                    v.readyState = 1,
                        t && g.trigger("ajaxSend", [v, d]),
                        d.async && d.timeout > 0 && (q = setTimeout(function () {
                            v.abort("timeout")
                        }, d.timeout));
                    try {
                        s = 1,
                            p.send(l, w)
                    } catch (z) {
                        if (s < 2)
                            w(-1, z);
                        else
                            throw z
                    }
                }
                return v
            },
            param: function (a, c) {
                var d = []
                    , e = function (a, b) {
                        b = f.isFunction(b) ? b() : b,
                            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                    };
                c === b && (c = f.ajaxSettings.traditional);
                if (f.isArray(a) || a.jquery && !f.isPlainObject(a))
                    f.each(a, function () {
                        e(this.name, this.value)
                    });
                else
                    for (var g in a)
                        b_(g, a[g], c, e);
                return d.join("&").replace(bC, "+")
            }
        }),
        f.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
    var cc = f.now()
        , cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }),
        f.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
            if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
                var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
                b.jsonp !== !1 && (j = j.replace(cd, l),
                    b.url === j && (e && (k = k.replace(cd, l)),
                        b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
                    b.url = j,
                    b.data = k,
                    a[h] = function (a) {
                        g = [a]
                    }
                    ,
                    d.always(function () {
                        a[h] = i,
                            g && f.isFunction(i) && a[h](g[0])
                    }),
                    b.converters["script json"] = function () {
                        g || f.error(h + " was not called");
                        return g[0]
                    }
                    ,
                    b.dataTypes[0] = "json";
                return "script"
            }
        }),
        f.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (a) {
                    f.globalEval(a);
                    return a
                }
            }
        }),
        f.ajaxPrefilter("script", function (a) {
            a.cache === b && (a.cache = !1),
                a.crossDomain && (a.type = "GET",
                    a.global = !1)
        }),
        f.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
                return {
                    send: function (f, g) {
                        d = c.createElement("script"),
                            d.async = "async",
                            a.scriptCharset && (d.charset = a.scriptCharset),
                            d.src = a.url,
                            d.onload = d.onreadystatechange = function (a, c) {
                                if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                                    d.onload = d.onreadystatechange = null,
                                        e && d.parentNode && e.removeChild(d),
                                        d = b,
                                        c || g(200, "success")
                            }
                            ,
                            e.insertBefore(d, e.firstChild)
                    },
                    abort: function () {
                        d && d.onload(0, 1)
                    }
                }
            }
        });
    var ce = a.ActiveXObject ? function () {
        for (var a in cg)
            cg[a](0, 1)
    }
        : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    }
        : ch,
        function (a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()),
        f.support.ajax && f.ajaxTransport(function (c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function (e, g) {
                        var h = c.xhr(), i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields)
                                h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                            !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e)
                                h.setRequestHeader(j, e[j])
                        } catch (k) { }
                        h.send(c.hasContent && c.data || null),
                            d = function (a, e) {
                                var j, k, l, m, n;
                                try {
                                    if (d && (e || h.readyState === 4)) {
                                        d = b,
                                            i && (h.onreadystatechange = f.noop,
                                                ce && delete cg[i]);
                                        if (e)
                                            h.readyState !== 4 && h.abort();
                                        else {
                                            j = h.status,
                                                l = h.getAllResponseHeaders(),
                                                m = {},
                                                n = h.responseXML,
                                                n && n.documentElement && (m.xml = n);
                                            try {
                                                m.text = h.responseText
                                            } catch (a) { }
                                            try {
                                                k = h.statusText
                                            } catch (o) {
                                                k = ""
                                            }
                                            !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                        }
                                    }
                                } catch (p) {
                                    e || g(-1, p)
                                }
                                m && g(j, k, m, l)
                            }
                            ,
                            !c.async || h.readyState === 4 ? d() : (i = ++cf,
                                ce && (cg || (cg = {},
                                    f(a).unload(ce)),
                                    cg[i] = d),
                                h.onreadystatechange = d)
                    },
                    abort: function () {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0)
                return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++)
                d = this[g],
                    d.style && (e = d.style.display,
                        !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""),
                        (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none")
                        d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0)
                return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0, h = this.length;
            for (; g < h; g++)
                d = this[g],
                    d.style && (e = f.css(d, "display"),
                        e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++)
                this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i),
                        i !== g && (a[g] = a[i],
                            delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]),
                            delete a[g];
                        for (i in l)
                            i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g],
                        f.isArray(h) ? (b.animatedProperties[g] = h[1],
                            h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d)
                        return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                        f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a)
                    j = new f.fx(this, b, i),
                        h = a[i],
                        cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0),
                            q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"),
                                j[q]()) : j[h]()) : (m = cn.exec(h),
                                    n = j.cur(),
                                    m ? (o = parseFloat(m[2]),
                                        p = m[3] || (f.cssNumber[i] ? "" : "px"),
                                        p !== "px" && (f.style(this, i, (o || 1) + p),
                                            n = (o || 1) / j.cur() * n,
                                            f.style(this, i, n + p)),
                                        m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n),
                                        j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a))
                return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d) {
            typeof a != "string" && (d = c,
                c = a,
                a = b),
                c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0),
                        e.stop(d)
                }
                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g)
                        g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else
                    g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;)
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(),
                        c = !0,
                        e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }),
        f.each({
            slideDown: ct("show", 1),
            slideUp: ct("hide", 1),
            slideToggle: ct("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            f.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        f.extend({
            speed: function (a, b, c) {
                var d = a && typeof a == "object" ? f.extend({}, a) : {
                    complete: c || !c && b || f.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !f.isFunction(b) && b
                };
                d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
                if (d.queue == null || d.queue === !0)
                    d.queue = "fx";
                d.old = d.complete,
                    d.complete = function (a) {
                        f.isFunction(d.old) && d.old.call(this),
                            d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
                    }
                    ;
                return d
            },
            easing: {
                linear: function (a) {
                    return a
                },
                swing: function (a) {
                    return -Math.cos(a * Math.PI) / 2 + .5
                }
            },
            timers: [],
            fx: function (a, b, c) {
                this.options = b,
                    this.elem = a,
                    this.prop = c,
                    b.orig = b.orig || {}
            }
        }),
        f.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    (f.fx.step[this.prop] || f.fx.step._default)(this)
            },
            cur: function () {
                if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                    return this.elem[this.prop];
                var a, b = f.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
            },
            custom: function (a, c, d) {
                function h(a) {
                    return e.step(a)
                }
                var e = this
                    , g = f.fx;
                this.startTime = cq || cr(),
                    this.end = c,
                    this.now = this.start = a,
                    this.pos = this.state = 0,
                    this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
                    h.queue = this.options.queue,
                    h.elem = this.elem,
                    h.saveState = function () {
                        f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
                    }
                    ,
                    h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
            },
            show: function () {
                var a = f._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
                    this.options.show = !0,
                    a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
                    f(this.elem).show()
            },
            hide: function () {
                this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
                    this.options.hide = !0,
                    this.custom(this.cur(), 0)
            },
            step: function (a) {
                var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
                if (a || e >= i.duration + this.startTime) {
                    this.now = this.end,
                        this.pos = this.state = 1,
                        this.update(),
                        i.animatedProperties[this.prop] = !0;
                    for (b in i.animatedProperties)
                        i.animatedProperties[b] !== !0 && (g = !1);
                    if (g) {
                        i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                            h.style["overflow" + b] = i.overflow[a]
                        }),
                            i.hide && f(h).hide();
                        if (i.hide || i.show)
                            for (b in i.animatedProperties)
                                f.style(h, b, i.orig[b]),
                                    f.removeData(h, "fxshow" + b, !0),
                                    f.removeData(h, "toggle" + b, !0);
                        d = i.complete,
                            d && (i.complete = !1,
                                d.call(h))
                    }
                    return !1
                }
                i.duration == Infinity ? this.now = e : (c = e - this.startTime,
                    this.state = c / i.duration,
                    this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration),
                    this.now = this.start + (this.end - this.start) * this.pos),
                    this.update();
                return !0
            }
        },
        f.extend(f.fx, {
            tick: function () {
                var a, b = f.timers, c = 0;
                for (; c < b.length; c++)
                    a = b[c],
                        !a() && b[c] === a && b.splice(c--, 1);
                b.length || f.fx.stop()
            },
            interval: 13,
            stop: function () {
                clearInterval(co),
                    co = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function (a) {
                    f.style(a.elem, "opacity", a.now)
                },
                _default: function (a) {
                    a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
                }
            }
        }),
        f.each(cp.concat.apply([], cp), function (a, b) {
            b.indexOf("margin") && (f.fx.step[b] = function (a) {
                f.style(a.elem, b, Math.max(0, a.now) + a.unit)
            }
            )
        }),
        f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
            return f.grep(f.timers, function (b) {
                return a === b.elem
            }).length
        }
        );
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) { }
        if (!d || !f.contains(c, a))
            return d ? {
                top: d.top,
                left: d.left
            } : {
                    top: 0,
                    left: 0
                };
        var g = b.body
            , h = cy(b)
            , i = c.clientTop || g.clientTop || 0
            , j = c.clientLeft || g.clientLeft || 0
            , k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop
            , l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft
            , m = d.top + k - i
            , n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    }
        : cv = function (a, b, c) {
            var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
            while ((a = a.parentNode) && a !== h && a !== c) {
                if (f.support.fixedPosition && j.position === "fixed")
                    break;
                d = i ? i.getComputedStyle(a, null) : a.currentStyle,
                    k -= a.scrollTop,
                    l -= a.scrollLeft,
                    a === e && (k += a.offsetTop,
                        l += a.offsetLeft,
                        f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0,
                            l += parseFloat(d.borderLeftWidth) || 0),
                        g = e,
                        e = a.offsetParent),
                    f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0,
                        l += parseFloat(d.borderLeftWidth) || 0),
                    j = d
            }
            if (j.position === "relative" || j.position === "static")
                k += h.offsetTop,
                    l += h.offsetLeft;
            f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop),
                l += Math.max(c.scrollLeft, h.scrollLeft));
            return {
                top: k,
                left: l
            }
        }
        ,
        f.fn.offset = function (a) {
            if (arguments.length)
                return a === b ? this : this.each(function (b) {
                    f.offset.setOffset(this, a, b)
                });
            var c = this[0]
                , d = c && c.ownerDocument;
            if (!d)
                return null;
            if (c === d.body)
                return f.offset.bodyOffset(c);
            return cv(c, d, d.documentElement)
        }
        ,
        f.offset = {
            bodyOffset: function (a) {
                var b = a.offsetTop
                    , c = a.offsetLeft;
                f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,
                    c += parseFloat(f.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: c
                }
            },
            setOffset: function (a, b, c) {
                var d = f.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
                j ? (l = e.position(),
                    m = l.top,
                    n = l.left) : (m = parseFloat(h) || 0,
                        n = parseFloat(i) || 0),
                    f.isFunction(b) && (b = b.call(a, c, g)),
                    b.top != null && (k.top = b.top - g.top + m),
                    b.left != null && (k.left = b.left - g.left + n),
                    "using" in b ? b.using.call(a, k) : e.css(k)
            }
        },
        f.fn.extend({
            position: function () {
                if (!this[0])
                    return null;
                var a = this[0]
                    , b = this.offsetParent()
                    , c = this.offset()
                    , d = cx.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                c.top -= parseFloat(f.css(a, "marginTop")) || 0,
                    c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
                    d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
                    d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
                return {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent || c.body;
                    while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")
                        a = a.offsetParent;
                    return a
                })
            }
        }),
        f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (a, c) {
            var d = /Y/.test(c);
            f.fn[a] = function (e) {
                return f.access(this, function (a, e, g) {
                    var h = cy(a);
                    if (g === b)
                        return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                    h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
                }, a, e, arguments.length, null)
            }
        }),
        f.each({
            Height: "height",
            Width: "width"
        }, function (a, c) {
            var d = "client" + a
                , e = "scroll" + a
                , g = "offset" + a;
            f.fn["inner" + a] = function () {
                var a = this[0];
                return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
            }
                ,
                f.fn["outer" + a] = function (a) {
                    var b = this[0];
                    return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
                }
                ,
                f.fn[c] = function (a) {
                    return f.access(this, function (a, c, h) {
                        var i, j, k, l;
                        if (f.isWindow(a)) {
                            i = a.document,
                                j = i.documentElement[d];
                            return f.support.boxModel && j || i.body && i.body[d] || j
                        }
                        if (a.nodeType === 9) {
                            i = a.documentElement;
                            if (i[d] >= i[e])
                                return i[d];
                            return Math.max(a.body[e], i[e], a.body[g], i[g])
                        }
                        if (h === b) {
                            k = f.css(a, c),
                                l = parseFloat(k);
                            return f.isNumeric(l) ? l : k
                        }
                        f(a).css(c, h)
                    }, c, a, arguments.length, null)
                }
        }),
        a.assistQ = f,
        typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return f
        })
}
)(window);
window.yx_ini = {
    "noise": {
        "www.xiongan.gov.cn": {
            "f": ".cover-close",
            "r": function () {
                window.$(".cover-close").trigger("click")
            }
        }
    },
    "region": {
        "xiongan.gov.cn": [{
            "type": "mutual",
            "name": "\u641c\u7d22",
            "elem": ".schb"
        }]
    }
};
if (typeof (YX) == "undefined")
    var YX = {};
YX.store = (function () {
    var api = {}, win = window, doc = win.document, localStorageName = 'localStorage', globalStorageName = 'globalStorage', storage;
    api.set = function (key, value) { }
        ;
    api.get = function (key) { }
        ;
    api.remove = function (key) { }
        ;
    api.clear = function () { }
        ;
    if (localStorageName in win && win[localStorageName]) {
        storage = win[localStorageName];
        api.set = function (key, val) {
            storage.setItem(key, val)
        }
            ;
        api.get = function (key) {
            return storage.getItem(key)
        }
            ;
        api.remove = function (key) {
            storage.removeItem(key)
        }
            ;
        api.clear = function () {
            storage.clear()
        }
    } else if (globalStorageName in win && win[globalStorageName]) {
        storage = win[globalStorageName][win.location.hostname];
        api.set = function (key, val) {
            storage[key] = val
        }
            ;
        api.get = function (key) {
            return storage[key] && storage[key].value
        }
            ;
        api.remove = function (key) {
            delete storage[key]
        }
            ;
        api.clear = function () {
            for (var key in storage) {
                delete storage[key]
            }
        }
    } else if (doc.documentElement.addBehavior) {
        function getStorage() {
            if (storage) {
                return storage
            }
            storage = doc.body.appendChild(doc.createElement('div'));
            storage.style.display = 'none';
            storage.addBehavior('#default#userData');
            storage.load(localStorageName);
            return storage
        }
        api.set = function (key, val) {
            var storage = getStorage();
            storage.setAttribute(key, val);
            storage.save(localStorageName)
        }
            ;
        api.get = function (key) {
            var storage = getStorage();
            return storage.getAttribute(key)
        }
            ;
        api.remove = function (key) {
            var storage = getStorage();
            storage.removeAttribute(key);
            storage.save(localStorageName)
        }
            ;
        api.clear = function () {
            var storage = getStorage();
            var attributes = storage.XMLDocument.documentElement.attributes;
            storage.load(localStorageName);
            for (var i = 0, attr; attr = attributes[i]; i++) {
                storage.removeAttribute(attr.name)
            }
            storage.save(localStorageName)
        }
    }
    return api
}
)();
(function (a) {
    function d(d, g) {
        this.flashVersion = 8;
        this.debugFlash = this.debugMode = !1;
        this.useConsole = !0;
        this.waitForWindowLoad = this.consoleOnly = !1;
        this.nullURL = "null.mp3";
        this.allowPolling = !0;
        this.useMovieStar = this.useFastPolling = !1;
        this.bgColor = "#ffffff";
        this.useHighPerformance = !1;
        this.flashLoadTimeout = 1E3;
        this.wmode = null;
        this.allowFullScreen = !0;
        this.allowScriptAccess = "always";
        this.useFlashBlock = !1;
        this.defaultOptions = {
            autoLoad: !1,
            stream: !0,
            autoPlay: !1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onstop: null,
            onfinish: null,
            onbeforefinish: null,
            onbeforefinishtime: 5E3,
            onbeforefinishcomplete: null,
            onjustbeforefinish: null,
            onjustbeforefinishtime: 200,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            volume: 100
        };
        this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        };
        this.movieStarOptions = {
            onmetadata: null,
            useVideo: !1,
            bufferTime: 2
        };
        var b = this;
        this.version = null;
        this.versionNumber = "V2.95b.20100323";
        this.movieURL = null;
        this.url = d || null;
        this.altURL = null;
        this.enabled = this.swfLoaded = !1;
        this.o = null;
        this.movieID = "sm2-container";
        this.id = g || "sm2movie";
        this.swfCSS = {
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        };
        this.oMC = null;
        this.sounds = {};
        this.soundIDs = [];
        this.isFullScreen = this.muted = !1;
        this.isIE = navigator.userAgent.match(/MSIE/i);
        this.isSafari = navigator.userAgent.match(/safari/i);
        this.debugID = "soundmanager-debug";
        this.debugURLParam = /([#?&])debug=1/i;
        this.didFlashBlock = this.specialWmodeCase = !1;
        this._onready = [];
        this._debugOpen = !0;
        this._windowLoaded = this._disabled = this._didInit = this._appendSuccess = this._didAppend = !1;
        this._hasConsole = "undefined" !== typeof console && "undefined" !== typeof console.log;
        this._debugLevels = ["log", "info", "warn", "error"];
        this._defaultFlashVersion = 8;
        this._oRemovedHTML = this._oRemoved = null;
        var e = function (b) {
            return document.getElementById(b)
        };
        this.filePattern = null;
        this.filePatterns = {
            flash8: /\.mp3(\?\.*)?$/i,
            flash9: /\.mp3(\?\.*)?$/i
        };
        this.baseMimeTypes = /^audio\/(?:x-)?(?:mp(?:eg|3))\s*;?/i;
        this.netStreamMimeTypes = /^audio\/(?:x-)?(?:mp(?:eg|3)|mp4a-latm|aac|speex)\s*;?/i;
        this.netStreamTypes = "aac flv mov mp4 m4v f4v m4a mp4v 3gp 3g2".split(" ");
        this.netStreamPattern = new RegExp("\\.(" + this.netStreamTypes.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = b.baseMimeTypes;
        this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        };
        this.sandbox = {
            type: null,
            types: {
                remote: "remote (domain-based) rules",
                localWithFile: "local with file access (no internet access)",
                localWithNetwork: "local with network (internet access only, no local access)",
                localTrusted: "local, trusted (local+internet access)"
            },
            description: null,
            noRemote: null,
            noLocal: null
        };
        this._setVersionInfo = function () {
            8 !== b.flashVersion && 9 !== b.flashVersion && (alert(b._str("badFV", b.flashVersion, b._defaultFlashVersion)),
                b.flashVersion = b._defaultFlashVersion);
            b.version = b.versionNumber + (9 === b.flashVersion ? " (AS3/Flash 9)" : " (AS2/Flash 8)");
            8 < b.flashVersion && (b.defaultOptions = b._mergeObjects(b.defaultOptions, b.flash9Options),
                b.features.buffering = !0);
            8 < b.flashVersion && b.useMovieStar ? (b.defaultOptions = b._mergeObjects(b.defaultOptions, b.movieStarOptions),
                b.filePatterns.flash9 = new RegExp("\\.(mp3|" + b.netStreamTypes.join("|") + ")(\\?.*)?$", "i"),
                b.mimePattern = b.netStreamMimeTypes,
                b.features.movieStar = !0) : (b.useMovieStar = !1,
                    b.features.movieStar = !1);
            b.filePattern = b.filePatterns[8 !== b.flashVersion ? "flash9" : "flash8"];
            b.movieURL = 8 === b.flashVersion ? "soundmanager2.swf" : "soundmanager2_flash9.swf";
            b.movieURL += "?t=" + (new Date).getTime();
            b.features.peakData = b.features.waveformData = b.features.eqData = 8 < b.flashVersion
        }
            ;
        this._overHTTP = document.location ? document.location.protocol.match(/http/i) : null;
        this._initPending = this._waitingforEI = !1;
        this._tryInitOnFocus = this.isSafari && "undefined" === typeof document.hasFocus;
        this._isFocused = "undefined" !== typeof document.hasFocus ? document.hasFocus() : null;
        this._okToDisable = !this._tryInitOnFocus;
        this.useAltURL = !this._overHTTP;
        this.strings = {
            notReady: "Not loaded yet - wait for soundManager.onload() before calling sound-related methods",
            appXHTML: "soundManager_createMovie(): appendChild/innerHTML set failed. May be app/xhtml+xml DOM-related.",
            swf404: "soundManager: Verify that %s is a valid path.",
            tryDebug: "Try soundManager.debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: "soundManager: Non-HTTP page (" + document.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: "soundManager: Special case: Waiting for focus-related event..",
            waitImpatient: "soundManager: Getting impatient, still waiting for Flash%s...",
            waitForever: "soundManager: Waiting indefinitely for Flash (will recover if unblocked)...",
            needFunction: "soundManager.onready(): Function object expected",
            badID: 'Warning: Sound ID "%s" should be a string, starting with a non-numeric character',
            fl9Vid: "flash 9 required for video. Exiting.",
            noMS: "MovieStar mode not enabled. Exiting.",
            spcWmode: "soundManager._createMovie(): Removing wmode, preventing win32 below-the-fold SWF loading issue",
            currentObj: "--- soundManager._debug(): Current sound objects ---",
            waitEI: "soundManager._initMovie(): Waiting for ExternalInterface call from Flash..",
            waitOnload: "soundManager: Waiting for window.onload()",
            docLoaded: "soundManager: Document already loaded",
            onload: "soundManager.initComplete(): calling soundManager.onload()",
            onloadOK: "soundManager.onload() complete",
            init: "-- soundManager.init() --",
            didInit: "soundManager.init(): Already called?",
            flashJS: "soundManager: Attempting to call Flash from JS..",
            noPolling: "soundManager: Polling (whileloading()/whileplaying() support) is disabled.",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: "Warning: Failed to remove flash movie.",
            noPeak: "Warning: peakData features unsupported for movieStar formats",
            shutdown: "soundManager.disable(): Shutting down",
            queue: "soundManager.onready(): Queueing handler",
            smFail: "soundManager: Failed to initialise.",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying ." + b.swfCSS.swfTimedout + " CSS..",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: "soundManager.load(): current URL already assigned.",
            badFV: 'soundManager.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.'
        };
        this._str = function () {
            var a = Array.prototype.slice.call(arguments)
                , c = a.shift();
            c = b.strings && b.strings[c] ? b.strings[c] : "";
            var d;
            if (c && a && a.length) {
                var e = 0;
                for (d = a.length; e < d; e++)
                    c = c.replace("%s", a[e])
            }
            return c
        }
            ;
        this.supported = function () {
            return b._didInit && !b._disabled
        }
            ;
        this.getMovie = function (d) {
            return b.isIE ? a[d] : b.isSafari ? e(d) || document[d] : e(d)
        }
            ;
        this.loadFromXML = function (a) {
            try {
                b.o._loadFromXML(a)
            } catch (c) {
                return b._failSafely(),
                    !0
            }
        }
            ;
        this.createSound = function (a) {
            if (!b._didInit)
                throw b._complain("soundManager.createSound(): " + b._str("notReady"), arguments.callee.caller);
            2 === arguments.length && (a = {
                id: arguments[0],
                url: arguments[1]
            });
            var c = b._mergeObjects(a);
            c.id.toString().charAt(0).match(/^[0-9]$/) && b._wD("soundManager.createSound(): " + b._str("badID", c.id), 2);
            b._wD("soundManager.createSound(): " + c.id + " (" + c.url + ")", 1);
            if (b._idCheck(c.id, !0))
                return b._wD("soundManager.createSound(): " + c.id + " exists", 1),
                    b.sounds[c.id];
            8 < b.flashVersion && b.useMovieStar && (null === c.isMovieStar && (c.isMovieStar = c.url.match(b.netStreamPattern) ? !0 : !1),
                c.isMovieStar && b._wD("soundManager.createSound(): using MovieStar handling"),
                c.isMovieStar && c.usePeakData && (b._wDS("noPeak"),
                    c.usePeakData = !1));
            b.sounds[c.id] = new l(c);
            b.soundIDs[b.soundIDs.length] = c.id;
            8 === b.flashVersion ? b.o._createSound(c.id, c.onjustbeforefinishtime) : b.o._createSound(c.id, c.url, c.onjustbeforefinishtime, c.usePeakData, c.useWaveformData, c.useEQData, c.isMovieStar, c.isMovieStar ? c.useVideo : !1, c.isMovieStar ? c.bufferTime : !1);
            (c.autoLoad || c.autoPlay) && b.sounds[c.id] && b.sounds[c.id].load(c);
            c.autoPlay && b.sounds[c.id].play();
            return b.sounds[c.id]
        }
            ;
        this.createVideo = function (a) {
            2 === arguments.length && (a = {
                id: arguments[0],
                url: arguments[1]
            });
            if (9 <= b.flashVersion)
                a.isMovieStar = !0,
                    a.useVideo = !0;
            else
                return b._wD("soundManager.createVideo(): " + b._str("f9Vid"), 2),
                    !1;
            b.useMovieStar || b._wD("soundManager.createVideo(): " + b._str("noMS"), 2);
            return b.createSound(a)
        }
            ;
        this.destroyVideo = this.destroySound = function (a, c) {
            if (!b._idCheck(a))
                return !1;
            for (var d = 0; d < b.soundIDs.length; d++)
                b.soundIDs[d] === a && b.soundIDs.splice(d, 1);
            b.sounds[a].unload();
            c || b.sounds[a].destruct();
            delete b.sounds[a]
        }
            ;
        this.load = function (a, c) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].load(c)
        }
            ;
        this.unload = function (a) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].unload()
        }
            ;
        this.start = this.play = function (a, c) {
            if (!b._didInit)
                throw b._complain("soundManager.play(): " + b._str("notReady"), arguments.callee.caller);
            if (!b._idCheck(a))
                return c instanceof Object || (c = {
                    url: c
                }),
                    c && c.url ? (b._wD('soundManager.play(): attempting to create "' + a + '"', 1),
                        c.id = a,
                        b.createSound(c).play()) : !1;
            b.sounds[a].play(c)
        }
            ;
        this.setPosition = function (a, c) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].setPosition(c)
        }
            ;
        this.stop = function (a) {
            if (!b._idCheck(a))
                return !1;
            b._wD("soundManager.stop(" + a + ")", 1);
            b.sounds[a].stop()
        }
            ;
        this.stopAll = function () {
            b._wD("soundManager.stopAll()", 1);
            for (var a in b.sounds)
                b.sounds[a] instanceof l && b.sounds[a].stop()
        }
            ;
        this.pause = function (a) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].pause()
        }
            ;
        this.pauseAll = function () {
            for (var a = b.soundIDs.length; a--;)
                b.sounds[b.soundIDs[a]].pause()
        }
            ;
        this.resume = function (a) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].resume()
        }
            ;
        this.resumeAll = function () {
            for (var a = b.soundIDs.length; a--;)
                b.sounds[b.soundIDs[a]].resume()
        }
            ;
        this.togglePause = function (a) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].togglePause()
        }
            ;
        this.setPan = function (a, c) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].setPan(c)
        }
            ;
        this.setVolume = function (a, c) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].setVolume(c)
        }
            ;
        this.mute = function (a) {
            "string" !== typeof a && (a = null);
            if (a) {
                if (!b._idCheck(a))
                    return !1;
                b._wD('soundManager.mute(): Muting "' + a + '"');
                b.sounds[a].mute()
            } else {
                b._wD("soundManager.mute(): Muting all sounds");
                for (a = b.soundIDs.length; a--;)
                    b.sounds[b.soundIDs[a]].mute();
                b.muted = !0
            }
        }
            ;
        this.muteAll = function () {
            b.mute()
        }
            ;
        this.unmute = function (a) {
            "string" !== typeof a && (a = null);
            if (a) {
                if (!b._idCheck(a))
                    return !1;
                b._wD('soundManager.unmute(): Unmuting "' + a + '"');
                b.sounds[a].unmute()
            } else {
                b._wD("soundManager.unmute(): Unmuting all sounds");
                for (a = b.soundIDs.length; a--;)
                    b.sounds[b.soundIDs[a]].unmute();
                b.muted = !1
            }
        }
            ;
        this.unmuteAll = function () {
            b.unmute()
        }
            ;
        this.toggleMute = function (a) {
            if (!b._idCheck(a))
                return !1;
            b.sounds[a].toggleMute()
        }
            ;
        this.getMemoryUse = function () {
            if (8 === b.flashVersion)
                return 0;
            if (b.o)
                return parseInt(b.o._getMemoryUse(), 10)
        }
            ;
        this.disable = function (a) {
            "undefined" === typeof a && (a = !1);
            if (b._disabled)
                return !1;
            b._disabled = !0;
            b._wDS("shutdown", 1);
            for (var c = b.soundIDs.length; c--;)
                b._disableObject(b.sounds[b.soundIDs[c]]);
            b.initComplete(a)
        }
            ;
        this.canPlayMIME = function (a) {
            return a ? a.match(b.mimePattern) ? !0 : !1 : null
        }
            ;
        this.canPlayURL = function (a) {
            return a ? a.match(b.filePattern) ? !0 : !1 : null
        }
            ;
        this.canPlayLink = function (a) {
            return "undefined" !== typeof a.type && a.type && b.canPlayMIME(a.type) ? !0 : b.canPlayURL(a.href)
        }
            ;
        this.getSoundById = function (a, c) {
            if (!a)
                throw Error("SoundManager.getSoundById(): sID is null/undefined");
            var d = b.sounds[a];
            d || c || b._wD('"' + a + '" is an invalid sound ID.', 2);
            return d
        }
            ;
        this.onready = function (d, c) {
            if (d && d instanceof Function)
                return b._didInit && b._wDS("queue"),
                    c || (c = a),
                    b._addOnReady(d, c),
                    b._processOnReady(),
                    !0;
            throw b._str("needFunction");
        }
            ;
        this.oninitmovie = function () { }
            ;
        this.onload = function () {
            b._wD("soundManager.onload()", 1)
        }
            ;
        this.onerror = function () { }
            ;
        this._idCheck = this.getSoundById;
        this._complain = function (b, a) {
            if (!a)
                return Error("Error: " + b);
            "undefined" !== typeof console && "undefined" !== typeof console.trace && console.trace();
            return Error("Error: " + b + ". \nCaller: " + a.toString())
        }
            ;
        var k = function () {
            return !1
        };
        k._protected = !0;
        this._disableObject = function (b) {
            for (var a in b)
                "function" === typeof b[a] && "undefined" === typeof b[a]._protected && (b[a] = k)
        }
            ;
        this._failSafely = function (a) {
            "undefined" === typeof a && (a = !1);
            if (!b._disabled || a)
                b._wDS("smFail", 2),
                    b.disable(a)
        }
            ;
        this._normalizeMovieURL = function (a) {
            var c;
            if (a)
                if (a.match(/\.swf(\?\.*)?$/i)) {
                    if (c = a.substr(a.toLowerCase().lastIndexOf(".swf?") + 4))
                        return a
                } else
                    a.lastIndexOf("/") !== a.length - 1 && (a += "/");
            return (a && -1 !== a.lastIndexOf("/") ? a.substr(0, a.lastIndexOf("/") + 1) : "./") + b.movieURL
        }
            ;
        this._getDocument = function () {
            return document.body ? document.body : document.documentElement ? document.documentElement : document.getElementsByTagName("div")[0]
        }
            ;
        this._getDocument._protected = !0;
        this._setPolling = function (a, c) {
            if (!b.o || !b.allowPolling)
                return !1;
            b.o._setPolling(a, c)
        }
            ;
        this._createMovie = function (d, c) {
            var f = null;
            c = c ? c : b.url;
            var g = b.altURL ? b.altURL : c, m;
            b.debugURLParam.test(a.location.href.toString()) && (b.debugMode = !0);
            if (b._didAppend && b._appendSuccess)
                return !1;
            b._didAppend = !0;
            b._setVersionInfo();
            b.url = b._normalizeMovieURL(b._overHTTP ? c : g);
            c = b.url;
            b.useHighPerformance && b.useMovieStar && !0 === b.defaultOptions.useVideo && (f = "soundManager note: disabling highPerformance, not applicable with movieStar mode+useVideo",
                b.useHighPerformance = !1);
            b.wmode = b.wmode || !b.useHighPerformance || b.useMovieStar ? b.wmode : "transparent";
            null === b.wmode || b.isIE || b.useHighPerformance || !navigator.platform.match(/win32/i) || (b.specialWmodeCase = !0,
                b._wDS("spcWmode"),
                b.wmode = null);
            8 === b.flashVersion && (b.allowFullScreen = !1);
            var h = {
                name: d,
                id: d,
                src: c,
                width: "100%",
                height: "100%",
                quality: "high",
                allowScriptAccess: b.allowScriptAccess,
                bgcolor: b.bgColor,
                pluginspage: "http://www.macromedia.com/go/getflashplayer",
                type: "application/x-shockwave-flash",
                wmode: b.wmode,
                allowfullscreen: b.allowFullScreen ? "true" : "false"
            };
            b.debugFlash && (h.FlashVars = "debug=1");
            b.wmode || delete h.wmode;
            if (b.isIE) {
                g = document.createElement("div");
                var k = '<object id="' + d + '" data="' + c + '" type="' + h.type + '" width="' + h.width + '" height="' + h.height + '"><param name="movie" value="' + c + '" /><param name="AllowScriptAccess" value="' + b.allowScriptAccess + '" /><param name="quality" value="' + h.quality + '" />' + (b.wmode ? '<param name="wmode" value="' + b.wmode + '" /> ' : "") + '<param name="bgcolor" value="' + b.bgColor + '" /><param name="allowFullScreen" value="' + h.allowFullScreen + '" />' + (b.debugFlash ? '<param name="FlashVars" value="' + h.FlashVars + '" />' : "") + "\x3c!-- --\x3e</object>"
            } else
                for (m in g = document.createElement("embed"),
                    h)
                    h.hasOwnProperty(m) && g.setAttribute(m, h[m]);
            if (b.debugMode) {
                var l = document.createElement("div");
                l.id = b.debugID + "-toggle";
                d = {
                    position: "fixed",
                    bottom: "0px",
                    right: "0px",
                    width: "1.2em",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    margin: "2px",
                    textAlign: "center",
                    border: "1px solid #999",
                    cursor: "pointer",
                    background: "#fff",
                    color: "#333",
                    zIndex: 10001
                };
                l.appendChild(document.createTextNode("-"));
                l.onclick = b._toggleDebug;
                l.title = "Toggle SM2 debug console";
                navigator.userAgent.match(/msie 6/i) && (l.style.position = "absolute",
                    l.style.cursor = "hand");
                for (m in d)
                    d.hasOwnProperty(m) && (l.style[m] = d[m])
            }
            d = b.getSWFCSS();
            if (m = b._getDocument()) {
                b.oMC = e(b.movieID) ? e(b.movieID) : document.createElement("div");
                if (b.oMC.id)
                    h = b.oMC.className,
                        b.oMC.className = (h ? h + " " : b.swfCSS.swfDefault) + (d ? " " + d : ""),
                        b.oMC.appendChild(g),
                        b.isIE && (d = b.oMC.appendChild(document.createElement("div")),
                            d.className = "sm2-object-box",
                            d.innerHTML = k),
                        b._appendSuccess = !0;
                else {
                    b.oMC.id = b.movieID;
                    b.oMC.className = b.swfCSS.swfDefault + " " + d;
                    d = h = null;
                    b.useFlashBlock || (h = b.useHighPerformance ? {
                        position: "fixed",
                        width: "6px",
                        height: "6px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden"
                    } : {
                            position: "absolute",
                            width: "6px",
                            height: "6px",
                            top: "-9999px",
                            left: "-9999px"
                        });
                    var p = null;
                    if (!b.debugFlash)
                        for (p in h)
                            h.hasOwnProperty(p) && (b.oMC.style[p] = h[p]);
                    try {
                        b.isIE || b.oMC.appendChild(g),
                            m.appendChild(b.oMC),
                            b.isIE && (d = b.oMC.appendChild(document.createElement("div")),
                                d.className = "sm2-object-box",
                                d.innerHTML = k),
                            b._appendSuccess = !0
                    } catch (r) {
                        throw Error(b._str("appXHTML"));
                    }
                }
                if (b.debugMode && !e(b.debugID) && (!b._hasConsole || !b.useConsole || b.useConsole && b._hasConsole && !b.consoleOnly) && (k = document.createElement("div"),
                    k.id = b.debugID,
                    k.style.display = b.debugMode ? "block" : "none",
                    b.debugMode && !e(l.id))) {
                    try {
                        m.appendChild(l)
                    } catch (r) {
                        throw Error(b._str("appXHTML"));
                    }
                    m.appendChild(k)
                }
            }
            f && b._wD(f);
            b._wD("-- SoundManager 2 " + b.version + (b.useMovieStar ? ", MovieStar mode" : "") + (b.useHighPerformance ? ", high performance mode, " : ", ") + ((b.useFastPolling ? "fast" : "normal") + " polling") + (b.wmode ? ", wmode: " + b.wmode : "") + (b.debugFlash ? ", flash debug mode" : "") + (b.useFlashBlock ? ", flashBlock mode" : "") + " --", 1);
            b._wD("soundManager._createMovie(): Trying to load " + c + (!b._overHTTP && b.altURL ? " (alternate URL)" : ""), 1)
        }
            ;
        this._writeDebug = function (a, c, d) {
            if (!b.debugMode)
                return !1;
            "undefined" !== typeof d && d && (a = a + " | " + (new Date).getTime());
            if (b._hasConsole && b.useConsole) {
                d = b._debugLevels[c];
                if ("undefined" !== typeof console[d])
                    console[d](a);
                else
                    console.log(a);
                if (b.useConsoleOnly)
                    return !0
            }
            try {
                var f = e("soundmanager-debug");
                if (!f)
                    return !1;
                var g = document.createElement("div");
                0 === ++b._wdCount % 2 && (g.className = "sm2-alt");
                c = "undefined" === typeof c ? 0 : parseInt(c, 10);
                g.appendChild(document.createTextNode(a));
                c && (2 <= c && (g.style.fontWeight = "bold"),
                    3 === c && (g.style.color = "#ff3333"));
                f.insertBefore(g, f.firstChild)
            } catch (t) { }
        }
            ;
        this._writeDebug._protected = !0;
        this._wdCount = 0;
        this._wdCount._protected = !0;
        this._wD = this._writeDebug;
        this._wDS = function (a, c) {
            return a ? b._wD(b._str(a), c) : ""
        }
            ;
        this._wDS._protected = !0;
        this._wDAlert = function (b) {
            alert(b)
        }
            ;
        a.location.href.indexOf("debug=alert") + 1 && b.debugMode && (b._wD = b._wDAlert);
        this._toggleDebug = function () {
            var a = e(b.debugID)
                , c = e(b.debugID + "-toggle");
            if (!a)
                return !1;
            b._debugOpen ? (c.innerHTML = "+",
                a.style.display = "none") : (c.innerHTML = "-",
                    a.style.display = "block");
            b._debugOpen = !b._debugOpen
        }
            ;
        this._toggleDebug._protected = !0;
        this._debug = function () {
            b._wDS("currentObj", 1);
            for (var a = 0, c = b.soundIDs.length; a < c; a++)
                b.sounds[b.soundIDs[a]]._debug()
        }
            ;
        this._debugTS = function (b, a, d) {
            if ("undefined" !== typeof sm2Debugger)
                try {
                    sm2Debugger.handleEvent(b, a, d)
                } catch (n) { }
        }
            ;
        this._debugTS._protected = !0;
        this._mergeObjects = function (a, c) {
            var d = {}, e, g;
            for (e in a)
                a.hasOwnProperty(e) && (d[e] = a[e]);
            a = "undefined" === typeof c ? b.defaultOptions : c;
            for (g in a)
                a.hasOwnProperty(g) && "undefined" === typeof d[g] && (d[g] = a[g]);
            return d
        }
            ;
        this.go = this.createMovie = function (a) {
            a && (b.url = a);
            b._initMovie()
        }
            ;
        this._initMovie = function () {
            if (b.o)
                return !1;
            b.o = b.getMovie(b.id);
            b.o || (b.oRemoved ? (b.isIE ? b.oMC.innerHTML = b.oRemovedHTML : b.oMC.appendChild(b.oRemoved),
                b.oRemoved = null,
                b._didAppend = !0) : b._createMovie(b.id, b.url),
                b.o = b.getMovie(b.id));
            b.o && (b._wD("soundManager._initMovie(): Got " + b.o.nodeName + " element (" + (b._didAppend ? "created via JS" : "static HTML") + ")", 1),
                b._wDS("waitEI"));
            "function" === typeof b.oninitmovie && setTimeout(b.oninitmovie, 1)
        }
            ;
        this.waitForExternalInterface = function () {
            if (b._waitingForEI)
                return !1;
            b._waitingForEI = !0;
            if (b._tryInitOnFocus && !b._isFocused)
                return b._wDS("waitFocus"),
                    !1;
            if (!b._didInit) {
                var a = b.getMoviePercent();
                b._wD(b._str("waitImpatient", 100 === a ? " (SWF loaded)" : 0 < a ? " (SWF " + a + "% loaded)" : ""))
            }
            setTimeout(function () {
                a = b.getMoviePercent();
                b._didInit || (b._wD("soundManager: No Flash response within expected time.\nLikely causes: " + (0 === a ? "Loading " + b.movieURL + " may have failed (and/or Flash " + b.flashVersion + "+ not present?), " : "") + "Flash blocked or JS-Flash security error." + (b.debugFlash ? " " + b._str("checkSWF") : ""), 2),
                    !b._overHTTP && a && (b._wDS("localFail", 2),
                        b.debugFlash || b._wDS("tryDebug", 2)),
                    0 === a && b._wD(b._str("swf404", b.url)),
                    b._debugTS("flashtojs", !1, ": Timed out" + b._overHTTP ? " (Check flash security or flash blockers)" : " (No plugin/missing SWF?)"));
                !b._didInit && b._okToDisable && (a ? 0 === b.flashLoadTimeout ? b._wDS("waitForever") : b._failSafely(!0) : b.useFlashBlock || 0 === b.flashLoadTimeout ? (b.useFlashBlock && b.flashBlockHandler(),
                    b._wDS("waitForever")) : b._failSafely(!0))
            }, b.flashLoadTimeout)
        }
            ;
        this.getSWFCSS = function () {
            var a = [];
            b.debugMode && a.push(b.swfCSS.sm2Debug);
            b.debugFlash && a.push(b.swfCSS.flashDebug);
            b.useHighPerformance && a.push(b.swfCSS.highPerf);
            return a.join(" ")
        }
            ;
        this.flashBlockHandler = function () {
            var d = b.getMoviePercent();
            b._wD("soundManager.flashBlockHandler()");
            b.supported() ? b.oMC.className = b.getSWFCSS() + " " + b.swfCSS.swfDefault + (" " + b.swfCSS.swfUnblocked) : (b.oMC.className = b.getSWFCSS() + " " + b.swfCSS.swfDefault + " " + (d ? b.swfCSS.swfError : b.swfCSS.swfTimedout),
                d || b._wD("soundManager.flashBlockHandler(): " + b.strings.fbTimeout),
                b._processOnReady(!0),
                b.onerror instanceof Function && b.onerror.apply(a),
                b.didFlashBlock = !0)
        }
            ;
        this.getMoviePercent = function () {
            return b.o && "undefined" !== typeof b.o.PercentLoaded ? b.o.PercentLoaded() : null
        }
            ;
        this.handleFocus = function () {
            if (b._isFocused || !b._tryInitOnFocus)
                return !0;
            b._okToDisable = !0;
            b._isFocused = !0;
            b._wD("soundManager.handleFocus()");
            b._tryInitOnFocus && a.removeEventListener("mousemove", b.handleFocus, !1);
            b._waitingForEI = !1;
            setTimeout(b.waitForExternalInterface, 500);
            a.removeEventListener ? a.removeEventListener("focus", b.handleFocus, !1) : a.detachEvent && a.detachEvent("onfocus", b.handleFocus)
        }
            ;
        this.initComplete = function (d) {
            if (b._didInit)
                return !1;
            b.useFlashBlock && b.flashLoadTimeout && !b.getMoviePercent() || (b._didInit = !0);
            b._wD("-- SoundManager 2 " + (b._disabled ? "failed to load" : "loaded") + " (" + (b._disabled ? "security/load error" : "OK") + ") --", 1);
            if (b._disabled || d)
                return b.useFlashBlock && (b.oMC.className = b.getSWFCSS() + " " + (b.getMoviePercent() ? b.swfCSS.swfError : b.swfCSS.swfTimedout)),
                    b._processOnReady(),
                    b._debugTS("onload", !1),
                    b.onerror instanceof Function && b.onerror.apply(a),
                    !1;
            b._debugTS("onload", !0);
            if (b.waitForWindowLoad && !b._windowLoaded)
                return b._wDS("waitOnload"),
                    a.addEventListener ? a.addEventListener("load", b._initUserOnload, !1) : a.attachEvent && a.attachEvent("onload", b._initUserOnload),
                    !1;
            b.waitForWindowLoad && b._windowLoaded && b._wDS("docLoaded");
            b._initUserOnload()
        }
            ;
        this._addOnReady = function (a, c) {
            b._onready.push({
                method: a,
                scope: c || null,
                fired: !1
            })
        }
            ;
        this._processOnReady = function (a) {
            if (!b._didInit && !a)
                return !1;
            a = {
                success: a ? b.supported() : !b._disabled
            };
            var c = [], d, e = !b.useFlashBlock || b.useFlashBlock && !b.supported();
            var g = 0;
            for (d = b._onready.length; g < d; g++)
                !0 !== b._onready[g].fired && c.push(b._onready[g]);
            if (c.length)
                for (b._wD("soundManager: Firing " + c.length + " onready() item" + (1 < c.length ? "s" : "")),
                    g = 0,
                    d = c.length; g < d; g++)
                    c[g].scope ? c[g].method.apply(c[g].scope, [a]) : c[g].method(a),
                        e || (c[g].fired = !0)
        }
            ;
        this._initUserOnload = function () {
            a.setTimeout(function () {
                b.useFlashBlock && b.flashBlockHandler();
                b._processOnReady();
                b._wDS("onload", 1);
                b.onload.apply(a);
                b._wDS("onloadOK", 1)
            })
        }
            ;
        this.init = function () {
            b._wDS("init");
            b._initMovie();
            if (b._didInit)
                return b._wDS("didInit"),
                    !1;
            a.removeEventListener ? a.removeEventListener("load", b.beginDelayedInit, !1) : a.detachEvent && a.detachEvent("onload", b.beginDelayedInit);
            try {
                b._wDS("flashJS"),
                    b.o._externalInterfaceTest(!1),
                    b.allowPolling ? b._setPolling(!0, b.useFastPolling ? !0 : !1) : b._wDS("noPolling", 1),
                    b.debugMode || b.o._disableDebug(),
                    b.enabled = !0,
                    b._debugTS("jstoflash", !0)
            } catch (m) {
                return b._wD("js/flash exception: " + m.toString()),
                    b._debugTS("jstoflash", !1),
                    b._failSafely(!0),
                    b.initComplete(),
                    !1
            }
            b.initComplete()
        }
            ;
        this.beginDelayedInit = function () {
            b._windowLoaded = !0;
            setTimeout(b.waitForExternalInterface, 500);
            setTimeout(b.beginInit, 20)
        }
            ;
        this.beginInit = function () {
            if (b._initPending)
                return !1;
            b.createMovie();
            b._initMovie();
            return b._initPending = !0
        }
            ;
        this.domContentLoaded = function () {
            document.removeEventListener && document.removeEventListener("DOMContentLoaded", b.domContentLoaded, !1);
            b.go()
        }
            ;
        this._externalInterfaceOK = function (a) {
            if (b.swfLoaded)
                return !1;
            var c = (new Date).getTime();
            b._wD("soundManager._externalInterfaceOK()" + (a ? " (~" + (c - a) + " ms)" : ""));
            b._debugTS("swf", !0);
            b._debugTS("flashtojs", !0);
            b.swfLoaded = !0;
            b._tryInitOnFocus = !1;
            b.isIE ? setTimeout(b.init, 100) : b.init()
        }
            ;
        this._setSandboxType = function (a) {
            var c = b.sandbox;
            c.type = a;
            c.description = c.types["undefined" !== typeof c.types[a] ? a : "unknown"];
            b._wD("Flash security sandbox type: " + c.type);
            "localWithFile" === c.type ? (c.noRemote = !0,
                c.noLocal = !1,
                b._wDS("secNote", 2)) : "localWithNetwork" === c.type ? (c.noRemote = !1,
                    c.noLocal = !0) : "localTrusted" === c.type && (c.noRemote = !1,
                        c.noLocal = !1)
        }
            ;
        this.reboot = function () {
            b._wD("soundManager.reboot()");
            b.soundIDs.length && b._wD("Destroying " + b.soundIDs.length + " SMSound objects...");
            for (var d = b.soundIDs.length; d--;)
                b.sounds[b.soundIDs[d]].destruct();
            try {
                b.isIE && (b.oRemovedHTML = b.o.innerHTML),
                    b.oRemoved = b.o.parentNode.removeChild(b.o),
                    b._wD("Flash movie removed.")
            } catch (c) {
                b._wDS("badRemove", 2)
            }
            b.oRemovedHTML = null;
            b.oRemoved = null;
            b.enabled = !1;
            b._didInit = !1;
            f._waitingForEI = !1;
            b._initPending = !1;
            b._didAppend = !1;
            b._appendSuccess = !1;
            b._disabled = !1;
            b.swfLoaded = !1;
            b.soundIDs = {};
            b.sounds = [];
            b.o = null;
            for (d = b._onready.length; d--;)
                b._onready[d].fired = !1;
            b._wD("soundManager: Rebooting...");
            a.setTimeout(f.beginDelayedInit, 20)
        }
            ;
        this.destruct = function () {
            b._wD("soundManager.destruct()");
            b.disable(!0)
        }
            ;
        var l = function (a) {
            var c = this;
            this.sID = a.id;
            this.url = a.url;
            this._iO = this.instanceOptions = this.options = b._mergeObjects(a);
            this.pan = this.options.pan;
            this.volume = this.options.volume;
            this._lastURL = null;
            this._debug = function () {
                if (b.debugMode) {
                    var a = null
                        , d = [];
                    for (a in c.options)
                        if (null !== c.options[a])
                            if (c.options[a] instanceof Function) {
                                var e = c.options[a].toString();
                                e = e.replace(/\s\s+/g, " ");
                                var g = e.indexOf("{");
                                d[d.length] = " " + a + ": {" + e.substr(g + 1, Math.min(Math.max(e.indexOf("\n") - 1, 64), 64)).replace(/\n/g, "") + "... }"
                            } else
                                d[d.length] = " " + a + ": " + c.options[a];
                    b._wD("SMSound() merged options: {\n" + d.join(", \n") + "\n}")
                }
            }
                ;
            this._debug();
            this.id3 = {};
            this.resetProperties = function (b) {
                c.bytesLoaded = null;
                c.bytesTotal = null;
                c.position = null;
                c.duration = null;
                c.durationEstimate = null;
                c.loaded = !1;
                c.playState = 0;
                c.paused = !1;
                c.readyState = 0;
                c.muted = !1;
                c.didBeforeFinish = !1;
                c.didJustBeforeFinish = !1;
                c.isBuffering = !1;
                c.instanceOptions = {};
                c.instanceCount = 0;
                c.peakData = {
                    left: 0,
                    right: 0
                };
                c.waveformData = {
                    left: [],
                    right: []
                };
                c.eqData = [];
                c.eqData.left = [];
                c.eqData.right = []
            }
                ;
            c.resetProperties();
            this.load = function (a) {
                "undefined" !== typeof a ? (c._iO = b._mergeObjects(a),
                    c.instanceOptions = c._iO) : (a = c.options,
                        c._iO = a,
                        c.instanceOptions = c._iO,
                        c._lastURL && c._lastURL !== c.url && (b._wDS("manURL"),
                            c._iO.url = c.url,
                            c.url = null));
                "undefined" === typeof c._iO.url && (c._iO.url = c.url);
                b._wD("soundManager.load(): " + c._iO.url, 1);
                if (c._iO.url === c.url && 0 !== c.readyState && 2 !== c.readyState)
                    return b._wDS("onURL", 1),
                        !1;
                c.url = c._iO.url;
                c._lastURL = c._iO.url;
                c.loaded = !1;
                c.readyState = 1;
                c.playState = 0;
                try {
                    8 === b.flashVersion ? b.o._load(c.sID, c._iO.url, c._iO.stream, c._iO.autoPlay, c._iO.whileloading ? 1 : 0) : (b.o._load(c.sID, c._iO.url, c._iO.stream ? !0 : !1, c._iO.autoPlay ? !0 : !1),
                        c._iO.isMovieStar && c._iO.autoLoad && !c._iO.autoPlay && c.pause())
                } catch (n) {
                    b._wDS("smError", 2),
                        b._debugTS("onload", !1),
                        b.onerror(),
                        b.disable()
                }
            }
                ;
            this.unload = function () {
                0 !== c.readyState && (b._wD('SMSound.unload(): "' + c.sID + '"'),
                    2 !== c.readyState && c.setPosition(0, !0),
                    b.o._unload(c.sID, b.nullURL),
                    c.resetProperties())
            }
                ;
            this.destruct = function () {
                b._wD('SMSound.destruct(): "' + c.sID + '"');
                b.o._destroySound(c.sID);
                b.destroySound(c.sID, !0)
            }
                ;
            this.start = this.play = function (a) {
                a || (a = {});
                c._iO = b._mergeObjects(a, c._iO);
                c._iO = b._mergeObjects(c._iO, c.options);
                c.instanceOptions = c._iO;
                if (1 === c.playState)
                    if (a = c._iO.multiShot)
                        b._wD('SMSound.play(): "' + c.sID + '" already playing (multi-shot)', 1);
                    else
                        return b._wD('SMSound.play(): "' + c.sID + '" already playing (one-shot)', 1),
                            !1;
                if (c.loaded)
                    b._wD('SMSound.play(): "' + c.sID + '"');
                else if (0 === c.readyState)
                    b._wD('SMSound.play(): Attempting to load "' + c.sID + '"', 1),
                        c._iO.autoPlay = !0,
                        c.load(c._iO);
                else {
                    if (2 === c.readyState)
                        return b._wD('SMSound.play(): Could not load "' + c.sID + '" - exiting', 2),
                            !1;
                    b._wD('SMSound.play(): "' + c.sID + '" is loading - attempting to play..', 1)
                }
                c.paused ? c.resume() : (c.playState = 1,
                    (!c.instanceCount || 8 < b.flashVersion) && c.instanceCount++,
                    c.position = "undefined" === typeof c._iO.position || isNaN(c._iO.position) ? 0 : c._iO.position,
                    c._iO.onplay && c._iO.onplay.apply(c),
                    c.setVolume(c._iO.volume, !0),
                    c.setPan(c._iO.pan, !0),
                    b.o._start(c.sID, c._iO.loop || 1, 9 === b.flashVersion ? c.position : c.position / 1E3))
            }
                ;
            this.stop = function (a) {
                1 === c.playState && (c.playState = 0,
                    c.paused = !1,
                    c._iO.onstop && c._iO.onstop.apply(c),
                    b.o._stop(c.sID, a),
                    c.instanceCount = 0,
                    c._iO = {})
            }
                ;
            this.setPosition = function (a, d) {
                "undefined" === typeof a && (a = 0);
                c._iO.position = Math.min(c.duration, Math.max(a, 0));
                b.o._setPosition(c.sID, 9 === b.flashVersion ? c._iO.position : c._iO.position / 1E3, c.paused || !c.playState)
            }
                ;
            this.pause = function () {
                if (c.paused || 0 === c.playState)
                    return !1;
                b._wD("SMSound.pause()");
                c.paused = !0;
                b.o._pause(c.sID);
                c._iO.onpause && c._iO.onpause.apply(c)
            }
                ;
            this.resume = function () {
                if (!c.paused || 0 === c.playState)
                    return !1;
                b._wD("SMSound.resume()");
                c.paused = !1;
                b.o._pause(c.sID);
                c._iO.onresume && c._iO.onresume.apply(c)
            }
                ;
            this.togglePause = function () {
                b._wD("SMSound.togglePause()");
                if (0 === c.playState)
                    return c.play({
                        position: 9 === b.flashVersion ? c.position : c.position / 1E3
                    }),
                        !1;
                c.paused ? c.resume() : c.pause()
            }
                ;
            this.setPan = function (a, d) {
                "undefined" === typeof a && (a = 0);
                "undefined" === typeof d && (d = !1);
                b.o._setPan(c.sID, a);
                c._iO.pan = a;
                d || (c.pan = a)
            }
                ;
            this.setVolume = function (a, d) {
                "undefined" === typeof a && (a = 100);
                "undefined" === typeof d && (d = !1);
                b.o._setVolume(c.sID, b.muted && !c.muted || c.muted ? 0 : a);
                c._iO.volume = a;
                d || (c.volume = a)
            }
                ;
            this.mute = function () {
                c.muted = !0;
                b.o._setVolume(c.sID, 0)
            }
                ;
            this.unmute = function () {
                c.muted = !1;
                b.o._setVolume(c.sID, "undefined" !== typeof c._iO.volume ? c._iO.volume : c.options.volume)
            }
                ;
            this.toggleMute = function () {
                c.muted ? c.unmute() : c.mute()
            }
                ;
            this._whileloading = function (b, a, d) {
                c._iO.isMovieStar ? (c.bytesLoaded = b,
                    c.bytesTotal = a,
                    c.duration = Math.floor(d),
                    c.durationEstimate = c.duration) : (c.bytesLoaded = b,
                        c.bytesTotal = a,
                        c.duration = Math.floor(d),
                        c.durationEstimate = parseInt(c.bytesTotal / c.bytesLoaded * c.duration, 10),
                        void 0 === c.durationEstimate && (c.durationEstimate = c.duration));
                3 !== c.readyState && c._iO.whileloading && c._iO.whileloading.apply(c)
            }
                ;
            this._onid3 = function (a, d) {
                b._wD('SMSound._onid3(): "' + this.sID + '" ID3 data received.');
                var e = [], g;
                var f = 0;
                for (g = a.length; f < g; f++)
                    e[a[f]] = d[f];
                c.id3 = b._mergeObjects(c.id3, e);
                c._iO.onid3 && c._iO.onid3.apply(c)
            }
                ;
            this._whileplaying = function (a, d, e, g, f) {
                if (isNaN(a) || null === a)
                    return !1;
                0 === c.playState && 0 < a && (a = 0);
                c.position = a;
                8 < b.flashVersion && (c._iO.usePeakData && "undefined" !== typeof d && d && (c.peakData = {
                    left: d.leftPeak,
                    right: d.rightPeak
                }),
                    c._iO.useWaveformData && "undefined" !== typeof e && e && (c.waveformData = {
                        left: e.split(","),
                        right: g.split(",")
                    }),
                    c._iO.useEQData && "undefined" !== typeof f && f.leftEQ && (a = f.leftEQ.split(","),
                        c.eqData = a,
                        c.eqData.left = a,
                        "undefined" !== typeof f.rightEQ && f.rightEQ && (c.eqData.right = f.rightEQ.split(","))));
                1 === c.playState && (c.isBuffering && c._onbufferchange(0),
                    c._iO.whileplaying && c._iO.whileplaying.apply(c),
                    c.loaded && c._iO.onbeforefinish && c._iO.onbeforefinishtime && !c.didBeforeFinish && c.duration - c.position <= c._iO.onbeforefinishtime && (b._wD("duration-position &lt;= onbeforefinishtime: " + c.duration + " - " + c.position + " &lt= " + c._iO.onbeforefinishtime + " (" + (c.duration - c.position) + ")"),
                        c._onbeforefinish()))
            }
                ;
            this._onload = function (a) {
                a = 1 === a ? !0 : !1;
                b._wD('SMSound._onload(): "' + c.sID + '"' + (a ? " loaded." : " failed to load? - " + c.url), a ? 1 : 2);
                a || (!0 === b.sandbox.noRemote && b._wD("SMSound._onload(): " + b._str("noNet"), 1),
                    !0 === b.sandbox.noLocal && b._wD("SMSound._onload(): " + b._str("noLocal"), 1));
                c.loaded = a;
                c.readyState = a ? 3 : 2;
                c._iO.onload && c._iO.onload.apply(c)
            }
                ;
            this._onbeforefinish = function () {
                c.didBeforeFinish || (c.didBeforeFinish = !0,
                    c._iO.onbeforefinish && (b._wD('SMSound._onbeforefinish(): "' + c.sID + '"'),
                        c._iO.onbeforefinish.apply(c)))
            }
                ;
            this._onjustbeforefinish = function (a) {
                c.didJustBeforeFinish || (c.didJustBeforeFinish = !0,
                    c._iO.onjustbeforefinish && (b._wD('SMSound._onjustbeforefinish(): "' + c.sID + '"'),
                        c._iO.onjustbeforefinish.apply(c)))
            }
                ;
            this._onfinish = function () {
                c._iO.onbeforefinishcomplete && c._iO.onbeforefinishcomplete.apply(c);
                c.didBeforeFinish = !1;
                c.didJustBeforeFinish = !1;
                c.instanceCount && (c.instanceCount--,
                    c.instanceCount || (c.playState = 0,
                        c.paused = !1,
                        c.instanceCount = 0,
                        c.instanceOptions = {}),
                    c.instanceCount && !c._iO.multiShotEvents || !c._iO.onfinish || (b._wD('SMSound._onfinish(): "' + c.sID + '"'),
                        c._iO.onfinish.apply(c)))
            }
                ;
            this._onmetadata = function (a) {
                b._wD("SMSound.onmetadata()");
                a.width || a.height || (b._wDS("noWH"),
                    a.width = 320,
                    a.height = 240);
                c.metadata = a;
                c.width = a.width;
                c.height = a.height;
                c._iO.onmetadata && (b._wD('SMSound.onmetadata(): "' + c.sID + '"'),
                    c._iO.onmetadata.apply(c));
                b._wD("SMSound.onmetadata() complete")
            }
                ;
            this._onbufferchange = function (a) {
                if (0 === c.playState)
                    return !1;
                if (a === c.isBuffering)
                    return b._wD("SMSound._onbufferchange(): ignoring false default / loaded sound"),
                        !1;
                c.isBuffering = 1 === a ? !0 : !1;
                c._iO.onbufferchange && (b._wD("SMSound._onbufferchange(): " + a),
                    c._iO.onbufferchange.apply(c))
            }
                ;
            this._ondataerror = function (a) {
                0 < c.playState && (b._wD("SMSound._ondataerror(): " + a),
                    c._iO.ondataerror && c._iO.ondataerror.apply(c))
            }
        };
        this._onfullscreenchange = function (d) {
            b._wD("onfullscreenchange(): " + d);
            b.isFullScreen = 1 === d ? !0 : !1;
            if (!b.isFullScreen)
                try {
                    a.focus(),
                        b._wD("window.focus()")
                } catch (c) { }
        }
            ;
        a.addEventListener ? (a.addEventListener("focus", b.handleFocus, !1),
            a.addEventListener("load", b.beginDelayedInit, !1),
            a.addEventListener("unload", b.destruct, !1),
            b._tryInitOnFocus && a.addEventListener("mousemove", b.handleFocus, !1)) : a.attachEvent ? (a.attachEvent("onfocus", b.handleFocus),
                a.attachEvent("onload", b.beginDelayedInit),
                a.attachEvent("unload", b.destruct)) : (b._debugTS("onload", !1),
                    f.onerror(),
                    f.disable());
        document.addEventListener && document.addEventListener("DOMContentLoaded", b.domContentLoaded, !1)
    }
    var f = null;
    "undefined" !== typeof SM2_DEFER && SM2_DEFER || (f = new d);
    a.SoundManager = d;
    a.soundManager = f
}
)(window);
if ("undefined" == typeof YX)
    var YX = {};
YX.Read = {
    nodeText: [],
    finishEvent: {},
    loadEvent: {},
    beforeLoadEvent: {},
    intv: 0,
    continueIndex: -1,
    selectFlag: !1,
    isMobSafari: !1,
    selectContentArray: [],
    readIndex: 0,
    IsAudio: !1,
    Replay: function () { },
    Timeout: 3E4,
    Duration: 0,
    OnError: function () { },
    Close: function () {
        YX.Read.Config.systemIsRead = "false"
    },
    IsRead: function () {
        return "true" == YX.Read.Config.systemIsRead
    },
    Open: function () {
        YX.Read.Config.systemIsRead = "true"
    },
    Stop: function () {
        YX.Read.Sound.soundQueue = [];
        this.nodeText = [];
        YX.Read.Sound.StopAllSounds()
    },
    GetVolume: function () {
        return YX.Read.Config.systemVolume
    },
    SetVolume: function (a) {
        YX.Read.Config.systemVolume = a
    },
    GetPacket: function () {
        return YX.Read.Config.systemReadStyle
    },
    SetPacket: function (a) {
        YX.Read.Config.systemReadStyle = a
    },
    GetSpeed: function () {
        return YX.Read.Config.systemSpeed
    },
    SetSpeed: function (a) {
        YX.Read.Config.systemSpeed = a
    },
    ShowText: function (a, d) {
        "function" == typeof d && d(a)
    },
    Play: function (a, d, f, e, g) {
        g && "function" == typeof g && g(a);
        YX.Read.Sound.PlayToolIsSelfSound(a, d, f, e, g)
    },
    UnPointerRead: function () { },
    PointerRead: function (a, d, f, e, g) {
        g || (window.tempIntv && clearTimeout(window.tempIntv),
            YX.Read.Sound.StopAllSounds(),
            YX.Read.Sound.soundQueue = [],
            e && "function" == typeof e && e(a),
            YX.Read.Sound.TextToSpeechAndPlay(a, !1, {
                preload: !0,
                which: "preso"
            }));
        (g = YX.Read.Sound.soundQueue.shift()) ? (YX.Read.Sound.StopAllSounds(),
            g.options.onfinish = function () {
                YX.Read.Sound.StopAllSounds();
                "function" == typeof d && d.call(this);
                this.destruct()
            }
            ,
            g.options.onplay = function () {
                YX.Read.Duration = this.duration;
                "function" == typeof f && f.call(this)
            }
            ,
            g.options.onfailture = function () {
                YX.Read.OnError && "function" == typeof YX.Read.OnError && YX.Read.OnError.call({
                    text: a,
                    msg: "sound failture"
                })
            }
            ,
            g.play()) : window.tempIntv = setTimeout(function () {
                YX.Read.PointerRead(a, d, f, e, !0)
            }, YX.Read.Utils.IsMob() ? 800 : 100)
    },
    Init: function (a, d) {
        YX.Read.Config.Init(d);
        YX.Read.Sound.Init(a)
    },
    UnContinueRead: function () {
        YX.Read.Sound.soundQueue = [];
        YX.Read.Sound.StopAllSounds()
    },
    ContinueRead: function (a, d, f, e, g, b) {
        g && (YX.Read.Sound.soundQueue = [],
            YX.Read.Sound.TextToSpeechAndPlay(a, !1, {
                preload: !0,
                which: "preso"
            }));
        var h = YX.Read.Sound.soundQueue.shift();
        h ? (YX.Read.ShowText(a, b),
            YX.Read.Sound.StopAllSounds(),
            h.options.onfinish = function () {
                YX.Read.Sound.StopAllSounds();
                "function" == typeof e && e.call(this);
                this.destruct()
            }
            ,
            h.options.onplay = function () {
                window.timerIntv && clearTimeout(window.timerIntv);
                YX.Read.Duration = this.duration;
                "function" == typeof f && f.call(this);
                d && YX.Read.Sound.TextToSpeechAndPlay(d, !1, {
                    preload: !0,
                    which: h.name
                })
            }
            ,
            h.options.onfailture = function () {
                YX.Read.OnError && "function" == typeof YX.Read.OnError && YX.Read.OnError.call({
                    text: a,
                    msg: "sound failture"
                })
            }
            ,
            h.play(),
            window.timerIntv = setTimeout(function () {
                h.destruct();
                YX.Read.ContinueRead(a, d, f, e, !0, b)
            }, g ? 800 : 100)) : setTimeout(function () {
                YX.Read.ContinueRead(a, d, f, e, !1, b)
            }, g ? 1E3 : 100)
    }
};
YX.Read.Audio = {
    sound: null,
    _sound: null,
    firstPlay: !1,
    emptyUrl: "",
    isInit: !1,
    Init: function () {
        function a(a) {
            var d = this;
            this.isidle = !0;
            this.name = a;
            this.audio = document.createElement("AUDIO");
            this.audio.addEventListener("play", function () {
                d.isidle = !1;
                var a = d.options;
                a && "function" == typeof a.onplay && a.onplay.call(d)
            });
            this.audio.addEventListener("ended", function () {
                d.isidle = !0;
                var a = d.options;
                a && "function" == typeof a.onfinish && a.onfinish.call(d)
            });
            this.audio.addEventListener("errror", function () {
                d.isidle = !0;
                var a = d.options;
                a && "function" == typeof a.onfailture && a.onfailture.call(d)
            });
            this.audio.preload = "auto";
            this.audio.autoplay = !1;
            this.play = function () {
                var a = this.options ? this.options : {}
                    , b = a.volume ? a.volume : 100;
                "number" !== typeof b && (b = parseInt(b));
                this.audio.volume = (100 < b ? 100 : 0 > b ? 0 : b) / 100;
                a = a.speed ? a.speed : 0;
                "number" !== typeof a && parseInt(a);
                this.audio.play()
            }
                ;
            this.stop = function () {
                this.audio.pause()
            }
                ;
            this.destruct = function () { }
        }
        if (!this.isInit) {
            this.isInit = !0;
            this.emptyUrl = YX.Read.Config.pluginPath + "mp3/null.mp3";
            var d = this;
            if (!window.Audio || this.audio)
                return null;
            this.sound = new a("curso");
            this._sound = new a("preso");
            document.addEventListener("touchstart", function (a) {
                d.firstPlay || (d.firstPlay = !0,
                    d.sound.audio.src = d.emptyUrl,
                    d.sound.audio.play(),
                    d._sound.audio.src = d.emptyUrl,
                    d._sound.audio.play());
                return !0
            }, !0)
        }
    },
    createSound: function (a) {
        if (!YX.Read.Audio.sound)
            return null;
        a = a || {};
        if (YX.Read.Audio._sound.isidle)
            return YX.Read.Audio._sound.options = a,
                YX.Read.Audio._sound.audio.src = a.url,
                YX.Read.Audio._sound;
        YX.Read.Audio.sound.options = a;
        YX.Read.Audio.sound.audio.src = a.url;
        return YX.Read.Audio.sound
    },
    stopAll: function () {
        YX.Read.Audio.sound && YX.Read.Audio.sound.stop();
        YX.Read.Audio._sound && YX.Read.Audio._sound.stop()
    }
};
YX.Read.Config = {
    serverPath: "",
    swfPath: "swf/",
    pluginPath: "",
    errorPath: "mp3/error.mp3",
    voicesPath: "",
    socketPath: "",
    translatePath: "",
    systemPointerReadTime: 500,
    systemContinueReadTime: 3E3,
    systemIsRead: "true",
    systemPause: "false",
    systemRead: "pointer",
    systemVolume: 100,
    systemSpeed: 0,
    systemReadStyle: 0,
    HttpPath: function (a) {
        return this.GetDomain() + this.serverPath + a
    },
    GetDomain: function () {
        return document.location.href.split(this.serverPath)[0]
    },
    Init: function (a) {
        a = a ? a : YX.Read.Config.scriptPath;
        if (-1 == a.indexOf("://")) {
            var d = document.createElement("a");
            d.href = a;
            a = d.href
        }
        a = a.split("/");
        a.pop();
        this.pluginPath = a.join("/") + "/";
        a = this.pluginPath.split("/");
        this.host = a[0] + "//" + a[2] + "/";
        a = location.pathname.split("/");
        this.serverPath = (3 > a.length ? "" : a[a.length - 2]) + "/";
        a = document.getElementById("yx_voicespath");
        d = document.getElementById("yx_socketpath");
        this.voicesPath = a ? a.href : "object" == typeof yx_ini && yx_ini.voiceUrl ? yx_ini.voiceUrl : this.host + "yxsm/cache/voices/voices1/";
        this.socketPath = d ? d.href : "object" == typeof yx_ini && yx_ini.socketUrl ? yx_ini.socketUrl : this.host + "yxsm/index.php?m=socket&a=get";
        if (!this.socketPath || !this.voicesPath)
            throw "The path of mp3 is not find!";
    }
};
YX.Read.Config.scriptPath = document.scripts[document.scripts.length - 1].src;
YX.Read.Utils = {
    trim: function (a) {
        return a ? a.replace(/(^\s)|(\s$)/g, "") : ""
    },
    countSubRE: function (a, d) {
        return a.length - a.replace(new RegExp(d, "i"), "").length
    },
    countWords: function (a) {
        return this.trim(a).split(/\s+/).length
    },
    getRecordingTextarea: function () {
        return getNavigationDocument().getElementById("recording")
    },
    getTime: function () {
        return (new Date).valueOf()
    },
    recordLine: function (a) {
        recordActions && (this.getRecordingTextarea().value += this.getTime() + " " + a + "\n")
    },
    callForEachDoc: function (a, d) {
        for (var f = 0; f < a.frames.length; f++)
            d(a.frames[f].document)
    },
    postURL: function (a, d, f) {
        var e = null;
        window.XMLHttpRequest ? e = new XMLHttpRequest : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP"));
        e.onreadystatechange = f;
        e.open("POST", a, !0);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.setRequestHeader("Content-length", d.length);
        e.setRequestHeader("Connection", "close");
        e.send(d)
    },
    _delayPostQueue: null,
    delayProxyPost: function (a) {
        null == YX.Read.Utils._delayPostQueue && (YX.Read.Utils._delayPostQueue = []);
        YX.Read.Utils._delayPostQueue.push(a)
    },
    postDelayPostInfo: function () {
        if (top.web_proxy_url) {
            var a = this.getDelayPostInfo(16E3)
                , d = top.web_proxy_url.replace(/\$url\$/, "");
            0 < ("" + a).length && this.postURL(d, a)
        }
    },
    getDelayPostInfo: function (a) {
        a -= ("&sid=" + top.sessionid).length;
        var d = YX.Read.Utils._delayPostQueue
            , f = "";
        if (null == d || 1 > d.length)
            return "";
        for (var e = 0; f.length < a && 0 < d.length; e++)
            0 < f.length && (f += "&"),
                f += YX.delayPostPrefix + e + "=" + escape(d.shift());
        return f
    },
    addDelayPost: function (a) {
        var d = this.getDelayPostInfo(2048 - ("" + a).length);
        0 < (d + "").length && (a = a.replace(/\$dp\$/, d));
        return a
    },
    getXPath: function (a) {
        if (!a || !a.ownerDocument)
            return "(none)";
        var d = ""
            , f = a.ownerDocument.documentElement.namespaceURI ? "x:" : ""
            , e = a
            , g = a.ownerDocument
            , b = null;
        a.getAttribute && (b = a.getAttribute("id"));
        for (a = 0; e && e != g; a++) {
            if (!e.tagName || !e.parentNode)
                return "";
            var h = e.tagName.toLowerCase()
                , k = f + h;
            if (0 < h.length) {
                e.getAttribute("class");
                for (var l = e.parentNode.childNodes, m = 1, c = 0, q = l.length; c < q; c++) {
                    var n = l[c].tagName;
                    if (n) {
                        n = l[c].tagName.toLowerCase();
                        if (l[c] == e)
                            break;
                        n == h && m++
                    }
                }
                k += "[" + m + "]"
            } else
                "tr" == h ? (h = e.parentNode.rows.length,
                    1 < h && 5 > h && (k += "[" + (e.rowIndex + 1) + "]")) : "td" == h && (h = e.parentNode.cells.length,
                        1 < h && 5 > h && (k += "[" + (e.cellIndex + 1) + "]"));
            d = "/" + k + d;
            e = e.parentNode
        }
        b && (d += "#" + b);
        return d
    },
    isIE: function () {
        return "Microsoft Internet Explorer" == navigator.appName
    },
    simpleHash: function (a) {
        if (null == a)
            return "nullhash";
        var d = String(typeof a);
        if ("undefined" == d)
            return "undefinedhash";
        "string" != d && (a = String(a));
        if (0 >= a.length)
            return "emptystring";
        d = "";
        for (var f, e, g, b = 0, h = a.length; b < h; b++)
            f = a.charCodeAt(b),
                48 <= f && 57 >= f || 65 <= f && 90 >= f || 97 <= f && 122 >= f ? d += a.charAt(b) : (e = f >> 10,
                    g = (f & 1023) >> 4,
                    f &= 15,
                    d += "$" + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_$".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_$".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_$".charAt(f));
        64 < d.length && (d = "_" + YX.Read.Md5.hex_md5(a));
        return d
    },
    findPos: function (a) {
        curtop = 0;
        if (null != a && a.offsetParent) {
            var d = a.offsetLeft;
            for (curtop = a.offsetTop; a = a.offsetParent;)
                d += a.offsetLeft,
                    curtop += a.offsetTop
        } else
            return null;
        return [d, curtop]
    },
    contentWidthHeight: function (a) {
        if (void 0 != self.innerWidth)
            return [a.innerWidth, a.innerHeight];
        a = a.document.body;
        return [a.clientWidth, a.clientHeight]
    },
    getScrollOffset: function (a) {
        return void 0 != a.scrollY ? [a.scrollX, a.scrollY] : a.document.documentElement.scrollTop ? (a = a.document.documentElement,
            [a.scrollLeft, a.scrollTop]) : [0, 0]
    },
    setListener: function (a, d, f) {
        window.attachEvent ? a.attachEvent("on" + d, f) : window.addEventListener && a.addEventListener(d, f, !1)
    },
    log: function (a) {
        /debug=true/.test(document.location) ? (YX.Read.Utils.log = function (a) {
            "undefined" != typeof console && "undefined" != typeof console.log && console.log(a)
        }
            ,
            YX.Read.Utils.log(a)) : YX.Read.Utils.log = function () { }
    },
    getSelection: function (a) {
        YX.Read.Utils.log("getSelection");
        if (a.getSelection)
            return YX.Read.Utils.log("doc.getSelection"),
                "" + a.getSelection();
        if (a.selection)
            return YX.Read.Utils.log("doc.selection"),
                "" + a.selection.createRange().text;
        YX.Read.Utils.log("nothing");
        return ""
    },
    getTarget: function (a) {
        if (a.target)
            a = a.target;
        else if (a.srcElement)
            a = a.srcElement;
        else
            return null;
        3 == a.nodeType && (a = a.parentNode);
        return a
    },
    RemoveSpacesBetweenChar: function (a) {
        return this.LTrim(a) ? a = a.replace(/([\u4e00-\u9fa5])\s+(?=[\u4e00-\u9fa5])/g, "$1") : !1
    },
    LTrim: function (a) {
        return a ? !0 : !1
    },
    IsExist: function (a, d) {
        if (!a || !d)
            return !1;
        a = a.indexOf(d);
        return -1 !== a ? a : !1
    },
    GetCurrentTime: function () {
        var a = new Date
            , d = a.getFullYear()
            , f = a.getMonth() + 1
            , e = a.getDate()
            , g = a.getHours()
            , b = a.getMinutes();
        a = a.getSeconds();
        return d + "-" + f + "-" + e + " " + g + ":" + b + ":" + a
    },
    StrReplace: function (a, d, f, e) {
        f = a.indexOf(f, d);
        -1 == f && (f = a.length - 1);
        d = a.slice(0, d - 1);
        a = a.slice(f + 1);
        return e ? d + e + a : d + a
    },
    GetShortStr: function (a, d) {
        return a.length > d ? a.slice(0, d) + "..." : a
    },
    Scaling: function (a, d, f, e, g) {
        if (0 >= a || 0 >= a)
            return {
                width: f,
                height: e
            };
        a * g <= f ? (g *= a,
            f = g / a * d) : (g = f,
                f = f / a * d);
        f > e && (f = e,
            g = e / d * a);
        return {
            width: g,
            height: f
        }
    },
    InArray: function (a, d) {
        for (s = 0; s < d.length; s++)
            if (thisEntry = d[s].toString(),
                thisEntry == a)
                return !0;
        return !1
    },
    IsIE: function () {
        return !!window.ActiveXObject || "ActiveXObject" in window
    },
    GetBodyWidthHeight: function () {
        if (this.isIE()) {
            var a = "CSS1Compat" == document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth;
            var d = "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight
        } else
            a = self.innerWidth,
                d = self.innerHeight;
        return {
            width: a,
            height: d
        }
    },
    GetIframeBodyWidthHeight: function (a) {
        if (this.isIE()) {
            var d = "CSS1Compat" == window.frames[a].document.compatMode ? window.frames[a].document.documentElement.clientWidth : window.frames[a].document.body.clientWidth;
            a = "CSS1Compat" == window.frames[a].document.compatMode ? window.frames[a].document.documentElement.clientHeight : window.frames[a].document.body.clientHeight
        } else
            d = window.frames[a].self.innerWidth,
                a = window.frames[a].self.innerHeight;
        return {
            width: d,
            height: a
        }
    },
    RepalceSourceString: function (a, d, f) {
        if ("" == a)
            return "";
        var e = "";
        a = a.split(d);
        d = 0;
        for (var g = a.length; d < g; d++)
            d == g - 1 && "" == a[g - 1] ? e += a[d] : d == g - 1 && "" != a[g - 1] ? e += a[d] : (e += a[d],
                e += f);
        return e
    },
    PopEvent: function (a) {
        a = a ? a : window.event;
        a.stopPropagation()
    },
    GetOS: function () {
        if (0 < navigator.userAgent.indexOf("MSIE"))
            return "IE";
        if (isFirefox = 0 < navigator.userAgent.indexOf("Firefox"))
            return "FF";
        if (isSafari = 0 < navigator.userAgent.indexOf("Safari"))
            return "SF";
        if (isCamino = 0 < navigator.userAgent.indexOf("Camino"))
            return "CN";
        if (isMozilla = 0 < navigator.userAgent.indexOf("Gecko/"))
            return "GK"
    },
    StringWidthPinyin: function (a) {
        if ("" == a)
            return "";
        a = this.DeleteSpace(a);
        YX.Read.Utils.CountWordsLength(a);
        var d = ""
            , f = ""
            , e = ""
            , g = YX.systemTipWordsLength
            , b = parseInt(a.length / g);
        b = 0 == a.length % g ? b - 1 : b;
        for (var h = 0; h <= b; h++) {
            for (var k = g * h; k < g * (h + 1); k++) {
                var l = a.charAt(k);
                d += "<td align=center style='font-size:" + YX.systemScreenPinYinWordFontSize + "px;'>" + l + "</td>";
                f += "<td align=center style='font-size:" + YX.systemScreenPinYinSelfFontSize + "px;'>" + this.CharToPinyin(l) + "</td>"
            }
            e += "<tr>" + f + "<td>&nbsp;</td></tr><tr>" + d + "<td>&nbsp;</td></tr>";
            f = d = ""
        }
        return "<table border =0 align='center' valign='middle' cellspacing=0 cellpadding=0>" + e + "</table>"
    },
    DeleteSpace: function (a) {
        if ("" == a)
            return "";
        var d = document.createElemen("div");
        d.innerHTML = a;
        docment.body.append(d);
        a = d.innerText || d.data;
        document.body.remove(d);
        d = "";
        for (var f = 0; f < a.length; f++) {
            var e = a.charAt(f);
            " " != e && "\r" != e && "\n" != e && (d += e)
        }
        return d
    },
    CountWordsLength: function (a) {
        if (!a)
            return 0;
        a = a.toLowerCase();
        for (var d = "abcdefghijklmnopqrstuvwxyz,.?:;[]{}\"'<>\\/ ".split(""), f = 0, e = 0; e < a.length; e++)
            YX.Read.Utils.InArray(a.charAt(e), d) ? f++ : f += 2;
        return f
    },
    RemoveSpecialCharacters: function (a) {
        var d, f = "";
        if (!a)
            return "";
        a = YX.Read.Utils.trim(a);
        a = a.split("&nbsp;").join("");
        3 > a.length && (a = a.replace(/[~!@#\$%\^&\*\(\)\-_\+=\[\]\{\}<>\.]/ig, ""));
        for (d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "\t" == e || "\u3000" == e || " " == e && d < a.length - 1 && " " == a.charAt(d + 1) || "\r" == e || "\n" == e || "$" == e || "#" == e || "|" == e || "\\" == e || "&" == e || (f += e)
        }
        return f
    },
    UTFUrlEncode: function (a) {
        return a ? escape(a) : ""
    },
    UTFUrlDecode: function (a) {
        return a ? unescape(a) : ""
    },
    IsMob: function () {
        for (var a = ["iphone", "android"], d = navigator.userAgent.toLowerCase(), f = 0; f < a.length; f++)
            if (-1 < d.indexOf(a[f]))
                return !0;
        return !1
    },
    IsSafari: function () {
        return /safari/i.test(navigator.userAgent)
    }
};
YX.Read.Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode64: function (a) {
        if (null == a)
            return null;
        var d = ""
            , f = 0;
        do {
            var e = a.charCodeAt(f++);
            var g = a.charCodeAt(f++);
            var b = a.charCodeAt(f++);
            var h = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            var k = (g & 15) << 2 | b >> 6;
            var l = b & 63;
            isNaN(g) ? k = l = 64 : isNaN(b) && (l = 64);
            d = d + this._keyStr.charAt(h) + this._keyStr.charAt(e) + this._keyStr.charAt(k) + this._keyStr.charAt(l)
        } while (f < a.length); return d
    },
    decode64: function (a) {
        if (null == a)
            return null;
        var d = ""
            , f = 0;
        a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
        var e = String.fromCharCode;
        do {
            var g = this._keyStr.indexOf(a.charAt(f++));
            var b = this._keyStr.indexOf(a.charAt(f++));
            var h = this._keyStr.indexOf(a.charAt(f++));
            var k = this._keyStr.indexOf(a.charAt(f++));
            g = g << 2 | b >> 4;
            b = (b & 15) << 4 | h >> 2;
            var l = (h & 3) << 6 | k;
            d += e(g);
            64 != h && (d += e(b));
            64 != k && (d += e(l))
        } while (f < a.length); return d
    }
};
YX.Read.Md5 = {
    hexcase: 0,
    b64pad: "",
    chrsz: 8,
    hex_md5: function (a) {
        return this.binl2hex(this.core_md5(this.str2binl(a), a.length * this.chrsz))
    },
    b64_md5: function (a) {
        return this.binl2b64(this.core_md5(this.str2binl(a), a.length * this.chrsz))
    },
    str_md5: function (a) {
        return this.binl2str(this.core_md5(this.str2binl(a), a.length * this.chrsz))
    },
    hex_hmac_md5: function (a, d) {
        return this.binl2hex(this.core_hmac_md5(a, d))
    },
    b64_hmac_md5: function (a, d) {
        return this.binl2b64(this.core_hmac_md5(a, d))
    },
    str_hmac_md5: function (a, d) {
        return this.binl2str(this.core_hmac_md5(a, d))
    },
    md5_vm_test: function () {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc")
    },
    core_md5: function (a, d) {
        a[d >> 5] |= 128 << d % 32;
        a[(d + 64 >>> 9 << 4) + 14] = d;
        d = 1732584193;
        for (var f = -271733879, e = -1732584194, g = 271733878, b = 0; b < a.length; b += 16) {
            var h = d
                , k = f
                , l = e
                , m = g;
            d = this.md5_ff(d, f, e, g, a[b + 0], 7, -680876936);
            g = this.md5_ff(g, d, f, e, a[b + 1], 12, -389564586);
            e = this.md5_ff(e, g, d, f, a[b + 2], 17, 606105819);
            f = this.md5_ff(f, e, g, d, a[b + 3], 22, -1044525330);
            d = this.md5_ff(d, f, e, g, a[b + 4], 7, -176418897);
            g = this.md5_ff(g, d, f, e, a[b + 5], 12, 1200080426);
            e = this.md5_ff(e, g, d, f, a[b + 6], 17, -1473231341);
            f = this.md5_ff(f, e, g, d, a[b + 7], 22, -45705983);
            d = this.md5_ff(d, f, e, g, a[b + 8], 7, 1770035416);
            g = this.md5_ff(g, d, f, e, a[b + 9], 12, -1958414417);
            e = this.md5_ff(e, g, d, f, a[b + 10], 17, -42063);
            f = this.md5_ff(f, e, g, d, a[b + 11], 22, -1990404162);
            d = this.md5_ff(d, f, e, g, a[b + 12], 7, 1804603682);
            g = this.md5_ff(g, d, f, e, a[b + 13], 12, -40341101);
            e = this.md5_ff(e, g, d, f, a[b + 14], 17, -1502002290);
            f = this.md5_ff(f, e, g, d, a[b + 15], 22, 1236535329);
            d = this.md5_gg(d, f, e, g, a[b + 1], 5, -165796510);
            g = this.md5_gg(g, d, f, e, a[b + 6], 9, -1069501632);
            e = this.md5_gg(e, g, d, f, a[b + 11], 14, 643717713);
            f = this.md5_gg(f, e, g, d, a[b + 0], 20, -373897302);
            d = this.md5_gg(d, f, e, g, a[b + 5], 5, -701558691);
            g = this.md5_gg(g, d, f, e, a[b + 10], 9, 38016083);
            e = this.md5_gg(e, g, d, f, a[b + 15], 14, -660478335);
            f = this.md5_gg(f, e, g, d, a[b + 4], 20, -405537848);
            d = this.md5_gg(d, f, e, g, a[b + 9], 5, 568446438);
            g = this.md5_gg(g, d, f, e, a[b + 14], 9, -1019803690);
            e = this.md5_gg(e, g, d, f, a[b + 3], 14, -187363961);
            f = this.md5_gg(f, e, g, d, a[b + 8], 20, 1163531501);
            d = this.md5_gg(d, f, e, g, a[b + 13], 5, -1444681467);
            g = this.md5_gg(g, d, f, e, a[b + 2], 9, -51403784);
            e = this.md5_gg(e, g, d, f, a[b + 7], 14, 1735328473);
            f = this.md5_gg(f, e, g, d, a[b + 12], 20, -1926607734);
            d = this.md5_hh(d, f, e, g, a[b + 5], 4, -378558);
            g = this.md5_hh(g, d, f, e, a[b + 8], 11, -2022574463);
            e = this.md5_hh(e, g, d, f, a[b + 11], 16, 1839030562);
            f = this.md5_hh(f, e, g, d, a[b + 14], 23, -35309556);
            d = this.md5_hh(d, f, e, g, a[b + 1], 4, -1530992060);
            g = this.md5_hh(g, d, f, e, a[b + 4], 11, 1272893353);
            e = this.md5_hh(e, g, d, f, a[b + 7], 16, -155497632);
            f = this.md5_hh(f, e, g, d, a[b + 10], 23, -1094730640);
            d = this.md5_hh(d, f, e, g, a[b + 13], 4, 681279174);
            g = this.md5_hh(g, d, f, e, a[b + 0], 11, -358537222);
            e = this.md5_hh(e, g, d, f, a[b + 3], 16, -722521979);
            f = this.md5_hh(f, e, g, d, a[b + 6], 23, 76029189);
            d = this.md5_hh(d, f, e, g, a[b + 9], 4, -640364487);
            g = this.md5_hh(g, d, f, e, a[b + 12], 11, -421815835);
            e = this.md5_hh(e, g, d, f, a[b + 15], 16, 530742520);
            f = this.md5_hh(f, e, g, d, a[b + 2], 23, -995338651);
            d = this.md5_ii(d, f, e, g, a[b + 0], 6, -198630844);
            g = this.md5_ii(g, d, f, e, a[b + 7], 10, 1126891415);
            e = this.md5_ii(e, g, d, f, a[b + 14], 15, -1416354905);
            f = this.md5_ii(f, e, g, d, a[b + 5], 21, -57434055);
            d = this.md5_ii(d, f, e, g, a[b + 12], 6, 1700485571);
            g = this.md5_ii(g, d, f, e, a[b + 3], 10, -1894986606);
            e = this.md5_ii(e, g, d, f, a[b + 10], 15, -1051523);
            f = this.md5_ii(f, e, g, d, a[b + 1], 21, -2054922799);
            d = this.md5_ii(d, f, e, g, a[b + 8], 6, 1873313359);
            g = this.md5_ii(g, d, f, e, a[b + 15], 10, -30611744);
            e = this.md5_ii(e, g, d, f, a[b + 6], 15, -1560198380);
            f = this.md5_ii(f, e, g, d, a[b + 13], 21, 1309151649);
            d = this.md5_ii(d, f, e, g, a[b + 4], 6, -145523070);
            g = this.md5_ii(g, d, f, e, a[b + 11], 10, -1120210379);
            e = this.md5_ii(e, g, d, f, a[b + 2], 15, 718787259);
            f = this.md5_ii(f, e, g, d, a[b + 9], 21, -343485551);
            d = this.safe_add(d, h);
            f = this.safe_add(f, k);
            e = this.safe_add(e, l);
            g = this.safe_add(g, m)
        }
        return [d, f, e, g]
    },
    md5_cmn: function (a, d, f, e, g, b) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(d, a), this.safe_add(e, b)), g), f)
    },
    md5_ff: function (a, d, f, e, g, b, h) {
        return this.md5_cmn(d & f | ~d & e, a, d, g, b, h)
    },
    md5_gg: function (a, d, f, e, g, b, h) {
        return this.md5_cmn(d & e | f & ~e, a, d, g, b, h)
    },
    md5_hh: function (a, d, f, e, g, b, h) {
        return this.md5_cmn(d ^ f ^ e, a, d, g, b, h)
    },
    md5_ii: function (a, d, f, e, g, b, h) {
        return this.md5_cmn(f ^ (d | ~e), a, d, g, b, h)
    },
    core_hmac_md5: function (a, d) {
        var f = this.str2binl(a);
        16 < f.length && (f = this.core_md5(f, a.length * this.chrsz));
        var e = Array(16);
        a = Array(16);
        for (var g = 0; 16 > g; g++)
            e[g] = f[g] ^ 909522486,
                a[g] = f[g] ^ 1549556828;
        d = this.core_md5(e.concat(this.str2binl(d)), 512 + d.length * this.chrsz);
        return this.core_md5(a.concat(d), 640)
    },
    safe_add: function (a, d) {
        var f = (a & 65535) + (d & 65535);
        return (a >> 16) + (d >> 16) + (f >> 16) << 16 | f & 65535
    },
    bit_rol: function (a, d) {
        return a << d | a >>> 32 - d
    },
    str2binl: function (a) {
        for (var d = [], f = (1 << this.chrsz) - 1, e = 0; e < a.length * this.chrsz; e += this.chrsz)
            d[e >> 5] |= (a.charCodeAt(e / this.chrsz) & f) << e % 32;
        return d
    },
    binl2str: function (a) {
        for (var d = "", f = (1 << this.chrsz) - 1, e = 0; e < 32 * a.length; e += this.chrsz)
            d += String.fromCharCode(a[e >> 5] >>> e % 32 & f);
        return d
    },
    binl2hex: function (a) {
        for (var d = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", f = "", e = 0; e < 4 * a.length; e++)
            f += d.charAt(a[e >> 2] >> e % 4 * 8 + 4 & 15) + d.charAt(a[e >> 2] >> e % 4 * 8 & 15);
        return f
    },
    binl2b64: function (a) {
        for (var d = "", f = 0; f < 4 * a.length; f += 3)
            for (var e = (a[f >> 2] >> f % 4 * 8 & 255) << 16 | (a[f + 1 >> 2] >> (f + 1) % 4 * 8 & 255) << 8 | a[f + 2 >> 2] >> (f + 2) % 4 * 8 & 255, g = 0; 4 > g; g++)
                d = 8 * f + 6 * g > 32 * a.length ? d + this.b64pad : d + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 6 * (3 - g) & 63);
        return d
    }
};
YX.Read.Json = {
    checkText: "",
    ajaxTimers: [],
    Ajax: function (a) {
        function d(a) {
            for (var b = a.jsonp, d = document.getElementsByTagName("head")[0], f = "jsonp" + (new Date).getTime(), g = 0; window[f];)
                f += g,
                    g++;
            a.data[b] = f;
            b = e(a.data);
            var m = document.createElement("script");
            window[f] = function (b) {
                d.removeChild(m);
                m.timer && clearTimeout(m.timer);
                window[f] = null;
                "function" == typeof a.success && a.success(b)
            }
                ;
            a.time && (m.timer = setTimeout(function () {
                window[f] = null;
                d.removeChild(m);
                "function" == typeof a.error && a.error({
                    message: "timeout"
                })
            }, time));
            m.setAttribute("type", "text/javascript");
            m.src = a.url + (-1 != a.url.indexOf("?") ? "&" : "?") + b;
            d.appendChild(m)
        }
        function f(a) {
            a.type = (a.type || "GET").toUpperCase();
            a.data = e(a.data);
            var b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObjcet("Microsoft.XMLHTTP");
            b.onreadystatechange = function () {
                if (4 == b.readyState) {
                    var d = b.status;
                    200 <= d && 300 > d ? (d = b.getResponseHeader("Content-type"),
                        d = -1 !== d.indexOf("xml") && b.responseXML ? b.responseXML : "application/json" === d ? JSON.parse(b.responseText) : b.responseText,
                        a.success && a.success(d)) : a.error && a.error(d)
                }
            }
                ;
            "GET" == a.type ? (b.open(a.type, a.url + "?" + a.data, !0),
                b.send(null)) : (b.open(a.type, a.url, !0),
                    b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                    b.send(a.data))
        }
        function e(a) {
            var b = [], d;
            for (d in a)
                b.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]));
            b.push("v=" + Math.floor(1E4 * Math.random() + 500));
            return b.join("&")
        }
        a = a || {};
        a.data = a.data || {};
        f = a.jsonp ? d(a) : f(a)
    },
    GetAllSoundPathAndPlay: function (a, d, f, e) {
        if (d)
            (this.checkText = a) && YX.Read.Sound.PlaySound(a, a, !0, !1, f, e);
        else {
            a = YX.Read.Utils.RemoveSpecialCharacters(a);
            if ("" == a)
                return !1;
            var g = YX.Read.Config.systemReadStyle
                , b = YX.Read.Config.systemSpeed;
            "0" == g ? (a = encodeURIComponent(a),
                a += "$" + b + "$100$0#0") : "1" == g ? (a = YX.convert.Convert(1, a),
                    a = d ? a : encodeURIComponent(a),
                    a = a + "$" + b + "$100$0#1") : "2" == g && (a = d ? a : encodeURIComponent(a),
                        a = a + "$" + b + "$100$0#2");
            YX.Read.Json.GetSoundPathAndPlay(a, f, e)
        }
    },
    GetSoundPathAndPlay: function (a, d, f) {
        this.checkText = a;
        var e = "";
        this.Ajax({
            async: !0,
            url: YX.Read.Config.socketPath,
            type: "GET",
            dataType: "jsonp",
            jsonp: "yxjsoncallback",
            data: {
                text: a
            },
            timeout: YX.Read.Timeout,
            error: function () {
                YX.Read.OnError && "function" == typeof YX.Read.OnError && YX.Read.OnError.call({
                    text: a,
                    msg: "timeout"
                })
            },
            success: function (g) {
                g && g.success && "" != g.msg ? (e = g.msg,
                    e = e.split("$")[0],
                    e = e.split("\\").pop(),
                    e = YX.Read.Config.voicesPath + e) : e = YX.Read.Config.HttpPath(YX.Read.Config.errorPath);
                YX.Read.Sound.PlaySound(a, e, !0, !1, d, f)
            }
        })
    }
};
YX.Read.Sound = {
    soundQueue: [],
    TextToSpeechAndPlay: function (a, d, f, e) {
        YX.Read.Json.GetAllSoundPathAndPlay(a, d, f, e)
    },
    AddSound: function (a) {
        YX.Read.Sound.soundQueue = [];
        YX.Read.Sound.soundQueue.push(a)
    },
    PlaySound: function (a, d, f, e, g, b) {
        g && g.preload || YX.Read.Sound.StopAllSounds();
        YX.Read.Sound.PrefetchFlash(a, d, f, e, g, b)
    },
    GetSoundID: function (a) {
        return YX.Read.Utils.simpleHash(a)
    },
    PrefetchFlash: function (a, d, f, e, g, b) {
        if (window.SMIsLoaded) {
            var h = g && g.preload
                , k = g && g.which;
            b && "function" != typeof b && (b = function () { }
            );
            g && "function" != typeof g && (g = function () { }
            );
            var l = a + (new Date).getTime();
            l = YX.Read.Sound.GetSoundID(a);
            if (0 < YX.Read.Sound.soundQueue.length && YX.Read.Sound.soundQueue[0].options.preload && YX.Read.Sound.soundQueue[0].options.text == a)
                return YX.Read.Sound.soundQueue[0];
            k = (YX.Read.IsAudio ? YX.Read.Audio.createSound : soundManager.createSound)({
                id: l,
                url: d,
                autoLoad: e,
                stream: f,
                autoPlay: !1,
                text: a,
                preload: h,
                which: k,
                speed: YX.Read.Config.systemSpeed,
                volume: YX.Read.Config.systemVolume
            });
            h ? YX.Read.Sound.AddSound(k) : k && k.options.text == YX.Read.Json.checkText && (k.options.onplay = function () {
                YX.Read.Duration = this.duration;
                b && "function" == typeof b && b.call(this)
            }
                ,
                k.options.onfinish = function () {
                    g && "function" == typeof g && g.call(this);
                    this.destruct()
                }
                ,
                k.options.onfailture = function () {
                    YX.Read.OnError && "function" == typeof YX.Read.OnError && YX.Read.OnError.call({
                        text: a,
                        msg: "sound failture"
                    })
                }
                ,
                k.play());
            return k
        }
        setTimeout(function () {
            YX.Read.Sound.PrefetchFlash(a, d, f, e, g, b)
        }, 100)
    },
    PlayToolIsSelfSound: function (a, d, f, e) {
        "false" != YX.Read.Config.systemIsRead && (d && "function" == typeof d || (d = function () { }
        ),
            YX.Read.Sound.StopAllSounds(),
            YX.Read.Sound.TextToSpeechAndPlay(a, f, d, e))
    },
    StopAllSounds: function () {
        YX.Read.IsAudio ? YX.Read.Audio.stopAll() : soundManager.stopAll()
    },
    Init: function (a) {
        window.Audio ? (YX.Read.IsAudio = !0,
            YX.Read.Audio.Init(),
            window.SMIsLoaded = !0) : (a = a ? YX.Read.Config.HttpPath(YX.Read.Config.swfPath) : YX.Read.Config.pluginPath + YX.Read.Config.swfPath,
                soundManager.url = a,
                soundManager.debugMode = !1,
                soundManager.onerror = function (a) { }
                ,
                soundManager.onload = function () {
                    window.SMIsLoaded = !0
                }
                ,
                soundManager.onready(function () {
                    window.SMIsLoaded = !0
                }))
    }
};
if (typeof (YX) == "undefined")
    var YX = {};
YX.Assist = function (jQ, options) {
    if (options && Object.prototype.toString.call(options) != "[object Object]")
        throw "Not legally options!";
    this.$ = jQ;
    this.global = {};
    this.attr = {
        "domIndex": "accidx",
        "leafIndex": "leaidx",
        "eventName": "accevent"
    };
    this.module = {
        "util": null,
        "config": null,
        "text": null,
        "cookie": null,
        "voice": null,
        "node": null,
        "page": null,
        "face": null,
        "analysis": null,
        "accessbility": null,
        "keyboard": null,
        "mouse": null,
        "mobile": null,
        "region": null,
        "wza": null,
        "recognize": null,
        "template": null,
        "robot": null
    };
    this.plugin = {};
    this.register = function () {
        this.plugin["read"] = YX.Read;
        this.plugin["store"] = YX.store;
        for (var mn in this.module) {
            this.module[mn] = new this[mn](this)
        }
    }
        ;
    this.init = function (doc) {
        doc = doc ? doc : document;
        for (var mn in this.module) {
            this.module[mn].init(doc)
        }
    }
}
    ;
YX.Assist.prototype.util = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {};
    this.init = function (doc) { }
        ;
    this.ltrim = function (str) {
        return str ? str.replace(/^\s+/g, "") : ""
    }
        ;
    this.rtrim = function (str) {
        return str ? str.replace(/\s+$/g, "") : ""
    }
        ;
    this.trim = function (str) {
        return str ? str.replace(/(^\s+)|(\s+$)/g, "") : ""
    }
        ;
    this.getTime = function () {
        return new Date().valueOf()
    }
        ;
    this.isIE = function () {
        return (navigator.appName == "Microsoft Internet Explorer")
    }
        ;
    this.addListener = function (target, evt, func) {
        if (window.attachEvent)
            target.attachEvent('on' + evt, func);
        else if (window.addEventListener)
            target.addEventListener(evt, func, false)
    }
        ;
    this.getSelection = function (doc) {
        if (doc.getSelection) {
            return "" + doc.getSelection()
        } else if (doc.selection) {
            return "" + doc.selection.createRange().text
        } else if (window.getSelection) {
            return "" + window.getSelection()
        } else {
            return ""
        }
    }
        ;
    this.getCurrentTime = function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    }
        ;
    this.inArray = function (search, arr) {
        for (s = 0; s < arr.length; s++) {
            var item = arr[s].toString();
            if (item == search)
                return true
        }
        return false
    }
        ;
    this.countWords = function (str) {
        return (this.trim(str).split(/\s+/).length)
    }
        ;
    this.makeupPhrase = function (strStr, splitDot, phraseMaxLength) {
        if (!strStr)
            return [];
        var phrases = [];
        var tempI = 0;
        var startS = 0;
        var endS = 0;
        var tempString = "";
        var dots = splitDot;
        var maxLen = phraseMaxLength;
        for (var i = 0, l = strStr.length; i < l; i++) {
            for (var j = 0, k = dots.length; j < k; j++) {
                if (strStr.charAt(i) == dots[j]) {
                    endS = i;
                    tempString = strStr.slice(startS, endS);
                    if (tempString.length >= maxLen) {
                        while (tempString.length >= maxLen) {
                            phrases[tempI] = tempString.slice(0, maxLen);
                            tempI += 1;
                            tempString = tempString.slice(maxLen)
                        }
                        if (tempString != "") {
                            phrases[tempI] = tempString;
                            tempI += 1
                        }
                    } else {
                        phrases[tempI] = strStr.slice(startS, endS);
                        tempI += 1
                    }
                    startS = endS + 1;
                    phrases[tempI] = strStr.charAt(i);
                    tempI += 1;
                    break
                }
            }
        }
        if (startS < strStr.length) {
            phrases[tempI] = strStr.slice(startS)
        }
        var resultArr = [];
        for (var i = 0; i < phrases.length; i++) {
            if (phrases[i])
                resultArr.push(phrases[i])
        }
        return resultArr
    }
        ;
    this.getIframeBodyWidthHeight = function (iframename) {
        var width = 0;
        var height = 0;
        if ($.browser.msie) {
            width = window.frames[iframename].document.compatMode == "CSS1Compat" ? window.frames[iframename].document.documentElement.clientWidth : window.frames[iframename].document.body.clientWidth;
            height = window.frames[iframename].document.compatMode == "CSS1Compat" ? window.frames[iframename].document.documentElement.clientHeight : window.frames[iframename].document.body.clientHeight
        } else {
            width = window.frames[iframename].self.innerWidth;
            height = window.frames[iframename].self.innerHeight
        }
        return {
            'width': width,
            'height': height
        }
    }
        ;
    this.stopPop = function (event) {
        var event = event ? event : window.event;
        event.stopPropagation()
    }
        ;
    this.getBrowser = function () {
        var OsObject = "";
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            return "IE"
        }
        if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
            return "FF"
        }
        if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
            return "SF"
        }
        if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
            return "CN"
        }
        if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
            return "GK"
        }
    }
        ;
    this.toPinyin = function (str) {
        if (str == "")
            return "";
        str = this.deleteSpace(str);
        var charCount = 22;
        var resultStr = ""
            , resultStrPinyin = ""
            , endResult = ""
            , charTmp = "";
        var trCount = parseInt(str.length / charCount);
        trCount = (str.length % charCount == 0 ? trCount - 1 : trCount);
        for (var j = 0; j <= trCount; j++) {
            for (var i = charCount * j; i < charCount * (j + 1); i++) {
                charTmp = str.charAt(i);
                resultStr += "<td align=center style='color:#000;font-size:30px !important;'>" + charTmp + "</td>";
                resultStrPinyin += "<td align=center style='color:#000;font-size:22px !important;'>" + this.charToPinyin(charTmp) + "</td>"
            }
            endResult += "<tr>" + resultStrPinyin + "<td>&nbsp;</td></tr><tr>" + resultStr + "<td>&nbsp;</td></tr>";
            resultStr = "";
            resultStrPinyin = ""
        }
        endResult = "<table border =0 align='center' valign='middle' cellspacing=0 cellpadding=0>" + endResult + "</table>";
        return endResult
    }
        ;
    this.charToPinyin = function (char_temp) {
        if (char_temp == '')
            return '';
        if (assist.module.text.pinyin[char_temp] == undefined)
            return "";
        return "&nbsp;" + assist.module.text.pinyin[char_temp] + "&nbsp;"
    }
        ;
    this.deleteSpace = function (str) {
        if (str == "")
            return "";
        str = str.split("&nbsp;").join(" ");
        str = str.replace(/&[a-z]{2,4};/ig, "");
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            var charTmp = str.charAt(i);
            if (charTmp != " " && charTmp != "\r" && charTmp != "\n")
                newStr += charTmp
        }
        return newStr
    }
        ;
    this.countStringLength = function (str) {
        if (!str)
            return 0;
        str = str.toLowerCase();
        var count = 0;
        var reg = new RegExp("[\\u4E00-\\u9FFF]");
        for (var i = 0; i < str.length; i++) {
            count += (reg.test(str.charAt(i)) ? 2 : 1)
        }
        return count
    }
        ;
    this.countZh = function (text) {
        if (!text)
            return 0;
        return text.length - text.replace(/[\u4E00-\u9FFF]/g, "").length
    }
        ;
    this.removeSpecialCharacters = function (str) {
        var i = 0;
        var chr = "";
        var newStr = "";
        if (!str)
            return "";
        str = this.trim(str);
        str = str.split("&nbsp;").join("");
        if (str.length < 3)
            str = str.replace(/[~!@#\$\%\^&\*\(\)\-\_\+\=\[\]\{\}\<\>\.]/ig, "");
        for (i = 0; i < str.length; i++) {
            chr = str.charAt(i);
            if (chr == "	" || chr == "　" || (chr == " " && i < str.length - 1 && str.charAt(i + 1) == " ") || chr == '\r' || chr == '\n' || chr == "$" || chr == "#" || chr == "|" || chr == "\\" || chr == "&") {
                chr = ""
            } else {
                newStr += chr
            }
        }
        return newStr
    }
        ;
    this.urlEncode = function (str) {
        return str ? escape(str) : ""
    }
        ;
    this.urlDecode = function (str) {
        return str ? unescape(str) : ""
    }
        ;
    this.getNoProxyUrl = function (iurl) {
        if (iurl && iurl.indexOf(assist.module.config.proxyfix) != -1) {
            iurl = iurl.split(assist.module.config.proxyfix)[1];
            iurl = iurl.split("&")[0];
            iurl = this.urlDecode(iurl);
            iurl = assist.module.node.getAbsoluteFilePath(iurl)
        }
        return iurl
    }
        ;
    this.fitCss3 = function () {
        return ("transition" in document.body.style || "-webkit-transition" in document.body.style || "-moz-transition" in document.body.style || "-ms-transition" in document.body.style) ? true : false
    }
        ;
    this.big5 = function (text) {
        var str = '';
        for (var i = 0; i < text.length; i++) {
            var ch = text.charAt(i);
            var tw = assist.module.text.big5[ch];
            str += tw ? tw : ch
        }
        return str
    }
}
    ;
YX.Assist.prototype.config = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.proxyfix = "&q_url=";
    this.proxyUrl = "";
    this.dataUrl = "";
    this.scriptPath = "";
    this.scriptUrl = "";
    this.host = "";
    this.url = "";
    this.wid = "";
    this.state = {};
    this.init = function (doc) {
        if (doc != document)
            return;
        var src = document.scripts[document.scripts.length - 1].src;
        for (var i = 0; i < document.scripts.length; i++) {
            if (document.scripts[i].id && document.scripts[i].id == "cniil_assist") {
                src = document.scripts[i].src;
                break
            }
        }
        if (window.setupWzaPath)
            src = window.setupWzaPath;
        if (!src) {
            for (var i = 0; i < document.scripts.length; i++) {
                if (document.scripts[i].src && document.scripts[i].src.indexOf("/assist") != -1) {
                    src = document.scripts[i].src;
                    break
                }
            }
        }
        if (src.indexOf("://") == -1) {
            var n = document.createElement("a");
            n.href = src;
            src = n.href;
            n = null
        }
        this.scriptUrl = src;
        var srcArr = src.split('/');
        srcArr.pop();
        this.scriptPath = srcArr.join('/') + "/";
        var urlArr = location.href.split(this.proxyfix);
        this.proxyUrl = typeof (yx_conf) == "object" && yx_conf.siteurl && urlArr.length > 1 ? urlArr[0] + this.proxyfix : "";
        this.url = typeof (yx_conf) == "object" && yx_conf.siteurl ? yx_conf.siteurl : location.href;
        var hosts = src.split('/');
        this.host = hosts[0] + "//" + hosts[2] + "/";
        this.dataUrl = typeof (window.yx_ini) == "object" && window.yx_ini.dataUrl ? window.yx_ini.dataUrl : this.host + "yxsm/?m=api&a=wcag&sid=";
        var widMatch = /[\?&]wzaid\s*=\s*(\d{1,})/.exec(this.scriptUrl);
        if (!widMatch)
            widMatch = /[\?&]wzaid\s*=\s*(\d{1,})/.exec(location.href);
        if (widMatch)
            this.wid = widMatch[1]
    }
        ;
    this.getUrl = function (file) {
        if (!file)
            return this.scriptPath;
        if (file.indexOf("://") != -1)
            return file;
        return this.scriptPath + file
    }
        ;
    this.proxifyUrl = function (url, append) {
        append = append ? append : "";
        if (url && this.proxyUrl && this.proxyfix && url.indexOf(this.host) != 0 && url.indexOf(this.proxyfix) == -1)
            url = this.proxyUrl + assist.module.util.urlEncode(url) + append;
        return url
    }
}
    ;
YX.Assist.prototype.text = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {};
    this.init = function (doc) { }
        ;
    this.get = function (label, obj) {
        if (obj && typeof (obj) == "object") {
            if (!texts[label])
                return "";
            var text = texts[label];
            for (var key in obj) {
                var reg = new RegExp("\{" + key + "\}", "ig");
                text = text.replace(reg, obj[key])
            }
            return text
        }
        return texts[label] ? texts[label] : ""
    }
        ;
    this.set = function (label, val) {
        texts[label] = val
    }
        ;
    var texts = {
        "firstVisit": "\u6b22\u8fce\u8bbf\u95ee{title}{pagetype}\u9875\u9762",
        "againVisit": "\u5df2\u6253\u5f00{title}{pagetype}\u9875\u9762",
        "noRegion": "\u672c\u9875\u9762\u6682\u65e0\u667a\u80fd\u5bfc\u76f2\uff0c\u6309\u4e0b\u5236\u8868\u952eTab\u952e\u6d4f\u89c8\u4fe1\u606f",
        "countRegion": "{len}\u4e2a{name}\u3001",
        "imginfo": "{imgcount}\u5f20\u56fe\u7247",
        "notAccess": "\u64cd\u4f5c\u65e0\u6548\uff0c\u672c\u9875\u9762\u6ca1\u6709\u8be5\u7c7b\u522b\u7684\u533a\u57df",
        "pageForm": "\u672c\u9875\u9762\u662f\u7531{regioninfo}\u5171\u8ba1{count}\u4e2a\u533a\u57df\u7ec4\u6210{pressinfo}\uff0c\u64cd\u4f5c\u5e2e\u52a9\u8bf7\u6309Alt\u52a0\u95ee\u53f7\u952e\u3002",
        "areaHelp": "\u6309\u952e\u8bf4\u660e\uff1aAlt\u52a00\u952e\u64ad\u653e\u9875\u9762\u7ed3\u6784\u7ec4\u6210\uff0cAlt\u52a0\u4e0b\u952e\u5411\u4e0b\u5207\u6362\u533a\u57df\uff0cAlt\u52a0\u4e0a\u952e\u5411\u4e0a\u5207\u6362\u533a\u57df\uff0cAlt\u52a01\u952e\u5207\u6362\u5bfc\u822a\u533a\uff0cAlt\u52a02\u952e\u5207\u6362\u89c6\u7a97\u533a\uff0cAlt\u52a04\u952e\u5207\u6362\u4ea4\u4e92\u533a\uff0cAlt\u52a05\u952e\u5b9a\u4f4d\u5217\u8868\u533a\uff0cAlt\u52a06\u952e\u5b9a\u4f4d\u6b63\u6587\u533a\uff0cAlt\u52a07\u952e\u5207\u6362\u670d\u52a1\u533a\uff0c\u5236\u8868\u952e(Tab)\u6d4f\u89c8\u4fe1\u606f\uff0cCtrl\u52a0Shift\u52a0C\u952e\u6e05\u9664\u7f51\u9875\u4e2d\u58f0\u97f3\uff0c\u83b7\u53d6\u6574\u4f53\u5e2e\u52a9\u8bf7\u6309Shift\u52a0\u95ee\u53f7\u952e",
        "exitBlind": "\u5f53\u524d\u7248\u672c\u4e0d\u53ef\u4ee5\u7528\u9f20\u6807\u64cd\u4f5c\u7f51\u9875\u3002\u5982\u9700\u9000\u51fa\uff0c\u8bf7\u5355\u51fb\u53f3\u4e0a\u89d2\u7684\u9000\u51fa\u6309\u94ae",
        "listForm": "\u672c\u533a\u57df\u542b\u6709{linkcount}\u4e2a\u94fe\u63a5{imginfo}\uff0c\u6309\u4e0bTab\u952e\u6d4f\u89c8\u4fe1\u606f",
        "listaForm": "\u672c\u533a\u57df\u542b\u6709{sencount}\u53e5\u5185\u5bb9{imginfo}\uff0c\u6309\u4e0bTab\u952e\u6d4f\u89c8\u4fe1\u606f",
        "mutualForm": "\u672c\u533a\u57df\u542b\u6709{regioninfo}\uff0c\u6309\u4e0bTab\u952e\u6d4f\u89c8\u4fe1\u606f",
        "contentForm": "\u672c\u6587\u4e2d\u5171\u542b\u6709{imginfo}{p}\u4e2a\u6bb5\u843d\uff0c{w}\u4e2a\u6c49\u5b57\uff0c\u6717\u8bfb\u5927\u7ea6\u9700\u8981{minute}\u5206\u949f,\u6309\u4e0bTab\u952e\u5f00\u59cb\u6717\u8bfb",
        "regionStart": "\u63d0\u793a:\u60a8\u5df2\u8fdb\u5165{title}",
        "regionEnd": "\u63d0\u793a:\u60a8\u5df2\u79bb\u5f00{title}",
        "page1": "\u7efc\u5408",
        "page2": "\u5217\u8868",
        "page3": "\u6b63\u6587",
        "press1": "",
        "press2": "\uff0c\u5b9a\u4f4d\u5230\u5217\u8868\u533a\u8bf7\u6309Alt\u52a05\u952e",
        "press3": "\uff0c\u5b9a\u4f4d\u5230\u6b63\u6587\u533a\u8bf7\u6309Alt\u52a06\u952e",
        "content": "\u6b63\u6587\u533a",
        "list": "\u5217\u8868\u533a",
        "slist": "\u89c6\u7a97\u533a",
        "mutual": "\u4ea4\u4e92\u533a",
        "dir": "\u5bfc\u822a\u533a",
        "site": "\u670d\u52a1\u533a",
        "regionName": "\u533a\u57df",
        "help": "\u5e2e\u52a9",
        "blindWay": "\u8bf4\u660e",
        "exit": "\u9000\u51fa\u7cfb\u7edf",
        "a": "\u94fe\u63a5",
        "link": "\u94fe\u63a5",
        "currentValue": "\u5f53\u524d\u5185\u5bb9\u4e3a",
        "currentItem": "\u5f53\u524d\u9009\u4e2d\u9879\u4e3a",
        "current": "\u5f53\u524d",
        "emptyContent": "\u7a7a",
        "file": "\u6587\u4ef6\u4e0a\u4f20\u9009\u62e9\u6309\u94ae",
        "password": "\u5bc6\u7801\u8f93\u5165\u6846",
        "reset": "\u91cd\u65b0\u8bbe\u7f6e\u6309\u94ae",
        "object": "\u5a92\u4f53",
        "embed": "\u5a92\u4f53",
        "abbr": "\u9996\u5b57\u6bcd\u7f29\u5199",
        "acronym": "\u9996\u5b57\u6bcd\u7f29\u5199",
        "area": "\u70ed\u70b9\u94fe\u63a5",
        "imageButton": "\u56fe\u7247\u6309\u94ae",
        "button": "\u6309\u94ae",
        "submit": "\u63d0\u4ea4\u6309\u94ae",
        "h1": "\u6807\u9898",
        "h2": "\u6807\u9898",
        "h3": "",
        "h4": "",
        "h5": "",
        "h6": "",
        "hr": "\u6a2a\u7ebf",
        "img": "\u56fe\u7247",
        "label": "\u6807\u7b7e",
        "li": "\u5217\u8868\u9879\u76ee",
        "marquee": "\u6eda\u52a8\u6587\u672c",
        "ol": "\u6709\u5e8f\u5217\u8868",
        "option": "\u5217\u8868\u6846\u9009\u9879",
        "p": "\u6bb5\u843d",
        "select": "\u5217\u8868\u6846",
        "strong": "\u7c97\u4f53",
        "table": "\u8868\u683c",
        "tbody": "\u8868\u683c\u4e3b\u4f53",
        "td": "\u5355\u5143\u683c",
        "radio": "\u5355\u9009\u6309\u94ae",
        "checkbox": "\u590d\u9009\u6309\u94ae",
        "checked": "\u5df2\u9009\u4e2d",
        "unchecked": "\u672a\u9009\u4e2d",
        "text": "\u6587\u672c\u8f93\u5165\u6846",
        "textarea": "\u591a\u6587\u672c\u8f93\u5165\u6846\u5185\u5bb9\u4e3a:",
        "tfoot": "\u8868\u5c3e",
        "ul": "\u65e0\u5e8f\u5217\u8868"
    };
    this.pinyin = {
        "\u5729": "w\u00e9i",
        "1": "y\u012b",
        "2": "\u00e8r",
        "3": "s\u0101n",
        "4": "s\u00ec",
        "5": "w\u01d4",
        "6": "li\u00f9",
        "7": "q\u012b",
        "8": "b\u0101",
        "9": "ji\u01d4",
        "0": "l\u00edng",
        "\u554a": "\u0101",
        "\u963f": "\u0101",
        "\u57c3": "\u0101i",
        "\u6328": "\u0101i",
        "\u54ce": "\u0101i",
        "\u5509": "\u0101i",
        "\u54c0": "\u0101i",
        "\u7691": "\u00e1i",
        "\u764c": "\u00e1i",
        "\u853c": "\u01cei",
        "\u77ee": "\u01cei",
        "\u827e": "\u00e0i",
        "\u788d": "\u00e0i",
        "\u7231": "\u00e0i",
        "\u9698": "\u00e0i",
        "\u978d": "\u0101n",
        "\u6c28": "\u0101n",
        "\u5b89": "\u0101n",
        "\u4ffa": "\u01cen",
        "\u6309": "\u00e0n",
        "\u6697": "\u00e0n",
        "\u5cb8": "\u00e0n",
        "\u80fa": "\u00e0n",
        "\u6848": "\u00e0n",
        "\u80ae": "\u0101ng",
        "\u6602": "\u00e1ng",
        "\u76ce": "\u00e0ng",
        "\u51f9": "\u0101o",
        "\u6556": "\u00e1o",
        "\u71ac": "\u00e1o",
        "\u7ff1": "\u00e1o",
        "\u8884": "\u01ceo",
        "\u50b2": "\u00e0o",
        "\u5965": "\u00e0o",
        "\u61ca": "\u00e0o",
        "\u6fb3": "\u00e0o",
        "\u82ad": "b\u0101",
        "\u634c": "b\u0101",
        "\u6252": "b\u0101",
        "\u53ed": "b\u0101",
        "\u5427": "b\u0101",
        "\u7b06": "b\u0101",
        "\u516b": "b\u0101",
        "\u75a4": "b\u0101",
        "\u5df4": "b\u0101",
        "\u62d4": "b\u00e1",
        "\u8dcb": "b\u00e1",
        "\u9776": "b\u01ce",
        "\u628a": "b\u01ce",
        "\u8019": "p\u00e1",
        "\u575d": "b\u00e0",
        "\u9738": "b\u00e0",
        "\u7f62": "b\u00e0",
        "\u7238": "b\u00e0",
        "\u767d": "b\u00e1i",
        "\u67cf": "b\u01cei",
        "\u767e": "b\u01cei",
        "\u6446": "b\u01cei",
        "\u4f70": "b\u01cei",
        "\u8d25": "b\u00e0i",
        "\u62dc": "b\u00e0i",
        "\u7a17": "b\u00e0i",
        "\u6591": "b\u0101n",
        "\u73ed": "b\u0101n",
        "\u642c": "b\u0101n",
        "\u6273": "b\u0101n",
        "\u822c": "b\u0101n",
        "\u9881": "b\u0101n",
        "\u677f": "b\u01cen",
        "\u7248": "b\u01cen",
        "\u626e": "b\u00e0n",
        "\u62cc": "b\u00e0n",
        "\u4f34": "b\u00e0n",
        "\u74e3": "b\u00e0n",
        "\u534a": "b\u00e0n",
        "\u529e": "b\u00e0n",
        "\u7eca": "b\u00e0n",
        "\u90a6": "b\u0101ng",
        "\u5e2e": "b\u0101ng",
        "\u6886": "b\u0101ng",
        "\u699c": "b\u01ceng",
        "\u8180": "b\u01ceng",
        "\u7ed1": "b\u01ceng",
        "\u68d2": "b\u00e0ng",
        "\u78c5": "p\u00e1ng",
        "\u868c": "b\u00e0ng",
        "\u9551": "b\u00e0ng",
        "\u508d": "b\u00e0ng",
        "\u8c24": "b\u00e0ng",
        "\u82de": "b\u0101o",
        "\u80de": "b\u0101o",
        "\u5305": "b\u0101o",
        "\u8912": "b\u0101o",
        "\u5265": "b\u0101o",
        "\u8584": "b\u00e1o",
        "\u96f9": "b\u00e1o",
        "\u4fdd": "b\u01ceo",
        "\u5821": "b\u01ceo",
        "\u9971": "b\u01ceo",
        "\u5b9d": "b\u01ceo",
        "\u62b1": "b\u00e0o",
        "\u62a5": "b\u00e0o",
        "\u66b4": "b\u00e0o",
        "\u8c79": "b\u00e0o",
        "\u9c8d": "b\u00e0o",
        "\u7206": "b\u00e0o",
        "\u676f": "b\u0113i",
        "\u7891": "b\u0113i",
        "\u60b2": "b\u0113i",
        "\u5351": "b\u0113i",
        "\u5317": "b\u011bi",
        "\u8f88": "b\u00e8i",
        "\u80cc": "b\u00e8i",
        "\u8d1d": "b\u00e8i",
        "\u94a1": "b\u00e8i",
        "\u500d": "b\u00e8i",
        "\u72c8": "b\u00e8i",
        "\u5907": "b\u00e8i",
        "\u60eb": "b\u00e8i",
        "\u7119": "b\u00e8i",
        "\u88ab": "b\u00e8i",
        "\u5954": "b\u0113n",
        "\u82ef": "b\u011bn",
        "\u672c": "b\u011bn",
        "\u7b28": "b\u00e8n",
        "\u5d29": "b\u0113ng",
        "\u7ef7": "b\u0113ng",
        "\u752d": "b\u00e9ng",
        "\u6cf5": "b\u00e8ng",
        "\u8e66": "b\u00e8ng",
        "\u8ff8": "b\u00e8ng",
        "\u903c": "b\u012b",
        "\u9f3b": "b\u00ed",
        "\u6bd4": "b\u01d0",
        "\u9119": "b\u01d0",
        "\u7b14": "b\u01d0",
        "\u5f7c": "b\u01d0",
        "\u78a7": "b\u00ec",
        "\u84d6": "b\u00ec",
        "\u853d": "b\u00ec",
        "\u6bd5": "b\u00ec",
        "\u6bd9": "b\u00ec",
        "\u6bd6": "b\u00ec",
        "\u5e01": "b\u00ec",
        "\u5e87": "b\u00ec",
        "\u75f9": "b\u00ec",
        "\u95ed": "b\u00ec",
        "\u655d": "b\u00ec",
        "\u5f0a": "b\u00ec",
        "\u5fc5": "b\u00ec",
        "\u8f9f": "p\u00ec",
        "\u58c1": "b\u00ec",
        "\u81c2": "b\u00ec",
        "\u907f": "b\u00ec",
        "\u965b": "b\u00ec",
        "\u97ad": "bi\u0101n",
        "\u8fb9": "bi\u0101n",
        "\u7f16": "bi\u0101n",
        "\u8d2c": "bi\u01cen",
        "\u6241": "bi\u01cen",
        "\u4fbf": "bi\u00e0n",
        "\u53d8": "bi\u00e0n",
        "\u535e": "bi\u00e0n",
        "\u8fa8": "bi\u00e0n",
        "\u8fa9": "bi\u00e0n",
        "\u8fab": "bi\u00e0n",
        "\u904d": "bi\u00e0n",
        "\u6807": "bi\u0101o",
        "\u5f6a": "bi\u0101o",
        "\u8198": "bi\u0101o",
        "\u8868": "bi\u01ceo",
        "\u9cd6": "bi\u0113",
        "\u618b": "bi\u0113",
        "\u522b": "bi\u00e9",
        "\u762a": "bi\u011b",
        "\u5f6c": "b\u012bn",
        "\u658c": "b\u012bn",
        "\u6fd2": "b\u012bn",
        "\u6ee8": "b\u012bn",
        "\u5bbe": "b\u012bn",
        "\u6448": "b\u00ecn",
        "\u5175": "b\u012bng",
        "\u51b0": "b\u012bng",
        "\u67c4": "b\u01d0ng",
        "\u4e19": "b\u01d0ng",
        "\u79c9": "b\u01d0ng",
        "\u997c": "b\u01d0ng",
        "\u70b3": "b\u01d0ng",
        "\u75c5": "b\u00ecng",
        "\u5e76": "b\u00ecng",
        "\u73bb": "b\u014d",
        "\u83e0": "b\u014d",
        "\u64ad": "b\u014d",
        "\u62e8": "b\u014d",
        "\u94b5": "b\u014d",
        "\u6ce2": "b\u014d",
        "\u535a": "b\u00f3",
        "\u52c3": "b\u00f3",
        "\u640f": "b\u00f3",
        "\u94c2": "b\u00f3",
        "\u7b94": "b\u00f3",
        "\u4f2f": "b\u00f3",
        "\u5e1b": "b\u00f3",
        "\u8236": "b\u00f3",
        "\u8116": "b\u00f3",
        "\u818a": "b\u00f3",
        "\u6e24": "b\u00f3",
        "\u6cca": "b\u00f3",
        "\u9a73": "b\u00f3",
        "\u6355": "b\u01d4",
        "\u535c": "bo",
        "\u54fa": "b\u01d4",
        "\u8865": "b\u01d4",
        "\u57e0": "b\u00f9",
        "\u4e0d": "b\u00f9",
        "\u5e03": "b\u00f9",
        "\u6b65": "b\u00f9",
        "\u7c3f": "b\u00f9",
        "\u90e8": "b\u00f9",
        "\u6016": "b\u00f9",
        "\u64e6": "c\u0101",
        "\u731c": "c\u0101i",
        "\u88c1": "c\u00e1i",
        "\u6750": "c\u00e1i",
        "\u624d": "c\u00e1i",
        "\u8d22": "c\u00e1i",
        "\u776c": "c\u01cei",
        "\u8e29": "c\u01cei",
        "\u91c7": "c\u01cei",
        "\u5f69": "c\u01cei",
        "\u83dc": "c\u00e0i",
        "\u8521": "c\u00e0i",
        "\u9910": "c\u0101n",
        "\u53c2": "c\u0101n",
        "\u8695": "c\u00e1n",
        "\u6b8b": "c\u00e1n",
        "\u60ed": "c\u00e1n",
        "\u60e8": "c\u01cen",
        "\u707f": "c\u00e0n",
        "\u82cd": "c\u0101ng",
        "\u8231": "c\u0101ng",
        "\u4ed3": "c\u0101ng",
        "\u6ca7": "c\u0101ng",
        "\u85cf": "c\u00e1ng",
        "\u64cd": "c\u0101o",
        "\u7cd9": "c\u0101o",
        "\u69fd": "c\u00e1o",
        "\u66f9": "c\u00e1o",
        "\u8349": "c\u01ceo",
        "\u5395": "c\u00e8",
        "\u7b56": "c\u00e8",
        "\u4fa7": "c\u00e8",
        "\u518c": "c\u00e8",
        "\u6d4b": "c\u00e8",
        "\u5c42": "c\u00e9ng",
        "\u8e6d": "c\u00e8ng",
        "\u63d2": "ch\u0101",
        "\u53c9": "ch\u0101",
        "\u832c": "ch\u00e1",
        "\u8336": "ch\u00e1",
        "\u67e5": "ch\u00e1",
        "\u78b4": "ch\u00e1",
        "\u643d": "ch\u00e1",
        "\u5bdf": "ch\u00e1",
        "\u5c94": "ch\u00e0",
        "\u5dee": "ch\u00e0",
        "\u8be7": "ch\u00e0",
        "\u62c6": "ch\u0101i",
        "\u67f4": "ch\u00e1i",
        "\u8c7a": "ch\u00e1i",
        "\u6400": "ch\u0101n",
        "\u63ba": "ch\u0101n",
        "\u8749": "ch\u00e1n",
        "\u998b": "ch\u00e1n",
        "\u8c17": "ch\u00e1n",
        "\u7f20": "ch\u00e1n",
        "\u94f2": "ch\u01cen",
        "\u4ea7": "ch\u01cen",
        "\u9610": "ch\u01cen",
        "\u98a4": "ch\u00e0n",
        "\u660c": "ch\u0101ng",
        "\u7316": "ch\u0101ng",
        "\u573a": "ch\u01ceng",
        "\u5c1d": "ch\u00e1ng",
        "\u5e38": "ch\u00e1ng",
        "\u957f": "ch\u00e1ng",
        "\u507f": "ch\u00e1ng",
        "\u80a0": "ch\u00e1ng",
        "\u5382": "ch\u01ceng",
        "\u655e": "ch\u01ceng",
        "\u7545": "ch\u00e0ng",
        "\u5531": "ch\u00e0ng",
        "\u5021": "ch\u00e0ng",
        "\u8d85": "ch\u0101o",
        "\u6284": "ch\u0101o",
        "\u949e": "ch\u0101o",
        "\u671d": "ch\u00e1o",
        "\u5632": "ch\u00e1o",
        "\u6f6e": "ch\u00e1o",
        "\u5de2": "ch\u00e1o",
        "\u5435": "ch\u01ceo",
        "\u7092": "ch\u01ceo",
        "\u8f66": "ch\u0113",
        "\u626f": "ch\u011b",
        "\u64a4": "ch\u00e8",
        "\u63a3": "ch\u00e8",
        "\u5f7b": "ch\u00e8",
        "\u6f88": "ch\u00e8",
        "\u90f4": "ch\u0113n",
        "\u81e3": "ch\u00e9n",
        "\u8fb0": "ch\u00e9n",
        "\u5c18": "ch\u00e9n",
        "\u6668": "ch\u00e9n",
        "\u5ff1": "ch\u00e9n",
        "\u6c89": "ch\u00e9n",
        "\u9648": "ch\u00e9n",
        "\u8d81": "ch\u00e8n",
        "\u886c": "ch\u00e8n",
        "\u6491": "ch\u0113ng",
        "\u79f0": "ch\u0113ng",
        "\u57ce": "ch\u00e9ng",
        "\u6a59": "ch\u00e9ng",
        "\u6210": "ch\u00e9ng",
        "\u5448": "ch\u00e9ng",
        "\u4e58": "ch\u00e9ng",
        "\u7a0b": "ch\u00e9ng",
        "\u60e9": "ch\u00e9ng",
        "\u6f84": "ch\u00e9ng",
        "\u8bda": "ch\u00e9ng",
        "\u627f": "ch\u00e9ng",
        "\u901e": "ch\u011bng",
        "\u9a8b": "ch\u011bng",
        "\u79e4": "ch\u00e8ng",
        "\u5403": "ch\u012b",
        "\u75f4": "ch\u012b",
        "\u6301": "ch\u00ed",
        "\u5319": "ch\u00ed",
        "\u6c60": "shi",
        "\u8fdf": "ch\u00ed",
        "\u5f1b": "ch\u00ed",
        "\u9a70": "ch\u00ed",
        "\u803b": "ch\u01d0",
        "\u9f7f": "ch\u01d0",
        "\u4f88": "ch\u01d0",
        "\u5c3a": "ch\u01d0",
        "\u8d64": "ch\u00ec",
        "\u7fc5": "ch\u00ec",
        "\u65a5": "ch\u00ec",
        "\u70bd": "ch\u00ec",
        "\u5145": "ch\u014dng",
        "\u51b2": "ch\u014dng",
        "\u866b": "ch\u00f3ng",
        "\u5d07": "ch\u00f3ng",
        "\u5ba0": "ch\u01d2ng",
        "\u62bd": "ch\u014du",
        "\u916c": "ch\u00f3u",
        "\u7574": "ch\u00f3u",
        "\u8e0c": "ch\u00f3u",
        "\u7a20": "ch\u00f3u",
        "\u6101": "ch\u00f3u",
        "\u7b79": "ch\u00f3u",
        "\u4ec7": "ch\u00f3u",
        "\u7ef8": "ch\u00f3u",
        "\u7785": "ch\u01d2u",
        "\u4e11": "ch\u01d2u",
        "\u81ed": "ch\u00f2u",
        "\u521d": "ch\u016b",
        "\u51fa": "ch\u016b",
        "\u6a71": "ch\u00fa",
        "\u53a8": "ch\u00fa",
        "\u8e87": "ch\u00fa",
        "\u9504": "ch\u00fa",
        "\u96cf": "ch\u00fa",
        "\u6ec1": "ch\u00fa",
        "\u9664": "ch\u00fa",
        "\u695a": "ch\u01d4",
        "\u7840": "ch\u01d4",
        "\u50a8": "ch\u01d4",
        "\u77d7": "ch\u00f9",
        "\u6410": "ch\u00f9",
        "\u89e6": "ch\u00f9",
        "\u5904": "ch\u01d4",
        "\u63e3": "chu\u0101i",
        "\u5ddd": "chu\u0101n",
        "\u7a7f": "chu\u0101n",
        "\u693d": "chu\u00e1n",
        "\u4f20": "chu\u00e1n",
        "\u8239": "chu\u00e1n",
        "\u5598": "chu\u01cen",
        "\u4e32": "chu\u00e0n",
        "\u75ae": "chu\u0101ng",
        "\u7a97": "chu\u0101ng",
        "\u5e62": "zhu\u00e0ng",
        "\u5e8a": "chu\u00e1ng",
        "\u95ef": "chu\u01ceng",
        "\u521b": "chu\u00e0ng",
        "\u5439": "chu\u00ed",
        "\u708a": "chu\u012b",
        "\u6376": "chu\u012b",
        "\u9524": "chu\u00ed",
        "\u5782": "chu\u00ed",
        "\u6625": "ch\u016bn",
        "\u693f": "ch\u016bn",
        "\u9187": "ch\u00fan",
        "\u5507": "ch\u00fan",
        "\u6df3": "ch\u00fan",
        "\u7eaf": "ch\u00fan",
        "\u8822": "ch\u01d4n",
        "\u6233": "chu\u014d",
        "\u7ef0": "chu\u014d",
        "\u75b5": "c\u012b",
        "\u8328": "c\u00ed",
        "\u78c1": "c\u00ed",
        "\u96cc": "c\u00ed",
        "\u8f9e": "c\u00ed",
        "\u6148": "c\u00ed",
        "\u74f7": "c\u00ed",
        "\u8bcd": "c\u00ed",
        "\u6b64": "c\u01d0",
        "\u523a": "c\u00ec",
        "\u8d50": "c\u00ec",
        "\u6b21": "c\u00ec",
        "\u806a": "c\u014dng",
        "\u8471": "c\u014dng",
        "\u56f1": "c\u014dng",
        "\u5306": "c\u014dng",
        "\u4ece": "c\u00f3ng",
        "\u4e1b": "c\u00f3ng",
        "\u51d1": "c\u00f2u",
        "\u7c97": "c\u016b",
        "\u918b": "c\u00f9",
        "\u7c07": "c\u00f9",
        "\u4fc3": "c\u00f9",
        "\u8e7f": "cu\u0101n",
        "\u7be1": "cu\u00e0n",
        "\u7a9c": "cu\u00e0n",
        "\u6467": "cu\u012b",
        "\u5d14": "cu\u012b",
        "\u50ac": "cu\u012b",
        "\u8106": "cu\u00ec",
        "\u7601": "cu\u00ec",
        "\u7cb9": "cu\u00ec",
        "\u6dec": "cu\u00ec",
        "\u7fe0": "cu\u00ec",
        "\u6751": "c\u016bn",
        "\u5b58": "c\u00fan",
        "\u5bf8": "c\u00f9n",
        "\u78cb": "cu\u014d",
        "\u64ae": "cu\u014d",
        "\u6413": "cu\u014d",
        "\u63aa": "cu\u00f2",
        "\u632b": "cu\u00f2",
        "\u9519": "cu\u00f2",
        "\u642d": "d\u0101",
        "\u8fbe": "d\u00e1",
        "\u7b54": "d\u00e1",
        "\u7629": "d\u00e1",
        "\u6253": "d\u01ce",
        "\u5927": "d\u00e0",
        "\u5446": "d\u0101i",
        "\u6b79": "d\u01cei",
        "\u50a3": "d\u01cei",
        "\u6234": "d\u00e0i",
        "\u5e26": "d\u00e0i",
        "\u6b86": "d\u00e0i",
        "\u4ee3": "d\u00e0i",
        "\u8d37": "d\u00e0i",
        "\u888b": "d\u00e0i",
        "\u5f85": "d\u00e0i",
        "\u902e": "d\u01cei",
        "\u6020": "d\u00e0i",
        "\u803d": "d\u0101n",
        "\u62c5": "d\u0101n",
        "\u4e39": "d\u0101n",
        "\u5355": "d\u0101n",
        "\u90f8": "d\u0101n",
        "\u63b8": "d\u01cen",
        "\u80c6": "d\u01cen",
        "\u65e6": "d\u00e0n",
        "\u6c2e": "d\u00e0n",
        "\u4f46": "d\u00e0n",
        "\u60ee": "d\u00e0n",
        "\u6de1": "d\u00e0n",
        "\u8bde": "d\u00e0n",
        "\u5f39": "d\u00e0n",
        "\u86cb": "d\u00e0n",
        "\u5f53": "d\u0101ng",
        "\u6321": "d\u01ceng",
        "\u515a": "d\u01ceng",
        "\u8361": "d\u00e0ng",
        "\u6863": "d\u00e0ng",
        "\u5200": "d\u0101o",
        "\u6363": "d\u01ceo",
        "\u8e48": "d\u01ceo",
        "\u5012": "d\u01ceo",
        "\u5c9b": "d\u01ceo",
        "\u7977": "d\u01ceo",
        "\u5bfc": "d\u01ceo",
        "\u5230": "d\u00e0o",
        "\u7a3b": "d\u00e0o",
        "\u60bc": "d\u00e0o",
        "\u9053": "d\u00e0o",
        "\u76d7": "d\u00e0o",
        "\u5fb7": "d\u00e9",
        "\u5f97": "d\u00e9",
        "\u7684": "de",
        "\u8e6c": "d\u0113ng",
        "\u706f": "d\u0113ng",
        "\u767b": "d\u0113ng",
        "\u7b49": "d\u011bng",
        "\u77aa": "d\u00e8ng",
        "\u51f3": "d\u00e8ng",
        "\u9093": "d\u00e8ng",
        "\u5824": "d\u012b",
        "\u4f4e": "d\u012b",
        "\u6ef4": "d\u012b",
        "\u8fea": "d\u012b",
        "\u654c": "d\u00ed",
        "\u7b1b": "d\u00ed",
        "\u72c4": "d\u00ed",
        "\u6da4": "d\u00ed",
        "\u7fdf": "d\u00ed",
        "\u5ae1": "d\u00ed",
        "\u62b5": "d\u01d0",
        "\u5e95": "d\u01d0",
        "\u5730": "d\u00ec",
        "\u8482": "d\u00ec",
        "\u7b2c": "d\u00ec",
        "\u5e1d": "d\u00ec",
        "\u5f1f": "d\u00ec",
        "\u9012": "d\u00ec",
        "\u7f14": "d\u00ec",
        "\u98a0": "di\u0101n",
        "\u6382": "di\u0101n",
        "\u6ec7": "di\u0101n",
        "\u7898": "di\u01cen",
        "\u70b9": "di\u01cen",
        "\u5178": "di\u01cen",
        "\u975b": "di\u00e0n",
        "\u57ab": "di\u00e0n",
        "\u7535": "di\u00e0n",
        "\u4f43": "di\u00e0n",
        "\u7538": "di\u00e0n",
        "\u5e97": "di\u00e0n",
        "\u60e6": "di\u00e0n",
        "\u5960": "di\u00e0n",
        "\u6dc0": "di\u00e0n",
        "\u6bbf": "di\u00e0n",
        "\u7889": "di\u0101o",
        "\u53fc": "di\u0101o",
        "\u96d5": "di\u0101o",
        "\u51cb": "di\u0101o",
        "\u5201": "di\u0101o",
        "\u6389": "di\u00e0o",
        "\u540a": "di\u00e0o",
        "\u9493": "di\u00e0o",
        "\u8c03": "di\u00e0o",
        "\u8dcc": "di\u0113",
        "\u7239": "di\u0113",
        "\u789f": "di\u00e9",
        "\u8776": "di\u00e9",
        "\u8fed": "di\u00e9",
        "\u8c0d": "di\u00e9",
        "\u53e0": "di\u00e9",
        "\u4e01": "d\u012bng",
        "\u76ef": "d\u012bng",
        "\u53ee": "d\u012bng",
        "\u9489": "d\u00ecng",
        "\u9876": "d\u01d0ng",
        "\u9f0e": "d\u01d0ng",
        "\u952d": "d\u00ecng",
        "\u5b9a": "d\u00ecng",
        "\u8ba2": "d\u00ecng",
        "\u4e22": "diu1",
        "\u4e1c": "d\u014dng",
        "\u51ac": "d\u014dng",
        "\u8463": "d\u01d2ng",
        "\u61c2": "d\u01d2ng",
        "\u52a8": "d\u00f2ng",
        "\u680b": "d\u00f2ng",
        "\u4f97": "d\u00f2ng",
        "\u606b": "d\u00f2ng",
        "\u51bb": "d\u00f2ng",
        "\u6d1e": "d\u00f2ng",
        "\u515c": "d\u014du",
        "\u6296": "d\u01d2u",
        "\u6597": "d\u00f2u",
        "\u9661": "d\u01d2u",
        "\u8c46": "d\u00f2u",
        "\u9017": "d\u00f2u",
        "\u75d8": "d\u00f2u",
        "\u90fd": "d\u014du",
        "\u7763": "d\u016b",
        "\u6bd2": "d\u00fa",
        "\u728a": "d\u00fa",
        "\u72ec": "d\u00fa",
        "\u8bfb": "d\u00fa",
        "\u5835": "d\u01d4",
        "\u7779": "d\u01d4",
        "\u8d4c": "d\u01d4",
        "\u675c": "d\u00f9",
        "\u9540": "d\u00f9",
        "\u809a": "d\u00f9",
        "\u5ea6": "d\u00f9",
        "\u6e21": "d\u00f9",
        "\u5992": "d\u00f9",
        "\u7aef": "du\u0101n",
        "\u77ed": "du\u01cen",
        "\u953b": "du\u00e0n",
        "\u6bb5": "du\u00e0n",
        "\u65ad": "du\u00e0n",
        "\u7f0e": "du\u00e0n",
        "\u5806": "du\u012b",
        "\u5151": "du\u00ec",
        "\u961f": "du\u00ec",
        "\u5bf9": "du\u00ec",
        "\u58a9": "d\u016bn",
        "\u5428": "d\u016bn",
        "\u8e72": "d\u016bn",
        "\u6566": "d\u016bn",
        "\u987f": "d\u00f9n",
        "\u56e4": "d\u00f9n",
        "\u949d": "d\u00f9n",
        "\u76fe": "d\u00f9n",
        "\u9041": "d\u00f9n",
        "\u6387": "du\u014d",
        "\u54c6": "du\u014d",
        "\u591a": "du\u014d",
        "\u593a": "du\u00f3",
        "\u579b": "du\u01d2",
        "\u8eb2": "du\u01d2",
        "\u6735": "du\u01d2",
        "\u8dfa": "du\u00f2",
        "\u8235": "du\u00f2",
        "\u5241": "du\u00f2",
        "\u60f0": "du\u00f2",
        "\u5815": "du\u00f2",
        "\u86fe": "\u00e9",
        "\u5ce8": "\u00e9",
        "\u9e45": "\u00e9",
        "\u4fc4": "\u00e9",
        "\u989d": "\u00e9",
        "\u8bb9": "\u00e9",
        "\u5a25": "\u00e9",
        "\u6076": "\u00e8",
        "\u5384": "\u00e8",
        "\u627c": "\u00e8",
        "\u904f": "\u00e8",
        "\u9102": "\u00e8",
        "\u997f": "\u00e8",
        "\u6069": "\u0113n",
        "\u800c": "\u00e9r",
        "\u513f": "\u00e9r",
        "\u8033": "\u011br",
        "\u5c14": "\u011br",
        "\u9975": "\u011br",
        "\u6d31": "\u011br",
        "\u4e8c": "\u00e8r",
        "\u8d30": "\u00e8r",
        "\u53d1": "f\u0101",
        "\u7f5a": "f\u00e1",
        "\u7b4f": "f\u00e1",
        "\u4f10": "f\u00e1",
        "\u4e4f": "f\u00e1",
        "\u9600": "f\u00e1",
        "\u6cd5": "f\u01ce",
        "\u73d0": "f\u00e0",
        "\u85e9": "f\u0101n",
        "\u5e06": "f\u0101n",
        "\u756a": "f\u0101n",
        "\u7ffb": "f\u0101n",
        "\u6a0a": "f\u00e1n",
        "\u77fe": "f\u00e1n",
        "\u9492": "f\u00e1n",
        "\u7e41": "f\u00e1n",
        "\u51e1": "f\u00e1n",
        "\u70e6": "f\u00e1n",
        "\u53cd": "f\u01cen",
        "\u8fd4": "f\u01cen",
        "\u8303": "f\u00e0n",
        "\u8d29": "f\u00e0n",
        "\u72af": "f\u00e0n",
        "\u996d": "f\u00e0n",
        "\u6cdb": "f\u00e0n",
        "\u574a": "f\u0101ng",
        "\u82b3": "f\u0101ng",
        "\u65b9": "f\u0101ng",
        "\u80aa": "f\u00e1ng",
        "\u623f": "f\u00e1ng",
        "\u9632": "f\u00e1ng",
        "\u59a8": "f\u00e1ng",
        "\u4eff": "f\u01ceng",
        "\u8bbf": "f\u01ceng",
        "\u7eba": "f\u01ceng",
        "\u653e": "f\u00e0ng",
        "\u83f2": "f\u0113i",
        "\u975e": "f\u0113i",
        "\u5561": "f\u0113i",
        "\u98de": "f\u0113i",
        "\u80a5": "f\u00e9i",
        "\u532a": "f\u011bi",
        "\u8bfd": "f\u011bi",
        "\u5420": "f\u00e8i",
        "\u80ba": "f\u00e8i",
        "\u5e9f": "f\u00e8i",
        "\u6cb8": "f\u00e8i",
        "\u8d39": "f\u00e8i",
        "\u82ac": "f\u0113n",
        "\u915a": "f\u0113n",
        "\u5429": "f\u0113n",
        "\u6c1b": "f\u0113n",
        "\u5206": "f\u0113n",
        "\u7eb7": "f\u0113n",
        "\u575f": "f\u00e9n",
        "\u711a": "f\u00e9n",
        "\u6c7e": "f\u00e9n",
        "\u7c89": "f\u011bn",
        "\u594b": "f\u00e8n",
        "\u4efd": "f\u00e8n",
        "\u5fff": "f\u00e8n",
        "\u6124": "f\u00e8n",
        "\u7caa": "f\u00e8n",
        "\u4e30": "f\u0113ng",
        "\u5c01": "f\u0113ng",
        "\u67ab": "f\u0113ng",
        "\u8702": "f\u0113ng",
        "\u5cf0": "f\u0113ng",
        "\u950b": "f\u0113ng",
        "\u98ce": "f\u0113ng",
        "\u75af": "f\u0113ng",
        "\u70fd": "f\u0113ng",
        "\u9022": "f\u00e9ng",
        "\u51af": "f\u00e9ng",
        "\u7f1d": "f\u00e9ng",
        "\u8bbd": "f\u011bng",
        "\u5949": "f\u00e8ng",
        "\u51e4": "f\u00e8ng",
        "\u4f5b": "f\u00f3",
        "\u5426": "f\u01d2u",
        "\u592b": "f\u016b",
        "\u6577": "f\u016b",
        "\u80a4": "f\u016b",
        "\u5b75": "f\u016b",
        "\u6276": "f\u00fa",
        "\u62c2": "f\u00fa",
        "\u8f90": "f\u00fa",
        "\u5e45": "f\u00fa",
        "\u6c1f": "f\u00fa",
        "\u7b26": "f\u00fa",
        "\u4f0f": "f\u00fa",
        "\u4fd8": "f\u00fa",
        "\u670d": "f\u00fa",
        "\u6d6e": "f\u00fa",
        "\u6daa": "f\u00fa",
        "\u798f": "f\u00fa",
        "\u88b1": "f\u00fa",
        "\u5f17": "f\u00fa",
        "\u752b": "f\u01d4",
        "\u629a": "f\u01d4",
        "\u8f85": "f\u01d4",
        "\u4fef": "f\u01d4",
        "\u91dc": "f\u01d4",
        "\u65a7": "f\u01d4",
        "\u812f": "p\u00fa",
        "\u8151": "f\u01d4",
        "\u5e9c": "f\u01d4",
        "\u8150": "f\u01d4",
        "\u8d74": "f\u00f9",
        "\u526f": "f\u00f9",
        "\u8986": "f\u00f9",
        "\u8d4b": "f\u00f9",
        "\u590d": "f\u00f9",
        "\u5085": "f\u00f9",
        "\u4ed8": "f\u00f9",
        "\u961c": "f\u00f9",
        "\u7236": "f\u00f9",
        "\u8179": "f\u00f9",
        "\u8d1f": "f\u00f9",
        "\u5bcc": "f\u00f9",
        "\u8ba3": "f\u00f9",
        "\u9644": "f\u00f9",
        "\u5987": "f\u00f9",
        "\u7f1a": "f\u00f9",
        "\u5490": "f\u00f9",
        "\u5676": "g\u00e1",
        "\u560e": "g\u0101",
        "\u8be5": "g\u0101i",
        "\u6539": "g\u01cei",
        "\u6982": "g\u00e0i",
        "\u9499": "g\u00e0i",
        "\u76d6": "g\u00e0i",
        "\u6e89": "g\u00e0i",
        "\u5e72": "g\u00e0n",
        "\u7518": "g\u0101n",
        "\u6746": "g\u01cen",
        "\u67d1": "g\u0101n",
        "\u7aff": "g\u0101n",
        "\u809d": "g\u0101n",
        "\u8d76": "g\u01cen",
        "\u611f": "g\u01cen",
        "\u79c6": "g\u01cen",
        "\u6562": "g\u01cen",
        "\u8d63": "g\u00e0n",
        "\u5188": "g\u0101ng",
        "\u521a": "g\u0101ng",
        "\u94a2": "g\u0101ng",
        "\u7f38": "g\u0101ng",
        "\u809b": "g\u0101ng",
        "\u7eb2": "g\u0101ng",
        "\u5c97": "g\u01ceng",
        "\u6e2f": "g\u01ceng",
        "\u6760": "g\u00e0ng",
        "\u7bd9": "g\u0101o",
        "\u768b": "g\u0101o",
        "\u9ad8": "g\u0101o",
        "\u818f": "g\u0101o",
        "\u7f94": "g\u0101o",
        "\u7cd5": "g\u0101o",
        "\u641e": "g\u01ceo",
        "\u9550": "g\u01ceo",
        "\u7a3f": "g\u01ceo",
        "\u544a": "g\u00e0o",
        "\u54e5": "g\u0113",
        "\u6b4c": "g\u0113",
        "\u6401": "g\u0113",
        "\u6208": "g\u0113",
        "\u9e3d": "g\u0113",
        "\u80f3": "g\u0113",
        "\u7599": "g\u0113",
        "\u5272": "g\u0113",
        "\u9769": "g\u00e9",
        "\u845b": "g\u011b",
        "\u683c": "g\u00e9",
        "\u86e4": "h\u00e1",
        "\u9601": "g\u00e9",
        "\u9694": "g\u00e9",
        "\u94ec": "g\u00e8",
        "\u4e2a": "g\u00e8",
        "\u5404": "g\u00e8",
        "\u7ed9": "g\u011bi",
        "\u6839": "g\u0113n",
        "\u8ddf": "g\u0113n",
        "\u8015": "g\u0113ng",
        "\u66f4": "g\u00e8ng",
        "\u5e9a": "g\u0113ng",
        "\u7fb9": "g\u0113ng",
        "\u57c2": "g\u011bng",
        "\u803f": "g\u011bng",
        "\u6897": "g\u011bng",
        "\u5de5": "g\u014dng",
        "\u653b": "g\u014dng",
        "\u529f": "g\u014dng",
        "\u606d": "g\u014dng",
        "\u9f9a": "g\u014dng",
        "\u4f9b": "g\u00f2ng",
        "\u8eac": "g\u014dng",
        "\u516c": "g\u014dng",
        "\u5bab": "g\u014dng",
        "\u5f13": "g\u014dng",
        "\u5de9": "g\u01d2ng",
        "\u6c5e": "g\u01d2ng",
        "\u62f1": "g\u01d2ng",
        "\u8d21": "g\u00f2ng",
        "\u5171": "g\u00f2ng",
        "\u94a9": "g\u014du",
        "\u52fe": "g\u014du",
        "\u6c9f": "g\u014du",
        "\u82df": "g\u01d2u",
        "\u72d7": "g\u01d2u",
        "\u57a2": "g\u00f2u",
        "\u6784": "g\u00f2u",
        "\u8d2d": "g\u00f2u",
        "\u591f": "g\u00f2u",
        "\u8f9c": "g\u016b",
        "\u83c7": "g\u016b",
        "\u5495": "g\u016b",
        "\u7b8d": "g\u016b",
        "\u4f30": "g\u016b",
        "\u6cbd": "g\u016b",
        "\u5b64": "g\u016b",
        "\u59d1": "g\u016b",
        "\u9f13": "g\u01d4",
        "\u53e4": "g\u01d4",
        "\u86ca": "g\u01d4",
        "\u9aa8": "g\u01d4",
        "\u8c37": "g\u01d4",
        "\u80a1": "g\u01d4",
        "\u6545": "g\u00f9",
        "\u987e": "g\u00f9",
        "\u56fa": "g\u00f9",
        "\u96c7": "g\u00f9",
        "\u522e": "gu\u0101",
        "\u74dc": "gu\u0101",
        "\u5250": "gu\u01ce",
        "\u5be1": "gu\u01ce",
        "\u6302": "gu\u00e0",
        "\u8902": "gu\u00e0",
        "\u4e56": "gu\u0101i",
        "\u62d0": "gu\u01cei",
        "\u602a": "gu\u00e0i",
        "\u68fa": "gu\u0101n",
        "\u5173": "gu\u0101n",
        "\u5b98": "gu\u0101n",
        "\u51a0": "gu\u00e0n",
        "\u89c2": "gu\u0101n",
        "\u7ba1": "gu\u01cen",
        "\u9986": "gu\u01cen",
        "\u7f50": "gu\u00e0n",
        "\u60ef": "gu\u00e0n",
        "\u704c": "gu\u00e0n",
        "\u8d2f": "gu\u00e0n",
        "\u5149": "gu\u0101ng",
        "\u5e7f": "gu\u01ceng",
        "\u901b": "gu\u00e0ng",
        "\u7470": "gu\u012b",
        "\u89c4": "gu\u012b",
        "\u572d": "gu\u012b",
        "\u7845": "gu\u012b",
        "\u5f52": "gu\u012b",
        "\u9f9f": "gu\u012b",
        "\u95fa": "gu\u012b",
        "\u8f68": "gu\u01d0",
        "\u9b3c": "gu\u01d0",
        "\u8be1": "gu\u01d0",
        "\u7678": "gu\u01d0",
        "\u6842": "gu\u00ec",
        "\u67dc": "gu\u00ec",
        "\u8dea": "gu\u00ec",
        "\u8d35": "gu\u00ec",
        "\u523d": "gu\u00ec",
        "\u8f8a": "g\u01d4n",
        "\u6eda": "g\u01d4n",
        "\u68cd": "g\u00f9n",
        "\u9505": "gu\u014d",
        "\u90ed": "gu\u014d",
        "\u56fd": "gu\u00f3",
        "\u679c": "gu\u01d2",
        "\u88f9": "gu\u01d2",
        "\u8fc7": "gu\u00f2",
        "\u54c8": "h\u0101",
        "\u9ab8": "h\u00e1i",
        "\u5b69": "h\u00e1i",
        "\u6d77": "h\u01cei",
        "\u6c26": "h\u00e0i",
        "\u4ea5": "h\u00e0i",
        "\u5bb3": "h\u00e0i",
        "\u9a87": "h\u00e0i",
        "\u9163": "h\u0101n",
        "\u61a8": "h\u0101n",
        "\u90af": "h\u00e1n",
        "\u97e9": "h\u00e1n",
        "\u542b": "h\u00e1n",
        "\u6db5": "h\u00e1n",
        "\u5bd2": "h\u00e1n",
        "\u51fd": "h\u00e1n",
        "\u558a": "h\u01cen",
        "\u7f55": "h\u01cen",
        "\u7ff0": "h\u00e0n",
        "\u64bc": "h\u00e0n",
        "\u634d": "h\u00e0n",
        "\u65f1": "h\u00e0n",
        "\u61be": "h\u00e0n",
        "\u608d": "h\u00e0n",
        "\u710a": "h\u00e0n",
        "\u6c57": "h\u00e0n",
        "\u6c49": "h\u00e0n",
        "\u592f": "h\u0101ng",
        "\u676d": "h\u00e1ng",
        "\u822a": "h\u00e1ng",
        "\u58d5": "h\u00e1o",
        "\u568e": "h\u00e1o",
        "\u8c6a": "h\u00e1o",
        "\u6beb": "h\u00e1o",
        "\u90dd": "h\u01ceo",
        "\u597d": "h\u01ceo",
        "\u8017": "h\u00e0o",
        "\u53f7": "h\u00e0o",
        "\u6d69": "h\u00e0o",
        "\u5475": "h\u0113",
        "\u559d": "h\u0113",
        "\u8377": "h\u00e9",
        "\u83cf": "h\u00e9",
        "\u6838": "h\u00e9",
        "\u79be": "h\u00e9",
        "\u548c": "h\u00e9",
        "\u4f55": "h\u00e9",
        "\u5408": "h\u00e9",
        "\u76d2": "h\u00e9",
        "\u8c89": "h\u00e8",
        "\u9602": "h\u00e9",
        "\u6cb3": "h\u00e9",
        "\u6db8": "h\u00e9",
        "\u8d6b": "h\u00e8",
        "\u8910": "h\u00e8",
        "\u9e64": "h\u00e8",
        "\u8d3a": "h\u00e8",
        "\u563f": "h\u0113i",
        "\u9ed1": "h\u0113i",
        "\u75d5": "h\u00e9n",
        "\u5f88": "h\u011bn",
        "\u72e0": "h\u011bn",
        "\u6068": "h\u00e8n",
        "\u54fc": "h\u0113ng",
        "\u4ea8": "h\u0113ng",
        "\u6a2a": "h\u00e9ng",
        "\u8861": "h\u00e9ng",
        "\u6052": "h\u00e9ng",
        "\u8f70": "h\u014dng",
        "\u54c4": "h\u01d2ng",
        "\u70d8": "h\u014dng",
        "\u8679": "h\u00f3ng",
        "\u9e3f": "h\u00f3ng",
        "\u6d2a": "h\u00f3ng",
        "\u5b8f": "h\u00f3ng",
        "\u5f18": "h\u00f3ng",
        "\u7ea2": "h\u00f3ng",
        "\u5589": "h\u00f3u",
        "\u4faf": "h\u00f2u",
        "\u7334": "h\u00f3u",
        "\u543c": "h\u01d2u",
        "\u539a": "h\u00f2u",
        "\u5019": "h\u00f2u",
        "\u540e": "h\u00f2u",
        "\u547c": "h\u016b",
        "\u4e4e": "h\u016b",
        "\u5ffd": "h\u016b",
        "\u745a": "h\u00fa",
        "\u58f6": "h\u00fa",
        "\u846b": "h\u00fa",
        "\u80e1": "h\u00fa",
        "\u8774": "h\u00fa",
        "\u72d0": "h\u00fa",
        "\u7cca": "h\u00fa",
        "\u6e56": "h\u00fa",
        "\u5f27": "h\u00fa",
        "\u864e": "h\u01d4",
        "\u552c": "h\u01d4",
        "\u62a4": "h\u00f9",
        "\u4e92": "h\u00f9",
        "\u6caa": "h\u00f9",
        "\u6237": "h\u00f9",
        "\u82b1": "hu\u0101",
        "\u54d7": "hu\u00e1",
        "\u534e": "hu\u00e1",
        "\u733e": "hu\u00e1",
        "\u6ed1": "hu\u00e1",
        "\u753b": "hu\u00e0",
        "\u5212": "hu\u00e1",
        "\u5316": "hu\u00e0",
        "\u8bdd": "hu\u00e0",
        "\u69d0": "hu\u00e1i",
        "\u5f8a": "hu\u00e1i",
        "\u6000": "hu\u00e1i",
        "\u6dee": "hu\u00e1i",
        "\u574f": "hu\u00e0i",
        "\u6b22": "hu\u0101n",
        "\u73af": "hu\u00e1n",
        "\u6853": "hu\u00e1n",
        "\u8fd8": "h\u00e1i",
        "\u7f13": "hu\u01cen",
        "\u6362": "hu\u00e0n",
        "\u60a3": "hu\u00e0n",
        "\u5524": "hu\u00e0n",
        "\u75ea": "hu\u00e0n",
        "\u8c62": "hu\u00e0n",
        "\u7115": "hu\u00e0n",
        "\u6da3": "hu\u00e0n",
        "\u5ba6": "hu\u00e0n",
        "\u5e7b": "hu\u00e0n",
        "\u8352": "hu\u0101ng",
        "\u614c": "hu\u0101ng",
        "\u9ec4": "hu\u00e1ng",
        "\u78fa": "hu\u00e1ng",
        "\u8757": "hu\u00e1ng",
        "\u7c27": "hu\u00e1ng",
        "\u7687": "hu\u00e1ng",
        "\u51f0": "hu\u00e1ng",
        "\u60f6": "hu\u00e1ng",
        "\u714c": "hu\u00e1ng",
        "\u6643": "hu\u00e0ng",
        "\u5e4c": "hu\u01ceng",
        "\u604d": "hu\u01ceng",
        "\u8c0e": "hu\u01ceng",
        "\u7070": "hu\u012b",
        "\u6325": "hu\u012b",
        "\u8f89": "hu\u012b",
        "\u5fbd": "hu\u012b",
        "\u6062": "hu\u012b",
        "\u86d4": "hu\u00ed",
        "\u56de": "hu\u00ed",
        "\u6bc1": "hu\u01d0",
        "\u6094": "hu\u01d0",
        "\u6167": "hu\u00ec",
        "\u5349": "hu\u00ec",
        "\u60e0": "hu\u00ec",
        "\u6666": "hu\u00ec",
        "\u8d3f": "hu\u00ec",
        "\u79fd": "hu\u00ec",
        "\u4f1a": "hu\u00ec",
        "\u70e9": "hu\u00ec",
        "\u6c47": "hu\u00ec",
        "\u8bb3": "hu\u00ec",
        "\u8bf2": "hu\u00ec",
        "\u7ed8": "hu\u00ec",
        "\u8364": "h\u016bn",
        "\u660f": "h\u016bn",
        "\u5a5a": "h\u016bn",
        "\u9b42": "h\u00fan",
        "\u6d51": "h\u00fan",
        "\u6df7": "h\u00f9n",
        "\u8c41": "hu\u014d",
        "\u6d3b": "hu\u00f3",
        "\u4f19": "hu\u01d2",
        "\u706b": "hu\u01d2",
        "\u83b7": "hu\u00f2",
        "\u6216": "hu\u00f2",
        "\u60d1": "hu\u00f2",
        "\u970d": "hu\u00f2",
        "\u8d27": "hu\u00f2",
        "\u7978": "hu\u00f2",
        "\u51fb": "j\u012b",
        "\u573e": "j\u012b",
        "\u57fa": "j\u012b",
        "\u673a": "j\u012b",
        "\u7578": "j\u012b",
        "\u7a3d": "j\u012b",
        "\u79ef": "j\u012b",
        "\u7b95": "j\u012b",
        "\u808c": "j\u012b",
        "\u9965": "j\u012b",
        "\u8ff9": "j\u00ec",
        "\u6fc0": "j\u012b",
        "\u8ba5": "j\u012b",
        "\u9e21": "j\u012b",
        "\u59ec": "j\u012b",
        "\u7ee9": "j\u00ec",
        "\u7f09": "j\u012b",
        "\u5409": "j\u00ed",
        "\u6781": "j\u00ed",
        "\u68d8": "j\u00ed",
        "\u8f91": "j\u00ed",
        "\u7c4d": "j\u00ed",
        "\u96c6": "j\u00ed",
        "\u53ca": "j\u00ed",
        "\u6025": "j\u00ed",
        "\u75be": "j\u00ed",
        "\u6c72": "j\u00ed",
        "\u5373": "j\u00ed",
        "\u5ac9": "j\u00ed",
        "\u7ea7": "j\u00ed",
        "\u6324": "j\u01d0",
        "\u51e0": "j\u01d0",
        "\u810a": "j\u01d0",
        "\u5df1": "j\u01d0",
        "\u84df": "j\u00ec",
        "\u6280": "j\u00ec",
        "\u5180": "j\u00ec",
        "\u5b63": "j\u00ec",
        "\u4f0e": "j\u00ec",
        "\u796d": "j\u00ec",
        "\u5242": "j\u00ec",
        "\u60b8": "j\u00ec",
        "\u6d4e": "j\u00ec",
        "\u5bc4": "j\u00ec",
        "\u5bc2": "j\u00ec",
        "\u8ba1": "j\u00ec",
        "\u8bb0": "j\u00ec",
        "\u65e2": "j\u00ec",
        "\u5fcc": "j\u00ec",
        "\u9645": "j\u00ec",
        "\u5993": "j\u00ec",
        "\u7ee7": "j\u00ec",
        "\u7eaa": "j\u00ec",
        "\u5609": "ji\u0101",
        "\u67b7": "ji\u0101",
        "\u5939": "ji\u0101",
        "\u4f73": "ji\u0101",
        "\u5bb6": "ji\u0101",
        "\u52a0": "ji\u0101",
        "\u835a": "ji\u00e1",
        "\u988a": "ji\u00e1",
        "\u8d3e": "ji\u01ce",
        "\u7532": "ji\u01ce",
        "\u94be": "ji\u01ce",
        "\u5047": "ji\u01ce",
        "\u7a3c": "ji\u00e0",
        "\u4ef7": "ji\u00e0",
        "\u67b6": "ji\u00e0",
        "\u9a7e": "ji\u00e0",
        "\u5ac1": "ji\u00e0",
        "\u6b7c": "ji\u0101n",
        "\u76d1": "ji\u0101n",
        "\u575a": "ji\u0101n",
        "\u5c16": "ji\u0101n",
        "\u7b3a": "ji\u0101n",
        "\u95f4": "ji\u0101n",
        "\u714e": "ji\u0101n",
        "\u517c": "ji\u0101n",
        "\u80a9": "ji\u0101n",
        "\u8270": "ji\u0101n",
        "\u5978": "ji\u0101n",
        "\u7f04": "ji\u0101n",
        "\u8327": "ji\u01cen",
        "\u68c0": "ji\u01cen",
        "\u67ec": "ji\u01cen",
        "\u78b1": "ji\u01cen",
        "\u7877": "ji\u01cen",
        "\u62e3": "ji\u01cen",
        "\u6361": "ji\u01cen",
        "\u7b80": "ji\u01cen",
        "\u4fed": "ji\u01cen",
        "\u526a": "ji\u01cen",
        "\u51cf": "ji\u01cen",
        "\u8350": "ji\u00e0n",
        "\u69db": "k\u01cen",
        "\u9274": "ji\u00e0n",
        "\u8df5": "ji\u00e0n",
        "\u8d31": "ji\u00e0n",
        "\u89c1": "ji\u00e0n",
        "\u952e": "ji\u00e0n",
        "\u7bad": "ji\u00e0n",
        "\u4ef6": "ji\u00e0n",
        "\u5065": "ji\u00e0n",
        "\u8230": "ji\u00e0n",
        "\u5251": "ji\u00e0n",
        "\u996f": "ji\u00e0n",
        "\u6e10": "ji\u00e0n",
        "\u6e85": "ji\u00e0n",
        "\u6da7": "ji\u00e0n",
        "\u5efa": "ji\u00e0n",
        "\u50f5": "ji\u0101ng",
        "\u59dc": "ji\u0101ng",
        "\u5c06": "ji\u0101ng",
        "\u6d46": "ji\u0101ng",
        "\u6c5f": "ji\u0101ng",
        "\u7586": "ji\u0101ng",
        "\u848b": "ji\u01ceng",
        "\u6868": "ji\u01ceng",
        "\u5956": "ji\u01ceng",
        "\u8bb2": "ji\u01ceng",
        "\u5320": "ji\u00e0ng",
        "\u9171": "ji\u00e0ng",
        "\u964d": "ji\u00e0ng",
        "\u8549": "ji\u0101o",
        "\u6912": "ji\u0101o",
        "\u7901": "ji\u0101o",
        "\u7126": "ji\u0101o",
        "\u80f6": "ji\u0101o",
        "\u4ea4": "ji\u0101o",
        "\u90ca": "ji\u0101o",
        "\u6d47": "ji\u0101o",
        "\u9a84": "ji\u0101o",
        "\u5a07": "ji\u0101o",
        "\u56bc": "ji\u00e1o",
        "\u6405": "ji\u01ceo",
        "\u94f0": "ji\u01ceo",
        "\u77eb": "ji\u01ceo",
        "\u4fa5": "y\u00e1o",
        "\u811a": "ji\u01ceo",
        "\u72e1": "ji\u01ceo",
        "\u89d2": "ji\u01ceo",
        "\u997a": "ji\u01ceo",
        "\u7f34": "ji\u01ceo",
        "\u7ede": "ji\u01ceo",
        "\u527f": "ji\u01ceo",
        "\u6559": "ji\u00e0o",
        "\u9175": "ji\u00e0o",
        "\u8f7f": "ji\u00e0o",
        "\u8f83": "ji\u00e0o",
        "\u53eb": "ji\u00e0o",
        "\u7a96": "ji\u00e0o",
        "\u63ed": "ji\u0113",
        "\u63a5": "ji\u0113",
        "\u7686": "ji\u0113",
        "\u79f8": "ji\u0113",
        "\u8857": "ji\u0113",
        "\u9636": "ji\u0113",
        "\u622a": "ji\u00e9",
        "\u52ab": "ji\u00e9",
        "\u8282": "ji\u00e9",
        "\u6854": "j\u00fa",
        "\u6770": "ji\u00e9",
        "\u6377": "ji\u00e9",
        "\u776b": "ji\u00e9",
        "\u7aed": "ji\u00e9",
        "\u6d01": "ji\u00e9",
        "\u7ed3": "ji\u00e9",
        "\u89e3": "ji\u011b",
        "\u59d0": "ji\u011b",
        "\u6212": "ji\u00e8",
        "\u85c9": "ji\u00e8",
        "\u82a5": "ji\u00e8",
        "\u754c": "ji\u00e8",
        "\u501f": "ji\u00e8",
        "\u4ecb": "ji\u00e8",
        "\u75a5": "ji\u00e8",
        "\u8beb": "ji\u00e8",
        "\u5c4a": "ji\u00e8",
        "\u5dfe": "j\u012bn",
        "\u7b4b": "j\u012bn",
        "\u65a4": "j\u012bn",
        "\u91d1": "j\u012bn",
        "\u4eca": "j\u012bn",
        "\u6d25": "j\u012bn",
        "\u895f": "j\u012bn",
        "\u7d27": "j\u01d0n",
        "\u9526": "j\u01d0n",
        "\u4ec5": "j\u01d0n",
        "\u8c28": "j\u01d0n",
        "\u8fdb": "j\u00ecn",
        "\u9773": "j\u00ecn",
        "\u664b": "j\u00ecn",
        "\u7981": "j\u00ecn",
        "\u8fd1": "j\u00ecn",
        "\u70ec": "j\u00ecn",
        "\u6d78": "j\u00ecn",
        "\u5c3d": "j\u00ecn",
        "\u52b2": "j\u00ecn",
        "\u8346": "j\u012bng",
        "\u5162": "j\u012bng",
        "\u830e": "j\u012bng",
        "\u775b": "j\u012bng",
        "\u6676": "j\u012bng",
        "\u9cb8": "j\u012bng",
        "\u4eac": "j\u012bng",
        "\u60ca": "j\u012bng",
        "\u7cbe": "j\u012bng",
        "\u7cb3": "j\u012bng",
        "\u7ecf": "j\u012bng",
        "\u4e95": "j\u01d0ng",
        "\u8b66": "j\u01d0ng",
        "\u666f": "j\u01d0ng",
        "\u9888": "j\u01d0ng",
        "\u9759": "j\u00ecng",
        "\u5883": "j\u00ecng",
        "\u656c": "j\u00ecng",
        "\u955c": "j\u00ecng",
        "\u5f84": "j\u00ecng",
        "\u75c9": "j\u00ecng",
        "\u9756": "j\u00ecng",
        "\u7adf": "j\u00ecng",
        "\u7ade": "j\u00ecng",
        "\u51c0": "j\u00ecng",
        "\u70af": "ji\u01d2ng",
        "\u7a98": "ji\u01d2ng",
        "\u63ea": "ji\u016b",
        "\u7a76": "ji\u016b",
        "\u7ea0": "ji\u016b",
        "\u7396": "ji\u01d4",
        "\u97ed": "ji\u01d4",
        "\u4e45": "ji\u01d4",
        "\u7078": "ji\u01d4",
        "\u4e5d": "ji\u01d4",
        "\u9152": "ji\u01d4",
        "\u53a9": "ji\u00f9",
        "\u6551": "ji\u00f9",
        "\u65e7": "ji\u00f9",
        "\u81fc": "ji\u00f9",
        "\u8205": "ji\u00f9",
        "\u548e": "ji\u00f9",
        "\u5c31": "ji\u00f9",
        "\u759a": "ji\u00f9",
        "\u97a0": "j\u016b",
        "\u62d8": "j\u016b",
        "\u72d9": "j\u016b",
        "\u75bd": "j\u016b",
        "\u5c45": "j\u016b",
        "\u9a79": "j\u016b",
        "\u83ca": "j\u00fa",
        "\u5c40": "j\u00fa",
        "\u5480": "j\u01d4",
        "\u77e9": "j\u01d4",
        "\u4e3e": "j\u01d4",
        "\u6cae": "j\u01d4",
        "\u805a": "j\u00f9",
        "\u62d2": "j\u00f9",
        "\u636e": "j\u00f9",
        "\u5de8": "j\u00f9",
        "\u5177": "j\u00f9",
        "\u8ddd": "j\u00f9",
        "\u8e1e": "j\u00f9",
        "\u952f": "j\u00f9",
        "\u4ff1": "j\u00f9",
        "\u53e5": "j\u00f9",
        "\u60e7": "j\u00f9",
        "\u70ac": "j\u00f9",
        "\u5267": "j\u00f9",
        "\u6350": "ju\u0101n",
        "\u9e43": "ju\u0101n",
        "\u5a1f": "ju\u0101n",
        "\u5026": "ju\u00e0n",
        "\u7737": "ju\u00e0n",
        "\u5377": "ju\u00e0n",
        "\u7ee2": "ju\u00e0n",
        "\u6485": "ju\u0113",
        "\u652b": "ju\u00e9",
        "\u6289": "ju\u00e9",
        "\u6398": "ju\u00e9",
        "\u5014": "ju\u00e8",
        "\u7235": "ju\u00e9",
        "\u89c9": "ju\u00e9",
        "\u51b3": "ju\u00e9",
        "\u8bc0": "ju\u00e9",
        "\u7edd": "ju\u00e9",
        "\u5747": "j\u016bn",
        "\u83cc": "j\u016bn",
        "\u94a7": "j\u016bn",
        "\u519b": "j\u016bn",
        "\u541b": "j\u016bn",
        "\u5cfb": "j\u00f9n",
        "\u4fca": "j\u00f9n",
        "\u7ae3": "j\u00f9n",
        "\u6d5a": "x\u00f9n",
        "\u90e1": "j\u00f9n",
        "\u9a8f": "j\u00f9n",
        "\u5580": "k\u0101",
        "\u5496": "k\u0101",
        "\u5361": "k\u01ce",
        "\u54af": "g\u0113",
        "\u5f00": "k\u0101i",
        "\u63e9": "k\u0101i",
        "\u6977": "k\u01cei",
        "\u51ef": "k\u01cei",
        "\u6168": "k\u01cei",
        "\u520a": "k\u0101n",
        "\u582a": "k\u0101n",
        "\u52d8": "k\u0101n",
        "\u574e": "k\u01cen",
        "\u780d": "k\u01cen",
        "\u770b": "k\u00e0n",
        "\u5eb7": "k\u0101ng",
        "\u6177": "k\u0101ng",
        "\u7ce0": "k\u0101ng",
        "\u625b": "k\u00e1ng",
        "\u6297": "k\u00e0ng",
        "\u4ea2": "k\u00e0ng",
        "\u7095": "k\u00e0ng",
        "\u8003": "k\u01ceo",
        "\u62f7": "k\u01ceo",
        "\u70e4": "k\u01ceo",
        "\u9760": "k\u00e0o",
        "\u5777": "k\u011b",
        "\u82db": "k\u0113",
        "\u67ef": "k\u0113",
        "\u68f5": "k\u0113",
        "\u78d5": "k\u0113",
        "\u9897": "k\u0113",
        "\u79d1": "k\u0113",
        "\u58f3": "k\u00e9",
        "\u54b3": "k\u00e9",
        "\u53ef": "k\u011b",
        "\u6e34": "k\u011b",
        "\u514b": "k\u00e8",
        "\u523b": "k\u00e8",
        "\u5ba2": "k\u00e8",
        "\u8bfe": "k\u00e8",
        "\u80af": "k\u011bn",
        "\u5543": "k\u011bn",
        "\u57a6": "k\u011bn",
        "\u6073": "k\u011bn",
        "\u5751": "k\u0113ng",
        "\u542d": "k\u0113ng",
        "\u7a7a": "k\u014dng",
        "\u6050": "k\u01d2ng",
        "\u5b54": "k\u01d2ng",
        "\u63a7": "k\u00f2ng",
        "\u62a0": "k\u014du",
        "\u53e3": "k\u01d2u",
        "\u6263": "k\u00f2u",
        "\u5bc7": "k\u00f2u",
        "\u67af": "k\u016b",
        "\u54ed": "k\u016b",
        "\u7a9f": "k\u016b",
        "\u82e6": "k\u01d4",
        "\u9177": "k\u00f9",
        "\u5e93": "k\u00f9",
        "\u88e4": "k\u00f9",
        "\u5938": "ku\u0101",
        "\u57ae": "ku\u01ce",
        "\u630e": "ku\u00e0",
        "\u8de8": "ku\u00e0",
        "\u80ef": "ku\u00e0",
        "\u5757": "ku\u00e0i",
        "\u7b77": "ku\u00e0i",
        "\u4fa9": "ku\u00e0i",
        "\u5feb": "ku\u00e0i",
        "\u5bbd": "ku\u0101n",
        "\u6b3e": "ku\u01cen",
        "\u5321": "ku\u0101ng",
        "\u7b50": "ku\u0101ng",
        "\u72c2": "ku\u00e1ng",
        "\u6846": "ku\u00e0ng",
        "\u77ff": "ku\u00e0ng",
        "\u7736": "ku\u00e0ng",
        "\u65f7": "ku\u00e0ng",
        "\u51b5": "ku\u00e0ng",
        "\u4e8f": "ku\u012b",
        "\u76d4": "ku\u012b",
        "\u5cbf": "ku\u012b",
        "\u7aa5": "ku\u012b",
        "\u8475": "ku\u00ed",
        "\u594e": "ku\u00ed",
        "\u9b41": "ku\u00ed",
        "\u5080": "gu\u012b",
        "\u9988": "ku\u00ec",
        "\u6127": "ku\u00ec",
        "\u6e83": "ku\u00ec",
        "\u5764": "k\u016bn",
        "\u6606": "k\u016bn",
        "\u6346": "k\u01d4n",
        "\u56f0": "k\u00f9n",
        "\u62ec": "ku\u00f2",
        "\u6269": "ku\u00f2",
        "\u5ed3": "ku\u00f2",
        "\u9614": "ku\u00f2",
        "\u5783": "l\u0101",
        "\u62c9": "l\u0101",
        "\u5587": "l\u01ce",
        "\u8721": "l\u00e0",
        "\u814a": "l\u00e0",
        "\u8fa3": "l\u00e0",
        "\u5566": "l\u0101",
        "\u83b1": "l\u00e1i",
        "\u6765": "l\u00e1i",
        "\u8d56": "l\u00e0i",
        "\u84dd": "l\u00e1n",
        "\u5a6a": "l\u00e1n",
        "\u680f": "l\u00e1n",
        "\u62e6": "l\u00e1n",
        "\u7bee": "l\u00e1n",
        "\u9611": "l\u00e1n",
        "\u5170": "l\u00e1n",
        "\u6f9c": "l\u00e1n",
        "\u8c30": "l\u00e1n",
        "\u63fd": "l\u01cen",
        "\u89c8": "l\u01cen",
        "\u61d2": "l\u01cen",
        "\u7f06": "l\u01cen",
        "\u70c2": "l\u00e0n",
        "\u6ee5": "l\u00e0n",
        "\u7405": "l\u00e1ng",
        "\u6994": "l\u00e1ng",
        "\u72fc": "l\u00e1ng",
        "\u5eca": "l\u00e1ng",
        "\u90ce": "l\u00e1ng",
        "\u6717": "l\u01ceng",
        "\u6d6a": "l\u00e0ng",
        "\u635e": "l\u0101o",
        "\u52b3": "l\u00e1o",
        "\u7262": "l\u00e1o",
        "\u8001": "l\u01ceo",
        "\u4f6c": "l\u01ceo",
        "\u59e5": "l\u01ceo",
        "\u916a": "l\u00e0o",
        "\u70d9": "l\u00e0o",
        "\u6d9d": "l\u00e0o",
        "\u52d2": "l\u00e8",
        "\u4e50": "l\u00e8",
        "\u96f7": "l\u00e9i",
        "\u956d": "l\u00e9i",
        "\u857e": "l\u011bi",
        "\u78ca": "l\u011bi",
        "\u7d2f": "l\u00e8i",
        "\u5121": "l\u011bi",
        "\u5792": "l\u011bi",
        "\u64c2": "l\u00e8i",
        "\u808b": "l\u00e8i",
        "\u7c7b": "l\u00e8i",
        "\u6cea": "l\u00e8i",
        "\u68f1": "l\u00e9ng",
        "\u695e": "l\u00e9ng",
        "\u51b7": "l\u011bng",
        "\u5398": "l\u00ed",
        "\u68a8": "l\u00ed",
        "\u7281": "l\u00ed",
        "\u9ece": "l\u00ed",
        "\u7bf1": "l\u00ed",
        "\u72f8": "l\u00ed",
        "\u79bb": "l\u00ed",
        "\u6f13": "l\u00ed",
        "\u7406": "l\u01d0",
        "\u674e": "l\u01d0",
        "\u91cc": "l\u01d0",
        "\u9ca4": "l\u01d0",
        "\u793c": "l\u01d0",
        "\u8389": "l\u00ec",
        "\u8354": "l\u00ec",
        "\u540f": "l\u00ec",
        "\u6817": "l\u00ec",
        "\u4e3d": "l\u00ec",
        "\u5389": "l\u00ec",
        "\u52b1": "l\u00ec",
        "\u783e": "l\u00ec",
        "\u5386": "l\u00ec",
        "\u5229": "l\u00ec",
        "\u5088": "l\u00ec",
        "\u4f8b": "l\u00ec",
        "\u4fd0": "l\u00ec",
        "\u75e2": "l\u00ec",
        "\u7acb": "l\u00ec",
        "\u7c92": "l\u00ec",
        "\u6ca5": "l\u00ec",
        "\u96b6": "l\u00ec",
        "\u529b": "l\u00ec",
        "\u7483": "l\u00ed",
        "\u54e9": "l\u01d0",
        "\u4fe9": "li\u01ceng",
        "\u8054": "li\u00e1n",
        "\u83b2": "li\u00e1n",
        "\u8fde": "li\u00e1n",
        "\u9570": "li\u00e1n",
        "\u5ec9": "li\u00e1n",
        "\u601c": "li\u00e1n",
        "\u6d9f": "li\u00e1n",
        "\u5e18": "li\u00e1n",
        "\u655b": "li\u01cen",
        "\u8138": "li\u01cen",
        "\u94fe": "li\u00e0n",
        "\u604b": "li\u00e0n",
        "\u70bc": "li\u00e0n",
        "\u7ec3": "li\u00e0n",
        "\u7cae": "li\u00e1ng",
        "\u51c9": "li\u00e1ng",
        "\u6881": "li\u00e1ng",
        "\u7cb1": "li\u00e1ng",
        "\u826f": "li\u00e1ng",
        "\u4e24": "li\u01ceng",
        "\u8f86": "li\u00e0ng",
        "\u91cf": "li\u00e0ng",
        "\u667e": "li\u00e0ng",
        "\u4eae": "li\u00e0ng",
        "\u8c05": "li\u00e0ng",
        "\u64a9": "li\u00e1o",
        "\u804a": "li\u00e1o",
        "\u50da": "li\u00e1o",
        "\u7597": "li\u00e1o",
        "\u71ce": "li\u00e1o",
        "\u5be5": "li\u00e1o",
        "\u8fbd": "li\u00e1o",
        "\u6f66": "li\u00e1o",
        "\u4e86": "le",
        "\u6482": "li\u00e0o",
        "\u9563": "li\u00e0o",
        "\u5ed6": "li\u00e0o",
        "\u6599": "li\u00e0o",
        "\u5217": "li\u00e8",
        "\u88c2": "li\u00e8",
        "\u70c8": "li\u00e8",
        "\u52a3": "li\u00e8",
        "\u730e": "li\u00e8",
        "\u7433": "l\u00edn",
        "\u6797": "l\u00edn",
        "\u78f7": "l\u00edn",
        "\u9716": "l\u00edn",
        "\u4e34": "l\u00edn",
        "\u90bb": "l\u00edn",
        "\u9cde": "l\u00edn",
        "\u6dcb": "l\u00edn",
        "\u51db": "l\u01d0n",
        "\u8d41": "l\u00ecn",
        "\u541d": "l\u00ecn",
        "\u62ce": "l\u012bn",
        "\u73b2": "l\u00edng",
        "\u83f1": "l\u00edng",
        "\u96f6": "l\u00edng",
        "\u9f84": "l\u00edng",
        "\u94c3": "l\u00edng",
        "\u4f36": "l\u00edng",
        "\u7f9a": "l\u00edng",
        "\u51cc": "l\u00edng",
        "\u7075": "l\u00edng",
        "\u9675": "l\u00edng",
        "\u5cad": "l\u01d0ng",
        "\u9886": "l\u01d0ng",
        "\u53e6": "l\u00ecng",
        "\u4ee4": "l\u00ecng",
        "\u6e9c": "li\u016b",
        "\u7409": "li\u00fa",
        "\u69b4": "li\u00fa",
        "\u786b": "li\u00fa",
        "\u998f": "li\u00fa",
        "\u7559": "li\u00fa",
        "\u5218": "li\u00fa",
        "\u7624": "li\u00fa",
        "\u6d41": "li\u00fa",
        "\u67f3": "li\u01d4",
        "\u516d": "li\u00f9",
        "\u9f99": "l\u00f3ng",
        "\u804b": "l\u00f3ng",
        "\u5499": "l\u00f3ng",
        "\u7b3c": "l\u00f3ng",
        "\u7abf": "l\u00f3ng",
        "\u9686": "l\u00f3ng",
        "\u5784": "l\u01d2ng",
        "\u62e2": "l\u01d2ng",
        "\u9647": "l\u01d2ng",
        "\u697c": "l\u00f3u",
        "\u5a04": "l\u00f3u",
        "\u6402": "l\u01d2u",
        "\u7bd3": "l\u01d2u",
        "\u6f0f": "l\u00f2u",
        "\u964b": "l\u00f2u",
        "\u82a6": "l\u00fa",
        "\u5362": "l\u00fa",
        "\u9885": "l\u00fa",
        "\u5e90": "l\u00fa",
        "\u7089": "l\u00fa",
        "\u63b3": "l\u01d4",
        "\u5364": "l\u01d4",
        "\u864f": "l\u01d4",
        "\u9c81": "l\u01d4",
        "\u9e93": "l\u00f9",
        "\u788c": "l\u00f9",
        "\u9732": "l\u00f9",
        "\u8def": "l\u00f9",
        "\u8d42": "l\u00f9",
        "\u9e7f": "l\u00f9",
        "\u6f5e": "l\u00f9",
        "\u7984": "l\u00f9",
        "\u5f55": "l\u00f9",
        "\u9646": "l\u00f9",
        "\u622e": "l\u00f9",
        "\u9a74": "l\u01d8",
        "\u5415": "l\u01da",
        "\u94dd": "l\u01da",
        "\u4fa3": "l\u01da",
        "\u65c5": "l\u01da",
        "\u5c65": "l\u01da",
        "\u5c61": "l\u01da",
        "\u7f15": "l\u01da",
        "\u8651": "l\u01dc",
        "\u6c2f": "l\u01dc",
        "\u5f8b": "l\u01dc",
        "\u7387": "l\u01dc",
        "\u6ee4": "l\u01dc",
        "\u7eff": "l\u01dc",
        "\u5ce6": "lu\u00e1n",
        "\u631b": "lu\u00e1n",
        "\u5b6a": "lu\u00e1n",
        "\u6ee6": "lu\u00e1n",
        "\u5375": "lu\u01cen",
        "\u4e71": "lu\u00e0n",
        "\u63a0": "l\u00fc\u011b",
        "\u7565": "l\u00fc\u00e8",
        "\u62a1": "l\u00fan",
        "\u8f6e": "l\u00fan",
        "\u4f26": "l\u00fan",
        "\u4ed1": "l\u00fan",
        "\u6ca6": "l\u00fan",
        "\u7eb6": "l\u00fan",
        "\u8bba": "l\u00f9n",
        "\u841d": "lu\u00f3",
        "\u87ba": "lu\u00f3",
        "\u7f57": "lu\u00f3",
        "\u903b": "lu\u00f3",
        "\u9523": "lu\u00f3",
        "\u7ba9": "lu\u00f3",
        "\u9aa1": "lu\u00f3",
        "\u88f8": "lu\u01d2",
        "\u843d": "lu\u00f2",
        "\u6d1b": "lu\u00f2",
        "\u9a86": "lu\u00f2",
        "\u7edc": "lu\u00f2",
        "\u5988": "m\u0101",
        "\u9ebb": "m\u00e1",
        "\u739b": "m\u01ce",
        "\u7801": "m\u01ce",
        "\u8682": "m\u01ce",
        "\u9a6c": "m\u01ce",
        "\u9a82": "m\u00e0",
        "\u561b": "ma",
        "\u5417": "ma",
        "\u57cb": "m\u00e1i",
        "\u4e70": "m\u01cei",
        "\u9ea6": "m\u00e0i",
        "\u5356": "m\u00e0i",
        "\u8fc8": "m\u00e0i",
        "\u8109": "m\u00e0i",
        "\u7792": "m\u00e1n",
        "\u9992": "m\u00e1n",
        "\u86ee": "m\u00e1n",
        "\u6ee1": "m\u01cen",
        "\u8513": "m\u00e0n",
        "\u66fc": "m\u00e0n",
        "\u6162": "m\u00e0n",
        "\u6f2b": "m\u00e0n",
        "\u8c29": "m\u00e0n",
        "\u8292": "m\u00e1ng",
        "\u832b": "m\u00e1ng",
        "\u76f2": "m\u00e1ng",
        "\u6c13": "m\u00e1ng",
        "\u5fd9": "m\u00e1ng",
        "\u83bd": "m\u01ceng",
        "\u732b": "m\u0101o",
        "\u8305": "m\u00e1o",
        "\u951a": "m\u00e1o",
        "\u6bdb": "m\u00e1o",
        "\u77db": "m\u00e1o",
        "\u94c6": "m\u01ceo",
        "\u536f": "m\u01ceo",
        "\u8302": "m\u00e0o",
        "\u5192": "m\u00e0o",
        "\u5e3d": "m\u00e0o",
        "\u8c8c": "m\u00e0o",
        "\u8d38": "m\u00e0o",
        "\u4e48": "me",
        "\u73ab": "m\u00e9i",
        "\u679a": "m\u00e9i",
        "\u6885": "m\u00e9i",
        "\u9176": "m\u00e9i",
        "\u9709": "m\u00e9i",
        "\u7164": "m\u00e9i",
        "\u6ca1": "m\u00e9i",
        "\u7709": "m\u00e9i",
        "\u5a92": "m\u00e9i",
        "\u9541": "m\u011bi",
        "\u6bcf": "m\u011bi",
        "\u7f8e": "m\u011bi",
        "\u6627": "m\u00e8i",
        "\u5bd0": "m\u00e8i",
        "\u59b9": "m\u00e8i",
        "\u5a9a": "m\u00e8i",
        "\u95e8": "m\u00e9n",
        "\u95f7": "m\u00e8n",
        "\u4eec": "m\u00e9n",
        "\u840c": "m\u00e9ng",
        "\u8499": "m\u00e9ng",
        "\u6aac": "m\u00e9ng",
        "\u76df": "m\u00e9ng",
        "\u9530": "m\u011bng",
        "\u731b": "m\u011bng",
        "\u68a6": "m\u00e8ng",
        "\u5b5f": "m\u00e8ng",
        "\u772f": "m\u012b",
        "\u919a": "m\u00ed",
        "\u9761": "m\u00ed",
        "\u7cdc": "m\u00ed",
        "\u8ff7": "m\u00ed",
        "\u8c1c": "m\u00ed",
        "\u5f25": "m\u00ed",
        "\u7c73": "m\u01d0",
        "\u79d8": "m\u00ec",
        "\u89c5": "m\u00ec",
        "\u6ccc": "m\u00ec",
        "\u871c": "m\u00ec",
        "\u5bc6": "m\u00ec",
        "\u5e42": "m\u00ec",
        "\u68c9": "mi\u00e1n",
        "\u7720": "mi\u00e1n",
        "\u7ef5": "mi\u00e1n",
        "\u5195": "mi\u01cen",
        "\u514d": "mi\u01cen",
        "\u52c9": "mi\u01cen",
        "\u5a29": "mi\u01cen",
        "\u7f05": "mi\u01cen",
        "\u9762": "mi\u00e0n",
        "\u82d7": "mi\u00e1o",
        "\u63cf": "mi\u00e1o",
        "\u7784": "mi\u00e1o",
        "\u85d0": "mi\u01ceo",
        "\u79d2": "mi\u01ceo",
        "\u6e3a": "mi\u01ceo",
        "\u5e99": "mi\u00e0o",
        "\u5999": "mi\u00e0o",
        "\u8511": "mi\u00e8",
        "\u706d": "mi\u00e8",
        "\u6c11": "m\u00edn",
        "\u62bf": "m\u01d0n",
        "\u76bf": "m\u01d0n",
        "\u654f": "m\u01d0n",
        "\u60af": "m\u01d0n",
        "\u95fd": "m\u01d0n",
        "\u660e": "m\u00edng",
        "\u879f": "m\u00edng",
        "\u9e23": "m\u00edng",
        "\u94ed": "m\u00edng",
        "\u540d": "m\u00edng",
        "\u547d": "m\u00ecng",
        "\u8c2c": "mi\u00f9",
        "\u6478": "m\u014d",
        "\u6479": "m\u00f3",
        "\u8611": "m\u00f3",
        "\u6a21": "m\u00f3",
        "\u819c": "m\u00f3",
        "\u78e8": "m\u00f3",
        "\u6469": "m\u00f3",
        "\u9b54": "m\u00f3",
        "\u62b9": "m\u00f2",
        "\u672b": "m\u00f2",
        "\u83ab": "m\u00f2",
        "\u58a8": "m\u00f2",
        "\u9ed8": "m\u00f2",
        "\u6cab": "m\u00f2",
        "\u6f20": "m\u00f2",
        "\u5bde": "m\u00f2",
        "\u964c": "m\u00f2",
        "\u8c0b": "m\u00f3u",
        "\u725f": "m\u00f3u",
        "\u67d0": "m\u01d2u",
        "\u62c7": "m\u01d4",
        "\u7261": "m\u01d4",
        "\u4ea9": "m\u01d4",
        "\u59c6": "m\u01d4",
        "\u6bcd": "m\u01d4",
        "\u5893": "m\u00f9",
        "\u66ae": "m\u00f9",
        "\u5e55": "m\u00f9",
        "\u52df": "m\u00f9",
        "\u6155": "m\u00f9",
        "\u6728": "m\u00f9",
        "\u76ee": "m\u00f9",
        "\u7766": "m\u00f9",
        "\u7267": "m\u00f9",
        "\u7a46": "m\u00f9",
        "\u62ff": "n\u00e1",
        "\u54ea": "n\u01ce",
        "\u5450": "n\u00e0",
        "\u94a0": "n\u00e0",
        "\u90a3": "n\u00e0",
        "\u5a1c": "n\u00e0",
        "\u7eb3": "n\u00e0",
        "\u6c16": "n\u01cei",
        "\u4e43": "n\u01cei",
        "\u5976": "n\u01cei",
        "\u8010": "nai",
        "\u5948": "nai",
        "\u5357": "n\u00e1n",
        "\u7537": "n\u00e1n",
        "\u96be": "n\u00e1n",
        "\u56ca": "n\u00e1ng",
        "\u6320": "n\u00e1o",
        "\u8111": "n\u01ceo",
        "\u607c": "n\u01ceo",
        "\u95f9": "n\u00e0o",
        "\u6dd6": "n\u00e0o",
        "\u5462": "ne",
        "\u9981": "n\u011bi",
        "\u5185": "n\u00e8i",
        "\u5ae9": "n\u00e8n",
        "\u80fd": "n\u00e9ng",
        "\u59ae": "n\u012b",
        "\u9713": "n\u00ed",
        "\u502a": "n\u00ed",
        "\u6ce5": "n\u00ed",
        "\u5c3c": "n\u00ed",
        "\u62df": "n\u01d0",
        "\u4f60": "n\u01d0",
        "\u533f": "n\u00ec",
        "\u817b": "n\u00ec",
        "\u9006": "n\u00ec",
        "\u6eba": "n\u00ec",
        "\u852b": "ni\u0101n",
        "\u62c8": "ni\u0101n",
        "\u5e74": "ni\u00e1n",
        "\u78be": "ni\u01cen",
        "\u64b5": "ni\u01cen",
        "\u637b": "ni\u01cen",
        "\u5ff5": "ni\u00e0n",
        "\u5a18": "ni\u00e1ng",
        "\u917f": "ni\u00e0ng",
        "\u9e1f": "ni\u01ceo",
        "\u5c3f": "ni\u00e0o",
        "\u634f": "ni\u0113",
        "\u8042": "ni\u00e8",
        "\u5b7d": "ni\u00e8",
        "\u556e": "ni\u00e8",
        "\u954a": "ni\u00e8",
        "\u954d": "ni\u00e8",
        "\u6d85": "ni\u00e8",
        "\u60a8": "n\u00edn",
        "\u67e0": "n\u00edng",
        "\u72de": "n\u00edng",
        "\u51dd": "n\u00edng",
        "\u5b81": "n\u00edng",
        "\u62e7": "n\u01d0ng",
        "\u6cde": "n\u00ecng",
        "\u725b": "ni\u00fa",
        "\u626d": "ni\u01d4",
        "\u94ae": "ni\u01d4",
        "\u7ebd": "ni\u01d4",
        "\u8113": "n\u00f3ng",
        "\u6d53": "n\u00f3ng",
        "\u519c": "n\u00f3ng",
        "\u5f04": "n\u00f2ng",
        "\u5974": "n\u00fa",
        "\u52aa": "n\u01d4",
        "\u6012": "n\u00f9",
        "\u5973": "n\u01da",
        "\u6696": "nu\u01cen",
        "\u8650": "n\u00fc\u00e8",
        "\u759f": "n\u00fc\u00e8",
        "\u632a": "nu\u00f3",
        "\u61e6": "nu\u00f2",
        "\u7cef": "nu\u00f2",
        "\u8bfa": "nu\u00f2",
        "\u54e6": "\u00f2",
        "\u6b27": "\u014du",
        "\u9e25": "\u014du",
        "\u6bb4": "\u014du",
        "\u85d5": "\u01d2u",
        "\u5455": "\u01d2u",
        "\u5076": "\u01d2u",
        "\u6ca4": "\u014du",
        "\u556a": "p\u0101",
        "\u8db4": "p\u0101",
        "\u722c": "p\u00e1",
        "\u5e15": "p\u00e0",
        "\u6015": "p\u00e0",
        "\u7436": "p\u00e1",
        "\u62cd": "p\u0101i",
        "\u6392": "p\u00e1i",
        "\u724c": "p\u00e1i",
        "\u5f98": "p\u00e1i",
        "\u6e43": "pai",
        "\u6d3e": "pai",
        "\u6500": "p\u0101n",
        "\u6f58": "p\u0101n",
        "\u76d8": "p\u00e1n",
        "\u78d0": "p\u00e1n",
        "\u76fc": "p\u00e0n",
        "\u7554": "p\u00e0n",
        "\u5224": "p\u00e0n",
        "\u53db": "p\u00e0n",
        "\u4e53": "p\u0101ng",
        "\u5e9e": "p\u00e1ng",
        "\u65c1": "p\u00e1ng",
        "\u802a": "p\u01ceng",
        "\u80d6": "p\u00e0ng",
        "\u629b": "p\u0101o",
        "\u5486": "p\u00e1o",
        "\u5228": "p\u00e1o",
        "\u70ae": "p\u00e0o",
        "\u888d": "p\u00e1o",
        "\u8dd1": "p\u01ceo",
        "\u6ce1": "p\u00e0o",
        "\u5478": "p\u0113i",
        "\u80da": "p\u0113i",
        "\u57f9": "p\u00e9i",
        "\u88f4": "p\u00e9i",
        "\u8d54": "p\u00e9i",
        "\u966a": "p\u00e9i",
        "\u914d": "p\u00e8i",
        "\u4f69": "p\u00e8i",
        "\u6c9b": "p\u00e8i",
        "\u55b7": "p\u0113n",
        "\u76c6": "p\u00e9n",
        "\u7830": "p\u0113ng",
        "\u62a8": "p\u0113ng",
        "\u70f9": "p\u0113ng",
        "\u6f8e": "p\u00e9ng",
        "\u5f6d": "p\u00e9ng",
        "\u84ec": "p\u00e9ng",
        "\u68da": "p\u00e9ng",
        "\u787c": "p\u00e9ng",
        "\u7bf7": "p\u00e9ng",
        "\u81a8": "p\u00e9ng",
        "\u670b": "p\u00e9ng",
        "\u9e4f": "p\u00e9ng",
        "\u6367": "p\u011bng",
        "\u78b0": "p\u00e8ng",
        "\u576f": "p\u012b",
        "\u7812": "p\u012b",
        "\u9739": "p\u012b",
        "\u6279": "p\u012b",
        "\u62ab": "p\u012b",
        "\u5288": "p\u012b",
        "\u7435": "p\u00ed",
        "\u6bd7": "p\u00ed",
        "\u5564": "p\u00ed",
        "\u813e": "p\u00ed",
        "\u75b2": "p\u00ed",
        "\u76ae": "p\u00ed",
        "\u5339": "p\u01d0",
        "\u75de": "p\u01d0",
        "\u50fb": "p\u00ec",
        "\u5c41": "p\u00ec",
        "\u8b6c": "p\u00ec",
        "\u7bc7": "pi\u0101n",
        "\u504f": "pi\u0101n",
        "\u7247": "pi\u00e0n",
        "\u9a97": "pi\u00e0n",
        "\u98d8": "pi\u0101o",
        "\u6f02": "pi\u0101o",
        "\u74e2": "pi\u00e1o",
        "\u7968": "pi\u00e0o",
        "\u6487": "pi\u011b",
        "\u77a5": "pi\u0113",
        "\u62fc": "p\u012bn",
        "\u9891": "p\u00edn",
        "\u8d2b": "p\u00edn",
        "\u54c1": "p\u01d0n",
        "\u8058": "p\u00ecn",
        "\u4e52": "p\u012bng",
        "\u576a": "p\u00edng",
        "\u82f9": "p\u00edng",
        "\u840d": "p\u00edng",
        "\u5e73": "p\u00edng",
        "\u51ed": "p\u00edng",
        "\u74f6": "p\u00edng",
        "\u8bc4": "p\u00edng",
        "\u5c4f": "p\u00edng",
        "\u5761": "p\u014d",
        "\u6cfc": "p\u014d",
        "\u9887": "p\u014d",
        "\u5a46": "p\u00f3",
        "\u7834": "p\u00f2",
        "\u9b44": "p\u00f2",
        "\u8feb": "p\u00f2",
        "\u7c95": "p\u00f2",
        "\u5256": "p\u014du",
        "\u6251": "p\u016b",
        "\u94fa": "p\u00f9",
        "\u4ec6": "p\u00fa",
        "\u8386": "p\u00fa",
        "\u8461": "p\u00fa",
        "\u83e9": "p\u00fa",
        "\u84b2": "p\u00fa",
        "\u57d4": "p\u01d4",
        "\u6734": "p\u01d4",
        "\u5703": "p\u01d4",
        "\u666e": "p\u01d4",
        "\u6d66": "p\u01d4",
        "\u8c31": "p\u01d4",
        "\u66dd": "p\u00f9",
        "\u7011": "b\u00e0o",
        "\u671f": "q\u012b",
        "\u6b3a": "q\u012b",
        "\u6816": "q\u012b",
        "\u621a": "q\u012b",
        "\u59bb": "q\u012b",
        "\u4e03": "q\u012b",
        "\u51c4": "q\u012b",
        "\u6f06": "q\u012b",
        "\u67d2": "q\u012b",
        "\u6c8f": "q\u012b",
        "\u5176": "q\u00ed",
        "\u68cb": "q\u00ed",
        "\u5947": "q\u00ed",
        "\u6b67": "q\u00ed",
        "\u7566": "q\u00ed",
        "\u5d0e": "q\u00ed",
        "\u8110": "q\u00ed",
        "\u9f50": "q\u00ed",
        "\u65d7": "q\u00ed",
        "\u7948": "q\u00ed",
        "\u7941": "q\u00ed",
        "\u9a91": "q\u00ed",
        "\u8d77": "q\u01d0",
        "\u5c82": "q\u01d0",
        "\u4e5e": "q\u01d0",
        "\u4f01": "q\u01d0",
        "\u542f": "q\u01d0",
        "\u5951": "q\u00ec",
        "\u780c": "q\u00ec",
        "\u5668": "q\u00ec",
        "\u6c14": "q\u00ec",
        "\u8fc4": "q\u00ec",
        "\u5f03": "q\u00ec",
        "\u6c7d": "q\u00ec",
        "\u6ce3": "q\u00ec",
        "\u8bab": "q\u00ec",
        "\u6390": "qi\u0101",
        "\u6070": "qi\u00e0",
        "\u6d3d": "qi\u00e0",
        "\u7275": "qi\u0101n",
        "\u6266": "qi\u0101n",
        "\u948e": "qi\u0101n",
        "\u94c5": "qi\u0101n",
        "\u5343": "qi\u0101n",
        "\u8fc1": "qi\u0101n",
        "\u7b7e": "qi\u0101n",
        "\u4edf": "qi\u0101n",
        "\u8c26": "qi\u0101n",
        "\u4e7e": "qi\u00e1n",
        "\u9ed4": "qi\u00e1n",
        "\u94b1": "qi\u00e1n",
        "\u94b3": "qi\u00e1n",
        "\u524d": "qi\u00e1n",
        "\u6f5c": "qi\u00e1n",
        "\u9063": "qi\u01cen",
        "\u6d45": "qi\u01cen",
        "\u8c34": "qi\u01cen",
        "\u5811": "qi\u00e0n",
        "\u5d4c": "qi\u00e0n",
        "\u6b20": "qi\u00e0n",
        "\u6b49": "qi\u00e0n",
        "\u67aa": "qi\u0101ng",
        "\u545b": "qi\u00e0ng",
        "\u8154": "qi\u0101ng",
        "\u7f8c": "qi\u0101ng",
        "\u5899": "qi\u00e1ng",
        "\u8537": "qi\u00e1ng",
        "\u5f3a": "qi\u00e1ng",
        "\u62a2": "qi\u01ceng",
        "\u6a47": "qi\u0101o",
        "\u9539": "qi\u0101o",
        "\u6572": "qi\u0101o",
        "\u6084": "qi\u0101o",
        "\u6865": "qi\u00e1o",
        "\u77a7": "qi\u00e1o",
        "\u4e54": "qi\u00e1o",
        "\u4fa8": "qi\u00e1o",
        "\u5de7": "qi\u01ceo",
        "\u9798": "qi\u00e0o",
        "\u64ac": "qi\u00e0o",
        "\u7fd8": "qi\u00e0o",
        "\u5ced": "qi\u00e0o",
        "\u4fcf": "qi\u00e0o",
        "\u7a8d": "qi\u00e0o",
        "\u5207": "qi\u0113",
        "\u8304": "qi\u00e9",
        "\u4e14": "qi\u011b",
        "\u602f": "qi\u00e8",
        "\u7a83": "qi\u00e8",
        "\u94a6": "q\u012bn",
        "\u4fb5": "q\u012bn",
        "\u4eb2": "q\u012bn",
        "\u79e6": "q\u00edn",
        "\u7434": "q\u00edn",
        "\u52e4": "q\u00edn",
        "\u82b9": "q\u00edn",
        "\u64d2": "q\u00edn",
        "\u79bd": "q\u00edn",
        "\u5bdd": "q\u01d0n",
        "\u6c81": "q\u00ecn",
        "\u9752": "q\u012bng",
        "\u8f7b": "q\u012bng",
        "\u6c22": "q\u012bng",
        "\u503e": "q\u012bng",
        "\u537f": "q\u012bng",
        "\u6e05": "q\u012bng",
        "\u64ce": "q\u00edng",
        "\u6674": "q\u00edng",
        "\u6c30": "q\u00edng",
        "\u60c5": "q\u00edng",
        "\u9877": "q\u01d0ng",
        "\u8bf7": "q\u01d0ng",
        "\u5e86": "q\u00ecng",
        "\u743c": "qi\u00f3ng",
        "\u7a77": "qi\u00f3ng",
        "\u79cb": "qi\u016b",
        "\u4e18": "qi\u016b",
        "\u90b1": "qi\u016b",
        "\u7403": "qi\u00fa",
        "\u6c42": "qi\u00fa",
        "\u56da": "qi\u00fa",
        "\u914b": "qi\u00fa",
        "\u6cc5": "qi\u00fa",
        "\u8d8b": "q\u016b",
        "\u533a": "q\u016b",
        "\u86c6": "q\u016b",
        "\u66f2": "q\u01d4",
        "\u8eaf": "q\u016b",
        "\u5c48": "q\u016b",
        "\u9a71": "q\u016b",
        "\u6e20": "q\u00fa",
        "\u53d6": "q\u01d4",
        "\u5a36": "q\u01d4",
        "\u9f8b": "q\u01d4",
        "\u8da3": "q\u00f9",
        "\u53bb": "q\u00f9",
        "\u5708": "qu\u0101n",
        "\u98a7": "qu\u00e1n",
        "\u6743": "qu\u00e1n",
        "\u919b": "qu\u00e1n",
        "\u6cc9": "qu\u00e1n",
        "\u5168": "qu\u00e1n",
        "\u75ca": "qu\u00e1n",
        "\u62f3": "qu\u00e1n",
        "\u72ac": "qu\u01cen",
        "\u5238": "qu\u00e0n",
        "\u529d": "qu\u00e0n",
        "\u7f3a": "qu\u0113",
        "\u7094": "qu\u0113",
        "\u7638": "qu\u00e9",
        "\u5374": "qu\u00e8",
        "\u9e4a": "qu\u00e8",
        "\u69b7": "qu\u00e8",
        "\u786e": "qu\u00e8",
        "\u96c0": "qu\u00e8",
        "\u88d9": "q\u00fan",
        "\u7fa4": "q\u00fan",
        "\u7136": "r\u00e1n",
        "\u71c3": "r\u00e1n",
        "\u5189": "r\u01cen",
        "\u67d3": "r\u01cen",
        "\u74e4": "r\u00e1ng",
        "\u58e4": "r\u01ceng",
        "\u6518": "r\u01ceng",
        "\u56b7": "r\u01ceng",
        "\u8ba9": "r\u00e0ng",
        "\u9976": "r\u00e1o",
        "\u6270": "r\u01ceo",
        "\u7ed5": "r\u00e0o",
        "\u60f9": "r\u011b",
        "\u70ed": "r\u00e8",
        "\u58ec": "r\u00e9n",
        "\u4ec1": "r\u00e9n",
        "\u4eba": "r\u00e9n",
        "\u5fcd": "r\u011bn",
        "\u97e7": "r\u00e8n",
        "\u4efb": "r\u00e8n",
        "\u8ba4": "r\u00e8n",
        "\u5203": "r\u00e8n",
        "\u598a": "r\u00e8n",
        "\u7eab": "r\u00e8n",
        "\u6254": "r\u0113ng",
        "\u4ecd": "r\u00e9ng",
        "\u65e5": "r\u00ec",
        "\u620e": "r\u00f3ng",
        "\u8338": "r\u00f3ng",
        "\u84c9": "r\u00f3ng",
        "\u8363": "r\u00f3ng",
        "\u878d": "r\u00f3ng",
        "\u7194": "r\u00f3ng",
        "\u6eb6": "r\u00f3ng",
        "\u5bb9": "r\u00f3ng",
        "\u7ed2": "r\u00f3ng",
        "\u5197": "r\u01d2ng",
        "\u63c9": "r\u00f3u",
        "\u67d4": "r\u00f3u",
        "\u8089": "r\u00f2u",
        "\u8339": "r\u00fa",
        "\u8815": "r\u00fa",
        "\u5112": "r\u00fa",
        "\u5b7a": "r\u00fa",
        "\u5982": "r\u00fa",
        "\u8fb1": "r\u01d4",
        "\u4e73": "r\u01d4",
        "\u6c5d": "r\u01d4",
        "\u5165": "r\u00f9",
        "\u8925": "r\u00f9",
        "\u8f6f": "ru\u01cen",
        "\u962e": "ru\u01cen",
        "\u854a": "ru\u01d0",
        "\u745e": "ru\u00ec",
        "\u9510": "ru\u00ec",
        "\u95f0": "r\u00f9n",
        "\u6da6": "r\u00f9n",
        "\u82e5": "ru\u00f2",
        "\u5f31": "ru\u00f2",
        "\u6492": "s\u0101",
        "\u6d12": "s\u01ce",
        "\u8428": "s\u00e0",
        "\u816e": "s\u0101i",
        "\u9cc3": "s\u0101i",
        "\u585e": "s\u0101i",
        "\u8d5b": "s\u00e0i",
        "\u4e09": "s\u0101n",
        "\u53c1": "s\u0101n",
        "\u4f1e": "s\u01cen",
        "\u6563": "s\u00e0n",
        "\u6851": "s\u0101ng",
        "\u55d3": "s\u01ceng",
        "\u4e27": "s\u00e0ng",
        "\u6414": "s\u0101o",
        "\u9a9a": "s\u0101o",
        "\u626b": "s\u01ceo",
        "\u5ac2": "s\u01ceo",
        "\u745f": "s\u00e8",
        "\u8272": "s\u00e8",
        "\u6da9": "s\u00e8",
        "\u68ee": "s\u0113n",
        "\u50e7": "s\u0113ng",
        "\u838e": "sh\u0101",
        "\u7802": "sh\u0101",
        "\u6740": "sh\u0101",
        "\u5239": "sh\u0101",
        "\u6c99": "sh\u0101",
        "\u7eb1": "sh\u0101",
        "\u50bb": "sh\u01ce",
        "\u5565": "sh\u00e1",
        "\u715e": "sh\u00e0",
        "\u7b5b": "sh\u0101i",
        "\u6652": "shai",
        "\u73ca": "sh\u0101n",
        "\u82eb": "sh\u0101n",
        "\u6749": "sh\u0101n",
        "\u5c71": "sh\u0101n",
        "\u5220": "sh\u0101n",
        "\u717d": "sh\u0101n",
        "\u886b": "sh\u0101n",
        "\u95ea": "sh\u01cen",
        "\u9655": "sh\u01cen",
        "\u64c5": "sh\u00e0n",
        "\u8d61": "sh\u00e0n",
        "\u81b3": "sh\u00e0n",
        "\u5584": "sh\u00e0n",
        "\u6c55": "sh\u00e0n",
        "\u6247": "sh\u00e0n",
        "\u7f2e": "sh\u00e0n",
        "\u5892": "sh\u0101ng",
        "\u4f24": "sh\u0101ng",
        "\u5546": "sh\u0101ng",
        "\u8d4f": "sh\u01ceng",
        "\u664c": "sh\u01ceng",
        "\u4e0a": "sh\u00e0ng",
        "\u5c1a": "sh\u00e0ng",
        "\u88f3": "shang",
        "\u68a2": "sh\u0101o",
        "\u634e": "sh\u0101o",
        "\u7a0d": "sh\u0101o",
        "\u70e7": "sh\u0101o",
        "\u828d": "sh\u00e1o",
        "\u52fa": "sh\u00e1o",
        "\u97f6": "sh\u00e1o",
        "\u5c11": "sh\u01ceo",
        "\u54e8": "sh\u00e0o",
        "\u90b5": "sh\u00e0o",
        "\u7ecd": "sh\u00e0o",
        "\u5962": "sh\u0113",
        "\u8d4a": "sh\u0113",
        "\u86c7": "sh\u00e9",
        "\u820c": "sh\u00e9",
        "\u820d": "sh\u011b",
        "\u8d66": "sh\u00e8",
        "\u6444": "sh\u00e8",
        "\u5c04": "sh\u00e8",
        "\u6151": "sh\u00e8",
        "\u6d89": "sh\u00e8",
        "\u793e": "sh\u00e8",
        "\u8bbe": "sh\u00e8",
        "\u7837": "sh\u0113n",
        "\u7533": "sh\u0113n",
        "\u547b": "sh\u0113n",
        "\u4f38": "sh\u0113n",
        "\u8eab": "sh\u0113n",
        "\u6df1": "sh\u0113n",
        "\u5a20": "sh\u0113n",
        "\u7ec5": "sh\u0113n",
        "\u795e": "sh\u00e9n",
        "\u6c88": "sh\u011bn",
        "\u5ba1": "sh\u011bn",
        "\u5a76": "sh\u011bn",
        "\u751a": "sh\u00e8n",
        "\u80be": "sh\u00e8n",
        "\u614e": "sh\u00e8n",
        "\u6e17": "sh\u00e8n",
        "\u58f0": "sh\u0113ng",
        "\u751f": "sh\u0113ng",
        "\u7525": "sh\u0113ng",
        "\u7272": "sh\u0113ng",
        "\u5347": "sh\u0113ng",
        "\u7ef3": "sh\u00e9ng",
        "\u7701": "sh\u011bng",
        "\u76db": "sh\u00e8ng",
        "\u5269": "sh\u00e8ng",
        "\u80dc": "sh\u00e8ng",
        "\u5723": "sh\u00e8ng",
        "\u5e08": "sh\u012b",
        "\u5931": "sh\u012b",
        "\u72ee": "sh\u012b",
        "\u65bd": "sh\u012b",
        "\u6e7f": "sh\u012b",
        "\u8bd7": "sh\u012b",
        "\u5c38": "sh\u012b",
        "\u8671": "sh\u012b",
        "\u5341": "sh\u00ed",
        "\u77f3": "sh\u00ed",
        "\u62fe": "sh\u00ed",
        "\u65f6": "sh\u00ed",
        "\u4ec0": "sh\u00ed",
        "\u98df": "sh\u00ed",
        "\u8680": "sh\u00ed",
        "\u5b9e": "sh\u00ed",
        "\u8bc6": "sh\u00ed",
        "\u53f2": "sh\u01d0",
        "\u77e2": "sh\u01d0",
        "\u4f7f": "sh\u01d0",
        "\u5c4e": "sh\u01d0",
        "\u9a76": "sh\u01d0",
        "\u59cb": "sh\u01d0",
        "\u5f0f": "sh\u00ec",
        "\u793a": "sh\u00ec",
        "\u58eb": "sh\u00ec",
        "\u4e16": "sh\u00ec",
        "\u67ff": "sh\u00ec",
        "\u4e8b": "sh\u00ec",
        "\u62ed": "sh\u00ec",
        "\u8a93": "sh\u00ec",
        "\u901d": "sh\u00ec",
        "\u52bf": "sh\u00ec",
        "\u662f": "sh\u00ec",
        "\u55dc": "sh\u00ec",
        "\u566c": "sh\u00ec",
        "\u9002": "sh\u00ec",
        "\u4ed5": "sh\u00ec",
        "\u4f8d": "sh\u00ec",
        "\u91ca": "sh\u00ec",
        "\u9970": "sh\u00ec",
        "\u6c0f": "sh\u00ec",
        "\u5e02": "sh\u00ec",
        "\u6043": "sh\u00ec",
        "\u5ba4": "sh\u00ec",
        "\u89c6": "sh\u00ec",
        "\u8bd5": "sh\u00ec",
        "\u6536": "sh\u014du",
        "\u624b": "sh\u01d2u",
        "\u9996": "sh\u01d2u",
        "\u5b88": "sh\u01d2u",
        "\u5bff": "sh\u00f2u",
        "\u6388": "sh\u00f2u",
        "\u552e": "sh\u00f2u",
        "\u53d7": "sh\u00f2u",
        "\u7626": "sh\u00f2u",
        "\u517d": "sh\u00f2u",
        "\u852c": "sh\u016b",
        "\u67a2": "sh\u016b",
        "\u68b3": "sh\u016b",
        "\u6b8a": "sh\u016b",
        "\u6292": "sh\u016b",
        "\u8f93": "sh\u016b",
        "\u53d4": "sh\u016b",
        "\u8212": "sh\u016b",
        "\u6dd1": "sh\u016b",
        "\u758f": "sh\u016b",
        "\u4e66": "sh\u016b",
        "\u8d4e": "sh\u00fa",
        "\u5b70": "sh\u00fa",
        "\u719f": "sh\u00fa",
        "\u85af": "sh\u01d4",
        "\u6691": "sh\u01d4",
        "\u66d9": "sh\u01d4",
        "\u7f72": "sh\u01d4",
        "\u8700": "sh\u01d4",
        "\u9ecd": "sh\u01d4",
        "\u9f20": "sh\u01d4",
        "\u5c5e": "sh\u01d4",
        "\u672f": "sh\u00f9",
        "\u8ff0": "sh\u00f9",
        "\u6811": "sh\u00f9",
        "\u675f": "sh\u00f9",
        "\u620d": "sh\u00f9",
        "\u7ad6": "sh\u00f9",
        "\u5885": "sh\u00f9",
        "\u5eb6": "sh\u00f9",
        "\u6570": "sh\u00f9",
        "\u6f31": "sh\u00f9",
        "\u6055": "sh\u00f9",
        "\u5237": "shu\u0101",
        "\u800d": "shu\u01ce",
        "\u6454": "shu\u0101i",
        "\u8870": "shu\u0101i",
        "\u7529": "shu\u01cei",
        "\u5e05": "shu\u00e0i",
        "\u6813": "shu\u0101n",
        "\u62f4": "shu\u0101n",
        "\u971c": "shu\u0101ng",
        "\u53cc": "shu\u0101ng",
        "\u723d": "shu\u01ceng",
        "\u8c01": "shu\u00ed",
        "\u6c34": "shu\u01d0",
        "\u7761": "shu\u00ec",
        "\u7a0e": "shu\u00ec",
        "\u542e": "sh\u01d4n",
        "\u77ac": "sh\u00f9n",
        "\u987a": "sh\u00f9n",
        "\u821c": "sh\u00f9n",
        "\u8bf4": "shu\u014d",
        "\u7855": "shu\u00f2",
        "\u6714": "shu\u00f2",
        "\u70c1": "shu\u00f2",
        "\u65af": "s\u012b",
        "\u6495": "s\u012b",
        "\u5636": "s\u012b",
        "\u601d": "s\u012b",
        "\u79c1": "s\u012b",
        "\u53f8": "s\u012b",
        "\u4e1d": "s\u012b",
        "\u6b7b": "s\u01d0",
        "\u8086": "s\u00ec",
        "\u5bfa": "s\u00ec",
        "\u55e3": "s\u00ec",
        "\u56db": "s\u00ec",
        "\u4f3a": "s\u00ec",
        "\u4f3c": "s\u00ec",
        "\u9972": "s\u00ec",
        "\u5df3": "s\u00ec",
        "\u677e": "s\u014dng",
        "\u8038": "s\u01d2ng",
        "\u6002": "s\u01d2ng",
        "\u9882": "s\u00f2ng",
        "\u9001": "s\u00f2ng",
        "\u5b8b": "s\u00f2ng",
        "\u8bbc": "s\u00f2ng",
        "\u8bf5": "s\u00f2ng",
        "\u641c": "s\u014du",
        "\u8258": "s\u014du",
        "\u64de": "s\u01d2u",
        "\u55fd": "s\u00f2u",
        "\u82cf": "s\u016b",
        "\u9165": "s\u016b",
        "\u4fd7": "s\u00fa",
        "\u7d20": "s\u00f9",
        "\u901f": "s\u00f9",
        "\u7c9f": "s\u00f9",
        "\u50f3": "s\u00f9",
        "\u5851": "s\u00f9",
        "\u6eaf": "s\u00f9",
        "\u5bbf": "xi\u01d4",
        "\u8bc9": "s\u00f9",
        "\u8083": "s\u00f9",
        "\u9178": "su\u0101n",
        "\u849c": "su\u00e0n",
        "\u7b97": "su\u00e0n",
        "\u867d": "su\u012b",
        "\u968b": "su\u00ed",
        "\u968f": "su\u00ed",
        "\u7ee5": "su\u00ed",
        "\u9ad3": "su\u01d0",
        "\u788e": "su\u00ec",
        "\u5c81": "su\u00ec",
        "\u7a57": "su\u00ec",
        "\u9042": "su\u00ed",
        "\u96a7": "su\u00ec",
        "\u795f": "su\u00ec",
        "\u5b59": "s\u016bn",
        "\u635f": "s\u01d4n",
        "\u7b0b": "s\u01d4n",
        "\u84d1": "su\u014d",
        "\u68ad": "su\u014d",
        "\u5506": "su\u014d",
        "\u7f29": "su\u014d",
        "\u7410": "su\u01d2",
        "\u7d22": "su\u01d2",
        "\u9501": "su\u01d2",
        "\u6240": "su\u01d2",
        "\u584c": "t\u0101",
        "\u4ed6": "t\u0101",
        "\u5b83": "t\u0101",
        "\u5979": "t\u0101",
        "\u5854": "t\u01ce",
        "\u736d": "t\u01ce",
        "\u631e": "t\u00e0",
        "\u8e4b": "t\u00e0",
        "\u8e0f": "t\u00e0",
        "\u80ce": "t\u0101i",
        "\u82d4": "t\u00e1i",
        "\u62ac": "t\u00e1i",
        "\u53f0": "t\u00e1i",
        "\u6cf0": "tai",
        "\u915e": "tai",
        "\u592a": "tai",
        "\u6001": "tai",
        "\u6c70": "tai",
        "\u574d": "t\u0101n",
        "\u644a": "t\u0101n",
        "\u8d2a": "t\u0101n",
        "\u762b": "t\u0101n",
        "\u6ee9": "t\u0101n",
        "\u575b": "t\u00e1n",
        "\u6a80": "t\u00e1n",
        "\u75f0": "t\u00e1n",
        "\u6f6d": "t\u00e1n",
        "\u8c2d": "t\u00e1n",
        "\u8c08": "t\u00e1n",
        "\u5766": "t\u01cen",
        "\u6bef": "t\u01cen",
        "\u8892": "t\u01cen",
        "\u78b3": "t\u00e0n",
        "\u63a2": "t\u00e0n",
        "\u53f9": "t\u00e0n",
        "\u70ad": "t\u00e0n",
        "\u6c64": "t\u0101ng",
        "\u5858": "t\u00e1ng",
        "\u642a": "t\u00e1ng",
        "\u5802": "t\u00e1ng",
        "\u68e0": "t\u00e1ng",
        "\u819b": "t\u00e1ng",
        "\u5510": "t\u00e1ng",
        "\u7cd6": "t\u00e1ng",
        "\u5018": "t\u01ceng",
        "\u8eba": "t\u01ceng",
        "\u6dcc": "t\u01ceng",
        "\u8d9f": "t\u00e0ng",
        "\u70eb": "t\u00e0ng",
        "\u638f": "t\u0101o",
        "\u6d9b": "t\u0101o",
        "\u6ed4": "t\u0101o",
        "\u7ee6": "t\u0101o",
        "\u8404": "t\u00e1o",
        "\u6843": "t\u00e1o",
        "\u9003": "t\u00e1o",
        "\u6dd8": "t\u00e1o",
        "\u9676": "t\u00e1o",
        "\u8ba8": "t\u01ceo",
        "\u5957": "t\u00e0o",
        "\u7279": "t\u00e8",
        "\u85e4": "t\u00e9ng",
        "\u817e": "t\u00e9ng",
        "\u75bc": "t\u00e9ng",
        "\u8a8a": "t\u00e9ng",
        "\u68af": "t\u012b",
        "\u5254": "t\u012b",
        "\u8e22": "t\u012b",
        "\u9511": "t\u012b",
        "\u63d0": "t\u00ed",
        "\u9898": "t\u00ed",
        "\u8e44": "t\u00ed",
        "\u557c": "t\u00ed",
        "\u4f53": "t\u01d0",
        "\u66ff": "t\u00ec",
        "\u568f": "t\u00ec",
        "\u60d5": "t\u00ec",
        "\u6d95": "t\u00ec",
        "\u5243": "t\u00ec",
        "\u5c49": "t\u00ec",
        "\u5929": "ti\u0101n",
        "\u6dfb": "ti\u0101n",
        "\u586b": "ti\u00e1n",
        "\u7530": "ti\u00e1n",
        "\u751c": "ti\u00e1n",
        "\u606c": "ti\u00e1n",
        "\u8214": "ti\u01cen",
        "\u8146": "ti\u01cen",
        "\u6311": "ti\u0101o",
        "\u6761": "ti\u00e1o",
        "\u8fe2": "ti\u00e1o",
        "\u773a": "ti\u00e0o",
        "\u8df3": "ti\u00e0o",
        "\u8d34": "ti\u0113",
        "\u94c1": "ti\u011b",
        "\u5e16": "ti\u0113",
        "\u5385": "t\u012bng",
        "\u542c": "t\u012bng",
        "\u70c3": "t\u012bng",
        "\u6c40": "t\u012bng",
        "\u5ef7": "t\u00edng",
        "\u505c": "t\u00edng",
        "\u4ead": "t\u00edng",
        "\u5ead": "t\u00edng",
        "\u633a": "t\u01d0ng",
        "\u8247": "t\u01d0ng",
        "\u901a": "t\u014dng",
        "\u6850": "t\u00f3ng",
        "\u916e": "t\u00f3ng",
        "\u77b3": "t\u00f3ng",
        "\u540c": "t\u00f3ng",
        "\u94dc": "t\u00f3ng",
        "\u5f64": "t\u00f3ng",
        "\u7ae5": "t\u00f3ng",
        "\u6876": "t\u01d2ng",
        "\u6345": "t\u01d2ng",
        "\u7b52": "t\u01d2ng",
        "\u7edf": "t\u01d2ng",
        "\u75db": "t\u00f2ng",
        "\u5077": "t\u014du",
        "\u6295": "t\u00f3u",
        "\u5934": "t\u00f3u",
        "\u900f": "t\u00f2u",
        "\u51f8": "t\u016b",
        "\u79c3": "t\u016b",
        "\u7a81": "t\u016b",
        "\u56fe": "t\u00fa",
        "\u5f92": "t\u00fa",
        "\u9014": "t\u00fa",
        "\u6d82": "t\u00fa",
        "\u5c60": "t\u00fa",
        "\u571f": "t\u01d4",
        "\u5410": "t\u01d4",
        "\u5154": "t\u00f9",
        "\u6e4d": "tu\u0101n",
        "\u56e2": "tu\u00e1n",
        "\u63a8": "tu\u012b",
        "\u9893": "tu\u00ed",
        "\u817f": "tu\u01d0",
        "\u8715": "tu\u00ec",
        "\u892a": "tu\u00ec",
        "\u9000": "tu\u00ec",
        "\u541e": "t\u016bn",
        "\u5c6f": "t\u00fan",
        "\u81c0": "t\u00fan",
        "\u62d6": "tu\u014d",
        "\u6258": "tu\u014d",
        "\u8131": "tu\u014d",
        "\u9e35": "tu\u00f3",
        "\u9640": "tu\u00f3",
        "\u9a6e": "tu\u00f3",
        "\u9a7c": "tu\u00f3",
        "\u692d": "tu\u01d2",
        "\u59a5": "tu\u01d2",
        "\u62d3": "tu\u00f2",
        "\u553e": "tu\u00f2",
        "\u6316": "w\u0101",
        "\u54c7": "wa",
        "\u86d9": "w\u0101",
        "\u6d3c": "w\u0101",
        "\u5a03": "w\u00e1",
        "\u74e6": "w\u01ce",
        "\u889c": "w\u00e0",
        "\u6b6a": "w\u0101i",
        "\u5916": "wai",
        "\u8c4c": "w\u0101n",
        "\u5f2f": "w\u0101n",
        "\u6e7e": "w\u0101n",
        "\u73a9": "w\u00e1n",
        "\u987d": "w\u00e1n",
        "\u4e38": "w\u00e1n",
        "\u70f7": "w\u00e1n",
        "\u5b8c": "w\u00e1n",
        "\u7897": "w\u01cen",
        "\u633d": "w\u01cen",
        "\u665a": "w\u01cen",
        "\u7696": "w\u01cen",
        "\u60cb": "w\u01cen",
        "\u5b9b": "w\u01cen",
        "\u5a49": "w\u01cen",
        "\u4e07": "w\u00e0n",
        "\u8155": "w\u00e0n",
        "\u6c6a": "w\u0101ng",
        "\u738b": "w\u00e1ng",
        "\u4ea1": "w\u00e1ng",
        "\u6789": "w\u01ceng",
        "\u7f51": "w\u01ceng",
        "\u5f80": "w\u01ceng",
        "\u65fa": "w\u00e0ng",
        "\u671b": "w\u00e0ng",
        "\u5fd8": "w\u00e0ng",
        "\u5984": "w\u00e0ng",
        "\u5a01": "w\u0113i",
        "\u5dcd": "w\u0113i",
        "\u5fae": "w\u0113i",
        "\u5371": "w\u0113i",
        "\u97e6": "w\u00e9i",
        "\u8fdd": "w\u00e9i",
        "\u6845": "w\u00e9i",
        "\u56f4": "w\u00e9i",
        "\u552f": "w\u00e9i",
        "\u60df": "w\u00e9i",
        "\u4e3a": "w\u00e9i",
        "\u6f4d": "w\u00e9i",
        "\u7ef4": "w\u00e9i",
        "\u82c7": "w\u011bi",
        "\u840e": "w\u011bi",
        "\u59d4": "w\u011bi",
        "\u4f1f": "w\u011bi",
        "\u4f2a": "w\u011bi",
        "\u5c3e": "w\u011bi",
        "\u7eac": "w\u011bi",
        "\u672a": "w\u00e8i",
        "\u851a": "w\u00e8i",
        "\u5473": "w\u00e8i",
        "\u754f": "w\u00e8i",
        "\u80c3": "w\u00e8i",
        "\u5582": "w\u00e8i",
        "\u9b4f": "w\u00e8i",
        "\u4f4d": "w\u00e8i",
        "\u6e2d": "w\u00e8i",
        "\u8c13": "w\u00e8i",
        "\u5c09": "w\u00e8i",
        "\u6170": "w\u00e8i",
        "\u536b": "w\u00e8i",
        "\u761f": "w\u0113n",
        "\u6e29": "w\u0113n",
        "\u868a": "w\u00e9n",
        "\u6587": "w\u00e9n",
        "\u95fb": "w\u00e9n",
        "\u7eb9": "w\u00e9n",
        "\u543b": "w\u011bn",
        "\u7a33": "w\u011bn",
        "\u7d0a": "w\u011bn",
        "\u95ee": "w\u00e8n",
        "\u55e1": "w\u0113ng",
        "\u7fc1": "w\u0113ng",
        "\u74ee": "w\u00e8ng",
        "\u631d": "w\u014d",
        "\u8717": "w\u014d",
        "\u6da1": "w\u014d",
        "\u7a9d": "w\u014d",
        "\u6211": "w\u01d2",
        "\u65a1": "w\u00f2",
        "\u5367": "w\u00f2",
        "\u63e1": "w\u00f2",
        "\u6c83": "w\u00f2",
        "\u5deb": "w\u016b",
        "\u545c": "w\u016b",
        "\u94a8": "w\u016b",
        "\u4e4c": "w\u016b",
        "\u6c61": "w\u016b",
        "\u8bec": "w\u016b",
        "\u5c4b": "w\u016b",
        "\u65e0": "w\u00fa",
        "\u829c": "w\u00fa",
        "\u68a7": "w\u00fa",
        "\u543e": "w\u00fa",
        "\u5434": "w\u00fa",
        "\u6bcb": "w\u00fa",
        "\u6b66": "w\u01d4",
        "\u4e94": "w\u01d4",
        "\u6342": "w\u01d4",
        "\u5348": "w\u01d4",
        "\u821e": "w\u01d4",
        "\u4f0d": "w\u01d4",
        "\u4fae": "w\u01d4",
        "\u575e": "w\u00f9",
        "\u620a": "w\u00f9",
        "\u96fe": "w\u00f9",
        "\u6664": "w\u00f9",
        "\u7269": "w\u00f9",
        "\u52ff": "w\u00f9",
        "\u52a1": "w\u00f9",
        "\u609f": "w\u00f9",
        "\u8bef": "w\u00f9",
        "\u6614": "x\u012b",
        "\u7199": "x\u012b",
        "\u6790": "x\u012b",
        "\u897f": "x\u012b",
        "\u7852": "x\u012b",
        "\u77fd": "x\u012b",
        "\u6670": "x\u012b",
        "\u563b": "x\u012b",
        "\u5438": "x\u012b",
        "\u9521": "x\u012b",
        "\u727a": "x\u012b",
        "\u7a00": "x\u012b",
        "\u606f": "x\u012b",
        "\u5e0c": "x\u012b",
        "\u6089": "x\u012b",
        "\u819d": "x\u012b",
        "\u5915": "x\u012b",
        "\u60dc": "x\u012b",
        "\u7184": "x\u012b",
        "\u70ef": "x\u012b",
        "\u6eaa": "x\u012b",
        "\u6c50": "x\u012b",
        "\u7280": "x\u012b",
        "\u6a84": "x\u00ed",
        "\u88ad": "x\u00ed",
        "\u5e2d": "x\u00ed",
        "\u4e60": "x\u00ed",
        "\u5ab3": "x\u00ed",
        "\u559c": "x\u01d0",
        "\u94e3": "x\u01d0",
        "\u6d17": "x\u01d0",
        "\u7cfb": "x\u00ec",
        "\u9699": "x\u00ec",
        "\u620f": "x\u00ec",
        "\u7ec6": "x\u00ec",
        "\u778e": "xi\u0101",
        "\u867e": "xi\u0101",
        "\u5323": "xi\u00e1",
        "\u971e": "xi\u00e1",
        "\u8f96": "xi\u00e1",
        "\u6687": "xi\u00e1",
        "\u5ce1": "xi\u00e1",
        "\u4fa0": "xi\u00e1",
        "\u72ed": "xi\u00e1",
        "\u4e0b": "xi\u00e0",
        "\u53a6": "sh\u00e0",
        "\u590f": "xi\u00e0",
        "\u5413": "xi\u00e0",
        "\u6380": "xi\u0101n",
        "\u9528": "xi\u0101n",
        "\u5148": "xi\u0101n",
        "\u4ed9": "xi\u0101n",
        "\u9c9c": "xi\u0101n",
        "\u7ea4": "xi\u0101n",
        "\u54b8": "xi\u00e1n",
        "\u8d24": "xi\u00e1n",
        "\u8854": "xi\u00e1n",
        "\u8237": "xi\u00e1n",
        "\u95f2": "xi\u00e1n",
        "\u6d8e": "xi\u00e1n",
        "\u5f26": "xi\u00e1n",
        "\u5acc": "xi\u00e1n",
        "\u663e": "xi\u01cen",
        "\u9669": "xi\u01cen",
        "\u73b0": "xi\u00e0n",
        "\u732e": "xi\u00e0n",
        "\u53bf": "xi\u00e0n",
        "\u817a": "xi\u00e0n",
        "\u9985": "xi\u00e0n",
        "\u7fa1": "xi\u00e0n",
        "\u5baa": "xi\u00e0n",
        "\u9677": "xi\u00e0n",
        "\u9650": "xi\u00e0n",
        "\u7ebf": "xi\u00e0n",
        "\u76f8": "xi\u0101ng",
        "\u53a2": "xi\u0101ng",
        "\u9576": "xi\u0101ng",
        "\u9999": "xi\u0101ng",
        "\u7bb1": "xi\u0101ng",
        "\u8944": "xi\u0101ng",
        "\u6e58": "xi\u0101ng",
        "\u4e61": "xi\u0101ng",
        "\u7fd4": "xi\u00e1ng",
        "\u7965": "xi\u00e1ng",
        "\u8be6": "xi\u00e1ng",
        "\u60f3": "xi\u01ceng",
        "\u54cd": "xi\u01ceng",
        "\u4eab": "xi\u01ceng",
        "\u9879": "xi\u00e0ng",
        "\u5df7": "xi\u00e0ng",
        "\u6a61": "xi\u00e0ng",
        "\u50cf": "xi\u00e0ng",
        "\u5411": "xi\u00e0ng",
        "\u8c61": "xi\u00e0ng",
        "\u8427": "xi\u0101o",
        "\u785d": "xi\u0101o",
        "\u9704": "xi\u0101o",
        "\u524a": "xu\u0113",
        "\u54ee": "xi\u0101o",
        "\u56a3": "xi\u0101o",
        "\u9500": "xi\u0101o",
        "\u6d88": "xi\u0101o",
        "\u5bb5": "xi\u0101o",
        "\u6dc6": "xi\u00e1o",
        "\u6653": "xi\u01ceo",
        "\u5c0f": "xi\u01ceo",
        "\u5b5d": "xi\u00e0o",
        "\u6821": "xi\u00e0o",
        "\u8096": "xi\u0101o",
        "\u5578": "xi\u00e0o",
        "\u7b11": "xi\u00e0o",
        "\u6548": "xi\u00e0o",
        "\u6954": "xi\u0113",
        "\u4e9b": "xi\u0113",
        "\u6b47": "xi\u0113",
        "\u874e": "xi\u0113",
        "\u978b": "xi\u00e9",
        "\u534f": "xi\u00e9",
        "\u631f": "xi\u0101",
        "\u643a": "xi\u00e9",
        "\u90aa": "xi\u00e9",
        "\u659c": "xi\u00e9",
        "\u80c1": "xi\u00e9",
        "\u8c10": "xi\u00e9",
        "\u5199": "xi\u011b",
        "\u68b0": "xi\u00e8",
        "\u5378": "xi\u00e8",
        "\u87f9": "xi\u00e8",
        "\u61c8": "xi\u00e8",
        "\u6cc4": "xi\u00e8",
        "\u6cfb": "xi\u00e8",
        "\u8c22": "xi\u00e8",
        "\u5c51": "xi\u00e8",
        "\u85aa": "x\u012bn",
        "\u82af": "x\u012bn",
        "\u950c": "x\u012bn",
        "\u6b23": "x\u012bn",
        "\u8f9b": "x\u012bn",
        "\u65b0": "x\u012bn",
        "\u5ffb": "x\u012bn",
        "\u5fc3": "x\u012bn",
        "\u4fe1": "x\u00ecn",
        "\u8845": "x\u00ecn",
        "\u661f": "x\u012bng",
        "\u8165": "x\u012bng",
        "\u7329": "x\u012bng",
        "\u60fa": "x\u012bng",
        "\u5174": "x\u012bng",
        "\u5211": "x\u00edng",
        "\u578b": "x\u00edng",
        "\u5f62": "x\u00edng",
        "\u90a2": "x\u00edng",
        "\u884c": "x\u00edng",
        "\u9192": "x\u01d0ng",
        "\u5e78": "x\u00ecng",
        "\u674f": "x\u00ecng",
        "\u6027": "x\u00ecng",
        "\u59d3": "x\u00ecng",
        "\u5144": "xi\u014dng",
        "\u51f6": "xi\u014dng",
        "\u80f8": "xi\u014dng",
        "\u5308": "xi\u014dng",
        "\u6c79": "xi\u014dng",
        "\u96c4": "xi\u00f3ng",
        "\u718a": "xi\u00f3ng",
        "\u4f11": "xi\u016b",
        "\u4fee": "xi\u016b",
        "\u7f9e": "xi\u016b",
        "\u673d": "xi\u01d4",
        "\u55c5": "xi\u00f9",
        "\u9508": "xi\u00f9",
        "\u79c0": "xi\u00f9",
        "\u8896": "xi\u00f9",
        "\u7ee3": "xi\u00f9",
        "\u589f": "x\u016b",
        "\u620c": "x\u016b",
        "\u9700": "x\u016b",
        "\u865a": "x\u016b",
        "\u5618": "x\u016b",
        "\u987b": "x\u016b",
        "\u5f90": "x\u00fa",
        "\u8bb8": "x\u01d4",
        "\u84c4": "x\u00f9",
        "\u9157": "x\u00f9",
        "\u53d9": "x\u00f9",
        "\u65ed": "x\u00f9",
        "\u5e8f": "x\u00f9",
        "\u755c": "ch\u00f9",
        "\u6064": "x\u00f9",
        "\u7d6e": "x\u00f9",
        "\u5a7f": "x\u00f9",
        "\u7eea": "x\u00f9",
        "\u7eed": "x\u00f9",
        "\u8f69": "xu\u0101n",
        "\u55a7": "xu\u0101n",
        "\u5ba3": "xu\u0101n",
        "\u60ac": "xu\u00e1n",
        "\u65cb": "xu\u00e1n",
        "\u7384": "xu\u00e1n",
        "\u9009": "xu\u01cen",
        "\u7663": "xu\u01cen",
        "\u7729": "xu\u00e0n",
        "\u7eda": "xu\u00e0n",
        "\u9774": "xu\u0113",
        "\u859b": "xu\u0113",
        "\u5b66": "xu\u00e9",
        "\u7a74": "xu\u00e9",
        "\u96ea": "xu\u011b",
        "\u8840": "xu\u00e8",
        "\u52cb": "x\u016bn",
        "\u718f": "x\u016bn",
        "\u5faa": "x\u00fan",
        "\u65ec": "x\u00fan",
        "\u8be2": "x\u00fan",
        "\u5bfb": "x\u00fan",
        "\u9a6f": "x\u00f9n",
        "\u5de1": "x\u00fan",
        "\u6b89": "x\u00f9n",
        "\u6c5b": "x\u00f9n",
        "\u8bad": "x\u00f9n",
        "\u8baf": "x\u00f9n",
        "\u900a": "x\u00f9n",
        "\u8fc5": "x\u00f9n",
        "\u538b": "y\u0101",
        "\u62bc": "y\u0101",
        "\u9e26": "y\u0101",
        "\u9e2d": "y\u0101",
        "\u5440": "ya",
        "\u4e2b": "y\u0101",
        "\u82bd": "y\u00e1",
        "\u7259": "y\u00e1",
        "\u869c": "y\u00e1",
        "\u5d16": "y\u00e1",
        "\u8859": "y\u00e1",
        "\u6daf": "y\u00e1",
        "\u96c5": "y\u01ce",
        "\u54d1": "y\u01ce",
        "\u4e9a": "y\u00e0",
        "\u8bb6": "y\u00e0",
        "\u7109": "y\u0101n",
        "\u54bd": "y\u0101n",
        "\u9609": "y\u0101n",
        "\u70df": "y\u0101n",
        "\u6df9": "y\u0101n",
        "\u76d0": "y\u00e1n",
        "\u4e25": "y\u00e1n",
        "\u7814": "y\u00e1n",
        "\u8712": "y\u00e1n",
        "\u5ca9": "y\u00e1n",
        "\u5ef6": "y\u00e1n",
        "\u8a00": "y\u00e1n",
        "\u989c": "y\u00e1n",
        "\u960e": "y\u00e1n",
        "\u708e": "y\u00e1n",
        "\u6cbf": "y\u00e1n",
        "\u5944": "y\u01cen",
        "\u63a9": "y\u01cen",
        "\u773c": "y\u01cen",
        "\u884d": "y\u01cen",
        "\u6f14": "y\u01cen",
        "\u8273": "y\u00e0n",
        "\u5830": "y\u00e0n",
        "\u71d5": "y\u00e0n",
        "\u538c": "y\u00e0n",
        "\u781a": "y\u00e0n",
        "\u96c1": "y\u00e0n",
        "\u5501": "y\u00e0n",
        "\u5f66": "y\u00e0n",
        "\u7130": "y\u00e0n",
        "\u5bb4": "y\u00e0n",
        "\u8c1a": "y\u00e0n",
        "\u9a8c": "y\u00e0n",
        "\u6b83": "y\u0101ng",
        "\u592e": "y\u0101ng",
        "\u9e2f": "y\u0101ng",
        "\u79e7": "y\u0101ng",
        "\u6768": "y\u00e1ng",
        "\u626c": "y\u00e1ng",
        "\u4f6f": "y\u00e1ng",
        "\u75a1": "y\u00e1ng",
        "\u7f8a": "y\u00e1ng",
        "\u6d0b": "y\u00e1ng",
        "\u9633": "y\u00e1ng",
        "\u6c27": "y\u01ceng",
        "\u4ef0": "y\u01ceng",
        "\u75d2": "y\u01ceng",
        "\u517b": "y\u01ceng",
        "\u6837": "y\u00e0ng",
        "\u6f3e": "y\u00e0ng",
        "\u9080": "y\u0101o",
        "\u8170": "y\u0101o",
        "\u5996": "y\u0101o",
        "\u7476": "y\u00e1o",
        "\u6447": "y\u00e1o",
        "\u5c27": "y\u00e1o",
        "\u9065": "y\u00e1o",
        "\u7a91": "y\u00e1o",
        "\u8c23": "y\u00e1o",
        "\u59da": "y\u00e1o",
        "\u54ac": "y\u01ceo",
        "\u8200": "y\u01ceo",
        "\u836f": "y\u00e0o",
        "\u8981": "y\u00e0o",
        "\u8000": "y\u00e0o",
        "\u6930": "y\u0113",
        "\u564e": "y\u0113",
        "\u8036": "y\u0113",
        "\u7237": "y\u00e9",
        "\u91ce": "y\u011b",
        "\u51b6": "y\u011b",
        "\u4e5f": "y\u011b",
        "\u9875": "y\u00e8",
        "\u6396": "y\u00e8",
        "\u4e1a": "y\u00e8",
        "\u53f6": "y\u00e8",
        "\u66f3": "y\u00e8",
        "\u814b": "y\u00e8",
        "\u591c": "y\u00e8",
        "\u6db2": "y\u00e8",
        "\u4e00": "y\u012b",
        "\u58f9": "y\u012b",
        "\u533b": "y\u012b",
        "\u63d6": "y\u012b",
        "\u94f1": "y\u012b",
        "\u4f9d": "y\u012b",
        "\u4f0a": "y\u012b",
        "\u8863": "y\u012b",
        "\u9890": "y\u00ed",
        "\u5937": "y\u00ed",
        "\u9057": "y\u00ed",
        "\u79fb": "y\u00ed",
        "\u4eea": "y\u00ed",
        "\u80f0": "y\u00ed",
        "\u7591": "y\u00ed",
        "\u6c82": "y\u00ed",
        "\u5b9c": "y\u00ed",
        "\u59e8": "y\u00ed",
        "\u5f5d": "y\u00ed",
        "\u6905": "y\u01d0",
        "\u8681": "y\u01d0",
        "\u501a": "y\u01d0",
        "\u5df2": "y\u01d0",
        "\u4e59": "y\u01d0",
        "\u77e3": "y\u01d0",
        "\u4ee5": "y\u01d0",
        "\u827a": "y\u00ec",
        "\u6291": "y\u00ec",
        "\u6613": "y\u00ec",
        "\u9091": "y\u00ec",
        "\u5c79": "y\u00ec",
        "\u4ebf": "y\u00ec",
        "\u5f79": "y\u00ec",
        "\u81c6": "y\u00ec",
        "\u9038": "y\u00ec",
        "\u8084": "y\u00ec",
        "\u75ab": "y\u00ec",
        "\u4ea6": "y\u00ec",
        "\u88d4": "y\u00ec",
        "\u610f": "y\u00ec",
        "\u6bc5": "y\u00ec",
        "\u5fc6": "y\u00ec",
        "\u4e49": "y\u00ec",
        "\u76ca": "y\u00ec",
        "\u6ea2": "y\u00ec",
        "\u8be3": "y\u00ec",
        "\u8bae": "y\u00ec",
        "\u8c0a": "y\u00ec",
        "\u8bd1": "y\u00ec",
        "\u5f02": "y\u00ec",
        "\u7ffc": "y\u00ec",
        "\u7fcc": "y\u00ec",
        "\u7ece": "y\u00ec",
        "\u8335": "y\u012bn",
        "\u836b": "y\u012bn",
        "\u56e0": "y\u012bn",
        "\u6bb7": "y\u012bn",
        "\u97f3": "y\u012bn",
        "\u9634": "y\u012bn",
        "\u59fb": "y\u012bn",
        "\u541f": "y\u00edn",
        "\u94f6": "y\u00edn",
        "\u6deb": "y\u00edn",
        "\u5bc5": "y\u00edn",
        "\u996e": "y\u01d0n",
        "\u5c39": "y\u01d0n",
        "\u5f15": "y\u01d0n",
        "\u9690": "y\u01d0n",
        "\u5370": "y\u00ecn",
        "\u82f1": "y\u012bng",
        "\u6a31": "y\u012bng",
        "\u5a74": "y\u012bng",
        "\u9e70": "y\u012bng",
        "\u5e94": "y\u012bng",
        "\u7f28": "y\u012bng",
        "\u83b9": "y\u00edng",
        "\u8424": "y\u00edng",
        "\u8425": "y\u00edng",
        "\u8367": "y\u00edng",
        "\u8747": "y\u00edng",
        "\u8fce": "y\u00edng",
        "\u8d62": "y\u00edng",
        "\u76c8": "y\u00edng",
        "\u5f71": "y\u01d0ng",
        "\u9896": "y\u01d0ng",
        "\u786c": "y\u00ecng",
        "\u6620": "y\u00ecng",
        "\u54df": "y\u014d",
        "\u62e5": "y\u014dng",
        "\u4f63": "y\u00f2ng",
        "\u81c3": "y\u014dng",
        "\u75c8": "y\u014dng",
        "\u5eb8": "y\u014dng",
        "\u96cd": "y\u014dng",
        "\u8e0a": "y\u01d2ng",
        "\u86f9": "y\u01d2ng",
        "\u548f": "y\u01d2ng",
        "\u6cf3": "y\u01d2ng",
        "\u6d8c": "y\u01d2ng",
        "\u6c38": "y\u01d2ng",
        "\u607f": "y\u01d2ng",
        "\u52c7": "y\u01d2ng",
        "\u7528": "y\u00f2ng",
        "\u5e7d": "y\u014du",
        "\u4f18": "y\u014du",
        "\u60a0": "y\u014du",
        "\u5fe7": "y\u014du",
        "\u5c24": "y\u00f3u",
        "\u7531": "y\u00f3u",
        "\u90ae": "y\u00f3u",
        "\u94c0": "y\u00f3u",
        "\u72b9": "y\u00f3u",
        "\u6cb9": "y\u00f3u",
        "\u6e38": "y\u00f3u",
        "\u9149": "y\u01d2u",
        "\u6709": "y\u01d2u",
        "\u53cb": "y\u01d2u",
        "\u53f3": "y\u00f2u",
        "\u4f51": "y\u00f2u",
        "\u91c9": "y\u00f2u",
        "\u8bf1": "y\u00f2u",
        "\u53c8": "y\u00f2u",
        "\u5e7c": "y\u00f2u",
        "\u8fc2": "y\u016b",
        "\u6de4": "y\u016b",
        "\u4e8e": "y\u00fa",
        "\u76c2": "y\u00fa",
        "\u6986": "y\u00fa",
        "\u865e": "y\u00fa",
        "\u611a": "y\u00fa",
        "\u8206": "y\u00fa",
        "\u4f59": "y\u00fa",
        "\u4fde": "y\u00fa",
        "\u903e": "y\u00fa",
        "\u9c7c": "y\u00fa",
        "\u6109": "y\u00fa",
        "\u6e1d": "y\u00fa",
        "\u6e14": "y\u00fa",
        "\u9685": "y\u00fa",
        "\u4e88": "y\u01d4",
        "\u5a31": "y\u00fa",
        "\u96e8": "y\u01d4",
        "\u4e0e": "y\u01d4",
        "\u5c7f": "y\u01d4",
        "\u79b9": "y\u01d4",
        "\u5b87": "y\u01d4",
        "\u8bed": "y\u01d4",
        "\u7fbd": "y\u01d4",
        "\u7389": "y\u00f9",
        "\u57df": "y\u00f9",
        "\u828b": "y\u00f9",
        "\u90c1": "y\u00f9",
        "\u5401": "y\u00f9",
        "\u9047": "y\u00f9",
        "\u55bb": "y\u00f9",
        "\u5cea": "y\u00f9",
        "\u5fa1": "y\u00f9",
        "\u6108": "y\u00f9",
        "\u6b32": "y\u00f9",
        "\u72f1": "y\u00f9",
        "\u80b2": "y\u00f9",
        "\u8a89": "y\u00f9",
        "\u6d74": "y\u00f9",
        "\u5bd3": "y\u00f9",
        "\u88d5": "y\u00f9",
        "\u9884": "y\u00f9",
        "\u8c6b": "y\u00f9",
        "\u9a6d": "y\u00f9",
        "\u9e33": "yu\u0101n",
        "\u6e0a": "yu\u0101n",
        "\u51a4": "yu\u0101n",
        "\u5143": "yu\u00e1n",
        "\u57a3": "yu\u00e1n",
        "\u8881": "yu\u00e1n",
        "\u539f": "yu\u00e1n",
        "\u63f4": "yu\u00e1n",
        "\u8f95": "yu\u00e1n",
        "\u56ed": "yu\u00e1n",
        "\u5458": "yu\u00e1n",
        "\u5706": "yu\u00e1n",
        "\u733f": "yu\u00e1n",
        "\u6e90": "yu\u00e1n",
        "\u7f18": "yu\u00e1n",
        "\u8fdc": "yu\u01cen",
        "\u82d1": "yu\u00e0n",
        "\u613f": "yu\u00e0n",
        "\u6028": "yu\u00e0n",
        "\u9662": "yu\u00e0n",
        "\u66f0": "yu\u0113",
        "\u7ea6": "yu\u0113",
        "\u8d8a": "yu\u00e8",
        "\u8dc3": "yu\u00e8",
        "\u94a5": "y\u00e0o",
        "\u5cb3": "yu\u00e8",
        "\u7ca4": "yu\u00e8",
        "\u6708": "yu\u00e8",
        "\u60a6": "yu\u00e8",
        "\u9605": "yu\u00e8",
        "\u8018": "y\u00fan",
        "\u4e91": "y\u00fan",
        "\u90e7": "y\u00fan",
        "\u5300": "y\u00fan",
        "\u9668": "y\u01d4n",
        "\u5141": "y\u01d4n",
        "\u8fd0": "y\u00f9n",
        "\u8574": "y\u00f9n",
        "\u915d": "y\u00f9n",
        "\u6655": "y\u016bn",
        "\u97f5": "y\u00f9n",
        "\u5b55": "y\u00f9n",
        "\u531d": "z\u0101",
        "\u7838": "z\u00e1",
        "\u6742": "z\u00e1",
        "\u683d": "z\u0101i",
        "\u54c9": "z\u0101i",
        "\u707e": "z\u0101i",
        "\u5bb0": "z\u01cei",
        "\u8f7d": "z\u01cei",
        "\u518d": "z\u00e0i",
        "\u5728": "z\u00e0i",
        "\u54b1": "z\u00e1n",
        "\u6512": "z\u01cen",
        "\u6682": "z\u00e0n",
        "\u8d5e": "z\u00e0n",
        "\u8d43": "z\u0101ng",
        "\u810f": "z\u0101ng",
        "\u846c": "z\u00e0ng",
        "\u906d": "z\u0101o",
        "\u7cdf": "z\u0101o",
        "\u51ff": "z\u00e1o",
        "\u85fb": "z\u01ceo",
        "\u67a3": "z\u01ceo",
        "\u65e9": "z\u01ceo",
        "\u6fa1": "z\u01ceo",
        "\u86a4": "z\u01ceo",
        "\u8e81": "z\u00e0o",
        "\u566a": "z\u00e0o",
        "\u9020": "z\u00e0o",
        "\u7682": "z\u00e0o",
        "\u7076": "z\u00e0o",
        "\u71e5": "z\u00e0o",
        "\u8d23": "z\u00e9",
        "\u62e9": "z\u00e9",
        "\u5219": "z\u00e9",
        "\u6cfd": "z\u00e9",
        "\u8d3c": "z\u00e9i",
        "\u600e": "z\u011bn",
        "\u589e": "z\u0113ng",
        "\u618e": "z\u0113ng",
        "\u66fe": "c\u00e9ng",
        "\u8d60": "z\u00e8ng",
        "\u624e": "zh\u0101",
        "\u55b3": "zh\u0101",
        "\u6e23": "zh\u0101",
        "\u672d": "zh\u00e1",
        "\u8f67": "zh\u00e1",
        "\u94e1": "zh\u00e1",
        "\u95f8": "zh\u00e1",
        "\u7728": "zh\u01ce",
        "\u6805": "sh\u0101n",
        "\u69a8": "zh\u00e0",
        "\u548b": "z\u01ce",
        "\u4e4d": "zh\u00e0",
        "\u70b8": "zh\u00e0",
        "\u8bc8": "zh\u00e0",
        "\u6458": "zh\u0101i",
        "\u658b": "zh\u0101i",
        "\u5b85": "zh\u00e1i",
        "\u7a84": "zh\u01cei",
        "\u503a": "zhai",
        "\u5be8": "zhai",
        "\u77bb": "zh\u0101n",
        "\u6be1": "zh\u0101n",
        "\u8a79": "zh\u0101n",
        "\u7c98": "zh\u0101n",
        "\u6cbe": "zh\u0101n",
        "\u76cf": "zh\u01cen",
        "\u65a9": "zh\u01cen",
        "\u8f97": "ni\u01cen",
        "\u5d2d": "zh\u01cen",
        "\u5c55": "zh\u01cen",
        "\u8638": "zh\u00e0n",
        "\u6808": "zh\u00e0n",
        "\u5360": "zh\u00e0n",
        "\u6218": "zh\u00e0n",
        "\u7ad9": "zh\u00e0n",
        "\u6e5b": "zh\u00e0n",
        "\u7efd": "zh\u00e0n",
        "\u6a1f": "zh\u0101ng",
        "\u7ae0": "zh\u0101ng",
        "\u5f70": "zh\u0101ng",
        "\u6f33": "zh\u0101ng",
        "\u5f20": "zh\u0101ng",
        "\u638c": "zh\u01ceng",
        "\u6da8": "zh\u01ceng",
        "\u6756": "zh\u00e0ng",
        "\u4e08": "zh\u00e0ng",
        "\u5e10": "zh\u00e0ng",
        "\u8d26": "zh\u00e0ng",
        "\u4ed7": "zh\u00e0ng",
        "\u80c0": "zh\u00e0ng",
        "\u7634": "zh\u00e0ng",
        "\u969c": "zh\u00e0ng",
        "\u62db": "zh\u0101o",
        "\u662d": "zh\u0101o",
        "\u627e": "zh\u01ceo",
        "\u6cbc": "zh\u01ceo",
        "\u8d75": "zh\u00e0o",
        "\u7167": "zh\u00e0o",
        "\u7f69": "zh\u00e0o",
        "\u5146": "zh\u00e0o",
        "\u8087": "zh\u00e0o",
        "\u53ec": "zh\u00e0o",
        "\u906e": "zh\u0113",
        "\u6298": "sh\u00e9",
        "\u54f2": "zh\u00e9",
        "\u86f0": "zh\u00e9",
        "\u8f99": "zh\u00e9",
        "\u8005": "zh\u011b",
        "\u9517": "zh\u011b",
        "\u8517": "zh\u00e8",
        "\u8fd9": "zh\u00e8",
        "\u6d59": "zh\u00e8",
        "\u73cd": "zh\u0113n",
        "\u659f": "zh\u0113n",
        "\u771f": "zh\u0113n",
        "\u7504": "zh\u0113n",
        "\u7827": "zh\u0113n",
        "\u81fb": "zh\u0113n",
        "\u8d1e": "zh\u0113n",
        "\u9488": "zh\u0113n",
        "\u4fa6": "zh\u0113n",
        "\u6795": "zh\u011bn",
        "\u75b9": "zh\u011bn",
        "\u8bca": "zh\u011bn",
        "\u9707": "zh\u00e8n",
        "\u632f": "zh\u00e8n",
        "\u9547": "zh\u00e8n",
        "\u9635": "zh\u00e8n",
        "\u84b8": "zh\u0113ng",
        "\u6323": "zh\u00e8ng",
        "\u7741": "zh\u0113ng",
        "\u5f81": "zh\u0113ng",
        "\u72f0": "zh\u0113ng",
        "\u4e89": "zh\u0113ng",
        "\u6014": "zh\u0113ng",
        "\u6574": "zh\u011bng",
        "\u62ef": "zh\u011bng",
        "\u6b63": "zh\u00e8ng",
        "\u653f": "zh\u00e8ng",
        "\u5e27": "zh\u0113n",
        "\u75c7": "zh\u00e8ng",
        "\u90d1": "zh\u00e8ng",
        "\u8bc1": "zh\u00e8ng",
        "\u829d": "zh\u012b",
        "\u679d": "zh\u012b",
        "\u652f": "zh\u012b",
        "\u5431": "z\u012b",
        "\u8718": "zh\u012b",
        "\u77e5": "zh\u012b",
        "\u80a2": "zh\u012b",
        "\u8102": "zh\u012b",
        "\u6c41": "zh\u012b",
        "\u4e4b": "zh\u012b",
        "\u7ec7": "zh\u012b",
        "\u804c": "zh\u00ed",
        "\u76f4": "zh\u00ed",
        "\u690d": "zh\u00ed",
        "\u6b96": "zh\u00ed",
        "\u6267": "zh\u00ed",
        "\u503c": "zh\u00ed",
        "\u4f84": "zh\u00ed",
        "\u5740": "zh\u01d0",
        "\u6307": "zh\u01d0",
        "\u6b62": "zh\u01d0",
        "\u8dbe": "zh\u01d0",
        "\u53ea": "zh\u012b",
        "\u65e8": "zh\u01d0",
        "\u7eb8": "zh\u01d0",
        "\u5fd7": "zh\u00ec",
        "\u631a": "zh\u00ec",
        "\u63b7": "zh\u00ec",
        "\u81f3": "zh\u00ec",
        "\u81f4": "zh\u00ec",
        "\u7f6e": "zh\u00ec",
        "\u5e1c": "zh\u00ec",
        "\u5cd9": "zh\u00ec",
        "\u5236": "zh\u00ec",
        "\u667a": "zh\u00ec",
        "\u79e9": "zh\u00ec",
        "\u7a1a": "zh\u00ec",
        "\u8d28": "zh\u00ec",
        "\u7099": "zh\u00ec",
        "\u75d4": "zh\u00ec",
        "\u6ede": "zh\u00ec",
        "\u6cbb": "zh\u00ec",
        "\u7a92": "zh\u00ec",
        "\u4e2d": "zh\u014dng",
        "\u76c5": "zh\u014dng",
        "\u5fe0": "zh\u014dng",
        "\u949f": "zh\u014dng",
        "\u8877": "zh\u014dng",
        "\u7ec8": "zh\u014dng",
        "\u79cd": "zh\u01d2ng",
        "\u80bf": "zh\u01d2ng",
        "\u91cd": "zh\u00f2ng",
        "\u4ef2": "zh\u00f2ng",
        "\u4f17": "zh\u00f2ng",
        "\u821f": "zh\u014du",
        "\u5468": "zh\u014du",
        "\u5dde": "zh\u014du",
        "\u6d32": "zh\u014du",
        "\u8bcc": "zh\u014du",
        "\u7ca5": "zh\u014du",
        "\u8f74": "zh\u00f3u",
        "\u8098": "zh\u01d2u",
        "\u5e1a": "zh\u01d2u",
        "\u5492": "zh\u00f2u",
        "\u76b1": "zh\u00f2u",
        "\u5b99": "zh\u00f2u",
        "\u663c": "zh\u00f2u",
        "\u9aa4": "zh\u00f2u",
        "\u73e0": "zh\u016b",
        "\u682a": "zh\u016b",
        "\u86db": "zh\u016b",
        "\u6731": "zh\u016b",
        "\u732a": "zh\u016b",
        "\u8bf8": "zh\u016b",
        "\u8bdb": "zh\u016b",
        "\u9010": "zh\u00fa",
        "\u7af9": "zh\u00fa",
        "\u70db": "zh\u00fa",
        "\u716e": "zh\u01d4",
        "\u62c4": "zh\u01d4",
        "\u77a9": "zh\u01d4",
        "\u5631": "zh\u01d4",
        "\u4e3b": "zh\u01d4",
        "\u8457": "zh\u00f9",
        "\u67f1": "zh\u00f9",
        "\u52a9": "zh\u00f9",
        "\u86c0": "zh\u00f9",
        "\u8d2e": "zh\u00f9",
        "\u94f8": "zh\u00f9",
        "\u7b51": "zh\u00f9",
        "\u4f4f": "zh\u00f9",
        "\u6ce8": "zh\u00f9",
        "\u795d": "zh\u00f9",
        "\u9a7b": "zh\u00f9",
        "\u6293": "zhu\u0101",
        "\u722a": "zh\u01ceo",
        "\u62fd": "zhu\u00e0i",
        "\u4e13": "zhu\u0101n",
        "\u7816": "zhu\u0101n",
        "\u8f6c": "zhu\u01cen",
        "\u64b0": "zhu\u00e0n",
        "\u8d5a": "zu\u00e0n",
        "\u7bc6": "zhu\u00e0n",
        "\u6869": "zhu\u0101ng",
        "\u5e84": "zhu\u0101ng",
        "\u88c5": "zhu\u0101ng",
        "\u5986": "zhu\u0101ng",
        "\u649e": "zhu\u00e0ng",
        "\u58ee": "zhu\u00e0ng",
        "\u72b6": "zhu\u00e0ng",
        "\u690e": "zhu\u012b",
        "\u9525": "zhu\u012b",
        "\u8ffd": "zhu\u012b",
        "\u8d58": "zhu\u00ec",
        "\u5760": "zhu\u00ec",
        "\u7f00": "zhu\u00ec",
        "\u8c06": "zh\u016bn",
        "\u51c6": "zh\u01d4n",
        "\u6349": "zhu\u014d",
        "\u62d9": "zhu\u014d",
        "\u5353": "zhu\u00f3",
        "\u684c": "zhu\u014d",
        "\u7422": "zhu\u00f3",
        "\u8301": "zhu\u00f3",
        "\u914c": "zhu\u00f3",
        "\u5544": "zhu\u00f3",
        "\u7740": "zhe",
        "\u707c": "zhu\u00f3",
        "\u6d4a": "zhu\u00f3",
        "\u5179": "z\u012b",
        "\u54a8": "z\u012b",
        "\u8d44": "z\u012b",
        "\u59ff": "z\u012b",
        "\u6ecb": "z\u012b",
        "\u6dc4": "z\u012b",
        "\u5b5c": "z\u012b",
        "\u7d2b": "z\u01d0",
        "\u4ed4": "z\u01cei",
        "\u7c7d": "z\u01d0",
        "\u6ed3": "z\u01d0",
        "\u5b50": "z\u01d0",
        "\u81ea": "z\u00ec",
        "\u6e0d": "z\u00ec",
        "\u5b57": "z\u00ec",
        "\u9b03": "z\u014dng",
        "\u68d5": "z\u014dng",
        "\u8e2a": "z\u014dng",
        "\u5b97": "z\u014dng",
        "\u7efc": "z\u014dng",
        "\u603b": "z\u01d2ng",
        "\u7eb5": "z\u00f2ng",
        "\u90b9": "z\u014du",
        "\u8d70": "z\u01d2u",
        "\u594f": "z\u00f2u",
        "\u63cd": "z\u00f2u",
        "\u79df": "z\u016b",
        "\u8db3": "z\u00fa",
        "\u5352": "z\u00fa",
        "\u65cf": "z\u00fa",
        "\u7956": "z\u01d4",
        "\u8bc5": "z\u01d4",
        "\u963b": "z\u01d4",
        "\u7ec4": "z\u01d4",
        "\u94bb": "zu\u00e0n",
        "\u7e82": "zu\u01cen",
        "\u5634": "zu\u01d0",
        "\u9189": "zu\u00ec",
        "\u6700": "zu\u00ec",
        "\u7f6a": "zu\u00ec",
        "\u5c0a": "z\u016bn",
        "\u9075": "z\u016bn",
        "\u6628": "zu\u00f3",
        "\u5de6": "zu\u01d2",
        "\u4f50": "zu\u01d2",
        "\u67de": "zh\u00e0",
        "\u505a": "zu\u00f2",
        "\u4f5c": "zu\u00f2",
        "\u5750": "zu\u00f2",
        "\u5ea7": "zu\u00f2"
    };
    this.big5 = {
        '\u9515': '\u9312',
        '\u7691': '\u769a',
        '\u853c': '\u85f9',
        '\u788d': '\u7919',
        '\u7231': '\u611b',
        '\u55f3': '\u566f',
        '\u5ad2': '\u5b21',
        '\u7477': '\u74a6',
        '\u66a7': '\u66d6',
        '\u972d': '\u9744',
        '\u8c19': '\u8af3',
        '\u94f5': '\u92a8',
        '\u9e4c': '\u9d6a',
        '\u80ae': '\u9aaf',
        '\u8884': '\u8956',
        '\u5965': '\u5967',
        '\u5aaa': '\u5abc',
        '\u9a9c': '\u9a41',
        '\u9ccc': '\u9c32',
        '\u575d': '\u58e9',
        '\u7f62': '\u7f77',
        '\u94af': '\u9200',
        '\u6446': '\u64fa',
        '\u8d25': '\u6557',
        '\u5457': '\u5504',
        '\u9881': '\u9812',
        '\u529e': '\u8fa6',
        '\u7eca': '\u7d46',
        '\u94a3': '\u9211',
        '\u5e2e': '\u5e6b',
        '\u7ed1': '\u7d81',
        '\u9551': '\u938a',
        '\u8c24': '\u8b17',
        '\u5265': '\u525d',
        '\u9971': '\u98fd',
        '\u5b9d': '\u5bf6',
        '\u62a5': '\u5831',
        '\u9c8d': '\u9b91',
        '\u9e28': '\u9d07',
        '\u9f85': '\u9f59',
        '\u8f88': '\u8f29',
        '\u8d1d': '\u8c9d',
        '\u94a1': '\u92c7',
        '\u72c8': '\u72fd',
        '\u5907': '\u5099',
        '\u60eb': '\u618a',
        '\u9e4e': '\u9d6f',
        '\u8d32': '\u8cc1',
        '\u951b': '\u931b',
        '\u7ef7': '\u7e43',
        '\u7b14': '\u7b46',
        '\u6bd5': '\u7562',
        '\u6bd9': '\u6583',
        '\u5e01': '\u5e63',
        '\u95ed': '\u9589',
        '\u835c': '\u84fd',
        '\u54d4': '\u55f6',
        '\u6ed7': '\u6f77',
        '\u94cb': '\u924d',
        '\u7b5a': '\u7bf3',
        '\u8df8': '\u8e55',
        '\u8fb9': '\u908a',
        '\u7f16': '\u7de8',
        '\u8d2c': '\u8cb6',
        '\u53d8': '\u8b8a',
        '\u8fa9': '\u8faf',
        '\u8fab': '\u8fae',
        '\u82c4': '\u8290',
        '\u7f0f': '\u7df6',
        '\u7b3e': '\u7c69',
        '\u6807': '\u6a19',
        '\u9aa0': '\u9a43',
        '\u98d1': '\u98ae',
        '\u98d9': '\u98c6',
        '\u9556': '\u93e2',
        '\u9573': '\u9463',
        '\u9cd4': '\u9c3e',
        '\u9cd6': '\u9c49',
        '\u522b': '\u5225',
        '\u762a': '\u765f',
        '\u6fd2': '\u7015',
        '\u6ee8': '\u6ff1',
        '\u5bbe': '\u8cd3',
        '\u6448': '\u64ef',
        '\u50a7': '\u5110',
        '\u7f24': '\u7e7d',
        '\u69df': '\u6ab3',
        '\u6ba1': '\u6baf',
        '\u8191': '\u81cf',
        '\u9554': '\u944c',
        '\u9acc': '\u9ad5',
        '\u9b13': '\u9b22',
        '\u997c': '\u9905',
        '\u7980': '\u7a1f',
        '\u62e8': '\u64a5',
        '\u94b5': '\u7f3d',
        '\u94c2': '\u9251',
        '\u9a73': '\u99c1',
        '\u997d': '\u9911',
        '\u94b9': '\u9238',
        '\u9e41': '\u9d53',
        '\u8865': '\u88dc',
        '\u94b8': '\u923d',
        '\u8d22': '\u8ca1',
        '\u53c2': '\u53c3',
        '\u8695': '\u8836',
        '\u6b8b': '\u6b98',
        '\u60ed': '\u615a',
        '\u60e8': '\u6158',
        '\u707f': '\u71e6',
        '\u9a96': '\u9a42',
        '\u9eea': '\u9ef2',
        '\u82cd': '\u84bc',
        '\u8231': '\u8259',
        '\u4ed3': '\u5009',
        '\u6ca7': '\u6ec4',
        '\u5395': '\u5ec1',
        '\u4fa7': '\u5074',
        '\u518c': '\u518a',
        '\u6d4b': '\u6e2c',
        '\u607b': '\u60fb',
        '\u5c42': '\u5c64',
        '\u8be7': '\u8a6b',
        '\u9538': '\u9364',
        '\u4faa': '\u5115',
        '\u9497': '\u91f5',
        '\u6400': '\u6519',
        '\u63ba': '\u647b',
        '\u8749': '\u87ec',
        '\u998b': '\u995e',
        '\u8c17': '\u8b92',
        '\u7f20': '\u7e8f',
        '\u94f2': '\u93df',
        '\u4ea7': '\u7522',
        '\u9610': '\u95e1',
        '\u98a4': '\u986b',
        '\u5181': '\u56c5',
        '\u8c04': '\u8ac2',
        '\u8c36': '\u8b96',
        '\u8487': '\u8546',
        '\u5fcf': '\u61fa',
        '\u5a75': '\u5b0b',
        '\u9aa3': '\u9a4f',
        '\u89c7': '\u8998',
        '\u7985': '\u79aa',
        '\u9561': '\u9414',
        '\u573a': '\u5834',
        '\u5c1d': '\u5617',
        '\u957f': '\u9577',
        '\u507f': '\u511f',
        '\u80a0': '\u8178',
        '\u5382': '\u5ee0',
        '\u7545': '\u66a2',
        '\u4f25': '\u5000',
        '\u82cc': '\u8407',
        '\u6005': '\u60b5',
        '\u960a': '\u95b6',
        '\u9cb3': '\u9be7',
        '\u949e': '\u9214',
        '\u8f66': '\u8eca',
        '\u5f7b': '\u5fb9',
        '\u7817': '\u7868',
        '\u5c18': '\u5875',
        '\u9648': '\u9673',
        '\u886c': '\u896f',
        '\u4f27': '\u5096',
        '\u8c0c': '\u8af6',
        '\u6987': '\u6aec',
        '\u789c': '\u78e3',
        '\u9f80': '\u9f54',
        '\u6491': '\u6490',
        '\u79f0': '\u7a31',
        '\u60e9': '\u61f2',
        '\u8bda': '\u8aa0',
        '\u9a8b': '\u9a01',
        '\u67a8': '\u68d6',
        '\u67fd': '\u6a89',
        '\u94d6': '\u92ee',
        '\u94db': '\u943a',
        '\u75f4': '\u7661',
        '\u8fdf': '\u9072',
        '\u9a70': '\u99b3',
        '\u803b': '\u6065',
        '\u9f7f': '\u9f52',
        '\u70bd': '\u71be',
        '\u996c': '\u98ed',
        '\u9e31': '\u9d1f',
        '\u51b2': '\u6c96',
        '\u51b2': '\u885d',
        '\u866b': '\u87f2',
        '\u5ba0': '\u5bf5',
        '\u94f3': '\u9283',
        '\u7574': '\u7587',
        '\u8e0c': '\u8e8a',
        '\u7b79': '\u7c4c',
        '\u7ef8': '\u7da2',
        '\u4fe6': '\u5114',
        '\u5e31': '\u5e6c',
        '\u96e0': '\u8b8e',
        '\u6a71': '\u6ae5',
        '\u53a8': '\u5eda',
        '\u9504': '\u92e4',
        '\u96cf': '\u96db',
        '\u7840': '\u790e',
        '\u50a8': '\u5132',
        '\u89e6': '\u89f8',
        '\u5904': '\u8655',
        '\u520d': '\u82bb',
        '\u7ecc': '\u7d40',
        '\u8e70': '\u8e95',
        '\u4f20': '\u50b3',
        '\u948f': '\u91e7',
        '\u75ae': '\u7621',
        '\u95ef': '\u95d6',
        '\u521b': '\u5275',
        '\u6006': '\u6134',
        '\u9524': '\u9318',
        '\u7f0d': '\u7d9e',
        '\u7eaf': '\u7d14',
        '\u9e51': '\u9d89',
        '\u7ef0': '\u7dbd',
        '\u8f8d': '\u8f1f',
        '\u9f8a': '\u9f6a',
        '\u8f9e': '\u8fad',
        '\u8bcd': '\u8a5e',
        '\u8d50': '\u8cdc',
        '\u9e5a': '\u9dbf',
        '\u806a': '\u8070',
        '\u8471': '\u8525',
        '\u56f1': '\u56ea',
        '\u4ece': '\u5f9e',
        '\u4e1b': '\u53e2',
        '\u82c1': '\u84ef',
        '\u9aa2': '\u9a44',
        '\u679e': '\u6a05',
        '\u51d1': '\u6e4a',
        '\u8f8f': '\u8f33',
        '\u8e7f': '\u8ea5',
        '\u7a9c': '\u7ac4',
        '\u64ba': '\u651b',
        '\u9519': '\u932f',
        '\u9509': '\u92bc',
        '\u9e7e': '\u9e7a',
        '\u8fbe': '\u9054',
        '\u54d2': '\u5660',
        '\u9791': '\u97c3',
        '\u5e26': '\u5e36',
        '\u8d37': '\u8cb8',
        '\u9a80': '\u99d8',
        '\u7ed0': '\u7d3f',
        '\u62c5': '\u64d4',
        '\u5355': '\u55ae',
        '\u90f8': '\u9132',
        '\u63b8': '\u64a3',
        '\u80c6': '\u81bd',
        '\u60ee': '\u619a',
        '\u8bde': '\u8a95',
        '\u5f39': '\u5f48',
        '\u6b9a': '\u6bab',
        '\u8d55': '\u8ce7',
        '\u7605': '\u7649',
        '\u7baa': '\u7c1e',
        '\u5f53': '\u7576',
        '\u6321': '\u64cb',
        '\u515a': '\u9ee8',
        '\u8361': '\u8569',
        '\u6863': '\u6a94',
        '\u8c20': '\u8b9c',
        '\u7800': '\u78ad',
        '\u88c6': '\u8960',
        '\u6363': '\u6417',
        '\u5c9b': '\u5cf6',
        '\u7977': '\u79b1',
        '\u5bfc': '\u5c0e',
        '\u76d7': '\u76dc',
        '\u7118': '\u71fe',
        '\u706f': '\u71c8',
        '\u9093': '\u9127',
        '\u956b': '\u9419',
        '\u654c': '\u6575',
        '\u6da4': '\u6ecc',
        '\u9012': '\u905e',
        '\u7f14': '\u7de0',
        '\u7c74': '\u7cf4',
        '\u8bcb': '\u8a46',
        '\u8c1b': '\u8ae6',
        '\u7ee8': '\u7d88',
        '\u89cc': '\u89bf',
        '\u955d': '\u93d1',
        '\u98a0': '\u985b',
        '\u70b9': '\u9ede',
        '\u57ab': '\u588a',
        '\u7535': '\u96fb',
        '\u5dc5': '\u5dd4',
        '\u94bf': '\u923f',
        '\u766b': '\u7672',
        '\u9493': '\u91e3',
        '\u8c03': '\u8abf',
        '\u94eb': '\u929a',
        '\u9cb7': '\u9bdb',
        '\u8c0d': '\u8adc',
        '\u53e0': '\u758a',
        '\u9cbd': '\u9c08',
        '\u9489': '\u91d8',
        '\u9876': '\u9802',
        '\u952d': '\u9320',
        '\u8ba2': '\u8a02',
        '\u94e4': '\u92cc',
        '\u4e22': '\u4e1f',
        '\u94e5': '\u92a9',
        '\u4e1c': '\u6771',
        '\u52a8': '\u52d5',
        '\u680b': '\u68df',
        '\u51bb': '\u51cd',
        '\u5cbd': '\u5d20',
        '\u9e2b': '\u9d87',
        '\u7aa6': '\u7ac7',
        '\u728a': '\u72a2',
        '\u72ec': '\u7368',
        '\u8bfb': '\u8b80',
        '\u8d4c': '\u8ced',
        '\u9540': '\u934d',
        '\u6e0e': '\u7006',
        '\u691f': '\u6add',
        '\u724d': '\u7258',
        '\u7b03': '\u7be4',
        '\u9ee9': '\u9ef7',
        '\u953b': '\u935b',
        '\u65ad': '\u65b7',
        '\u7f0e': '\u7dde',
        '\u7c16': '\u7c6a',
        '\u5151': '\u514c',
        '\u961f': '\u968a',
        '\u5bf9': '\u5c0d',
        '\u603c': '\u61df',
        '\u9566': '\u9413',
        '\u5428': '\u5678',
        '\u987f': '\u9813',
        '\u949d': '\u920d',
        '\u7096': '\u71c9',
        '\u8db8': '\u8e89',
        '\u593a': '\u596a',
        '\u5815': '\u58ae',
        '\u94ce': '\u9438',
        '\u9e45': '\u9d5d',
        '\u989d': '\u984d',
        '\u8bb9': '\u8a1b',
        '\u6076': '\u60e1',
        '\u997f': '\u9913',
        '\u8c14': '\u8ae4',
        '\u57a9': '\u580a',
        '\u960f': '\u95bc',
        '\u8f6d': '\u8edb',
        '\u9507': '\u92e8',
        '\u9537': '\u9354',
        '\u9e57': '\u9d9a',
        '\u989a': '\u984e',
        '\u989b': '\u9853',
        '\u9cc4': '\u9c77',
        '\u8bf6': '\u8a92',
        '\u513f': '\u5152',
        '\u5c14': '\u723e',
        '\u9975': '\u990c',
        '\u8d30': '\u8cb3',
        '\u8fe9': '\u9087',
        '\u94d2': '\u927a',
        '\u9e38': '\u9d2f',
        '\u9c95': '\u9b9e',
        '\u53d1': '\u767c',
        '\u7f5a': '\u7f70',
        '\u9600': '\u95a5',
        '\u73d0': '\u743a',
        '\u77fe': '\u792c',
        '\u9492': '\u91e9',
        '\u70e6': '\u7169',
        '\u8d29': '\u8ca9',
        '\u996d': '\u98ef',
        '\u8bbf': '\u8a2a',
        '\u7eba': '\u7d21',
        '\u94ab': '\u9201',
        '\u9c82': '\u9b74',
        '\u98de': '\u98db',
        '\u8bfd': '\u8ab9',
        '\u5e9f': '\u5ee2',
        '\u8d39': '\u8cbb',
        '\u7eef': '\u7dcb',
        '\u9544': '\u9428',
        '\u9cb1': '\u9be1',
        '\u7eb7': '\u7d1b',
        '\u575f': '\u58b3',
        '\u594b': '\u596e',
        '\u6124': '\u61a4',
        '\u7caa': '\u7cde',
        '\u507e': '\u50e8',
        '\u4e30': '\u8c50',
        '\u67ab': '\u6953',
        '\u950b': '\u92d2',
        '\u98ce': '\u98a8',
        '\u75af': '\u760b',
        '\u51af': '\u99ae',
        '\u7f1d': '\u7e2b',
        '\u8bbd': '\u8af7',
        '\u51e4': '\u9cf3',
        '\u6ca3': '\u7043',
        '\u80a4': '\u819a',
        '\u8f90': '\u8f3b',
        '\u629a': '\u64ab',
        '\u8f85': '\u8f14',
        '\u8d4b': '\u8ce6',
        '\u590d': '\u5fa9',
        '\u8d1f': '\u8ca0',
        '\u8ba3': '\u8a03',
        '\u5987': '\u5a66',
        '\u7f1a': '\u7e1b',
        '\u51eb': '\u9ce7',
        '\u9a78': '\u99d9',
        '\u7ec2': '\u7d31',
        '\u7ecb': '\u7d3c',
        '\u8d59': '\u8cfb',
        '\u9eb8': '\u9ea9',
        '\u9c8b': '\u9b92',
        '\u9cc6': '\u9c12',
        '\u9486': '\u91d3',
        '\u8be5': '\u8a72',
        '\u9499': '\u9223',
        '\u76d6': '\u84cb',
        '\u8d45': '\u8cc5',
        '\u6746': '\u687f',
        '\u8d76': '\u8d95',
        '\u79c6': '\u7a08',
        '\u8d63': '\u8d1b',
        '\u5c34': '\u5c37',
        '\u64c0': '\u641f',
        '\u7ec0': '\u7d3a',
        '\u5188': '\u5ca1',
        '\u521a': '\u525b',
        '\u94a2': '\u92fc',
        '\u7eb2': '\u7db1',
        '\u5c97': '\u5d17',
        '\u6206': '\u6207',
        '\u9550': '\u93ac',
        '\u777e': '\u776a',
        '\u8bf0': '\u8aa5',
        '\u7f1f': '\u7e1e',
        '\u9506': '\u92ef',
        '\u6401': '\u64f1',
        '\u9e3d': '\u9d3f',
        '\u9601': '\u95a3',
        '\u94ec': '\u927b',
        '\u4e2a': '\u500b',
        '\u7ea5': '\u7d07',
        '\u9549': '\u9398',
        '\u988d': '\u6f41',
        '\u7ed9': '\u7d66',
        '\u4e98': '\u4e99',
        '\u8d53': '\u8ce1',
        '\u7ee0': '\u7d86',
        '\u9ca0': '\u9bc1',
        '\u9f9a': '\u9f94',
        '\u5bab': '\u5bae',
        '\u5de9': '\u978f',
        '\u8d21': '\u8ca2',
        '\u94a9': '\u9264',
        '\u6c9f': '\u6e9d',
        '\u82df': '\u830d',
        '\u6784': '\u69cb',
        '\u8d2d': '\u8cfc',
        '\u591f': '\u5920',
        '\u8bdf': '\u8a6c',
        '\u7f11': '\u7df1',
        '\u89cf': '\u89af',
        '\u86ca': '\u8831',
        '\u987e': '\u9867',
        '\u8bc2': '\u8a41',
        '\u6bc2': '\u8f42',
        '\u94b4': '\u9237',
        '\u9522': '\u932e',
        '\u9e2a': '\u9d23',
        '\u9e44': '\u9d60',
        '\u9e58': '\u9dbb',
        '\u5250': '\u526e',
        '\u6302': '\u639b',
        '\u9e39': '\u9d30',
        '\u63b4': '\u6451',
        '\u5173': '\u95dc',
        '\u89c2': '\u89c0',
        '\u9986': '\u9928',
        '\u60ef': '\u6163',
        '\u8d2f': '\u8cab',
        '\u8bd6': '\u8a7f',
        '\u63bc': '\u645c',
        '\u9e73': '\u9e1b',
        '\u9ccf': '\u9c25',
        '\u5e7f': '\u5ee3',
        '\u72b7': '\u7377',
        '\u89c4': '\u898f',
        '\u5f52': '\u6b78',
        '\u9f9f': '\u9f9c',
        '\u95fa': '\u95a8',
        '\u8f68': '\u8ecc',
        '\u8be1': '\u8a6d',
        '\u8d35': '\u8cb4',
        '\u523d': '\u528a',
        '\u5326': '\u532d',
        '\u523f': '\u528c',
        '\u59ab': '\u5aaf',
        '\u6867': '\u6a9c',
        '\u9c91': '\u9bad',
        '\u9cdc': '\u9c56',
        '\u8f8a': '\u8f25',
        '\u6eda': '\u6efe',
        '\u886e': '\u889e',
        '\u7ef2': '\u7dc4',
        '\u9ca7': '\u9bc0',
        '\u9505': '\u934b',
        '\u56fd': '\u570b',
        '\u8fc7': '\u904e',
        '\u57da': '\u581d',
        '\u5459': '\u54bc',
        '\u5e3c': '\u5e57',
        '\u6901': '\u69e8',
        '\u8748': '\u87c8',
        '\u94ea': '\u927f',
        '\u9a87': '\u99ed',
        '\u97e9': '\u97d3',
        '\u6c49': '\u6f22',
        '\u961a': '\u95de',
        '\u7ed7': '\u7d4e',
        '\u9889': '\u9821',
        '\u53f7': '\u865f',
        '\u704f': '\u705d',
        '\u98a2': '\u9865',
        '\u9602': '\u95a1',
        '\u9e64': '\u9db4',
        '\u8d3a': '\u8cc0',
        '\u8bc3': '\u8a36',
        '\u9616': '\u95d4',
        '\u86ce': '\u8823',
        '\u6a2a': '\u6a6b',
        '\u8f70': '\u8f5f',
        '\u9e3f': '\u9d3b',
        '\u7ea2': '\u7d05',
        '\u9ec9': '\u9ecc',
        '\u8ba7': '\u8a0c',
        '\u836d': '\u8452',
        '\u95f3': '\u958e',
        '\u9c8e': '\u9c5f',
        '\u58f6': '\u58fa',
        '\u62a4': '\u8b77',
        '\u6caa': '\u6eec',
        '\u6237': '\u6236',
        '\u6d52': '\u6ef8',
        '\u9e55': '\u9d98',
        '\u54d7': '\u5629',
        '\u534e': '\u83ef',
        '\u753b': '\u756b',
        '\u5212': '\u5283',
        '\u8bdd': '\u8a71',
        '\u9a85': '\u9a4a',
        '\u6866': '\u6a3a',
        '\u94e7': '\u93f5',
        '\u6000': '\u61f7',
        '\u574f': '\u58de',
        '\u6b22': '\u6b61',
        '\u73af': '\u74b0',
        '\u8fd8': '\u9084',
        '\u7f13': '\u7de9',
        '\u6362': '\u63db',
        '\u5524': '\u559a',
        '\u75ea': '\u7613',
        '\u7115': '\u7165',
        '\u6da3': '\u6e19',
        '\u5942': '\u5950',
        '\u7f33': '\u7e6f',
        '\u953e': '\u9370',
        '\u9ca9': '\u9bc7',
        '\u9ec4': '\u9ec3',
        '\u8c0e': '\u8b0a',
        '\u9cc7': '\u9c09',
        '\u6325': '\u63ee',
        '\u8f89': '\u8f1d',
        '\u6bc1': '\u6bc0',
        '\u8d3f': '\u8cc4',
        '\u79fd': '\u7a62',
        '\u4f1a': '\u6703',
        '\u70e9': '\u71f4',
        '\u6c47': '\u532f',
        '\u8bb3': '\u8af1',
        '\u8bf2': '\u8aa8',
        '\u7ed8': '\u7e6a',
        '\u8bd9': '\u8a7c',
        '\u835f': '\u8588',
        '\u54d5': '\u5666',
        '\u6d4d': '\u6fae',
        '\u7f0b': '\u7e62',
        '\u73f2': '\u743f',
        '\u6656': '\u6689',
        '\u8364': '\u8477',
        '\u6d51': '\u6e3e',
        '\u8be8': '\u8ae2',
        '\u9984': '\u991b',
        '\u960d': '\u95bd',
        '\u83b7': '\u7372',
        '\u8d27': '\u8ca8',
        '\u7978': '\u798d',
        '\u94ac': '\u9225',
        '\u956c': '\u944a',
        '\u51fb': '\u64ca',
        '\u673a': '\u6a5f',
        '\u79ef': '\u7a4d',
        '\u9965': '\u9951',
        '\u8ff9': '\u8de1',
        '\u8ba5': '\u8b4f',
        '\u9e21': '\u96de',
        '\u7ee9': '\u7e3e',
        '\u7f09': '\u7ddd',
        '\u6781': '\u6975',
        '\u8f91': '\u8f2f',
        '\u7ea7': '\u7d1a',
        '\u6324': '\u64e0',
        '\u51e0': '\u5e7e',
        '\u84df': '\u858a',
        '\u5242': '\u5291',
        '\u6d4e': '\u6fdf',
        '\u8ba1': '\u8a08',
        '\u8bb0': '\u8a18',
        '\u9645': '\u969b',
        '\u7ee7': '\u7e7c',
        '\u7eaa': '\u7d00',
        '\u8ba6': '\u8a10',
        '\u8bd8': '\u8a70',
        '\u8360': '\u85ba',
        '\u53fd': '\u5630',
        '\u54dc': '\u568c',
        '\u9aa5': '\u9a65',
        '\u7391': '\u74a3',
        '\u89ca': '\u89ac',
        '\u9f51': '\u9f4f',
        '\u77f6': '\u78ef',
        '\u7f81': '\u7f88',
        '\u867f': '\u8806',
        '\u8dfb': '\u8e8b',
        '\u9701': '\u973d',
        '\u9c9a': '\u9c6d',
        '\u9cab': '\u9bfd',
        '\u5939': '\u593e',
        '\u835a': '\u83a2',
        '\u988a': '\u9830',
        '\u8d3e': '\u8cc8',
        '\u94be': '\u9240',
        '\u4ef7': '\u50f9',
        '\u9a7e': '\u99d5',
        '\u90cf': '\u90df',
        '\u6d43': '\u6d79',
        '\u94d7': '\u92cf',
        '\u9553': '\u93b5',
        '\u86f2': '\u87ef',
        '\u6b7c': '\u6bb2',
        '\u76d1': '\u76e3',
        '\u575a': '\u5805',
        '\u7b3a': '\u7b8b',
        '\u95f4': '\u9593',
        '\u8270': '\u8271',
        '\u7f04': '\u7dd8',
        '\u8327': '\u7e6d',
        '\u68c0': '\u6aa2',
        '\u78b1': '\u583f',
        '\u7877': '\u9e7c',
        '\u62e3': '\u63c0',
        '\u6361': '\u64bf',
        '\u7b80': '\u7c21',
        '\u4fed': '\u5109',
        '\u51cf': '\u6e1b',
        '\u8350': '\u85a6',
        '\u69db': '\u6abb',
        '\u9274': '\u9452',
        '\u8df5': '\u8e10',
        '\u8d31': '\u8ce4',
        '\u89c1': '\u898b',
        '\u952e': '\u9375',
        '\u8230': '\u8266',
        '\u5251': '\u528d',
        '\u996f': '\u991e',
        '\u6e10': '\u6f38',
        '\u6e85': '\u6ffa',
        '\u6da7': '\u6f97',
        '\u8c0f': '\u8aeb',
        '\u7f23': '\u7e11',
        '\u620b': '\u6214',
        '\u622c': '\u6229',
        '\u7751': '\u77bc',
        '\u9e63': '\u9dbc',
        '\u7b15': '\u7b67',
        '\u9ca3': '\u9c39',
        '\u97af': '\u97c9',
        '\u5c06': '\u5c07',
        '\u6d46': '\u6f3f',
        '\u848b': '\u8523',
        '\u6868': '\u69f3',
        '\u5956': '\u734e',
        '\u8bb2': '\u8b1b',
        '\u9171': '\u91ac',
        '\u7edb': '\u7d73',
        '\u7f30': '\u97c1',
        '\u80f6': '\u81a0',
        '\u6d47': '\u6f86',
        '\u9a84': '\u9a55',
        '\u5a07': '\u5b0c',
        '\u6405': '\u652a',
        '\u94f0': '\u9278',
        '\u77eb': '\u77ef',
        '\u4fa5': '\u50e5',
        '\u811a': '\u8173',
        '\u997a': '\u9903',
        '\u7f34': '\u7e73',
        '\u7ede': '\u7d5e',
        '\u8f7f': '\u8f4e',
        '\u8f83': '\u8f03',
        '\u6322': '\u649f',
        '\u5ce4': '\u5da0',
        '\u9e6a': '\u9de6',
        '\u9c9b': '\u9bab',
        '\u9636': '\u968e',
        '\u8282': '\u7bc0',
        '\u6d01': '\u6f54',
        '\u7ed3': '\u7d50',
        '\u8beb': '\u8aa1',
        '\u5c4a': '\u5c46',
        '\u7596': '\u7664',
        '\u988c': '\u981c',
        '\u9c92': '\u9b9a',
        '\u7d27': '\u7dca',
        '\u9526': '\u9326',
        '\u4ec5': '\u50c5',
        '\u8c28': '\u8b39',
        '\u8fdb': '\u9032',
        '\u664b': '\u6649',
        '\u70ec': '\u71fc',
        '\u5c3d': '\u76e1',
        '\u52b2': '\u52c1',
        '\u8346': '\u834a',
        '\u830e': '\u8396',
        '\u537a': '\u5df9',
        '\u8369': '\u85ce',
        '\u9991': '\u9949',
        '\u7f19': '\u7e09',
        '\u8d46': '\u8d10',
        '\u89d0': '\u89b2',
        '\u9cb8': '\u9be8',
        '\u60ca': '\u9a5a',
        '\u7ecf': '\u7d93',
        '\u9888': '\u9838',
        '\u9759': '\u975c',
        '\u955c': '\u93e1',
        '\u5f84': '\u5f91',
        '\u75c9': '\u75d9',
        '\u7ade': '\u7af6',
        '\u51c0': '\u51c8',
        '\u522d': '\u5244',
        '\u6cfe': '\u6d87',
        '\u8ff3': '\u9015',
        '\u5f2a': '\u5f33',
        '\u80eb': '\u811b',
        '\u9753': '\u975a',
        '\u7ea0': '\u7cfe',
        '\u53a9': '\u5ec4',
        '\u65e7': '\u820a',
        '\u9604': '\u9b2e',
        '\u9e20': '\u9ce9',
        '\u9e6b': '\u9df2',
        '\u9a79': '\u99d2',
        '\u4e3e': '\u8209',
        '\u636e': '\u64da',
        '\u952f': '\u92f8',
        '\u60e7': '\u61fc',
        '\u5267': '\u5287',
        '\u8bb5': '\u8a4e',
        '\u5c66': '\u5c68',
        '\u6989': '\u6af8',
        '\u98d3': '\u98b6',
        '\u949c': '\u9245',
        '\u9514': '\u92e6',
        '\u7aad': '\u7ab6',
        '\u9f83': '\u9f5f',
        '\u9e43': '\u9d51',
        '\u7ee2': '\u7d79',
        '\u9529': '\u9308',
        '\u954c': '\u942b',
        '\u96bd': '\u96cb',
        '\u89c9': '\u89ba',
        '\u51b3': '\u6c7a',
        '\u7edd': '\u7d55',
        '\u8c32': '\u8b4e',
        '\u73cf': '\u73a8',
        '\u94a7': '\u921e',
        '\u519b': '\u8ecd',
        '\u9a8f': '\u99ff',
        '\u76b2': '\u76b8',
        '\u5f00': '\u958b',
        '\u51ef': '\u51f1',
        '\u5240': '\u5274',
        '\u57b2': '\u584f',
        '\u5ffe': '\u613e',
        '\u607a': '\u6137',
        '\u94e0': '\u93a7',
        '\u9534': '\u9347',
        '\u9f9b': '\u9f95',
        '\u95f6': '\u958c',
        '\u94aa': '\u9227',
        '\u94d0': '\u92ac',
        '\u9897': '\u9846',
        '\u58f3': '\u6bbc',
        '\u8bfe': '\u8ab2',
        '\u9a92': '\u9a0d',
        '\u7f02': '\u7dd9',
        '\u8f72': '\u8efb',
        '\u94b6': '\u9233',
        '\u951e': '\u9301',
        '\u9894': '\u9837',
        '\u57a6': '\u58be',
        '\u6073': '\u61c7',
        '\u9f88': '\u9f66',
        '\u94ff': '\u93d7',
        '\u62a0': '\u6473',
        '\u5e93': '\u5eab',
        '\u88e4': '\u8932',
        '\u55be': '\u56b3',
        '\u5757': '\u584a',
        '\u4fa9': '\u5108',
        '\u90d0': '\u9136',
        '\u54d9': '\u5672',
        '\u810d': '\u81be',
        '\u5bbd': '\u5bec',
        '\u72ef': '\u736a',
        '\u9acb': '\u9ad6',
        '\u77ff': '\u7926',
        '\u65f7': '\u66e0',
        '\u51b5': '\u6cc1',
        '\u8bd3': '\u8a86',
        '\u8bf3': '\u8a91',
        '\u909d': '\u913a',
        '\u5739': '\u58d9',
        '\u7ea9': '\u7e8a',
        '\u8d36': '\u8cba',
        '\u4e8f': '\u8667',
        '\u5cbf': '\u5dcb',
        '\u7aa5': '\u7aba',
        '\u9988': '\u994b',
        '\u6e83': '\u6f70',
        '\u532e': '\u5331',
        '\u8489': '\u8562',
        '\u6126': '\u6192',
        '\u8069': '\u8075',
        '\u7bd1': '\u7c23',
        '\u9603': '\u95ab',
        '\u951f': '\u9315',
        '\u9cb2': '\u9be4',
        '\u6269': '\u64f4',
        '\u9614': '\u95ca',
        '\u86f4': '\u8810',
        '\u8721': '\u881f',
        '\u814a': '\u81d8',
        '\u83b1': '\u840a',
        '\u6765': '\u4f86',
        '\u8d56': '\u8cf4',
        '\u5d03': '\u5d0d',
        '\u5f95': '\u5fa0',
        '\u6d9e': '\u6df6',
        '\u6fd1': '\u7028',
        '\u8d49': '\u8cda',
        '\u7750': '\u775e',
        '\u94fc': '\u9338',
        '\u765e': '\u7669',
        '\u7c41': '\u7c5f',
        '\u84dd': '\u85cd',
        '\u680f': '\u6b04',
        '\u62e6': '\u6514',
        '\u7bee': '\u7c43',
        '\u9611': '\u95cc',
        '\u5170': '\u862d',
        '\u6f9c': '\u703e',
        '\u8c30': '\u8b95',
        '\u63fd': '\u652c',
        '\u89c8': '\u89bd',
        '\u61d2': '\u61f6',
        '\u7f06': '\u7e9c',
        '\u70c2': '\u721b',
        '\u6ee5': '\u6feb',
        '\u5c9a': '\u5d50',
        '\u6984': '\u6b16',
        '\u6593': '\u6595',
        '\u9567': '\u946d',
        '\u8934': '\u8964',
        '\u7405': '\u746f',
        '\u9606': '\u95ac',
        '\u9512': '\u92c3',
        '\u635e': '\u6488',
        '\u52b3': '\u52de',
        '\u6d9d': '\u6f87',
        '\u5520': '\u562e',
        '\u5d02': '\u5d97',
        '\u94d1': '\u92a0',
        '\u94f9': '\u9412',
        '\u75e8': '\u7646',
        '\u4e50': '\u6a02',
        '\u9cd3': '\u9c33',
        '\u956d': '\u9433',
        '\u5792': '\u58d8',
        '\u7c7b': '\u985e',
        '\u6cea': '\u6dda',
        '\u8bd4': '\u8a84',
        '\u7f27': '\u7e32',
        '\u7bf1': '\u7c6c',
        '\u72f8': '\u8c8d',
        '\u79bb': '\u96e2',
        '\u9ca4': '\u9bc9',
        '\u793c': '\u79ae',
        '\u4e3d': '\u9e97',
        '\u5389': '\u53b2',
        '\u52b1': '\u52f5',
        '\u783e': '\u792b',
        '\u5386': '\u6b77',
        '\u6ca5': '\u701d',
        '\u96b6': '\u96b8',
        '\u4fea': '\u5137',
        '\u90e6': '\u9148',
        '\u575c': '\u58e2',
        '\u82c8': '\u85f6',
        '\u8385': '\u849e',
        '\u84e0': '\u863a',
        '\u5456': '\u56a6',
        '\u9026': '\u9090',
        '\u9a8a': '\u9a6a',
        '\u7f21': '\u7e2d',
        '\u67a5': '\u6aea',
        '\u680e': '\u6adf',
        '\u8f79': '\u8f62',
        '\u783a': '\u792a',
        '\u9502': '\u92f0',
        '\u9e42': '\u9e1d',
        '\u75a0': '\u7658',
        '\u7c9d': '\u7cf2',
        '\u8dde': '\u8e92',
        '\u96f3': '\u9742',
        '\u9ca1': '\u9c7a',
        '\u9ce2': '\u9c67',
        '\u4fe9': '\u5006',
        '\u8054': '\u806f',
        '\u83b2': '\u84ee',
        '\u8fde': '\u9023',
        '\u9570': '\u942e',
        '\u601c': '\u6190',
        '\u6d9f': '\u6f23',
        '\u5e18': '\u7c3e',
        '\u655b': '\u6582',
        '\u8138': '\u81c9',
        '\u94fe': '\u93c8',
        '\u604b': '\u6200',
        '\u70bc': '\u7149',
        '\u7ec3': '\u7df4',
        '\u8539': '\u861e',
        '\u5941': '\u5969',
        '\u6f4b': '\u7032',
        '\u740f': '\u7489',
        '\u6b93': '\u6bae',
        '\u88e2': '\u8933',
        '\u88e3': '\u895d',
        '\u9ca2': '\u9c31',
        '\u7cae': '\u7ce7',
        '\u51c9': '\u6dbc',
        '\u4e24': '\u5169',
        '\u8f86': '\u8f1b',
        '\u8c05': '\u8ad2',
        '\u9b49': '\u9b4e',
        '\u7597': '\u7642',
        '\u8fbd': '\u907c',
        '\u9563': '\u9410',
        '\u7f2d': '\u7e5a',
        '\u948c': '\u91d5',
        '\u9e69': '\u9def',
        '\u730e': '\u7375',
        '\u4e34': '\u81e8',
        '\u90bb': '\u9130',
        '\u9cde': '\u9c57',
        '\u51db': '\u51dc',
        '\u8d41': '\u8cc3',
        '\u853a': '\u85fa',
        '\u5eea': '\u5ee9',
        '\u6aa9': '\u6a81',
        '\u8f9a': '\u8f54',
        '\u8e8f': '\u8eaa',
        '\u9f84': '\u9f61',
        '\u94c3': '\u9234',
        '\u7075': '\u9748',
        '\u5cad': '\u5dba',
        '\u9886': '\u9818',
        '\u7eeb': '\u7dbe',
        '\u68c2': '\u6b1e',
        '\u86cf': '\u87f6',
        '\u9cae': '\u9bea',
        '\u998f': '\u993e',
        '\u5218': '\u5289',
        '\u6d4f': '\u700f',
        '\u9a9d': '\u9a2e',
        '\u7efa': '\u7db9',
        '\u954f': '\u93a6',
        '\u9e68': '\u9dda',
        '\u9f99': '\u9f8d',
        '\u804b': '\u807e',
        '\u5499': '\u56a8',
        '\u7b3c': '\u7c60',
        '\u5784': '\u58df',
        '\u62e2': '\u650f',
        '\u9647': '\u96b4',
        '\u830f': '\u8622',
        '\u6cf7': '\u7027',
        '\u73d1': '\u74cf',
        '\u680a': '\u6af3',
        '\u80e7': '\u6727',
        '\u783b': '\u7931',
        '\u697c': '\u6a13',
        '\u5a04': '\u5a41',
        '\u6402': '\u645f',
        '\u7bd3': '\u7c0d',
        '\u507b': '\u50c2',
        '\u848c': '\u851e',
        '\u55bd': '\u560d',
        '\u5d5d': '\u5d81',
        '\u9542': '\u93e4',
        '\u7618': '\u763a',
        '\u8027': '\u802c',
        '\u877c': '\u87bb',
        '\u9ac5': '\u9acf',
        '\u82a6': '\u8606',
        '\u5362': '\u76e7',
        '\u9885': '\u9871',
        '\u5e90': '\u5eec',
        '\u7089': '\u7210',
        '\u63b3': '\u64c4',
        '\u5364': '\u9e75',
        '\u864f': '\u865c',
        '\u9c81': '\u9b6f',
        '\u8d42': '\u8cc2',
        '\u7984': '\u797f',
        '\u5f55': '\u9304',
        '\u9646': '\u9678',
        '\u5786': '\u58da',
        '\u64b8': '\u64fc',
        '\u565c': '\u5695',
        '\u95fe': '\u95ad',
        '\u6cf8': '\u7018',
        '\u6e0c': '\u6de5',
        '\u680c': '\u6ae8',
        '\u6a79': '\u6ad3',
        '\u8f73': '\u8f64',
        '\u8f82': '\u8f05',
        '\u8f98': '\u8f46',
        '\u6c07': '\u6c0c',
        '\u80ea': '\u81da',
        '\u9e2c': '\u9e15',
        '\u9e6d': '\u9dfa',
        '\u823b': '\u826b',
        '\u9c88': '\u9c78',
        '\u5ce6': '\u5dd2',
        '\u631b': '\u6523',
        '\u5b6a': '\u5b7f',
        '\u6ee6': '\u7064',
        '\u4e71': '\u4e82',
        '\u8114': '\u81e0',
        '\u5a08': '\u5b4c',
        '\u683e': '\u6b12',
        '\u9e3e': '\u9e1e',
        '\u92ae': '\u947e',
        '\u62a1': '\u6384',
        '\u8f6e': '\u8f2a',
        '\u4f26': '\u502b',
        '\u4ed1': '\u4f96',
        '\u6ca6': '\u6dea',
        '\u7eb6': '\u7db8',
        '\u8bba': '\u8ad6',
        '\u56f5': '\u5707',
        '\u841d': '\u863f',
        '\u7f57': '\u7f85',
        '\u903b': '\u908f',
        '\u9523': '\u947c',
        '\u7ba9': '\u7c6e',
        '\u9aa1': '\u9a3e',
        '\u9a86': '\u99f1',
        '\u7edc': '\u7d61',
        '\u8366': '\u7296',
        '\u7321': '\u7380',
        '\u6cfa': '\u6ffc',
        '\u6924': '\u6b0f',
        '\u8136': '\u8161',
        '\u9559': '\u93cd',
        '\u9a74': '\u9a62',
        '\u5415': '\u5442',
        '\u94dd': '\u92c1',
        '\u4fa3': '\u4fb6',
        '\u5c61': '\u5c62',
        '\u7f15': '\u7e37',
        '\u8651': '\u616e',
        '\u6ee4': '\u6ffe',
        '\u7eff': '\u7da0',
        '\u6988': '\u6ada',
        '\u891b': '\u8938',
        '\u950a': '\u92dd',
        '\u5452': '\u5638',
        '\u5988': '\u5abd',
        '\u739b': '\u746a',
        '\u7801': '\u78bc',
        '\u8682': '\u879e',
        '\u9a6c': '\u99ac',
        '\u9a82': '\u7f75',
        '\u5417': '\u55ce',
        '\u551b': '\u561c',
        '\u5b37': '\u5b24',
        '\u6769': '\u69aa',
        '\u4e70': '\u8cb7',
        '\u9ea6': '\u9ea5',
        '\u5356': '\u8ce3',
        '\u8fc8': '\u9081',
        '\u8109': '\u8108',
        '\u52a2': '\u52f1',
        '\u7792': '\u779e',
        '\u9992': '\u9945',
        '\u86ee': '\u883b',
        '\u6ee1': '\u6eff',
        '\u8c29': '\u8b3e',
        '\u7f26': '\u7e35',
        '\u9558': '\u93dd',
        '\u98a1': '\u9859',
        '\u9cd7': '\u9c3b',
        '\u732b': '\u8c93',
        '\u951a': '\u9328',
        '\u94c6': '\u925a',
        '\u8d38': '\u8cbf',
        '\u9ebd': '\u9ebc',
        '\u6ca1': '\u6c92',
        '\u9541': '\u9382',
        '\u95e8': '\u9580',
        '\u95f7': '\u60b6',
        '\u4eec': '\u5011',
        '\u626a': '\u636b',
        '\u7116': '\u71dc',
        '\u61d1': '\u61e3',
        '\u9494': '\u9346',
        '\u9530': '\u9333',
        '\u68a6': '\u5922',
        '\u772f': '\u7787',
        '\u8c1c': '\u8b0e',
        '\u5f25': '\u5f4c',
        '\u89c5': '\u8993',
        '\u5e42': '\u51aa',
        '\u8288': '\u7f8b',
        '\u8c27': '\u8b10',
        '\u7315': '\u737c',
        '\u7962': '\u79b0',
        '\u7ef5': '\u7dbf',
        '\u7f05': '\u7dec',
        '\u6e11': '\u6fa0',
        '\u817c': '\u9766',
        '\u9efe': '\u9efd',
        '\u5e99': '\u5edf',
        '\u7f08': '\u7df2',
        '\u7f2a': '\u7e46',
        '\u706d': '\u6ec5',
        '\u60af': '\u61ab',
        '\u95fd': '\u95a9',
        '\u95f5': '\u9594',
        '\u7f17': '\u7de1',
        '\u9e23': '\u9cf4',
        '\u94ed': '\u9298',
        '\u8c2c': '\u8b2c',
        '\u8c1f': '\u8b28',
        '\u84e6': '\u9a40',
        '\u998d': '\u9943',
        '\u6b81': '\u6b7f',
        '\u9546': '\u93cc',
        '\u8c0b': '\u8b00',
        '\u4ea9': '\u755d',
        '\u94bc': '\u926c',
        '\u5450': '\u5436',
        '\u94a0': '\u9209',
        '\u7eb3': '\u7d0d',
        '\u96be': '\u96e3',
        '\u6320': '\u6493',
        '\u8111': '\u8166',
        '\u607c': '\u60f1',
        '\u95f9': '\u9b27',
        '\u94d9': '\u9403',
        '\u8bb7': '\u8a25',
        '\u9981': '\u9912',
        '\u5185': '\u5167',
        '\u62df': '\u64ec',
        '\u817b': '\u81a9',
        '\u94cc': '\u922e',
        '\u9cb5': '\u9be2',
        '\u64b5': '\u6506',
        '\u8f87': '\u8f26',
        '\u9cb6': '\u9bf0',
        '\u917f': '\u91c0',
        '\u9e1f': '\u9ce5',
        '\u8311': '\u8526',
        '\u8885': '\u88ca',
        '\u8042': '\u8076',
        '\u556e': '\u5699',
        '\u954a': '\u9477',
        '\u954d': '\u93b3',
        '\u9667': '\u9689',
        '\u8616': '\u8617',
        '\u55eb': '\u56c1',
        '\u989f': '\u9862',
        '\u8e51': '\u8ea1',
        '\u67e0': '\u6ab8',
        '\u72de': '\u7370',
        '\u5b81': '\u5be7',
        '\u62e7': '\u64f0',
        '\u6cde': '\u6fd8',
        '\u82ce': '\u82e7',
        '\u549b': '\u5680',
        '\u804d': '\u8079',
        '\u94ae': '\u9215',
        '\u7ebd': '\u7d10',
        '\u8113': '\u81bf',
        '\u6d53': '\u6fc3',
        '\u519c': '\u8fb2',
        '\u4fac': '\u5102',
        '\u54dd': '\u5665',
        '\u9a7d': '\u99d1',
        '\u9495': '\u91f9',
        '\u8bfa': '\u8afe',
        '\u50a9': '\u513a',
        '\u759f': '\u7627',
        '\u6b27': '\u6b50',
        '\u9e25': '\u9dd7',
        '\u6bb4': '\u6bc6',
        '\u5455': '\u5614',
        '\u6ca4': '\u6f1a',
        '\u8bb4': '\u8b33',
        '\u6004': '\u616a',
        '\u74ef': '\u750c',
        '\u76d8': '\u76e4',
        '\u8e52': '\u8e63',
        '\u5e9e': '\u9f90',
        '\u629b': '\u62cb',
        '\u75b1': '\u76b0',
        '\u8d54': '\u8ce0',
        '\u8f94': '\u8f61',
        '\u55b7': '\u5674',
        '\u9e4f': '\u9d6c',
        '\u7eb0': '\u7d15',
        '\u7f74': '\u7f86',
        '\u94cd': '\u9239',
        '\u9a97': '\u9a19',
        '\u8c1d': '\u8ade',
        '\u9a88': '\u99e2',
        '\u98d8': '\u98c4',
        '\u7f25': '\u7e39',
        '\u9891': '\u983b',
        '\u8d2b': '\u8ca7',
        '\u5ad4': '\u5b2a',
        '\u82f9': '\u860b',
        '\u51ed': '\u6191',
        '\u8bc4': '\u8a55',
        '\u6cfc': '\u6f51',
        '\u9887': '\u9817',
        '\u948b': '\u91d9',
        '\u6251': '\u64b2',
        '\u94fa': '\u92ea',
        '\u6734': '\u6a38',
        '\u8c31': '\u8b5c',
        '\u9564': '\u93f7',
        '\u9568': '\u9420',
        '\u6816': '\u68f2',
        '\u8110': '\u81cd',
        '\u9f50': '\u9f4a',
        '\u9a91': '\u9a0e',
        '\u5c82': '\u8c48',
        '\u542f': '\u555f',
        '\u6c14': '\u6c23',
        '\u5f03': '\u68c4',
        '\u8bab': '\u8a16',
        '\u8572': '\u8604',
        '\u9a90': '\u9a0f',
        '\u7eee': '\u7dba',
        '\u6864': '\u69bf',
        '\u789b': '\u78e7',
        '\u9880': '\u980e',
        '\u9883': '\u980f',
        '\u9ccd': '\u9c2d',
        '\u7275': '\u727d',
        '\u948e': '\u91ec',
        '\u94c5': '\u925b',
        '\u8fc1': '\u9077',
        '\u7b7e': '\u7c3d',
        '\u8c26': '\u8b19',
        '\u94b1': '\u9322',
        '\u94b3': '\u9257',
        '\u6f5c': '\u6f5b',
        '\u6d45': '\u6dfa',
        '\u8c34': '\u8b74',
        '\u5811': '\u5879',
        '\u4f65': '\u50c9',
        '\u8368': '\u8541',
        '\u60ad': '\u6173',
        '\u9a9e': '\u9a2b',
        '\u7f31': '\u7e7e',
        '\u6920': '\u69e7',
        '\u94a4': '\u9210',
        '\u67aa': '\u69cd',
        '\u545b': '\u55c6',
        '\u5899': '\u58bb',
        '\u8537': '\u8594',
        '\u5f3a': '\u5f37',
        '\u62a2': '\u6436',
        '\u5af1': '\u5b19',
        '\u6a2f': '\u6aa3',
        '\u6217': '\u6227',
        '\u709d': '\u7197',
        '\u9516': '\u9306',
        '\u9535': '\u93d8',
        '\u956a': '\u93f9',
        '\u7f9f': '\u7fa5',
        '\u8dc4': '\u8e4c',
        '\u9539': '\u936c',
        '\u6865': '\u6a4b',
        '\u4e54': '\u55ac',
        '\u4fa8': '\u50d1',
        '\u7fd8': '\u7ff9',
        '\u7a8d': '\u7ac5',
        '\u8bee': '\u8a9a',
        '\u8c2f': '\u8b59',
        '\u835e': '\u854e',
        '\u7f32': '\u7e70',
        '\u7857': '\u78fd',
        '\u8df7': '\u8e7a',
        '\u7a83': '\u7aca',
        '\u60ec': '\u611c',
        '\u9532': '\u9365',
        '\u7ba7': '\u7bcb',
        '\u94a6': '\u6b3d',
        '\u4eb2': '\u89aa',
        '\u5bdd': '\u5be2',
        '\u9513': '\u92df',
        '\u8f7b': '\u8f15',
        '\u6c22': '\u6c2b',
        '\u503e': '\u50be',
        '\u9877': '\u9803',
        '\u8bf7': '\u8acb',
        '\u5e86': '\u6176',
        '\u63ff': '\u64b3',
        '\u9cad': '\u9bd6',
        '\u743c': '\u74ca',
        '\u7a77': '\u7aae',
        '\u8315': '\u7162',
        '\u86f1': '\u86fa',
        '\u5def': '\u5df0',
        '\u8d47': '\u8cd5',
        '\u866e': '\u87e3',
        '\u9cc5': '\u9c0d',
        '\u8d8b': '\u8da8',
        '\u533a': '\u5340',
        '\u8eaf': '\u8ec0',
        '\u9a71': '\u9a45',
        '\u9f8b': '\u9f72',
        '\u8bce': '\u8a58',
        '\u5c96': '\u5d87',
        '\u9612': '\u95c3',
        '\u89d1': '\u89b7',
        '\u9e32': '\u9d1d',
        '\u98a7': '\u9874',
        '\u6743': '\u6b0a',
        '\u529d': '\u52f8',
        '\u8be0': '\u8a6e',
        '\u7efb': '\u7da3',
        '\u8f81': '\u8f07',
        '\u94e8': '\u9293',
        '\u5374': '\u537b',
        '\u9e4a': '\u9d72',
        '\u786e': '\u78ba',
        '\u9615': '\u95cb',
        '\u9619': '\u95d5',
        '\u60ab': '\u6128',
        '\u8ba9': '\u8b93',
        '\u9976': '\u9952',
        '\u6270': '\u64fe',
        '\u7ed5': '\u7e5e',
        '\u835b': '\u8558',
        '\u5a06': '\u5b08',
        '\u6861': '\u6a48',
        '\u70ed': '\u71b1',
        '\u97e7': '\u97cc',
        '\u8ba4': '\u8a8d',
        '\u7eab': '\u7d09',
        '\u996a': '\u98ea',
        '\u8f6b': '\u8ed4',
        '\u8363': '\u69ae',
        '\u7ed2': '\u7d68',
        '\u5d58': '\u5db8',
        '\u877e': '\u8811',
        '\u7f1b': '\u7e1f',
        '\u94f7': '\u92a3',
        '\u98a6': '\u9870',
        '\u8f6f': '\u8edf',
        '\u9510': '\u92b3',
        '\u86ac': '\u8706',
        '\u95f0': '\u958f',
        '\u6da6': '\u6f64',
        '\u6d12': '\u7051',
        '\u8428': '\u85a9',
        '\u98d2': '\u98af',
        '\u9cc3': '\u9c13',
        '\u8d5b': '\u8cfd',
        '\u4f1e': '\u5098',
        '\u6bf5': '\u6bff',
        '\u7cc1': '\u7cdd',
        '\u4e27': '\u55aa',
        '\u9a9a': '\u9a37',
        '\u626b': '\u6383',
        '\u7f2b': '\u7e45',
        '\u6da9': '\u6f80',
        '\u556c': '\u55c7',
        '\u94ef': '\u92ab',
        '\u7a51': '\u7a61',
        '\u6740': '\u6bba',
        '\u5239': '\u524e',
        '\u7eb1': '\u7d17',
        '\u94e9': '\u93a9',
        '\u9ca8': '\u9bca',
        '\u7b5b': '\u7be9',
        '\u6652': '\u66ec',
        '\u917e': '\u91c3',
        '\u5220': '\u522a',
        '\u95ea': '\u9583',
        '\u9655': '\u965c',
        '\u8d61': '\u8d0d',
        '\u7f2e': '\u7e55',
        '\u8baa': '\u8a15',
        '\u59d7': '\u59cd',
        '\u9a9f': '\u9a38',
        '\u9490': '\u91e4',
        '\u9cdd': '\u9c54',
        '\u5892': '\u5891',
        '\u4f24': '\u50b7',
        '\u8d4f': '\u8cde',
        '\u57a7': '\u5770',
        '\u6b87': '\u6ba4',
        '\u89de': '\u89f4',
        '\u70e7': '\u71d2',
        '\u7ecd': '\u7d39',
        '\u8d4a': '\u8cd2',
        '\u6444': '\u651d',
        '\u6151': '\u61fe',
        '\u8bbe': '\u8a2d',
        '\u538d': '\u5399',
        '\u6ee0': '\u7044',
        '\u7572': '\u756c',
        '\u7ec5': '\u7d33',
        '\u5ba1': '\u5be9',
        '\u5a76': '\u5b38',
        '\u80be': '\u814e',
        '\u6e17': '\u6ef2',
        '\u8bdc': '\u8a75',
        '\u8c02': '\u8ad7',
        '\u6e16': '\u700b',
        '\u58f0': '\u8072',
        '\u7ef3': '\u7e69',
        '\u80dc': '\u52dd',
        '\u5e08': '\u5e2b',
        '\u72ee': '\u7345',
        '\u6e7f': '\u6fd5',
        '\u8bd7': '\u8a69',
        '\u65f6': '\u6642',
        '\u8680': '\u8755',
        '\u5b9e': '\u5be6',
        '\u8bc6': '\u8b58',
        '\u9a76': '\u99db',
        '\u52bf': '\u52e2',
        '\u9002': '\u9069',
        '\u91ca': '\u91cb',
        '\u9970': '\u98fe',
        '\u89c6': '\u8996',
        '\u8bd5': '\u8a66',
        '\u8c25': '\u8b1a',
        '\u57d8': '\u5852',
        '\u83b3': '\u8494',
        '\u5f11': '\u5f12',
        '\u8f7c': '\u8efe',
        '\u8d33': '\u8cb0',
        '\u94c8': '\u9230',
        '\u9ca5': '\u9c23',
        '\u5bff': '\u58fd',
        '\u517d': '\u7378',
        '\u7ef6': '\u7dac',
        '\u67a2': '\u6a1e',
        '\u8f93': '\u8f38',
        '\u4e66': '\u66f8',
        '\u8d4e': '\u8d16',
        '\u5c5e': '\u5c6c',
        '\u672f': '\u8853',
        '\u6811': '\u6a39',
        '\u7ad6': '\u8c4e',
        '\u6570': '\u6578',
        '\u6445': '\u6504',
        '\u7ebe': '\u7d13',
        '\u5e05': '\u5e25',
        '\u95e9': '\u9582',
        '\u53cc': '\u96d9',
        '\u8c01': '\u8ab0',
        '\u7a0e': '\u7a05',
        '\u987a': '\u9806',
        '\u8bf4': '\u8aaa',
        '\u7855': '\u78a9',
        '\u70c1': '\u720d',
        '\u94c4': '\u9460',
        '\u4e1d': '\u7d72',
        '\u9972': '\u98fc',
        '\u53ae': '\u5edd',
        '\u9a77': '\u99df',
        '\u7f0c': '\u7de6',
        '\u9536': '\u9376',
        '\u9e36': '\u9de5',
        '\u8038': '\u8073',
        '\u6002': '\u616b',
        '\u9882': '\u980c',
        '\u8bbc': '\u8a1f',
        '\u8bf5': '\u8aa6',
        '\u64de': '\u64fb',
        '\u85ae': '\u85ea',
        '\u998a': '\u993f',
        '\u98d5': '\u98bc',
        '\u953c': '\u93aa',
        '\u82cf': '\u8607',
        '\u8bc9': '\u8a34',
        '\u8083': '\u8085',
        '\u8c21': '\u8b16',
        '\u7a23': '\u7a4c',
        '\u867d': '\u96d6',
        '\u968f': '\u96a8',
        '\u7ee5': '\u7d8f',
        '\u5c81': '\u6b72',
        '\u8c07': '\u8ab6',
        '\u5b59': '\u5b6b',
        '\u635f': '\u640d',
        '\u7b0b': '\u7b4d',
        '\u836a': '\u84c0',
        '\u72f2': '\u733b',
        '\u7f29': '\u7e2e',
        '\u7410': '\u7463',
        '\u9501': '\u9396',
        '\u5522': '\u55e9',
        '\u7743': '\u8127',
        '\u736d': '\u737a',
        '\u631e': '\u64bb',
        '\u95fc': '\u95e5',
        '\u94ca': '\u9248',
        '\u9cce': '\u9c28',
        '\u53f0': '\u81fa',
        '\u6001': '\u614b',
        '\u949b': '\u9226',
        '\u9c90': '\u9b90',
        '\u644a': '\u6524',
        '\u8d2a': '\u8caa',
        '\u762b': '\u7671',
        '\u6ee9': '\u7058',
        '\u575b': '\u58c7',
        '\u8c2d': '\u8b5a',
        '\u8c08': '\u8ac7',
        '\u53f9': '\u5606',
        '\u6619': '\u66c7',
        '\u94bd': '\u926d',
        '\u952c': '\u931f',
        '\u9878': '\u9807',
        '\u6c64': '\u6e6f',
        '\u70eb': '\u71d9',
        '\u50a5': '\u513b',
        '\u9967': '\u9933',
        '\u94f4': '\u940b',
        '\u9557': '\u93dc',
        '\u6d9b': '\u6fe4',
        '\u7ee6': '\u7d73',
        '\u8ba8': '\u8a0e',
        '\u97ec': '\u97dc',
        '\u94fd': '\u92f1',
        '\u817e': '\u9a30',
        '\u8a8a': '\u8b04',
        '\u9511': '\u92bb',
        '\u9898': '\u984c',
        '\u4f53': '\u9ad4',
        '\u5c49': '\u5c5c',
        '\u7f07': '\u7df9',
        '\u9e48': '\u9d5c',
        '\u9617': '\u95d0',
        '\u6761': '\u689d',
        '\u7c9c': '\u7cf6',
        '\u9f86': '\u9f60',
        '\u9ca6': '\u9c37',
        '\u8d34': '\u8cbc',
        '\u94c1': '\u9435',
        '\u5385': '\u5ef3',
        '\u542c': '\u807d',
        '\u70c3': '\u70f4',
        '\u94dc': '\u9285',
        '\u7edf': '\u7d71',
        '\u6078': '\u615f',
        '\u5934': '\u982d',
        '\u94ad': '\u9204',
        '\u79c3': '\u79bf',
        '\u56fe': '\u5716',
        '\u948d': '\u91f7',
        '\u56e2': '\u5718',
        '\u629f': '\u6476',
        '\u9893': '\u9839',
        '\u8715': '\u86fb',
        '\u9968': '\u98e9',
        '\u8131': '\u812b',
        '\u9e35': '\u9d15',
        '\u9a6e': '\u99b1',
        '\u9a7c': '\u99dd',
        '\u692d': '\u6a62',
        '\u7ba8': '\u7c5c',
        '\u9f0d': '\u9f09',
        '\u889c': '\u896a',
        '\u5a32': '\u5aa7',
        '\u817d': '\u8183',
        '\u5f2f': '\u5f4e',
        '\u6e7e': '\u7063',
        '\u987d': '\u9811',
        '\u4e07': '\u842c',
        '\u7ea8': '\u7d08',
        '\u7efe': '\u7db0',
        '\u7f51': '\u7db2',
        '\u8f8b': '\u8f1e',
        '\u97e6': '\u97cb',
        '\u8fdd': '\u9055',
        '\u56f4': '\u570d',
        '\u4e3a': '\u70ba',
        '\u6f4d': '\u6ff0',
        '\u7ef4': '\u7dad',
        '\u82c7': '\u8466',
        '\u4f1f': '\u5049',
        '\u4f2a': '\u507d',
        '\u7eac': '\u7def',
        '\u8c13': '\u8b02',
        '\u536b': '\u885b',
        '\u8bff': '\u8ac9',
        '\u5e0f': '\u5e43',
        '\u95f1': '\u95c8',
        '\u6ca9': '\u6e88',
        '\u6da0': '\u6f7f',
        '\u73ae': '\u744b',
        '\u97ea': '\u97d9',
        '\u709c': '\u7152',
        '\u9c94': '\u9baa',
        '\u6e29': '\u6eab',
        '\u95fb': '\u805e',
        '\u7eb9': '\u7d0b',
        '\u7a33': '\u7a69',
        '\u95ee': '\u554f',
        '\u960c': '\u95bf',
        '\u74ee': '\u7515',
        '\u631d': '\u64be',
        '\u8717': '\u8778',
        '\u6da1': '\u6e26',
        '\u7a9d': '\u7aa9',
        '\u5367': '\u81e5',
        '\u83b4': '\u8435',
        '\u9f8c': '\u9f77',
        '\u545c': '\u55da',
        '\u94a8': '\u93a2',
        '\u4e4c': '\u70cf',
        '\u8bec': '\u8aa3',
        '\u65e0': '\u7121',
        '\u829c': '\u856a',
        '\u5434': '\u5433',
        '\u575e': '\u5862',
        '\u96fe': '\u9727',
        '\u52a1': '\u52d9',
        '\u8bef': '\u8aa4',
        '\u90ac': '\u9114',
        '\u5e91': '\u5ee1',
        '\u6003': '\u61ae',
        '\u59a9': '\u5af5',
        '\u9a9b': '\u9a16',
        '\u9e49': '\u9d61',
        '\u9e5c': '\u9da9',
        '\u9521': '\u932b',
        '\u727a': '\u72a7',
        '\u88ad': '\u8972',
        '\u4e60': '\u7fd2',
        '\u94e3': '\u9291',
        '\u620f': '\u6232',
        '\u7ec6': '\u7d30',
        '\u9969': '\u993c',
        '\u960b': '\u9b29',
        '\u73ba': '\u74bd',
        '\u89cb': '\u89a1',
        '\u867e': '\u8766',
        '\u8f96': '\u8f44',
        '\u5ce1': '\u5cfd',
        '\u4fa0': '\u4fe0',
        '\u72ed': '\u72f9',
        '\u53a6': '\u5ec8',
        '\u5413': '\u5687',
        '\u7856': '\u7864',
        '\u9c9c': '\u9bae',
        '\u7ea4': '\u7e96',
        '\u8d24': '\u8ce2',
        '\u8854': '\u929c',
        '\u95f2': '\u9591',
        '\u663e': '\u986f',
        '\u9669': '\u96aa',
        '\u73b0': '\u73fe',
        '\u732e': '\u737b',
        '\u53bf': '\u7e23',
        '\u9985': '\u9921',
        '\u7fa1': '\u7fa8',
        '\u5baa': '\u61b2',
        '\u7ebf': '\u7dda',
        '\u82cb': '\u83a7',
        '\u83b6': '\u859f',
        '\u85d3': '\u861a',
        '\u5c98': '\u5cf4',
        '\u7303': '\u736b',
        '\u5a34': '\u5afb',
        '\u9e47': '\u9df4',
        '\u75eb': '\u7647',
        '\u869d': '\u8814',
        '\u7c7c': '\u79c8',
        '\u8df9': '\u8e9a',
        '\u53a2': '\u5ec2',
        '\u9576': '\u9472',
        '\u4e61': '\u9109',
        '\u8be6': '\u8a73',
        '\u54cd': '\u97ff',
        '\u9879': '\u9805',
        '\u8297': '\u858c',
        '\u9977': '\u9909',
        '\u9aa7': '\u9a64',
        '\u7f03': '\u7dd7',
        '\u98e8': '\u9957',
        '\u8427': '\u856d',
        '\u56a3': '\u56c2',
        '\u9500': '\u92b7',
        '\u6653': '\u66c9',
        '\u5578': '\u562f',
        '\u54d3': '\u5635',
        '\u6f47': '\u701f',
        '\u9a81': '\u9a4d',
        '\u7ee1': '\u7d83',
        '\u67ad': '\u689f',
        '\u7bab': '\u7c2b',
        '\u534f': '\u5354',
        '\u631f': '\u633e',
        '\u643a': '\u651c',
        '\u80c1': '\u8105',
        '\u8c10': '\u8ae7',
        '\u5199': '\u5beb',
        '\u6cfb': '\u7009',
        '\u8c22': '\u8b1d',
        '\u4eb5': '\u893b',
        '\u64b7': '\u64f7',
        '\u7ec1': '\u7d32',
        '\u7f2c': '\u7e88',
        '\u950c': '\u92c5',
        '\u8845': '\u91c1',
        '\u5174': '\u8208',
        '\u9649': '\u9658',
        '\u8365': '\u6ece',
        '\u51f6': '\u5147',
        '\u6c79': '\u6d36',
        '\u9508': '\u92b9',
        '\u7ee3': '\u7e61',
        '\u9990': '\u9948',
        '\u9e3a': '\u9d42',
        '\u865a': '\u865b',
        '\u5618': '\u5653',
        '\u987b': '\u9808',
        '\u8bb8': '\u8a31',
        '\u53d9': '\u6558',
        '\u7eea': '\u7dd2',
        '\u7eed': '\u7e8c',
        '\u8be9': '\u8a61',
        '\u987c': '\u980a',
        '\u8f69': '\u8ed2',
        '\u60ac': '\u61f8',
        '\u9009': '\u9078',
        '\u7663': '\u766c',
        '\u7eda': '\u7d62',
        '\u8c16': '\u8afc',
        '\u94c9': '\u9249',
        '\u955f': '\u93c7',
        '\u5b66': '\u5b78',
        '\u8c11': '\u8b14',
        '\u6cf6': '\u6fa9',
        '\u9cd5': '\u9c48',
        '\u52cb': '\u52db',
        '\u8be2': '\u8a62',
        '\u5bfb': '\u5c0b',
        '\u9a6f': '\u99b4',
        '\u8bad': '\u8a13',
        '\u8baf': '\u8a0a',
        '\u900a': '\u905c',
        '\u57d9': '\u5864',
        '\u6d54': '\u6f6f',
        '\u9c9f': '\u9c58',
        '\u538b': '\u58d3',
        '\u9e26': '\u9d09',
        '\u9e2d': '\u9d28',
        '\u54d1': '\u555e',
        '\u4e9a': '\u4e9e',
        '\u8bb6': '\u8a1d',
        '\u57ad': '\u57e1',
        '\u5a05': '\u5a6d',
        '\u6860': '\u690f',
        '\u6c29': '\u6c2c',
        '\u9609': '\u95b9',
        '\u70df': '\u7159',
        '\u76d0': '\u9e7d',
        '\u4e25': '\u56b4',
        '\u5ca9': '\u5dd6',
        '\u989c': '\u984f',
        '\u960e': '\u95bb',
        '\u8273': '\u8277',
        '\u538c': '\u53ad',
        '\u781a': '\u786f',
        '\u5f66': '\u5f65',
        '\u8c1a': '\u8afa',
        '\u9a8c': '\u9a57',
        '\u53a3': '\u53b4',
        '\u8d5d': '\u8d17',
        '\u4fe8': '\u513c',
        '\u5156': '\u5157',
        '\u8c33': '\u8b9e',
        '\u6079': '\u61e8',
        '\u95eb': '\u9586',
        '\u917d': '\u91c5',
        '\u9b47': '\u9b58',
        '\u990d': '\u995c',
        '\u9f39': '\u9f34',
        '\u9e2f': '\u9d26',
        '\u6768': '\u694a',
        '\u626c': '\u63da',
        '\u75a1': '\u760d',
        '\u9633': '\u967d',
        '\u75d2': '\u7662',
        '\u517b': '\u990a',
        '\u6837': '\u6a23',
        '\u7080': '\u716c',
        '\u7476': '\u7464',
        '\u6447': '\u6416',
        '\u5c27': '\u582f',
        '\u9065': '\u9059',
        '\u7a91': '\u7aaf',
        '\u8c23': '\u8b20',
        '\u836f': '\u85e5',
        '\u8f7a': '\u8efa',
        '\u9e5e': '\u9dc2',
        '\u9cd0': '\u9c29',
        '\u7237': '\u723a',
        '\u9875': '\u9801',
        '\u4e1a': '\u696d',
        '\u53f6': '\u8449',
        '\u9765': '\u9768',
        '\u8c12': '\u8b01',
        '\u90ba': '\u9134',
        '\u6654': '\u66c4',
        '\u70e8': '\u71c1',
        '\u533b': '\u91ab',
        '\u94f1': '\u92a5',
        '\u9890': '\u9824',
        '\u9057': '\u907a',
        '\u4eea': '\u5100',
        '\u8681': '\u87fb',
        '\u827a': '\u85dd',
        '\u4ebf': '\u5104',
        '\u5fc6': '\u61b6',
        '\u4e49': '\u7fa9',
        '\u8be3': '\u8a63',
        '\u8bae': '\u8b70',
        '\u8c0a': '\u8abc',
        '\u8bd1': '\u8b6f',
        '\u5f02': '\u7570',
        '\u7ece': '\u7e79',
        '\u8bd2': '\u8a52',
        '\u5453': '\u56c8',
        '\u5cc4': '\u5da7',
        '\u9974': '\u98f4',
        '\u603f': '\u61cc',
        '\u9a7f': '\u9a5b',
        '\u7f22': '\u7e0a',
        '\u8f76': '\u8efc',
        '\u8d3b': '\u8cbd',
        '\u9487': '\u91d4',
        '\u9552': '\u93b0',
        '\u9571': '\u943f',
        '\u7617': '\u761e',
        '\u8223': '\u8264',
        '\u836b': '\u852d',
        '\u9634': '\u9670',
        '\u94f6': '\u9280',
        '\u996e': '\u98f2',
        '\u9690': '\u96b1',
        '\u94df': '\u92a6',
        '\u763e': '\u766e',
        '\u6a31': '\u6afb',
        '\u5a74': '\u5b30',
        '\u9e70': '\u9df9',
        '\u5e94': '\u61c9',
        '\u7f28': '\u7e93',
        '\u83b9': '\u7469',
        '\u8424': '\u87a2',
        '\u8425': '\u71df',
        '\u8367': '\u7192',
        '\u8747': '\u8805',
        '\u8d62': '\u8d0f',
        '\u9896': '\u7a4e',
        '\u8314': '\u584b',
        '\u83ba': '\u9daf',
        '\u8426': '\u7e08',
        '\u84e5': '\u93a3',
        '\u6484': '\u6516',
        '\u5624': '\u56b6',
        '\u6ee2': '\u7005',
        '\u6f46': '\u7020',
        '\u748e': '\u74d4',
        '\u9e66': '\u9e1a',
        '\u763f': '\u766d',
        '\u988f': '\u9826',
        '\u7f42': '\u7f4c',
        '\u54df': '\u55b2',
        '\u62e5': '\u64c1',
        '\u4f63': '\u50ad',
        '\u75c8': '\u7670',
        '\u8e0a': '\u8e34',
        '\u548f': '\u8a60',
        '\u955b': '\u93de',
        '\u4f18': '\u512a',
        '\u5fe7': '\u6182',
        '\u90ae': '\u90f5',
        '\u94c0': '\u923e',
        '\u72b9': '\u7336',
        '\u8bf1': '\u8a98',
        '\u83b8': '\u8555',
        '\u94d5': '\u92aa',
        '\u9c7f': '\u9b77',
        '\u8206': '\u8f3f',
        '\u9c7c': '\u9b5a',
        '\u6e14': '\u6f01',
        '\u5a31': '\u5a1b',
        '\u4e0e': '\u8207',
        '\u5c7f': '\u5dbc',
        '\u8bed': '\u8a9e',
        '\u72f1': '\u7344',
        '\u8a89': '\u8b7d',
        '\u9884': '\u9810',
        '\u9a6d': '\u99ad',
        '\u4f1b': '\u50b4',
        '\u4fe3': '\u4fc1',
        '\u8c00': '\u8adb',
        '\u8c15': '\u8aed',
        '\u84e3': '\u8577',
        '\u5d5b': '\u5d33',
        '\u996b': '\u98eb',
        '\u9608': '\u95be',
        '\u59aa': '\u5ad7',
        '\u7ea1': '\u7d06',
        '\u89ce': '\u89a6',
        '\u6b24': '\u6b5f',
        '\u94b0': '\u923a',
        '\u9e46': '\u9d52',
        '\u9e6c': '\u9df8',
        '\u9f89': '\u9f6c',
        '\u9e33': '\u9d1b',
        '\u6e0a': '\u6df5',
        '\u8f95': '\u8f45',
        '\u56ed': '\u5712',
        '\u5458': '\u54e1',
        '\u5706': '\u5713',
        '\u7f18': '\u7de3',
        '\u8fdc': '\u9060',
        '\u6a7c': '\u6ade',
        '\u9e22': '\u9cf6',
        '\u9f0b': '\u9eff',
        '\u7ea6': '\u7d04',
        '\u8dc3': '\u8e8d',
        '\u94a5': '\u9470',
        '\u7ca4': '\u7cb5',
        '\u60a6': '\u6085',
        '\u9605': '\u95b1',
        '\u94ba': '\u925e',
        '\u90e7': '\u9116',
        '\u5300': '\u52fb',
        '\u9668': '\u9695',
        '\u8fd0': '\u904b',
        '\u8574': '\u860a',
        '\u915d': '\u919e',
        '\u6655': '\u6688',
        '\u97f5': '\u97fb',
        '\u90d3': '\u9106',
        '\u82b8': '\u8553',
        '\u607d': '\u60f2',
        '\u6120': '\u614d',
        '\u7ead': '\u7d1c',
        '\u97eb': '\u97de',
        '\u6b92': '\u6b9e',
        '\u6c32': '\u6c33',
        '\u6742': '\u96dc',
        '\u707e': '\u707d',
        '\u8f7d': '\u8f09',
        '\u6512': '\u6522',
        '\u6682': '\u66ab',
        '\u8d5e': '\u8d0a',
        '\u74d2': '\u74da',
        '\u8db1': '\u8db2',
        '\u933e': '\u93e8',
        '\u8d43': '\u8d13',
        '\u810f': '\u81df',
        '\u9a75': '\u99d4',
        '\u51ff': '\u947f',
        '\u67a3': '\u68d7',
        '\u8d23': '\u8cac',
        '\u62e9': '\u64c7',
        '\u5219': '\u5247',
        '\u6cfd': '\u6fa4',
        '\u8d5c': '\u8cfe',
        '\u5567': '\u5616',
        '\u5e3b': '\u5e58',
        '\u7ba6': '\u7c00',
        '\u8d3c': '\u8cca',
        '\u8c2e': '\u8b56',
        '\u8d60': '\u8d08',
        '\u7efc': '\u7d9c',
        '\u7f2f': '\u7e52',
        '\u8f67': '\u8ecb',
        '\u94e1': '\u9358',
        '\u95f8': '\u9598',
        '\u6805': '\u67f5',
        '\u8bc8': '\u8a50',
        '\u658b': '\u9f4b',
        '\u503a': '\u50b5',
        '\u6be1': '\u6c08',
        '\u76cf': '\u76de',
        '\u65a9': '\u65ac',
        '\u8f97': '\u8f3e',
        '\u5d2d': '\u5d84',
        '\u6808': '\u68e7',
        '\u6218': '\u6230',
        '\u7efd': '\u7dbb',
        '\u8c35': '\u8b6b',
        '\u5f20': '\u5f35',
        '\u6da8': '\u6f32',
        '\u5e10': '\u5e33',
        '\u8d26': '\u8cec',
        '\u80c0': '\u8139',
        '\u8d75': '\u8d99',
        '\u8bcf': '\u8a54',
        '\u948a': '\u91d7',
        '\u86f0': '\u87c4',
        '\u8f99': '\u8f4d',
        '\u9517': '\u937a',
        '\u8fd9': '\u9019',
        '\u8c2a': '\u8b2b',
        '\u8f84': '\u8f12',
        '\u9e67': '\u9dd3',
        '\u8d1e': '\u8c9e',
        '\u9488': '\u91dd',
        '\u4fa6': '\u5075',
        '\u8bca': '\u8a3a',
        '\u9547': '\u93ae',
        '\u9635': '\u9663',
        '\u6d48': '\u6e5e',
        '\u7f1c': '\u7e1d',
        '\u6862': '\u6968',
        '\u8f78': '\u8eeb',
        '\u8d48': '\u8cd1',
        '\u796f': '\u798e',
        '\u9e29': '\u9d06',
        '\u6323': '\u6399',
        '\u7741': '\u775c',
        '\u72f0': '\u7319',
        '\u4e89': '\u722d',
        '\u5e27': '\u5e40',
        '\u75c7': '\u7665',
        '\u90d1': '\u912d',
        '\u8bc1': '\u8b49',
        '\u8be4': '\u8acd',
        '\u5ce5': '\u5d22',
        '\u94b2': '\u9266',
        '\u94ee': '\u931a',
        '\u7b5d': '\u7b8f',
        '\u7ec7': '\u7e54',
        '\u804c': '\u8077',
        '\u6267': '\u57f7',
        '\u7eb8': '\u7d19',
        '\u631a': '\u646f',
        '\u63b7': '\u64f2',
        '\u5e1c': '\u5e5f',
        '\u8d28': '\u8cea',
        '\u6ede': '\u6eef',
        '\u9a98': '\u9a2d',
        '\u6809': '\u6adb',
        '\u6800': '\u6894',
        '\u8f75': '\u8ef9',
        '\u8f7e': '\u8f0a',
        '\u8d3d': '\u8d04',
        '\u9e37': '\u9dd9',
        '\u86f3': '\u8784',
        '\u7d77': '\u7e36',
        '\u8e2c': '\u8e93',
        '\u8e2f': '\u8e91',
        '\u89ef': '\u89f6',
        '\u949f': '\u9418',
        '\u7ec8': '\u7d42',
        '\u79cd': '\u7a2e',
        '\u80bf': '\u816b',
        '\u4f17': '\u773e',
        '\u953a': '\u937e',
        '\u8bcc': '\u8b05',
        '\u8f74': '\u8ef8',
        '\u76b1': '\u76ba',
        '\u663c': '\u665d',
        '\u9aa4': '\u9a5f',
        '\u7ea3': '\u7d02',
        '\u7ec9': '\u7e10',
        '\u732a': '\u8c6c',
        '\u8bf8': '\u8af8',
        '\u8bdb': '\u8a85',
        '\u70db': '\u71ed',
        '\u77a9': '\u77da',
        '\u5631': '\u56d1',
        '\u8d2e': '\u8caf',
        '\u94f8': '\u9444',
        '\u9a7b': '\u99d0',
        '\u4f2b': '\u4f47',
        '\u69e0': '\u6ae7',
        '\u94e2': '\u9296',
        '\u4e13': '\u5c08',
        '\u7816': '\u78da',
        '\u8f6c': '\u8f49',
        '\u8d5a': '\u8cfa',
        '\u556d': '\u56c0',
        '\u9994': '\u994c',
        '\u989e': '\u9873',
        '\u6869': '\u6a01',
        '\u5e84': '\u838a',
        '\u88c5': '\u88dd',
        '\u5986': '\u599d',
        '\u58ee': '\u58ef',
        '\u72b6': '\u72c0',
        '\u9525': '\u9310',
        '\u8d58': '\u8d05',
        '\u5760': '\u589c',
        '\u7f00': '\u7db4',
        '\u9a93': '\u9a05',
        '\u7f12': '\u7e0b',
        '\u8c06': '\u8ac4',
        '\u51c6': '\u6e96',
        '\u7740': '\u8457',
        '\u6d4a': '\u6fc1',
        '\u8bfc': '\u8ad1',
        '\u956f': '\u9432',
        '\u5179': '\u8332',
        '\u8d44': '\u8cc7',
        '\u6e0d': '\u6f2c',
        '\u8c18': '\u8aee',
        '\u7f01': '\u7dc7',
        '\u8f8e': '\u8f1c',
        '\u8d40': '\u8cb2',
        '\u7726': '\u7725',
        '\u9531': '\u9319',
        '\u9f87': '\u9f5c',
        '\u9cbb': '\u9bd4',
        '\u8e2a': '\u8e64',
        '\u603b': '\u7e3d',
        '\u7eb5': '\u7e31',
        '\u506c': '\u50af',
        '\u90b9': '\u9112',
        '\u8bf9': '\u8acf',
        '\u9a7a': '\u9a36',
        '\u9cb0': '\u9beb',
        '\u8bc5': '\u8a5b',
        '\u7ec4': '\u7d44',
        '\u955e': '\u93c3',
        '\u94bb': '\u9246',
        '\u7f35': '\u7e98',
        '\u8e9c': '\u8ea6',
        '\u9cdf': '\u9c52',
        '\u7ff1': '\u7ffa',
        '\u5e76': '\u4e26',
        '\u535c': '\u8514',
        '\u6c89': '\u6c88',
        '\u4e11': '\u919c',
        '\u6dc0': '\u6fb1',
        '\u8fed': '\u53e0',
        '\u6597': '\u9b25',
        '\u8303': '\u7bc4',
        '\u5e72': '\u5e79',
        '\u768b': '\u81ef',
        '\u7845': '\u77fd',
        '\u67dc': '\u6ac3',
        '\u540e': '\u5f8c',
        '\u4f19': '\u5925',
        '\u79f8': '\u7a2d',
        '\u6770': '\u5091',
        '\u8bc0': '\u8a23',
        '\u5938': '\u8a87',
        '\u91cc': '\u88cf',
        '\u51cc': '\u6de9',
        '\u4e48': '\u9ebd',
        '\u9709': '\u9ef4',
        '\u637b': '\u649a',
        '\u51c4': '\u6dd2',
        '\u6266': '\u6261',
        '\u5723': '\u8056',
        '\u5c38': '\u5c4d',
        '\u62ac': '\u64e1',
        '\u6d82': '\u5857',
        '\u6d3c': '\u7aaa',
        '\u5582': '\u9935',
        '\u6c61': '\u6c59',
        '\u9528': '\u9341',
        '\u54b8': '\u9e79',
        '\u874e': '\u880d',
        '\u5f5d': '\u5f5c',
        '\u6d8c': '\u6e67',
        '\u6e38': '\u904a',
        '\u5401': '\u7c72',
        '\u5fa1': '\u79a6',
        '\u613f': '\u9858',
        '\u5cb3': '\u5dbd',
        '\u4e91': '\u96f2',
        '\u7076': '\u7ac8',
        '\u624e': '\u7d2e',
        '\u672d': '\u5284',
        '\u7b51': '\u7bc9',
        '\u4e8e': '\u65bc',
        '\u5fd7': '\u8a8c',
        '\u6ce8': '\u8a3b',
        '\u51cb': '\u96d5',
        '\u8ba0': '\u8a01',
        '\u8c2b': '\u8b7e',
        '\u90c4': '\u90e4',
        '\u52d0': '\u731b',
        '\u51fc': '\u6c39',
        '\u5742': '\u962a',
        '\u5785': '\u58df',
        '\u57b4': '\u5816',
        '\u57ef': '\u57b5',
        '\u57dd': '\u588a',
        '\u82d8': '\u6abe',
        '\u836c': '\u8552',
        '\u836e': '\u8464',
        '\u839c': '\u84e7',
        '\u83bc': '\u8493',
        '\u83f0': '\u83c7',
        '\u85c1': '\u69c1',
        '\u63f8': '\u6463',
        '\u5412': '\u54a4',
        '\u5423': '\u551a',
        '\u5494': '\u54e2',
        '\u549d': '\u565d',
        '\u54b4': '\u5645',
        '\u5658': '\u6485',
        '\u567c': '\u5288',
        '\u56af': '\u8b14',
        '\u5e5e': '\u8946',
        '\u5c99': '\u5db4',
        '\u5d74': '\u810a',
        '\u5f77': '\u4eff',
        '\u5fbc': '\u50e5',
        '\u72b8': '\u7341',
        '\u72cd': '\u9e85',
        '\u9980': '\u9918',
        '\u9987': '\u9937',
        '\u9993': '\u994a',
        '\u9995': '\u9962',
        '\u6123': '\u695e',
        '\u61b7': '\u6035',
        '\u61d4': '\u61cd',
        '\u4e2c': '\u723f',
        '\u6e86': '\u6f35',
        '\u6edf': '\u7069',
        '\u6eb7': '\u6df7',
        '\u6f24': '\u6feb',
        '\u6f74': '\u7026',
        '\u6fb9': '\u6de1',
        '\u752f': '\u5be7',
        '\u7e9f': '\u7cf8',
        '\u7ed4': '\u7d5d',
        '\u7ef1': '\u7dd4',
        '\u73c9': '\u7449',
        '\u67a7': '\u6898',
        '\u684a': '\u68ec',
        '\u6849': '\u6848',
        '\u69d4': '\u6a70',
        '\u6a65': '\u6aeb',
        '\u8f71': '\u8ef2',
        '\u8f77': '\u8ee4',
        '\u8d4d': '\u8ceb',
        '\u80b7': '\u8181',
        '\u80e8': '\u8156',
        '\u98da': '\u98c8',
        '\u7173': '\u7cca',
        '\u7145': '\u7146',
        '\u7198': '\u6e9c',
        '\u610d': '\u6e63',
        '\u6dfc': '\u6e3a',
        '\u781c': '\u78b8',
        '\u78d9': '\u6efe',
        '\u770d': '\u7798',
        '\u949a': '\u9208',
        '\u94b7': '\u9255',
        '\u94d8': '\u92e3',
        '\u94de': '\u92b1',
        '\u9503': '\u92e5',
        '\u950d': '\u92f6',
        '\u950e': '\u9426',
        '\u950f': '\u9427',
        '\u9518': '\u9369',
        '\u951d': '\u9340',
        '\u952a': '\u9343',
        '\u952b': '\u9307',
        '\u953f': '\u9384',
        '\u9545': '\u9387',
        '\u954e': '\u93bf',
        '\u9562': '\u941d',
        '\u9565': '\u9465',
        '\u9569': '\u9479',
        '\u9572': '\u9454',
        '\u7a06': '\u7a6d',
        '\u9e4b': '\u9d93',
        '\u9e5b': '\u9da5',
        '\u9e71': '\u9e0c',
        '\u75ac': '\u7667',
        '\u75b4': '\u5c59',
        '\u75d6': '\u7602',
        '\u766f': '\u81d2',
        '\u88e5': '\u8947',
        '\u8941': '\u7e48',
        '\u8022': '\u802e',
        '\u98a5': '\u986c',
        '\u87a8': '\u87ce',
        '\u9eb4': '\u9eaf',
        '\u9c85': '\u9b81',
        '\u9c86': '\u9b83',
        '\u9c87': '\u9b8e',
        '\u9c9e': '\u9bd7',
        '\u9cb4': '\u9bdd',
        '\u9cba': '\u9bf4',
        '\u9cbc': '\u9c5d',
        '\u9cca': '\u9bff',
        '\u9ccb': '\u9c20',
        '\u9cd8': '\u9c35',
        '\u9cd9': '\u9c45',
        '\u9792': '\u97bd',
        '\u97b4': '\u97dd',
        '\u9f44': '\u9f47'
    }
}
    ;
YX.Assist.prototype.voice = function (assist) {
    var $ = assist.$;
    var instance = this;
    var error = function () { };
    this.PR = assist.plugin.read;
    this.state = {
        "volume": 100,
        "speed": 0,
        "packet": 0,
        "read": 0,
        "mode": 1
    };
    this.eaching = false;
    this.forcing = false;
    this.init = function (doc) {
        if (doc != document)
            return;
        this.PR.Init(false, assist.module.config.scriptUrl);
        this.PR.OnError = error;
        this.packet(this.state.packet);
        this.volume(this.state.volume);
        this.speed(this.state.speed);
        this.open(this.state.read)
    }
        ;
    this.open = function (state, func) {
        if (this.state.read != state) {
            this.state.read = state;
            assist.module.cookie.set("read", state)
        }
        this.stop();
        if (state)
            this.PR.Open();
        else
            this.PR.Close();
        return typeof (func) == "function" ? func(state) : null
    }
        ;
    this.isRead = function () {
        return this.state.read == 1
    }
        ;
    this.stop = function () {
        if (!this.isRead() || this.isEach())
            return;
        this.PR.Stop()
    }
        ;
    this.packet = function (val, func) {
        if (typeof (val) !== "number")
            return this.state.packet;
        if (val != this.state.packet) {
            this.state.packet = val;
            assist.module.cookie.set("packet", val)
        }
        this.PR.SetPacket(val);
        return typeof (func) == "function" ? func(val) : null
    }
        ;
    this.volume = function (val, func) {
        if (typeof (val) !== "number")
            return this.state.volume;
        if (val != this.state.volume) {
            this.state.volume = val;
            assist.module.cookie.set("volume", val)
        }
        this.PR.SetVolume(val);
        return typeof (func) == "function" ? func(val) : null
    }
        ;
    this.mode = function (val, func) {
        if (typeof (val) !== "number")
            return this.state.mode;
        if (val != this.state.mode) {
            this.state.mode = val;
            this.stopEach()
        }
        return typeof (func) == "function" ? func(val) : null
    }
        ;
    this.speed = function (val, func) {
        if (typeof (val) !== "number")
            return this.state.speed;
        if (val != this.state.speed) {
            this.state.speed = val;
            assist.module.cookie.set("speed", val)
        }
        this.PR.SetSpeed(val);
        return typeof (func) == "function" ? func(val) : null
    }
        ;
    this.read = function (text, onfinish, onload, onbeforeload, iseach) {
        if (this.isEach() && !iseach)
            return;
        if (!this.state.read)
            return;
        if (this.spaceTimer)
            clearTimeout(this.spaceTimer);
        this.spaceTimer = setTimeout(function () {
            instance.readEx(text, onfinish, onload, onbeforeload, iseach)
        }, 500)
    }
        ;
    this.readEx = function (text, onfinish, onload, onbeforeload, iseach) {
        if (!this.state.read)
            return;
        if (text && text.length > 51) {
            var sens = assist.module.page.getSentences(text);
            if (sens.length > 1)
                return instance.splitRead(sens, 0, onfinish, onload, onbeforeload)
        }
        return instance.PR.PointerRead(text, onfinish, onload, onbeforeload)
    }
        ;
    this.eachReadEx = function (text, onfinish, onload, onbeforeload) {
        return this.readEx(text, onfinish, onload, onbeforeload, true)
    }
        ;
    this.splitRead = function (arr, idx, onfinish, onload, onbeforeload) {
        if (!this.state.read)
            return;
        if (idx == 0 && typeof (onbeforeload) == "function")
            onbeforeload();
        var text = arr[idx];
        var pretext = idx > arr.length - 2 ? "" : arr[idx + 1];
        assist.module.wza.screen.tip(text);
        this.readEx(text, function () {
            if ((idx >= arr.length - 1) && typeof (onfinish) == "function") {
                onfinish(text);
                return
            }
            instance.splitRead(arr, idx + 1, onfinish, null, null)
        }, function () {
            if (idx == 0 && typeof (onload) == "function")
                onload(text)
        })
    }
        ;
    this.play = function (path, onfinish, isself, onload, onbeforeload) {
        if (this.isEach())
            return;
        return this.PR.Play(path, onfinish, isself, onload, onbeforeload)
    }
        ;
    this.forcePlay = function (path, onfinish, isself, onload, onbeforeload) {
        var isRead = this.isRead();
        if (!isRead)
            this.PR.Open();
        this.forcing = true;
        this.PR.Play(path, onfinish, isself, onload, onbeforeload);
        if (!isRead)
            this.PR.Close()
    }
        ;
    this.forceStop = function () {
        this.forcing = false;
        this.PR.Stop()
    }
        ;
    this.isEach = function () {
        return (this.state.mode == 2 && this.eaching) || this.forcing
    }
        ;
    this.startEach = function (node, isKey) {
        if (this.isEach())
            return;
        if (window.eachTimer)
            clearTimeout(window.eachTimer);
        window.eachTimer = setTimeout(function () {
            assist.module.voice.eaching = true;
            assist.module.region.eachLeaf(node, true, isKey)
        }, 3500)
    }
        ;
    this.stopEach = function (fullStop) {
        if (fullStop) {
            this.eaching = false;
            this.stop()
        }
        if (window.eachTimer) {
            clearTimeout(window.eachTimer);
            window.eachTimer = 0
        }
    }
        ;
    this.eachPause = function () {
        this.PR.Stop();
        this.eaching = false
    }
        ;
    this.eachResume = function () {
        this.eaching = true;
        assist.module.region.eachLeaf(assist.module.region.eachNode, true, true)
    }
        ;
    this.eachRead = function (text, pretext, loadFunc, finishFunc, isFirst, showFunc) {
        if (!this.state.read)
            return;
        return this.PR.ContinueRead(text, pretext, loadFunc, finishFunc, isFirst, showFunc)
    }
}
    ;
YX.Assist.prototype.cookie = function (assist) {
    var $ = assist.$;
    var instance = this;
    var pluses = /\+/g;
    this.state = {};
    this.init = function (doc) {
        if (doc == document) {
            parseMemo();
            for (var mn in assist.module) {
                for (var key in assist.module[mn].state) {
                    var cv = this.get(key);
                    if (cv !== undefined)
                        assist.module[mn].state[key] = cv
                }
            }
        }
    }
        ;
    function parseMemo() {
        var referArr = document.referrer ? document.referrer.split("prmwza") : [];
        var refer = referArr.length > 1 ? referArr[1].split("end")[0] : "";
        if (refer) {
            refer = unescape(refer);
            var items = refer.split('-');
            for (var k = 0; k < items.length; k++) {
                var itemArr = items[k].split('=');
                this.set(itemArr[0], itemArr[1])
            }
        }
    }
    function getTopDomain() {
        var host = top.location.host;
        if (!/[^\.\d]/.test(host))
            return host;
        var parts = host.split('.');
        if (parts.length == 2)
            return host;
        var tops = {
            "com": true,
            "net": true,
            "gov": true,
            "org": true
        };
        if (tops[parts[parts.length - 2]] && parts.length == 3)
            return host;
        parts.shift();
        return parts.join('.')
    }
    this.each = function (func) {
        if (!func || typeof (func) != "function")
            return false;
        for (var mn in assist.module) {
            for (var key in assist.module[mn].state) {
                func(mn, key, assist.module[mn].state[key])
            }
        }
        return true
    }
        ;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s)
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s)
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value))
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s
        } catch (e) { }
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value
    }
    var config = this.memo = function (key, value, options) {
        key = "acc" + key;
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires
                    , t = options.expires = new Date();
                t.setTime(+t + days * 864e+5)
            }
            options.domain = getTopDomain();
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
        }
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            if (key && key === name) {
                result = read(cookie, value);
                break
            }
            if (!key && (cookie = read(cookie)) !== undefined)
                result[name] = cookie
        }
        result = result && !/[^\d]/.test(result) ? parseInt(result) : result;
        return result
    }
        ;
    config.defaults = {};
    var domain = document.location.host.split(":")[0];
    this.set = function (key, value, days) {
        days = 0;
        days = typeof (days) == "undefined" ? 30 : (days === 0 ? "" : days);
        var options = {
            expires: days,
            path: "/",
            domain: domain
        };
        return this.memo(key, value, options)
    }
        ;
    this.get = function (key) {
        return this.memo(key)
    }
        ;
    this.remove = function (key) {
        var options = {
            path: "/",
            domain: domain,
            expires: -1
        };
        this.memo(key, '', options)
    }
        ;
    this.clear = function () {
        var data = document.cookie;
        if (!data)
            return;
        var dataArr = data.split(";");
        for (var i = 0; i < dataArr.length; i++) {
            var key = dataArr[i].split("=")[0];
            key = key.toString().replace(/\s/g, "");
            if (key.indexOf("acc") == 0)
                this.remove(key.substring(3))
        }
    }
}
    ;
YX.Assist.prototype.node = function (assist) {
    var $ = assist.$;
    var instance = this;
    var tagNames = {
        "A": true,
        "IMG": true,
        "BUTTON": true,
        "INPUT": true,
        "LABEL": true,
        "TEXT": true,
        "AREA": true,
        "OBJECT": true,
        "EMBED": true,
        "SELECT": true,
        "TEXTAREA": true,
        "H1": true,
        "H2": true,
        "H3": true,
        "H4": true,
        "H5": true,
        "H6": true,
        "TEXT": true
    };
    this.state = {};
    this.init = function (doc) { }
        ;
    this.leafNode = function (node) {
        if (!node || !node.nodeType || node.nodeType == 3) {
            return true
        } else {
            return this.leafElement(node)
        }
    }
        ;
    this.internalNode = function (node) {
        var parentNode = node.parentNode;
        return parentNode && (parentNode.nodeName == "OPTION" || parentNode.nodeName == "SELECT")
    }
        ;
    this.leafElement = function (elem) {
        switch (elem.tagName) {
            case 'A':
                if (elem && elem.href && elem.href.indexOf("javascript:") == -1)
                    return true;
                if ($(elem).children().length < 2)
                    return true;
                if ($(elem).children("font,strong,em").length > 1)
                    return true;
                return false;
            case 'AREA':
            case 'OBJECT':
            case 'EMBED':
            case 'BUTTON':
            case 'TEXTAREA':
            case 'IMG':
            case 'NOSCRIPT':
            case 'HEAD':
            case 'SCRIPT':
            case 'STYLE':
                return true;
            case 'SELECT':
                return this.isVisible(elem)
        }
        return !elem.hasChildNodes()
    }
        ;
    this.isVisible = function (node, pnode) {
        pnode = pnode ? pnode : node.ownerDocument.body;
        if (node.nodeName == "BODY" || node.nodeName == "HTML" || node == pnode)
            return true;
        if (!node || !node.parentNode)
            return false;
        if (node.style && (node.style.display == 'none' || node.style.visibility == 'hidden'))
            return false;
        if (window.getComputedStyle) {
            var style = window.getComputedStyle(node, "");
            if (style.display == 'none' || style.visibility == 'hidden')
                return false
        } else {
            var style = node.currentStyle;
            if (style && (style['display'] == 'none' || style['visibility'] == 'hidden'))
                return false
        }
        return this.isVisible(node.parentNode, pnode)
    }
        ;
    this.isFocusable = function (node) {
        if (!node)
            return false;
        if (node.nodeType == 1) {
            if (node.tagName == "INPUT") {
                var input_type = node.getAttribute('type');
                if (!input_type || input_type != 'hidden')
                    return true
            }
            if ((node.tagName == "A" && $(node).attr('href')) || node.tagName == "SELECT" || node.tagName == "TEXTAREA" || node.tagName == "BUTTON")
                return true;
            if (node.getAttribute('tabindex'))
                return true
        }
        return false
    }
        ;
    this.handleNode = function (node, goingDown) {
        if (!goingDown || !node)
            return "";
        var return_val = "";
        switch (node.nodeType) {
            case 1:
                if (!this.isVisible(node)) {
                    return_val = ""
                } else {
                    return_val = this.handleElement(node)
                }
                break;
            case 2:
                return_val = "";
                break;
            case 3:
                return_val = node.data;
                if (return_val.length > 0 && return_val.match(/[^\s,\.\?!:\-]/)) {
                    return_val = ret_val.replace(/&#\d+;/, "")
                } else {
                    return_val = ""
                }
                break;
            case 8:
            case 9:
            case 10:
            default:
                return_val = ""
        }
        return return_val
    }
        ;
    this.getInputLabelText = function (node) {
        var cNode = $(node).parent();
        if (cNode) {
            var text = assist.module.util.removeSpecialCharacters(cNode.text());
            if (text && text.length < 6)
                return cNode.text();
            if (cNode.get(0).tagName == "TD" && cNode.prev() && cNode.prev().get(0).tagName == "TD")
                return cNode.prev().text();
            cNode = cNode.parent().children().length >= 2 ? cNode.prev() : cNode.parent().prev()
        }
        if (cNode.find("a,li,span,label").length > 1)
            return "";
        if (cNode) {
            var text = assist.module.util.removeSpecialCharacters(cNode.text());
            return text && text.length < 7 ? text : ""
        }
        return ""
    }
        ;
    this.handleInputNode = function (elem) {
        var result = "";
        var attrType = elem.getAttribute('type');
        attrType = attrType ? attrType : "text";
        switch (attrType) {
            case 'button':
                result = elem.value + assist.module.text.get('button');
                break;
            case 'checkbox':
                result = this.getInputLabelText(elem) + assist.module.text.get("checkbox") + " " + assist.module.text.get('current') + ((elem.checked == true) ? assist.module.text.get('checked') : assist.module.text.get('unchecked'));
                break;
            case 'file':
                result = assist.module.text.get('file');
                break;
            case 'image':
                result = elem.value + assist.module.text.get('imageButton');
                break;
            case 'password':
                result = assist.module.text.get("password");
                break;
            case 'radio':
                result = this.GetInputLabelText(elem) + assist.module.text.get("radio") + " " + assist.module.text.get('current') + ((elem.checked == true) ? assist.module.text.get('checked') : assist.module.text.get('unchecked'));
                break;
            case 'reset':
                result = elem.value + assist.module.text.get('reset');
                break;
            case 'submit':
                result = elem.value + assist.module.text.get('submit');
                break;
            case 'hidden':
                break;
            case 'text':
                var value = "";
                try {
                    value = elem.value ? elem.value : assist.module.text.get('emptyContent')
                } catch (err) { }
                ; result = this.getInputLabelText(elem) + assist.module.text.get('text') + assist.module.text.get('currentValue') + value;
            default:
                break
        }
        return result
    }
        ;
    this.handleElement = function (elem) {
        var result = "";
        $("script,style", elem).remove();
        switch (elem.tagName) {
            case 'A':
                var textc = $(elem).text();
                textc = textc ? textc.replace(/…$/, "").replace(/\.\.\.$/, "") : "";
                var titlec = $(elem).attr('title');
                result = assist.module.text.get('a') + " " + (titlec && titlec.length >= textc.length - 2 ? titlec : textc);
                break;
            case 'AREA':
                var titlec = $(elem).attr("title");
                result = assist.module.text.get('area') + " " + (titlec ? titlec : "");
                break;
            case 'BUTTON':
                var val = elem.value ? elem.value : "";
                val = val.replace(/\s/g, "");
                result = val + assist.module.text.get('button');
                break;
            case 'OBJECT':
            case 'EMBED':
                var titlec = $(elem).attr("title");
                result = assist.module.text.get(elem.tagName.toLowerCase()) + " " + (titlec ? titlec : "");
                break;
            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
                result = assist.module.text.get(elem.tagName.toLowerCase()) + " " + $(elem).text();
                break;
            case 'IMG':
                var imgText = $(elem).attr("title");
                imgText = imgText ? imgText : $(elem).attr("alt");
                result = assist.module.text.get('img') + " " + (imgText ? imgText : "");
                break;
            case 'INPUT':
                result = this.handleInputNode(elem);
                break;
            case 'SELECT':
                result += assist.module.text.get('select') + "," + assist.module.text.get('currentItem') + elem.options[elem.selectedIndex].text;
                break;
            case 'TEXTAREA':
                var value = "";
                try {
                    value = elem.value ? elem.value : assist.module.text.get('emptyContent')
                } catch (err) { }
                ; result = assist.module.text.get('textarea') + "," + assist.module.text.get('currentValue') + value;
                break
        }
        if (elem.getAttribute('title') && !result)
            result = elem.getAttribute('title');
        return result
    }
        ;
    this.treeTraverseRecursion = function (node, visitor, isleaf) {
        _treeTraverseRecursion(node, visitor, isleaf, 0)
    }
        ;
    var _treeTraverseRecursion = function (node, visitor, isleaf, depth) {
        if (depth > 1000)
            return;
        var nodesToVisit = new Array();
        if (node.firstChild && ((typeof isleaf != 'function') || !isleaf(node)))
            nodesToVisit.push(node.firstChild);
        if (node && node.nextSibling)
            nodesToVisit.push(node.nextSibling);
        if (node) {
            try {
                visitor(node)
            } catch (e) { }
        }
        for (var i = 0; i < nodesToVisit.length; i++) {
            _treeTraverseRecursion(nodesToVisit[i], visitor, isleaf, depth + 1)
        }
    };
    this.depthFirstVisitor = function (node, visitor, isleaf) {
        visitor(node);
        var children = node.childNodes;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!isleaf(child))
                this.depthFirstVisitor(child, visitor, isleaf)
        }
    }
        ;
    this.hasText = function (node) {
        var hasTextTagset = {
            'A': true,
            'AREA': true,
            'BUTTON': true,
            'OBJECT': true,
            'EMBED': true,
            'IMG': true,
            'INPUT': true,
            'TEXTAREA': true
        };
        if (hasTextTagset[node.tagName])
            return true;
        var text = $(node).text();
        text = assist.module.util.removeSpecialCharacters(text);
        if (text && text.length < 4 && !/[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]/.test(text))
            return false;
        return text && text.length > 0
    }
        ;
    this.getNodeText = function (node) {
        if ($(".accnode", node).length > 0) {
            node = $(node).clone().get(0);
            $(".accnode", node).remove()
        }
        var text = this.handleNode(node, true);
        if (!text)
            text = node.innerText == undefined ? node.textContent : node.innerText;
        text = assist.module.util.removeSpecialCharacters(text);
        var srcText = $(node).text();
        srcText = srcText ? srcText.replace(/\s/g, "") : "";
        if (text && assist.module.util.removeSpecialCharacters(srcText))
            return text;
        if (!text || $("img", node).length > 0)
            text = this.getImgLinkText(node);
        return text
    }
        ;
    this.getLinkText = function (node) {
        if (!node)
            return "";
        var text = $(node).text();
        text = text ? text.replace(/\s/g, "") : "";
        if (!text)
            text = $(this).attr("title");
        text = text ? text.replace(/\s/g, "") : "";
        if (!text && $(">img", node).length > 0) {
            var imgNode = $(">img", node).get(0);
            text = $(imgNode).attr("alt");
            if (!text)
                text = $(imgNode).attr("title");
            text = text ? text : ""
        }
        return text
    }
        ;
    this.getHref = function (node) {
        if (!node || !node.tagName)
            return "";
        var href = node.getAttribute("href", 2);
        if (!href || href == "#" || href.indexOf("javascript:") != -1)
            return "";
        return node.href
    }
        ;
    this.getImgLinkText = function (node) {
        if (node.tagName == "A" && $(">img", node).length > 0) {
            var tempImgNode = $(">img", node).get(0);
            text = $(tempImgNode).attr("alt");
            if (!text)
                text = $(tempImgNode).attr("title");
            if (!text)
                text = $(node).attr("title");
            text = text ? ":" + text : "";
            return assist.module.text.get('img') + assist.module.text.get('link') + text
        }
        return ""
    }
        ;
    this.isTextInputNode = function (tagName, type) {
        if (tagName)
            tagName = tagName.toLowerCase();
        if (type)
            type = type.toLowerCase();
        return (tagName == "input" && assist.module.util.inArray(type, ["text", "password"])) || tagName == "textarea"
    }
        ;
    this.getFilePath = function (node) {
        if (node.tagName == "IMG" || (node.tagName == "INPUT" && $(node).attr("type") == "image"))
            return node.src;
        if (node.tagName == "AREA") {
            var iurl = $(node).attr("href");
            if (iurl && iurl.indexOf(assist.module.config.proxyfix) != -1) {
                iurl = iurl.split(assist.module.config.proxyfix)[1];
                iurl = assist.module.util.urlDecode(iurl)
            }
            return this.getAbsoluteFilePath(iurl, node)
        }
        if (node.tagName == "APPLET")
            return $(node).attr("code");
        if (node.tagName == "OBJECT" || node.tagName == "EMBED") {
            var html = "";
            if (node.tagName == "OBJECT") {
                html = $(node).html()
            } else {
                html = $(node.parentNode).html()
            }
            if (!html || html.indexOf("<embed") == -1) {
                return $(node).attr("codebase")
            } else {
                var result = "";
                html.replace(/<embed.*?srcs*=s*['"]([^"']*)['"][^<>]*?>/i, function (a, b) {
                    result = b
                });
                return this.getAbsoluteFilePath(result, node)
            }
        }
        return ""
    }
        ;
    this.getAbsoluteFilePath = function (url, node) {
        var d = node ? node.ownerDocument : document;
        var a = d.createElement("a");
        a.href = url;
        url = a.href;
        a = null;
        return url
    }
        ;
    this.getFrameBody = function (node) {
        var bnode = null;
        try {
            if (node.contentDocument) {
                bnode = node.contentDocument.body
            } else if (node.contentWindow) {
                bnode = node.contentWindow.document.body
            } else if (node.document) {
                bnode = node.document.body
            }
        } catch (e) { }
        return bnode
    }
        ;
    this.getIndex = function (node) {
        var ti = -1;
        for (var c = 0; c < node.parentNode.children.length; c++) {
            var cnode = node.parentNode.children[c];
            if (cnode == node) {
                ti = c;
                break
            }
        }
        return ti
    }
        ;
    this.getNodeByPath = function (path, root, rect) {
        try {
            if (path == "")
                return null;
            if (rect == "self") {
                var func = null;
                eval("func=" + path);
                var node = typeof (func) == "function" ? func() : null;
                if (node && node.tagName)
                    return node;
                return null
            }
            if (!root)
                root = document.body;
            var iframes = path.split(">>>");
            if (iframes.length > 1) {
                var idom = this.getNodeByPath(iframes[0], root, rect);
                if (!idom)
                    return;
                idom = this.getFrameBody(idom);
                iframes.shift();
                return this.getNodeByPath(iframes.join(">>>"), idom, rect)
            }
            var node = null;
            var paths = path.split("@@@@");
            if (paths.length < 2)
                return;
            var iframeBodyNode = root;
            if (path.indexOf(".") != -1 || path.indexOf("#") != -1) {
                var postions = paths[0].split(":");
                var flags = paths[1].split("/");
                for (var k = flags.length - 1; k >= 0; k--) {
                    var nodes = null;
                    if (flags[k].indexOf(" ") != -1) {
                        var classArr = flags[k].split(" ");
                        if (iframeBodyNode) {
                            nodes = $(classArr[0], iframeBodyNode);
                            if (nodes.length > 1) {
                                nodes = nodes.filter(function () {
                                    var classvalue = " " + $(this).attr("class").replace(/(^\s*)|(\s*$)/g, "") + " ";
                                    for (var m = 1; m < classArr.length; m++) {
                                        var chName = " " + classArr[m] + " ";
                                        if (classvalue.indexOf(chName) == -1)
                                            return false
                                    }
                                    return true
                                })
                            }
                        } else {
                            nodes = $(classArr[0]);
                            if (nodes.length > 1) {
                                nodes = nodes.filter(function () {
                                    var classvalue = " " + $(this).attr("class").replace(/(^\s*)|(\s*$)/g, "") + " ";
                                    for (var m = 1; m < classArr.length; m++) {
                                        var chName = " " + classArr[m] + " ";
                                        if (classvalue.indexOf(chName) == -1)
                                            return false
                                    }
                                    return true
                                })
                            }
                        }
                    } else {
                        nodes = iframeBodyNode ? $(flags[k], iframeBodyNode) : $(flags[k])
                    }
                    if (nodes.length == 0)
                        return null;
                    if (/[\.#]/.test(flags[k]) && nodes.length > 1) {
                        var needNode = null;
                        var tempGetIndexFunc = this.getIndex;
                        nodes.each(function () {
                            try {
                                if (tempGetIndexFunc(this) == postions[k]) {
                                    needNode = needNode ? null : this;
                                    if (!needNode)
                                        return false
                                }
                            } catch (e) { }
                        });
                        if (needNode)
                            nodes = $(needNode)
                    }
                    if (nodes.length == 1) {
                        if (k == flags.length - 1) {
                            node = nodes.get(0);
                            $(node).attr("accunique", "1")
                        } else {
                            var j = k + 1;
                            node = nodes.get(0);
                            while (j < flags.length) {
                                nodes = $(node).children();
                                var cpos = parseInt(postions[j]);
                                if (cpos >= nodes.length)
                                    return null;
                                node = nodes.get(cpos);
                                j++
                            }
                        }
                        break
                    }
                }
            }
            if (!node) {
                var posArray = paths[0].split(":");
                var newflags = paths[1].split("/");
                var tempNode = iframeBodyNode ? iframeBodyNode : document.body;
                try {
                    for (var j = 0; j < posArray.length; j++) {
                        var pos = parseInt(posArray[j]);
                        if (pos >= $(tempNode).children().length)
                            return null;
                        tempNode = $(tempNode).children().get(pos);
                        if (!tempNode)
                            return null;
                        var tagName = newflags[j].split("#")[0].split(".")[0];
                        if (tempNode.tagName.toLowerCase() != tagName.toLowerCase())
                            return null
                    }
                    node = tempNode
                } catch (e) {
                    node = null
                }
            }
            return node
        } catch (e) { }
        return null
    }
        ;
    this.createContentByFlash = function (node) {
        if (!node)
            return;
        var nodes = $(">object,>embed", node).filter(function () {
            return this.parentNode.tagName != "OBJECT"
        });
        if (nodes.length > 0) {
            nodes = $(nodes.get(0));
            var texts = [];
            var hrefs = [];
            if (nodes.get(0).tagName == "OBJECT" || nodes.get(0).tagName == "EMBED") {
                var otitle = nodes.attr("title");
                if (otitle && otitle.split(",").length > 1 && (otitle.split("http://").length > 1 || otitle.split("https://").length > 1)) {
                    var pers = otitle.split("|");
                    for (var i = 0; i < pers.length; i++) {
                        var links = pers[i].split(",");
                        texts.push(links[0]);
                        hrefs.push(links[1])
                    }
                }
            }
            if (texts.length == 0 && hrefs.length == 0) {
                var str = "";
                if (nodes.get(0).tagName == "OBJECT") {
                    str = $(nodes.get(0)).html()
                } else {
                    str = $(node).html()
                }
                str = str.replace(/&amp;/ig, "~");
                var re = /flashvars=([^~]*)~([^~]*)~([^~'"]*)/ig;
                var re1 = /value=([^~]*)~([^~]*)~([^~'"]*)/ig;
                var r = re.exec(str);
                if (!r)
                    r = re1.exec(str);
                if (!r)
                    return;
                if (r.length < 4)
                    return;
                for (var t = 1; t < r.length; t++) {
                    var str2 = "";
                    if (r[t])
                        str2 = r[t].replace(/[^=]*=/, "");
                    var tempstr = str2.toLowerCase();
                    if (tempstr.indexOf(".jpg") != -1 || tempstr.indexOf(".png") != -1 || tempstr.indexOf(".gif") != -1 || tempstr.indexOf(".bmp") != -1) { } else {
                        if ((r[t].indexOf(".jsp") != -1 || r[t].indexOf(".php") != -1 || r[t].indexOf(".asp") != -1 || r[t].indexOf(".htm") != -1 || r[t].indexOf("http") != -1 || r[t].indexOf("link") != -1 || r[t].indexOf("href") != -1) && hrefs.length == 0) {
                            hrefs = str2.split("|")
                        }
                        if ((r[t].indexOf("title") != -1 || r[t].indexOf("text") != -1) && texts.length == 0) {
                            texts = str2.split("|")
                        }
                    }
                }
            }
            var replaceFlash = "<div style='display:block; overflow:hidden;position:absolute;left:-2;top:-2;text-align:left;height:1px;width:1px;' class='yx_flash_replace'><ul>";
            for (var i = 0; i < texts.length; i++) {
                texts[i] = texts[i].replace(/&gt;/ig, ">").replace(/&lt;/ig, "<").replace(/<[^>]*>/ig, "");
                if (assist.module.config.proxyfix && hrefs[i].indexOf(assist.module.config.proxyfix) == -1)
                    hrefs[i] = assist.module.config.proxyUrl + assist.module.util.urlEncode(this.getAbsoluteFilePath(hrefs[i]));
                replaceFlash += '<li><a class="yx_flash" href="' + hrefs[i] + '" target="_self">' + texts[i] + '</a></li>'
            }
            replaceFlash = replaceFlash + "</ul></div>";
            if (texts.length > 0) {
                var pnode = $(nodes.get(0)).parent();
                if (pnode.get(0).tagName == "A")
                    pnode = pnode.parent();
                if (pnode)
                    pnode.prepend(replaceFlash);
                return $(".yx_flash", pnode.get(0))
            }
            return null
        }
    }
        ;
    this.addTitle = function (node) {
        if (typeof (yixuan_wcag) != "object" || !yixuan_wcag)
            return;
        var nodes = $(">object,>embed", node).filter(function () {
            return this.parentNode.tagName != "OBJECT"
        });
        if (nodes.length > 0)
            node = nodes.get(0);
        if (node.tagName == "A" && $(">img", node).length == 1 && $(node).children().length == 1)
            node = $(">img", node).get(0);
        var path = this.getFilePath(node);
        if (path) {
            var title = yixuan_wcag[path];
            if (title)
                $(node).attr("title", title)
        }
    }
        ;
    this.getNodeRect = function (node) {
        if (!node)
            return "";
        return $(node).outerWidth(true) + "," + $(node).outerHeight(true) + "," + $(node).offset().left + "," + $(node).offset().top
    }
        ;
    this.getNodeFlag = function (node) {
        if (!node)
            return "";
        var result = $(node).attr("id");
        result = assist.module.util.trim(result);
        if (!result || /[\.#]/.test(result)) {
            result = $(node).attr("class");
            result = assist.module.util.trim(result);
            result = result && !/[\.#]/.test(result) ? "." + result : ""
        } else {
            $(node).attr("id", "yxtempnodeidname");
            var beforeId = result;
            if ($("#" + result).length > 0) {
                result = ""
            } else {
                result = "#" + result
            }
            $(node).attr("id", beforeId)
        }
        return result
    }
        ;
    this.getChildTags = function (node) {
        if ($(node).children().length > 9)
            return "";
        var result = "";
        $(node).children().each(function () {
            result += node.tagName.toLowerCase() + assist.module.node.getNodeFlag(this) + "|"
        });
        result = result ? result.substring(0, result.length - 1) : "";
        return result
    }
        ;
    this.getSize = function (node) {
        var w = $(node).width();
        var posi = $(node).css("position");
        var display = $(node).css("display");
        $(node).css({
            "position": "absolute",
            "display": "block"
        });
        var h = $(node).height();
        $(node).css({
            "position": posi,
            "display": display
        });
        return {
            "width": w,
            "height": h
        }
    }
        ;
    this.isTable = function (elem) {
        return elem && elem.tagName == "TABLE" && ((elem.caption && this.handleChildNodes(elem.caption) || $(elem).attr("yxistable")))
    }
        ;
    this.getTableName = function (elem) {
        var ret = "";
        if (elem.caption) {
            ret = elem.caption
        } else if (elem.summary) {
            ret = elem.summary
        }
        return ret
    }
        ;
    this.getTableStyle = function (elem) {
        var rows = elem.rows;
        var rowthcount = 0;
        var maxrowth = 0;
        var colthcount = 0;
        var maxthcol = 0;
        for (var i = 0, rl = rows.length; i < rl; i++) {
            rowthcount = 0;
            colthcount = 0;
            for (var j = 0; j < rows[i].cells.length; j++) {
                if (rows[i].cells[j].tagName == "TH") {
                    rowthcount++;
                    if (colthcount == 0)
                        colthcount = 1
                }
            }
            if (maxrowth < rowthcount)
                maxrowth = rowthcount;
            maxthcol += colthcount
        }
        if (maxrowth > 1 && maxthcol > 1)
            return 3;
        if (maxthcol > 1)
            return 2;
        if (maxrowth > 1)
            return 1;
        return 0
    }
        ;
    this.getTableCols = function (elem) {
        var rows = elem.rows;
        var longest = 0;
        for (var i = 0, rl = rows.length; i < rl; i++)
            if (rows[i].cells.length > longest)
                longest = rows[i].cells.length;
        return longest
    }
        ;
    this.getTableRows = function (elem) {
        return elem.rows.length
    }
        ;
    this.getTableCells = function (elem) {
        var rows = elem.rows;
        var cells = 0;
        for (var i = 0, rl = rows.length; i < rl; i++) {
            cells += rows[i].cells.length
        }
        return cells
    }
        ;
    this.fitNode = function (node, leaf) {
        if (!node || !node.tagName)
            return false;
        if ($(node).hasClass("yx_fit acctext"))
            return true;
        if ($(node).hasClass("yx_not"))
            return false;
        if ((node.tagName == "OBJECT" || node.tagName == "EMBED") && (node.parentNode.tagName == "BODY" || $(node).attr("id") == "sm2movie"))
            return false;
        if (node.tagName == "IMG" && ($(node).width() < 50 || $(node).height() < 50))
            return false;
        if (!tagNames[node.tagName] && (leaf || $(node).children().filter(function () {
            return this.tagName != "BR" && !$(this).hasClass("accnode")
        }).length > 0))
            return false;
        if (!this.hasText(node))
            return false;
        return true
    }
        ;
    this.triggerTouch = function (node) {
        if (!node)
            return null;
        try {
            var selFunc = node.onmouseover || node.onmousemove || node.onmouseenter || node.parentNode.onmouseover || node.parentNode.onmousemove || node.parentNode.onmouseenter;
            if (selFunc) {
                try {
                    selFuncr()
                } catch (e) { }
                return node
            }
            var nodeEvents = window.$ && (window.$(node).data("events") || (window.$._data && window.$._data(node, "events")));
            if (nodeEvents && nodeEvents["mouseover"]) {
                try {
                    window.$(node).trigger("mouseover", [true])
                } catch (e) { }
                return node
            } else if (nodeEvents && nodeEvents["mouseenter"]) {
                try {
                    window.$(node).trigger("mouseenter", [true])
                } catch (e) { }
                return node
            } else if (nodeEvents && nodeEvents["mousemove"]) {
                try {
                    window.$(node).trigger("mousemove", [true])
                } catch (e) { }
                return node
            }
            node = node.parentNode;
            nodeEvents = window.$ && (window.$(node).data("events") || (window.$._data && window.$._data(node, "events")));
            if (nodeEvents && nodeEvents["mouseover"]) {
                try {
                    window.$(node).trigger("mouseover")
                } catch (e) { }
                return node
            } else if (nodeEvents && nodeEvents["mouseenter"]) {
                try {
                    window.$(node).trigger("mouseenter")
                } catch (e) { }
                return node
            } else if (nodeEvents && nodeEvents["mousemove"]) {
                try {
                    window.$(node).trigger("mousemove")
                } catch (e) { }
                return node
            }
        } catch (e) { }
        return null
    }
        ;
    this.triggerLeave = function (node) {
        if (!node)
            return false;
        try {
            var selFunc = node.onmouseout || node.onmouseleave || node.parentNode.onmouseout || node.parentNode.onmouseleave;
            if (selFunc) {
                try {
                    selFuncr()
                } catch (e) { }
                return node
            }
            var nodeEvents = window.$ && (window.$(node).data("events") || (window.$._data && window.$._data(node, "events")));
            if (nodeEvents && nodeEvents["mouseout"]) {
                try {
                    window.$(node).trigger("mouseout", [true])
                } catch (e) { }
                return node
            } else if (nodeEvents && nodeEvents["mouseleave"]) {
                try {
                    window.$(node).trigger("mouseleave", [true])
                } catch (e) { }
                return node
            }
            node = node.parentNode;
            nodeEvents = window.$ && (window.$(node).data("events") || (window.$._data && window.$._data(node, "events")));
            if (nodeEvents && nodeEvents["mouseout"]) {
                try {
                    window.$(node).trigger("mouseout")
                } catch (e) { }
                return node
            } else if (nodeEvents && nodeEvents["mouseleave"]) {
                try {
                    window.$(node).trigger("mouseleave")
                } catch (e) { }
                return node
            }
        } catch (e) { }
        return null
    }
        ;
    this.triggerClick = function (node) {
        try {
            if (node.onclick)
                node.onclick();
            else if (node.onmousedown)
                node.onmousedown();
            else
                node.click()
        } catch (e) { }
    }
        ;
    this.scroll = function (node, arrow) {
        var stop = $(node).offset().top - $(window).height() / 2;
        $(node.ownerDocument).scrollTop(stop);
        var locateNode = node.ownerDocument.createElement("a");
        $(locateNode).attr({
            "href": "#",
            "target": "_self"
        }).css({
            "display": "block",
            "position": "relative",
            "width": "1px",
            "height": "1px"
        }).html("&nbsp;");
        if (arrow == "up") {
            node.parentNode.insertBefore(locateNode, node)
        } else {
            if (node.nextSibling) {
                node.parentNode.insertBefore(locateNode, node.nextSibling)
            } else {
                $(node.parentNode).append(locateNode)
            }
        }
        $(locateNode).focus();
        $(locateNode).remove()
    }
        ;
    this.isGo = function (node) {
        if (!node)
            return false;
        var result = node.tagName == "A" || node.tagName == "INPUT" || node.tagName == "BUTTON" || node.tagName == "AREA" || node.onclick || node.onmousedown;
        result = result ? true : node.parentNode && (node.parentNode.tagName == "A" || node.parentNode.onclick || node.parentNode.onmousedown);
        return result
    }
        ;
    this.getRect = function (node) {
        var rect = {
            "width": -1,
            "height": -1,
            "top": -1,
            "left": -1
        };
        if (!node || !node.tagName)
            return rect;
        rect["width"] = $(node).outerWidth();
        rect["top"] = $(node).offset().top;
        rect["left"] = $(node).offset().left;
        var cnode = node.ownerDocument.createElement("div");
        $(cnode).css({
            "width": "1px",
            "height": "1px",
            "clear": "both"
        }).appendTo(node);
        rect["height"] = $(node).outerHeight();
        $(cnode).remove();
        return rect
    }
}
    ;
YX.Assist.prototype.page = function (assist) {
    var $ = assist.$;
    var instance = this;
    var wrapTag = "label";
    this.rebuild = (/(\/cdep)|([&\?]wcag=1)/i.test(location.href));
    this.state = {
        "first": 1
    };
    this.splitDot = [",", "!", "?", ";", "，", "\u3002", "\uff1f", "\uff01", "\uff1b", "\n"];
    this.frameNodes = [];
    this.init = function (doc) {
        if (!doc)
            return;
        wrapTag = assist.module.util.getBrowser() == "SF" ? "text" : "label";
        load(doc)
    }
        ;
    this.leave = function (node, func) {
        if (!node)
            return true;
        if (assist.module.node.isGo(node)) {
            assist.module.voice.stop();
            var text = assist.module.node.getLinkText(node);
            assist.module.cookie.set("title", text, 0);
            if (typeof (func) == "function")
                func(node)
        }
        return true
    }
        ;
    function isLoaded(doc) {
        if ($(doc.body).attr("loaded") == "1")
            return true;
        $(doc.body).attr("loaded", "1");
        return false
    }
    ; this.eachDoc = function (func) {
        var docs = [document];
        for (var i = 0; i < this.frameNodes.length; i++) {
            var frameNode = this.frameNodes[i];
            docs.push($(frameNode).contents().get(0))
        }
        if (typeof (func) == "function") {
            for (var i = 0; i < docs.length; i++) {
                func(docs[i])
            }
        }
        return docs
    }
        ;
    this.getSentences = function (text) {
        return splitString(text)
    }
        ;
    var phraseMinLength = 5;
    var phraseFitLength = 20;
    var phraseMaxLength = 81;
    function splitString(str) {
        if (typeof str != 'string')
            return [];
        var phrases = assist.module.util.makeupPhrase(str, instance.splitDot, phraseMaxLength);
        var rePhrases = new Array();
        if (phrases.length < 2)
            return phrases;
        var k = 0;
        rePhrases[k] = "";
        for (var i = 0, j = phrases.length; i < j; i++) {
            if (!phrases[i])
                continue;
            if (phrases[i].length < phraseMinLength) {
                if ((rePhrases[k].length + phrases[i].length) <= phraseFitLength) {
                    rePhrases[k] += phrases[i]
                } else if (phrases[i].length == 1) {
                    rePhrases[k] += phrases[i]
                } else {
                    k = k + 1;
                    rePhrases[k] = "";
                    rePhrases[k] += phrases[i]
                }
            } else {
                if ((rePhrases[k].length + phrases[i].length) <= phraseFitLength) {
                    rePhrases[k] += phrases[i]
                } else {
                    k = k + 1;
                    rePhrases[k] = "";
                    rePhrases[k] += phrases[i]
                }
            }
        }
        phrases.length = 0;
        if (rePhrases[0] == '')
            rePhrases = rePhrases.slice(1);
        return rePhrases
    }
    ; function wrapText(node) {
        if (node.nodeType != 3 || assist.module.node.internalNode(node))
            return;
        if ($(node).parents("#accface").length > 0)
            return;
        var node_text = node.data;
        var hasChar = /\S/.test(node_text);
        var pnode = node.parentNode;
        if (hasChar) {
            if (pnode.tagName == "LABEL" || $(pnode).children().length == 0) {
                assist.module.region.doNode(pnode, true);
                return
            }
            var doc = node.ownerDocument;
            var nodesAdded = [];
            var phrases = [node_text];
            for (var i = 0; i < phrases.length; i++) {
                if (/\S/.test(phrases[i])) {
                    var newSpan = doc.createElement(wrapTag);
                    $(newSpan).addClass("acctext");
                    var curr_node = doc.createTextNode(phrases[i]);
                    newSpan.appendChild(curr_node);
                    nodesAdded.push(newSpan);
                    assist.module.region.doNode(newSpan)
                }
            }
            var parentNode = node.parentNode;
            if (node.nextSibling != null) {
                var next_node = node.nextSibling;
                for (var i = 0; i < nodesAdded.length; i++) {
                    parentNode.insertBefore(nodesAdded[i], next_node)
                }
            } else {
                for (var i = 0; i < nodesAdded.length; i++) {
                    parentNode.appendChild(nodesAdded[i])
                }
            }
            parentNode.removeChild(node)
        }
    }
    ; this.changeLink = function (node) {
        if (node && node.tagName != "A" && node.tagName != "AREA")
            return;
        var orihref = node.href ? node.getAttribute("href", 2) : "";
        if (orihref && orihref.indexOf("mailto:") != -1)
            return;
        if (!orihref || orihref.indexOf("#") == 0 || node.href.indexOf("javascript:") != -1)
            return;
        if (node.href) {
            var proxyHref = assist.module.config.proxifyUrl(node.href);
            if (proxyHref != node.href)
                node.href = proxyHref
        }
    }
        ;
    function modifyUrl(node) {
        instance.changeLink(node);
        if (node.tagName == "IFRAME" || node.tagName == "FRAME") {
            if (!$(node).attr("src") || $(node).attr("src") == "#" || $(node).attr("src") == "about:blank")
                return;
            if (node.src && assist.module.config.proxyUrl) {
                var proxySrc = assist.module.config.proxifyUrl(node.src, "&isframe=1");
                if (proxySrc != node.src)
                    node.src = proxySrc
            }
            try {
                var doc = $(node).contents().get(0);
                if (doc && doc.readyState == "complete") {
                    assist.init(doc)
                } else {
                    assist.module.util.addListener(node, "load", function () {
                        var ox = $(node).offset().left;
                        var oy = $(node).offset().top;
                        var doc = $(node).contents().get(0);
                        doc.ox = ox;
                        doc.oy = oy;
                        assist.init(doc)
                    })
                }
                instance.frameNodes.push(node)
            } catch (e) { }
        }
    }
    ; this.doRead = function (isOral) {
        if ($("#accread").css("display") == "block")
            return;
        if (!document.referrer)
            assist.module.cookie.remove("title");
        var title = document.title;
        title = title ? title.replace(/<[^>]*>/ig, "") : "";
        title = assist.module.util.trim(title);
        if (!title)
            title = assist.module.text.get('noTitle');
        title = title.replace(/[\s_\-&]/g, "");
        var pageType = assist.module.accessbility.pageType ? assist.module.text.get("page" + assist.module.accessbility.pageType) : "";
        var text = assist.module.text.get((instance.state.first ? 'firstVisit' : 'againVisit'), {
            "title": title,
            "pagetype": pageType
        });
        var oral = assist.module.robot.oral.dictate(document.body, ",");
        var allText = text + (text ? "," : "") + oral;
        var blindRole = assist.module.face.state.blind == 2;
        var whichText = "";
        if (!blindRole) {
            whichText = text
        } else if (isOral) {
            whichText = oral
        } else {
            whichText = allText
        }
        assist.module.wza.screen.tip(whichText);
        assist.module.voice.read(whichText);
        assist.module.wza.focus(whichText);
        if (instance.state.first)
            assist.module.cookie.set("first", "0")
    }
        ;
    function load(doc) {
        if (isLoaded(doc))
            return;
        assist.module.node.treeTraverseRecursion(doc.body, function (node) {
            try {
                assist.module.analysis.leaf(node)
            } catch (e) { }
            try {
                wrapText(node)
            } catch (e) { }
            if (!node || node.nodeType != 1)
                return;
            if (node.id && (node.id.substr(0, 12) == "yx_style_nav" || node.id == "cniil_wza")) {
                $(node).remove();
                return
            }
            try {
                modifyUrl(node)
            } catch (e) { }
            try {
                assist.module.wza.setNode(node)
            } catch (e) { }
            try {
                assist.module.accessbility.doNode(node)
            } catch (e) { }
            try {
                assist.module.region.doNode(node)
            } catch (e) { }
        }, function (node) {
            return assist.module.node.leafNode(node)
        });
        if (doc == document)
            assist.module.accessbility.ready(function () {
                instance.doRead()
            })
    }
}
    ;
YX.Assist.prototype.analysis = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {
        "open": 1
    };
    var leafTag = {
        "A": 1,
        "INPUT": 1,
        "SELECT": 1,
        "OPTION": 1,
        "BUTTON": 1,
        "TEXTAREA": 1,
        "IMG": 1
    };
    var regionTag = {
        "UL": 1,
        "OL": 1,
        "DL": 1,
        "DIV": 1,
        "TABLE": 1,
        "TD": 1,
        "TR": 1
    };
    var leafs = []
        , sign = "accana"
        , minWidth = 250
        , minHeight = 200
        , crisisArea = 24000;
    this.init = function (doc) { }
        ;
    function isSign(node) {
        while (node && node.tagName != "BODY" && node.tagName != "HTML") {
            if ($(node).attr(sign))
                return node;
            node = node.parentNode
        }
        return false
    }
    this.leaf = function (node) {
        if (!this.state.open)
            return;
        var pnode = null;
        if (isSign(node.parentNode))
            return;
        if (node.tagName && leafTag[node.tagName]) {
            pnode = node.parentNode
        } else if (node.nodeType == 3) {
            var text = node.data;
            if (/\S/.test(text))
                pnode = node.parentNode
        }
        if (!pnode)
            return;
        $(pnode).attr(sign, leafs.length);
        leafs.push(pnode)
    }
        ;
    function needZoom(node) {
        if (!node || !node.parentNode || node.parentNode.tagName == "BODY" || node.parentNode.tagName == "HTML" || node.tagName == "SCRIPT" || node.tagName == "STYLE")
            return 0;
        if ($(node.parentNode).children().length < 2)
            return 1;
        if (node && node.tagName == "P")
            return 1;
        if ((node.tagName == "TD" || node.tagName == "LI") && $(node).children().length < 2)
            return 1;
        var rect = assist.module.node.getRect(node);
        if ((rect.width < minWidth || rect.height < minHeight) && (rect.width * rect.height < crisisArea)) {
            var result = 1;
            if (node.tagName != "TR") {
                $(node.parentNode).children().each(function () {
                    if (this != node && this.tagName != "STYLE" && this.tagName != "SCRIPT") {
                        var crect = assist.module.node.getRect(this);
                        if (crect.width > minWidth && crect.height > minHeight) {
                            result = -1;
                            return false
                        }
                    }
                })
            }
            return result
        }
        return 0
    }
    function invalidRegion(node) {
        if (!node || !node.tagName || !regionTag[node.tagName])
            return true;
        var rect = assist.module.node.getRect(node);
        if (rect.width < minWidth || rect.height < minHeight) {
            var zhCount = assist.module.util.countZh($(node).text());
            var links = $("a", node).length;
            var imgs = $("img", node).filter(function () {
                return $(this).width() > minWidth || $(this).height() > minHeight
            }).length;
            if (links < 2 && zhCount < 10 && imgs < 1)
                return true
        }
        return false
    }
    function merge() {
        var newLeafs = [];
        for (var i = 0; i < leafs.length; i++) {
            var node = leafs[i];
            if (isSign(node.parentNode)) {
                $(node).removeAttr(sign);
                continue
            }
            var pnode = node
                , ret = -1;
            while (true) {
                ret = needZoom(pnode);
                if (ret == 1) {
                    pnode = pnode.parentNode;
                    continue
                }
                break
            }
            $(node).removeAttr(sign);
            if (ret != -1) {
                $(pnode).attr(sign, newLeafs.length);
                newLeafs.push(pnode)
            }
        }
        leafs = [];
        for (var i = 0; i < newLeafs.length; i++) {
            var lnode = newLeafs[i];
            if (isSign(lnode.parentNode) || invalidRegion(lnode)) {
                $(lnode).removeAttr(sign);
                continue
            }
            $(lnode).attr(sign, leafs.length);
            leafs.push(lnode)
        }
        return leafs
    }
    this.autoRegion = function () {
        var regions = merge();
        if (!regions)
            return null;
        var dateReg = new RegExp("([^\\d][1|2]\\d{1,3}[-|\\/\.|\\u5e74]\\d{1,2}[-|\\.|\\u6708]\\d{1,2})|([^\\/|-|\\d]\\d{1,2}[-|\\/|\\u6708]\\d{1,2}[^\\d])", "g");
        var fromsReg = new RegExp("(\\u4f9b\\s*\\u7a3f|\\u6765\\s*\\u6e90|\\u6765\\s*\\u81ea|\\u53d1.\\u673a\\u6784)\\s*(\\uff1a|:)");
        var groups = {};
        var includefrom = false;
        for (var i = 0; i < regions.length; i++) {
            try {
                var node = regions[i];
                var links = $("a", node);
                var longLinks = links.filter(function () {
                    return $(this).text().replace(/\s/g, "").length > 10
                }).length;
                var shortLinks = links.filter(function () {
                    return $(this).text().replace(/\s/g, "").length < 6
                }).length;
                links = links.length;
                var mutexs = $("button,input,select,textarea", node).length;
                var text = $(node).text();
                if (!includefrom)
                    includefrom = fromsReg.test(text);
                var matchs = text ? text.match(dateReg) : 0;
                var dateCount = matchs ? matchs.length : 0;
                var invalidText = $("a,script,style", node).text();
                var zhCount = assist.module.util.countZh(text) - assist.module.util.countZh(invalidText);
                var rect = assist.module.node.getRect(node);
                var regionType = "slist";
                if (mutexs > 0 && rect.width < 800 && links.length < 10)
                    regionType = "mutex";
                else if (zhCount > 100 && links.length < 5)
                    regionType = "content";
                else if (rect.width > 600 && rect.width < 2000 && rect.height > 20 && rect.height < 50 && shortLinks > 4)
                    regionType = "dir";
                else if (longLinks > 15 && dateCount > 15)
                    regionType = "list";
                if (!groups[regionType])
                    groups[regionType] = 0;
                groups[regionType]++;
                $(node).attr("region", regionType + ":" + assist.module.text.get(regionType) + groups[regionType])
            } catch (e) { }
        }
        return regions
    }
}
    ;
YX.Assist.prototype.accessbility = function (assist) {
    var $ = assist.$;
    var instance = this;
    var preNodes = [];
    var mediaNode = null;
    var typeNodes = [];
    var areaNodes = [];
    var isManed = false;
    var manedNodes = [];
    var structData = null;
    var areaAlia = {
        "dir": "1",
        "slist": "2",
        "mutual": "4",
        "list": "5",
        "content": "6",
        "site": "7"
    };
    this.sortArea = ["dir", "slist", "mutual", "list", "content", "site"];
    this.state = {
        "sid": "",
        "clear": 1
    };
    this.pageType = 0;
    this.structType = 1;
    this.init = function (doc) {
        if (doc == document) {
            clearNoise();
            if (manedNodes.length > 2) {
                isManed = true;
                instance.structType = 2;
                parseDefined();
                for (var i = 0; i < manedNodes.length; i++) {
                    parseManed(manedNodes[i])
                }
                if (instance.readyFun) {
                    for (var i in instance.readyFun) {
                        instance.readyFun[i]()
                    }
                }
                if (window.assistData && typeof (window.assistData) == "function")
                    try {
                        window.assistData(assist)
                    } catch (e) { }
                return
            }
            this.setSid();
            requestData(function () {
                try {
                    parseDefined()
                } catch (e) { }
                try {
                    parseTpl()
                } catch (e) { }
                var resultData = getStruct();
                if (resultData) {
                    instance.structType = 1;
                    eval("structData=" + resultData.data);
                    parseStruct(true);
                    doTable(true);
                    doTitle(true)
                } else {
                    instance.structType = 3;
                    var regions = assist.module.analysis.autoRegion();
                    for (var i = 0; i < regions.length; i++) {
                        parseManed(regions[i])
                    }
                }
                if (instance.readyFun) {
                    for (var i in instance.readyFun) {
                        instance.readyFun[i]()
                    }
                }
                if (window.assistData && typeof (window.assistData) == "function")
                    try {
                        window.assistData(assist)
                    } catch (e) { }
            })
        } else {
            parseStruct(false);
            doTable(false);
            doTitle(false)
        }
    }
        ;
    this.setSid = function (isClear) {
        if (isClear) {
            this.state.sid = "";
            assist.module.cookie.remove("sid")
        } else {
            var sidMatch = /[\?&]sid\s*=\s*(\d{1,})/.exec(assist.module.config.scriptUrl);
            if (!sidMatch)
                sidMatch = /[\?&]sid\s*=\s*(\d{1,})/.exec(location.href);
            if (sidMatch)
                this.state.sid = sidMatch[1];
            if (!this.state.sid)
                this.state.sid = assist.module.cookie.get("sid");
            this.state.sid = this.state.sid ? this.state.sid : "";
            if (this.state.sid)
                assist.module.cookie.set("sid", this.state.sid, 0)
        }
        return this.state.sid
    }
        ;
    this.ready = function (func) {
        if (!this.readyFun)
            this.readyFun = [];
        if (typeof (func) == "function")
            this.readyFun.push(func)
    }
        ;
    this.noise = function (state, func) {
        state = state ? 1 : 0;
        if (instance.state.clear != state) {
            instance.state.clear = state;
            assist.module.cookie.set("clear", state)
        }
        if (typeof (func) == "function")
            func(state)
    }
        ;
    this.getDesc = function (node) {
        if (!node)
            return null;
        var desc = $(node).attr("region");
        if (!desc)
            return null;
        if (typeof (desc) != "string")
            return desc;
        var region = desc.split(':');
        if (!region || region.length < 1)
            return null;
        var type = region[0];
        var alia = areaAlia[type];
        if (!alia)
            return null;
        region.shift();
        var typeName = assist.module.text.get(type);
        if (!typeName)
            typeName = "";
        return {
            "type": type,
            "alia": alia,
            "typeName": typeName,
            "name": (region.length == 0 ? "" : region.join(':'))
        }
    }
        ;
    function ajax(params) {
        params = params || {};
        params.data = params.data || {};
        var json = params.jsonp ? jsonp(params) : json(params);
        function jsonp(params) {
            var callbackName = params.jsonp;
            var head = document.getElementsByTagName('head')[0];
            head = head ? head : document.body;
            var funcName = "jsonp" + (new Date()).getTime();
            var fidx = 0;
            while (window[funcName]) {
                funcName += fidx;
                fidx++
            }
            params.data[callbackName] = funcName;
            var data = formatParams(params.data);
            var script = document.createElement('script');
            window[funcName] = function (json) {
                head.removeChild(script);
                if (script.timer)
                    clearTimeout(script.timer);
                window[funcName] = null;
                typeof (params.success) == "function" && params.success(json);
                typeof (params.complete) == "function" && params.complete()
            }
                ;
            if (params.time) {
                script.timer = setTimeout(function () {
                    window[funcName] = null;
                    head.removeChild(script);
                    typeof (params.error) == "function" && params.error({
                        message: 'timeout'
                    });
                    typeof (params.complete) == "function" && params.complete()
                }, time)
            }
            script.setAttribute("type", "text/javascript");
            script.src = params.url + (params.url.indexOf("?") != -1 ? '&' : '?') + data;
            head.appendChild(script)
        }
        ; function json(params) { }
        function formatParams(data) {
            var arr = [];
            for (var name in data) {
                arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
            }
            arr.push('v=' + random());
            return arr.join('&')
        }
        function random() {
            return Math.floor(Math.random() * 10000 + 500)
        }
    }
    function requestData(func) {
        var sid = instance.state.sid;
        if (!sid || structData)
            return typeof (func) == "function" ? func() : null;
        var ckey = "s" + sid;
        var loaded = assist.module.cookie.get(ckey);
        var cvalue = loaded ? assist.plugin.store.get(ckey) : "";
        if (cvalue) {
            var tempFunc = function () { };
            try {
                eval("tempFunc=" + cvalue + ";")
            } catch (e) { }
            tempFunc();
            if (typeof (func) == "function")
                func()
        } else {
            assist.module.cookie.set(ckey, "on", 1);
            ajax({
                async: true,
                url: assist.module.config.dataUrl + sid,
                type: "GET",
                dataType: 'jsonp',
                jsonp: 'yxjsoncallback',
                timeout: 5000,
                success: function (result) {
                    if (!result)
                        return;
                    try {
                        if (result && typeof (result) == "function")
                            result()
                    } catch (e) { }
                    assist.plugin.store.set(ckey, result.toString())
                },
                complete: function (XMLHttpRequest, textStatus) {
                    if (typeof (func) == "function")
                        func()
                }
            })
        }
    }
    function cutUrl(url) {
        url = url.replace(/\?delcoo|\?noshow|([\?&]blind=\d)/ig, "").split("?version=")[0].split("#")[0];
        url = url.replace(/(index|default)\.(php|html|htm|jsp|asp|aspx)$/ig, "");
        url = url.replace(/[\/\\]+$/, "");
        return url
    }
    function getStruct() {
        if (typeof (yixuan_struct) != "object" || !yixuan_struct)
            return null;
        var surl = assist.module.config.url;
        iurl = cutUrl(surl.toLowerCase());
        for (var i = 0; i < yixuan_struct.length; i++) {
            var durl = cutUrl(yixuan_struct[i].url.toLowerCase());
            if (durl == iurl) {
                instance.pageType = yixuan_struct[i].type;
                return yixuan_struct[i]
            }
            if (yixuan_struct[i].memo) {
                var func = null;
                try {
                    eval("func=" + yixuan_struct[i].memo)
                } catch (e) {
                    func = null
                }
                if (func && typeof (func) == "function" && func(surl)) {
                    instance.pageType = yixuan_struct[i].type;
                    return yixuan_struct[i]
                }
            }
        }
        for (var i = 0; i < yixuan_struct.length; i++) {
            if (yixuan_struct[i].type == 2) {
                try {
                    var data = yixuan_struct[i].data;
                    eval("var structData = " + data);
                    if (!data || !structData.list)
                        continue;
                    if (yixuan_struct[i].memo) {
                        var func = null;
                        try {
                            eval("func=" + yixuan_struct[i].memo)
                        } catch (e) {
                            func = null
                        }
                        if (func && typeof (func) == "function") {
                            var isMatch = func(surl);
                            if (isMatch) {
                                instance.pageType = yixuan_struct[i].type;
                                return yixuan_struct[i]
                            } else {
                                continue
                            }
                        }
                    }
                    var node = assist.module.node.getNodeByPath(structData.list[0].path, null, structData.list[0].rect);
                    if (node) {
                        var isArt = false;
                        $("img", node).each(function () {
                            var w = $(this).width();
                            var h = $(this).height();
                            if (w > 400 && h > 250) {
                                isArt = true;
                                return false
                            }
                        });
                        if (isArt)
                            continue;
                        var zhs = assist.module.util.countZh($(node).text());
                        var links = $("a", node);
                        var alen = links.text().length;
                        if ((zhs - alen) > 100 && alen <= 5 * links.length && links.length < 5)
                            continue;
                        var uattr = $(node).attr("accunique");
                        if (links.length == 0)
                            continue;
                        var rects1 = assist.module.node.getNodeRect(node).split(",");
                        var rects2 = structData.list[0].rect.split(",");
                        var subval = parseInt(rects1[0]) - parseInt(rects2[0]);
                        subval = Math.abs(subval);
                        var diffSize = uattr ? 200 : 50;
                        if (subval < diffSize && (!structData.list[0].child || assist.module.node.getChildTags(node) == structData.list[0].child)) {
                            instance.pageType = 2;
                            return yixuan_struct[i]
                        }
                    }
                } catch (err) { }
            }
        }
        for (var i = 0; i < yixuan_struct.length; i++) {
            if (yixuan_struct[i].type == 3) {
                try {
                    var data = yixuan_struct[i].data;
                    eval("var structData = " + data);
                    if (!data || !structData.content)
                        continue;
                    if (yixuan_struct[i].memo) {
                        var func = null;
                        try {
                            eval("func=" + yixuan_struct[i].memo)
                        } catch (e) {
                            func = null
                        }
                        if (func && typeof (func) == "function" && !func(surl))
                            continue
                    }
                    var node = assist.module.node.getNodeByPath(structData.content[0].path, null, structData.content[0].rect);
                    if (node) {
                        var uattr = $(node).attr("accunique");
                        var rects1 = assist.module.node.getNodeRect(node).split(",");
                        var rects2 = structData.content[0].rect.split(",");
                        var subval = parseInt(rects1[0]) - parseInt(rects2[0]);
                        subval = Math.abs(subval);
                        var diffSize = uattr ? 200 : 50;
                        if (subval < diffSize) {
                            instance.pageType = 3;
                            return yixuan_struct[i]
                        }
                    }
                } catch (err) { }
            }
        }
        return null
    }
    function parseStruct(isTop) {
        if (!structData || typeof (structData) != "object" || !structData)
            return;
        var allRegionNodes = [];
        for (var key in structData) {
            for (var i = 0; i < structData[key].length; i++) {
                var item = structData[key][i];
                item.path = item.path.replace(/[\s\.]accelem/g, "");
                if (!isTop && item.path && item.path.indexOf(">>") == -1)
                    continue;
                var node = assist.module.node.getNodeByPath(item.path, null, item.rect);
                if (key == "keys") {
                    $(node).addClass(item.name);
                    continue
                } else if (key == "noise") {
                    $(node).remove();
                    continue
                }
                if (node && !$(node).attr("region")) {
                    item.name = item.name ? item.name : assist.module.text.get("regionName");
                    $(node).attr("region", key + ":" + item.name);
                    node.keyn = areaAlia[key];
                    node.memo = item.memo ? item.memo : null;
                    allRegionNodes.push(node)
                }
            }
        }
        for (var k = 0; k < allRegionNodes.length; k++) {
            var node = allRegionNodes[k];
            var tip = instance.repairTip(node);
            try {
                insertAccesskey(node, node.keyn, tip.start, tip.end)
            } catch (e) { }
        }
    }
    function parseDefined() {
        if (!yx_ini || !yx_ini["region"])
            return;
        var allRegionNodes = [];
        for (var u in yx_ini["region"]) {
            if (location.href.indexOf(u) == -1)
                continue;
            for (var ix in yx_ini["region"][u]) {
                var item = yx_ini["region"][u][ix];
                var key = item.type;
                var node = $(item.elem);
                if (node.length == 0)
                    continue;
                node = node.get(0);
                if (node && !$(node).attr("region")) {
                    if (key == "keys") {
                        $(node).addClass(item.name);
                        continue
                    } else if (key == "noise") {
                        $(node).remove();
                        continue
                    }
                    item.name = item.name ? item.name : assist.module.text.get("regionName");
                    $(node).attr("region", key + ":" + item.name);
                    node.keyn = areaAlia[key];
                    node.memo = item.memo ? item.memo : null;
                    allRegionNodes.push(node)
                }
            }
        }
        for (var k = 0; k < allRegionNodes.length; k++) {
            var node = allRegionNodes[k];
            var tip = instance.repairTip(node);
            try {
                insertAccesskey(node, node.keyn, tip.start, tip.end)
            } catch (e) { }
        }
    }
    function parseTpl() {
        if (typeof (yixuan_tpl) != "object")
            return;
        var allRegionNodes = [];
        for (var ix in yixuan_tpl) {
            var item = null;
            try {
                eval("item=" + yixuan_tpl[ix].data)
            } catch (e) { }
            if (!item)
                continue;
            var key = item.type;
            item.path = item.path.replace(/[\s\.]accelem/g, "");
            var node = assist.module.node.getNodeByPath(item.path, null, item.rect);
            if (key == "keys") {
                $(node).addClass(item.name);
                continue
            } else if (key == "noise") {
                $(node).remove();
                continue
            }
            if (node && !$(node).attr("region")) {
                item.name = item.name ? item.name : assist.module.text.get("regionName");
                $(node).attr("region", key + ":" + item.name);
                node.keyn = areaAlia[key];
                node.memo = item.memo ? item.memo : null;
                allRegionNodes.push(node)
            }
        }
        for (var k = 0; k < allRegionNodes.length; k++) {
            var node = allRegionNodes[k];
            var tip = instance.repairTip(node);
            try {
                insertAccesskey(node, node.keyn, tip.start, tip.end)
            } catch (e) { }
        }
    }
    function parseManed(node) {
        var region = instance.getDesc(node);
        if (!region)
            return;
        var key = region["type"];
        var aliKey = region["alia"];
        var tip = instance.repairTip(node);
        try {
            insertAccesskey(node, aliKey, tip.start, tip.end)
        } catch (e) { }
    }
    function addManedNode(node) {
        var region = instance.getDesc(node);
        if (!region)
            return;
        manedNodes.push(node)
    }
    function insertAccesskey(node, key, accStartText, accEndText) {
        if ($(node).attr("acc"))
            return;
        var startNode = node.ownerDocument.createElement("a");
        var endNode = node.ownerDocument.createElement("a");
        $(startNode).attr({
            "href": "javascript:void(0)",
            "target": "_self",
            "acckey": key,
            "class": "accnode accstart acc" + key
        }).text(accStartText);
        $(endNode).attr({
            "href": "javascript:void(0)",
            "target": "_self",
            "class": "accnode accend"
        }).text(accEndText);
        if (node.tagName == "TABLE" || node.tagName == "TR") {
            $("td:eq(0)", node).prepend(startNode);
            $("td:last", node).append(endNode)
        } else {
            var hideCount = $(node.parentNode).children().each(function () {
                return this.style.display == "none" || this.style.visibility == 'hidden'
            });
            if (hideCount < 1) {
                $(node).before(startNode);
                $(node).after(endNode)
            } else {
                $(node).prepend(startNode);
                $(node).append(endNode)
            }
        }
        assist.module.region.add(node, startNode);
        $(node).attr("acc", "1")
    }
    this.repairTip = function (node) {
        var region = this.getDesc(node);
        if (!region)
            return {
                "start": "",
                "end": ""
            };
        var name = region.type == "content" || region.type == "list" ? region.typeName : (instance.structType == 3 ? region.name : region.name + region.typeName);
        var startText = assist.module.text.get("regionStart", {
            "title": name
        });
        startText += assist.module.robot.oral.dictate(node, ",");
        if (node.startNode)
            $(node.startNode).text(startText);
        var endText = assist.module.text.get("regionEnd", {
            "title": name
        });
        return {
            "start": startText,
            "end": endText
        }
    }
        ;
    function replaceFlash(node) {
        if (node.tagName == "OBJECT" || node.tagName == "EMBED")
            assist.module.node.createContentByFlash(node.parentNode)
    }
    function clearFocus(node) {
        if (!instance.state.clear)
            return
    }
    function clearNoise(node) {
        if (!instance.state.clear)
            return;
        if ($(node).attr("noise"))
            $(node).remove()
    }
    function clearSound(node) {
        if (!instance.state.clear)
            return;
        if (node && node.tagName == "EMBED") {
            var pause = false;
            var fvLabel = ["flashvars", "flashVars"];
            for (var i = 0; i < fvLabel.length; i++) {
                var fv = $(node).attr(fvLabel[i]);
                if (fv && /autoplay=(true|1)/i.test(fv)) {
                    fv = fv.replace(/(autoplay)=true/i, "$1=false");
                    fv = fv.replace(/(autoplay)=1/i, "$1=0");
                    $(node).attr(fvLabel[i], fv);
                    pause = true;
                    break
                }
            }
            if (pause) {
                var html = node.outerHTML;
                $(node).before(html);
                $(node).remove()
            }
        }
        if (node && node.tagName == "BGSOUND")
            $(node).remove();
        return
    }
    function wcagNode(node) {
        if (!node)
            return;
        if (node.tagName == "A") {
            $("img,object,embed", node).each(function () {
                preNodes.push(this)
            })
        } else if (node.tagName == "IMG" || node.tagName == "BUTTON" || node.tagName == "OBJECT" || node.tagName == "EMBED" || (node.tagName == "INPUT" && $(node).attr("type") == "image")) {
            preNodes.push(node)
        }
    }
    this.doNode = function (node) {
        try {
            wcagNode(node)
        } catch (e) { }
        try {
            addManedNode(node)
        } catch (e) { }
        try {
            replaceFlash(node)
        } catch (e) { }
        try {
            clearNoise(node)
        } catch (e) { }
        try {
            clearFocus(node)
        } catch (e) { }
        try {
            clearSound(node)
        } catch (e) { }
    }
        ;
    function doTable(isTop) {
        if (typeof (yixuan_table) != "object" || !yixuan_table)
            return;
        var iurl = cutUrl(assist.module.config.url.toLowerCase());
        for (var i = 0; i < yixuan_table.length; i++) {
            var durl = cutUrl(yixuan_table[i].url.toLowerCase());
            if (durl == iurl) {
                eval("var tableData=" + yixuan_table[i].data);
                for (var i = 0; i < tableData.length; i++) {
                    var item = tableData[i];
                    if (!isTop && item.path && item.path.indexOf(">>") == -1)
                        continue;
                    var node = assist.module.node.getNodeByPath(item.path, null, item.rect);
                    if (node)
                        $(node).attr("summary", item.name).addClass("acctable")
                }
            }
        }
    }
    function clearNoise() {
        var host = location.host;
        if (yx_ini["noise"] && yx_ini["noise"][host]) {
            var obj = yx_ini["noise"][host];
            if (obj.f && $(obj.f).length > 0) {
                obj.r()
            }
        }
    }
    function doTitle(isTop) {
        if (typeof (yixuan_wcag) != "object" || !yixuan_wcag)
            return;
        for (var i = 0; i < preNodes.length; i++) {
            var node = preNodes[i];
            if (!node || (!isTop && node.ownerDocument == document))
                continue;
            var nodes = $(">object,>embed", node).filter(function () {
                return this.parentNode.tagName != "OBJECT"
            });
            if (node.tagName == "A" && $(">img", node).length == 1 && $(node).children().length == 1)
                node = $(">img", node).get(0);
            if (nodes.length > 0)
                node = nodes.get(0);
            var path = assist.module.node.getFilePath(node);
            if (path) {
                var title = yixuan_wcag[path];
                if (title) {
                    $(node).attr("title", title)
                } else if (node.parentNode.tagName == "A" && node.parentNode.href) {
                    var srcHref = assist.module.node.getHref(node.parentNode).split("#")[0];
                    var homeHref = node.ownerDocument.location.href.split("#")[0];
                    var currentHref = node.parentNode.href.split("#")[0];
                    if (!srcHref || homeHref == currentHref)
                        continue;
                    var links = node.ownerDocument.links;
                    for (var m = 0; m < links.length; m++) {
                        if (node.parentNode.href == links[m].href && links[m] != node.parentNode) {
                            title = $(links[m]).text();
                            if (title)
                                $(node).attr("title", title);
                            break
                        }
                    }
                }
            }
        }
    }
}
    ;
YX.Assist.prototype.keyboard = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {};
    var shortKeep = false;
    this.init = function (doc) {
        if (!doc)
            return;
        var obj = doc == document ? {
            frame: false
        } : {
                frame: true
            };
        $(doc).bind("keydown", obj, keydown).bind("keyup", obj, keyup).bind("focus", obj, focusin)
    }
        ;
    function keydown(e) {
        e = e || window.event;
        var key = e.which || e.keyCode;
        var isframe = typeof (e.data) == "object" && e.data.frame;
        shortKeep = e.altKey || e.ctrlKey || e.shiftKey;
        assist.module.voice.stopEach();
        if (key == 13) {
            return assist.module.page.leave((e.target || e.srcElement), function (node) {
                if (node && node.ownerDocument == document && assist.module.voice.isRead()) {
                    node.target = "_self";
                    $(node).parents("form").attr("target", "_self")
                }
            })
        }
        return true
    }
    ; function keyup(e) {
        e = e || window.event;
        var key = e.which || e.keyCode;
        var isframe = typeof (e.data) == "object" && e.data.frame;
        var node = (e.target || e.srcElement);
        if (e.altKey && key == 38) {
            assist.module.region.prev();
            return true
        }
        if (e.altKey && key == 40) {
            assist.module.region.next();
            return true
        }
        var keyNode = $(".k" + (e.ctrlKey ? "1" : "0") + (e.shiftKey ? "1" : "0") + (e.altKey ? "1" : "0") + key);
        var shortKey = e.ctrlKey || e.shiftKey || e.altKey;
        if (keyNode.length > 0) {
            if (!(node && (node.tagName == "TEXTAREA" || (node.tagName == "INPUT" && ($(node).attr("type") == "text" || $(node).attr("type") == ""))))) {
                var eventName = keyNode.attr(assist.attr.eventName);
                var knode = keyNode.get(0);
                if (knode.tagName == "A" && knode.href && knode.href.indexOf("javascript:") == -1 && !eventName) {
                    top.location.href = knode.href;
                    return false
                }
                if (keyNode.parents("#accface").length > 0) {
                    eventName = eventName ? eventName : "click";
                    try {
                        keyNode.trigger(eventName)
                    } catch (e) { }
                } else {
                    assist.module.node.triggerClick(knode)
                }
            }
        }
        if (e.ctrlKey && key == 76) {
            assist.module.wza.locate(null, true);
            return true
        }
        if (!e.ctrlKey && !e.altKey && key == 9) {
            if (node && node.targetRegion) {
                assist.module.region.locate(node.targetRegion)
            } else {
                assist.module.wza.touch(node, true)
            }
        }
        if (key == 191 && !e.ctrlKey && !e.shiftKey && e.altKey) {
            assist.module.wza.help(assist.module.text.get("areaHelp"));
            return true
        }
        if (key == 67 && !e.altKey && e.ctrlKey && e.shiftKey) {
            assist.module.wza.slientToggle();
            return true
        }
        if (key == 48 && e.altKey && !e.shiftKey && !e.ctrlKey) {
            assist.module.page.doRead(true);
            return true
        }
        if (e.altKey && isNum(key) && !e.shiftKey && !e.ctrlKey) {
            assist.module.region.skip((key < 58 ? key - 48 : key - 96));
            return false
        }
        if (typeof (window.assistKey) == "function")
            try {
                if (window.assistKey(key, node, e, assist) === false)
                    return false
            } catch (e) { }
        return true
    }
    ; function focusin(e) {
        return true
    }
    function isNum(key) {
        return (key >= 48 && key <= 57) || (key >= 96 && key <= 105)
    }
    ; var keys = [];
    function groupKey(key, func) {
        if (isNum(key)) {
            key = (key - 48 > 9) ? key - 96 : key - 48;
            key = key + "";
            keys.push(key)
        } else {
            keys.push(String.fromCharCode(key))
        }
        var tm = setTimeout(function () {
            var allKey = keys.join("");
            keys = [];
            if (typeof (func) == "function")
                func(allKey);
            clearTimeout(tm)
        }, 1000);
        return true
    }
}
    ;
YX.Assist.prototype.mouse = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {};
    this.init = function (doc) {
        if (!doc)
            return;
        var obj = doc == document ? {
            frame: false
        } : {
                frame: true
            };
        $(doc).bind("mouseover", obj, bindOver).bind("mouseout", obj, bindOut).bind("mousedown", obj, bindDown).bind("mousemove", obj, bindMove).bind("click", obj, bindClick);
        if (doc == document)
            $(window).bind("scroll", bindScroll)
    }
        ;
    function bindOver(e, isKey) {
        if (isKey)
            return true;
        var node = e.target || e.srcElement;
        assist.module.wza.touch(node, isKey);
        return true
    }
    function bindOut(e, isKey) {
        assist.module.voice.stopEach(false);
        return true
    }
    ; function bindDown(e, isKey) {
        assist.module.voice.stopEach(true);
        assist.module.region.cancelHighlight();
        var node = e.target || e.srcElement;
        assist.module.page.changeLink(node);
        assist.module.page.leave(node);
        return true
    }
    ; function bindMove(e, isKey) {
        assist.module.wza.rulerMove(e);
        assist.module.wza.locate(e);
        if (typeof (window.assistMove) == "function")
            window.assistMove(e);
        return true
    }
    ; function bindClick(e, isKey) {
        var node = e.target || e.srcElement;
        return true
    }
    function bindScroll(e) { }
}
    ;
YX.Assist.prototype.mobile = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {};
    this.init = function (doc) { }
        ;
    this.is = function () {
        var arrs = ['iphone', 'android'];
        var info = navigator.userAgent.toLowerCase();
        for (var i = 0; i < arrs.length; i++) {
            var result = info.indexOf(arrs[i]);
            if (result > -1)
                return true
        }
        return false
    }
}
    ;
YX.Assist.prototype.region = function (assist) {
    var $ = assist.$;
    var instance = this;
    var nodes = [];
    var leafs = [];
    var currentAreaIndex = -1;
    var currentLeafIndex = -1;
    this.state = {};
    this.init = function (doc) { }
        ;
    this.summary = function () {
        return assist.module.robot.oral.dictate(document.body, ",")
    }
        ;
    this.skip = function (key) {
        var node = assist.module.region.loop(key);
        if (node) {
            assist.module.region.locate(node)
        } else {
            var text = assist.module.text.get("notAccess");
            assist.module.voice.read(text);
            assist.module.wza.screen.tip(text);
            assist.module.wza.focus(text)
        }
    }
        ;
    this.add = function (node, startNode) {
        var pos = $(node).attr(assist.attr.domIndex);
        try {
            pos = parseInt(pos)
        } catch (e) {
            pos = 100000000
        }
        var p = nodes.length;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].pos > pos) {
                p = i;
                break
            }
        }
        nodes.splice(p, 0, {
            "node": node,
            "startNode": startNode,
            "pos": pos
        });
        startNode.targetRegion = node;
        node.startNode = startNode;
        return nodes
    }
        ;
    this.each = function (func) {
        if (!func || typeof (func) != "function")
            return false;
        for (var k in nodes) {
            if (func(nodes[k]) === false)
                break
        }
        return true
    }
        ;
    this.rank = function () {
        if (instance.cacheRank && instance.cacheRank.length > 0)
            return instance.cacheRank;
        var range = {};
        this.each(function (obj) {
            var region = assist.module.accessbility.getDesc(obj.node);
            if (!region)
                return true;
            var type = region["type"];
            if (!range[type])
                range[type] = {
                    "type": type,
                    "name": assist.module.text.get(type),
                    "key": region.alia,
                    "nodes": []
                };
            obj.node.region = region;
            range[type]["nodes"].push(obj.node);
            return true
        });
        var arr = [];
        for (var i = 0; i < assist.module.accessbility.sortArea.length; i++) {
            var obj = range[assist.module.accessbility.sortArea[i]];
            if (obj) {
                arr.push(obj)
            }
        }
        instance.cacheRank = arr.length > 0 ? arr : null;
        return instance.cacheRank
    }
        ;
    function expand(node) {
        try {
            if (node.memo) {
                var func = null;
                eval("func=" + node.memo);
                if (typeof (func) == "function") {
                    func(node);
                    return
                }
            }
        } catch (e) { }
        try {
            if (!assist.module.node.isVisible(node)) {
                var pnode = assist.module.node.triggerTouch(node.parentNode);
                if (!pnode && $(node).prev().length > 0) {
                    var linkNode = $(node).prev().children("a").length == 1 ? $(node).prev().children("a").get(0) : $(node).prev().get(0);
                    pnode = assist.module.node.triggerTouch(linkNode)
                }
                if (!pnode) {
                    var pEle = node.parentNode;
                    while (pEle && $(pEle).children().length == 1) {
                        pEle = pEle.parentNode
                    }
                    var preEle = $(pEle).prev().get(0);
                    while (preEle && $(preEle).children().length == 0) {
                        preEle = $(preEle).prev().get(0)
                    }
                    if (preEle) {
                        var idx = $(node).index();
                        while ($(preEle).children().length == 1) {
                            preEle = $(preEle).children().get(0)
                        }
                        var tabNode = $(preEle).children().get(idx);
                        tabNode = $(tabNode).children().length == 1 ? $(tabNode).children().get(0) : tabNode;
                        assist.module.node.triggerTouch(tabNode)
                    }
                }
            }
        } catch (e) { }
    }
    function forceShow(node, func) {
        if (!node || !node.parentNode || node.nodeName == "BODY" || node.nodeName == "HTML") {
            if (typeof (func) == "function")
                func(null);
            return null
        }
        var dis = $(node).css("display")
            , vis = $(node).css("visibility");
        if (dis == "none") {
            $(node).css("display", "block");
            if (typeof (func) == "function")
                func(node);
            setTimeout(function () {
                $(node).css("display", "none")
            }, 50)
        }
        if (vis == "hidden") {
            $(node).css("visibility", "visible");
            if (typeof (func) == "function")
                func(node);
            setTimeout(function () {
                $(node).css("visibility", "hidden")
            }, 50)
        }
        return (dis == "none" || vis == "hidden") ? node : forceShow(node.parentNode, func)
    }
    function scroll(node) {
        if (!node)
            return;
        if (!assist.module.node.isVisible(node)) {
            var ltop = $(document.body).attr("ltop");
            ltop = ltop ? parseInt(ltop) : 0;
            $(node.ownerDocument).scrollTop(ltop);
            return
        }
        var t = $(node).offset().top;
        var h = $(node).height();
        var wh = $(window).height();
        var val = t - wh / 8;
        val = val > 0 ? val : 0;
        $(node.ownerDocument).scrollTop(val);
        var ltop = $(document).scrollTop();
        $(document.body).attr("ltop", ltop)
    }
    this.locate = function (node, oApi, func) {
        if (!node || !node.startNode)
            return false;
        expand(node);
        forceShow(node, function () {
            assist.module.wza.focus(node.startNode)
        });
        assist.module.wza.touch(node.startNode, true);
        scroll(node);
        try {
            if (!oApi && window.accLocateArea && typeof (window.accLocateArea) == "function")
                window.accLocateArea(node)
        } catch (e) { }
        if (typeof (func) == "function")
            func(node);
        return true
    }
        ;
    this.cancelHighlight = function () {
        assist.module.page.eachDoc(function (d) {
            if (d && d.body)
                $(".accrect", d.body).removeClass("accrect")
        })
    }
        ;
    this.next = function () {
        if (nodes.length == 0)
            return null;
        currentAreaIndex++;
        if (currentAreaIndex > nodes.length - 1)
            currentAreaIndex = nodes.length - 1;
        this.locate(nodes[currentAreaIndex].node);
        return nodes[currentAreaIndex].node
    }
        ;
    this.prev = function () {
        if (nodes.length == 0)
            return null;
        currentAreaIndex--;
        if (currentAreaIndex < 0)
            currentAreaIndex = 0;
        this.locate(nodes[currentAreaIndex].node);
        return nodes[currentAreaIndex].node
    }
        ;
    this.loop = function (key) {
        var regionNode = null;
        var firstNode = null;
        var firstType = "";
        var isFind = false;
        this.each(function (obj) {
            var region = assist.module.accessbility.getDesc(obj.node);
            if (!region || key != region.alia)
                return true;
            if (!firstNode) {
                firstNode = obj.node;
                firstType = region.type
            }
            if (!instance.accessNodes)
                instance.accessNodes = {};
            if (!instance.accessNodes[region.type] || isFind) {
                instance.accessNodes[region.type] = obj.node;
                regionNode = obj.node;
                return false
            } else if (instance.accessNodes[region.type] == obj.node) {
                isFind = true;
                return true
            }
            return true
        });
        if (isFind && !regionNode) {
            regionNode = firstNode;
            instance.accessNodes[firstType] = firstNode
        }
        return regionNode
    }
        ;
    this.eachLeaf = function (node, first, isKey) {
        if (!node || !assist.module.voice.isEach())
            return false;
        this.eachNode = node;
        var idx = $(node).attr(assist.attr.leafIndex);
        idx = parseInt(idx);
        var prenode = leafs.length > idx + 1 ? leafs[idx + 1] : null;
        var text = node ? assist.module.node.getNodeText(node) : "";
        if (assist.global.touchNode)
            $(assist.global.touchNode).removeClass("accfocus");
        $(node).addClass("accfocus");
        assist.global.touchNode = node;
        assist.module.wza.screen.tip(text);
        assist.module.node.scroll(node);
        assist.global.overNode = assist.module.node.triggerTouch(node) || assist.global.overNode;
        if (text && assist.module.node.isVisible(node)) {
            assist.module.voice.eachReadEx(text, function () {
                instance.eachLeaf(prenode, false, isKey)
            })
        } else {
            instance.eachLeaf(prenode, false, isKey)
        }
        return true
    }
        ;
    this.doNode = function (node, isfit) {
        if (!node || !node.tagName)
            return;
        if (!assist.global.accidx)
            assist.global.accidx = 1;
        else
            assist.global.accidx++;
        $(node).attr(assist.attr.domIndex, assist.global.accidx);
        if (assist.module.node.fitNode(node, !isfit)) {
            leafs.push(node);
            $(node).attr(assist.attr.leafIndex, leafs.length - 1).addClass(assist.attr.leafIndex);
            if (!assist.module.node.isFocusable(node))
                $(node).attr({
                    "tabindex": "0"
                })
        }
    }
}
    ;
YX.Assist.prototype.wza = function (assist) {
    var $ = assist.$;
    var instance = this;
    var themes = {
        "default": {
            link: {
                "hover": "#fff",
                "visited": "#ee2211"
            },
            system: {
                border: "#ff0000",
                color: "#000000",
                bgcolor: "#ffffff"
            }
        },
        "black": {
            color: "#ffffff",
            bgcolor: "#000000",
            link: {
                color: "#ffff00",
                "hover": "#ffffff",
                "visited": "#ffffff"
            },
            system: {
                border: "#ffffff",
                color: "#ffff00",
                bgcolor: "#999"
            }
        },
        "blue": {
            color: "#ffffff",
            bgcolor: "#0c4698",
            link: {
                color: "#ffff00",
                "hover": "#ffffff",
                "visited": "#ffffff"
            },
            system: {
                border: "#ffffff",
                color: "#ffff00",
                bgcolor: "#999"
            }
        },
        "red": {
            color: "#ffffff",
            bgcolor: "#bd0000",
            link: {
                color: "#ffff00",
                "hover": "#ffffff",
                "visited": "#ffffff"
            },
            system: {
                border: "#ffffff",
                color: "#ffff00",
                bgcolor: "#999"
            }
        }
    };
    var rulerNodes = [];
    var focusNode = null;
    var helpNode = null;
    var activeNode = null;
    this.state = {
        "theme": "default",
        "zoom": 1,
        "lamp": 1,
        "lang": "zh",
        "cursor": 0,
        "ruler": 0,
        "screen": 0
    };
    this.init = function (doc) {
        watchRoot(doc);
        setTheme(doc, this.state.theme);
        setCursor(doc, this.state.cursor);
        setZoom(doc, this.state.zoom);
        setLamp(doc, this.state.lamp);
        if (doc == document) {
            this.setSwf();
            this.lang(this.state.lang);
            this.ruler(this.state.ruler);
            this.screen.open(this.state.screen)
        }
    }
        ;
    function bigNode(node) {
        if (!node || !node.parentNode)
            return node;
        if (node.parentNode.tagName == "A")
            return node.parentNode;
        var isTextNode = (node.tagName == "SPAN" || node.tagName == "LABEL" && node.tagName == "FONT" || node.tagName == "EM" || node.tagName == "I");
        if (isTextNode && $(node).children().length == 0 && $(node).parents("p").length == 1) {
            var pnode = $(node).parents("p").get(0);
            var selfText = $(node).text().replace(/\s/g, "");
            var parentText = $(pnode).text().replace(/\s/g, "");
            var reg = /[\u3002\uff1f\uff01]/;
            if (selfText && parentText && selfText.length < parentText.length && parentText.length < 300 && reg.test(parentText))
                return pnode
        }
        return node
    }
    function watchRoot(doc) {
        var roots = $(doc.body).children().filter(function () {
            return this.id != "accface" && !$(this).hasClass("accelem")
        });
        if (roots.length > 0) {
            roots.addClass("accelem");
            setZoom(document, instance.state.zoom)
        }
        setTimeout(function () {
            watchRoot(doc)
        }, 500)
    }
    this.touch = function (node, isKey, func) {
        if (assist.module.voice.state.each)
            return false;
        if (!node || !node.tagName)
            return false;
        if ($(node).hasClass("noread") || $(node).parents(".noread").length > 0)
            return false;
        if (!assist.module.node.fitNode(node))
            return true;
        var readMode = assist.module.voice.mode();
        if (readMode != 2 && !isKey) {
            var bnode = bigNode(node);
            if (bnode != node) {
                node = bnode;
                if (bnode == assist.global.touchNode)
                    return
            }
        }
        if (node.targetRegion) {
            if (assist.global.overNode) {
                assist.module.node.triggerLeave(assist.global.overNode);
                assist.global.overNode = null
            }
            if (assist.global.regionNode)
                $(assist.global.regionNode).removeClass("accrect");
            $(node.targetRegion).addClass("accrect");
            assist.global.regionNode = node.targetRegion
        }
        if (readMode == 2) {
            assist.module.voice.startEach(node, isKey);
            return true
        }
        if (isKey) {
            assist.global.overNode = assist.module.node.triggerTouch(node) || assist.global.overNode;
            if (node.tagName != "BODY")
                activeNode = node
        }
        var text = $(node).hasClass("accnode") ? $(node).text() : assist.module.node.getNodeText(node);
        if (text) {
            if (assist.global.touchNode)
                $(assist.global.touchNode).removeClass("accfocus");
            if (isKey && assist.module.voice.isRead())
                $(node).addClass("accfocus");
            assist.global.touchNode = node;
            assist.module.wza.screen.tip(text);
            assist.module.voice.read(text)
        }
        if (typeof (func) == "function")
            func(node);
        return true
    }
        ;
    this.leave = function (node, isKey, func) {
        $(node).removeClass("accfocus");
        assist.module.voice.stop();
        return true
    }
        ;
    function overCss(doc, style) {
        var cssText = "";
        try {
            var styles = doc.styleSheets;
            for (var i = 0; i < styles.length; i++) {
                var id = styles[i].ownerNode.id;
                if (id && id.indexOf("acc") == 0)
                    continue;
                var rules = styles[i].cssRules || styles[i].rules;
                if (rules) {
                    for (var k = 0; k < rules.length; k++) {
                        if (!rules[k])
                            continue;
                        var color = rules[k].style.color;
                        var bgcolor = rules[k].style.backgroundColor;
                        if (rules[k].cssText && (color || bgcolor) && /!\s*important/.test(rules[k].cssText)) {
                            cssText += rules[k].cssText.replace(/([\s{;])(color|background-color|background)\s*:\s*([^!:]+)!\s*important/ig, function () {
                                var cv = arguments[2] == "color" ? style.color : style.bgcolor;
                                return arguments[1] + arguments[2] + ":" + cv + " !important"
                            }) + "\n"
                        }
                    }
                }
            }
        } catch (e) { }
        return cssText
    }
    this.focus = function (html, refocus) {
        if (!focusNode) {
            focusNode = document.createElement("a");
            $(focusNode).attr({
                "href": "#",
                "target": "_self",
                "href": "javascript:void(0)"
            }).css({
                "overflow": "hidden",
                "display": "block",
                "width": "1px",
                "height": "1px",
                "position": "absolute",
                "top": "0px",
                "left": "0px"
            });
            $(document.body).prepend(focusNode)
        }
        if (typeof (html) == "object" && html.nodeType == 1) {
            focusNode.focus();
            html.focus()
        } else {
            html = html ? html : " ";
            $(focusNode).html(html);
            if (refocus) {
                var focusClone = $(focusNode).clone();
                $(focusNode).remove();
                focusClone.appendTo(document.body);
                setTimeout(function () {
                    focusClone.focus()
                }, 12);
                focusNode = focusClone.get(0)
            } else {
                focusNode.focus()
            }
        }
        return focusNode
    }
        ;
    this.help = function (text) {
        var node = document.activeElement ? document.activeElement : document.body.firstChild;
        if (node == helpNode) {
            node = node.targetNode
        }
        if (node.tagName == "BODY" && activeNode)
            node = activeNode;
        if (helpNode) {
            $(helpNode).remove();
            helpNode = null
        }
        helpNode = document.createElement("a");
        $(helpNode).attr({
            "href": "#",
            "target": "_self",
            "href": "javascript:void(0)"
        }).css({
            "overflow": "hidden",
            "display": "block",
            "width": "1px",
            "height": "1px",
            "position": "absolute",
            "top": "0px",
            "left": "0px"
        });
        $(helpNode).text(text);
        $(node).before(helpNode);
        assist.module.wza.screen.tip(text);
        assist.module.voice.read(text);
        helpNode.targetNode = node;
        helpNode.focus();
        return helpNode
    }
        ;
    this.setSwf = function () { }
        ;
    this.getTheme = function (theme) {
        if (theme == "all")
            return themes;
        theme = theme ? theme : this.state["theme"];
        var style = themes[theme];
        return style ? style : null
    }
        ;
    function setTheme(doc, theme) {
        $("#accthemecss", doc.body).remove();
        var style = themes[theme];
        if (!style)
            return;
        if (style.bgcolor) {
            $(doc.body).children().filter(function () {
                return !this.id || this.id != "accface"
            }).addClass("accelem");
            var cssText = overCss(doc, style);
            var css = '<style id="accthemecss" type="text/css">';
            css += 'html,body{background-color:' + style.bgcolor + ' !important;color:' + style.color + ' !important;}';
            css += '.accelem,.accelem *{background-color:transparent !important;color:' + style.color + ' !important;}';
            css += '.accelem select *{background-color:' + style.bgcolor + ' !important;}';
            css += '.accalpha{background-color:' + style.bgcolor + ' !important;}';
            css += '.accelem a{color:' + style.link.color + ' !important;} .accelem a:hover{color:' + style.link.hover + ' !important;} a:visited{color:' + style.link.visited + ' !important;}';
            css += '.accbg{background-image:none !important;}';
            css += '.accinput{background-image:none !important; border:1px solid ' + style.color + ' !important;}';
            css += '#acctip{background-color:#ffffff !important;color:#333333 !important;}';
            css += cssText;
            css += '</style>';
            $(doc.body).append(css)
        }
        if (doc == document) {
            $("#accothercss", document.body).remove();
            css = '<style type="text/css" id="accothercss">';
            css += '#accruler1,#accruler2{border:4px solid ' + style.system.border + ';display:none;left:-20px;top:-20px;position:fixed;z-index:2147483646;}';
            css += '#accruler1{width:0px;height:600px;} #accruler2{width:600px;height:0px;}';
            css += '#acclocate{position:fixed;border:10px solid ' + style.system.border + ';z-index:2147483646;}';
            css += '</style>';
            $(document.body).append(css)
        }
        $("#accfocuscss", doc.body).remove();
        css = '<style id="accfocuscss" type="text/css">';
        css += '.accregion{background:red !important;border-bottom:3px solid #000;} .accregion *{background:none !important;}';
        css += '.accnode{max-width:1px !important;float:left !important;border:0px !important;padding:0px !important;margin:0px !important;width: 1px !important; height: 1px !important; overflow: hidden !important; display: block !important; position: absolute !important;}';
        css += '.acctext{text-align: inherit !important;text-indent: inherit !important;color:inherit !important;margin:0px  !important;;padding:0px  !important;;font-weight:inherit  !important;border:0px  !important;background:none !important;display:inline  !important;}';
        css += '.accrect,.accrect *{background-color:#ccc !important;color:#000 !important;} .accrect a{color:#000 !important;} .accfocus{text-decoration:underline !important;}</style>';
        $(doc.body).append(css)
    }
    this.theme = function (theme, func) {
        if (this.state.theme == theme)
            return typeof (func) == "function" ? func(theme, true) : null;
        this.state.theme = theme;
        assist.module.cookie.set("theme", theme);
        assist.module.page.eachDoc(function (d) {
            setTheme(d, theme)
        });
        this.cursor(this.state.cursor);
        return typeof (func) == "function" ? func(theme, true) : null
    }
        ;
    function setLamp(doc, state) {
        var op = state ? "1.0" : "0.75";
        $(doc.body).css("opacity", op)
    }
    this.lamp = function (state, func) {
        if (this.state.lamp == state)
            return typeof (func) == "function" ? func(state, true) : null;
        this.state.lamp = state;
        assist.module.cookie.set("lamp", state);
        assist.module.page.eachDoc(function (d) {
            setLamp(d, state)
        });
        return typeof (func) == "function" ? func(state, true) : null
    }
        ;
    this.locate = function (e, state) {
        if (state && !e && typeof (assist.global.mousex) === "undefined")
            return;
        if (e) {
            e = e ? e : window.event;
            assist.global.mousex = e.clientX;
            assist.global.mousey = e.clientY
        }
        if (!state)
            return;
        if (!assist.global.locateNode) {
            assist.global.locateNode = document.createElement("div");
            $(assist.global.locateNode).attr("id", "acclocate").appendTo(document.body)
        }
        var x = assist.global.mousex < 0 ? 0 : assist.global.mousex;
        var y = assist.global.mousey < 0 ? 0 : assist.global.mousey;
        var w = 200
            , h = 200
            , l = x - w / 2
            , t = y - h / 2;
        $(assist.global.locateNode).css({
            "display": "block",
            "width": w + "px",
            "height": h + "px",
            "left": l + "px",
            "top": t + "px"
        }).animate({
            "width": "0px",
            "height": "0px",
            "left": x + "px",
            "top": y + "px"
        }, 800, function () {
            $(this).css("display", "none")
        })
    }
        ;
    function setZoom(doc, zoom, click) {
        try {
            zoom = zoom && (typeof parseFloat(zoom.toString()) !== "number") ? 1 : zoom
        } catch (e) {
            zoom = 1
        }
        var dbs = doc.body.style;
        if ("webkitTransform" in dbs) {
            $(doc.body).children().each(function () {
                if (this.id && this.id == "accface")
                    return true;
                this.style["webkitTransform"] = zoom == 1 ? "none" : "scale(" + zoom + ")";
                this.style["webkitTransformOrigin"] = "0 0"
            })
        } else if ("MozTransform" in dbs) {
            $(doc.body).children().each(function () {
                if (this.id && this.id == "accface")
                    return true;
                this.style["MozTransform"] = zoom == 1 ? "none" : "scale(" + zoom + ")";
                this.style["MozTransformOrigin"] = "0 0"
            })
        } else if ("-ms-transform" in dbs) {
            $(doc.body).children().each(function () {
                if (this.id && this.id == "accface")
                    return true;
                this.style["-ms-transform"] = zoom == 1 ? "none" : "scale(" + zoom + ")";
                this.style["-ms-transform-origin"] = "0 0"
            })
        } else {
            $(doc.body).children().each(function () {
                if (this.id && this.id == "accface")
                    return true;
                this.style["zoom"] = zoom
            })
        }
        var timer = click ? 100 : 2000;
        setTimeout(function () {
            var windowWidth = $(window).width();
            try {
                document.documentElement.scrollLeft = windowWidth * (zoom - 1) / 2
            } catch (e) { }
            try {
                document.body.scrollLeft = windowWidth * (zoom - 1) / 2
            } catch (e) { }
        }, timer);
        return true
    }
    this.zoom = function (zoom, func) {
        zoom = typeof (zoom) == "number" && zoom > 1 ? zoom : 1;
        if (this.state.zoom == zoom)
            return typeof (func) == "function" ? func(zoom, true) : null;
        this.state.zoom = zoom;
        assist.module.cookie.set("zoom", zoom);
        assist.module.page.eachDoc(function (d) {
            if (!setZoom(d, zoom, true))
                return typeof (func) == "function" ? func(zoom, false) : null
        });
        return typeof (func) == "function" ? func(zoom, true) : null
    }
        ;
    this.ruler = function (state, func) {
        state = state ? 1 : 0;
        if (this.state.ruler != state) {
            this.state.ruler = state;
            assist.module.cookie.set("ruler", state)
        }
        if (rulerNodes.length < 1) {
            var ruler1 = document.createElement("div");
            $(ruler1).attr("id", "accruler1").css("display", "none");
            var ruler2 = document.createElement("div");
            $(ruler2).attr("id", "accruler2").css("display", "none");
            $(document.body).append(ruler1);
            rulerNodes.push(ruler1);
            $(document.body).append(ruler2);
            rulerNodes.push(ruler2)
        }
        for (var i = 0; i < rulerNodes.length; i++) {
            $(rulerNodes[i]).css({
                "display": (state ? "block" : "none")
            })
        }
        return typeof (func) == "function" ? func(state, true) : null
    }
        ;
    this.rulerMove = function (e) {
        if (!this.state.ruler)
            return false;
        e = e ? e : window.event;
        var isframe = typeof (e.data) == "object" && e.data.frame;
        var x = e.clientX;
        var y = e.clientY;
        if (isframe) {
            var node = e.target || e.srcElement;
            var ox = node.ownerDocument.ox;
            var oy = node.ownerDocument.oy;
            if (typeof (ox) != "undefined") {
                if (typeof window.pageYOffset != 'undefined') {
                    x += ox - window.pageXOffset;
                    y += oy - window.pageYOffset
                } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
                    x += ox - document.documentElement.scrollLeft;
                    y += oy - document.documentElement.scrollTop
                } else if (typeof document.body != 'undefined') {
                    x += ox - document.body.scrollLeft;
                    y += oy - document.body.scrollTop
                }
            }
        }
        var display = "block";
        var winw = $(window).width();
        var winh = $(window).height();
        if (x < 10 || y < 10 || x > winw - 10 || y > winh - 10)
            display = "none";
        $(rulerNodes[0]).css({
            "display": display,
            "left": (x - 20) + "px",
            "top": (y - 300) + "px"
        });
        $(rulerNodes[1]).css({
            "display": display,
            "left": (x - 300) + "px",
            "top": (y - 20) + "px"
        });
        return true
    }
        ;
    function setCursor(doc, state) {
        $("#yx_cursor", doc.body).remove();
        if (!state)
            return;
        var rever = instance.state.theme == "default" ? "a" : "r";
        var fileName = (rever + ($.browser.msie && parseInt($.browser.version.substring(0, 1)) < 9 ? "i" : "w"));
        var css = '<style id="yx_cursor" type="text/css">';
        css += '*{cursor:url("' + assist.module.config.getUrl("images/all" + fileName + ".cur") + '"),auto !important;}';
        css += 'a{cursor:url("' + assist.module.config.getUrl("images/link" + fileName + ".cur") + '"),auto !important;}';
        css += '</style>';
        $(doc.body).append(css)
    }
    this.slient = function (state) {
        if (state) {
            assist.module.page.eachDoc(function (d) {
                try {
                    $("audio,video,object,embed", d.body).each(function () {
                        if (this.parentNode && this.parentNode.tagName == "OBJECT")
                            return true;
                        var html = this.outerHTML.replace(/(<[\/]?(audio|video|object|embed))/ig, "$1x");
                        if (/soundmanager/i.test(html))
                            return true;
                        $(this).before(html);
                        $(this).remove()
                    })
                } catch (e) { }
            })
        } else {
            assist.module.page.eachDoc(function (d) {
                try {
                    $("audiox,videox,objectx,embedx").each(function () {
                        if (this.parentNode && this.parentNode.tagName == "OBJECTX")
                            return true;
                        var html = this.outerHTML.replace(/(<[\/]?(audio|video|object|embed))x/ig, "$1");
                        $(this).before(html);
                        $(this).remove()
                    })
                } catch (e) { }
            })
        }
    }
        ;
    this.slientToggle = function () {
        this.slientState = this.slientState ? 0 : 1;
        this.slient(this.slientState)
    }
        ;
    this.cursor = function (state, func) {
        state = state ? 1 : 0;
        if (state != this.state.cursor) {
            this.state.cursor = state;
            assist.module.cookie.set("cursor", state)
        }
        assist.module.page.eachDoc(function (d) {
            setCursor(d, state)
        });
        return typeof (func) == "function" ? func(state, true) : null
    }
        ;
    this.lang = function (lang, func) {
        if (this.state.lang == lang)
            return typeof (func) == "function" ? func(lang, true) : null;
        this.state.lang = lang;
        assist.module.cookie.set("lang", lang);
        this.screen.replay();
        return typeof (func) == "function" ? func(lang, true) : null
    }
        ;
    function screenx() {
        var wnode = document.createElement("label");
        wnode.id = "acc_screen_space";
        $(wnode).css({
            "visibility": "hidden",
            "white-space": "nowrap"
        }).appendTo(document.body);
        this.open = function (state, func) {
            state = state ? 1 : 0;
            var tipNode = document.getElementById("acctip");
            if (!tipNode)
                return setTimeout(function () {
                    instance.screen.open(state, func)
                }, 500);
            if (instance.state.screen != state) {
                instance.state.screen = state;
                assist.module.cookie.set("screen", state)
            }
            if (state) {
                $(tipNode.parentNode).slideDown();
                $(wnode).show()
            } else {
                $(tipNode.parentNode).slideUp();
                $(wnode).hide()
            }
            return typeof (func) == "function" ? func(tipNode) : null
        }
            ;
        this.replay = function () {
            var tipNode = document.getElementById("acctip");
            if (tipNode)
                this.tip($(tipNode).attr("otext"))
        }
            ;
        this.tip = function (html, func) {
            if (window.showRead && typeof (window.showRead) == "function")
                window.showRead(html);
            var tipNode = document.getElementById("acctip");
            if (tipNode && !html)
                $(tipNode).html("");
            $(tipNode).attr("otext", html);
            var endDot = assist.module.util.inArray(html.charAt(html.length - 1), assist.module.page.splitDot);
            if (endDot)
                html = html.substring(0, html.length - 1);
            if (instance.state.lang == "tw")
                html = assist.module.util.big5(html);
            if (!tipNode || !instance.state.screen || !html)
                return typeof (func) == "function" ? func(instance.state.lang, tipNode) : html;
            if (instance.state.lang == "py") {
                html = assist.module.util.toPinyin(html);
                $(tipNode).css({
                    "overflow-y": "auto",
                    "font-size": "16px",
                    "line-height": "normal"
                }).html(html)
            } else {
                var he = $(tipNode).height();
                var obj = this.getSize($(tipNode).width() - 40, (he - 40), html);
                var line = he / obj.line;
                $(tipNode).css({
                    "overflow-y": "hidden",
                    "font-size": obj.size + "px",
                    "line-height": line + "px"
                }).html(html)
            }
            return typeof (func) == "function" ? func(instance.state.lang, tipNode) : html
        }
            ;
        this.getSize = function (w, h, str) {
            if (!str)
                return {
                    "size": h,
                    "line": 1
                };
            $(wnode).html(str);
            var size = h
                , line = 1;
            while (size > 0) {
                var wi = $(wnode).css("font-size", size + "px").width();
                if (wi < w * line)
                    break;
                size = size - 2;
                line = Math.floor(h / size)
            }
            return {
                "size": size,
                "line": line
            }
        }
    }
    this.screen = new screenx();
    this.refresh = function (iscache, func) {
        if (typeof (func) == "function")
            func(location);
        location.reload(iscache)
    }
        ;
    this.back = function (func) {
        if (typeof (func) == "function")
            func(location);
        window.history.back()
    }
        ;
    this.fowoard = function (func) {
        if (typeof (func) == "function")
            func(location);
        window.forward()
    }
        ;
    this.clear = function (cache) {
        cache = cache ? true : false;
        assist.module.cookie.clear();
        var url = top.location.href.split('#')[0];
        top.location.href = url.replace(/[\?&]blind=[\d]/i, "")
    }
        ;
    this.setNode = function (node) {
        var bg = $(node).css("backgroundImage");
        if (bg != 'none') {
            if ((node.tagName == "INPUT" && (!$(node).attr("type") || $(node).attr("type") == "text")) || node.tagName == "TEXTAREA") {
                $(node).addClass("accinput")
            } else {
                var bgrepeat = $(node).css("background-repeat");
                if ((bgrepeat == "repeat-x" || bgrepeat == "repeat-y" || $(node).outerWidth() < 12 || $(node).outerHeight() < 12 || $(node).text().replace(/\s/g, "").length > 0))
                    $(node).addClass("accbg")
            }
        }
        var position = $(node).css("position");
        if (position != "static") {
            var bgcolor = $(node).css("background-color");
            if (bgcolor != "rgba(0, 0, 0, 0)" && bgcolor != "transparent") {
                $(node).addClass("accalpha")
            }
        }
    }
}
    ;
YX.Assist.prototype.recognize = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {};
    this.init = function (doc) { }
}
    ;
YX.Assist.prototype.robot = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {
        "oral": 1,
        "pop": 0
    };
    this.init = function (doc) {
        if (doc == document) {
            this.oral.open(this.state.oral);
            this.pop.open(this.state.pop)
        }
    }
        ;
    function oralx() {
        this.open = function (state) {
            if (instance.state.oral == state)
                return;
            instance.state.oral = state;
            assist.module.cookie.set("oral", state);
            assist.module.region.each(function (obj) {
                assist.module.accessbility.repairTip(obj.node)
            })
        }
            ;
        this.dictate = function (node, prefix) {
            var desc = "";
            if (!instance.state.oral)
                return desc;
            if (node == document.body)
                return pageDesc(node);
            var region = assist.module.accessbility.getDesc(node);
            if (region && region.type == "content") {
                desc = contentDesc(node)
            } else if (region && region.type == "mutual") {
                desc = mutualDesc(node)
            } else if (region) {
                desc = listDesc(node)
            }
            return desc ? prefix + desc : ""
        }
            ;
        function pageDesc(node) {
            var desc = "";
            var range = assist.module.region.rank();
            if (!range)
                return assist.module.text.get("noRegion");
            var regioninfo = ""
                , count = 0;
            for (var i = 0; i < range.length; i++) {
                var len = range[i].nodes.length;
                var name = range[i].name;
                count += len;
                regioninfo += assist.module.text.get("countRegion", {
                    "name": name,
                    "len": len
                })
            }
            if (regioninfo)
                regioninfo = regioninfo.substring(0, regioninfo.length - 1);
            var pressinfo = assist.module.accessbility.pageType ? assist.module.text.get("press" + assist.module.accessbility.pageType) : "";
            desc = regioninfo ? assist.module.text.get("pageForm", {
                "regioninfo": regioninfo,
                "count": count,
                "pressinfo": pressinfo
            }) : "";
            return desc
        }
        function listDesc(node) {
            var linkCount = $("a", node).filter(function () {
                return assist.module.node.isVisible(this)
            }).length;
            var senCount = $(".acctext", node).length;
            var imgLen = $("img", node).filter(function () {
                var orgsrc = $(this).attr("orgsrc");
                var src = orgsrc ? orgsrc : $(this).attr("src");
                if (!src)
                    return false;
                var w = $(this).width();
                var h = $(this).height();
                var tp = $(this).offset().top;
                var srcParts = src.split('/');
                var name = srcParts[srcParts.length - 1];
                if ((w < 400 || h < 250) && ((name && !/\d{3,}/.test(name)) || (name && name.length < 9) || (w > 5 && w < 50) || (h > 3 && h < 50)))
                    return false;
                return true
            }).length;
            var imginfo = imgLen > 0 ? assist.module.text.get("imginfo", {
                "imgcount": imgLen
            }) : "";
            return linkCount == 0 ? (senCount == 0 ? "" : assist.module.text.get("listaForm", {
                "sencount": senCount,
                "imginfo": imginfo
            })) : assist.module.text.get("listForm", {
                "linkcount": linkCount,
                "imginfo": imginfo
            })
        }
        function mutualDesc(node) {
            var desc = "";
            var doms = {
                text: 0,
                radio: 0,
                checked: 0,
                select: 0,
                submit: 0,
                reset: 0,
                file: 0,
                password: 0
            };
            $("input", node).each(function () {
                var type = $(this).attr("type");
                type = type ? type.toLowerCase() : "text";
                if (typeof (doms[type]) !== "undeined")
                    doms[type]++
            });
            doms["text"] += $("textarea", node).length;
            doms["submit"] += $("button", node).length;
            doms["select"] += $("select", node).length;
            for (var type in doms) {
                var len = doms[type];
                var name = assist.module.text.get(type);
                if (!len)
                    continue;
                desc += assist.module.text.get("countRegion", {
                    len: len,
                    name: name
                })
            }
            if (desc)
                desc = desc.substring(0, desc.length - 1);
            return desc ? assist.module.text.get("mutualForm", {
                regioninfo: desc
            }) : ""
        }
        function contentDesc(node) {
            if (!node)
                return "";
            var pLen = $("p", node).length;
            if (!pLen)
                pLen = $("br", node).length;
            var wLen = assist.module.util.countZh($(node).text());
            var bt = $(node).offset().top + $(node).height();
            var imgLen = $("img", node).filter(function () {
                var orgsrc = $(this).attr("orgsrc");
                var src = orgsrc ? orgsrc : $(this).attr("src");
                if (!src)
                    return false;
                var isCenter = $(this.parentNode).css("text-align") == "center" || $(this.parentNode).attr("align") == "center";
                isCenter = isCenter || $(this.parentNode.parentNode).css("text-align") == "center" || $(this.parentNode.parentNode).attr("align") == "center";
                isCenter = isCenter || this.parentNode.tagName == "CENTER";
                isCenter = isCenter || (this.style.marginLeft == "auto" && this.style.marginRight == "auto");
                var w = $(this).width();
                var h = $(this).height();
                var tp = $(this).offset().top;
                var srcParts = src.split('/');
                var name = srcParts[srcParts.length - 1];
                if ((w < 400 || h < 250) && (!isCenter || (name && !/\d{3,}/.test(name)) || (name && name.length < 9) || (w > 50 && w < 200) || (w < 300 && h > 30 && h < 200) || (this.parentNode.tagName == "A" && this.parentNode.href.indexOf("javascript") != -1)))
                    return false;
                return true
            }).length;
            var imginfo = imgLen > 0 ? assist.module.text.get("imginfo", {
                "imgcount": imgLen
            }) : "";
            pLen = pLen < 1 ? 1 : pLen;
            var minute = Math.round(wLen / (60 * (4 + 0.4 * assist.module.voice.speed())));
            minute = minute > 1 ? minute : 1;
            return assist.module.text.get("contentForm", {
                imginfo: imginfo,
                p: pLen,
                w: wLen,
                minute: minute
            })
        }
    }
    function popx() {
        this.open = function (state, func) {
            if (instance.state.pop != state) {
                instance.state.pop = state;
                assist.module.cookie.set("pop", state)
            }
            if (state) { }
        }
            ;
        this.merge = function (keep) {
            var nodes = this.news(keep);
            if (!nodes || nodes.length < 1)
                nodes = this.tops();
            return nodes
        }
            ;
        this.tops = function () {
            var nodes = [];
            var hrefs = {};
            assist.module.region.each(function (obj) {
                var node = obj.node;
                var region = assist.module.accessbility.getDesc(node);
                if (region && region.type == "slist") {
                    $("a", node).each(function () {
                        var node = this;
                        if ($(node).hasClass("accnode"))
                            return true;
                        var text = assist.module.node.getLinkText(node);
                        if (!text || text.length < 6)
                            return true;
                        var href = assist.module.node.getHref(node);
                        if (!href || hrefs[href])
                            return true;
                        hrefs[href] = 1;
                        nodes.push({
                            "text": text,
                            "href": node.href,
                            "region": region
                        });
                        return false
                    })
                }
            });
            return nodes
        }
            ;
        this.news = function (keep) {
            var nodes = [];
            if (assist.module.accessbility.pageType != 1)
                return nodes;
            var ckey = document.location.href;
            var srcData = assist.plugin.store.get(ckey);
            srcData = srcData ? srcData : "";
            var newData = "";
            assist.module.page.eachDoc(function (d) {
                for (var i = 0; i < d.links.length; i++) {
                    var node = d.links[i];
                    var text = assist.module.node.getLinkText(node);
                    var href = assist.module.node.getHref(node);
                    if (!href || !text)
                        continue;
                    var noProxyHref = assist.module.util.getNoProxyUrl(href);
                    var recHref = noProxyHref.split("/");
                    if (recHref.length > 3)
                        recHref = recHref.splice(3);
                    recHref = recHref.join("/").split("#")[0] + "#";
                    newData += recHref;
                    if (srcData && srcData.indexOf(recHref) == -1) {
                        nodes.push({
                            "text": text,
                            "href": node.href
                        })
                    }
                }
            });
            if (nodes.length > 0 || !srcData)
                assist.plugin.store.set(ckey, newData);
            var lckey = "l" + ckey;
            var lnew = assist.plugin.store.get(lckey);
            if (nodes.length > 0) {
                for (var i = 0; i < nodes.length; i++) {
                    lnew += nodes[i].text + "~~~" + node.href + ":::"
                }
                lnew = lnew.replace(/:::$/, "");
                var items = lnew.split(":::");
                var newItems = [];
                for (var i = items.length - 1; i >= 0; i--) {
                    newItems.push(items[i]);
                    if (newItems.length > 4)
                        break
                }
                lnew = newItems.join(":::");
                assist.plugin.store.set(lckey, lnew)
            }
            if (keep && lnew) {
                nodes = [];
                var endItems = lnew.split(":::");
                for (var i = 0; i < endItems.length; i++) {
                    var link = endItems[i].split("~~~");
                    nodes.push({
                        "text": link[0],
                        "href": link[1]
                    })
                }
            }
            return nodes
        }
    }
    this.oral = new oralx();
    this.pop = new popx()
}
    ;
YX.Assist.prototype.template = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.containerNode = null;
    this.state = {
        "bigeyes": 0
    };
    this.init = function (doc) { }
        ;
    function add(html) {
        if (!instance.containerNode) {
            instance.containerNode = document.createElement("div");
            $(instance.containerNode).attr("id", "acctpl").appendTo(document.body)
        }
        $(instance.containerNode).html(html);
        return instance.containerNode
    }
    function load(tpl, func) {
        if (window.assistTplHtml && window.assistTplHtml[tpl]) {
            var result = window.assistTplHtml[tpl];
            result = result.replace(/{relurl}/ig, assist.module.config.getUrl());
            var cnode = add(result);
            if (typeof (func) == "function")
                func(cnode)
        } else {
            if (typeof (func) == "function")
                func(null)
        }
    }
    function fill() {
        assist.module.region.each(function (obj) {
            var node = obj.node;
            var regionDesc = $(node).attr("region");
            var regionArr = regionDesc.split(':');
            var regionType = regionArr[0];
            regionArr.shift();
            var regionName = regionArr.length > 0 ? regionArr.join(":") : "";
            var html = extract(node, regionType, regionName);
            $("#tpl" + regionType).append(html)
        })
    }
    function extract(node, areaType, areaName) {
        var html = "";
        if (areaType == "mutux" || areaType == "content") {
            html = node.outerHTML
        } else {
            var hrefs = {};
            $("a", node).each(function () {
                if ($(this).hasClass("accnode"))
                    return true;
                if (areaType != "slist" && !assist.module.node.isVisible(this, node))
                    return true;
                var href = $(this).attr("href");
                var name = "";
                if ($("style,script", this).length > 0) {
                    var cloneNode = $(this).clone();
                    cloneNode.find("style,script").remove();
                    name = cloneNode.text().replace(/\s/g, "")
                } else {
                    name = $(this).text().replace(/\s/g, "")
                }
                var img = $(">img", this).filter(function () {
                    return assist.module.node.isVisible(this, node)
                }).get(0);
                img = img ? img.outerHTML : "";
                name = name ? name : $(this).attr("title");
                name = name ? name.replace(/\s/, "") : "";
                if (hrefs[href]) {
                    hrefs[href].name = hrefs[href].name ? hrefs[href].name : name;
                    hrefs[href].img = hrefs[href].img ? hrefs[href].img : img
                } else {
                    hrefs[href] = {
                        "name": name,
                        "img": img
                    }
                }
            });
            html = '<ul>';
            for (var href in hrefs) {
                if (!hrefs[href].img && !hrefs[href].name)
                    continue;
                if (hrefs[href].img) {
                    html += '<li><a href="' + href + '" title=' + hrefs[href].name + '>' + hrefs[href].img + '</a></li>'
                } else {
                    html += '<li><a href="' + href + '">' + hrefs[href].name + '</a></li>'
                }
            }
            html += '</ul>';
            html = "<label class='accregiontitle' tabindex=0>" + areaName + "</label>" + html
        }
        return html
    }
    function open(tpl, state) {
        if (instance.state[tpl] != state) {
            instance.state[tpl] = state;
            assist.module.cookie.set(tpl, state)
        }
        var bodyHidden = $(document.body).css("overflow");
        if (state) {
            $(document.body).css("overflow", "hidden");
            load(tpl, function (node) {
                fill();
                $(document.body).children().each(function () {
                    var hidden = $(this).css("visibility");
                    $(this).attr("hide", hidden).css("visibility", "hidden")
                });
                instance.containerNode.style.visibility = "visible";
                if (assist.module.face.containerNode)
                    assist.module.face.containerNode.style.visibility = "visible";
                if (window.assistTpl && typeof (window.assistTpl) == "function")
                    try {
                        window.assistTpl(assist)
                    } catch (e) { }
            })
        } else {
            $(document.body).css("overflow", bodyHidden);
            $(document.body).children().each(function () {
                var visible = $(this).attr("hide");
                if (!visible)
                    return true;
                $(this).css("visibility", visible)
            });
            $(instance.tplNode).html("")
        }
    }
}
    ;
YX.Assist.prototype.face = function (assist) {
    var $ = assist.$;
    var instance = this;
    this.state = {
        "face": 1,
        "side": "left",
        "color": "blue",
        "distance": 0,
        "sound": 0,
        "mobile": 0,
        "bar": 1,
        "proxy": 0,
        blind: 3,
        "service": "001",
        "packup": 0
    };
    this.containerNode = null;
    this.accLinkId = "cniil_wza";
    this.init = function (doc) {
        if (document == doc) {
            this.mySite = /reweb=1/i.test(assist.module.config.scriptUrl);
            this.myPlatform = /pf=1/i.test(assist.module.config.scriptUrl);
            getParam();
            open(this.state.face)
        }
    }
        ;
    this.setParam = function (key, value) {
        this.state[key] = value;
        assist.module.cookie.set(key, value)
    }
        ;
    function getParam() {
        function getVal(key, reg) {
            var match = reg.exec(assist.module.config.scriptUrl);
            if (!match)
                match = reg.exec(location.href);
            if (match) {
                instance.state[key] = match[1];
                if (key != "sound" && key != "packup")
                    assist.module.cookie.set(key, match[1])
            }
        }
        function getIni(key, val) {
            val = val + "";
            instance.state[key] = val;
            if (key != "sound" && key != "packup")
                assist.module.cookie.set(key, val)
        }
        var sid = assist.module.accessbility.setSid();
        var siteIni = window.SITEINI && window.SITEINI[sid] ? window.SITEINI[sid] : null;
        siteIni && siteIni["side"] !== undefined ? getIni("side", siteIni["side"]) : getVal("side", (/[\?&]pos\s*=\s*(left|right)/i));
        siteIni && siteIni["color"] !== undefined ? getIni("color", siteIni["color"]) : getVal("color", (/[\?&]the\s*=\s*(black|blue|red)/i));
        siteIni && siteIni["distance"] !== undefined ? getIni("distance", siteIni["distance"]) : getVal("distance", (/[\?&]dis\s*=\s*(\d{1,5})/i));
        siteIni && siteIni["sound"] !== undefined ? getIni("sound", siteIni["sound"]) : getVal("sound", (/[\?&]snd\s*=\s*(0|1)/i));
        siteIni && siteIni["mobile"] !== undefined ? getIni("mobile", siteIni["mobile"]) : getVal("mobile", (/[\?&]mob\s*=\s*(0|1)/i));
        siteIni && siteIni["proxy"] !== undefined ? getIni("proxy", siteIni["proxy"]) : getVal("proxy", (/[\?&]pro\s*=\s*(0|1|2|3)/i));
        siteIni && siteIni["bar"] !== undefined ? getIni("bar", siteIni["bar"]) : getVal("bar", (/[\?&]bar\s*=\s*(0|1|2|3)/i));
        siteIni && siteIni["blind"] !== undefined ? getIni("blind", siteIni["blind"]) : getVal("blind", (/[\?&]blind\s*=\s*(0|1|2|3)/i));
        siteIni && siteIni["packup"] !== undefined ? getIni("packup", siteIni["packup"]) : getVal("packup", (/[\?&]pck\s*=\s*(0|1)/i));
        siteIni && siteIni["service"] !== undefined ? getIni("service", siteIni["service"]) : getVal("service", (/[\?&]svr\s*=\s*([0|1][0|1][0|1])/i));
        instance.state.service = instance.state.service + "";
        instance.state.service = instance.state.service.length == 2 ? "0" + instance.state.service : (instance.state.service.length == 1 ? "00" + instance.state.service : instance.state.service);
        if (instance.state.sound)
            assist.module.voice.open(1)
    }
    this.blind = function (val, func) {
        if (val == 3)
            return;
        val = val ? (val == 2 ? 2 : 1) : 0;
        this.state.blind = val;
        assist.module.cookie.set("blind", val);
        if (!this.docMask) {
            this.docMask = document.createElement("div");
            $(this.docMask).css({
                "opacity": "0.1",
                "background-color": "#000",
                "top": "0px",
                "z-index": "2147483610",
                "position": "fixed",
                "left": "0px",
                "width": "100%",
                "bottom": "0px"
            });
            assist.module.face.addElement(this.docMask);
            $(this.docMask).bind("click", function () {
                $(instance.docMask).css("display", "none")
            })
        }
        $(this.docMask).css("display", (val == 2 ? "block" : "none"))
    }
        ;
    function open(state) {
        instance.state.face = state;
        if (state) {
            load(function (node) {
                if (window.assistFace && typeof (window.assistFace) == "function")
                    try {
                        window.assistFace(assist)
                    } catch (e) { }
            });
            $(instance.containerNode).css("visibility", "visible")
        } else {
            $(instance.containerNode).css("visibility", "hidden")
        }
    }
    function add(html) {
        if (!instance.containerNode) {
            instance.containerNode = document.createElement("div");
            $(instance.containerNode).attr("id", "accface").addClass("noread").appendTo(document.body)
        }
        $(instance.containerNode).append(html);
        return instance.containerNode
    }
    function load(func) {
        if (window.assistFaceHtml && window.assistFaceHtml["code"]) {
            var result = window.assistFaceHtml["code"];
            result = result.replace(/{relurl}/ig, assist.module.config.getUrl());
            var cnode = add(result);
            if (typeof (func) == "function")
                func(cnode)
        } else {
            if (typeof (func) == "function")
                func(null)
        }
    }
    this.mask = function (eventName, css, html) {
        if (!assist.global.maskNode) {
            assist.global.maskNode = document.createElement("div");
            $(assist.global.maskNode).bind("mousemove", function () {
                var en = $(this).attr("en");
                if (en && en != "mousemove")
                    return;
                $(this).css("display", "none")
            }).bind("click", function () {
                var en = $(this).attr("en");
                if (en && en != "click")
                    return;
                $(this).css("display", "none")
            }).css({
                "background-color": "#fff",
                "opacity": "0.1",
                "position": "fixed",
                "width": "100%",
                "top": "0px",
                "bottom": "0px",
                "z-index": "2147483646"
            });
            this.addElement(assist.global.maskNode)
        }
        if (typeof (css) == "object")
            $(assist.global.maskNode).css(css);
        if (html)
            $(assist.global.maskNode).html(html);
        eventName = eventName ? eventName : "";
        $(assist.global.maskNode).attr("en", eventName);
        $(assist.global.maskNode).css("display", "block");
        return assist.global.maskNode
    }
        ;
    this.addElement = function (node) {
        if (this.containerNode && node)
            $(this.containerNode).append(node)
    }
}
    ;
if (top.location == location && !window.assist) {
    (function (jQ) {
        'use strict';
        var mob = function () {
            var arrs = ['iphone', 'android'];
            var info = navigator.userAgent.toLowerCase();
            for (var i = 0; i < arrs.length; i++) {
                var result = info.indexOf(arrs[i]);
                if (result > -1)
                    return true
            }
            return false
        };
        if (mob())
            return;
        var mergeCss = function () {
            if (!!window.ActiveXObject || "ActiveXObject" in window) { } else {
                return
            }
            if (!document.styleSheets)
                return;
            var aSheet = document.styleSheets
                , aStyle = document.getElementsByTagName('style')
                , aLink = document.getElementsByTagName('link');
            if (aStyle.length + aLink.length < 24)
                return;
            var aCssText = [];
            for (var i = aStyle.length - 1; i > -1; --i) {
                var o = aStyle[i];
                aCssText.push(o.innerHTML);
                if (i > 0)
                    o.parentNode.removeChild(o)
            }
            for (var i = aLink.length - 1; i > -1; --i) {
                var o = aLink[i];
                if (o.getAttribute && o.getAttribute('rel') === 'stylesheet') {
                    if (o.styleSheet)
                        aCssText.push(o.styleSheet.cssText);
                    if (i > 0)
                        o.parentNode.removeChild(o)
                }
            }
            aSheet[0].cssText += aCssText.reverse().join('')
        };
        window.onError = function () {
            return false
        }
            ;
        var assist = new YX.Assist(jQ);
        assist.register();
        if (document.readyState == "complete") {
            assist.init(document)
        } else {
            setTimeout(function () {
                assist.init(document)
            }, 500)
        }
        window.assist = assist
    }
    )(assistQ)
}
