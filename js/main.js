$(document).ready(() => {
    // alert("Hello world")
    x = true
    $(".menu-btn").on('click', () => {
        // $(".nav-tab").toggle(1000)
        if (x == true) {
            $(".nav-tab").show(1000);
            x = false
            $(".fa-ellipsis-v").css({ "transform": "rotate(90deg)", "transition": "transform 250ms" })
            $(".menu-btn").css({ "color": "#858585" })
        }

        else if (x == false) {
            $(".nav-tab").hide(1000);
            x = true;
            $(".fa-ellipsis-v").css({ "transform": "rotate(0deg)", "transition": "transform 250ms" })

            $(".menu-btn").css({ "color": "#151515" })
        }
    })

    // $(".newsletter-form-input").on("focus", () => {
    //     $(".form-grp").css({ "border-bottom": "4px solid red", "transition": "border-bottom 250ms ease-in-out" });
    // })
    $(".newsletter-form-input").focus(function () {
        $(".form-grp").css({ "border-bottom": "4px solid #858585", "transition": "border-bottom 250ms ease-in-out" });
    })
    $(".newsletter-form-input").focusout(function () {
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


})




var num = [2, 4, 5, 23]

var y = 5
var z
(function () {
    let z = num.indexOf(y)
    console.log(z)
    for (i = 0; i < num.length; i++) {
        console.log(num.indexOf(num[i]))
        let w = num.indexOf(num[i])
        if (z >= w) {
            console.log("hello")
        }
        else {
            console.log("Nei")
        }

    }
})()