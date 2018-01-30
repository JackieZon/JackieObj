var isIos = false;

// var base_url = "http://app-lift2.subei88.com/";
// var base_url_api = "http://app-lift2.subei88.com:8080/api/";
// var base_url_photo = "http://app-lift2.subei88.com/";

var base_url = "http://app-lift2.subei88.com:808/";
var base_url_api = "http://app-lift2.subei88.com:8088/api/";
var base_url_photo = "http://app-lift2.subei88.com:808/";

var key = "";

var pathLang = "fs://xml/PageXml.xml";
var xmlLang = "";

var date_t = new Date();

var clearValue = {
    PageSize: 10,
    PageIndex: 1,
    RowCount: 0,
    TenanceStatus: -1,

    // 搜索参数
    DeviceUseName: '',
    DeviceRegNo: '',
    DeviceCertNo: '',
    DeviceType1: '',
    DeviceStatus: '',
    DeviceFullAddress: '',
    DeviceArea4: ''

}

var data_power = [
    { devicename: "叉车设备1", devicephoto: 'timg01.jpg' },
    { devicename: "叉车设备2", devicephoto: 'timg02.jpg' },
    { devicename: "叉车设备3", devicephoto: 'timg03.jpg' },
    { devicename: "叉车设备4", devicephoto: 'timg04.jpg' },
    { devicename: "叉车设备5", devicephoto: 'timg05.jpg' },
    { devicename: "叉车设备6", devicephoto: 'timg06.jpg' },
    { devicename: "叉车设备7", devicephoto: 'timg07.jpg' },
    { devicename: "叉车设备8", devicephoto: 'timg08.jpg' },
    { devicename: "叉车设备9", devicephoto: 'timg09.jpg' },
    { devicename: "叉车设备10", devicephoto: 'timg10.jpg' },
    { devicename: "叉车设备11", devicephoto: 'timg11.jpg' },
    { devicename: "叉车设备12", devicephoto: 'timg12.jpg' }
]
var data_powers = [
    { devicename: "叉车设备1", devicephoto: 'timg01.jpg' },
    { devicename: "叉车设备2", devicephoto: 'timg02.jpg' },
]
var data_power_status = [
    { status: 1, statusname: "接收" },
    { status: 2, statusname: "执行" },
    { status: 3, statusname: "已完成" },
    { status: 3, statusname: "报警" }
]
var data_power_msg = [
    { msg: "逆变器关闭" },
    { msg: "直流断路器断开" },
    { msg: "交流输出接触器断开" },
    { msg: "逆变器不供电" },
    { msg: "逆变器不同步" },

    { msg: "逆变器自身故障保护异常" },
    { msg: "逆变器温度超高" },
    { msg: "风扇故障" },
    { msg: "逆变器孤岛效应保护故障" },
    { msg: "逆变器输出过载" },

    { msg: "低电压穿越保护" },
    { msg: "逆变器过载超时故障" },
    { msg: "交流过压保护故障" },
    { msg: "直流过压保护故障" },
    { msg: "过热保护故障" },

    { msg: "辅助电源故障" },
    { msg: "逆变驱动线缆故障" },
    { msg: "风扇驱动线缆故障" },
    { msg: "低电压穿越次数限制故障" },
    { msg: "电网电压不平衡故障" },

    { msg: "交流电流不平衡故障" },
    { msg: "正常停机故障" },
    { msg: "故障停机故障" },
    { msg: "直流接地故障保护故障" },
    { msg: "输出接地故障" },

    { msg: "直流防雷故障" },
    { msg: "交流防雷故障" },
    { msg: "逆变器过温" }
]

//采集器
//类型：EP500
//采集器名称：EP500#1、EP500#3、EP500#4、EP500#5、EP500#6
//PN号：KS0116000001、KS0116000003、KS0116000004、KS0116000005、KS0116000006
//最后心跳：
var data_power_device_0 = [
    { deviceName: "EP500#1", devicePn: "KS0116000001" },
    { deviceName: "EP500#2", devicePn: "KS0116000002" },
    { deviceName: "EP500#3", devicePn: "KS0116000003" },
    { deviceName: "EP500#4", devicePn: "KS0116000004" },
    { deviceName: "EP500#5", devicePn: "KS0116000005" },
    { deviceName: "EP500#6", devicePn: "KS0116000006" }
]
//逆变器
//型号：KSG-10K、KSG-20K、KSG-30K、KSG-50K、KSG-60K
//设备编号：IKS011600000121、IKS011600000122、IKS011600000221、IKS011600000222、IKS011600000321、IKS011600000322
//当前功率：
//日发电量：
//总发电量：
var data_power_device_1 = [
    { deviceName: "KSG-10K", devicePn: "IKS011600000121" },
    { deviceName: "KSG-20K", devicePn: "IKS011600000122" },
    { deviceName: "KSG-20K", devicePn: "IKS011600000221" },
    { deviceName: "KSG-30K", devicePn: "IKS011600000222" },
    { deviceName: "KSG-50K", devicePn: "IKS011600000321" },
    { deviceName: "KSG-60K", devicePn: "IKS011600000322" }
]
//汇流箱
//型号：K-Solr-Sp4、K-Solr-Sp5、K-Solr-Sp6
//设备编号：CKS011600000421、CKS011600000422、CKS011600000521、CKS011600000522、CKS011600000621、CKS011600000622
//总电流：
//总电压：
//总功率：
var data_power_device_4 = [
    { deviceName: "K-Solr-Sp1", devicePn: "CKS011600000421" },
    { deviceName: "K-Solr-Sp2", devicePn: "CKS011600000422" },
    { deviceName: "K-Solr-Sp3", devicePn: "CKS011600000521" },
    { deviceName: "K-Solr-Sp4", devicePn: "CKS011600000522" },
    { deviceName: "K-Solr-Sp5", devicePn: "CKS011600000621" },
    { deviceName: "K-Solr-Sp6", devicePn: "CKS011600000622" }
]
//环境监测仪
//型号：KS-YQ10、KS-YQ12、KS-YQ15、KS-YQ20
//环境温度：
//背板温度：
//日照强度：
var data_power_device_2 = [
    { deviceName: "KS-YQ10", devicePn: "" },
    { deviceName: "KS-YQ12", devicePn: "" },
    { deviceName: "KS-YQ15", devicePn: "" },
    { deviceName: "KS-YQ20", devicePn: "" }
]
//智能电表
//型号：PD194E-9HY、PD194E-10HY、PD194E-12HY、PD194E-15HY
//有功功率：
//无功功率：
//视在功率：
var data_power_device_3 = [
    { deviceName: "PD194E-9HY", devicePn: "" },
    { deviceName: "PD194E-10HY", devicePn: "" },
    { deviceName: "PD194E-12HY", devicePn: "" },
    { deviceName: "PD194E-15HY", devicePn: "" }
]

//获取n至m随机整数
function rd(n, m) {
    var c = m - n + 1;
    return (Math.random() * c + n).toFixed(0);
}
//获得初始的日期
function rd_date_init() {
    date_t = new Date();
}
//获得更小的日期
function rd_date_get(n) {
    date_t = new Date(date_t.getTime() - n);
    return date_t;
}

//用户的坐标
function get_userLon() {
    return window.localStorage.getItem("userLon");
}
function get_userLat() {
    return window.localStorage.getItem("userLat");
}


//登录之后的用户Id
function get_memberId() {
    return window.localStorage.getItem("memberId");
}
function get_memberIndex() {
    return window.localStorage.getItem("memberIndex");
}
function get_memberEmail() {
    return window.localStorage.getItem("memberEmail");
}
function get_memberPwd() {
    return window.localStorage.getItem("memberPwd");
}
function get_memberTel() {
    return window.localStorage.getItem("memberTel");
}
function get_memberName() {
    var value = window.localStorage.getItem("memberName");
    if (value == "undefined" || value == undefined || typeof (value) == undefined) {
        return "未知";
    }
    else {
        return window.localStorage.getItem("memberName");
    }
}
function get_memberPhoto() {
    return window.localStorage.getItem("memberPhoto");
}
function get_memberFlag() {
    return window.localStorage.getItem("memberFlag");
}
function get_memberType() {
    return window.localStorage.getItem("memberType");
}
function get_memberLevel() {
    return window.localStorage.getItem("memberLevel");
}
function get_memberArea() {
    return window.localStorage.getItem("userArea1") + "," + window.localStorage.getItem("userArea2") + "," + window.localStorage.getItem("userArea3");
}
function get_memberAddress() {
    return window.localStorage.getItem("userAddress");
}
function get_memberLocation() {
    return window.localStorage.getItem("location");
}
//登录之后的用户推送Id(极光分配的Id)
function get_memberSendId() {
    return window.localStorage.getItem("memberSendId");
}
//登录之后的用户Id(融云分配的Id)
function get_memberRongToken() {
    return window.localStorage.getItem("rongToken");
}
function clearLocalStorage() {
    localStorage.clear();
}


/** * 判断是否是空 * @param value */
function is_define(value) {
    if (value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof (value) == 'undefined') {
        return false;
    }
    else {
        value = value + "";
        value = value.replace(/\s/g, "");
        if (value == "") {
            return false;
        }
        return true;
    }
}
//验证手机号
function is_mobile(mobile) {
    if (mobile == "") {
        return false;
    } else {
        if (!/^0{0,1}(13|15|18|14|17)[0-9]{9}$/.test(mobile)) {
            return false;
        }
        return true;
    }
}
//验证邮箱
function is_email(email) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    return reg.test(email);
}
//验证身份证号
function is_idcardno(num) {

    num = num.toUpperCase();
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {

        //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');

        return false;

    }

    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。

    //下面分别分析出生日期和校验位

    var len, re;

    len = num.length;

    if (len == 15) {

        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);

        var arrSplit = num.match(re);

        //检查生日日期是否正确

        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);

        var bGoodDay;

        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));

        if (!bGoodDay) {

            //alert('输入的身份证号里出生日期不对！');

            return false;

        }

        else {

            //将15位身份证转成18位

            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。

            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);

            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');

            var nTemp = 0, i;

            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);

            for (i = 0; i < 17; i++) {

                nTemp += num.substr(i, 1) * arrInt[i];

            }

            num += arrCh[nTemp % 11];

            return num;

        }

    }

    if (len == 18) {

        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);

        var arrSplit = num.match(re);

        //检查生日日期是否正确

        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);

        var bGoodDay;

        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));

        if (!bGoodDay) {

            //alert(dtmBirth.getYear());

            //alert(arrSplit[2]);

            //alert('输入的身份证号里出生日期不对！');

            return false;

        }

        else {

            //检验18位身份证的校验码是否正确。

            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。

            var valnum;

            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);

            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');

            var nTemp = 0, i;

            for (i = 0; i < 17; i++) {

                nTemp += num.substr(i, 1) * arrInt[i];

            }

            valnum = arrCh[nTemp % 11];

            if (valnum != num.substr(17, 1)) {

                //alert('18位身份证的校验码不正确！应该为：' + valnum);

                return false;

            }

            return num;

        }

    }

    return false;

}


//页面初始化
function pageInit() {

    if(subei.isApp){
        var header = $api.byId("aui-header");
        if (header != undefined) {
            var systemType = api.systemType;
            var systemVersion = parseFloat(api.systemVersion);
            if (systemType == "ios" || (systemType == "android" && systemVersion >= 4.4)) {
                if (systemType == "android") {
                    header.style.paddingTop = '25px';
                }
                $api.fixStatusBar(header);
            } else {
                $api.fixIos7Bar(header);
            }
        }
    }

}
//页面为空的提示
function showTips(type, intro, callback) {

    if (type == "") type = 1;
    if (intro == "") intro = "加载中...";

    var strHtml = "";
    strHtml += '<section class="tips tips' + type + '">';
    strHtml += '<i class="tip-img aui-iconfont aui-icon-goods"></i>';
    strHtml += '<div class="tip-content">' + intro + '</div>';
    strHtml += '<a class="lnkHome">去逛逛</a>';
    strHtml += '</section>';

    $("section.tips").remove();
    $("body").append(strHtml);

    $("section.tips").click(function () {
        if (is_define(callback)) {
            callback()
        }
    })
}
//页面为空的提示的清空
function hideTips() {
    $("section.tips").remove();
}
//下一页时拉取的效果
function showLoadUp(callback) {

    var strHtml = "";
    strHtml += '<section class="loadUp">';
    strHtml += '<div class="tip-content">努力拉取中...</div>';
    strHtml += '<a>点我加载</a>';
    strHtml += '</section>';

    $("section.loadUp").remove();
    $("body").addClass("loadUp");
    $("body").append(strHtml);

    $("section.loadUp").click(function () {
        if (is_define(callback)) {
            callback()
        }
    })
}
//下一页时拉取的效果的清除
function hideLoadUp() {
    $("body").removeClass("loadUp");
    $("section.loadUp").remove();
}


//显示加载器 隐藏加载器
function showLoaderMic() {
    $("body").append("<div class='s_showmic'></div>")
}
function showLoaderPic(progress) {
    if (subei.isApp) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: getInfo('上传中...'),
            text: '' + progress + '%',
            modal: false
        });
    }
    else {

    }
}
function showLoaderSave() {
    if (subei.isApp) {
        api.showProgress({ title: '保存中...', modal: true });
    }
    else {

    }
}
function showLoader(msg) {
    if (subei.isApp) {
        api.showProgress({ title: (msg?msg:'加载中...'), modal: true, text: '' });
    }
    else {

    }
}
function hideLoaderMic() {
    $("body").find(".s_showmic").remove();
}
function hideLoader() {
    if (subei.isApp) {
        setTimeout(function () {
            api.hideProgress();
        }, 300)
    } else {

    }
}

