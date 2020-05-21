$(document).ready(()=> {

    //change color of the cars
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
