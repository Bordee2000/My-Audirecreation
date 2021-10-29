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
var count = 0;
var count_hidden = 0;
var deg = 0;
var deg_hidden = 45;
var value = 1;

var content = {
  "name": [
    "The optional panoramic glass sunroof floods the interior of the Audi RS 4 Avant² with light. Meanwhile, a tinted glass insert protects against strong sunlight.",
    "Let the Audi RS 4 Avant² take effect.",
    "Its thrilling body turns the Audi RS 4 Avant² into a real eye-catcher and a vehicle for families that lead an adrenaline-packed lifestyle.",
    "The 2.9-litre TFSI twin-turbo V6 engine (Fuel consumption combined¹: 9.2 l/100 km; CO₂ emissions combined¹: 211–210 g/km) generates 331 kW (450 hp) and has maximum torque of 600 Nm.",
    "In the Audi RS 4 Avant², nobody’s in a hurry to ask if you’re there yet. The vehicle accelerates from 0 to 100 km/h in 4.1 seconds (Fuel consumption combined¹: 9.2 l/100 km; CO₂ emissions combined¹: 211–210 g/km).",
    "The Audi RS 4 Avant² has a hallmark RS front end sporting the distinctive design of the optionally available Matrix LED headlights with darkened trims.",
    "Those who value fun at the wheel are on the right track with the Audi RS 4 Avant². Its high performance and its design make it the perfect companion.",
    "Its widened wheel arches and new wheel design underscore the sportiness of the Audi RS 4 Avant².",
    "With 495 litres of luggage capacity, the Audi RS 4 Avant² offers plenty of room for longer and shorter family outings.",
    "Elegant look and feel. These are supplied in the Audi RS 4 Avant² by the standard-fitted front sport seats plus with RS emblem in fine Nappa leather, black with honeycomb pattern in crescendo red."]
}

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

function setValueUp() {
  if (value < content.name.length && value > 0) {
    value += 1;
    typing(value);
  }
}
function setValueDown() {
  if (value < content.name.length + 1 && value > 1) {
    value -= 1;
    typing(value);
  }
}

function typing(number) {
  if (number < content.name.length + 1 && number > 0) {
    document.getElementsByClassName("p_detail")[0].innerHTML = content.name[number - 1];
  }
}

/* change image 1 */
function change_image(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/RS/RS 4 Avant/4.1.jpg";
    checking_active(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/RS/RS 4 Avant/4.2.webp";
    checking_active(number);
  }
}
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

/* change image 2 */
function change_image2(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+site/A7/A7 Sport/more/4.1.png";
    checking_active2(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+site/A7/A7 Sport/more/4.2.png";
    checking_active2(number);
  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+site/A7/A7 Sport/more/4.3.webp";
    checking_active2(number);
  }
}
function checking_active2(number) {
  if (number == 1) {
    document.querySelectorAll('.View2')[0].classList.add('View_active');
    if (document.querySelectorAll('.View2')[1].classList.contains('View_active')) {
      document.querySelectorAll('.View2')[1].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View2')[2].classList.contains('View_active')) {
      document.querySelectorAll('.View2')[2].classList.remove('View_active')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View2')[1].classList.add('View_active');
    if (document.querySelectorAll('.View2')[0].classList.contains('View_active')) {
      document.querySelectorAll('.View2')[0].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View2')[2].classList.contains('View_active')) {
      document.querySelectorAll('.View2')[2].classList.remove('View_active')
    }
  }
  else if (number == 3) {
    document.querySelectorAll('.View2')[2].classList.add('View_active');
    if (document.querySelectorAll('.View2')[1].classList.contains('View_active')) {
      document.querySelectorAll('.View2')[1].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View2')[0].classList.contains('View_active')) {
      document.querySelectorAll('.View2')[0].classList.remove('View_active')
    }
  }
}

/* change image 3 */
function change_image3(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+site/A7/A7 Sport/more/8.1.png";
    checking_active3(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+site/A7/A7 Sport/more/8.2.png";
    checking_active3(number);
  }
}
function checking_active3(number) {
  if (number == 1) {
    document.querySelectorAll('.View3')[0].classList.add('View_active');
    if (document.querySelectorAll('.View3')[1].classList.contains('View_active')) {
      document.querySelectorAll('.View3')[1].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View3')[2].classList.contains('View_active')) {
      document.querySelectorAll('.View3')[2].classList.remove('View_active')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View3')[1].classList.add('View_active');
    if (document.querySelectorAll('.View3')[0].classList.contains('View_active')) {
      document.querySelectorAll('.View3')[0].classList.remove('View_active')
    }
    if (document.querySelectorAll('.View3')[2].classList.contains('View_active')) {
      document.querySelectorAll('.View3')[2].classList.remove('View_active')
    }
  }
}

/* change image 4*/
function change_image4(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[3].src = "Image+site/A7/A7 Sport/9.1.jpeg";
    checking_active4(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[3].src = "Image+site/A7/A7 Sport/9.2.jpeg";
    checking_active4(number);
  }
}

function checking_active4(number) {
  if (number == 1) {
    document.querySelectorAll('.View')[3].classList.add('View_active2');
    if (document.querySelectorAll('.View')[4].classList.contains('View_active2')) {
      document.querySelectorAll('.View')[4].classList.remove('View_active2')
    }
    if (document.querySelectorAll('.View')[5].classList.contains('View_active2')) {
      document.querySelectorAll('.View')[5].classList.remove('View_active2')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View')[4].classList.add('View_active2');
    if (document.querySelectorAll('.View')[3].classList.contains('View_active2')) {
      document.querySelectorAll('.View')[3].classList.remove('View_active2')
    }
    if (document.querySelectorAll('.View')[5].classList.contains('View_active2')) {
      document.querySelectorAll('.View')[5].classList.remove('View_active2')
    }
  }
}

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