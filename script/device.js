

//发送广播
function d_sendEvent(name) {
    if(subei.isApp){
        api.sendEvent({
            name: name
        });
    }else{
        console.log('发出广播：'+name);
    }
}
//发送广播
function d_sendEventExtra(name, extra) {
    if(subei.isApp){
        api.sendEvent({
            name: name,
            extra: extra
        });
    }else{
        console.log('发出广播：'+name);
        console.log('广播参数为：'+ JSON.stringify(extra));
    }
}
//侦听广播
function d_addEventListener(name, callback) {
    if(subei.isApp){
        api.addEventListener({
            name: name
        }, function (ret, err) {
            if (ret) {
                if (is_define(callback)) { callback(ret); }
            }
        });
    }else{
        console.log('接收接收广播：'+name);
        console.log('执行方法是：'+ callback);
    }
}


//图片预览
function d_photo_preview(obj, callback) {

    var activeIndex = 0;
    var previewPic = [];
    var src = obj.attr('data-src'); if (src == undefined) src = obj.attr('data');

    obj.parents(".sb_photolist").find(".pic").each(function (index) {
        if (src == $(this).attr('data')) { activeIndex = index; }
        previewPic.push($(this).attr("data"));
    })

    var photoBrowser = api.require('photoBrowser');
    photoBrowser.open({
        activeIndex: activeIndex,
        images: previewPic,
        placeholderImg: '', //'widget://res/img/apicloud.png',
        bgColor: '#000'
    }, function (ret, err) {
        if (ret) {

            callback(previewPic, activeIndex)
            //d_sendEvent("photo_show_open", { previewPic: previewPic, activeIndex: activeIndex })

            //alert(JSON.stringify(ret));
        } else {
            //alert(JSON.stringify(err));
        }
    });

    //var imageBrowser = api.require('imageBrowser');
    //imageBrowser.openImages({ imageUrls: previewPic, activeIndex: activeIndex });
}
function d_photo_preview_delete(obj, index) {

    var photoBrowser = api.require('photoBrowser');
    photoBrowser.deleteImage({ index: index });

    obj.parents(".sb_photolist").find(".pic").each(function (i) {
        if (index == i) { $(this).parent().remove() }
    })
}
function d_photo_preview_close() {
    var photoBrowser = api.require('photoBrowser');
    photoBrowser.close();
}
//图片预览(单张)
function d_photo_preview_one(obj) {

    var previewPic = [];
    var activeIndex = 0;
    var imgs = obj.attr('data-src'); if (imgs == undefined) imgs = obj.attr('src');

    previewPic.push(imgs);

    var imageBrowser = api.require('imageBrowser');
    imageBrowser.openImages({
        imageUrls: previewPic,
        activeIndex: activeIndex
    });

}

