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
  "name": ["With 13 paint finishes to choose from, you can customise your Audi e-tron Sportback to your taste.  ",
          "Thanks to a steadily growing number of public charging points, you can charge your Audi e-tron Sportback conveniently, quickly and easily on the go.",
          "Let the Audi e-tron Sportback work its magic on you.",
          "The Audi e-tron Sportback is the ideal companion for everyday life and beyond.",
          "The sporty feel of the Audi e-tron Sportback is provided by the two electric machines.",
          "You can choose to open and close the tailgate in conjunction with the comfort key by moving your foot.",
          "The aerodynamic silhouette is also decisive for the high efficiency of the Audi e-tron Sportback.",
          "Progressive zeitgeist meets extrovert design - the Audi e-tron Sportback.",
          "The generous spatial design ensures a high level of comfort in the interior of the Audi e-tron Sportback.",
          "Optional \"Interior S line\" fittings put the accent on sportiness in the interior.",
          "The optional entry-level LED from Audi Genuine Accessories is characterised by a special logo projection and increased brightness.",
          "The optional virtual exterior mirrors set standards in efficiency, design and safety.",
          "The elegant and sporty exterior design of the Audi e-tron Sportback piques emotion and desire.",
          "The e-tron route planner puts everything on display: the route, including charging stops; the charging time; the traffic situation; the battery status and the arrival time.",
          "We also offer uncomplicated ways to charge the Audi e-tron Sportback using the e-tron charging system when you're at home.",
          "We also offer uncomplicated ways to charge the Audi e-tron Sportback using the e-tron charging system when you're at home.",
          "We also offer uncomplicated ways to charge the Audi e-tron Sportback using the e-tron charging system when you're at home.",
          "We also offer uncomplicated ways to charge the Audi e-tron Sportback using the e-tron charging system when you're at home.",
          "We also offer uncomplicated ways to charge the Audi e-tron Sportback using the e-tron charging system when you're at home.",
          "We also offer uncomplicated ways to charge the Audi e-tron Sportback using the e-tron charging system when you're at home.",
          "No big words necessary - the Audi e-tron Sportback convinces with its progressive look.",
          "With the Audi e-tron Sportback, even charging becomes an experience.",
          "Experience electrifying performance in the Audi e-tron Sportback."
        ]
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
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/e-tron/e-tron Sportback/5.1.jpg";
    checking_active(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/e-tron/e-tron Sportback/5.2.jpg";
    checking_active(number);
  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[0].src = "Image+Site/e-tron/e-tron Sportback/5.3.webp";
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
    document.getElementsByClassName("picture_exterior")[1].src = "Image+Site/e-tron/e-tron Sportback/6.1.webp";
    checking_active2(number);
  
   
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+Site/e-tron/e-tron Sportback/6.2.webp";
    checking_active2(number);


  }
  else if (number == 3) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+Site/e-tron/e-tron Sportback/6.3.webp";
    checking_active2(number);
    
  }
  else if (number == 4) {
    document.getElementsByClassName("picture_exterior")[1].src = "Image+Site/e-tron/e-tron Sportback/6.4.webp";
    checking_active2(number);
    
  }
}

function blue(){
  document.getElementById("color-name").innerHTML = "Antigua blue metalic";
}
function gray(){
  document.getElementById("color-name").innerHTML = "Daytonagrey pearl effect";
}
function white(){
  document.getElementById("color-name").innerHTML = "Glacier White Metalic";
}
function siam(){
  document.getElementById("color-name").innerHTML = "Siamese beige metallic";
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



/* change image 3*/
function change_image3(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+site/e-tron/e-tron Sportback/more/3.1.jpg";
    checking_active3(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[2].src = "Image+site/e-tron/e-tron Sportback/more/3.2.jpg";
    checking_active3(number);
  }
}

function checking_active3(number) {
  if (number == 1) {
    document.querySelectorAll('.View3')[0].classList.add('View_active2');
    if (document.querySelectorAll('.View3')[1].classList.contains('View_active2')) {
      document.querySelectorAll('.View3')[1].classList.remove('View_active2')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View3')[1].classList.add('View_active2');
    if (document.querySelectorAll('.View3')[0].classList.contains('View_active2')) {
      document.querySelectorAll('.View3')[0].classList.remove('View_active2')
    }
  }
}


/* change image 4*/
function change_image4(number) {
  if (number == 1) {
    document.getElementsByClassName("picture_exterior")[3].src = "Image+site/e-tron/e-tron Sportback/10.1.jpg";
    checking_active4(number);
  }
  else if (number == 2) {
    document.getElementsByClassName("picture_exterior")[3].src = "Image+site/e-tron/e-tron Sportback/10.2.jpg";
    checking_active4(number);
  }
}

function checking_active4(number) {
  if (number == 1) {
    document.querySelectorAll('.View4')[0].classList.add('View_active2');
    if (document.querySelectorAll('.View4')[1].classList.contains('View_active2')) {
      document.querySelectorAll('.View4')[1].classList.remove('View_active2')
    }
  }
  else if (number == 2) {
    document.querySelectorAll('.View4')[1].classList.add('View_active2');
    if (document.querySelectorAll('.View4')[0].classList.contains('View_active2')) {
      document.querySelectorAll('.View4')[0].classList.remove('View_active2')
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
      
    }
  }

}