//弹出数据
function alertShow(showInfo, callback) {
    if (subei.isApp) {
        api.alert({
            title: '温馨提示',
            msg: showInfo,
            buttons: ['取消', '确定']
        }, function (ret, err) {
            alert(ret.buttonIndex);
            if (ret.buttonIndex == 1) {
                if (typeof (callback) == "function") {
                    callback();
                }
                //api.alert({ msg: '点击了确定' });
            }
        });
    }
    else {

    }
}
function toastShow(showInfo, length) {
    if (subei.isApp) {
        api.toast({ msg: showInfo, duration: (length || 2000), location: 'bottom' });
    }else{
        console.log(showInfo);
    }
}


//推送管理
function push() {

    try {

        var ajpush = api.require('ajpush');

        //应用在前台状态会监听
        ajpush.setListener(
            function (ret) {

                var id = ret.id;
                var title = ret.title;
                var content = ret.content;
                var extra = ret.extra;

                alert("id:" + id + "\ntitle:" + title + "\ncontent:" + content + "\nextra:" + extra);

            }
        );

        if (api.systemType == "ios") {
            api.addEventListener({ name: 'noticeclicked' }, function (ret, err) {

                if (ret && ret.value) {

                    var ajpush = ret.value;
                    var content = ajpush.content;
                    var extra = ajpush.extra;
                    //push_return(extra, content);
                    //alertShow('通知被点击，收到数据：\n' + JSON.stringify(ret));//监听通知被点击后收到的数据
                    openWin("myMessage_head", "4my/my_message_win.html", {});
                }

            })
        }
        else {
            api.addEventListener({ name: 'appintent' }, function (ret, err) {
                if (ret && ret.appParam.ajpush) {

                    var ajpush = ret.appParam.ajpush;
                    var id = ajpush.id;
                    var title = ajpush.title;
                    var content = ajpush.content;
                    var extra = ajpush.extra;
                    //push_return(extra, content);
                    //alertShow("id:" + id + "\ntitle:" + title + "\ncontent:" + content + "\nextra:" + extra);
                    openWin("my_message", "4my/my_message_win.html", {});

                }
            });
        }
    }

    catch (e) {
    }

}
function push_bind(callback) {

    try {
        var SendID = "";
        var CustomerPaymentID = "";
        var CustomerTypeID = "";
        if (get_memberType() == "1") {
            SendID = "sale1";
            if (get_customerPayment() != "" || get_customerPayment() != undefined) {
                CustomerPaymentID = "CustomerPayment" + get_customerPayment();
            }
            if (get_customerType() != "" || get_customerType() != undefined) {
                CustomerTypeID = "CustomerType" + get_customerType();
            }
        }
        if (get_memberType() == "2") {
            SendID = "sale2";
        }
        if (get_memberType() == "3") {
            SendID = "sale3";
        }
        var ajpush = api.require('ajpush');

        if (api.systemType == "ios") {

            ajpush.getRegistrationId(function (ret) {
                var registrationId = ret.id;
                window.localStorage.setItem("bindSendId", registrationId)
                if (is_define(callback)) {
                    callback()
                }
            });
            var param = {
                alias: api.deviceId,
                tags: ['变便电商', SendID, CustomerPaymentID, CustomerTypeID, "id" + get_BindSendId()]
            };
            ajpush.bindAliasAndTags(param, function (ret) {
                var statusCode = ret.statusCode;
            });
        }
        else {

            ajpush.init(function (ret) {
                //alert(JSON.stringify(ret))
                if (ret && ret.status) {

                    ajpush.getRegistrationId(function (ret, err) {

                        var registrationId = ret.id;
                        //alert(registrationId)
                        sb_Writelog(registrationId);
                        window.localStorage.setItem("bindSendId", registrationId);
                        if (is_define(callback)) {
                            callback()
                        }
                    });

                    //sb_Writelog(get_userTypeId() + "|" + get_memberServiceType() + "|" + get_memberCompanyId());
                    var param = {
                        alias: api.deviceId,
                        tags: ['变便电商', SendID, CustomerPaymentID, CustomerTypeID, "id" + get_BindSendId()]
                    };
                    ajpush.bindAliasAndTags(param, function (ret) {
                        var statusCode = ret.statusCode;
                        //alert(statusCode)
                    });
                }
            });
        }
    }
    catch (e) {
    }
}
function push_bind_Id(callback) {

    try {

        var ajpush = api.require('ajpush');
        if (api.systemType == "ios") {

            ajpush.getRegistrationId(function (ret) {
                var registrationId = ret.id;
                callback(registrationId);
            });
        }
        else {

            ajpush.init(function (ret) {
                if (ret && ret.status == 1) {
                    ajpush.getRegistrationId(function (ret) {
                        var registrationId = ret.id;
                        callback(registrationId);
                    });
                }
            });
        }
    }
    catch (e) {

    }
}
function push_bind_tag(tag) {

    try {

        var ajpush = api.require('ajpush');
        if (api.systemType == "ios") {

            var param = { alias: api.deviceId, tags: ['appsubei', tag] };
            ajpush.bindAliasAndTags(param, function (ret) {
                var statusCode = ret.statusCode;
            });
        }
        else {

            ajpush.init(function (ret) {
                if (ret && ret.status == "1") {

                    var param = { alias: api.deviceId, tags: ['appsubei', tag] };
                    ajpush.bindAliasAndTags(param, function (ret) {
                        var statusCode = ret.statusCode;
                    });
                }
            });
        }
    }
    catch (e) {
    }
}

//手机返回键退出程序
function sb_appExit() {

    if(subei.isApp){
        api.addEventListener({
            name: 'keyback'
        }, function (ret, err) {

            api.toast({
                msg: '再按一次返回键退出' + api.appName,
                duration: 2000,
                location: 'bottom'
            });

            api.addEventListener({
                name: 'keyback'
            }, function (ret, err) {
                api.toLauncher();
            });

            setTimeout(function () {
                sb_appExit();
            }, 3000)
        });
    }

}
function sb_checkNetwork() {
    var connectionType = api.connectionType;
    if (connectionType != "none" && connectionType != "unknown") {
        return true;
    }
    else {
        alertShow(getInfo("请检查网络设置。请确认你的网络已连接。"));
        return false;
    }
}
function sb_checkLang() {

    var currentLang = navigator.language;   //判断除IE外其他浏览器使用语言
    if (!currentLang) {//判断IE浏览器使用语言
        currentLang = navigator.browserLanguage;
    }

    if (currentLang == "zh-CN") {
        currentLang = "cn"
    }
    else {
        currentLang = "en"
    }

    return currentLang;
}

//手机返回键退出程序
function exitApp() {

    api.addEventListener({
        name: 'keyback'
    }, function (ret, err) {
        api.toast({
            msg: '再按一次返回键退出' + api.appName,
            duration: 2000,
            location: 'bottom'
        });

        api.addEventListener({
            name: 'keyback'
        }, function (ret, err) {
            api.closeWidget({
                id: 'A6933042552187',     //这里改成自己的应用IDA6913120589829
                retData: { name: 'closeWidget' },
                silent: true
            });
        });

        setTimeout(function () {
            exitApp();
        }, 3000)
    });
}

longpress_obj = null;
longpress_timeOutEvent = 0;

//开始按
function sb_touchstart(obj) {
    longpress_obj = $(obj);
    longpress_timeOutEvent = setTimeout(function () {
        //alert("清除了");//因为页面弹动会导致元素一直处于按住的状态，所以超过700毫秒自动清空变量，避免点击其他元素触发事件
        longpress_html = "";
    }, 700);
    return false;
};
//手释放，取消长按事件
function sb_touchend() {
    clearTimeout(longpress_timeOutEvent);
    longpress_obj = null;
};
//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
function sb_touchmove() {
    clearTimeout(longpress_timeOutEvent);
    longpress_obj = null;
};
//添加长按动作
function sb_longPress(obj) {

    $(obj).attr("ontouchstart", "sb_touchstart(this)");
    $(obj).attr("ontouchmove", "sb_touchend()");
    $(obj).attr("ontouchend", "sb_touchmove()");
}
//执行另一个页面的js
function execJs(win, frame, script) {
    api.execScript({
        name: win || '',
        frameName: frame || '',
        script: script
    });
}

//打开登录页
function openWinLogin(name) {
    openWin("login", "../member/login_header.html", { dataName: name });
}
//打开购车页
function openWinCart() {
    openWin("_cart", '../member/_cart_header.html', {});
}
//打开审核页
function openWinAudit(id, title, openWin, openFrame) {
    api.openFrame({
        name: 'chooseAudit',
        url: '../../common/chooseAudit_body.html', rect: { x: 0, y: 0, w: 'auto', h: 'auto' },
        pageParam: { dataId: id, dataTitle: title, openWin: openWin, openFrame: openFrame },
        bounces: false, delay: 200
    });
}
//打开分享页
function openWinShare(sTitle, sDesc, sImgsrc, sUrl) {

    api.openFrame({
        name: '_share',
        url: '../member/_share.html', rect: { x: 0, y: 0, w: 'auto', h: 'auto' },
        pageParam: { dataTitle: sTitle, dataDesc: sDesc, dataImgurl: sImgsrc, dataUrl: sUrl },
        bounces: false, delay: 200
    });
}
//打开商品字段
function openWinProductField(id, title, price, field, photo, openWin, openFrame) {
    api.openFrame({
        name: 'ProductField',
        url: '../../common/product_field.html', rect: { x: 0, y: 0, w: 'auto', h: 'auto' },
        pageParam: {
            dataId: id,
            dataTitle: title,
            dataPrice: price,
            dataField: field,
            dataPhoto: photo,
            openWin: openWin,
            openFrame: openFrame
        },
        bounces: false, delay: 200
    });
}

function refreshWindow(type,name){
    if(subei.isApp){
        var winHeight = window.innerHeight;
        var head_h = 0;
        var foot_h = 0;
        try {
            var header = $api.byId('header');
            if(header){
                $api.fixStatusBar(header);
                head_h = $api.offset(header).h;
            }
        }
        catch (e) {
        }

        try {
            var footer = $api.byId("footer");
            if(footer){
                foot_h = $api.offset(footer).h;
            }
        } catch (e) {
        }

        if(type=='frame'){
            api.setFrameAttr({
                name: name,
                rect: {
                    x: 0,
                    y: head_h,
                    w: 'auto',
                    h: winHeight - head_h - foot_h
                }
            });
        }else if(type=='frameGroup'){
            api.setFrameGroupAttr({
                name: name,
                rect: {
                    x: 0,
                    y: head_h,
                    w: 'auto',
                    h: winHeight - head_h - foot_h
                },
            });
        }

    }
}

function watchWindowSize(type,name){

    var width = window.innerHeight || document.body.clientHeight;
    window.onresize = function(){
        if(subei.isApp){

            var winHeight = window.innerHeight;
            var head_h = 0;
            var foot_h = 0;
            try {
                var header = $api.byId('header');
                if(header){
                    $api.fixStatusBar(header);
                    head_h = $api.offset(header).h;
                }
            }
            catch (e) {
            }

            try {
                var footer = $api.byId("footer");
                if(footer){
                    foot_h = $api.offset(footer).h;
                }
            } catch (e) {
            }

            if(type=='frame'){
                api.setFrameAttr({
                    name: name,
                    rect: {
                        x: 0,
                        y: head_h,
                        w: 'auto',
                        h: winHeight - head_h - foot_h
                    }
                });
            }else if(type=='frameGroup'){
                api.setFrameGroupAttr({
                    name: name,
                    rect: {
                        x: 0,
                        y: head_h,
                        w: 'auto',
                        h: winHeight - head_h - foot_h
                    },
                });
            }

        }
    }

}

//打开页面
function openWin(name, url, param) {
    console.log('当前跳转的路径：【'+ url +'】')
    if (!is_define(url)) {
        name = '' + name + '_win';
        url = '' + name + '.html';
    }

    if (!is_define(param)) {
        param = {};
    }

    var delay = 0;

    if (api.systemType != 'ios') {
        delay = 300;
    }
    var header = $api.byId('header');
    $api.fixStatusBar(header);
    api.openWin({
        name: name,
        url: url,
        pageParam: param,
        bounces: false,
        delay: delay,
        slidBackEnabled: false,
        vScrollBarEnabled: false
    });
}

function openFrame(name, url, param) {

    watchWindowSize('frame',name);

    if(!subei.isApp){
        console.log('请在移动端执行');
        return;
    }

    if (!is_define(url)) {
        name = '' + name + '_frm';
        url = '' + name + '.html';
    }

    if (!is_define(param)) {
        param = {};
    }

    var y = 0;
    var head_h = 0;
    //var body_h = $api.offset($api.dom('body')).h;
    var winHeight = api.winHeight;
    var foot_h = 0;

    try {
        var header = $api.byId('header');
        if(header){
            $api.fixStatusBar(header);
            head_h = $api.offset(header).h;
        }
    }
    catch (e) {
    }

    try {
        var footer = $api.byId("footer");
        if(footer){
            foot_h = $api.offset(footer).h;
        }
    } catch (e) {
    }

    api.openFrame({
        name: name,
        url: url,
        pageParam: param,
        bounces: param.bounces || false,
        vScrollBarEnabled: false,
        hScrollBarEnabled: false,
        rect: {
            x: 0,
            y: head_h,
            w: 'auto',
            h: winHeight - head_h - foot_h
        }
    });

}
function openFrame1(name, url, y, h, param) {
    api.openFrame({
        name: name,
        url: url,
        reload: true,
        rect: { x: 0, y: y, w: 'auto', h: h },
        pageParam: param,
        bounces: false,
        delay: 200
    });
}

