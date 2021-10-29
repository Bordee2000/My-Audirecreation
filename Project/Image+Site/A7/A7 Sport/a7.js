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
  "name": ["Dynamic in its most beautiful form: From the large surfaces via the sharp edges and the athletically stretched lines, the A7 Sportback signals progressivity from every perspective.",
          "The design of a coupé, the space offered by a saloon and the variability of an avant-garde vehicle - the A7 Sportback combines the best of all worlds and is a dynamic all-rounder for business and leisure.",
          "Long wheelbase, short overhanging parts. The silhouette of the A7 Sportback is characterised by excitement and athleticism. Distinct contours emphasise the wheels pointing towards the quattro genes of Audi.",
          "The long boot door ends with a distinctive, curved lip and integrates a spoiler which extends electrically at 120 km/h. A flat, continuous strip light connects the rear lights to each other and emphasises additional features.",
          "The exterior design of the A7 Sportback expresses the new language of design that Audi presented with the Prologue study. Its distinguishing feature is the new design of lights with its own light signature.",
          "Groundbreaking design for a pioneering generation: the Audi A7 Sportback combines progressivity, prestige and technological advancement with an overall futuristic concept.",
          "From the S-specific front and rear bumpers with S line-specific elements over the S-specific side sills in vehicle colour to lacquer in a spirited metallic Tango Red, the S line exterior package gives the A7 Sportback its extra sporty look.",
          "The S-specific front bumper and its S line-specific elements in a honeycomb design, flanked with S line-specific lateral air inlet grilles in matt Titanium Black. Combined with the S line exterior package.",
          "For a sporty conclusion: S-specific rear bumpers with S line-specific elements in a honeycomb design, an S line-specific diffuser in matt Titanium Black, as well a tailpipe optic and clamp in chrome.",
          "The interior concept of the A7 Sportback convinces with more space and more seat comfort. Compared to the predecessor model, the interior has increased by 21 millimetres and allows for more legroom especially at the rear. At the same time, headroom for passengers has improved.",
          "Ambience combined with brightness and friendliness and a greater sense of space: the optional panoramic glass roof with increased transparency.",
          "The 20-inch aluminium cast wheels in 5 twin-spoke V-design provide for a proper stylish appearance."]
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
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/A7/A7 Sport/6.1.jpg";
    checking_active(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/A7/A7 Sport/6.2.jpg";
    checking_active(number);
  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+site/A7/A7 Sport/6.3.jpg";
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