//js ของตัวแสดงรูปภาพ
new Glider(document.querySelectorAll('.glider')[0], {
  slidesToShow: 1,
  draggable: true,
  dots: '#dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

//js ของสไลด์์รูปภาพ
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

//ข้อความ
var content = {
  "name": ["With tense surfaces, sharp edges and striking lines, the executive sedan broadcasts its character in an unmistakable fashion.", 
          "The A6 Sedan is an expressive ambassador for the new Audi design language.",
          "Unlocking, locking and starting the engine via an Android smartphone – the Audi connect key replaces, on request, the conventional vehicle key and makes handling the A6 Sedan even more convenient.",
          "The short boot lid ends with a curved spoiler for optimised aerodynamics and the final visual touch.",
          "Long bonnet, long wheelbase, short overhangs. The Audi A6 Sedan is characterised by well-balanced proportions and refined sportiness.",
          "Pure dynamics: powerfully tensed contours stretch across the wheels and hint to Audi's quattro inheritance.",
          "Breaking out, discovering new things, seeing the world with fresh eyes: this is a longing which many people share and we, as a brand, take up.",
          "Even more comfort, authority and safety on long and short journeys – the A6 Sedan sets new standards for the luxury class, with new and refined driver assistance systems.",
          "The wide, deep-positioned single-frame grill, the flat headlights and the powerfully contoured air intakes radiate a sporty look.",
          "More space for more: The new Audi A6 Sedan offers more legroom in the rear than its predecessor with the same boot volume of 530 litres.",]
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
  if (value < 10 && value > 0) {
    value += 1;
    typing(value);
  }
}
//ฟังก์ชันเมื่อกดปุ่มซ้าย
function setValueDown() {
  if (value < 11 && value > 1) {
    value -= 1;
    typing(value);
  }
}
//ฟังก์ชันเปลี่ยนรายละเอียดของรูปภาพเมื่อมีการกดปุ่มซ้าย-ขวา
document.getElementsByClassName("p_detail")[0].innerHTML = content.name[0];
function typing(number) {
  if (number < 11 && number > 0) {
    document.getElementsByClassName("p_detail")[0].innerHTML = content.name[number - 1];
  }
}
//ฟังก์ชันในการเลือกรูปภาพ
function change_image(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/A6/A6 Sedan/4.1.webp";
    checking_active(number);
    console.log(document.getElementsByClassName("picture_exterior")[0])
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/A6/A6 Sedan/4.2.webp";
    checking_active(number);
    console.log(document.getElementsByClassName("picture_exterior")[0])

  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/A6/A6 Sedan/4.3.webp";
    checking_active(number);
    console.log(document.getElementsByClassName("picture_exterior")[0])

  }
}
//ฟังก์ชันในการเปลี่ยนstyleของตัวเลือกภาพ
function checking_active(number) {
  if (number == 1) {
    document.querySelectorAll('.View')[0].classList.add('View_active');
    if (document.querySelectorAll('.View')[1].classList.contains('View_active')) {
      document.querySelectorAll('.View')[1].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[2].classList.contains('View_active')) {
      document.querySelectorAll('.View')[2].classList.remove('View_active')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View')[1].classList.add('View_active');
    if (document.querySelectorAll('.View')[0].classList.contains('View_active')) {
      document.querySelectorAll('.View')[0].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[2].classList.contains('View_active')) {
      document.querySelectorAll('.View')[2].classList.remove('View_active')
    }
  }
  else if (number == 3) {
    document.querySelectorAll('.View')[2].classList.add('View_active');
    if (document.querySelectorAll('.View')[1].classList.contains('View_active')) {
      document.querySelectorAll('.View')[1].classList.remove('View_active')
    }
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