//关闭页面
function goback() {
    closeWin("");
}
function closeWin(name) {
    if(subei.isApp){
        if (name == "")
            api.closeWin();
        else
            api.closeWin({ name: name });
    }else{
        console.log('关闭当前页面！');
    }
}
function closeWinFast(name) {
    api.closeWin({ name: name, duration: 1 });
}
function closeWinTo(name) {
    api.closeToWin({ name: name });
}
function closeFrame(name) {
    api.closeFrame({ name: name });
}


//打开日期选择器
function openDate(callback) {

    api.openPicker({
        type: 'date',
        title: '选择日期'
    }, function (ret, err) {
        if (ret) {

            var year = ret.year;
            var month = ret.month;
            var day = ret.day;

            if (is_define(callback)) {
                console.log(year + "-" + month + "-" + day);
                callback(year + "-" + month + "-" + day)
            }
        }
    });

}
//打开时间选择器
function openTime(obj) {

    api.openPicker({
        type: 'time',
        //date: '2014-05-01 12:30',//当前日期；
        title: '选择时间'
    }, function (ret, err) {
        if (ret) {
            var year = ret.year;
            var month = ret.month;
            var day = ret.day;
            var hour = ret.hour;
            var minute = ret.minute;

            obj.val(year + "年" + month + "月" + day + "日" + hour + ":" + minute);

        } else {
        }
    });

}
//打开日期时间选择器---Android不支持
function openDateTime(obj) {

    api.openPicker({
        type: 'date_time',
        //date: '2014-05-01 12:30',//当前日期；
        title: getInfo('选择时间')
    }, function (ret, err) {
        if (ret) {
            var year = ret.year;
            var month = ret.month;
            var day = ret.day;
            var hour = ret.hour;
            var minute = ret.minute;
            obj.val(year + "年" + month + "月" + day + "日" + hour + ":" + minute);
        } else {
            // alert(JSON.stringify(err));
        }
    });

}
//选择省市区
function openArea(param, callback) {
    var UIActionSelector = api.require('UIActionSelector');
    UIActionSelector.open({
        datas: param,
        layout: {
            row: 5,
            col: 3,
            height: 30,
            size: 12,
            sizeActive: 14,
            rowSpacing: 5,
            colSpacing: 10,
            maskBg: 'rgba(0,0,0,0.2)',
            bg: '#fff',
            color: '#888',
            colorActive: '#33CC99',
            colorSelected: '#33CC99'
        },
        animation: true,
        cancel: {
            text: '取消',
            size: 12,
            w: 90,
            h: 35,
            bg: '#33CC99',
            bgActive: '#22aa88',
            color: '#fff',
            colorActive: '#fff'
        },
        ok: {
            text: '确定',
            size: 12,
            w: 90,
            h: 35,
            bg: '#33CC99',
            bgActive: '#22aa88',
            color: '#fff',
            colorActive: '#fff'
        },
        title: {
            text: '请选择',
            size: 12,
            h: 44,
            bg: '#eee',
            color: '#888'
        },
        fixedOn: api.frameName
    }, function (ret, err) {
        if (ret) {
            callback(ret);
        } else {
            //alert(JSON.stringify(err));
        }
    });

}
//选择地区
function openCityList(obj) {
    var UICityList = api.require('UICityList');
    UICityList.open({
        rect: {
            x: 0,
            y: 0,
            w: api.frameWidth,
            h: api.frameHeight
        },
        resource: 'widget://script/sdk/cityList.json',
        styles: {
            searchBar: {
                bgColor: '#f0f2f5',
                cancelColor: '#E3E3E3'
            },
            location: {
                color: '#696969',
                size: 12
            },
            sectionTitle: {
                bgColor: '#eee',
                color: '#333',
                size: 12
            },
            item: {
                bgColor: '#fff',
                activeBgColor: '#0099f9',
                color: '#666',
                size: 14,
                height: 40
            },
            indicator: {
                bgColor: '#fff',
                color: '#696969'
            }
        },
        currentCity: '北京',
        locationWay: 'GPS',
        hotTitle: ' ',
        fixedOn: api.frameName,
        placeholder: getInfo('输入城市名或首字母查询')
    }, function (ret, err) {
        if (ret) {
            //alert(JSON.stringify(ret));
            //alert(ret.eventType);
            if (ret.eventType == "selected") {
                obj.val(ret.cityInfo.city);
                UICityList.close();
            }
        } else {
            alert(JSON.stringify(err));
        }
    });
}
//各种选择(options 选项值集合 callback 回调事件)
function openSelect(title, options, callback) {

    api.actionSheet(
        {
            title: title,
            cancelTitle: '取消',
            destructiveTitle: '',
            buttons: options
        }, function (ret, err) {

            callback(options[ret.buttonIndex - 1], ret.buttonIndex)

        });
}


//用于分页的数据初始化加载
function GetDataInit(callback) {

    PageSize = 10;
    PageIndex = 1;
    RowCount = 0; //本行用于分页

    callback();

    //下拉刷新；
    api.setRefreshHeaderInfo({
        visible: true,
        bgColor: '#f5f6f8',
        textColor: '#4d4d4d',
        textDown: '下拉刷新...',
        textUp: '松开刷新...',
        showTime: false,
        textTime: false
    }, function (ret, err) {

        $("#divData ul").html(""); //
        PageIndex = 1;
        callback();
        api.refreshHeaderLoadDone();

    });

    //上拉刷新；
    api.addEventListener({
        name: 'scrolltobottom',
        extra:{
            threshold: -1            //设置距离底部多少距离时触发，默认值为0，数字类型
        }
    }, function (ret, err) {

        if (parseInt(RowCount - PageIndex * PageSize) < 0) {
            toastShow("亲，数据加载完了！", 2000);
            return;
        }

        PageIndex++;
        callback();

    });
}

//写日志到服务器上
function sb_Writelog(info) {
    var param = { op: "WriteLog", memberid: get_memberId(), path: "_app_", info: escape(info) }
    ajaxPost("/App_Ashx/ajax_common.ashx", param, function (b, data) {
        if (b) {
        }
    })
}
//滚动到页面底部
function sb_scrollToBottom(time) {
    $('body').animate({ scrollTop: $(document).height() }, time);
}

var jk_ajax = function (setObj) {
    //默认参数
    var defaults = {
        type: "get",
        url: {},
        dataType: "json",
        data: {},
        async: true,
        cache: true,
        success: function (result) {
        }
    };
    for (var set in setObj) {
        defaults[set] = setObj[set];
    }
    ;
    defaults.url = base_url_api + defaults.url;
    console.log(JSON.stringify(defaults.data));
    $.ajax(defaults);
    defaults.error = function (XMLHttpRequest, textStatus, errorThrown) {
        toastShow('接口错误 :' + JSON.stringify(XMLHttpRequest));
        console.log('接口错误 :' + JSON.stringify(XMLHttpRequest));
    };

}

