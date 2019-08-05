


//  click button to move the body through section to section 

	$(document).ready(function () {

		// var

		$(".b-1").addClass("load-opa");
		$(".arrow-size-left").addClass("load-opa");
		$(".arrow-size-left-2").addClass("load-opa");
		$(".arrow-size-left-3").addClass("load-opa");
		$(".arrow-size-left-4").addClass("load-opa");
		$(".arrow-size-left-5").addClass("load-opa");
		$(".arrow-size-right-2").addClass("load-opa");
		$(".arrow-size-right-3").addClass("load-opa");
		$(".arrow-size-right-4").addClass("load-opa");
		$(".arrow-size-right-5").addClass("load-opa");




		//  section 1 to section 2

		$(".arrow-size-right").on("click", function(){



			if ($(".arrow-size-left").hasClass("load-opa")) {
				if (!$(".arrow-size-right").hasClass("load-opa")) {
					if (!$(".b-2").hasClass(".load-opa")) {


							$(".arrow-size-left").removeClass("load-opa");
							$(".b-1").removeClass("load-opa");
							$(".b-2").addClass("load-opa");
							$(".arrow-size-right").addClass("load-opa");
							$(".arrow-size-right-2").removeClass("load-opa");

							var SECT2 = new TimelineMax()

							SECT2.fromTo(".body-home", 1,  {x:"0%"} , {x: "-20%"})


					}
				}		
			}



		})


		//  section 2 to section 1

		$(".arrow-size-left").on("click", function() {
			
			if (!$(".arrow-size-left").hasClass("load-opa")) {
				if (!$(".b-1").hasClass("load-opa")) {
					if ($(".b-2").hasClass("load-opa")) {
						if (!$(".arrow-size-right-2").hasClass("load-opa")) {

							$(".arrow-size-left").addClass("load-opa");
							$(".b-1").addClass("load-opa");
							$(".b-2").removeClass("load-opa");
							$(".arrow-size-right-2").addClass("load-opa");
							$(".arrow-size-right").removeClass("load-opa");

							var SECT1 = new TimelineMax()

							SECT1.fromTo(".body-home", 1,  {x:"-20%"} , {x: "0%"})

						}
					}
				}
			}





		})


		// section 2 to section 3 

		 $(".arrow-size-right-2").on("click", function () {

			if (!$(".arrow-size-right-2").hasClass("load-opa")) {
				if (!$(".arrow-size-left").hasClass("load-opa")) {

					$(".arrow-size-right-2").addClass("load-opa");
					$(".arrow-size-right-3").removeClass("load-opa");
					$(".arrow-size-left").addClass("load-opa");
					$(".arrow-size-left-2").removeClass("load-opa");
					$(".b-2").removeClass("load-opa");
					$(".b-3").addClass("load-opa");

							var SECT3 = new TimelineMax()

							SECT3.fromTo(".body-home", 1,  {x:"-20%"} , {x: "-40%"})

				}
			}



		 })

		// section 3 to section 2 

		 $(".arrow-size-left-2").on("click", function () {

			if (!$(".arrow-size-left-2").hasClass("load-opa")) {
				if (!$(".arrow-size-right-3").hasClass("load-opa")) {

					$(".arrow-size-right-3").addClass("load-opa");
					$(".arrow-size-right-2").removeClass("load-opa");
					$(".arrow-size-left-2").addClass("load-opa");
					$(".arrow-size-left").removeClass("load-opa");
					$(".b-3").removeClass("load-opa");
					$(".b-2").addClass("load-opa");


							var SECT32 = new TimelineMax()

							SECT32.fromTo(".body-home", 1,  {x:"-40%"} , {x: "-20%"})

				}
			}



		 })


		// section 3 to section 4 

		 $(".arrow-size-right-3").on("click", function () {

			if (!$(".arrow-size-right-3").hasClass("load-opa")) {
				if (!$(".arrow-size-left-2").hasClass("load-opa")) {

					$(".arrow-size-right-3").addClass("load-opa");
					$(".arrow-size-right-4").removeClass("load-opa");
					$(".arrow-size-left-2").addClass("load-opa");
					$(".arrow-size-left-3").removeClass("load-opa");
					$(".b-3").removeClass("load-opa");
					$(".b-4").addClass("load-opa");


							var SECT34 = new TimelineMax()

							SECT34.fromTo(".body-home", 1,  {x:"-40%"} , {x: "-60%"})


				}
			}



		 })

		// section 4 to section 3 

		 $(".arrow-size-left-3").on("click", function () {

			if (!$(".arrow-size-left-3").hasClass("load-opa")) {
				if (!$(".arrow-size-right-4").hasClass("load-opa")) {

					$(".arrow-size-right-4").addClass("load-opa");
					$(".arrow-size-right-3").removeClass("load-opa");
					$(".arrow-size-left-3").addClass("load-opa");
					$(".arrow-size-left-2").removeClass("load-opa");
					$(".b-4").removeClass("load-opa");
					$(".b-3").addClass("load-opa");

							var SECT43 = new TimelineMax()

							SECT43.fromTo(".body-home", 1,  {x:"-60%"} , {x: "-40%"})

				}
			}



		 })

		// section 4 to section 5 

		 $(".arrow-size-right-4").on("click", function () {

			if (!$(".arrow-size-right-4").hasClass("load-opa")) {
				if (!$(".arrow-size-left-3").hasClass("load-opa")) {

					$(".arrow-size-right-4").addClass("load-opa");
					$(".arrow-size-left-3").addClass("load-opa");
					$(".arrow-size-left-4").removeClass("load-opa");
					$(".b-4").removeClass("load-opa");
					$(".b-5").addClass("load-opa");

							var SECT45 = new TimelineMax()

							SECT45.fromTo(".body-home", 1,  {x:"-60%"} , {x: "-80%"})

				}
			}



		 })

		// section 5 to section 4 

		 $(".arrow-size-left-4").on("click", function () {

			if (!$(".arrow-size-left-4").hasClass("load-opa")) {
				if ($(".arrow-size-right-5").hasClass("load-opa")) {

					$(".arrow-size-right-4").removeClass("load-opa");
					$(".arrow-size-left-4").addClass("load-opa");
					$(".arrow-size-left-3").removeClass("load-opa");
					$(".b-5").removeClass("load-opa");
					$(".b-4").addClass("load-opa");

							var SECT54 = new TimelineMax()

							SECT54.fromTo(".body-home", 1,  {x:"-80%"} , {x: "-60%"})

				}
			}



		 })



	})


