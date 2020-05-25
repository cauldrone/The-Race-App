$(document).ready(()=> {

    //change color of the car on menu page
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

    //change color of game car
    //function carColor (){}

    //move car (left, right, up, down)
    $('body').keyup(function(e){
        //left
        if(e.keyCode == 37){
        $("#car").animate({
            marginLeft: '-=55px'
            });
        }
        //right
        if(e.keyCode == 39){
        $("#car").animate({
            marginLeft: '+=55px'
            });
        }
        //up
        if(e.keyCode == 38){
        $("#car").animate({
            marginTop: '-=55px'
            });
        }
        //down
        if(e.keyCode == 40){
        $("#car").animate({
            marginTop: '+=55px'
            });
        }
    });

    //obstacles

    //stopwatch
    function stopwatch () {
        var milliseconds = 0;
        var seconds = 0;
        var minutes = 0;
        document.getElementById("timer").innerHTML = minutes + ":" + seconds + ":" + milliseconds;
    }

    //start button on menu screen
    let $menupage = $("#menubox");
    let $startbutton = $("#startbutton");
    $startbutton.on({
        click: () => {
            $menupage.hide();
            stopwatch();
            carColor();
        }
    });

    //menu button on game screen
    let $menubutton = $("#menubutton");
    $menubutton.on({
        click: () => {
            $menupage.show();
        }
    });


});