//ajax调用数据
function ajaxGet(url, param, callback) {
    $.ajax({
        type: "get",
        url: base_url_api + url,
        dataType: "json",
        data: param,
        success: function (data) {
            if (is_define(callback)) {
                callback(true, data);
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            alert(JSON.stringify(XMLHttpRequest))

            var connectionType = api.connectionType;
            if (connectionType == "none") {
                toastShow(getInfo("亲，你不打算开网络了吗？"));
                hideLoader();
            }
            else {
                toastShow("亲，加载失败了！ " + url);
                hideLoader();
            }

            //toastShow("加载失败" + errorThrown, 2000);

            //if (is_define(callback)) {
            //    callback(false, { status: 'n', info: "加载失败" });
            //}
        }
    });
}
function ajaxPost(url, param, callback) {

    console.log(JSON.stringify(param));

    $.ajax({
        type: "post",
        url: base_url_api + url,
        dataType: "json",
        data: param,
        success: function (data) {

            if (is_define(callback)) {
                callback(true, data);
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            console.log(JSON.stringify(XMLHttpRequest))

            var connectionType = api.connectionType;
            if (connectionType == "none") {
                toastShow(getInfo("亲，你不打算开网络了吗？"));
                hideLoader();
            }
            else {
                toastShow("亲，加载失败了！ " + url);
                hideLoader();
            }

            //toastShow("加载失败" + errorThrown, 2000);

            //if (is_define(callback)) {
            //    callback(false, { status: 'n', info: "加载失败" });
            //}
        }
    });

}
function ajaxRequest(url, method, bodyParam, callBack) {
    var common_url = 'https://d.apicloud.com/mcm/api';
    var appId = 'A6963429484030';
    var key = '7F836F04-CAAC-52C8-2332-CF337134FA6F';
    var now = Date.now();
    var appKey = SHA1(appId + "UZ" + key + "UZ" + now) + "." + now;
    api.ajax({
        url: common_url + url,
        method: method,
        cache: false,
        timeout: 20,
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "X-APICloud-AppId": appId,
            "X-APICloud-AppKey": appKey
        },
        data: {
            body: bodyParam
        }
    }, function (ret, err) {
        callBack(ret, err);
    });
}

//银联支付
function Pay_AliPay(orderno, ordersubject, orderbody, orderfee, callback) {

    var subject = ordersubject;
    var body = orderbody;
    var amount = orderfee;
    var tradeNO = orderno;
    var notifyURL = base_url + '/App_Pay/Alipay/PayReturn.aspx';

    var obj = api.require('aliPay');
    var priKey;
    if (api.systemType == 'ios') {
        priKey = 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAK7g746IRItwOEHE06RRd4gNbQbkGIFBPUZsVwv4kTPfWismQgjIR4wDvnNgPZCgV+xom6xv/a3HQJYwq90rfAWuIuQI/lvfpo3ti3/oXqFGzWXxXtsx5APhgWHMburZiwMv1k062bGRFt1XcWbGu4qc8dvDVUma1hi0VMz4C7o5AgMBAAECgYBZr/zMIbDdvmjruhE9BZcDDLeswBCdQaM2WdvuxMVbUCJDXPSi4mxnL4heTa5lXQaatS+ZqTn2BOln3YBXBrUsrq6Xp/d54AO2w1+SSC44Sdz/yBm9h39t4AyrqhOpWsDwThjEcdVVisdzFiP1MoAU9/UDKZ5MFhpfRawIopXNzQJBAOeXvAbYI79vBswnvn7NcBfoft2N2pbxFdbhTfREvdh4dFiKr6cvYFmSJcMZCV4Pf2TBA7n5AMUGqtV1wOeHPzsCQQDBTxT6XTop0R/+dxi5CsWHuUzytAoX+4yH3iWhh1p6vqVc5ZR+SY2+qLTTTaNg8Gn/5aEnjIuVaKf6GR76tT0bAkBNhTPSEq08mfxrf+464adgyVkV7jK6Da7iw33lgtENUZyYOqv7SVd2A/6R5KKHEqbw4c7OhHPmf4nVc9oDZfkbAkAdQFc/T24mt8NsoR73mT6svAh9zWqdmG36fU4adD3nxwOE3CStO3oceLDsLJplZ9vSYjARqP3SPQT2HmkGrPgzAkA1/jYsDFKVSrIZdlsf2uyuYZcviJyOtk+0blruxSqlF5HLIgl4OEiIv7dbn/P6nxVFvIlXIoQ1K/CHlvT51L28'
    } else {
        priKey = 'MIICWwIBAAKBgQCu4O+OiESLcDhBxNOkUXeIDW0G5BiBQT1GbFcL+JEz31orJkIIyEeMA75zYD2QoFfsaJusb/2tx0CWMKvdK3wFriLkCP5b36aN7Yt/6F6hRs1l8V7bMeQD4YFhzG7q2YsDL9ZNOtmxkRbdV3FmxruKnPHbw1VJmtYYtFTM+Au6OQIDAQABAoGAWa/8zCGw3b5o67oRPQWXAwy3rMAQnUGjNlnb7sTFW1AiQ1z0ouJsZy+IXk2uZV0GmrUvmak59gTpZ92AVwa1LK6ul6f3eeADtsNfkkguOEnc/8gZvYd/beAMq6oTqVrA8E4YxHHVVYrHcxYj9TKAFPf1AymeTBYaX0WsCKKVzc0CQQDnl7wG2CO/bwbMJ75+zXAX6H7djdqW8RXW4U30RL3YeHRYiq+nL2BZkiXDGQleD39kwQO5+QDFBqrVdcDnhz87AkEAwU8U+l06KdEf/ncYuQrFh7lM8rQKF/uMh94loYdaer6lXOWUfkmNvqi0002jYPBp/+WhJ4yLlWin+hke+rU9GwJATYUz0hKtPJn8a3/uOuGnYMlZFe4yug2u4sN95YLRDVGcmDqr+0lXdgP+keSihxKm8OHOzoRz5n+J1XPaA2X5GwJAHUBXP09uJrfDbKEe95k+rLwIfc1qnZht+n1OGnQ958cDhNwkrTt6HHiw7CyaZWfb0mIwEaj90j0E9h5pBqz4MwJANf42LAxSlUqyGXZbH9rsrmGXL4icjrZPtG5a7sUqpReRyyIJeDhIiL+3W5/z+p8VRbyJVyKENSvwh5b0+dS9vA=='
    }

    obj.config({
        partner: '2088521051920881',
        seller: '2088521051920881',
        rsaPriKey: priKey,
        rsaPubKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCu4O+OiESLcDhBxNOkUXeIDW0G5BiBQT1GbFcL+JEz31orJkIIyEeMA75zYD2QoFfsaJusb/2tx0CWMKvdK3wFriLkCP5b36aN7Yt/6F6hRs1l8V7bMeQD4YFhzG7q2YsDL9ZNOtmxkRbdV3FmxruKnPHbw1VJmtYYtFTM+Au6OQIDAQAB',
        notifyURL: 'http://app-bianbian.subei88.com/App_Pay/Alipay/PayReturn.aspx'
    }, function (ret, err) {
        if (ret.status == 1) {
            obj.pay({
                subject: subject,
                body: body,
                amount: amount,
                tradeNO: tradeNO
            }, function (ret, err) {
                if (ret.code == 9000) {
                    if (is_define(callback)) {
                        callback("");
                    }
                }
                else {
                    if (is_define(callback)) {
                        callback(getInfo("支付失败或取消"));
                    }
                }
            });
        }
        else {
            if (is_define(callback)) {
                callback(getInfo("配置失败！"));
            }
        }

    });
}
//微信支付
function Pay_Weixin(orderno, ordersubject, orderbody, orderfee, callback) {

    var wxPay = api.require('wxPay');
    wxPay.config({}, function (ret, err) {
        if (ret.status) {
            wxPay.pay({
                description: orderbody,
                totalFee: orderfee * 100,
                tradeNo: orderno,
                detail: orderbody,
                attach: orderbody,
                feeType: 'CNY'
            }, function (ret, err) {

                if (ret.status) {
                    if (is_define(callback)) {
                        callback("");
                    }
                } else {
                    if (is_define(callback)) {
                        callback(getInfo("支付操作失败或取消"));
                    }
                }
            });
        } else {
            if (is_define(callback)) {
                callback(getInfo("支付环境失败"));
            }
        }
    });
}
//银联支付
function Pay_unPay(orderId, callback) {

    var params = { op: "GetPayUrl_Bank", orderId: orderId };
    ajaxPost("/App_Ashx/ajax_pay.ashx", params, function (b, data) {

        if (b) {

            var unPay = api.require('unionPay');
            unPay.pay({
                tn: data.info,
                devMode: false
            }, function (ret, err) {

                if (ret.result == "success") {
                    if (is_define(callback)) {
                        callback("");
                    }
                } else if (ret.result == "fail") {
                    if (is_define(callback)) {
                        callback("支付失败");
                    }
                } else if (ret.result == "cancel") {
                    if (is_define(callback)) {
                        callback("用户取消支付");
                    }
                }

            });

        } else {
            toastShow("获取失败！", 3000);
        }


    })
}

function getPhotoUrl(data) {
    if (data) {
        var dd = data.split(',');
        if (dd[0].indexOf("http://") > -1) {
            return dd[0]
        }
        else {
            return base_url_photo + dd[0];
        }
    }

}

//添加上传单张图片；
function addPhoto(objPhoto, open) {

    //选择图片
    function choosePhoto(objPhoto, open) {

        api.actionSheet({
            title: '选择图片',
            cancelTitle: '取消',
            buttons: ['拍照上传', '相册图片']
        }, function (ret, err) {

            switch (ret.buttonIndex) {
                case 1:
                    api.getPicture({
                        sourceType: "camera",
                        encodingType: 'jpg',
                        mediaValue: 'pic',
                        destinationType: 'url',
                        allowEdit: false,
                        quality: 60,
                        targetWidth: 800,
                        targetHeight: 600,
                        saveToPhotoAlbum: true
                    }, function (ret, err) {
                        if (ret) {
                            api.setStatusBarStyle({ style: "light", color: "#a11b26" });
                            if (ret.data !== '') {
                                var url = ret.data;
                                showPhoto(objPhoto, url, open);
                            }
                        }
                    });
                    break;

                case 2:
                    api.getPicture({
                        sourceType: "library",
                        encodingType: 'jpg',
                        mediaValue: 'pic',
                        destinationType: 'url',
                        allowEdit: false,
                        quality: 60,
                        targetWidth: 800,
                        targetHeight: 600,
                        saveToPhotoAlbum: true
                    }, function (ret, err) {
                        if (ret) {
                            api.setStatusBarStyle({ style: "light", color: "#a11b26" });
                            if (ret.data !== '') {
                                var url = ret.data;
                                showPhoto(objPhoto, url, open);
                            }
                        }
                    });
                    break;
            }
        });

    }

    //显示并上传图片
    function showPhoto(objPhoto, url, open) {

        objPhoto.html("");
        //显示图片
        if (open == "userInfo") {
        }
        else {
            objPhoto.append("<span class='delete' style='display:none; width:14px; height:14px; position:absolute; top:0; right:0; background:rgba(255,0,0,1); font-size:12px; line-height:14px; text-align:center; color:#fff;'>x</span>");
        }
        objPhoto.append("<span class='loading'style='display:block; width:100%; height:100%; background: rgba(0, 0, 0, 0.60); font-size:12px;text-align: center; line-height: 72px !important;font-family: Arial,Microsoft YaHei; color:#fff;'>上传中...</i>");
        setBgImg(objPhoto, url);
        objPhoto.attr("dataUrl", url);

        //上传图片
        loadingIndex = 0;
        savePhoto(objPhoto, loadingIndex);
    }

    //上传图片
    function savePhoto(objPhoto, loadingIndex) {

        /* 上传图片到数据库一个含有图片文件的Class. */
        var classInfo = {
            className: "Photo",
            fields: [{ name: "photo", value: objPhoto.attr("dataUrl"), type: "file", filename: "未命名" }]
        }

        //method string 操作类型,不区分大小写,默认get.可选get(查询),post(新建),put(更新),delete(删除)
        ajaxToAPICloud(appId, appKey, "post", classInfo, function (ret, err) {

            //alert(JSON.stringify(ret));
            objPhoto.attr("data", ret.body.photo.url);
            objPhoto.find("span.loading").hide();
            objPhoto.find("span.delete").show();

        })

    }

    //删除图片；
    $(".delete").click(function () {
        objPhoto.attr("data", "");
        objPhoto.find("span.delete").hide();
        setBgImg(objPhoto, "../../image/chatBox/photographic_icon.jpg");
        return false;
    });

    choosePhoto(objPhoto, open);
}
//添加上传多张图片
function addPhotos(obj, callback) {

    //必须配合base.css的 .sb_photolist 样式一起使用

    //选择照片
    function choosePhoto(obj) {

        //判断图片个数
        if ($(obj).find(".pic").length == 3) {
            toastShow("亲，只能上传3张图片！");
            return;
        }

        d_photos_choose(3 - $(obj).find(".pic").length, function (urls) {
            showPhoto(urls);
        })
    }

    //显示并上传照片
    function showPhoto(urls) {

        //显示图片
        var strHtml = "";
        for (i = 0; i < urls.length; i++) {
            var flag = (urls[i].indexOf("http://") > -1);
            strHtml += "<li><div class=\"pic\" data=\"" + urls[i] + "\" data-src=\"" + urls[i] + "\" style=\"width:24px;background-image: url(" + urls[i] + "); background-position: center; background-size:100% 100%; background-repeat: no-repeat;\"><i class='delete'>x</i><i class='loading " + (flag ? "" : "uploading") + "' style='display:none'></i></div></li>";
        }

        $(obj).append(strHtml);

        $(obj).find("i.delete").hide();
        $(obj).find("i.loading").show();
        $(obj).find("i.loading").html("");

        //预览图片
        $(obj).find(".pic").click(function () {
            d_photo_preview($(this), function (previewPic, activeIndex) {
                openFrame1("photo_show_head", "widget://html/common/_photo_show_head.html", 0, 70, {
                    previewPic: previewPic,
                    activeIndex: activeIndex
                });
            })
        })

        //删除图片
        $(obj).find(".delete").click(function () {
            $(this).parents(".pic").parent().remove();
        });

        //上传图片(一张一张上传，减少内存占用)
        savePhoto($(obj));

        //等所有图片上传成功
        //setTimeout(checkPhoto(), 1000);
    }

    //上传图片
    function savePhoto(objPhoto) {

        if (objPhoto.find(".uploading").length > 0) {

            var p = objPhoto.find(".uploading").eq(0).parent();

            /* 上传图片到数据库一个含有图片文件的Class. */
            var classInfo = {
                className: "Photo",
                fields: [{ name: "photo", value: p.attr("data"), type: "file", filename: "未命名" }]
            }
            //method string 操作类型,不区分大小写,默认get.可选get(查询),post(新建),put(更新),delete(删除)
            ajaxToAPICloud(appId, appKey, "post", classInfo, function (ret, err) {

                p.attr("data", ret.body.photo.url);
                p.find("i.loading").removeClass("uploading");
                p.find("i.loading").hide();

                savePhoto(objPhoto)
            })
        }
    }

    //等所有图片上传成功
    function checkPhoto() {
        if ($(obj).find(".uploading").length > 0) {
            setTimeout(checkPhoto, 3000);
            if (is_define(callback)) {
                return callback(false);
            }
        }
        else {
            if (is_define(callback)) {
                return callback(true);
            }
        }
    }

    //开启上传图片；
    choosePhoto(obj);
}

//设置图片为背景
function set_photoBg(obj, src) {

    var img = new Image();
    img.src = src;
    img.onload = function () {

        var obj_w = obj.width();
        var obj_h = obj.height();

        nUrl = this.src;
        nWidth = this.width * 1;
        nHeight = this.height * 1;

        obj.css("background-position", "center");
        if (nWidth / nHeight > obj_w / obj_h) {
            obj.css("background-size", "auto 100%");
        }
        else {
            obj.css("background-size", "100% auto");
        }

        obj.css("background-image", "url(" + src + ")");
        obj.attr("data", obj.attr("src_l"));
    }
}
//给一个div 加载图片-头像，带缓存
function set_photo_HeadImg(obj, url_f, url) {

    //这个路径估计有问题
    if (url_f == "") url_f = "../../../image/noHeadImg.jpg";
    if (url == "" || url == "undefined" || url == undefined)
        url = "../../../image/noHeadImg.jpg";

    obj.css("background-image", "url(" + url_f + ")");
    obj.css("background-size", "100% auto");
    if (url != "") obj.attr("src_l", url);
}
//给一个div 加载图片(单个)，带缓存
function set_photo(obj, url_f, url) {

    //这个路径估计有问题
    if (url_f == "") url_f = "../../../image/login_pic.gif";
    if (url == "" || url == "undefined" || url == undefined)
        url = "../../../images/noPic.png";

    obj.css("background-image", "url(" + url_f + ")");
    obj.css("background-size", "100% auto");
    if (url != "") obj.attr("src_l", url);
}
//给一个div 加载图片(单个)，设置图片的宽高比例
function set_photo1(obj, url_f, url, wh) {

    //这个路径估计有问题
    if (url_f == "") url_f = "../image/login_pic.gif";
    if (url == "" || url == "undefined" || url == undefined) url = "../images/noPic.png";

    obj.css("height", obj.width() * wh);
    obj.css("background-image", "url(" + url_f + ")");
    obj.css("background-size", "100% auto");
    if (url != "") obj.attr("src_l", url);
}
//给一个div 加载图片(单个)，设置图片的宽高比例
function set_photo2(obj, url_f, url, w, wh) {

    //这个路径估计有问题
    if (url_f == "") url_f = "../image/login_pic.gif";
    if (url == "" || url == "undefined" || url == undefined) url = "../images/noPic.png";

    obj.css("height", w * wh);
    obj.css("background-image", "url(" + url_f + ")");
    obj.css("background-size", "100% auto");
    if (url != "") obj.attr("src_l", url);
}
//给一个div 加载图片(多个)，带缓存
function set_photos(obj, url_f, urls) {

    if (urls == "" || urls == undefined || typeof (urls) == "undefined") {
        obj.hide();
    }
    else {

        obj.show();

        //这个路径估计有问题
        if (url_f == "") url_f = "../image/login_pic.gif";

        var urls = urls.split(',');
        if (urls.length == 1) {

            obj.html("<div class='pic' data='" + urls[0] + "'></div>")
            set_photo(obj.find(".pic"), url_f, urls[0]);

            obj.find(".pic").click(function () {
                d_photo_preview_one($(this));
            })

        }
        else if (urls.length > 1) {

            var htmlPhoto = "";
            for (var i = 0; i < urls.length; i++) {
                if (urls[i] == "" || urls[i] == "undefined" || urls[i] == undefined) urls[i] = "../images/noPic.png";
                htmlPhoto += "<li><div class='pic' data='" + urls[i] + "' style='background-size:100% auto;background-image:url(" + url_f + ")' src_l=" + urls[i] + " ></li>";
            }
            htmlPhoto = "<ul>" + htmlPhoto + "</ul><div class=\"clear\"></div>";
            obj.html(htmlPhoto);
            obj.addClass("photolist");

            obj.find(".pic").click(function () {
                d_photo_preview($(this));
            })
        }
    }
}
//给一个div 加载视频
function set_video(obj, url, photo) {
    if (url != "") {

        obj.addClass("s_video");
        obj.show();

        obj.html("<i></i>")
        obj.attr("video", url);

        // set_photo(obj, "", photo);

        obj.click(function () {
            alert(11111111)
            s_play_video(obj);
        })

    } else {
        obj.hide();
    }
}
//给一个span 加载音频
function set_voice(obj, url, time) {
    if (url == "") {
        obj.hide();
    }
    else {

        obj.addClass("s_voice");
        obj.show();

        obj.attr("voice", url);
        obj.attr("time", time);
        obj.html("<em>" + time + "</em>s");

        obj.click(function () {
            s_play_audio(obj);
        })
    }
}
//给一个span 加地点标记
function set_address(obj, address) {
    if (address != "") {

        obj.html(address)
        obj.addClass("s_address");
        obj.show();

    } else {
        obj.hide();
    }
}
//给一个span 加性别和年龄
function set_sex_age(obj, sex, age) {

    obj.html(age == 0 ? "∞" : age);
    obj.addClass("s_sex_age");
    obj.addClass(sex ? "gender-m" : "gender-w");
    obj.css("display", "inline-block");

}
//obj 要有二个属性，voice为音频路径 time为音频时间
function s_play_audio(obj) {

    if (obj.attr("flag") == 1) {
        toastShow(getInfo("语音播放中"), 2000);
        return;
    }

    var url = obj.attr("voice");
    if (url == "") {
        toastShow(getInfo("没有语音 "), 2000);
        return;
    }

    d_download(url, "", function (b, ret) {

        if (b) {

            if (ret.state == 1) {

                var time = obj.attr("time");
                var path = ret.savePath;

                obj.addClass("play");
                obj.html("");

                api.startPlay({
                    path: path
                }, function (ret, err) {

                    obj.html(time + "s");
                    obj.attr("flag", "0");
                    obj.removeClass("play");

                });

                //var hujiaoAudio = api.require('audio');
                //hujiaoAudio.play({ path: path }, function (ret, err) {
                //    if (ret.complete) {
                //        obj.find("em").html(time)
                //        obj.attr("flag", "0");
                //        obj.removeClass("play");
                //    } else {
                //        obj.addClass("play");
                //        obj.find("em").html(ret.current);
                //    }
                //});

            }
        }
        else {
            obj.attr("flag", "0");
            toastShow("无法播放", 2000);
        }
    })
}
//obj 要有二个属性，video为视频路径
function s_play_video(obj) {

    if (obj.attr("flag") == 1) {
        toastShow("视频播放中", 2000);
        return;
    }

    obj.attr("flag", "1");

    var url = obj.attr("video");
    d_download(url, "", function (b, ret) {

        if (b) {
            if (ret.state == 1) {
                obj.attr("flag", "0");
                d_play_video(ret.savePath);
            }
        }
        else {
            obj.attr("flag", "0");
            toastShow(getInfo("无法播放"), 2000);
        }
    })
}

//下载语言
function downXml(callback) {

    showLoader();

    var url = "http://47.88.16.170/PageXml/PageXml.xml";
    api.download({
        url: url,
        savePath: pathLang,
        report: true, cache: false, allowResume: false
    }, function (ret, err) {

        if (ret) {

            //shlar value = ('文件大小：' + ret.fileSize + '；下载进度：' + ret.percent);
            //alert(JSON.stringify(ret));

            if (ret.state == 1) {

                hideLoader();
                toastShow("Download Successfully", 2000);

                if (is_define(callback)) {
                    callback();
                }

            } else if (ret.state == 2) {
                downXml(callback);
            }
        }

    });

}
//读取语言
function readXml(callback) {
    //异步返回结果：
    api.readFile({
        path: pathLang
    }, function (ret, err) {
        if (ret.status) {
            var data = ret.data;
            if (is_define(callback)) {
                callback(data);
            }
        } else {
            //alert(err.msg);
        }
    });
}

function getInfo(text) {
    return text;
}

//这是格式化成yyyy-MM-dd(必须传入string)
function GetDate(date) {
    if (date == undefined) return "";
    var now = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours().toString();
    if (hour.length == 1) hour = "0" + hour.toString();
    var minute = now.getMinutes().toString();
    if (minute.length == 1) minute = "0" + minute.toString();
    var second = now.getSeconds();
    return year + "年" + month + "月" + date + "日";
}
//这是得到一个日期是周几
function GetDateWeek(date) {
    if (date == undefined) return "";
    var date = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var weekDay = [getInfo("星期天"), getInfo("星期一"), getInfo("星期二"), getInfo("星期三"), getInfo("星期四"), getInfo("星期五"), getInfo("星期六")];
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = weekDay[date.getDay()];
    return week;
}
//这是格式化成yyyy-MM-dd hh:mm(必须传入string)
function GetDateTime(date) {
    if (date == undefined) return "";
    var now = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    //var year = now.getYear();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours().toString();
    if (hour < 10) hour = "0" + hour.toString();
    var minute = now.getMinutes().toString();
    if (minute < 10) minute = "0" + minute.toString();
    var second = now.getSeconds();
    return year + getInfo("年") + month + getInfo("月") + date + getInfo("日") + hour + ":" + minute;
}
//这是格式化成hh:mm(必须传入string)
function GetDateTime1(date) {
    if (date == undefined) return "";
    var date = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var hour = date.getHours();
    if (hour < 10) hour = "0" + hour.toString();
    var minute = date.getMinutes();
    if (minute < 10) minute = "0" + minute.toString();
    return hour + ":" + minute;
}
//这是个性化的格式
function GetDateDiff(date) {
    if (date == undefined) return "";
    date = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));

    var d_minutes, d_hours, d_days;
    var timeNow = parseInt(new Date().getTime() / 1000);
    var timeDate = parseInt(date.getTime() / 1000);

    var d = timeNow - date;
    d_days = parseInt(d / 86400);
    d_hours = parseInt(d / 3600);
    d_minutes = parseInt(d / 60);

    if (d_days > 0 && d_days < 4) {
        return d_days + getInfo("天前");
    } else if (d_days <= 0 && d_hours > 0) {
        return d_hours + getInfo("小时前");
    } else if (d_hours <= 0 && d_minutes > 0) {
        return d_minutes + getInfo("分钟前");
    } else {
        var s = date;
        if (s == "Invalid Date") {
            return ""
        }
        else {
            return (s.getMonth() + 1) + getInfo("月") + s.getDate() + getInfo("日");
        }
    }
}

