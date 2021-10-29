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
  "name": ["More than 70,000 charging points in Germany and Europe enable charging on the go.", "As fast as a motorcycle, but stronger: the Audi e-tron.",
    "Practical all-rounder: your Audi e-tron also convinces as a versatile luggage carrier.",
    "Create custom-designed tours with the e-tron route planner.",
    "Whether for a business meeting or a family outing - the Audi e-tron is your eve-ryday companion.",
    "The Audi e-tron is our first all-electric SUV.",
    "You and your passengers will enjoy an even brighter and friendlier interior thanks to the optional panoramic glass roof.",
    "The long roof edge spoiler and a wide diffuser emphasise the sporty rear end of the Audi e-tron.",
    "The optional virtual exterior mirrors provide a completely new technology and driving experience.",
    "Eye-catching design feature: the brake calipers can optionally be painted in the high-voltage colour orange.",
    "The interior of the Audi e-tron is functional and high-quality.",
    "Use the hand rest on the hand gear for the various gear changes.",
    "In the standard Audi virtual cockpit you have important data in view, including e-tron-specific services."]
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
  if (value < 12 && value > 0) {
    value += 1;
    typing(value);
  }
}
//ฟังก์ชันเมื่อกดปุ่มซ้าย
function setValueDown() {
  if (value < 13 && value > 1) {
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
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/e-tron/Audi e-tron/4.1.webp";
    checking_active(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/e-tron/Audi e-tron/4.2.webp";
    checking_active(number);
  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/e-tron/Audi e-tron/4.3.webp";
    checking_active(number);
  }
}

function changeimage2(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+Site/e-tron/Audi e-tron/5.1.webp";
    checking_active2(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+Site/e-tron/Audi e-tron/5.2.webp";
    checking_active2(number);
  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+Site/e-tron/Audi e-tron/5.3.webp";
    checking_active2(number);
  }
}

function changeimage3(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+Site/e-tron/Audi e-tron/13.1.webp";
    checking_active3(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+Site/e-tron/Audi e-tron/13.2.jfif";
    checking_active3(number);
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

function checking_active2(number) {
  if (number == 1) {
    document.querySelectorAll('.View')[3].classList.add('View_active');
    if (document.querySelectorAll('.View')[4].classList.contains('View_active')) {
      document.querySelectorAll('.View')[4].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[5].classList.contains('View_active')) {
      document.querySelectorAll('.View')[5].classList.remove('View_active')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View')[4].classList.add('View_active');
    if (document.querySelectorAll('.View')[3].classList.contains('View_active')) {
      document.querySelectorAll('.View')[3].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[4].classList.contains('View_active')) {
      document.querySelectorAll('.View')[4].classList.remove('View_active')
    }
  }
  else if (number == 3) {
    document.querySelectorAll('.View')[4].classList.add('View_active');
    if (document.querySelectorAll('.View')[3].classList.contains('View_active')) {
      document.querySelectorAll('.View')[3].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[3].classList.contains('View_active')) {
      document.querySelectorAll('.View')[3].classList.remove('View_active')
    }
  }
}
function checking_active3(number) {
  if (number == 1) {
    document.querySelectorAll('.View')[6].classList.add('View_active');
    if (document.querySelectorAll('.View')[7].classList.contains('View_active')) {
      document.querySelectorAll('.View')[7].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[8].classList.contains('View_active')) {
      document.querySelectorAll('.View')[8].classList.remove('View_active')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View')[7].classList.add('View_active');
    if (document.querySelectorAll('.View')[6].classList.contains('View_active')) {
      document.querySelectorAll('.View')[6].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[7].classList.contains('View_active')) {
      document.querySelectorAll('.View')[7].classList.remove('View_active')
    }
  }
  else if (number == 3) {
    document.querySelectorAll('.View')[7].classList.add('View_active');
    if (document.querySelectorAll('.View')[6].classList.contains('View_active')) {
      document.querySelectorAll('.View')[6].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View')[6].classList.contains('View_active')) {
      document.querySelectorAll('.View')[6].classList.remove('View_active')
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