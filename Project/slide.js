var models = {
    "name": ["Audi e-tron", "Audi A1", "Audi A4", "Audi A5", "Audi A6", "Audi A7", "Audi A8", "Audi Q2", "Audi Q3", "Audi Q5", "Audi Q7", "Audi Q8", "Audi TT"],
    "car": [
        [
            ["e-tron", "Image+Site/first/data/model/1.1.jpeg", "etron.html"], ["e-tron Sportback", "Image+Site/first/data/model/1.2.jpeg", "etron_sport.html"]
        ],
        [
            ["A1 Sportback", "Image+Site/first/data/model/2.1.jpeg", "A1_Sportback.html"]
        ],
        [
            ["A4 sedan", "Image+Site/first/data/model/3.1.jpeg", "a4_sedan.html"], ["A4 Avant", "Image+Site/first/data/model/3.2.jpeg", "a4_avant.html"], ["RS 4 Avant", "Image+Site/first/data/model/3.3.jpeg", "rs_a4.html"]
        ],
        [
            ["A5 Coupé", "Image+Site/first/data/model/4.1.jpeg", "a5coupe.html"], ["A5 Sportback", "Image+Site/first/data/model/4.2.jpeg", "a5_sportback.html"],
        ],
        [
            ["A6 Sedan", "Image+Site/first/data/model/5.1.jpeg", "a6_sedan.html"], ["A6 Avant", "Image+Site/first/data/model/5.2.jpeg", "a6_avant.html"],
        ],
        [
            ["A7 Sportback", "Image+Site/first/data/model/6.1.jpeg", "a7.html"]
        ],
        [
            ["A8L", "Image+Site/first/data/model/7.1.jpeg", "a8.html"]
        ],
        [
            ["Q2", "Image+Site/first/data/model/8.1.jpeg", "q2.html"]
        ],
        [
            ["Q3", "Image+Site/first/data/model/9.1.jpeg", "Q3.html"], ["Q3 Sportback", "Image+Site/first/data/model/9.2.jpeg", "Q3_Sportback.html"]
        ],
        [
            ["Q5", "Image+Site/first/data/model/10.1.jpeg", "q5.html"]
        ],
        [
            ["Q7", "Image+Site/first/data/model/11.1.jpeg", "q7.html"]
        ],
        [
            ["Q8", "Image+Site/first/data/model/12.1.jpeg", "q8.html"], ["RS Q8", "Image+Site/first/data/model/12.2.jpeg", "rs_q8.html"]
        ],
        [
            ["TT Coupé", "Image+Site/first/data/model/13.1.jpeg", "tt_coupe.html"], ["TT Roadster", "Image+Site/first/data/model/13.2.jpeg", "tt_roadster.html"], ["TT RS Coupé", "Image+Site/first/data/model/13.3.jpeg", "tt_rs_coupe.html"]
        ],
    ]
}

var bs = {
    "name": ["SUV", "Sportback", "Sedan", "Avant", "Coupé", "Sport", "Roadster"],
    "car": [
        [
            ["e-tron", "Image+Site/first/data/model/1.1.jpeg", "etron.html"],["Q2", "Image+Site/first/data/model/8.1.jpeg", "q2.html"], ["Q3", "Image+Site/first/data/model/9.1.jpeg", "Q3.html"], ["Q3 Sportback", "Image+Site/first/data/model/9.2.jpeg", "Q3_Sportback"], ["Q5", "Image+Site/first/data/model/10.1.jpeg", "q5.html"], ["Q7", "Image+Site/first/data/model/11.1.jpeg", "q7.html"], ["Q8", "Image+Site/first/data/model/12.1.jpeg", "q8.html"], ["RS Q8", "Image+Site/first/data/model/12.2.jpeg", "rs_q8.html"]
        ],
        [
            ["e-tron Sportback", "Image+Site/first/data/model/1.2.jpeg", "etron-sport.html"], ["A1 Sportback", "Image+Site/first/data/model/2.1.jpeg", "A1_Sportback.html"],  ["A5 Coupé", "Image+Site/first/data/model/4.1.jpeg", "a5_coupe.html"], ["Q7", "Image+Site/first/data/model/11.1.jpeg", "q7.html"]
        ],
        [
            ["A4 sedan", "Image+Site/first/data/model/3.1.jpeg", "a4_sedan.html"],  ["A6 Sedan", "Image+Site/first/data/model/5.1.jpeg", "a6_sedan.html"], ["A8L", "Image+Site/first/data/model/7.1.jpeg", "a8.html"]
        ],
        [
            ["A4 Avant", "Image+Site/first/data/model/3.2.jpeg", "a4_avant.html"], ["RS 4 Avant", "Image+Site/first/data/model/3.3.jpeg", "rs_a4.html.html"], ["A6 Avant", "Image+Site/first/data/model/5.2.jpeg", "a6_avant.html"]
        ],
        [
            ["A5 Coupé", "Image+Site/first/data/model/4.1.jpeg", "a5coupe.html"], ["TT Coupé", "Image+Site/first/data/model/13.1.jpeg", "tt_coupe.html"], ["TT RS Coupé", "Image+Site/first/data/model/13.3.jpeg", "tt_rs_coupe.html"]
        ],
        [
            ["TT Coupé", "Image+Site/first/data/model/13.1.jpeg", "tt_coupe.html"]
        ],
        [
            ["TT Roadster", "Image+Site/first/data/model/13.2.jpeg", "tt_roadster.html"]
        ]
    ]
}

