var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["NBCPoster.jpg", "HalloweenPoster.jpg", "ITPoster.jpg", "lostboys.jpeg"];

var i = 0;

//next button
next.addEventListener('click', function(){
    i++;
    if (i > arr.length - 1) {
      i = 0;
    }
    document.getElementById('image').src = arr[i];
})

// prev button
prev.addEventListener('click', function(){
    i--;
    if (i < 0) {
      i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})
