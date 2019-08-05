//  test 


//  moving 




//  moving animation section 1 - 2

	$(function () { 

		var controller_h = new ScrollMagic.Controller({vertical: false});
			var pagE = $(".section-2").width() ;

		var secTion2 = new TimelineMax()

		.fromTo(".section-2", 0.5, {opacity: "0"}, {opacity:"1"})
		.fromTo(".grid-can-sec-2", 0.6 , { opacity:"0", y:"-30%"}, {opacity:"1", y:"0%", ease: Power2.easeNone})
		.fromTo(".pic-bg-top-2", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-btm-2", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-top", 0.3, {  width:"100%" ,opacity:"1"}, { width:"0%" , opacity:"0" })
		.fromTo(".pic-bg-btm", 0.3, { width:"100%" ,opacity:"1" }, {width:"0%" , opacity:"0" })
		.fromTo(".grid-can-sec", 1 , { opacity:"1", y:"0%"}, {opacity:"0", y:"-30%", ease: Power2.easeNone})


	

	 var secTion2Scene =	new ScrollMagic.Scene({

			triggerElement: ".section-2",
			triggerHook: 0.5,


		})

		.setTween(secTion2)
		.addTo(controller_h);		


	});


//  moving animation section 2 - 3

	$(function () { 

		var controller_h = new ScrollMagic.Controller({vertical: false});

		var secTion3 = new TimelineMax()

		.fromTo(".section-3", 0.5, {opacity: "0"}, {opacity:"1"})
		.fromTo(".grid-can-sec-3", 0.6 , { opacity:"0", y:"-30%"}, {opacity:"1", y:"0%", ease: Power2.easeNone})
		.fromTo(".pic-bg-top-3", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-btm-3", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-top-2", 0.3, {width:"100%", opacity:"1"} , { width:"0%" , opacity: "1"})
		.fromTo(".pic-bg-btm-2", 0.3, {width:"100%", opacity:"1"} , { width:"0%" , opacity: "1"})
		.fromTo(".grid-can-sec-2", 1 , { opacity:"1", y:"0%"}, {opacity:"0", y:"-30%", ease: Power2.easeNone})
	
	

	 var secTion3Scene =	new ScrollMagic.Scene({

			triggerElement: ".section-3",
			triggerHook: 0.5,


		})

		.setTween(secTion3)
		.addTo(controller_h);		


	});


//  moving animation section 3 - 4

	$(function () { 

		var controller_h = new ScrollMagic.Controller({vertical: false});

		var secTion4 = new TimelineMax()

		.fromTo(".section-4", 0.5, {opacity: "0"}, {opacity:"1"})
		.fromTo(".grid-can-sec-4", 0.6 , { opacity:"0", y:"-30%"}, {opacity:"1", y:"0%", ease: Power2.easeNone})
		.fromTo(".pic-bg-top-4", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-btm-4", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-top-3", 0.3, {width:"100%", opacity:"1"} , { width:"0%" , opacity: "1"})
		.fromTo(".pic-bg-btm-3", 0.3, {width:"100%", opacity:"1"} , { width:"0%" , opacity: "1"})
		.fromTo(".grid-can-sec-3", 1 , { opacity:"1", y:"0%"}, {opacity:"0", y:"-30%", ease: Power2.easeNone})
	
	

	 var secTion4Scene =	new ScrollMagic.Scene({

			triggerElement: ".section-4",
			triggerHook: 0.5,


		})

		.setTween(secTion4)
		.addTo(controller_h);		


	});

//  moving animation section 3 - 4

	$(function () { 

		var controller_h = new ScrollMagic.Controller({vertical: false});

		var secTion5 = new TimelineMax()

		.fromTo(".section-5", 0.5, {opacity: "0"}, {opacity:"1"})
		.fromTo(".grid-can-sec-5", 0.6 , { opacity:"0", y:"-30%"}, {opacity:"1", y:"0%", ease: Power2.easeNone})
		.fromTo(".pic-bg-top-5", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-btm-5", 0.5, {width:"0%" , opacity:"0" }, { width:"100%" ,opacity:"1"})
		.fromTo(".pic-bg-top-4", 0.3, {width:"100%", opacity:"1"} , { width:"0%" , opacity: "1"})
		.fromTo(".pic-bg-btm-4", 0.3, {width:"100%", opacity:"1"} , { width:"0%" , opacity: "1"})
		.fromTo(".grid-can-sec-4", 1 , { opacity:"1", y:"0%"}, {opacity:"0", y:"-30%", ease: Power2.easeNone})
	
	

	 var secTion5Scene =	new ScrollMagic.Scene({

			triggerElement: ".section-5",
			triggerHook: 0.5,


		})

		.setTween(secTion5)
		.addTo(controller_h);		


	});






