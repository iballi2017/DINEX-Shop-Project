$(document).ready(() => {
    // alert("Hello world")
    x = 0
    $(".menu-btn").on('click', () => {
        // $(".nav-tab").toggle(1000)
        if (x == 0) {
            $(".nav-tab").show(1000);
            x = 1
            console.log("x = 1");
            $(".fa-ellipsis-v").css({ "transform": "rotate(90deg)", "transition": "transform 250ms" })
            $(".menu-btn").css({ "color": "#858585" })
        }

        else if (x == 1) {
            $(".nav-tab").hide(1000);
            x = 0;
            $(".fa-ellipsis-v").css({ "transform": "rotate(0deg)", "transition": "transform 250ms" })

            $(".menu-btn").css({ "color": "#151515" })
        }
    })


})