//图片选择(单个） (返回图片的地址) 1拍照上传 2相册图片
function d_photo_choose(callback) {

    api.actionSheet({
        title: getInfo('选择图片'),
        cancelTitle: '取 消',
        buttons: ['拍 照', '相 册']
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
                    //alert(JSON.stringify(ret));
                    //api.setStatusBarStyle({ style: "light", color: "#3399ff" });
                    if (ret) {

                        if (ret.data !== '') {

                            var url = ret.data;
                            if (is_define(callback)) { callback(url); }
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

                    //api.setStatusBarStyle({ style: "light", color: "#3399ff" });
                    if (ret) {

                        if (ret.data !== '') {

                            var url = ret.data;
                            if (is_define(callback)) { callback(url); }
                        }

                    }
                });
                break;
        }
    });
}
//图片选择(多个)　(返回图片的地址) 1拍照上传 2相册图片
function d_photos_choose(num, callback) {

    api.actionSheet({
        title: '选择图片', cancelTitle: '取 消', buttons: ['拍 照', '相 册']
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

                    //可以直接把颜色修改为我们的颜色，要不直接禁用（具体这句代码的其他功能我选择还怒清楚）
                    api.setStatusBarStyle({ style: "light", color: "#3399ff" });

                    if (ret) {

                        if (ret.data !== '') {
                            var urls = []; urls.push(ret.data);
                            var compactPicture = api.require('compactPicture');
                            compactPicture.HittingPic({
                                picpatharray: urls, size: 6
                            }, function (ret) {
                                if (is_define(callback)) {
                                    callback(ret.states);
                                }
                            });
                        }
                    }

                });
                break;

            case 2:

                var UIMediaScanner = api.require('UIMediaScanner');
                UIMediaScanner.open({
                    type: 'picture',
                    column: 4,
                    classify: true,
                    max: num,
                    sort: {
                        key: 'time',
                        order: 'desc'
                    },
                    texts: {
                        stateText: '已选择*项',
                        cancelText: '取消',
                        finishText: '完成'
                    },
                    styles: {
                        bg: '#fff',
                        mark: {
                            icon: '',
                            position: 'bottom_left',
                            size: 20
                        },
                        nav: {
                            bg: '#eee',
                            stateColor: '#000',
                            stateSize: 18,
                            cancelBg: 'rgba(0,0,0,0)',
                            cancelColor: '#000',
                            cancelSize: 18,
                            finishBg: 'rgba(0,0,0,0)',
                            finishColor: '#000',
                            finishSize: 18
                        }
                    },
                    exchange: true
                }, function (ret, err) {

                    if(ret.eventType == 'confirm'){

                        if (ret) {

                            var urls = [];
                            for (i = 0; i < ret.list.length; i++) {
                                urls.push(ret.list[i].path)
                            };
                            if(api.systemType == 'ios'){
                                var path = []
                                for(var item in urls){
                                    (function(item){
                                        
                                        UIMediaScanner.transPath({
                                            path: urls[item]
                                        }, function(ret, err) {
                                            if (ret) {
                                                path.push(ret.path)
                                                if(path.length==urls.length){
                                                    
                                                    var compactPicture = api.require('compactPicture');
                                                    compactPicture.HittingPic({
                                                        picpatharray: path, size: 6
                                                    }, function (ret) {
                                                        if (is_define(callback)) {
                                                            callback(ret.states);
                                                            console.log('压缩后的链接'+ret.states)
                                                        }
                                                    });

                                                }
                                                console.log('选择的路径'+urls[item]+'||转换的路径'+ret.path+'||压缩后的链接'+ret.states)
                                            } else {
                                                console.log(JSON.stringify(err));
                                            }
                                        });

                                    }(item))
                                }

                                // callback(urls);

                            }else{

                                var compactPicture = api.require('compactPicture');
                                compactPicture.HittingPic({
                                    picpatharray: urls, size: 6
                                }, function (ret) {
                                    if (is_define(callback)) {
                                        callback(ret.states);
                                    }
                                });

                            }
                        }
                    }


                });
                break;
        }
    });

}

//视频预览
function d_video_preview(url) {
    api.openVideo({
        url: url
    });
}
//视频选择
function d_video_choose(callback) {
    api.getPicture({
        sourceType: "camera",
        mediaValue: "video",
        quality: 7
    }, function (ret, err) {

        if (ret) {
            if (ret.data != "") {
                callback(ret.data)
            }
        }

    });
}

//上传头像(仅处理单个图片的选择，上传，存储) ojbPhoto data属性用来存储图片的地址
function d_photo_upload_HeadImg(objPhoto) {
    //选择图片
    d_photo_choose(function (url) {

        objPhoto.html("");
        objPhoto.append("<i class='loading'>上传中...</i>");
        objPhoto.attr("dataUrl", url);
        set_photoBg(objPhoto, url);

        /* 上传图片到数据库一个含有图片文件的Class. */
        var classInfo = {
            className: "Photo",
            fields: [{ name: "photo", value: objPhoto.attr("dataUrl"), type: "file", filename: "未命名" }]
        }

        //method string 操作类型,不区分大小写,默认get.可选get(查询),post(新建),put(更新),delete(删除)
        ajaxToAPICloud(appId, appKey, "post", classInfo, function (ret, err) {

            objPhoto.attr("data", ret.body.photo.url);
            objPhoto.attr("src", ret.body.photo.url);
            objPhoto.find("i.loading").hide();
        })
    })
}