//这是下一天
function GetDateNext(date) {
    if (date == undefined) return "";
    // 今天
    var today = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var oneday = -1000 * 60 * 60 * 24;
    var day = new Date(today - oneday);

    var year = day.getFullYear();
    var month = day.getMonth() + 1;
    if (month < 10) month = "0" + month.toString();
    var date = day.getDate();
    if (date < 10) date = "0" + date.toString();
    return year + "-" + month + "-" + date;
}
//这是上一天
function GetDatePrev(date) {
    if (date == undefined) return "";
    // 今天
    var today = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var oneday = 1000 * 60 * 60 * 24;
    var day = new Date(today - oneday);
    var year = day.getFullYear();
    var month = day.getMonth() + 1;
    if (month < 10) month = "0" + month.toString();
    var date = day.getDate();
    if (date < 10) date = "0" + date.toString();
    return year + "-" + month + "-" + date;
}
//这是上一月
function GetMonthPrev(date) {

    if (date == undefined) return "";
    date = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var day = new Date(date.setMonth(date.getMonth() - 1));
    var year = day.getFullYear();
    var month = day.getMonth() + 1;
    if (month < 10) month = "0" + month.toString();
    return year + "-" + month;
}
//这是下一月
function GetMonthNext(date) {

    if (date == undefined) return "";
    date = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var day = new Date(date.setMonth(date.getMonth() + 1));
    var year = day.getFullYear();
    var month = day.getMonth() + 1;
    if (month < 10) month = "0" + month.toString();
    return year + "-" + month;
}
//这是上一年
function GetYearPrev(date) {

    if (date == undefined) return "";
    date = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var day = new Date(date.setFullYear(date.getFullYear() - 1));
    var year = day.getFullYear();
    return year;
}
//这是下一年
function GetYearNext(date) {

    if (date == undefined) return "";
    date = new Date(date.replaceAll("T", " ").replaceAll("-", "/"));
    var day = new Date(date.setFullYear(date.getFullYear() + 1));
    var year = day.getFullYear();
    return year;
}

//这是下一天
function GetDateNextAll(date, type) {
    if (type == "day") {
        return GetDateNext(date);
    }
    else if (type == "month") {
        return GetMonthNext(date);
    }
    else if (type == "year") {
        return GetYearNext(date);
    }
}
//这是上一天
function GetDatePrevAll(date, type) {
    if (type == "day") {
        return GetDatePrev(date);
    }
    else if (type == "month") {
        return GetMonthPrev(date);
    }
    else if (type == "year") {
        return GetYearPrev(date);
    }
}


Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}


var Jk_ajax = function (setObj) {
    //一.设置默认参数
    var defaults = {
        type: "get",
        url: '',
        dataType: "json",
        data: "",
        async: true,
        cache: true,
        success: function (result) {
        }
    };
    for (var set in setObj) {
        defaults[set] = setObj[set];
    }
    ;
    defaults.url = 'http://app-lift.subei88.com:8080/api/' + defaults.url;
    defaults.error = function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(JSON.stringify(XMLHttpRequest));
    };
    $.ajax(defaults);
}


//加载中
var Jk_Toast = function () {
};
var isShow = false;
Jk_Toast.prototype = {
    create: function (params, callback) {
        var self = this;
        var toastHtml = '';
        switch (params.type) {
            case "success":
                var iconHtml = '<i class="aui-iconfont aui-icon-correct"></i>';
                break;
            case "fail":
                var iconHtml = '<i class="aui-iconfont aui-icon-close"></i>';
                break;
            case "custom":
                var iconHtml = params.html;
                break;
            case "loading":
                var iconHtml = '<div class="aui-toast-loading"></div>';
                break;
        }

        var titleHtml = params.title ? '<div class="aui-toast-content">' + params.title + '</div>' : '';
        toastHtml = '<div class="aui-toast">' + iconHtml + titleHtml + '</div>';
        if (document.querySelector(".aui-toast")) return;
        document.body.insertAdjacentHTML('beforeend', toastHtml);
        var duration = params.duration ? params.duration : "2000";
        self.show();
        if (params.type == 'loading') {
            if (callback) {
                callback({
                    status: "success"
                });
            }
            ;
        } else {
            setTimeout(function () {
                self.hide();
            }, duration)
        }
    },
    show: function () {
        var self = this;
        document.querySelector(".aui-toast").style.display = "block";
        document.querySelector(".aui-toast").style.marginTop = "-" + Math.round(document.querySelector(".aui-toast").offsetHeight / 2) + "px";
        if (document.querySelector(".aui-toast")) return;
    },
    hide: function () {
        var self = this;
        if (document.querySelector(".aui-toast")) {
            document.querySelector(".aui-toast").parentNode.removeChild(document.querySelector(".aui-toast"));
        }
    },
    remove: function () {
        if (document.querySelector(".aui-dialog")) document.querySelector(".aui-dialog").parentNode.removeChild(document.querySelector(".aui-dialog"));
        if (document.querySelector(".aui-mask")) {
            document.querySelector(".aui-mask").classList.remove("aui-mask-out");
        }
        return true;
    },
    success: function (params, callback) {
        var self = this;
        params.type = "success";
        return self.create(params, callback);
    },
    fail: function (params, callback) {
        var self = this;
        params.type = "fail";
        return self.create(params, callback);
    },
    custom: function (params, callback) {
        var self = this;
        params.type = "custom";
        return self.create(params, callback);
    },
    loading: function (params, callback) {
        var self = this;
        params.type = "loading";
        return self.create(params, callback);
    }
};
var jkDialogProto = function () {
};
var isShow = false;
jkDialogProto.prototype = {
    params: {
        title: '',
        msg: '',
        buttons: ['取消', '确定'],
        input: false
    },
    create: function (params, callback) {
        var self = this;
        var dialogHtml = '';
        var buttonsHtml = '';
        var headerHtml = params.title ? '<div class="aui-dialog-header">' + params.title + '</div>' : '<div class="aui-dialog-header">' + self.params.title + '</div>';
        if (params.input) {
            params.text = params.text ? params.text : '';
            var msgHtml = '<div class="aui-dialog-body"><input type="text" placeholder="' + params.text + ' " value='+params.defaultText+' ></div>';
        } else {
            var msgHtml = params.msg ? '<div class="aui-dialog-body">' + params.msg + '</div>' : '<div class="aui-dialog-body">' + self.params.msg + '</div>';
        }
        var buttons = params.buttons ? params.buttons : self.params.buttons;
        if (buttons && buttons.length > 0) {
            for (var i = 0; i < buttons.length; i++) {
                buttonsHtml += '<div class="aui-dialog-btn" tapmode button-index="' + i + '">' + buttons[i] + '</div>';
            }
        }
        var footerHtml = '<div class="aui-dialog-footer">' + buttonsHtml + '</div>';
        dialogHtml = '<div class="aui-dialog">' + headerHtml + msgHtml + footerHtml + '</div>';
        document.body.insertAdjacentHTML('beforeend', dialogHtml);
        // listen buttons click
        var dialogButtons = document.querySelectorAll(".aui-dialog-btn");
        if (dialogButtons && dialogButtons.length > 0) {
            for (var ii = 0; ii < dialogButtons.length; ii++) {
                dialogButtons[ii].onclick = function () {
                    if (callback) {
                        if (params.input) {
                            callback({
                                buttonIndex: parseInt(this.getAttribute("button-index")) + 1,
                                text: document.querySelector("input").value
                            });
                        } else {
                            callback({
                                buttonIndex: parseInt(this.getAttribute("button-index")) + 1
                            });
                        }
                    }
                    ;
                    self.close();
                    return;
                }
            }
        }
        self.open();
    },
    open: function () {
        if (!document.querySelector(".aui-dialog")) return;
        var self = this;
        document.querySelector(".aui-dialog").style.marginTop = "-" + Math.round(document.querySelector(".aui-dialog").offsetHeight / 2) + "px";
        if (!document.querySelector(".aui-mask")) {
            var maskHtml = '<div class="aui-mask"></div>';
            document.body.insertAdjacentHTML('beforeend', maskHtml);
        }
        // document.querySelector(".aui-dialog").style.display = "block";
        setTimeout(function () {
            document.querySelector(".aui-dialog").classList.add("aui-dialog-in");
            document.querySelector(".aui-mask").classList.add("aui-mask-in");
            document.querySelector(".aui-dialog").classList.add("aui-dialog-in");
        }, 10)
        document.querySelector(".aui-mask").addEventListener("touchmove", function (e) {
            e.preventDefault();
        })
        document.querySelector(".aui-dialog").addEventListener("touchmove", function (e) {
            e.preventDefault();
        })
        return;
    },
    close: function () {
        var self = this;
        document.querySelector(".aui-mask").classList.remove("aui-mask-in");
        document.querySelector(".aui-dialog").classList.remove("aui-dialog-in");
        document.querySelector(".aui-dialog").classList.add("aui-dialog-out");
        if (document.querySelector(".aui-dialog:not(.aui-dialog-out)")) {
            setTimeout(function () {
                if (document.querySelector(".aui-dialog")) document.querySelector(".aui-dialog").parentNode.removeChild(document.querySelector(".aui-dialog"));
                self.open();
                return true;
            }, 200)
        } else {
            document.querySelector(".aui-mask").classList.add("aui-mask-out");
            document.querySelector(".aui-dialog").addEventListener("webkitTransitionEnd", function () {
                self.remove();
            })
            document.querySelector(".aui-dialog").addEventListener("transitionend", function () {
                self.remove();
            })
        }
    },
    remove: function () {
        if (document.querySelector(".aui-dialog")) document.querySelector(".aui-dialog").parentNode.removeChild(document.querySelector(".aui-dialog"));
        if (document.querySelector(".aui-mask")) {
            document.querySelector(".aui-mask").classList.remove("aui-mask-out");
        }
        return true;
    },
    alert: function (params, callback) {
        var self = this;
        return self.create(params, callback);
    },
    prompt: function (params, callback) {
        var self = this;
        params.input = true;
        return self.create(params, callback);
    }
};

