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
  "name": ["The large octagonal single-frame grill is the most striking feature on the front of the Audi Q7.", 
    "At the rear, a continuous chrome strip connects the two flat rear lights.",
    "The optional prestige package in lighting technology includes HD Matrix LED headlights with Audi laser light and LED rear lights.",
    "With a total length of more than five meters, the Audi Q7 makes an impressive appearance.",
    "Let your design fantasies run wild: the Audi Q7 is painted in barrique brown and features 22-inch cast aluminium wheels from Audi Sport in a 5-arm trapezoid design.",
    "The interior of the Audi Q7 is a fusion of comfort and digitised technologies.",
    "The top infotainment system MMI Navigation plus with MMI touch response are standard features in the Audi Q7.",
    "The Audi Q7 optionally has space for up to seven people.",
    "The top infotainment system MMI Navigation plus with MMI touch response are standard features in the Audi Q7."]
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
  if (value < content.name.length+1 && value > 1) {
    value -= 1;
    typing(value);
  }
}
function typing(number) {
  if (number < content.name.length+1 && number > 0) {
    document.getElementsByClassName("p_detail")[0].innerHTML = content.name[number - 1];
  }
}
function change_image(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/Q7/3.1.webp";
    checking_active(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/Q7/3.2.webp";
    checking_active(number);
  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/Q7/3.3.webp";
    checking_active(number);
  }
}
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
function change_image_2(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+Site/Q7/8.1.webp";
    checking_active_2(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+Site/Q7/8.2.webp";
    checking_active_2(number);
  }

}
function checking_active_2(number) {
  if (number == 1) {
    document.querySelectorAll('.View')[4].classList.add('View_active');
    if (document.querySelectorAll('.View')[5].classList.contains('View_active')) {
      document.querySelectorAll('.View')[5].classList.remove('View_active')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View')[5].classList.add('View_active');
    if (document.querySelectorAll('.View')[4].classList.contains('View_active')) {
      document.querySelectorAll('.View')[4].classList.remove('View_active')
    }
  
  }
}