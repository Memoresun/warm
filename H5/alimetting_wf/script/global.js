/**
 * Created by xiangrui on 16/4/9.
 */
$(function() {
    function getURLParameter(name,href) {
        var reg = new RegExp("(^|\\?|&)" + name + "=([^&^\#]*)(\\s|&|\#|$)", "i");
        href = href || location.href;
        if (reg.test(href)) return unescape(RegExp.$2.replace(/\+/g, " "));
    }

    var about = {
        "data":{
            "daq":{"url":"images/aboutLogoCxqk.png","desc":"超星期刊目前涵盖中外文期刊88000余种，其中全文收录中文期刊6500余种，核心期刊超过1300种，实现了与上亿条外文期刊元数据的联合检索，内容涉及理学、工学、农学、社科、文化、教育、哲学、医学、经管等各学科领域。目前，超星期刊是检索刊种最多的平台。"},
            "check":{"url":"images/aboutLogoDzs.png","desc":"“歌德电子借阅机——24小时电子自助借阅系统”，采用独创全新的图书借阅方式，利用时下最流行的二维码扫描功能，实现轻松扫描，即刻下载，将图书下载至移动终端可离线阅读。内置3000册独家授权的精品正版图书，每月150册更新量，保持图书新鲜度。充分利用您闲置的碎片时间，让阅读随时随地，随心所欲。精美的高清图片、优雅的图文绕排、绚丽的全屏插图，让电子书也可以带来超越纸书的视觉享受。"},
            "zhima":{"url":"images/aboutLogoSs.png","desc":"读秀学术搜索是一个真正意义上的文献搜索及获取服务平台，其后台建构在一个由海量全文数据及资料基本信息组成的超大型数据库基础之上。其以10亿页中文资料为基础，为读者提供深入内容的章节和全文搜索、部分文献试读、参考咨询等多种功能。"},
            "alipay":{"url":"images/aboutLogoSp.png","desc":"超星学术视频邀请国内外知名专家学者、学术权威，通过授权后利用先进的数字化摄像技术，高质量、多形式、系统的记录他们的学术思想和研究成果。目前已经覆盖哲学、文学、经济学、历史学、法学、工学等多个学科门类，已拍摄国内外名师6900位，课程7580门，120493集，使稀缺的学术大师、名师资源打破时空的限制，为全国乃至全球共享，将学界名家推向校园、推向社会。"},
            "zhaocaibao":{"url":"images/aboutLogoByTsg.png","desc":"百链云图书馆是超星公司推出的新一代图书馆资源解决方案及共建共享方案，它内容丰富的全文资源，宗旨在于为读者提供资源补缺服务。通过对元数据仓储数据与用户本地资源分布建立定位链接，能够完成学术资源的一站式检索，能够实现本馆与其他馆的互联互通、共建共享，最终通过原文链接和云服务模式，帮助读者找到、得到所需资源。"},
            "yuebao":{"url":"images/aboutLogoXx.png","desc":"学习通是国内第一款基于神经系统原理打造的知识传播与管理分享平台。它是利用超星20余年来积累的海量的图书、期刊、报纸、视频、原创等资源，集知识管理、课程学习、专题创作为一体，为读者提供一站式学习与工作环境。在学习软件里面免费下载图书、期刊、视频等学习资料。"},
            "bank":{"url":"images/aboutLogoTs.png","desc":"超星电子图书是全球最大的中文数字图书馆。书库内含图书资源数百万种，涵盖中图法22个大类，数字化加工中心20多个，年加工能力超过30万种，并拥有大量珍本善本、民国图书等稀缺文献资源。电子图书分为汇雅电子图书和超星书世界两个品牌，汇雅电子书为图像格式图书，超星书世界为全文本格式图书。"},
            "fortune":{"url":"images/aboutLogoFx.png","desc":"超星发现以数十亿海量元数据为基础，利用数据仓储、资源整合、知识挖掘、数据分析、文献计量学模型等相关技术，较好地解决了复杂异构数据库群的集成整合、完成高效、精准、统一的学术资源搜索，进而通过分面聚类、引文分析、知识关联分析等实现高价值学术文献发现、纵横结合的深度知识挖掘、可视化的全方位知识关联。超星发现能够帮助您冲破信息孤岛与信息超载桎梏,让意外惊喜成为创新的灵感,让洞察全局成为科学探索的法宝,让巨人的肩膀成为知识价值再生的基石。"},
            "mayi":{"url":"images/aboutLogoTsg.png","desc":"超星移动图书馆除了支持网页版的浏览还提供基于ios,android系统的手机客户端体验；在提供海量图书的检索与全文阅读的同时，还提供图书资源的下载，阅读资源更加方便快捷。馆藏书目模块与传统opac系统对接，实现馆藏查询、续借、预约等功能，另外客户端推出条码扫描功能，馆藏书目情况一拍即得。"}
        },
        "init": function() {
            var c = getURLParameter("aboutDetail");
            $(".about-detail-page").fadeOut();
            if(!about.data[c]){
                c="daq"
            }
            $(".about-content .desc").html(about.data[c].desc);
            $(".about-detail-logo img").attr("src",about.data[c].url);
            $(".about-detail-page").fadeIn()
        }
    }


    if(getURLParameter("aboutDetail")){
        about.init()
    }

    // dot flash
    var sf = {
        "init": function(x) {
            sf.item = $(".ali-logos .logos .dot");
            sf.length = sf.item.length;
            sf.current = (x > sf.length-1) ? 0 : x || 0;
            sf.play()
        },
        "play": function() {
            sf.item.removeClass("qqflash animated");
            sf.item.eq(sf.current).addClass("qqflash animated");
            sf.current += 1;
            sf.timer = setTimeout(function() {
                sf.init(sf.current)
            },1000)
        }
    }
    if($(".about-index-page").length != 0){
        sf.init()
    }

    var gm = {
        "init": function() {
            gm.speed = 500;
            gm.status = false;
            gm.pt = $(window).height()-480;

            $(".global-menus").css({
                "padding-top":gm.pt,
            });

            $(".global-menus a").each(function(i,v) {
                $(this).on("click", function() {
                    gm.close($(this));
                })
            });
            $(".global-btn-back").on("click", function() {
                if(gm.status == false){
                    window.location.href = "index.html"
                }else{
                    gm.reset();
                    gm.status = false
                }
            })
        },
        "open": function(_this) {
            gm.p = _this.position()
            gm.c = _this.attr("data-target");
            gm.ce = $("#"+gm.c);

            switch (gm.c){
                case "imgsListUsa":
                    gm.ce.css({
                        "margin":"-110px 0px -40px"
                    });
                    break;
                case "imgsListGlobal":
                    gm.ce.css({
                        "margin":"-110px 0px 0px"
                    });
                    _this.addClass("active");
                    _this.find(".bg").attr("src","images/globalMenu04Active.jpg")
                    break;
                case "imgsListSg":
                    gm.ce.css({
                        "margin":"-80px 0 -100px"
                    })
                    break;
                case "imgsListHk":
                    gm.ce.css({
                        "margin":"-60px 0px -50px"
                    })
                    break;
                default :
                    gm.ce.css({
                        "margin":"-100px"
                    });
                    break;
            }

            $(".global-menus").animate({
                "padding-top":0,
                //"scrollTop":0,
            },gm.speed);
            $("body").animate({
                "scrollTop":0
            },gm.speed)



            gm.ce.animate({
                height:gm.ce.find(".imgs-inner").height()
            },gm.speed)
            gm.status = true;
        },
        "close": function(_this) {
            if(_this && _this.attr("data-target") == gm.c){
                return false
            }
            if(gm.c == "imgsListGlobal"){
                $("[data-target=imgsListGlobal]").removeClass("active");
                $("[data-target=imgsListGlobal]").find(".bg").attr("src","images/globalMenu04.png");
            }
            if(gm.ce){
                gm.ce.animate({
                    height:0,
                    margin:"0"
                },gm.speed);
            }

            if(_this){
                gm.open(_this)
            }
        },
        "reset": function() {
            gm.close()
            gm.c = ""
            gm.ce = ""
            $(".global-menus").animate({
                "padding-top":gm.pt,
            });
        }
    }
    if($(".global-index-page").length != 0){
        gm.init()
    }


    $(".normal-page-wrap").css("min-height",$(window).height())


})