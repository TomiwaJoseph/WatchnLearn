$(document).ready(function () {

    $('video').bind('contextmenu', function () {
        return false
    });
    $("video").prop("volume", 0.1);

    $('.main_document').click(function () {
        $('.navbar form').fadeOut();
    })

    $(function () {
        $('input').blur();
    })

    $('.search').click(function (e) {
        e.preventDefault();
        $('.navbar form').fadeToggle();
        document.getElementById("search_text").focus();
    });

    $(".carousel-item").eq(0).addClass('active');

    $('li.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');

    $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("fa-minus fa-plus");
    });

    const all_modules = $(".myaccordion");
    all_course_cards = $(".myaccordion").find(".card-header");
    course_cards_count = all_course_cards.length;

    for (let i = 0; i < course_cards_count; i++) {
        const cards = all_course_cards[i];
        cards.addEventListener("click", function () {
            for (let j = 0; j < course_cards_count; j++) {
                all_course_cards[j].classList.remove("active");
            }
            this.classList.add("active")
        })
    }
    $('#accordion button').eq(0).trigger("click");

    goToTopBtn = document.getElementById('goTop');
    var rootElement = document.documentElement

    function handleScroll() {
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
        if ((rootElement.scrollTop / scrollTotal) > 0.10) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    }
    document.addEventListener("scroll", handleScroll)

    $('#goTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});