/** 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 **/
/** 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 **/
// 支付封装
var Pay = {
    /**
     * 支付宝支付 ( ios / android )
     * @param {object} data 参数对象集合
     * @param {string} data.orderNo 订单编号
     * @param {string} data.orderTit 订单标题
     * @param {string} data.orderDesc 订单描述
     * @param {number} data.orderPrice 订单金额（最小单位：分）
     * @param {function} data.callBack(e) 回调函数（ 成功或失败 ）
     * @param {object} e 回调函数集合
     * @param {boolean} e.state 支付状态[ true / false ]
     * @param {string} e.info 回调信息
     *
     * 备注：使用该封装前需配置参数，详细见以下备注！！！
     * */
    AliPay: function (data) {
        // 配置参数
        var config = {
            partner: '2088521310268505', // 商户 Id ( 后端提供 )
            seller: '2088521310268505', // 商户账户 Id ( 后端提供 )
            rsaPriKey: 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALOAicUPRZ0Hru8w43A7DIEZjVSrqTrRJoaYojr5hXgdsEobqeFCL31alKqz8KMtS9gxO2gkZtBsj1GsajYFiIrz3FUAeOSh6xxPOZCS82aqIxGmeBUUUcHtgvS2dyIva1Zt9S6vdBF4TNWFE2m9tvrqfENsUjoN6HdBdPIkD8+3AgMBAAECgYAsxreXLIQU88GzcOKLMG+iFJmosVl5joqpsJFnXK7qk51SHyx1QGlQP7QuEMzKJ5Zvy3giNlJfU3U8zmGAMEkq1ONS08/JVmLMndLxiRaWfnES76eUz01Y6ZxZC4YpaWsxzDleVrh2h57rRb63qiRhXLdNi5GrJw0DMQKgN/YCYQJBAOpI4Lhjjv59+xbehxya5MMUgstbZf2YQZwVf90V7P46QqVxKsLd09mHyoliCSM6IlhB89r406TU6vl/y006dYsCQQDEI8aZ2N8IBSq7NmdrEau6dzQ1NUsS7r1n9RaE1NJ7WF0ECNRhfMpNkZJ1PcnyThA9J8wb6n0i+3XDMzTUWwwFAkAzy8Lq4Q/nEcEmUDI8z73Np0Y3YVCOHVA8CsDHBybrGcRMQVW72UER8aSEdQkiIaMgMgyQl7xqz6vXVzqCK297AkBLQ18mEe4jabgn9oxgrXs0JiHGeRjBvxK3HXjyp6fM5O9saOb2Mah/c2i7zGX9sK7SiL7tx2EVV2Cs8q1G/1jxAkEAsQCC62m1yS0ije/gBwfOx7M9U3J8a1vpxPzH408TprtOz4xxGAjZU7D05v6FQUi/g5Z7LhFQaiVfuQXyPDpGDg==', // 商户私钥 ( 后端提供 )
            rsaPubKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzgInFD0WdB67vMONwOwyBGY1Uq6k60SaGmKI6+YV4HbBKG6nhQi99WpSqs/CjLUvYMTtoJGbQbI9RrGo2BYiK89xVAHjkoescTzmQkvNmqiMRpngVFFHB7YL0tnciL2tWbfUur3QReEzVhRNpvbb66nxDbFI6Deh3QXTyJA/PtwIDAQAB', // 支付宝公钥 ( 后端提供 )
            notifyURL: 'http://app-card1.subei88.com/App_Pay/Alipay/PayReturn.aspx' // 回调地址 ( 后端提供 )
        };

        // 调用AliPay支付
        var obj = api.require('aliPay');
        obj.config({
            partner: config.partner,
            seller: config.seller,
            rsaPriKey: config.rsaPriKey,
            rsaPubKey: config.rsaPubKey,
            notifyURL: config.notifyURL
        }, function (ret, err) {
            // 判断配置是否成功
            if (ret.status) {
                // 支付
                obj.pay({
                    subject: data.orderTit,
                    body: data.orderDesc,
                    amount: data.orderPrice,
                    tradeNO: data.orderNo
                }, function (ret, err) {

                    if (ret.code == 9000) {
                        data.callBack && data.callBack({ state: true, info: '支付成功！' });
                    }
                    else {
                        data.callBack && data.callBack({ state: false, info: '支付失败或取消！' });
                    }
                });
            }
            else {
                data.callBack && data.callBack({ state: false, info: '配置失败！' });
            }
        });
    },
    /**
     * 微信支付 ( ios / android )
     * @param {object} data 参数对象集合
     * @param {string} data.orderNo 订单编号
     * @param {string} data.orderTit 订单标题
     * @param {string} data.orderDesc 订单描述
     * @param {number} data.orderPrice 订单金额（单位：分，已做转换）
     * @param {function} data.callBack(e) 回调函数（ 成功或失败 ）
     * @param {object} e 回调函数集合
     * @param {boolean} e.state 支付状态[ true / false ]
     * @param {string} e.info 回调信息
     * @param {string} e.code 支付失败码( 具体见e.info )
     *
     * 备注1：使用该封装前需配置参数，详细见以下备注！！！
     * 备注2：同时需配置config.xml文件（配置参考网址：http://docs.apicloud.com/Client-API/Open-SDK/wxPay）
     * 备注3：iOS系统必须配置config.xml文件，然后提交服务器，并云编译才可生效，否则支付后无法返回APP且无法获取支付结果的回调
     * 备注4：Android系统需要在微信开放平台填写正确的签名以及包名才能正常运行
     * */
    wxPay: function (data) {
        console.log(JSON.stringify(data));
        var wxPay = api.require('wxPay');
        wxPay.config({
            apiKey: 'wx23d0788cd6f5a244', // 微信开放平台获取的 appid( 后端提供 )
            mchId: '1423433602', // 商家和微信合作的 id 号( 后端提供 )
            partnerKey: '2uBF99yRjwW4oieqU0JMkv2T1fDlkw8w', // 商户 API 密钥( 后端提供 )
            notifyUrl: base_url + '/App_Pay/Weixin/PayReturn.aspx' // 支付结果回调页面( 后端提供 )
        }, function (ret, err) {
            console.log('config: ' + JSON.stringify(ret));
            console.log('config: ' + JSON.stringify(err));
            // 配置成功
            if (ret.status) {
                // 调用支付
                wxPay.pay({
                    description: data.orderTit,
                    totalFee: Number(data.orderPrice) * 100,
                    tradeNo: data.orderNo,
                    detail: data.orderDesc,
                    feeType: 'CNY'
                }, function (ret, err) {
                    console.log('pay: ' + JSON.stringify(ret));
                    console.log('pay: ' + JSON.stringify(err));
                    if (ret.status) {
                        data.callBack && data.callBack({ state: true, info: '支付成功！' });
                    } else {
                        var txt;
                        switch (err.code) {
                            case -2:
                                txt = '用户取消支付！';
                                break;
                            case -1:
                                txt = '未知错误！';
                                break;
                            case 1:
                                txt = '支付失败！';
                                break;
                        }
                        data.callBack && data.callBack({ state: false, info: txt, code: err.code });
                    }
                });
            } else {
                var hint;
                switch (err.code) {
                    case -1:
                        hint = '未知错误';
                        break;
                    case 1:
                        hint = 'apiKey 值非法';
                        break;
                    case 2:
                        hint = 'mchId 值非法';
                        break;
                    case 3:
                        hint = 'partnerKey 值非法';
                        break;
                    case 4:
                        hint = 'notifyUrl 值非法';
                        break;
                }
                data.callBack && data.callBack({ state: false, info: '配置错误，请联系系统人员处理！', hint: hint, code: err.code });
            }
        });
    }
};

