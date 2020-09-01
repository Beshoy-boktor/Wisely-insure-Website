var myApp = angular.module('myApp',['ngRoute','ngAnimate']);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl : "home.html",
        controller : "myCtrl"
    })

    .when("/home",{
        templateUrl : "home.html",
        controller : "myCtrl"
    })
    
	.when("/trywisely",{
        templateUrl : "trywisely.html",
        controller : "trybtn"
    })

    .when("/form",{
        templateUrl : "form.html",
        controller : "other"
    })

    .when("/table1",{
        templateUrl : "table1.html",
        controller : "other"
    })

    .when("/table2",{
        templateUrl : "table2.html",
        controller : "other"
    })
    
    .when("/companies",{
        templateUrl : "companies.html",
        controller : "other"
    })

    .when("/directory",{
        templateUrl : "directory.html",
        controller : "other"
    })

    .when("/contact",{
        templateUrl : "contact.html",
        controller : "other"
    })

    .when("/contact-form",{
        templateUrl : "contact-form.html",
        controller : "other"
    })

    .when("/compareplans",{
        templateUrl : "compareplans.html",
        controller : "other"
    })

    .when("/getQuote",{
        templateUrl : "getQuote.html",
        controller : "other"
    })

    
    /******************min-height-of-pages******************/
    var x = $(window).height();
    var y = $(".navbar-expand-lg").css("height");
    var z = $(".rights").css("height");
    y = parseInt(y);
    z = parseInt(z);
    var o = z + y;
    var min = x - o;
    min = min + "px";
    $("main").css("min-height", min);

    
});
myApp.controller("myCtrl",function(){
    $(".hidethis").fadeIn(500);
    $(".footer-line").fadeIn(500);
    
    /********************scroll-btn*******************/
    $(".home-scroll").click(function(){
        var x = $(".navbar-expand-lg").css("height");
        var y = $(".first-con").css("height");
        x = parseInt(x);
        y = parseInt(y);
        var z = x + y + 80;
        var pos = 0;
        setInterval(function(){
            
            if(pos >= z){
                clearInterval;
            }else{
                $(window).scrollTop(pos);
                pos+=30;
            }
        }, 15);
    });
    var x = $(window).height();
    var y = $(".navbar-expand-lg").css("height");
    y = parseInt(y);
    var l = x - y ;
    $(".home-sec").css("min-height", l);
});


myApp.controller("trybtn",function(){
    $(".hidethis").fadeOut(500);
    $(".footer-line").fadeOut(0);
});


myApp.controller("other",function(){
    $(".hidethis").fadeOut();
    $(".footer-line").fadeIn(500);

    /******************Accordion*****************/
    $(".accordion h3").click(function(){
        $(this).siblings("p").slideToggle(550);
        $(this).parents().siblings().children("p").slideUp(550);
    });

    $(".pop-bg-2").click(function(){
        $(".pop-bg").fadeOut(300)
    });
    
    $(".pop-content a").click(function(){
        $(".pop-bg").fadeOut(300)
    });

    $(".pop-up-btn").click(function(){
        $(".pop-bg").fadeIn(300).css("display","flex");
    });
});
