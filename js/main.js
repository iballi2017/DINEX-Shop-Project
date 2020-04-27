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

    // $(".newsletter-form-input").on("focus", () => {
    //     $(".form-grp").css({ "border-bottom": "4px solid red", "transition": "border-bottom 250ms ease-in-out" });
    // })
    $(".newsletter-form-input").focus(function () {
        console.log("hello")
        $(".form-grp").css({ "border-bottom": "4px solid #858585", "transition": "border-bottom 250ms ease-in-out" });
    })
    $(".newsletter-form-input").focusout(function () {
        console.log("hello")
        $(".form-grp").css({ "border-bottom": "1px solid #858585", "transition": "border-bottom 250ms ease-in-out" });
    })


    $("#best-sellers").on('click', function () {
        // alert("hello")
        $(".list-A").css({
            "transform": "scaleX(1)",
            "position": "relative"
        })
    })

    $("#new-products").on('click', function () {
        // alert("hello")
        $(".list-B").css({
            "transform": "scaleX(1)",
            "position": "relative"
        })
    })

    $("#sale-products").on('click', function () {
        // alert("hello")
        $(".list-C").css({
            "transform": "scaleX(1)",
            "position": "relative"
        })
    })


    $(".fa-star").mouseover(function () {
        // $(this).removeClass("far").addClass("fas")
        console.log($(this).siblings())
        let x = $(this).siblings()
        console.log(x)
        for (i = 0; i < x.length; i++) {
            console.log(x[3])
            if (this === x[i]) {
                console.log("yes")
            }
        }
    })
})