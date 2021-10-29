

//ข้อความ
var content = {
  "name": ["", "With the four rings. 4.99 meters (16.4 ft) long, 2.00 meters (6.6 ft) wide and 1.71 meters (5.6 ft) tall, the SUV coupe is wider, shorter and lower than its Q7 sister model.",
    "A light strip connects the units at the rear. As in the original Audi quattro, a black surface underlays this strip.",
    "The Audi Q8 combines the elegance of a four-door luxury coupé with the practical versatility of a large SUV.",
    "The elegantly sloping roofline terminates in gently inclined D-pillars and rests against the quattro blisters above the wheel arches, which house up to 22-inch wheels.",
    "On the German market, the Audi Q8 comes standard with the top-of-the-line infotainment system, MMI navigation plus. It includes the Audi connect data transfer module with the LTE Advanced standard and a Wi-Fi hotspot.",
    "Richly equipped, comprehensively connected and tough enough for off-road duty, it is a confident companion for business and leisure.",
    "The optional Audi connect key lets the driver lock/unlock the vehicle, and start the engine using a compatible Android smartphone.",
    "Whether parking, in the city or on long journeys – the Audi Q8 supports its driver in many situations.",
    "For growing challenges: With “Audi Original Zubehör“, you get proven safety even for the youngest passengers.",
    "There is a three-seat system in the rear with longitudinally adjusting upon request. With the seatbacks folded down, the luggage compartment under the power rear hatch holds up to 1,755 liters (62.0 cu ft).",
    "An example of the attention to detail: the entry ledges on the door sills underline the high quality of the Audi Q8."]
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
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/A5/A5 Coupé/4.1.png";
    checking_active(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/A5/A5 Coupé/4.2.webp";
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