var subei = {

    isApp: false,

    //分页列表初始化
    getDataInit: function (t_data, callback) {

        if (this.isApp) {

            if (typeof (callback) == "function") {
                callback();
            }

            //下拉刷新；
            api.setRefreshHeaderInfo({
                visible: true,
                bgColor: '#f5f6f8',
                textColor: '#4d4d4d',
                textDown: '下拉刷新...',
                textUp: '松开刷新...',
                showTime: false,
                textTime: false
            }, function (ret, err) {

                t_data.searchValue.PageIndex = 1;
                t_data.searchList = [];

                if (typeof (callback)) {
                    callback();
                }
                api.refreshHeaderLoadDone();
            });

            //上拉刷新；
            api.addEventListener({
                name: 'scrolltobottom',
                extra:{
                    threshold: -1            //设置距离底部多少距离时触发，默认值为0，数字类型
                }
            }, function (ret, err) {

                if (t_data.searchValue) {
                    if (parseInt(t_data.searchValue.RowCount - t_data.searchValue.PageIndex * t_data.searchValue.PageSize) < 0) {
                        toastShow("亲，到底了！", 2000);
                        return;
                    };
                    t_data.searchValue.PageIndex++;
                }
                if (typeof (callback)) {
                    callback();
                }
            });
        } else {
            callback();
        }
    },
    //下拉刷新
    getDataRefresh: function (callback) {

        if (this.isApp) {

            if (typeof (callback) == "function") {
                callback();
            }

            //下拉刷新；
            api.setRefreshHeaderInfo({
                visible: true,
                bgColor: '#f5f6f8',
                textColor: '#4d4d4d',
                textDown: '下拉刷新...',
                textUp: '松开刷新...',
                showTime: false,
                textTime: false
            }, function (ret, err) {
                if (typeof (callback)) {
                    callback();
                }
                api.refreshHeaderLoadDone();
            });

        } else {
            callback();
        }
    },

    systemType: function () {

        //平台、设备和操作系统
        var system = { win: false, mac: false, xll: false };

        //检测平台
        var p = navigator.platform;

        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

        //跳转语句，如果是手机访问就自动跳转到caibaojian.com页面
        if (system.win || system.mac || system.xll) {
            this.isApp = false;
            return false;
        } else {
            this.isApp = true;
            return true;
        }

    },

    //得到页面参数
    getParam: function (index) {
        if (this.isApp) {
            return api.pageParam[index];
        } else {
            return null;
        }
    },

    say: function () {
        console.log(this.isApp);
    },

    parseTapmode: function () {
        if (this.isApp) {
            api.parseTapmode();
        }
    },

    ready: function (callback) {

        if (this.isApp) {
            apiready = function () {
                callback();
            }
        }
        else {
            callback();
        }
        ;

    },

    //预览图片
    imgPreview: function (i, arr) {

        if (!i) {
            i = 0;
        }
        ;
        if (!arr || JSON.stringify(arr) == '{}') {
            arr = []
        }
        ;

        var photoBrowser = api.require('photoBrowser');
        photoBrowser.open({
            activeIndex: i,
            images: arr,
            placeholderImg: '', //'widget://res/img/apicloud.png',
            bgColor: 'rgba(0,0,0,1)'
        }, function (ret, err) {
            if (ret.eventType == 'click') {
                photoBrowser.close();
            }
        });

    },

    //调取ajax
    ajax: function (setObj) {

        //一.设置默认参数
        var defaults = {
            type: "get",
            url: '',
            dataType: "json",
            data: {},
            async: true,
            cache: true,
            success: function (result) {
            }
        };
        for (var set in setObj) {
            defaults[set] = setObj[set];
        };

        defaults.url = 'http://app-lift.subei88.com:8080/api/' + defaults.url;
        console.log(defaults.url);
        defaults.error = function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(JSON.stringify(XMLHttpRequest));
        };
        $.ajax(defaults);

    },

    loaderSave: function () {
        if (this.isApp) {
            api.showProgress({ title: '保存中...', modal: true });
        }
    },
    loader: function () {
        if (this.isApp) {
            api.showProgress({
                animationType: 'fade',// fade
                title: '加载中...',
                modal: true,
                text: ''
            });
        }
    },
    hideLoader: function () {
        if (this.isApp) {
            setTimeout(function () {
                api.hideProgress();
            }, 300);
        }
    },
    loading: function (t, callback) {
        Jk_Toast.prototype.loading({
            title: (t == '' ? '加载中..' : t),
            duration: 1500
        }, function (ret) {
            if (typeof (callback) == "function") {
                callback();
            }
        });
    },
    success: function (t, callback) {
        Jk_Toast.prototype.hide();
        Jk_Toast.prototype.success({
            title: (t == '' ? '操作成功！' : t),
            duration: 2000
        });
        setTimeout(function () {
            if (callback) {
                callback();
            }
        }, 2000)
    },
    fail: function (t) {
        Jk_Toast.prototype.hide();
        Jk_Toast.prototype.fail({
            title: (t == '' ? '加载失败！' : t),
            duration: 2000
        });
    },
    dialog: function (m, callback) {
        jkDialogProto.prototype.alert({
            title: "温馨提示",
            msg: m,
            buttons: ['取消', '确定']
        }, function (ret) {
            if (callback != undefined && callback != '') {
                if (ret.buttonIndex == 1) {
                    callback(false);
                } else {
                    callback(true);
                }
            }
        })
    },
    alerts: function(msg,callback){

        api.confirm({
            title: '温馨提示',
            msg: msg || '提示',
            buttons: ['确定', '取消']
        }, function(ret, err) {
            var index = ret.buttonIndex;
            if(index==1){
                if(typeof(callback)=='function'){
                    callback();
                }
            }
        }.bind(this));

    },
    alert: function(msg,callback){

        api.alert({
            msg: '账户类型有误'
        }, function(ret, err) {
            if(typeof(callback)=='function'){
                callback();
            }
        });

    },
    dialogInput: function(msg,defaultText,cb){

        jkDialogProto.prototype.prompt({
            title:"修改站点名称",
            text:'请输入内容',
            buttons:['取消','保存'],
            defaultText:defaultText
        },function(ret){
            if(ret.buttonIndex == 2){
                if(typeof(cb)=='function'){
                    cb(ret.text);
                }
            }
        })

    },
    goWin: function (name, url, param) {

        if (this.isApp == false) {
            console.log('请在手机端运行...');
            return;
        }

        if (!is_define(url)) {
            name = '' + name + '_win';
            url = '' + name + '.html';
        }

        if (!is_define(param)) {
            param = {};
        }

        var delay = 0;
        // if (api.systemType != 'ios') {
        //     delay = 300;
        // }

        api.openWin({
            name: name,
            url: url,
            pageParam: param,
            bounces: false,
            delay: delay,
            slidBackEnabled: true,
            vScrollBarEnabled: false
        });
    },
    goFrm: function openFrame(name, url, param) {

        if (this.isApp == false) {
            console.log('请在手机端运行...');
            return;
        }

        if (!is_define(url)) {
            name = '' + name + '_frm';
            url = '' + name + '.html';
        }

        if (!is_define(param)) {
            param = {};
        }

        var y = 0;
        var head_h = 0;
        //var body_h = $api.offset($api.dom('body')).h;
        var winHeight = api.winHeight;
        var foot_h = 0;

        try {
            var header = $api.byId('aui-header');
            $api.fixStatusBar(header);
            head_h = $api.offset(header).h;
        }
        catch (e) {
        }

        try {
            foot_h = $api.offset($api.byId("aui-footer")).h;
        } catch (e) {
        }

        api.openFrame({
            name: name,
            url: url,
            pageParam: param,
            bounces: true,
            vScrollBarEnabled: false,
            hScrollBarEnabled: false,
            rect: {
                x: 0,
                y: head_h,
                w: 'auto',
                h: winHeight - head_h - foot_h
            }
        });
    },

    toast: function (text, l) {
        if (this.isApp) {
            api.toast({ msg: text, duration: (l ? l : 2000), location: 'bottom' });
        } else {
            console.log(text);
        }
    },
    close: function (name) {
        if (this.isApp) {
            if (name == "") {
                api.closeWin();
            }
            else {
                api.closeWin({ name: name });
            }
        } else {
            console.log('请在手机上执行...')
        }
    },
    send: function (name, extra) {
        if (this.isApp) {
            api.sendEvent({
                name: name,
                extra: extra
            });
        };
    },
    listener: function (name, callback) {
        if (this.isApp) {
            api.addEventListener({
                name: name
            }, function (ret, err) {
                if (ret) {
                    if (is_define(callback)) { callback(ret); }
                }
            });
        }
    },
    scanner: function (callback) {
        if (this.isApp) {
            var FNScanner = api.require('FNScanner');
            FNScanner.openScanner({
                autorotation: true
            }, function (ret, err) {

                if (typeof (callback) == "function") {
                    callback((ret ? ret : err));
                }
            });
        }
    },
    getUrlParam: function (strUrl, callback) {
        var name;
        var value;
        if (strUrl) {

            var index = strUrl.indexOf('?');

            var paramStr = strUrl.substring(index + 1);

            var paramArr = paramStr.split('&');

            var paramObj = {};

            for (var k in paramArr) {

                index = paramArr[k].indexOf("=");
                if (index > 0) {
                    name = paramArr[k].substring(0, index);
                    value = paramArr[k].substring(index + 1);
                    paramObj[name] = value;
                }
            };
            if (typeof (callback) == "function") {
                callback(paramObj);
            }

        }
    },

    chooseImg: function (imgArr, num, callback) {

        // imgArr   --> 存放图片数组的索引
        // num      --> 选择几张图片
        // callback --> 回调

        //需添加模块 UIMediaScanner相册 compactPicture图片压缩

        imgArr = (num == 1 ? [] : imgArr);

        if (this.isApp) {

            d_photos_choose(num-imgArr.length, function (res) {
                var photoList = [];
                for (var i = 0; i < res.length; i++) {
                    photoList.push({ photoUrl: res[i], photoUrl1: "", status: 1 });
                };

                var photoListLocal = imgArr.concat(photoList);
                callback(photoListLocal);

                for (var j = 0; j < photoList.length; j++) {

                    var classInfo = {
                        className: "Photo",
                        fields: [{ name: "photo", value: photoList[j].photoUrl, type: "file", filename: "未命名" }]
                    };

                    (function (j) {
                        ajaxToAPICloud(appId, appKey, "post", classInfo, function (ret, err) {

                            if (imgArr.length !== 0) {
                                photoListLocal[photoListLocal.length - res.length + j].photoUrl1 = ret.body.photo.url;
                                photoListLocal[photoListLocal.length - res.length + j].status = 2;
                            } else {
                                photoListLocal[j].photoUrl1 = ret.body.photo.url;
                                photoListLocal[j].status = 2;
                            }

                            callback(photoListLocal);
                        });
                    })(j);
                }
            });

        }
    },
    upFile: function (imgArr, num, type, callback) {

        // http://app-lift2.subei88.com/Common/UploadPhoto?type=CheckResultCmd       安全监督指令书
        // http://app-lift2.subei88.com/Common/UploadPhoto?type=CheckResult              现场图片

        // imgArr   --> 存放图片数组的索引
        // num      --> 选择几张图片
        // callback --> 回调

        //需添加模块 UIMediaScanner相册 compactPicture图片压缩

        imgArr = (num == 1 ? [] : imgArr);
        type = type || 'CheckResult';

        if (this.isApp) {

            d_photos_choose(num-imgArr.length, function (res) {

                var photoList = [];
                for (var i = 0; i < res.length; i++) {
                    photoList.push({ photoUrl: res[i], photoUrl1: "", status: 1, name:'' });
                };

                var photoListLocal = imgArr.concat(photoList);
                callback(photoListLocal);

                for (var j = 0; j < photoList.length; j++) {

                    (function (j) {

                        apiAjax({
                            type: 'postFile',
                            url: base_url_photo + 'Common/UploadPhoto?type=' + type,
                            param: photoList[j].photoUrl
                        }, function (ret) {

                            console.log('**********我是上传图片后返回的数据*********');
                            console.log(JSON.stringify(ret));


                            // http://app-lift2.subei88.com/Uploads/CheckResult/201709121146263411.JPE

                            var path = (ret.path.indexOf('http://')>-1?ret.path:(base_url_photo+ret.path));

                            if (imgArr.length !== 0) {
                                photoListLocal[photoListLocal.length - res.length + j].photoUrl1 = path
                                photoListLocal[photoListLocal.length - res.length + j].status = 2;
                                photoListLocal[photoListLocal.length - res.length + j].name = ret.name;
                            } else {
                                photoListLocal[j].photoUrl1 = path;
                                photoListLocal[j].status = 2;
                                photoListLocal[j].name = ret.name;
                            }

                            callback(photoListLocal);

                        });

                    })(j);
                }
            });
        }

    },
    chooseItem: function(msg,itemArr,callback){
        api.actionSheet({
            title: (msg?msg:''), cancelTitle: '取 消',
            buttons: (JSON.stringify(itemArr)=='[]'?['相关操作']:itemArr),
            style:{
                fontNormalColor:'#33cc99',
                fontPressColor:'#11aa77',
                titleFontColor:'#33cc99',
                itemNormalColor:'#ffffff'
            }
        }, function (ret, err) {
            if(typeof(callback)=='function'){
                callback(ret.buttonIndex - 1);
            }
        });

    },

    citySelect: function (callback) {
        var citySelector = api.require('citySelector');
        citySelector.open({
            y: api.frameHeight / 1.6,
            fixedOn: api.frameName
        }, function (ret, err) {
            if (ret) {
                alert(JSON.stringify(ret));
            } else {
                alert(JSON.stringify(err));
            }
        });
    },

    openTime: function (callback) {
        api.openPicker({
            type: 'time',
            //date: '2014-05-01 12:30',//当前日期；
            title: '选择时间'
        }, function (ret, err) {
            if (ret) {

                console.log(JSON.stringify(ret));

                var hour = ret.hour;
                var minute = ret.minute;

                if (typeof (callback) == "function") {
                    callback(hour + ":" + minute);
                }

            } else {
            }
        });
    },
    getLocation: function (callback) {
        var bMap = api.require('bMap');
        bMap.getLocation({
            accuracy: '100m',
            autoStop: true,
            filter: 1
        }, function (ret, err) {
            if (ret.status) {
                if (typeof (callback) == "function") {
                    var lonS = ret.lon + ',' + ret.lat;
                    callback(lonS);
                }
            } else {
            }
        });
    },
    openAjpush: function (callback) {
        if (this.isApp) {

            //极光推送
            var ajpush = api.require('ajpush');
            ajpush.init(function (ret) {

                if (ret && ret.status) {

                    console.log('极光推送初始化成功！');

                    // 极光推送 注册id
                    ajpush.getRegistrationId(function (ret) {

                        if (typeof (callback) == 'function') {
                            callback(ret.id);
                        }

                    });

                    //极光推送 侦听
                    ajpush.setListener(function (ret) {
                        console.log('极光推送接收的信息 ==' + JSON.stringify(ret));
                    });
                }
            });

        }
    },
    bindAjpushTab: function (tab) {
        if (this.isApp) {

            var ajpush = api.require('ajpush');
            var param = { alias: 'lift', tags: (tab ? [tab] : []) };
            ajpush.bindAliasAndTags(param, function (ret) {
                var statusCode = ret.statusCode;
                console.log('贴标签返回状态--' + statusCode);
            });

        };
    },
    openMsgWin: function (callback) {
        if (this.isApp) {

            //极光推送通知栏被点击后返回参数
            if (api.systemType == "ios") {

                api.addEventListener({ name: 'noticeclicked' }, function (ret, err) {

                    if (ret && ret.appParam.ajpush) {

                        var extra = ret.appParam.ajpush;
                        if (typeof (callback) == "function") {
                            callback(extra);
                        }

                    }

                });
            } else {

                api.addEventListener({ name: 'appintent' }, function (ret, err) {

                    if (ret && ret.appParam.ajpush) {
                        var extra = ret.appParam.ajpush;
                        if (typeof (callback) == "function") {
                            callback(extra);
                        }
                    }

                })
            }
        }
    },
    getLocation: function (callback) {

        if(this.isApp){
            var bMap = api.require('bMap');
            bMap.getLocation({
                accuracy: '100m',
                autoStop: true,
                filter: 1
            }, function(ret, err) {
                if (ret.status) {
                    if(typeof(callback)=='function'){
                        callback(ret.lon+','+ret.lat);
                    }
                } else {
                    console.log(JSON.stringify(err));
                }
            });
        }
    },
    download: function(url){

        api.download({
            url: url,
            savePath: '',
            report: true,
            cache: true,
            allowResume: true
        }, function(ret, err) {
            console.log('我是下载结果');
            console.log(JSON.stringify(ret));
            if (ret.state == 1) {
                //下载成功
            } else {

            }
        });

    },
    // JSON 深度复制
    deepCoyp: function(source){

        var typeStatus = Array.isArray(source);
        var result = (typeStatus?[]:{});

        for (var key in source) {
            if(typeStatus){
                result.push((typeof source[key]==='object'? subei.deepCoyp(source[key]): source[key]));
            }else{
                result[key] = typeof source[key]==='object'? subei.deepCoyp(source[key]): source[key];
            }
        }
        return result;

    },
    noRepeat: function(){

        Array.prototype.arrUniq = function() {
            var temp,arrVal,
                array = this,
                arrClone = array.concat(),//克隆数组
                typeArr = {//数组原型
                    'obj' : '[object Object]',
                    'fun' : '[object Function]',
                    'arr' : '[object Array]',
                    'num' : '[object Number]'
                    },
                ent = /(\u3000|\s|\t)*(\n)+(\u3000|\s|\t)*/gi;//空白字符正则

            //把数组中的object和function转换为字符串形式
            for(var i = arrClone.length; i--;){
                arrVal = arrClone[i];
                temp = Object.prototype.toString.call(arrVal);

                if(temp == typeArr['num'] && arrVal.toString() == 'NaN'){
                    arrClone[i] = arrVal.toString();
                }

                if(temp == typeArr['obj']){
                    arrClone[i] = JSON.stringify(arrVal);
                }

                if(temp == typeArr['fun']){
                    arrClone[i] = arrVal.toString().replace(ent,'');
                }
            }

            //去重关键步骤
            for (var i = arrClone.length; i--;) {
                  arrVal = arrClone[i];
                  temp = Object.prototype.toString.call(arrVal);

                  if(temp == typeArr['arr']) arrVal.arrUniq();//如果数组中有数组，则递归
                if (arrClone.indexOf(arrVal) != arrClone.lastIndexOf(arrVal)) {//如果有重复的，则去重
                    array.splice(i,1);
                        arrClone.splice(i, 1);
                  }
                  else{
                      if(Object.prototype.toString.call(array[i]) != temp){
                          //检查现在数组和原始数组的值类型是否相同，如果不同则用原数组中的替换，原因是原数组经过了字符串变换
                          arrClone[i] = array[i];
                      }
                 }
            }
            return arrClone;
        }

    },
    checkUpdate: function (){
        if(this.isApp){

            var mam = api.require('mam');
            mam.checkUpdate(function(ret, err) {
                if (ret) {
                    var result = ret.result;
                    if (result.update == true) {
                        var str = '新版本型号: ' + result.version + ';\n\n更新提示: ' + result.updateTip + ';\n发布时间: ' + result.time;
                        api.confirm({
                            title : '有新的版本,是否下载并安装 ',
                            msg : str,
                            buttons : ['确定', '取消']
                        }, function(ret, err) {
                            if (ret.buttonIndex == 1) {
                                if (api.systemType == "android") {

                                    subei.uIActionProgressOpen();

                                    api.download({
                                        url : result.source,
                                        report : true
                                    }, function(ret, err) {
                                        if (ret && 0 == ret.state) {/* 下载进度 */
                                            subei.uIActionProgressOpenSetData(ret.percent);
                                        }
                                        if (ret && 1 == ret.state) {/* 下载完成 */
                                            var savePath = ret.savePath;
                                            api.installApp({
                                                appUri : savePath
                                            });
                                            api.closeWidget({silent:true})
                                        }
                                    });
                                }
                                if (api.systemType == "ios") {
                                    api.installApp({
                                        appUri : result.source
                                    });
                                }
                            }else{
                                if(result.closed == true)(
                                    api.closeWidget({silent:true})
                                )
                            }
                        });
                    } else {
                        // api.alert({
                        //     msg : "暂无更新"
                        // });
                    }
                } else {
                    api.alert({
                        msg : err.msg
                    });
                }
            });
        }
    },
    uIActionProgressOpen: function () {

        var UIActionProgress = api.require('UIActionProgress');
        UIActionProgress.open({
            maskBg: 'rgba(0,0,0,0.5)',
            styles: {
                h: 108,
                bg: '#fff',
                title: {
                    size: 13,
                    color: '#000',
                    marginT: 10
                },
                msg: {
                    size: 12,
                    color: '#000',
                    marginT: 5
                },
                lable: {
                    size: 12,
                    color: '#696969',
                    marginB: 5
                },
                progressBar: {
                    size: 2,
                    normal: '#000',
                    active: '#4876FF',
                    marginB: 35,
                    margin: 5
                }
            },
            data: {
                title: '正在更新...',
                msg: '',
                value: 0
            }
        },function(ret){
            console.log(JSON.stringify(ret))
        });
    },
    uIActionProgressOpenSetData: function (num) {
        var UIActionProgress = api.require('UIActionProgress');
        UIActionProgress.setData({
            data: {
                title: '正在更新...',
                msg: '',
                value: ((typeof(num)=='number')?num:100)
            }
        });
    }
}