var link = [
    "etron.html",
    "etron_sport.html",
    "A1_Sportback.html",
    "a4_sedan.html",
    "a4_avant.html",
    "rs_a4.html",
    "a5coupe.html",
    "a5_sportback.html",
    "a6_avant.html",
    "a6_sedan.html",
    "a7.html",
    "a8.html",
    "q2.html",
    "Q3.html",
    "Q3_Sportback.html",
    "q5.html",
    "q7.html",
    "q8.html",
    "rs_q8.html",
    "tt_coupe.html",
    "tt_roadster.html",
    "tt_rs_coupe.html"
]

 

/*loop for car*/
var eCar1 = document.getElementsByClassName("glider1")[0];
var eCar2 = document.getElementsByClassName("glider2")[0];
var eData1 = document.getElementById("car1");
var eData2 = document.getElementById("car2");
//models
for (let i = 1; i <= 13; i++) {
    eCar1.innerHTML +=
        "<a id='car" + i + "' class='mr-2' onclick='cclosing(" + i + ")' data-toggle='collapse' data-target='#cdata" + i + "' aria-controls='cdata" + i + "'\
        ria-expanded='false' data-parent='#slide1'>\
        <img id='cpic"+ i + "' src='./Image+Site/first/2." + i + ".1.png'><p>" + models["name"][i - 1] + "</p></a>";

    eData1.innerHTML +=
        '<div id="cdata' + i + '" class="collapse border-top" data-parent="#slide1">\
        <Button class="btn btn-dark rounded-circle my-4" data-toggle="collapse" data-target="#cdata'+ i + '">X</Button>\
        <h5 class="font-weight-bolder">' + models["name"][i - 1] + '</h5>\
        <div class="set-0 row1 d-flex flex-nowrap justify-content-center mx-auto"></div>\
        </div>';

    var data1 = document.getElementsByClassName("row1")[i - 1];
    for (let j = 0; j < models["car"][i - 1].length; j++) {
        data1.innerHTML +=
            " <a class='w-50' href='"+models["car"][i - 1][j][2]+"'><img class='img-fluid' src='" + models["car"][i - 1][j][1] + "'><p>" + models["car"][i - 1][j][0] + "</p>\
        </a>"
    }
}

//Body style
for (let a = 1; a <= 7; a++) {
    eCar2.innerHTML +=
        "<a id='body" + a + "' class='' onclick='bclosing(" + a + ")' data-toggle='collapse' data-target='#bdata" + a + "' aria-controls='bbody" + a + "'\
    ria-expanded='false' data-parent='#slide2'>\
    <img id='bpic"+ a + "' src='./Image+Site/first/data/body/" + a + ".1.jpeg' alt=''><p>" + bs["name"][a - 1] + "</p></a>";

    eData2.innerHTML +=
        '<div id="bdata' + a + '" class="collapse border-top" data-parent="#slide2">\
        <Button class="btn btn-dark rounded-circle my-4" data-toggle="collapse" data-target="#bdata'+ a + '">X</Button>\
        <h5 class="font-weight-bolder">'+ bs["name"][a - 1] + '</h5>\
        <div class="set-0 row2 d-flex flex-wrap justify-content-center mx-auto"></div>\
        </div>';

    var data2 = document.getElementsByClassName("row2")[a - 1];
    for (let b = 0; b < bs["car"][a-1].length; b++) {
        data2.innerHTML +=
            " <a class='w-50' href='"+bs["car"][a - 1][b][2]+"'><img class='img-fluid' src='" + bs["car"][a - 1][b][1] + "'><p>" + bs["car"][a - 1][b][0] + "</p>\
        </a>"
    }
}

/*closing function*/
function cclosing(i) {
    $("#cdata" + i + "").on("hide.bs.collapse", function () {
        $("#cpic" + i + "").attr('src', './Image+Site/first/2.' + i + '.1.png');
    });
    $("#cdata" + i + "").on("show.bs.collapse", function () {
        $("#cpic" + i + "").attr('src', './Image+Site/first/2.' + i + '.2.png');
    });
}
function bclosing(i) {
    $("#bdata" + i + "").on("hide.bs.collapse", function () {
        $("#bpic" + i + "").attr('src', './Image+Site/first/data/body/' + i + '.1.jpeg');
    });
    $("#bdata" + i + "").on("show.bs.collapse", function () {
        $("#bpic" + i + "").attr('src', './Image+Site/first/data/body/' + i + '.2.jpeg');
    });
}

/*glider function*/
var glider1 = new Glider(document.querySelector('.glider1'), {
    slidesToShow: 6.5,
    slidesToScroll: 6,
    arrows: {
        prev: '.glider-prev1',
        next: '.glider-next1'
    },
});

var glider2 = new Glider(document.querySelector('.glider2'), {
    slidesToShow: 6.5,
    slidesToScroll: 1,
    arrows: {
        prev: '.glider-prev2',
        next: '.glider-next2'
    },
});


document.getElementsByClassName('glider-contain2')[0].classList.add("hide");

/*button click*/
var me = document.getElementById("models");
var be = document.getElementById("body");

me.addEventListener('click', () => {
    if (!be.classList.contains('active')) {
        me.classList.add('active')
    } else {
        be.classList.remove('active')
        me.classList.add('active')
        document.getElementsByClassName('glider-contain1')[0].classList.remove("hide");
        document.getElementsByClassName('glider-contain2')[0].classList.add("hide");
    }
})


be.addEventListener('click', () => {
    if (!me.classList.contains('active')) {
        be.classList.add('active')
    } else {
        me.classList.remove('active')
        be.classList.add('active')
        document.getElementsByClassName('glider-contain2')[0].classList.remove("hide");
        document.getElementsByClassName('glider-contain1')[0].classList.add("hide");
    }
})