//tel
function d_tel(tel, callback) {
    api.call({
        type: 'tel_prompt',
        number: tel
    });
}
//sms
function d_sms(tel, data, callback) {
    api.sms({
        numbers: [tel],
        text: data
    }, function (ret, err) {
        if (ret) {
            if (is_define(callback)) { callback(); }
        } else {
            if (is_define(callback)) { callback(); }
        }
    });
}
//email
function d_email(mail, subject, body, attach, callback) {
    api.mail({
        recipients: mail,
        subject: subject,
        body: body,
        attachments: attach
    }, function (ret, err) {
        if (ret) {
            if (is_define(callback)) { callback(); }
        } else {
            if (is_define(callback)) { callback(); }
        }
    });
}

//消除缓存
function d_clearCache() {
    api.clearCache(function (ret, err) {
        if (ret) {
        } else {
        }
    });
}
//得到缓存大小
function d_getCacheSize(callback) {
    api.getCacheSize(function (ret, err) {
        if (ret) {
            callback(true, ret.size);
        } else {
            callback(true, err);
        }
    });
}
//缓存图片
function d_getImageCacheAll() {

    $("img").each(function () {

        var obj = $(this);
        if (obj.attr("src") != undefined && obj.attr("src") != "") {

            if (obj.attr("src_l") != undefined && obj.attr("src_l").indexOf("http:") > -1) {
                api.imageCache({
                    url: obj.attr("src_l"),
                    policy: "cache_else_network"
                }, function (ret, err) {
                    if (ret) {
                        if (ret.status) {
                            obj.attr("src", ret.url)
                            obj.attr("data", ret.url);
                        }
                    }
                });
            }
            else if (obj.attr("src").indexOf("http:") > -1) {
                api.imageCache({
                    url: obj.attr("src"),
                    policy: "cache_else_network"
                }, function (ret, err) {
                    if (ret) {
                        if (ret.status) {
                            obj.attr("src", ret.url)
                            obj.attr("data", ret.url);
                        }
                    }
                });
            }
        }

    })

    $("div[src_l]").each(function () {

        var obj = $(this);
        api.imageCache({
            url: obj.attr("src_l"),
            policy: "cache_else_network"
        }, function (ret, err) {

            if (ret) {
                if (ret.status) {

                    var img = new Image();
                    img.src = ret.url;
                    img.onload = function () {

                        var obj_w = obj.width();
                        var obj_h = obj.height();

                        nUrl = this.src;
                        nWidth = this.width * 1;
                        nHeight = this.height * 1;

                        obj.css("background-position", "center");
                        if (nWidth / nHeight > obj_w / obj_h) { obj.css("background-size", "auto 100%"); }
                        else { obj.css("background-size", "100% auto"); }

                        obj.css("background-image", "url(" + ret.url + ")");
                        obj.attr("data", ret.url);
                    }

                }
            }
        });

    })

}
//缓存图片
function d_getImageCache(url, callback) {

    api.imageCache({
        url: url,
        policy: "cache_else_network"
    }, function (ret, err) {

        if (ret) {
            if (ret.status) {
                callback(ret.url)
            }
        }
    }); 
}


//读取配置值，再回调动作
function d_get_pref(key, callback) {

    api.getPrefs({
        key: key
    }, function (ret, err) {
        if (ret) {
            if (is_define(callback)) { callback(ret.value); }
        } else {
            if (is_define(callback)) { callback(""); }
        }
    });
}
//写取配置值，再回调动作
function d_set_pref(key, val, callback) {
    api.setPrefs({
        key: key,
        value: val
    });
}
//移去配置值，再回调动作
function d_remove_pref(key, callback) {
    api.removePrefs({
        key: 'key'
    });
}

