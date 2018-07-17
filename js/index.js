$(function(){

	//头部导航收起
	
	$(window).scroll(function(){
		if($(this).scrollTop()>129){
			 $(".header-top").addClass("header-margin");
			 $(".header-bottom").addClass("header-go");

			 $(".header-bottom ul li").find(".a-a").css("padding","0px 22px");
			 $(".header-bottom ul .con").find(".a-a").css({"padding-left":"45px"});
			 $(".header-bottom ul .a-l").css({"right":"51px","opacity":"1"}).find(".a-a").css("padding-left","45px");
		}else{
			$(".header-top").removeClass("header-margin");
			$(".header-bottom").removeClass("header-go");

			$(".header-bottom ul li").find(".a-a").css("padding","0px 32px");
			$(".header-bottom ul .con").find(".a-a").css({"padding":"0px","padding-left":"45px"});
			$(".header-bottom ul .a-l").css({"right":"-120px","opacity":"0"}).find(".a-a").css("padding-left","45px");
		}
	});
	//导航下拉菜单
	var head = $(".header-bottom-center .rli")
	$(head).hover(function(){
		$(this).find(".head-div,.hoverbox").stop().fadeIn(1000);
	},function(){
		$(this).find(".head-div,.hoverbox").stop().fadeOut(1000);
		}
	)

	//第一个图片轮播
	var index = 0;
	$(".ul-banner").width($(".ul-banner").width()*2);
	$(".ul-banner").append($(".ul-banner").html());

	function tu(){
		index++;
		move();
	}

	function move(){
		$(".ul-banner").animate({"margin-left":"-"+1920*index+"px"},1000,function(){
			if(index == 3){
				index = 0;
				$(".ul-banner").css({"margin-left":"0px"})
			}
		})

	}

	var banner = setInterval(tu,3000)

	$('.banner').hover(function(){
		clearInterval(banner);
	},function(){
		banner = setInterval(tu,3000);	
	})

	$(".banner #left").click(function(){
		index = index-1;
		if(index == -1){
			index = 2;
			$(".ul-banner").css({"margin-left":"-5760px"})
		}
		move();
			

	})

	$(".banner #right").click(function(){
		index = index+1;
		move();
	})


	//热装小区选项卡
	var a ;
	var leftTwo = $(".left-two li");
	var leftThree = $(".left-three li");
	leftTwo.mouseover(function(){
		a = leftTwo.index(this);
		leftTwo.eq(a).addClass("on").siblings().removeClass("on");
		leftThree.eq(a).fadeIn(600).siblings().fadeOut(300);
	})

	//设计团队选项卡
	var b ;
	var rightTwo = $(".right-two1 li");
	var rightThree = $(".right-three1 li");
	rightThree.mouseover(function(){
		b = rightThree.index(this);
		rightThree.eq(b).addClass("on").siblings().removeClass("on");
		rightTwo.eq(b).fadeIn(300).siblings().fadeOut(300);
	})

	//友情链接选项卡
	var c ;
	var friendTop = $(".friend-top li");
	var friendBottom = $(".friend-bottom li");
	friendTop.click(function(){
		c = friendTop.index(this);
		friendTop.eq(c).addClass("one").siblings().removeClass("one");
		friendBottom.eq(c).fadeIn(300).siblings().fadeOut(300);
	})

	//大图图片轮播
	var x = 0;
	var y = 0;
	var z = 0;
	$(".ul-img").width($(".ul-img").width()*2);
	$(".ul-img").append($(".ul-img").html());

	function img(){
		x++;
		run();
	}
	// //大图
	// function run(){
	// 	$(".ul-word").animate({"margin-left":"-"+(254*x+254)+"px"},700);
	// 	// $(".ul-word").animate({"margin-left":"-"+(254*x+254)+"px"},700,function(){
	// 	// 		if(x == 5){
	// 	// 			x = 0;
	// 	// 			$(".ul-word").css({"margin-left":"-254px"})
	// 	// 		}
	// 	// 	}
	// 	// )
	// 	$(".ul-img").animate({"margin-left":"-"+(1210*x+1145)+"px"},700,function(){
	// 			if(x == 5){
	// 				x = 0;
	// 				$(".ul-img").css({"margin-left":"-1145px"})
	// 				$(".ul-word").css({"margin-left":"-254px"})
	// 			}
	// 		}
	// 	)
	// 	if(x == 5){
	// 		x = 0;
	// 	}
	// 	var hd = $(".b-pic .hd ul li");
	// 	hd.eq(x).addClass("on").siblings().removeClass("on");
	// 	var pageSpan  = $(".b-pic .pageState span");
	// 	var num = ["01","02","03","04","05"]
	// 	pageSpan.html(num[x]);
	
	// }
	// //文字
	// $(".ul-word").width($(".ul-word").width()*2);
	// $(".ul-word").append($(".ul-word").html());
	// // function word(){
	// // 	$(".ul-word").animate({"margin-left":"-"+(254*x+254)+"px"},700,function(){
	// // 	// $(".ul-word").animate({"margin-left":"-"+254*y+"px"},700,function(){
	// // 			// if(y == 5){
	// // 			// 	y = 0;
	// // 			// 	$(".ul-word").css({"margin-left":"0px"})
	// // 			// }
	// // 			if(x == 5){
	// // 				x = 0;
	// // 				$(".ul-word").css({"margin-left":"-254px"})
	// // 			}
	// // 		}
	// // 	)
	// // }
	// //进度
	// function progress(){
	// 	var hd = $(".b-pic .hd ul li");
	// 	hd.eq(x).addClass("on").siblings().removeClass("on");
	// }
	// //01-05
	// function nub(){
	// 	// if(x == 5){
	// 	// 	x = 0;
	// 	// }
	// 	var pageSpan  = $(".b-pic .pageState span");
	// 	var num = ["01","02","03","04","05"]
	// 	pageSpan.html(num[x]);
	// }
	// // var ban = setInterval(img,2000)

	// // $('.design-banner').hover(function(){
	// // 	clearInterval(ban);
	// // },function(){
	// // 	ban = setInterval(img,2000);	
	// // })

	// $(".design-banner #prev").click(function(){
	// 	x = x-1;
	// 	if(x == -1){
	// 		x = 4;
	// 		$(".ul-img").css({"margin-left":"-7095px"})
	// 		$(".ul-word").css({"margin-left":"-2540px"})
	// 	}
	// 	run();

	// })

	// $(".design-banner #next").click(function(){
	// 	x = x+1;
	// 	// y = y+1;
	// 	// word();
	// 	run();

	// })
	// 
	//大图
	function run(){
		//图片
		$(".ul-img").animate({"margin-left":"-"+(1210*x+1145)+"px"},600,function(){
				if(x == 5){
					x = 0;
					$(".ul-img").css({"margin-left":"-1145px"})
				}
			}
		)
		//文字
		$(".ul-word").animate({"margin-left":"-"+254*y+"px"},600,function(){
				if(y == 5){
					y = 0;
					$(".ul-word").css({"margin-left":"0px"})
				}
			}
		)
		if(z == 5){
			z = 0;
		}
		if(z == -1){
			z = 4;
		}
		//进度	
		var hd = $(".b-pic .hd ul li");
		hd.eq(z).addClass("on").siblings().removeClass("on");
		//01-05
		var pageSpan  = $(".b-pic .pageState span");
		var num = ["01","02","03","04","05"]
		pageSpan.html(num[z]);
	
	}
	//文字
	$(".ul-word").width($(".ul-word").width()*2);
	$(".ul-word").append($(".ul-word").html());

	//进度
	function progress(){
		if(y == 5){
			y = 0;
		}
		var hd = $(".b-pic .hd ul li");
		hd.eq(y).addClass("on").siblings().removeClass("on");
	}
	//01-05
	function nub(){
		if(z == 5){
			z = 0;
		}
		var pageSpan  = $(".b-pic .pageState span");
		var num = ["01","02","03","04","05"]
		pageSpan.html(num[z]);
	}
	// var ban = setInterval(img,2000)

	// $('.design-banner').hover(function(){
	// 	clearInterval(ban);
	// },function(){
	// 	ban = setInterval(img,2000);	
	// })

	$(".design-banner #prev,.b-pic .prev").click(function(){
		x = x-1;
		y = y-1;
		z = z-1;
		if(x == -1){
			x = 4;
			$(".ul-img").css({"margin-left":"-7095px"})
		}
		if(y == -1){
			y = 4;
			$(".ul-word").css({"margin-left":"-1270px"})
		}
		run();

	})

	$(".design-banner #next,.b-pic .next").click(function(){
		x = x+1;
		y = y+1;
		z = z+1;
		run();

	})

	$(".hd ul li").click(function(){
		x = $('.ul-img li').index(this);
		y = $('.ul-word li').index(this);
		z = $('.b-pic .hd ul li').index(this);
		x=y=z;
		run();
	})

	//广告
	//左边上部分
	$(".close").click(function(){
		$("#left-one").hide();
	})
	//左边下部分
	$("#left-two .left-two-close").click(function(){
		$("#left-two").hide();
		$("#left-three").show();
	})
	$("#left-three").click(function(){
		$(this).hide();
		$("#left-two").show();
	})
	//右边上部分
	$("#right-one").click(function(){
		$(this).hide();
		$("#right-two").show(300);
	})
	$("#right-two .right-a").click(function(){
		$("#right-two").hide(300);
		$("#right-one").show();
	})
	//右边下部分
	var tabl = $("#tab-list1 ul li");
	var tab;
	tabl.click(function(){
		tab = $("#tab-list1 ul li").index(this);
		tabl.eq(tab).addClass("backf").siblings().removeClass("backf");
		$(".tab-con .con").eq(tab).show().siblings().hide();
	})

	var buttonOne = $(".right-three-button .button1");
	var buttonTwo = $(".right-three-button .button2");
	var buttonFive = $(".right-three-button .button5");
	buttonOne.click(function(){
		$(".right-three").hide();
		$(".water").hide();
	})
	buttonTwo.click(function(){
		$(".right-three").hide();
		$(".water").show();
	})
	buttonFive.click(function(){
		$(".right-three").toggleClass("mmove");
	})

	$(".water").click(function(){
		$(".right-three").show();
	})
	//右边导航条
	$(".nav-right .gotop").click(function(){
		$("html,body").animate({"scrollTop":"0"},500);
	})

})