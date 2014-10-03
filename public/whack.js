$('document').ready(function() {

    var box;

    var score;

    var intervalId;

    var timeoutId;

    var destination;

    var speed = 5000;

    var timer = 15; // seconds

    var show = function() {
        var rand = Math.floor((Math.random() * 9) + 1);
        box = $('#' + rand);
        box.fadeIn();

        // create a timeOut 
        // when timeout finishes, hide the box
        timeoutId = setTimeout(function() {
            hide();

        }, speed);


    };

    var hide = function() {
        box.fadeOut();
        // call show
        show();
    };

    var gameInterval = function () {
        timer--;

        console.log(timer + '...');
        $("#timer").text('Timer:' + timer);

        if (timer == 0) {
            alert('Times up!');
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            box.fadeOut();
        }

    };

    $('#start').click(function() {
        score = 0;
        timer = 15;
        speed = 5000;

        $('#score').text('Score: ' + score);
        $("#timer").text('Timer:' + timer);

        if(score % 3) {
            speed = speed - 300;
        }

        intervalId = setInterval(gameInterval, 1000);
        show();
    });

    $('.cell').click(function(event) {
        score++;
        $('#score').text('Score: ' + score);
        $(this).fadeOut().toggleClass('slow');

        // clear timeout
        clearTimeout(timeoutId);

        show();
    });

});