subei.systemType();

function setMode(id,type,callback) {

    var t_data = this;
    var t_url = 'Device/SetMode';
    var t_param = {
        deviceId: id,
        type: type,
        memberId: get_memberId()
    }

    showLoader();

    ajaxGet(t_url, t_param, function (status, data) {

        if (!data.status) {
            hideLoader();
            toastShow(data.info, 2000);
            return;
        }
        console.log('发指令');
        console.log(data.info);

        if(data.info>0){
            GetAtExecStatus(data.info,callback);
        }else{
            callback(data);
        }

        hideLoader();
    });

};

function GetAtExecStatus(atid,callback){

    var t_data = this;
    var t_url = 'Device/GetAtExecStatus';
    var t_param = {
        atid: atid
    }

    ajaxGet(t_url, t_param, function (status, data) {

        console.log('查询');
        console.log(data.info);
        console.log(JSON.stringify(data));

        if(data.status && data.info=='wait'){

            showLoader('等待设备返回请稍后');
            setTimeout(function(){
                GetAtExecStatus(atid,callback);
            },1000);
            return;

        }

        hideLoader();
        callback(data);

    });
}

// function Axios(url, type, param){

//     // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//     //   const goBack = ()=>{
//     //     setTimeout(()=>{
//     //       setCookie('.ASPXAUTH','',-1);
//     //       history.go(((history.length * -1) + 1));
//     //     },1500);
//     //   }

//       switch (type) {

//         case 'get':
//             return new Promise((resolve, reject) => {
//                 // axios.defaults.withCredentials = true
//                 axios.get(base_url_api+url,param).then((res) => {

//                 if (res.status >= 200 && res.status < 300) {

//                     if (res.data.status) {
//                     resolve({info:res.data.info,all:res.data});
//                     }else{

//                         Vue.$vux.toast.show({
//                             text: res.data.info,
//                             type: 'cancel',
//                         });

//                         // if(res.data.infocode==-3000||res.data.infocode=='-3000'||res.data.infocode=='-1'){
//                         //   goBack();
//                         // }

//                     }

//                 }

//                 }).catch((res) => {
//                     reject(res);
//                 })

//             });
//           break;

//         case 'post':
//             return new Promise((resolve, reject) => {

//                 axios.defaults.withCredentials = true

//                 axios.post(base_url_api+url, $.param(param)).then((res) => {

//                     console.log($.param(param));
//                     console.log(JSON.stringify(res));

//                 if (res.status >= 200 && res.status < 300) {
//                     if (res.data.status) {
//                     resolve({info:res.data.info,all:res.data});
//                     }else{

//                         // if(res.data.infocode==-3000||res.data.infocode=='-3000'||res.data.infocode=='-1'){
//                         //   goBack();
//                         // }

//                     }
//                 }

//                 }).catch((res) => {
//                 reject(res);
//                 })

//             });
//           break;

//         case 'postFile':
//             return new Promise((resolve, reject) => {
//                 // axios.defaults.withCredentials = false
//                 axios.post(base_url_api+url, param).then((res) => {

//                 // setTimeout(()=>{
//                 //   store.commit('updateLoadingStatus', {isLoading: false});
//                 // },800);

//                 if (res.status >= 200 && res.status < 300) {
//                     if (res.data.status) {
//                     resolve({info:res.data.info,all:res.data});
//                     }else{

//                         // if(res.data.infocode==-3000||res.data.infocode=='-3000'||res.data.infocode=='-1'){
//                         //   goBack();
//                         // }

//                     }
//                 }

//                 }).catch((res) => {
//                 reject(res);
//                 })

//             });
//           return;
//           break;

//         case 'postFrom':
//             return new Promise((resolve, reject) => {
//                 var requestObj;
//                 if (window.XMLHttpRequest) {
//                     requestObj = new XMLHttpRequest();
//                 } else {
//                     requestObj = new ActiveXObject;
//                 }

//                 // requestObj.withCredentials = true;

//                 requestObj.open('POST',base_url_api+url, true);

//                 requestObj.setRequestHeader("Content-type", "text/json;charset=UTF-8");

//                 requestObj.send(JSON.stringify(param));
//                 requestObj.onreadystatechange = () => {
//                     if (requestObj.readyState == 4) {
//                         if (requestObj.status == 200) {

//                             var obj = requestObj.response
//                             if (typeof obj !== 'object') {
//                                 obj = JSON.parse(obj);
//                             }

//                             resolve(obj)
//                         } else {
//                             reject(requestObj)
//                         }
//                     }
//                 }
//             });
//         break;

//         default:
//           console.log('缺少传输类型参数！（get or post）');
//       }
//     }

/*
* 提交实体类数据
*/
function isEmptyObject(obj) {
    var name;
    for (name in obj) {
        return false
    }
    return true
}

function request(url, options, callback) {
    showLoader();

    options = options || {};
    options.method = options.method || 'GET';
    options.async = options.async === undefined ? true : options.async;
    options.data = options.data || {};
    options.body = options.body || {};
    var params = formatParams(options.data);
    function formatParams(data) {
        var arr = [];
        for (var prop in data) {
            arr.push(encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop]));
        }
        return arr.join('&');
    }
    var xhr = new XMLHttpRequest();
    xhr.open(options.method, base_url_api + url + '?' + params, options.async);
    if (isEmptyObject(options.body)) {
        xhr.send();
    } else {
        console.log(JSON.stringify(options.body));
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(options.body));
    }

    xhr.onload = function () {

        hideLoader();
        console.log(JSON.stringify(xhr));
        if (xhr.status >= 200 && xhr.status < 300) {
            var res = JSON.parse(xhr.responseText);
            if (res.status) {
                callback(res.info);
            } else {
                toastShow(res.info, 1000);
            }
        } else {
            toastShow(xhr.statusText, 1000);
        }
    };

    xhr.onerror = function () {

        hideLoader();
        console.log(JSON.stringify(xhr));
        toastShow(xhr.statusText, 1000);

    }

}

// 设置cookie
function setCookie(c_name, value, expiredays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//读取cookies
function getCookie(name) {

    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return (arr[2]);
    }else{
        return null;
    }

}

//删除cookies
function delCookie(name) {

    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }

}


/**
 * apicloud Ajax
 */
 function apiAjax(obj,callback){

    //  console.log(base_url_api+obj.url+'?pageIndex='+(obj.param.PageIndex || 0)+'&pageSize='+(obj.param.PageSize||0));

    console.log((obj.url.indexOf('http')>-1?obj.url:(base_url_api + obj.url)) + (obj.param.PageIndex ? ( (obj.url.indexOf('?')>0?'&':'?') + 'pageIndex=' + (obj.param.PageIndex || 0) + '&pageSize=' + (obj.param.PageSize || 0)) : ''));

     if(obj.type=='post'){
        api.ajax({
            url: (obj.url.indexOf('http')>-1?obj.url:(base_url_api + obj.url))  + (obj.param.PageIndex ? ( (obj.url.indexOf('?')>0?'&':'?') + 'pageIndex=' + (obj.param.PageIndex || 0) + '&pageSize=' + (obj.param.PageSize || 0)) : ''),
            method: 'post',
            headers: {
                // testhead: 'aaaaa',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            data: {
                body: $.param(obj.param)
            }
        }, function(ret, err) {
            hideLoader();
            if (ret) {
                if(!ret.status){
                    toastShow(ret.info, 1000);
                    return;
                }
                if(typeof(callback)=='function'){
                    var total = ret.total || 0;
                    callback(ret.info, total);
                }
            } else {
                toastShow(JSON.stringify(err), 1000);
            }
        });
    }else if(obj.type=='downloadPDF'){
        api.ajax({
            url: base_url + obj.url,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            data: {
                body: $.param(obj.param)
            }
        }, function(ret, err) {
            hideLoader();
            if (ret) {
                if(!ret.status){
                    toastShow(ret.info, 1000);
                    return;
                }
                if(typeof(callback)=='function'){
                    var total = ret.total || 0;
                    callback(ret.info, total);
                }
            } else {
                toastShow(JSON.stringify(err), 1000);
            }
        });
    }else if(obj.type=='get'){
        $api.post(base_url_api+obj.url, {
            values: obj.param
        }, function(ret) {
            hideLoader();
            if(!ret.status){
                toastShow(ret.info, 1000);
                return;
            }
            if(typeof(callback)=='function'){
                callback(ret.info);
            }
        }, 'text');
    } else if (obj.type == 'postFile') {

        api.ajax({
            url: obj.url,
            method: 'post',
            data: {
                files: {
                    file: obj.param
                }
            }
        }, function (ret, err) {
            hideLoader();
            if (ret) {
                if (!ret.status) {
                    toastShow(ret.info, 1000);
                    return;
                }
                if (typeof (callback) == 'function') {
                    callback(ret.info);
                }
            } else {
                hideLoader();
                api.alert({
                    msg: JSON.stringify(err)
                });
            }
        });

    }else if(obj.type=='postJson'){
        api.ajax({
            url: base_url_api + obj.url + (obj.param.PageIndex ? ( (obj.url.indexOf('?')>0?'&':'?') + 'pageIndex=' + (obj.param.PageIndex || 0) + '&pageSize=' + (obj.param.PageSize || 0)) : ''),
            method: 'post',
            headers: {
                // testhead: 'aaaaa',
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: {
                body: obj.param
            }
        }, function(ret, err) {
            hideLoader();
            if (ret) {
                if(!ret.status){
                    toastShow(ret.info, 1000);
                    return;
                }
                if(typeof(callback)=='function'){
                    var total = ret.total || 0;
                    callback(ret.info, total);
                }
            } else {
                toastShow(JSON.stringify(err), 1000);
            }
        });
    }

 }
