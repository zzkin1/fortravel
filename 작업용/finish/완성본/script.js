// -------- on page load, hide content -------- //

$(document).ready(function() {
    $('.section__content').fadeOut();
});


// -------- HOVERS -------- //

$(".section").mouseover(function() {

    var $this = $(this);
    var mouseOver = new TimelineMax();

    mouseOver
        .to($this, 0.15, {
            css: {
                flex: 1.3
            },
            ease: Linear.easeOut
        })
}).mouseout(function() {

    var $this = $(this);
    var mouseOut = new TimelineMax();

    mouseOut
        .to($this, 0.15, {
            css: {
                flex: 1
            },
            ease: Linear.easeOut
        })

});



// -------- CLICK TO EXPAND -------- //

$(".section").click(function(e) {

    var button = $('.button--close');
    if (!button.is(e.target)) {
        $(this).removeClass('is-inactive').addClass('is-active').siblings().removeClass('is-active').addClass('is-inactive');

        var $this = $(this),
            $bg = $(this).find('.section__bg'),
            $content = $(this).find('.section__content'),
            $siblings = $(this).siblings(),
            $main = $('.main');

        $this.find('.button--close').fadeIn();
        $content.fadeIn();

        var activate = new TimelineMax();

        activate
            .to($siblings, 0.3, {
                css: {
                    flex: 0,
                },
                ease: Linear.easeOut
            }, 0)

        .to($content, 0.3, {
            css: {
                width: '100%',
                left: '0'
            },
            ease: Linear.easeOut
        }, 0)

        .to($content, 0.3, {
            css: {
                opacity: 1
            },
            ease: Linear.easeOut
        }, 0.35)

        .to($this, 0, {
            css: {
                position: 'static'
            },
            ease: Linear.easeOut
        }, 0.45);

    }

});



// -------- CLICK TO CLOSE -------- //

$(".button--close").click(function(e) {
  
    var $this = $(this),
        $sections = $('.section'),
        $content = $('.section__content'),
        $bg = $('.section__bg');

    $this.fadeOut();
    $content.fadeOut();

    var deActivate = new TimelineMax();

    deActivate
        .to($sections, 0.3, {
            css: {
                flex: 1
            },
            ease: Linear.easeOut
        }, 0)

    .to($sections, 0.3, {
        css: {
            position: 'relative'
        },
        ease: Linear.easeOut
    }, 0.15)

    .to($content, 0.3, {
        css: {
            width: '20vw',
            left: '18%'
        },
        ease: Linear.easeOut
    }, 0.3)

    .to($content, 0.25, {
        css: {
            opacity: 0
        },
        ease: Linear.easeOut
    }, 0);

});