//打开一个网页链接
function d_openUrl(url) {
    if (api.systemType == "ios") {
        api.openApp({
            iosUrl: url,
            appParam: { 'from': 'subei' }
        }, function (ret, err) {
            var msg = JSON.stringify(ret);
        });
    }
    else {
        api.openApp({
            androidPkg: 'android.intent.action.VIEW',
            mimeType: 'text/html',
            uri: url
        }, function (ret, err) {
            var msg = JSON.stringify(ret);
        });
    }
}
//下载
function d_download(url, path, callback) {

    api.download({
        url: url,
        savePath: path,
        report: true,
        cache: true,
        allowResume: true
    }, function (ret, err) {
        if (ret) {
            if (is_define(callback)) {
                callback(true, ret);
            }
        } else {
            if (is_define(callback)) {
                callback(false, ret.msg);
            }
        }
    });
}
//读文件
function d_readFile(url, callback) {
    api.readFile({
        path: url
    }, function (ret, err) {
        if (ret) {
            alert(JSON.stringify(ret));
        } else {
            alert(JSON.stringify(err));
        }
    });
}
//写文件
function d_writeFile(url, data, callback) {
    api.writeFile({
        path: url,
        data: data
    }, function (ret, err) {
        if (ret) {
            alert(JSON.stringify(ret));
        } else {
            alert(JSON.stringify(err));
        }
    });
}

//得到所在的坐标
function d_locationOne(callback) {

    //api.getLocation(function (ret, err) {
    //    if (ret.status) {

    //        //获取位置信息成功
    //        var userLon = ret.longitude; window.localStorage.setItem("userLon", userLon)
    //        var userLat = ret.latitude; window.localStorage.setItem("userLat", userLat)
    //        window.localStorage.setItem("location", userLon + "," + userLat);
    //        if (is_define(callback)) { callback(userLon, userLat); }

    //    }
    //});

    var map = api.require('bMap');
    map.getLocation({
        accuracy: '10m', autoStop: true, filter: 1
    }, function (ret, err) {

        if (ret) {
            if (ret.status) {

                //获取用户经纬度
                var userLon = ret.lon; window.localStorage.setItem("userLon", userLon)
                var userLat = ret.lat; window.localStorage.setItem("userLat", userLat)
                window.localStorage.setItem("location", userLon + "," + userLat);

                sb_Writelog("得到所在的坐标：" + userLon + " | " + userLat);
                if (is_define(callback)) { callback(userLon, userLat); }

            }
        }

    });
}
//得到所在的坐标
function d_location(callback) {

    var map = api.require('bMap');
    map.getLocation({
        accuracy: '10m',
        autoStop: true,
        filter: 1
    }, function (ret, err) {

        if (ret) {
            if (ret.status) {

                //获取用户经纬度
                var userLon = ret.lon; window.localStorage.setItem("userLon", userLon)
                var userLat = ret.lat; window.localStorage.setItem("userLat", userLat)

                window.localStorage.setItem("location", userLon + "," + userLat);

                //toastShow("得到所在的坐标：" + userLon + " | " + userLat)
                sb_Writelog("得到所在的坐标：" + userLon + " | " + userLat);

                //获取用户地址
                map.getNameFromCoords({ lon: ret.lon, lat: ret.lat }, function (ret, err) {

                    alert(JSON.stringify(ret));

                    if (ret) {
                        if (ret.status) {

                            var userAddress = ret.address; window.localStorage.setItem("userAddress", userAddDetailed);//具体地址
                            var userArea1 = ret.province; window.localStorage.setItem("userArea1", userProvince);//省份
                            var userArea2 = ret.city; window.localStorage.setItem("userArea2", userCity);//城市
                            var userArea3 = ret.district; window.localStorage.setItem("userArea3", userArea);//县区

                            var userStreetName = ""; if (ret.streetName != undefined) userStreetName = ret.streetName;
                            var userStreetNumber = ""; if (ret.streetNumber != undefined) userStreetNumber = ret.streetNumber;

                            //toastShow("坐标转地址获取用户地址：" + userArea1 + "," + userArea2 + "," + userArea3 + "," + userStreetName + "," + userStreetNumber + " <br> 详细地址：" + userAddress)

                            sb_Writelog("用户区域：" + userArea1 + "," + userArea2 + "," + userArea3 + "    " + userStreetName + "," + userStreetNumber + " \n\r详细地址：" + userAddress);
                            if (is_define(callback)) { callback(); }
                        }

                    }
                });

            }
        }

    });
}
//坐标转地址
function d_location_coords_to_address(lon, lat, callback) {

    var map = api.require('bMap');
    //获取用户地址
    map.getNameFromCoords({ lon: lon, lat: lat }, function (ret, err) {
        if (ret) {
            if (ret.status) {

                var userAddDetailed = ret.address; window.localStorage.setItem("userAddDetailed", userAddDetailed);//具体地址
                var userProvince = ret.province; window.localStorage.setItem("userProvince", userProvince);//省份
                var userCity = ret.city; window.localStorage.setItem("userCity", userCity);//城市
                var userArea = ret.district; window.localStorage.setItem("userArea", userArea);//县区

                var userStreetName = ""; if (ret.streetName != undefined) userStreetName = ret.streetName;
                var userStreetNumber = ""; if (ret.streetNumber != undefined) userStreetNumber = ret.streetNumber;
                var userAddress = userStreetName + userStreetNumber;
                window.localStorage.setItem("userAddress", userAddress);//街道名+街道号

                sb_Writelog("获取用户地址：" + userAddDetailed + userProvince + userCity + userArea + userStreetName + userStreetNumber + " | 详细地址：" + userAddress);
                if (is_define(callback)) { callback(ret); }

            }
        }
    });
}
//地址转坐标(返回 lon lat)
function d_location_address_to_coords(city, address, callback) {
    var map = api.require('bMap');
    map.getCoordsFromName({
        city: city,
        address: address
    }, function (ret, err) {
        if (ret.status) {
            sb_Writelog("地址转坐标：" + ret.lon + "," + ret.lat);
            if (is_define(callback)) { callback(ret.lon, ret.lat); }
        }
    });
}
//二点之间的距离
function d_location_distance(start_lon, start_lat, end_lon, end_lat, callback) {
    sb_Writelog("二点之间的距离：" + start_lon + "," + start_lat + "|" + end_lon + "," + end_lat);
    var map = api.require('bMap');
    map.getDistance({
        start: {
            lon: start_lon,
            lat: start_lat
        },
        end: {
            lon: end_lon,
            lat: end_lat
        }
    }, function (ret) {
        if (ret.status) {
            if (is_define(callback)) { callback((ret.distance / 1000).toFixed(1)); }
        }
    });
}

