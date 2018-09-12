/* ==============Lov Patsariya Code============ */



function headerbg() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("header-bg");
    } else {
        $("header").removeClass("header-bg");
    }
}

$(window).scroll(function() {
    headerbg();
});



$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
     
	 
	  $('.termsCheck input').click(function () {
        if ($(this).is(':checked')) {
            $("#termsModal").modal("show");
        } else {
           $("#termsModal").modal("hide");
        }
      });
	  
	  $(".close").click(function(){
		 $('.termsCheck input').prop('checked', false); 
	  })
	 
  	
	 $(".leftPanelBtn").click(function(){
		$(".courseMenuAside").toggleClass("open");
		$(".coursefilterAside").removeClass("open");
		
	 });
	$(".rightPanelBtn").click(function(){
		$(".coursefilterAside").toggleClass("open");
		$("body").toggleClass("stopScroll");
		$(".courseMenuAside").removeClass("open");
	});
	
	
	$(".closeAvatar").click(function(){
		$(this).parents("li").remove();
	});
	
	/* ===========For login Tabs Change========= */
	   $(".gotoSignup").click(function(){
		   $(".signupListTab").siblings().find("a").removeClass("active");
		   $(".signupListTab").find("a").addClass("active");
		   $("#signupTab,#signupTab2").addClass("active show");
		   $("#signupTab,#signupTab2").siblings().removeClass("active show");
		});
	
	
    $('.menuSlider').slick({
        dots: false,
        slidesToShow:8,
        slidesToScroll: 1,
        arrows:false,
        infinite: false,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow:8,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint:991,
                settings: {
                    slidesToShow:8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
	
	$('.graphSlider').slick({
        dots: false,
        slidesToShow:4,
        slidesToScroll: 1,
        arrows:true,
        infinite: false,
        responsive: [{
                breakpoint:1025,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1
                }
            },{
                breakpoint:991,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:767,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    /* ========For Image Change========== */
    $('.profileImg input[type=file]').change(function() {
        readURL(this);
    });

    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.profileImg img').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

   $(".banner_video_box_slider .slick-slide").click(function(){
	   $("#quickVideoModal").modal("show");
   });
   
   $(".datepicker").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });

}); /* ==============Ready End============ */