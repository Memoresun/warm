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
            "daq":{"url":"images/aboutLogoDaq.png","desc":"蚂蚁达客是蚂蚁金服集团旗下的互联网股权投融资平台，致力于以互联网的思维和技术，为小微企业和创新创业者提供股权融资服务，为投资人提供股权投资服务。"},
            "check":{"url":"images/aboutLogoCheck.png","desc":"蚂蚁花呗，是蚂蚁金服旗下的一款无忧支付产品。蚂蚁花呗为用户提供极致的支付体验，支付成功率接近100％。2015年双11当天，蚂蚁花呗的支付交易笔数达到6048万笔，支付成功率高达99.99%，平均每笔支付用时仅0.035秒。"},
            "zhima":{"url":"images/aboutLogoZhima.png","desc":"芝麻信用，是蚂蚁金服旗下独立的第三方信用评估及管理机构，通过云计算、机器学习等技术客观呈现个人的信用状况。在公测中的芝麻信用，已经在消费金融、融资租赁、信用卡、酒店、租房、出行、学生服务、公共事业服务等近百个场景为用户、商户提供信用服务，使众多用户享受到了信用的便利。"},
            "alipay":{"url":"images/aboutLogoAlipay.png","desc":"蚂蚁金服旗下的支付宝，是以每个人为中心，以实名和信任为基础的生活平台。随着场景拓展和产品创新，支付宝已发展成为融合了支付、生活服务、政务服务、社交、理财、保险、公益等多个场景与行业的开放性平台。支付宝已经超越了支付本身，成为移动互联网时代生活方式的代表。"},
            "zhaocaibao":{"url":"images/aboutLogoZhaocaibao.png","desc":"招财宝是蚂蚁金服旗下开放的金融信息服务平台。招财宝平台连接了个人投资者和金融信息提供方，以严格遵守法律法规和监管政策为前提，由专业金融机构对融资信息进行风险管理，并对投资者提供有力的保障措施。截至2015年12月，招财宝平台共帮助了超过1000万个人投资者成交。"},
            "yuebao":{"url":"images/aboutLogoYuebao.png","desc":"余额宝是蚂蚁金服旗下的余额增值服务和活期资金管理服务。余额宝对接的是天弘基金旗下的增利宝货币基金，特点是操作简便、低门槛、零手续费、可随取随用，除理财功能外，余额宝还可直接用于购物、转账、缴费还款等消费支付，是移动互联网时代的现金管理工具。"},
            "bank":{"url":"images/aboutLogoBank.png","desc":"浙江网商银行是由蚂蚁金服作为主发起人设立的、经银监会批准的中国首批民营银行之一。网商银行致力于服务小微企业、创业者及农村用户，将践行普惠金融、服务小微企业作为自己的使命和愿景，希望做中国服务最好、最有情有义和无微不至的银行。"},
            "fortune":{"url":"images/aboutLogoFortune.png","desc":"蚂蚁聚宝是蚂蚁金服旗下的智慧理财平台，致力于让“理财更简单”，与支付宝、余额宝、招财宝等同为蚂蚁金服旗下的业务板块。用户可以在蚂蚁聚宝平台上实现余额宝、招财宝、存金宝、基金等各类理财产品的交易。蚂蚁聚宝的门槛低、操作简单，同时用户还可以获得财经资讯、市场行情、社区交流、智能理财顾问等服务。"},
            "mayi":{"url":"images/aboutLogoMayi.png","desc":"蚂蚁金融云是蚂蚁金服旗下面向金融机构的云计算服务。蚂蚁金融云作为蚂蚁金服“互联网推进器计划”的组成部分，是一个开放的云平台，它助力金融创新、助力金融机构的IT架构实现升级，去构建更加稳健安全、低成本、敏捷创新的金融级应用，使金融机构可以更好的服务自己的客户。"}
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
    var happy = {
        "data":{
            "year":{"title":"一三五年陈","list":[
                {"title":"images/happyHistoryYear1Title.png","pic":"images/happyHistoryYear1.jpg","desc":"" +
                "\<p\>阿里入职满一周年的同学被称为【一年香】，\<\/p\>" +
                "\<p\>一年坛发、酒香四溢。\<\/p\>" +
                "\<p\>从入职时懵懵懂懂的好感，\<\/p\>" +
                "\<p\>到随后365天里的跌跌撞撞、哭哭笑笑，\<\/p\>" +
                "\<p\>我们在追逐梦想的脚步声中咂摸阿里独特的味道。\<\/p\>" +
                "\<p\>一年的味道，就像新封上的美酒，\<\/p\>" +
                "\<p\>悄悄散发出属于自己的芬芳。\<\/p\>" +
                "\<p\>一年香的纪念,是一枚笑脸勾勒出的徽章，\<\/p\>" +
                "\<p\>见证着我们一年一起走过的路，\<\/p\>" +
                "\<p\>我们还要开开心心地一起更长久地走下去。\<\/p\>" +
                "\<p\>初心不改，方得始终。\<\/p\>"},

                {"title":"images/happyHistoryYear3Title.png","pic":"images/happyHistoryYear3.jpg","desc":"" +
                "\<p\>在阿里，满三周年的同学被称为【三年醇】。\<\/p\>" +
                "\<p\>他们因爱而坚定，成为了真正的阿里人，有了阿里的味道。\<\/p\>" +
                "\<p\>在三周年时，他们将被赠与一枚白玉雕琢而成的吊坠，\<\/p\>" +
                "\<p\>形若阿里十年过江接力的阿里真棒，\<\/p\>" +
                "\<p\>它凝聚着阿里人的精气神。\<\/p\> " +
                "\<p\>而蚂蚁的同学们还会参加代表信任和承诺的手印礼，\<\/p\>" +
                "\<p\>一同体会“融入阿里，三年成人”！\<\/p\>" },

                {"title" : "images/happyHistoryYear5Title.png","pic":"images/happyHistoryYear5.jpg","desc":"" +
                "\<p\>在阿里，满五周年的同学被称为【五年陈】。\<\/p\>" +
                "\<p\>我们因爱而美好，成为阿里文化的传承者，\<\/p\>" +
                "\<p\>内制外化，陈醉他人。\<\/p\> " +
                "\<p\>在五周年时，他们将获得五年陈戒指，\<\/p\>" +
                "\<p\>开启阿里精神的代代传递。\<\/p\> "}
            ]},
            "YearMeeting":{"title":"年会","list":[
                {"title":"images/happyYearPartyTitle1.png","pic":"images/happyYearPartyImg1.jpg","desc":"" +
                "\<p\>年会是所有蚂蚁小伙伴们期待的盛会，\<\/p\>" +
                "\<p\>大家从全球各地汇聚到一起，\<\/p\>" +
                "\<p\>欢歌笑语中感受蚂蚁的成长，凝聚的力量！\<\/p\>" +
                "\<p\>汇集能量，整装再出发！\<\/p\>"},

                {"title":"images/happyYearPartyTitle2.png","pic":"images/happyYearPartyImg2.jpg","desc":"" +
                "\<p\>蚂蚁的盛会当然少不了家人的参与，\<\/p\>" +
                "\<p\>蚂蚁的爸爸妈妈们可不只是安静的观众哦!\<\/p\>" +
                "\<p\>他们瞒着孩子们悄悄排练，\<\/p\>" +
                "\<p\>年会当晚“惊现”舞台，\<\/p\>" +
                "\<p\>活力四射的表演给了所有人一个惊喜！\<\/p\>"},

                {"title":"images/happyYearPartyTitle3.png","pic":"images/happyYearPartyImg3.jpg","desc":"" +
                "\<p\>高管秀也是年会中重要的一个环节，\<\/p\>" +
                "\<p\>LUCY姐姐终于圆了一个”地主婆”的梦，\<\/p\>" +
                "\<p\>满足同学们的各种梦想，\<\/p\>" +
                "\<p\>同学们在台下也是笑到内伤。 \<\/p\>"},
            ]},

            "InviteMa":{"title":"约MA","list":[
                {"title" : "images/happyInviteMaTitle.png","pic":"images/happyInviteMaImg.jpg","desc":"" +
                "\<p\>Open Day, 高管有约！\<\/p\>" +
                "\<p\>这里有同学们最想见的带头大哥大姐与大家近距离互动，\<\/p\>" +
                "\<p\>业务大图，行业动向，\<\/p\>" +
                "\<p\>只要同学敢问，没有得不到的答案！\<\/p\>"}
            ]},

            "LoveMa":{"title":"爱MA","list":[
                {"title" : "images/happyLoveMaTitle.png","pic":"images/happyLoveMaImg.jpg","desc":"" +
                "\<p\>爱ma单身趴，蚂蚁单身汪的大福利！\<\/p\>" +
                "\<p\>公司的漂亮妹纸和帅气欧巴全部在这里集齐，\<\/p\>" +
                "\<p\>就看你们之间是否来电啦！\<\/p\>" +
                "\<p\>我们为了大家尽早脱单也是操碎了心！\<\/p\>"}
            ]},

            "FightingMa":{"title":"Fighting Ma","list":[
                {"title" : "images/happyFightingMaTitle.png","pic":"images/happyFightingMaImg.jpg","desc":"" +
                "\<p\>Fighting Ma是通报各战场战绩的线下活动，\<\/p\>" +
                "\<p\>让各业务线的同学都能知道兄弟团队业务的重要进展和突破。\<\/p\>" +
                "\<p\>纪念每一次战绩的手印版都是萌萌哒蚂蚁头造型，\<\/p\>" +
                "\<p\>项目团队的小伙伴们都会按上象征责任和承诺的手印，\<\/p\>" +
                "\<p\>纪念所有人共同奋斗的成果。\<\/p\>"}
            ]},

            "SuperMa":{"title":"Supper Ma","list":[
                {"title" : "images/happySuperMaTitle.png","pic":"images/happySuperMaImg.jpg","desc":"" +
                "\<p\>Super Ma是蚂蚁金服的公司年度大奖， \<\/p\>" +
                "\<p\>有蚂蚁上数奖（数据），一蚂当先奖（客户第一），\<\/p\>" +
                "\<p\>蚂蚁奇兵奖（创新），CEO大奖…\<\/p\>" +
                "\<p\>每一位在平凡岗位上努力付出的蚂蚁同学都有机会获奖！\<\/p\>"}
            ]},

            "RunningMa":{"title":"Running Ma","list":[
                { "title" : "images/happyRunningMaTitle5.png","pic":"images/happyRunningMaImg5.jpg","desc":"" +
                "\<p\>健康生活，快乐工作！\<\/p\>" +
                "\<p\>我们的运动会有各种花样百出的运动项目，\<\/p\>" +
                "\<p\>鼓励同学们多多锻炼，拥有棒棒的小体格儿！\<\/p\>"},

                {"title" : "images/happyRunningMaTitle3.png","pic":"images/happyRunningMaImg3.jpg","desc":"" +
                "\<p\>赛事风，献给热爱足球的你！\<\/p\>" +
                "\<p\>每年的足球联赛，蚂蚁同学代表各自BG出战，\<\/p\>" +
                "\<p\>大家不但工作上并肩作战，更是赛场上叱诧风云的队友！\<\/p\>"},

                {"title" : "images/happyRunningMaTitle2.png","pic":"images/happyRunningMaImg2.jpg","desc":"" +
                "\<p\>爬梯，只需几分钟便可以完成的碎片化运动！\<\/p\>" +
                "\<p\>在不同的节日，召唤团队小伙伴们一起来爬梯庆祝，\<\/p\>" +
                "\<p\>这是蚂蚁特有的运动Party！UP UP UP !步步登高！ \<\/p\>"},

                {"title" : "images/happyRunningMaTitle1.png","pic":"images/happyRunningMaImg1.jpg","desc":"" +
                "\<p\>为什么他们手里抱着斑马爬梯？\<\/p\>" +
                "\<p\>因为这是我们为技术GG们专门策划的,\<\/p\>" +
                "\<p\>“带（代）马（码）奔腾”专场！\<\/p\>"},

                {"title" : "images/happyRunningMaTitle4.png","pic":"images/happyRunningMaImg4.jpg","desc":"" +
                "\<p\>这是万圣节专场。这种挑战胆量的爬梯，你敢来吗？\<\/p\>"},

                {"title" : "images/happyRunningMaTitle6.png","pic":"images/happyRunningMaImg6.jpg","desc":"" +
                "\<p\>这是和公益结合的圣诞节爬梯！\<\/p\>" +
                "\<p\>全国各地蚂蚁小伙伴为爱爬梯，积累10w级爬梯步数，\<\/p\>" +
                "\<p\>兑换奖金给山区的孩子购买运动器械，\<\/p\>" +
                "\<p\>并由武汉的蚂蚁团队送到学校，\<\/p\>" +
                "\<p\>亲手为孩子们搭建出一个梦想中的操场。\<\/p\>"}
            ]},

            "HighMa":{"title":"High Ma","list":[
                {"title" : "images/happyHighMaTitle1.png","pic":"images/happyHighMaImg1.jpg","desc":"" +
                "\<p\>我们还是一群多才多艺的小蚂蚁\<\/p\>" +
                "\<p\>诗词歌赋、琴棋书画样样精通！\<\/p\>" +
                "\<p\>无论你是运动达人还是摄影高手，\<\/p\>" +
                "\<p\>你是追梦少年还是书法大师，\<\/p\>" +
                "\<p\>在这里都能找到臭味相投的小伙伴，\<\/p\>" +
                "\<p\>快乐工作之余，一起活色生香HIGH 起来！\<\/p\>"},
                {"title" : "images/happyHighMaTitle2.png","pic":"images/happyHighMaImg2.jpg","desc":"" +
                "\<p\>这是我们颜值最高的帮派！\<\/p\>"},
                {"title" : "images/happyHighMaTitle3.png","pic":"images/happyHighMaImg3.jpg","desc":"" +
                "\<p\>这是最能发现美的帮派，经常和舞蹈帮联谊，\<\/p\>" +
                "\<p\> 你们懂的…\<\/p\>"},
                {"title" : "images/happyHighMaTitle4.png","pic":"images/happyHighMaImg4.jpg","desc":"" +
                "\<p\>这是我们穿的最少的兴趣帮…\<\/p\>"},
            ]},

            "AliDay":{"title":"阿里日","list":[
                {"title" : "images/happyAlidayTitle1.png","pic":"images/happyAlidayImg1.jpg","desc":"" +
                "\<p\>对于阿里巴巴而言，每年当中有一天非常重要！重要到\<\/p\>" +
                "\<p\>这一天我们直接以“阿里日”命名。这一天就是5月10日。\<\/p\>" +
                "\<p\>它源于2003年的非典时期，一名同事被疑似为非典病人，\<\/p\>" +
                "\<p\>在杭四百多名员工以及近千名他们的家人均被隔离。\<\/p\>" +
                "\<p\>而在这期间，在亲人的支持下，阿里的业务仍然节节攀升。\<\/p\>" +
                "\<p\>为感谢所有阿里的家人，我们将5月10定为阿里日。\<\/p\>" +
                "\<p\>在这一天，我们会邀请阿里小伙伴的家人来到办公的地方，\<\/p\>" +
                "\<p\>一起感受属于阿里独特的味道。\<\/p\>"},

                {"title" : "images/happyAlidayTitle3.png","pic":"images/happyAlidayImg3.jpg","desc":"" +
                "\<p\>蚂蚁的第二代们，\<\/p\>" +
                "\<p\>这一天会来到蚂蚁金服办公楼游戏玩耍，\<\/p\>" +
                "\<p\>看看爸爸妈妈上班都在忙点啥？\<\/p\>" +
                "\<p\>这一天到处是叽叽喳喳的小朋友，\<\/p\>" +
                "\<p\>整幢大楼是他们的游乐场。\<\/p\>"},

                {"title" : "images/happyAlidayTitle2.png","pic":"images/happyAlidayImg2.jpg","desc":"" +
                "\<p\>这一天，蚂蚁的长辈们也来到公司，\<\/p\>" +
                "\<p\>公司的高管也会在这一天和叔叔阿姨们亲密互动，\<\/p\>" +
                "\<p\>回答各种诸如“公司未来的发展前景”以及\<\/p\>" +
                "\<p\>“我儿子怎么才能找到对象”的问题。\<\/p\>"},

                {"title" : "images/happyAlidayTitle6.png","pic":"images/happyAlidayImg6.jpg","desc":"" +
                "\<p\>在阿里日这个美好的日子，\<\/p\>" +
                "\<p\>这一年内领证的新人们会从天南地北一起回到杭州，\<\/p\>" +
                "\<p\>参加盛大的集体婚礼。\<\/p\>" +
                "\<p\>马云老师会作为证婚人，\<\/p\>" +
                "\<p\>跟所有阿里人一起，见证他们的爱情。\<\/p\>"},

                {"title" : "images/happyAlidayTitle4.png","pic":"images/happyAlidayImg4.jpg","desc":"" +
                "\<p\>让我们来听一些经典证婚词——“好好地爱你的那一位，\<\/p\>" +
                "\<p\>那一方特别重要，花了那么多时间，这么多精力，\<\/p\>" +
                "\<p\>把她追到手，千万不能轻易放掉，要让她幸福，\<\/p\>" +
                "\<p\>让她有期待，对未来有希望。如果她要买东西，\<\/p\>" +
                "\<p\>你只有一个字回答：买！两个字：买买！\<\/p\>" +
                "\<p\>三个字：买买买！”\<\/p\>"},

                {"title" : "images/happyAlidayTitle5.png","pic":"images/happyAlidayImg5.jpg","desc":"" +
                "\<p\>阿里集体婚礼结束后，\<\/p\>" +
                "\<p\>蚂蚁的新人们会由他们的主管亲自“接亲”回娘家，\<\/p\>" +
                "\<p\>接受身边同学们的祝福和调戏~\<\/p\>"},
            ]},
        }, "init": function() {
            var c = getURLParameter("happyDetail");
            if(!happy.data[c]){
                c="year"
            }
            var data = happy.data[c];
            happy._html = "";
            $(data.list).each(function(i,v) {
                happy.temp = $("#showListTemp").val();
                happy.temp = happy.temp.replace("{title}",v.title);
                happy.temp = happy.temp.replace("{pic}",v.pic);
                happy.temp = happy.temp.replace("{desc}",v.desc);
                //happy.temp = (i == $(data.list).length-1) ? happy.temp.replace("{btnShow}","display:block") : happy.temp.replace("{btnShow}","display:none");
                happy.temp = (i == $(data.list).length-1) ? happy.temp.replace("{showBtnPadding}","") : happy.temp.replace("{showBtnPadding}","padding-bottom:0;");
                happy._html += happy.temp
            });
            $("#showList").append(happy._html);

            var happySlider = $('.happy-banner').unslider({
                autoplay:false,
                arrows:true,
                loop:false,
                speed: 500,               //  The speed to animate each slide (in milliseconds)
                delay: 100,              //  The delay between slide animations (in milliseconds)
                complete: function() {
                    $(".arrows .arrow").fadeIn();
                    $(".btn-happy-back").fadeOut()
                    if(happySliderData.li.length == happySliderData.i+1 ){
                        $(".arrows .next").fadeOut();
                        $(".btn-happy-back").fadeIn()
                    }
                    if(happySliderData.i == 0){
                        $(".arrows .prev").fadeOut()
                    }

                    $(".h-txt-module .desc").scrollTop(0)
                },  //  A function that gets called after every slide animation
                keys: false,               //  Enable keyboard (left, right) arrow shortcuts
                dots: false,               //  Display dot navigation
                fluid: true              //  Support responsive design. May break non-responsive designs
            });
            var happySliderData = happySlider.data('unslider');
            console.log(happySliderData)

            document.title = "快乐蚂蚁 | " + data.title;
            $(".arrows .prev").hide();
            if(happySliderData.li.length == happySliderData.i+1 ){
                $(".arrows .next").hide();
                $(".btn-happy-back").fadeIn()
            }

            $(".happy-content").css({
                "height":$(window).height()
            });
            $(".happy-inner").css({
                "min-height":$(window).height()-106
            });
            $(".btn-happy-back").on("click", function() {
                window.location.href ="happy.html";
            })
        }
    }

    if(getURLParameter("aboutDetail")){
        about.init()
    }

    if(getURLParameter("happyDetail")){
        happy.init()
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