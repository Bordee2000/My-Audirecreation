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
    "name": ["A completely new vehicle in our product range: the Audi Q3 Sportback with its aesthetic coupé silhouette. * This photo for advertising only", 
    "The format of the aluminum wheels at 19 inch and illuminated door sills with front aluminum inserts and S lettering.",
    "Boasting more space, a sliding and reclining rear bench, and a larger trunk, there’s more than enough room for all of your adventures.",
    "With the backrests folded down the figure rises to 1,400 liters (53.9 cu ft).",
    "Experience top-class digitalisation in the Audi Q3 Sportback. * This photo for advertising only",
    "Audi drive select and dual-zone climate control. *This photo for advertising only",
    "","","The Audi Q3 Sportback is equipped with numerous driver assistance systems that support you in everyday traffic. *This photo for advertising only"
      ]
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
      document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/Q3/Q3 Sportback/4.1.png";
      checking_active(number);
    }
    else if (number == 2) {
      document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/Q3/Q3 Sportback/4.2.webp";
      checking_active(number);
    }
    else if (number == 3) {
      document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/Q8/New Q8/3.3.webp";
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