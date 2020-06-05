$(document).ready(()=> {

    //change color of the car on menu page (works!)
    $("#red").click(()=> {
        $(".fillcolor").css({ fill: "red" });
    });
    $("#yellow").click(()=> {
        $(".fillcolor").css({ fill: "yellow" });
    });
    $("#green").click(()=> {
        $(".fillcolor").css({ fill: "green" });
    });
    $("#blue").click(()=> {
        $(".fillcolor").css({ fill: "blue" });
    });
    $("#purple").click(()=> {
        $(".fillcolor").css({ fill: "purple" });
    });

    //change color of game car (not working)
    function carColor (color){
        if ($(".fillcolor").css({ fill: "red" })) {
             $('#fillmini').css({fill: "red"});
        }
        if ($(".fillcolor").css({ fill: "yellow" })) {
             $('#fillmini').css({fill: "yellow"});
        }
        if ($(".fillcolor").css({ fill: "green" })) {
             $('#fillmini').css({fill: "green"});
        }
        if ($(".fillcolor").css({ fill: "blue" })) {
             $('#fillmini').css({fill: "blue"});
        }
        if ($(".fillcolor").css({ fill: "purple" })) {
             $('#fillmini').css({fill: "purple"});
        }
    };

    //finishline
    let $target = $("#final");
    let $source = $("#car");

    let $popup = $("#backgroundbox");
    let $game = $("#levelone");

    function testCollision(s, t) {
    if (
    s.position().left < t.position().left + t.width() &&
    s.position().left + s.width() > t.position().left &&
    s.position().top < t.position().top + t.height() &&
    s.position().top + s.height() > t.position().top
    ) {
    console.log("collision!");
    return true;
    }
    console.log("no collision");
    return false;
    }




    //move car (left, right, up, down) (works!!)
    $("body").keyup(function(e){

        //left
        if(e.keyCode == 37){
        $source.animate({
            marginLeft: '-=55px'
            });
        }
        //right
        if(e.keyCode == 39){
        $source.animate({
            marginLeft: '+=55px'
            });
        }
        //up
        if(e.keyCode == 38){
        $source.animate({
            marginTop: '-=48px'
            });
        }
        //down
        if(e.keyCode == 40){
        $source.animate({
            marginTop: '+=55px'
            });
        }

        //if (testCollision($source, $target) == true) {
        //  $game.hide();
         // $popup.show();
       // } else {
        //  $game.show();
        //  $popup.hide();
       // }

    });

    //obstacles (none unfortunately)


    //stopwatch (works!!)
    let seconds = 0;
    let minutes = 0;

    let displaySeconds = 0;
    let displayMinutes = 0;

    let interval;

    let timer = $("#timer");

    function stopwatch () {

        seconds++;
        if (seconds/60 ===1) {
            seconds = 0;
            minutes++;
        }

        if (seconds<10){
            displaySeconds = "0" + seconds.toString();
        }else {
            displaySeconds = seconds;
        }

        if (minutes < 10){
            displayMinutes ="0" + minutes.toString();
        }else{
            displayMinutes = minutes;
        }
        document.getElementById("timer").innerHTML = displayMinutes + ":" + displaySeconds;
    }


    //start button on menu screen (works!!)
    let $menupage = $("#menubox");
    let $startbutton = $("#startbutton");
    $startbutton.on({
        click: () => {
            $menupage.hide();
            carColor();
            clearInterval(interval);
            interval = setInterval(stopwatch, 1000);
        }
    });

    //menu button on game screen (kinda works!!)
    let $menubutton = $("#menubutton");
    $menubutton.on({
        click: () => {
            $menupage.show();
            //restart stopwatch (does not work)
        }
    });


});
