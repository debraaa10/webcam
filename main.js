function create_card(a, b) {
    var c = girls[a][b],
        d = "photos/" + ("t" == a ? "n" : a),
        e = "<div class='profileWrapper animated orig' style='z-index:" + (5 - b) + "'> <div class='quest-item'><span>" + c.question + "</span></div> <div id='profilePix'>   <a class='viewP'><img src='" + d + "/" + c.img + "'></a>   <div id=info><h2>" + c.name + ", " + c.age + "</h2><span>" + c.photos + "<img src='source/camera.png'></span></div> </div> <div id='desc'>   <div id='status'><img src='source/status.png'> Single</div><div id='geo'><img src='source/pin.png'> Near you</div> </div></div>";
    return e
}

function create_gen(a) {
    var b = girls[a],
        c = "";
    for (i = 0; i < b.length; i++) c += create_card(a, i);
    $("#Profiles").html(c)
}

function show_sham(a) {
    var b = $("#Profiles .orig img")[0];
    $("#pPix").css({
        background: "url(" + b.src + ")",
        "background-size": "contain"
    }), $("#match").delay(a).fadeIn(400)
}

function show_more(a) {
    var b = $("#Profiles .orig img")[0];
    $("#pPix1").css({
        background: "url(" + b.src + ")",
        "background-size": "contain"
    }), $("#viewProfile").delay(a).fadeIn(400)
}

function term_pop(a, b) {
    b || (b = "width=750, height=600,scrollbars=1"), w = window.open(a, "TERMS", b)
}
setTimeout(function() {
    window.scrollTo(0, 1)
}, 1e3);
var girls = {
    t: [{
        question: "Would you like to drink alcohol with your new girlfriend?",
        name: "Emily",
        age: 21,
        photos: 4,
        img: "1.jpg"
    }, {
        question: "Do you like to start conversation on your own?",
        name: "Juile",
        age: 23,
        photos: 3,
        img: "2.jpg"
    }, {
        question: "Do you like St.Valentine’s day?",
        name: "Samantha",
        age: 19,
        photos: 2,
        img: "3.jpg"
    }, {
        question: "Do you like a bit overweight girls?",
        name: "Katy",
        age: 23,
        photos: 5,
        img: "4.jpg"
    }, {
        question: "Do you like romantic girls?",
        name: "Katy",
        age: 23,
        photos: 5,
        img: "5.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)6",
        name: "Xiu",
        age: 23,
        photos: 5,
        img: "6.jpg"
    }],
    a: [{
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Sanako",
        age: 21,
        photos: 4,
        img: "1.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Sato",
        age: 23,
        photos: 3,
        img: "2.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Ushi",
        age: 19,
        photos: 2,
        img: "3.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Vanita",
        age: 23,
        photos: 5,
        img: "4.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Xiu",
        age: 23,
        photos: 5,
        img: "5.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Jacy",
        age: 23,
        photos: 5,
        img: "6.jpg"
    }],
    m: [{
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Abigail",
        age: 21,
        photos: 4,
        img: "1.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Holy",
        age: 23,
        photos: 3,
        img: "2.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Amber",
        age: 19,
        photos: 2,
        img: "3.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Breea",
        age: 23,
        photos: 5,
        img: "4.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Jacy",
        age: 23,
        photos: 5,
        img: "5.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Nancy",
        age: 23,
        photos: 5,
        img: "6.jpg"
    }],
    l: [{
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Lucy",
        age: 21,
        photos: 4,
        img: "1.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Maria",
        age: 23,
        photos: 3,
        img: "2.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Alice",
        age: 19,
        photos: 2,
        img: "3.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Felicia",
        age: 23,
        photos: 5,
        img: "4.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Nancy",
        age: 23,
        photos: 5,
        img: "5.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Katy",
        age: 23,
        photos: 5,
        img: "6.jpg"
    }],
    b: [{
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Genigwa",
        age: 29,
        photos: 1,
        img: "1.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Genene",
        age: 30,
        photos: 2,
        img: "2.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Tisha",
        age: 22,
        photos: 5,
        img: "3.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Katy",
        age: 23,
        photos: 5,
        img: "4.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Katy",
        age: 23,
        photos: 5,
        img: "5.jpg"
    }, {
        question: "Тут твой вопрос, пиши что хочешь, но не больше чем в 3 строки)",
        name: "Nancy",
        age: 23,
        photos: 5,
        img: "6.jpg"
    }]
};
! function() {
    $("#dislike").click(function() {
        var a = $(".profileWrapper.orig").first();

        1 == a.css("zIndex") && show_more(50), a.removeClass("orig").addClass("rotateOutUpLeft dislike")
    }), $("#like").click(function() {
        var a = $(".profileWrapper.orig").first();
        // 1 == a.css("zIndex") ? (show_more(800), a.removeClass("orig").addClass("rotateOutUpRight like")) : (show_sham(800), $(".profileWrapper.orig").first().removeClass("orig").addClass("rotateOutUpRight like"))
        1 == a.css("zIndex") && show_more(50), a.removeClass("orig").addClass("rotateOutUpRight like")
    }), $(".viewP").click(function() {
        $("#viewProfile").delay(100).fadeIn(200)
    }), $("#PlayBtn").click(function() {
        $("#match").fadeOut(100)
    }), $("#genrBtn").click(function() {
        $(".st-pusher").addClass("g2r")
    }), $("#chatBtn").click(function() {
        show_more(5)
    }), $("nav li").click(function() {
        create_gen($(this).attr("rel")), $(".st-pusher").removeClass("g2r")
    }), create_gen("t")
}();


    $(".out").click(function () {
        window.onbeforeunload = null;
        document.location = $(".out").attr("href") + "?" + window.location.href.slice(window.location.href.indexOf('?') + 1);
        return false;
    });