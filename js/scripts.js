$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // -----------------------------------------------

    var slideIndex = 0;
    var slideCount = $(".slide-discount").length - 1;

    // -----------------------------------------------

    var slidePhoto;
    var coorsSlidePhoto;
    var topCoor;
    var leftCoor;
    var rightCoor;
    var bottomCoor;
    var slideImgWidth;
    var slideImgHeight;

    // -----------------------------------------------

    var indexCoiceBox;
    var coiseBoxCount = $(".coice-box").length - 1;
    var coiceBoxActive;
    var coiceBoxHeight;
    var coiceBoxHoverHeight;
    var visibleItems;
    var coiceBoxTopCoor;
    var coiceTopCoor;
    var allCoiseBox;  // Добавил переменную

    // -----------------------------------------------

    var countNumMarkLists = $("ol.num-mark").length - 1;
    var markNumListsIndex;
    var markNumListsItemIndex;
    var countNumItemsList;

    // -----------------------------------------------

    var activeMenuAttr;

    // -----------------------------------------------

    var activeClass;
    var activeMenuBox;
    var activeMenuList;
    var activeHeight;

    // -----------------------------------------------

    var popupName;
    var topOffset;

    // -----------------------------------------------

    var angel;
    var leftCoor;
    var setCoor;
    var getAngelInterval;

    // ------------------------------------------------

    getInnerMenuPosition();

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------

        getCoiceBoxHoverHeight(indexCoiceBox, coiseBoxCount);

        getPopupPosition();

        getInnerMenuPosition();

        // ----------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    // -------------------------

    $(function() {

        slideIndex = 0;

        $(".promo-slider .slide-discount").each(function() {

            $(this).appendTo($(".promo-slider-box .discounts"));

            if( $(".promo-slider .slide:eq("+ slideIndex +")").hasClass("slick-active") ) {

                $(".promo-slider-box .discounts .slide-discount:eq("+ slideIndex +")").fadeIn(200);

            }

            slideIndex++;

        });

    });

    // ---------------------------

    $(function() {

        slidePhoto = document.getElementsByClassName("photo_img_box")[0];

        $(".slick-slide:eq("+ 0 +")").addClass("active");

        if(slidePhoto) {

                coorsSlidePhoto = slidePhoto.getBoundingClientRect();

                topCoor = coorsSlidePhoto.top;
                leftCoor = coorsSlidePhoto.left;

                rightCoor = coorsSlidePhoto.right;
                bottomCoor = coorsSlidePhoto.bottom;

                slideImgWidth = rightCoor - leftCoor;
                slideImgHeight = bottomCoor - topCoor;

                $(".photo_img_box img").css({
                    "min-width" : slideImgWidth + "px",
                    "min-height" : slideImgHeight + "px"
                });

                $(".photo_img_box img").offset({ left:leftCoor});

            }

    });

    // ----------------------------------------------------------------

    $(function() {

        // var indexCoiceBox = 0;
        // var coiseBoxCount = $(".coice-box").length - 1;
        // var coiceBoxActive;
        // var coiceBoxHeight;
        // var coiceBoxHoverHeight;
        // var visibleItems;
        // var coiceBoxTopCoor;
        // var coiceTopCoor;
        // var allCoiseBox;

        getCoiceBoxHoverHeight(indexCoiceBox, coiseBoxCount);

        $(".more-link").click(function() {

            coiceBoxActive = $(this).prev($(".coice-box"));

            coiceBoxHeight = coiceBoxActive.children($(".hover-block")).height();

            coiceBoxHoverHeight = parseInt( coiceBoxActive.attr("data-hover-height") );

            if( coiceBoxActive.height() > coiceBoxHoverHeight ) {

                coiceBoxActive.animate({"height" : coiceBoxHoverHeight + "px"}, 500);

                $(this).text("Еще");

            } else {

                coiceBoxActive.animate({"height" : coiceBoxHeight + "px"}, 500);

                $(this).text("Скрыть");

            }

        });

         
    });


    // ----------------------------------------------------------------

        $(function() {

            $(".count-goods button").click(function() {

                countElementsInputIndex = $(this).parent(".count-goods").index(".count-goods");

                countElementsVal = $(".count-goods:eq("+ countElementsInputIndex +") .count-val").val();

                if( countElementsVal <=  -1 ) {

                    $(".count-val:eq("+ countElementsInputIndex +")").val(0);

                }

                if( $(this).hasClass("minus") && countElementsVal > 0 ) {

                    countElementsVal--;

                } else if( $(this).hasClass("plus") ) {

                    countElementsVal++;

                }

                $(".count-goods:eq("+ countElementsInputIndex +") .count-val").val(countElementsVal);

            });

        });

    // ---------------------------------------------------------------

    $(function() {

        $("ol.num-mark li").prepend("<span class='num-item'></span>");

        countNumMarkLists = $("ol.num-mark").length - 1;

        // var markNumListsIndex;
        // var markNumListsItemIndex;
        // var countNumItemsList;

        for( markNumListsItemIndex = 0; markNumListsItemIndex <= countNumMarkLists; markNumListsItemIndex++ ) {

            countNumItemsList = $("ol.num-mark:eq("+ markNumListsItemIndex +") li").length - 1;

            for( markListsItemIndex = 0; markListsItemIndex <= countNumItemsList; markListsItemIndex++) {

                $("ol.num-mark:eq("+ markNumListsItemIndex +") li:eq("+ markListsItemIndex +") .num-item").text( (markListsItemIndex + 1 ) );

            }

        }

    });

    // --------------------------------------------------------------

    $(function() {

        // var activeMenuAttr;

        $(".main-nav > ul > li > a").bind({
          mouseenter: function() {

            activeMenuAttr = $(this).attr("data-item-name");

            if($("[data-inner-menu-name = '"+ activeMenuAttr +"']").hasClass("active-menu")) {

                return true;

            } else {

                $("[data-inner-menu-name = '"+ activeMenuAttr +"']").addClass("active-menu");

            }            

            $("[data-inner-menu-name = '"+ activeMenuAttr +"']").css({
                "top" : $(this).height() + parseInt( $(this).css("padding-bottom") ) + "px"
            });

            $("[data-inner-menu-name = '"+ activeMenuAttr +"']").offset({left : $(".main-nav").offset().left });

          },
          mouseleave: function() {

            $("[data-inner-menu-name = '"+ activeMenuAttr +"']").removeClass("active-menu");

          }

        });

        $(".inner-menu").bind({

            mouseenter: function() {

                $("[data-inner-menu-name = '"+ activeMenuAttr +"']").addClass("no_fade");

            }, mouseleave: function() {

                $("[data-inner-menu-name = '"+ activeMenuAttr +"']").removeClass("no_fade");

            }

        });

        $(".respmenubtn").click(function() {

            if( $(".main-nav").is(":hidden") ) {

                $(".main-nav").fadeIn(400);

                $(this).addClass("active");

            } else {

                $(".main-nav").fadeOut(400);

                $(this).removeClass("active");

            }

        });


        $(".show-menu-btn").click(function() {

            activeClass = "menu_item_" + $(".show-menu-btn").index(this);

            $(this).parent("li").addClass( activeClass );

            activeMenuBox = $(".main-nav li." + activeClass + " .inner-menu");

            activeMenuList = $(".main-nav li." + activeClass + " .inner-menu-list");

            activeHeight = activeMenuList.outerHeight();

            if(activeMenuBox.height() > 0) {

                activeMenuBox.animate({
                    "height" : 0 + "px"
                }, 500);

                $(this).removeClass("top");

            } else {

                activeMenuBox.animate({
                    "height" : activeHeight + "px"
                }, 500);

                $(this).addClass("top");

                setTimeout(function() {

                    activeMenuBox.css({"height" : "auto"});

                },600);

            }

        });

    });

    // --------------------------------------------------------------

    $(function() {

        $(".goods_miniatures .good-thumbnail").bind({

                mouseenter: function() {

                $(this).addClass("hover_good");

            }, mouseleave: function() {

                $(this).removeClass("hover_good");

            }

        });

    });
    

    // --------------------------------------------------------------

    $(".search-resp-btn").click(function() {

        if($(".search-box").is(":hidden")) {

            $(".search-box").fadeIn(300);

        } else {

            $(".search-box").fadeOut(300);

        }

    });

    $(document).mouseup(function (e){

        if(bodyWidth <= 1024 ) {

            hide_element = $('.search-box');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.fadeOut(300);
            }

        }

    });

    $(function() {

        $(this).keydown(function(eventObject){
            if (eventObject.which == 27) {

                 $('.main-nav').fadeOut(300);
                 $(".respmenubtn").removeClass("active");

            }

            if(eventObject.which == 27 && bodyWidth <= 1024) {

                $('.search-box').fadeOut(300);

            }

        });

    });


    // ----------------------------------------

    $(function() {

        // var popupName;

        $(".show_popup").click(function(clickEvent) {

            clickEvent.preventDefault();

            popupName = $(this).attr("data-popup-name");

            $(".popup-block").fadeIn(300);

            $(".popup-block .popup[data-popup-name = " + popupName + "]").fadeIn(300);

            getPopupPosition();
 
        });

        $(".popup-bg, .close-popup").click(function() {

            $(".popup-block").fadeOut(300);

            $(".popup-block .popup[data-popup-name = " + popupName + "]").fadeOut(300);

        });

    });

    $(function() {

        $(this).keydown(function(eventObject){
            if (eventObject.which == 27) {
                
                $(".popup-block").fadeOut(300);
                $(".popup-block .popup").fadeOut(300);

             }
        });

    });

    // --------------------------------------------------------------

    $(function() {

        if( $(".rotate_element").length > 0 ) {

            angel = 0;

            leftCoor = $(".rotate_element .left-coor").offset().left;

            setCoor = $(".content").offset().left + 40;

            getAngelInterval = setInterval(function() {

                angel = angel + 0.5;

                $(".rotate_element").css({
                                            "-webkit-transform" : "rotate(" + angel + "deg)",
                                            "-moz-transform" : "rotate(" + angel + "deg)",
                                            "-ms-transform" : "rotate(" + angel + "deg)",
                                            "-o-transform" : "rotate(" + angel + "deg)",
                                            "transform" : "rotate(" + angel + "deg)"
                                        });

                if ( $(".rotate_element .left-coor").offset().left >= setCoor) {

                    clearInterval(getAngelInterval);

                }

            }, 45);

        }

    });

    // --------------------------------------------------------------

    function getCoiceBoxHoverHeight(indexCoiceBox, coiseBoxCount) {

        indexCoiceBox = 0;

        for (indexCoiceBox = 0; indexCoiceBox <= coiseBoxCount; indexCoiceBox++) {

            visibleItems = parseInt( $(".coice-box:eq("+ indexCoiceBox +")").attr("data-visible-items") );

            if(visibleItems) {

                coiceBoxTopCoor = $(".coice-box:eq("+ indexCoiceBox +")").offset().top;
                coiceTopCoor = $(".coice-box:eq("+ indexCoiceBox +") .checkbox-block:eq("+ visibleItems +")").offset().top;

                coiceBoxHoverHeight = coiceTopCoor - coiceBoxTopCoor;

                $(".coice-box:eq("+ indexCoiceBox +")").attr("data-hover-height", coiceBoxHoverHeight);

                $(".coice-box:eq("+ indexCoiceBox +")").css({"height" : coiceBoxHoverHeight + "px"});

            }

        }

    }

    // -----------------------------

    function getPopupPosition() {

        topOffset = $(window).height() - $(".popup[data-popup-name = " + popupName + "]").outerHeight(true);

        if(topOffset > 0) {

            $(".popup-block .popup[data-popup-name = " + popupName + "]").css({
                "top" : topOffset / 2 + "px"
            });

        } else {

            $(".popup-block .popup").css({
                "top" : "0px"
            });

        }

    }

    // ---------------------------

    function getInnerMenuPosition() {

        if( bodyWidth <= 768 ) {

            $(".inner-menu").each(function() {

                var parentItem = $(".main-nav li a[data-item-name = "+ $(this).attr("data-inner-menu-name") +"]").parent(".main-nav li");

                $(this).appendTo(parentItem);

            });

        } else if ($(".inners-navs-block .inner-menu").length == 0) {

            // $(".inner-menu").appendTo($(".inners-navs-block"));

            $(".inner-menu").each(function() {

                $(this).appendTo($(".inners-navs-block"));

            });

        }

    }


});
