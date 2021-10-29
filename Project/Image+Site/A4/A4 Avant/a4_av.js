new Glider(document.querySelectorAll('.glider')[0], {
  slidesToShow: 1,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

//glider function
window.addEventListener('load', function () {
  new Glider(document.querySelectorAll('.glider')[1], {
    slidesToShow: 7.1,
    slidesToScroll: 7,
    arrows: {
      prev: '.glider-prev_1',
      next: '.glider-next_1'
    },
  });
})
var content = {
  "name": ["The horizontal design language dominates the rear.",
    "Let the Audi A4 Avant take effect.",
    "The Audi A4 Avant makes a thoroughly sporty impression.",
    "The Audi A4 Avant with the optional S line equipment line and optional 19-inch alloy wheels.",
    "The wide and flat Singleframe is bordered by the striking headlights and the side air inlets.",
    "In the Audi A4 Avant, let optional driver assist systems² help you.",
    "The optional alloy wheels in 5-V-spoke design in matt titanium grey and the optional brake callipers painted in red round off the overall impression.",
    "The full load capacity of the Audi A4 Avant is up to 1,510 litres with the rear seat backrest folded down."]
}
var count = 0;
var count_hidden = 0;
var deg = 0;
var deg_hidden = 45;
var value = 1;
//ฟังก์ชันปุ่มของตัวแสดงภาพ
function visible() {
  if (count == 0) {
    deg += 45;
    document.getElementsByClassName("glider")[1].style.transitionDuration = ".5s";
    document.getElementsByClassName("glider")[1].style.opacity = "0";
    document.getElementsByClassName("button_1")[0].style.opacity = "0";

    document.getElementsByClassName("p_hidden")[0].style.opacity = "1";
    document.getElementById("x").style.transform = "rotate(" + deg + "deg)";
    count = 1;
  }
  else if (count == 1) {
    deg -= 45;
    document.getElementsByClassName("glider")[1].style.opacity = "1";
    document.getElementsByClassName("button_1")[0].style.opacity = "1";
    document.getElementsByClassName("p_hidden")[0].style.opacity = "0";
    document.getElementById("x").style.transform = "rotate(" + deg + "deg)";
    count = 0;
  }
}
//ฟังก์ชันเมื่อกดปุ่มขวา
function setValueUp() {
  if (value < 8 && value > 0) {
    value += 1;
    typing(value);
  }
}
//ฟังก์ชันเมื่อกดปุ่มซ้าย
function setValueDown() {
  if (value < 9 && value > 1) {
    value -= 1;
    typing(value);
  }
}
//ฟังก์ชันเปลี่ยนรายละเอียดของรูปภาพเมื่อมีการกดปุ่มซ้าย-ขวา
function typing(number) {
  if (number < 13 && number > 0) {
    document.getElementsByClassName("p_detail")[0].innerHTML = content.name[number - 1];
  }
}
//ฟังก์ชันในการเลือกรูปภาพ
function change_image(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/A4/A4 Avant/6.1.jpg";
    document.querySelectorAll('.fs')[0].innerText = "Tango red, metallic";
    checking_active(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/A4/A4 Avant/6.2.jpg";
    document.querySelectorAll('.fs')[0].innerText = "Ibis white";
    checking_active(number);
  }
}
//ฟังก์ชันในการเปลี่ยนstyleของตัวเลือกภาพ
function checking_active(number) {
  if (number == 1) {
    document.querySelectorAll('.View')[0].classList.add('View_active');
    if (document.querySelectorAll('.View')[1].classList.contains('View_active')) {
      document.querySelectorAll('.View')[1].classList.remove('View_active')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View')[1].classList.add('View_active');
    if (document.querySelectorAll('.View')[0].classList.contains('View_active')) {
      document.querySelectorAll('.View')[0].classList.remove('View_active')
    }
  }
}
//ฟังก์ชันเมื่อกดปุ่ม+ในบริเวณmore
function show(number) {
  if (count_hidden == 0) {
    deg_hidden -= 45;
    document.getElementsByClassName('hidden')[number - 1].style.display = "block";
    document.getElementsByClassName('hidden')[number - 1].style.height = "100%";
    document.getElementsByClassName("rotation")[number - 1].style.transform = "rotate(" + deg_hidden + "deg)";
    document.getElementsByClassName('more_exterior')[number - 1].style.opacity = "0";
    count_hidden = 1;
    if (number >= 3) {
      document.getElementsByClassName("circle_main")[number - 1].style.backgroundColor = "rgb(76,76,76)";
    }
  }
  else if (count_hidden == 1) {
    deg_hidden += 45;
    document.getElementsByClassName('hidden')[number - 1].style.display = "none";
    document.getElementsByClassName('hidden')[number - 1].style.height = "0%";
    document.getElementsByClassName("rotation")[number - 1].style.transform = "rotate(" + deg_hidden + "deg)";
    document.getElementsByClassName('more_exterior')[number - 1].style.opacity = "1";
    count_hidden = 0;
    if (number >= 3) {
      document.getElementsByClassName("circle_main")[number - 1].style.backgroundColor = "rgb(0,0,0)";
    }
  }

}