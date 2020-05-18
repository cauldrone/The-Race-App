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

    //start button on menu screen
    let $menupage = $("#menubox");
    let $startbutton = $("#startbutton");
    $startbutton.on({
        click: () => {
            $menupage.hide();
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