//导航是否安装
function mapInstalled(target, callback) {
    var navigator = api.require('navigator');
    navigator.installed({
        target: target
    }, function (ret, err) {
        callback(ret.status)
    });
}
//百度导航
function bMapNavigation(startLon, startLat, endLon, endLat, endName) {
    mapInstalled("bMap", function (ret) {
        if (ret) {
            var navigator = api.require('navigator');
            navigator.bMapNavigation({
                start: {                     // 起点信息.
                    lon: startLon,         // 经度.
                    lat: startLat,             // 纬度.
                    name: '当前位置'
                },
                end: {                         // 终点信息.
                    lon: endLon,         // 经度
                    lat: endLat,            // 纬度
                    name: endName
                },
                mode: 'driving'
            });
        } else {
            toastShow("亲，您未安装百度地图！", 3000);
        }
    })

}
//高德导航
function aMapNavigation(endLon, endLat) {

    mapInstalled("aMap", function (ret) {
        if (ret) {
            var navigator = api.require('navigator');
            navigator.aMapNavigation({
                end: {
                    lon: endLon,
                    lat: endLat
                },
                dev: 0,
                strategy: 'fast'
            });
        } else {
            toastShow("亲，您未安装高德地图！", 3000);
        }
    })

}
//谷歌导航
function gMapNavigation(startLon, startLat, endLon, endLat) {

    mapInstalled("gMap", function (ret) {
        if (ret) {
            var navigator = api.require('navigator');
            navigator.gMapNavigation({
                start: {
                    lon: startLon,
                    lat: startLat
                },
                end: {
                    lon: endLon,
                    lat: endLat
                },
                mode: 'driving'
            });
        } else {
            toastShow("亲，您未安装谷歌地图！", 3000);
        }
    })

}
//苹果导航
function iMapNavigation(startLon, startLat, endLon, endLat) {
    var navigator = api.require('navigator');
    navigator.appleNavigation({
        start: { // 起点信息.
            lon: startLon,
            lat: startLat,
            name: "起点"
        },
        end: { // 终点信息.
            lon: endLon, // 经度
            lat: endLat,
            name: "终点"
        },
        mode: 'driving'
    });
}