// menu on click button 


	$(function () { 

		 $(".button").on("click", function () {

		 	$(".menu-active").toggleClass("menu-click");
		 	$(".button-line-1").toggleClass("button-line-ac-1");
		 	$(".button-line-2").toggleClass("button-line-ac-2");
		 	$(".button-line-3").toggleClass("button-line-ac-3");
		 	$(".logo-main").toggleClass("logo-main-cl");



		 })

	})


//  loading disappear 

	$(function () { 

		$(".load-bars-move").ready(function() {

			$(".loading-screen").delay(4900).queue(function (next) {

					$(this).css({"display": "none"});
					next();

			})  ;

		}); 


	})


	//  sprite animation 

		// sprite 1

		$(function () { 

			var images = [

				"img/sprite/no-11-1.png" ,
				"img/sprite/no-2-1.png"  ,
				"img/sprite/no-3-1.png"  ,
				"img/sprite/no-4-1.png"  ,
				"img/sprite/no-5-1.png"  ,
				"img/sprite/no-6-1.png"  ,
				"img/sprite/no-5-1.png"  ,
				"img/sprite/no-4-1.png"  ,
				"img/sprite/no-3-1.png"  ,
				"img/sprite/no-2-1.png"  ,
				"img/sprite/no-12-1.png"  ,
				"img/sprite/no-13-1.png"  ,
				"img/sprite/no-14-1.png"  ,
				"img/sprite/no-15-1.png"  ,
				"img/sprite/no-16-1.png"  ,
				"img/sprite/no-15-1.png"  ,
				"img/sprite/no-14-1.png"  ,
				"img/sprite/no-12-1.png"  ,
				"img/sprite/no-11-1.png"  ,

			];

		var obj = {curImg: 0};

		var tween = TweenMax.to(obj, 3, {

			curImg: images.length - 1 ,
			roundProps: "curImg" ,
			repeat: -1 ,
			immediateRender: true ,
			ease : Linear.easeNone ,
			onUpdate: function () {

				$("#sprite").attr("src" , images[obj.curImg]);

				}

			}
		);

		var controller = new ScrollMagic.Controller();

		var sceneSprite = new ScrollMagic.Scene( {triggerElement: ".loading-screen", duration: "0%"})
				.setTween(tween)
				.addTo(controller);

		})

		// sprite 2

		$(function () { 

			var images = [

				"img/sprite/no-11-1.png" ,
				"img/sprite/no-2-1.png"  ,
				"img/sprite/no-3-1.png"  ,
				"img/sprite/no-4-1.png"  ,
				"img/sprite/no-5-1.png"  ,
				"img/sprite/no-6-1.png"  ,
				"img/sprite/no-5-1.png"  ,
				"img/sprite/no-4-1.png"  ,
				"img/sprite/no-3-1.png"  ,
				"img/sprite/no-2-1.png"  ,
				"img/sprite/no-12-1.png"  ,
				"img/sprite/no-13-1.png"  ,
				"img/sprite/no-14-1.png"  ,
				"img/sprite/no-15-1.png"  ,
				"img/sprite/no-16-1.png"  ,
				"img/sprite/no-15-1.png"  ,
				"img/sprite/no-14-1.png"  ,
				"img/sprite/no-12-1.png"  ,
				"img/sprite/no-11-1.png"  ,

			];

		var obj = {curImg: 0};

		var tween = TweenMax.to(obj, 5, {

			curImg: images.length - 1 ,
			roundProps: "curImg" ,
			repeat: -1 ,
			immediateRender: true ,
			ease : Linear.easeNone ,
			onUpdate: function () {

				$("#sprite-2").attr("src" , images[obj.curImg]);

				}

			}
		);

		var controller = new ScrollMagic.Controller();

		var sceneSprite = new ScrollMagic.Scene( {triggerElement: ".loading-screen", duration: "0%"})
				.setTween(tween)
				.addTo(controller);

		})

		// sprite 3

		$(function () { 

			var images = [

				"img/sprite/no-11-1.png" ,
				"img/sprite/no-2-1.png"  ,
				"img/sprite/no-3-1.png"  ,
				"img/sprite/no-4-1.png"  ,
				"img/sprite/no-5-1.png"  ,
				"img/sprite/no-6-1.png"  ,
				"img/sprite/no-5-1.png"  ,
				"img/sprite/no-4-1.png"  ,
				"img/sprite/no-3-1.png"  ,
				"img/sprite/no-2-1.png"  ,
				"img/sprite/no-12-1.png"  ,
				"img/sprite/no-13-1.png"  ,
				"img/sprite/no-14-1.png"  ,
				"img/sprite/no-15-1.png"  ,
				"img/sprite/no-16-1.png"  ,
				"img/sprite/no-15-1.png"  ,
				"img/sprite/no-14-1.png"  ,
				"img/sprite/no-12-1.png"  ,
				"img/sprite/no-11-1.png"  ,

			];

		var obj = {curImg: 0};

		var tween = TweenMax.to(obj, 0.9, {

			curImg: images.length - 1 ,
			roundProps: "curImg" ,
			repeat: -1 ,
			immediateRender: true ,
			ease : Linear.easeNone ,
			onUpdate: function () {

				$("#sprite-3").attr("src" , images[obj.curImg]);

				}

			}
		);

		var controller = new ScrollMagic.Controller();

		var sceneSprite = new ScrollMagic.Scene( {triggerElement: ".loading-screen", duration: "0%"})
				.setTween(tween)
				.addTo(controller);

		})


		// sprite cross 1

		$(function () { 

			var images = [

				"img/sprite/cross-1-1.png" ,
				"img/sprite/cross-2-1.png"  ,
				"img/sprite/cross-3-1.png"  ,
				"img/sprite/cross-4-1.png"  ,
				"img/sprite/cross-3-1.png"  ,
				"img/sprite/cross-2-1.png"  ,
				"img/sprite/cross-5-1.png"  ,
				"img/sprite/cross-6-1.png" ,
				"img/sprite/cross-7-1.png"  ,
				"img/sprite/cross-8-1.png"  ,
				"img/sprite/cross-10-1.png"  ,
				"img/sprite/cross-1-1.png"  ,

			];

		var obj = {curImg: 0};

		var tween = TweenMax.to(obj, 1.3, {

			curImg: images.length - 1 ,
			roundProps: "curImg" ,
			repeat: -1 ,
			immediateRender: true ,
			ease : Linear.easeNone ,
			onUpdate: function () {

				$("#sprite-cr-1").attr("src" , images[obj.curImg]);

				}

			}
		);

		var controller = new ScrollMagic.Controller();

		var sceneSprite = new ScrollMagic.Scene( {triggerElement: ".loading-screen", duration: "0%"})
				.setTween(tween)
				.addTo(controller);

		})


		// sprite cross 2

		$(function () { 

			var images = [

				"img/sprite/cross-1-1.png" ,
				"img/sprite/cross-2-1.png"  ,
				"img/sprite/cross-3-1.png"  ,
				"img/sprite/cross-4-1.png"  ,
				"img/sprite/cross-3-1.png"  ,
				"img/sprite/cross-2-1.png"  ,
				"img/sprite/cross-5-1.png"  ,
				"img/sprite/cross-6-1.png" ,
				"img/sprite/cross-7-1.png"  ,
				"img/sprite/cross-8-1.png"  ,
				"img/sprite/cross-10-1.png"  ,
				"img/sprite/cross-1-1.png"  ,

			];

		var obj = {curImg: 0};

		var tween = TweenMax.to(obj, 1.7, {

			curImg: images.length - 1 ,
			roundProps: "curImg" ,
			repeat: -1 ,
			immediateRender: true ,
			ease : Linear.easeNone ,
			onUpdate: function () {

				$("#sprite-cr-2").attr("src" , images[obj.curImg]);

				}

			}
		);

		var controller = new ScrollMagic.Controller();

		var sceneSprite = new ScrollMagic.Scene( {triggerElement: ".loading-screen", duration: "0%"})
				.setTween(tween)
				.addTo(controller);

		})



		// sprite cross 3

		$(function () { 

			var images = [

				"img/sprite/cross-1-1.png" ,
				"img/sprite/cross-2-1.png"  ,
				"img/sprite/cross-3-1.png"  ,
				"img/sprite/cross-4-1.png"  ,
				"img/sprite/cross-3-1.png"  ,
				"img/sprite/cross-2-1.png"  ,
				"img/sprite/cross-5-1.png"  ,
				"img/sprite/cross-6-1.png" ,
				"img/sprite/cross-7-1.png"  ,
				"img/sprite/cross-8-1.png"  ,
				"img/sprite/cross-10-1.png"  ,
				"img/sprite/cross-1-1.png"  ,

			];

		var obj = {curImg: 0};

		var tween = TweenMax.to(obj, 0.9, {

			curImg: images.length - 1 ,
			roundProps: "curImg" ,
			repeat: -1 ,
			immediateRender: true ,
			ease : Linear.easeNone ,
			onUpdate: function () {

				$("#sprite-cr-3").attr("src" , images[obj.curImg]);

				}

			}
		);

		var controller = new ScrollMagic.Controller();

		var sceneSprite = new ScrollMagic.Scene( {triggerElement: ".loading-screen", duration: "0%"})
				.setTween(tween)
				.addTo(controller);

		})



		//  menu hover anchor link 

		$(function () { 


				// mouse enter 1

			$(".mi-1").mouseenter( function(){

					$(".mq-1").addClass("block-move")

				}
			)

			//  mouse leave 1

			$(".mi-1").mouseleave( function(){

					$(".mq-1").removeClass("block-move")

				}
			)


				// mouse enter 2

			$(".mi-2").mouseenter( function(){

					$(".mq-2").addClass("block-move")

				}
			)

			//  mouse leave 2

			$(".mi-2").mouseleave( function(){

					$(".mq-2").removeClass("block-move")

				}
			)


				// mouse enter 3

			$(".mi-3").mouseenter( function(){

					$(".mq-3").addClass("block-move")

				}
			)

			//  mouse leave 3

			$(".mi-3").mouseleave( function(){

					$(".mq-3").removeClass("block-move")

				}
			)


				// mouse enter 4

			$(".mi-4").mouseenter( function(){

					$(".mq-4").addClass("block-move")

				}
			)

			//  mouse leave 4

			$(".mi-4").mouseleave( function(){

					$(".mq-4").removeClass("block-move")

				}
			)


				// mouse enter 5

			$(".mi-5").mouseenter( function(){

					$(".mq-5").addClass("block-move")

				}
			)

			//  mouse leave 5

			$(".mi-5").mouseleave( function(){

					$(".mq-5").removeClass("block-move")

				}
			)






		})


		//  logo loading animation 

		$(function () { 

			var test = new TimelineMax();

			test.fromTo(".logo-path-1 ", 0.3, {opacity: 0,} , {opacity: 1, ease:Power1.easeInOut})
			test.fromTo(".logo-path-2 ", 0.3, {opacity: 0} , {opacity: 1, ease:Power1.easeInOut})
			test.fromTo(".logo-path-3 ", 0.3, {opacity: 0} , {opacity: 1, ease:Power1.easeInOut})
			test.fromTo(".logo-path-4 ", 0.3, {opacity: 0} , {opacity: 1, ease:Power1.easeInOut})
			test.fromTo(".logo-path-5 ", 0.3, {opacity: 0} , {opacity: 1, ease:Power1.easeInOut})





		})


		//  anmation background test 

		$(function () { 		

			// var bgAni = new TimelineMax()

			// bgAni.to(".ani-1", 2 , {

			// 	attr:{
			// 		d: "M0 120 Q360 180 720 120 T 1440 120 V240 H0 Z"
			// 	},

			// ease: Power1.easeInOut ,
			// repeat: -1 ,
			// yoyo: true

			// })



		})