//扫码
function d_scan(callback, sound)//c1为成功回调,c2为取消回调,c3为失败回调
{
    if (!is_define(sound)) {
        var sound = "";
    }
    var obj = api.require('FNScanner');
    obj.openScanner(
	{
	    sound: sound,
	    autoLight: true,
	    saveToAlbum: false,
	    autorotation: true,
	    saveImg: {
	        path: '',
	        w: 200,
	        h: 200
	    }
	}, function (ret) {
	    if (ret.eventType == "success") {
	        Boolean(callback) && callback(ret.content);
	    }
	    else if (ret.eventType == "cancel") {
	        toastShow(getInfo('取消扫描！'), 2000);
	    }
	    else if (ret.eventType == "fail") {
	        toastShow(getInfo('扫描失败！'), 2000);
	    }
	});
    return false;
}
//生成二维码或者条码，type=bar_image为条码,type=qr_image为二维码
function d_make_code(content, type, callback) {
    if (!is_define(type)) {
        var type = "qr_image";
    }
    var obj = api.require('FNScanner');
    obj.encodeImg({
        type: type,
        content: content,
        saveToAlbum: true
    },
	function (ret) {
	    if (ret.status) {
	        if (is_define(callback)) {
	            callback(ret.albumPath);
	        }
	        else {
	            $toast('生成成功，已经保存到相册');
	        }
	    }
	});
}

function d_card_credit() {
    var obj = api.require('cardReader');
    obj.open(function (ret, err) {
        if (ret.status) {
            $alert(json2str(ret));
        }
        else {
            $toast("扫描失败");
        }
    });
}
function d_set_clip(v) {
    if (is_define(v)) {
        var trip = "复制到剪切板成功";
    }
    else {
        var trip = "操作失败";
    }
    var obj = api.require('clipBoard');
    obj.set(
	{
	    value: v
	},
	function (ret, err) {
	    if (ret.status) {
	        $toast(trip);
	    }
	    else {
	        $toast('操作失败');
	    }
	});
}
function d_get_clip(callback) {
    var obj = api.require('clipBoard');
    obj.get(function (ret, err) {
        if (ret.value && is_define(callback)) {
            callback(ret.value);
        }
    });
}

function d_start_record() {
    api.startRecord();
}
function d_end_record(callback) {
    api.stopRecord(function (ret, err) {
        if (ret) {
            callback(ret.path);
        }
    });
}
function d_play_voice(path, callback) {
    api.startPlay(
	{
	    path: path
	}, function () {
	    callback('播放完成');
	});
}
function d_play_video(path) {
    api.openVideo(
	{
	    url: path
	});
}


//监听摇一摇
function d_shake(callback) {
    api.addEventListener(
	{
	    name: 'shake'
	}, function (ret, err) {
	    if (is_define(callback)) {
	        callback();
	    }
	});
}
//打开联系人
function d_contact(callback) {
    api.openContacts
	(
	    function (ret, err) {
	        if (ret.status) {
	            if (is_define(callback)) {
	                callback(ret.name, ret.phone);
	            }
	        }
	    }
	);
}
//返回安卓桌面
function d_back_desk() {
    if (get_os() == 'android') {
        api.toLauncher();
    }
}
//指纹识别
function d_touch_id(callback_s, callback_e) {
    var obj = api.require('touchID');
    obj.verify(
	function (ret, err) {
	    if (ret.status) {
	        if (is_define(callback_s)) {
	            callback_s();
	        }
	    }
	    else {
	        if (is_define(callback_e)) {
	            if (ret.index == 0)//手动输入密码
	            {
	                callback_e();
	            }
	            else if (ret.index == 1)//用户取消验证
	            {
	            }
	            else if (ret.index == 2)//验证三次失败
	            {
	                callback_e();
	            }
	            else if (ret.index == 3)//多长验证失败请锁定手机
	            {
	                callback_e();
	            }
	            else {
	                callback_e();
	            }
	        }
	    }
	});
}
//锁屏
function d_lock_screen(is_modify) {
    if (get_os() == "ios") {
        if (!is_define(is_modify)) {
            var is_modify = 0;
        }
        api.openWin(
		{
		    name: 'lock_screen',
		    slidBackEnabled: false,
		    url: 'widget://pub_html/lock_screen.html',
		    pageParam: { is_modify: is_modify }
		});
    }
    else {
        if (is_define(get_local("lock_pass"))) {
            if (is_define(is_modify))//修改密码
            {
                var screenLock = api.require('screenLock');
                screenLock.show(
				{
				    color: '#000000'
				},
				function (ret, err) {
				    if (ret.status == 111) {
				        screenLock.set(
						{
						    color: '#000000'
						},
						function (ret, err) {
						    if (ret.status == 111) {
						        set_local("lock_pass", "coolfull");
						    }
						});
				    }
				});
            }
            else//验证密码
            {
                var screenLock = api.require('screenLock');
                screenLock.show(
				{
				    color: '#000000'
				},
				function (ret, err) {
				    api.alert({ msg: '' + ret.status });
				});
            }
        }
        else//设置密码
        {
            var screenLock = api.require('screenLock');
            screenLock.set(
			{
			    color: '#000000'
			},
			function (ret, err) {
			    if (ret.status == 111) {
			        set_local("lock_pass", "coolfull");
			    }
			});
        }
    }
}


//客服
function d_kf_zhichi() {
    if (api.systemType == 'ios') {
        var param = {
            sysNum: "56ddae31ff3f46aab16981ca40b432fb",
            userId: "909565115@qq.com",
            nickName: "Potter",
            phone: "18927456612",
            email: "909565115@QQ.com",
            titleFont: 18.0,
            backgroundColor: "#f0f0f0",
            topViewTextColor: "#FFFFFF",
            isCustomLinkClick: 1,
            backButtonTitle: "返回",
            //backButtonImage: "SobotKit.bundle/ZCWebTitleBack_normal.png",
        };

        function callBack(ret, err) {
            alert("ret.type=" + ret.type + "\nvalue=" + ret.value + "\nret.desc=" + ret.desc);
        }

        var zhichi = api.require('zhiChi');
        zhichi.startZhiChi(param, callBack);
    }
    else {

        var param = {
            sysNum: "56ddae31ff3f46aab16981ca40b432fb",
            themeColor: "",
            leftChatColor: "#FFFFFF",
            rightChatColor: "#08b0b0",
            userId: "100081",
            uName: "Potter",
            realName: "",
            phone: "18927456612",
            email: "909565115@QQ.com",
            face: "",
            qq: "",
            weixin: "",
            weibo: "",
            birthday: "",
            Remark: "",
            visitTitle: "",
            visitUrl: "",
            isKeepSession: "false",
            isShowEvaluate: "true",
            isUseVoice: "true",
            initModelType: -1,
            skillSetId: "b467f7226b2f4fb7a389c855906f5ebe",
            skillSetName: "",
            customInfo: "\{\"技能1\"\: \"打麻将\"\}",
            goodsTitle: "乐视超级电视 S50 Air 全配版50英寸2D智能LED黑色（Letv S50 Air）",
            goodsImage: "http://www.lishui.com/uploads/140301/1-14030111052Y17.jpg",
            goodsSendText: "商品链接： www.baidu.com"
        };


        var zhichi = api.require('zhiChi');
        zhichi.startZhiChi(param);
    }
}

//短信验证
//得到验证码
function d_sms_get(tel, callback) {

    var smsVerify = api.require('smsVerify');
    smsVerify.register(function (ret, err) {
        if (ret.status) {

            var smsVerify = api.require('smsVerify');
            smsVerify.sms({
                phone: tel,
                country: "86"
            }, function (ret, err) {

                if (ret.status) {
                    if (is_define(callback)) {
                        callback(true);
                    }
                } else {
                    if (is_define(callback)) {
                        callback(false);
                    }
                }
            });

        } else {
            callback(false);
        }
    });
}
//验证验证码
function d_sms_verify(tel, code, callback) {

    console.log(tel)
    console.log(code)
    console.log(callback)

    var smsVerify = api.require('smsVerify');
    smsVerify.verify({
        phone: tel,
        country: "86",
        code: code
    }, function (ret, err) {
        console.log('效验验证码 == ' + JSON.stringify(ret))
        if (ret.status) {
            if (is_define(callback)) {
                callback(true);
            }
        }
        else {
            if (is_define(callback)) {
                callback(false);
            }
        }
    })
}



