// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");

	// declare your variables here.
	var background;
	var loader = new createjs.LoadQueue(false);

	var gradientText;
	var gradientTextTwo;
	var gradientTextThree;
	var blueText;
	var blueTextTwo;
	var greyText;
	var greyTextTwo;
	var offerText;
	var deezer;
	var mands;
	var skyLogo;
	var twelveMonths;
	var grabber;
	var findOutMore;
	var graphics;
	var shape;
	var blurFilter;
	var bounds;

	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");

	// register the stage to handle mouse events.
	stage.enableMouseOver(10);

	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick);

	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}

	// create a preloader to load the images.
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);

	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id:"background", src:"images/background.png"},
		{id:"gradientText", src:"images/gradienttext.png"},
		{id:"gradientTextTwo", src:"images/gradientText2.png"},
		{id:"gradientTextThree", src:"images/gradientText3.png"},
		{id:"blueText", src:"images/bluetext.png"},
		{id:"blueTextTwo", src:"images/bluetext2.png"},
		{id:"greyText", src:"images/greytext.png"},
		{id:"greyTextTwo", src:"images/greytext2.png"},
		{id:"offerText", src:"images/offertext.png"},
		{id:"deezer", src:"images/deezer.png"},
		{id:"mands", src:"images/mands.png"},
		{id:"skyLogo", src:"images/skylogo.png"},
		{id:"twelveMonths", src:"images/twelvemonths.png"},
		{id:"grabber", src:"images/grabber.png"},
		{id:"findOutMore", src:"images/findoutmore.png"}
	]);

	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");

		drawTheBannerBackground();
	}

	function drawTheBannerBackground() {
		console.log("draw and animate the background.");

		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap(loader.getResult("background"));

		// add background to the display list.
		stage.addChild( background );

		// after the background is drawn on the canvas draw and animate the content for frame 1.
		frame1();
	}

	function frame1() {
		console.log("draw and animate frame one.");

		// refer to the creative brief, frame 1 for guidance.
		deezer = new createjs.Bitmap(loader.getResult("deezer"));
		mands = new createjs.Bitmap(loader.getResult("mands"));
		skyLogo = new createjs.Bitmap(loader.getResult("skyLogo"));
		gradientText = new createjs.Bitmap(loader.getResult("gradientText"));
		blueText = new createjs.Bitmap(loader.getResult("blueText"));

		// alpha to 0
		deezer.alpha = 1;
		mands.alpha = 1;
		skyLogo.alpha = 1;
		gradientText.alpha = 0;
		blueText.alpha = 0;

		// add stages
		stage.addChild(deezer);
		stage.addChild(mands);
		stage.addChild(skyLogo);
		stage.addChild(gradientText);
		stage.addChild(blueText);

		// call fade ins
		setTimeout(loadGradientText, 300);
		setTimeout(loadBlueText, 1000);
		setTimeout(fadeFrame1, 2500);

		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 3000);
	}

	function loadGradientText() {
		createjs.Tween.get(gradientText).to({alpha:1}, 500);
	}

	function loadBlueText() {
		createjs.Tween.get(blueText).to({alpha:1}, 500);
	}

	function fadeFrame1() {
		createjs.Tween.get(deezer).to({alpha:0}, 500);
		createjs.Tween.get(mands).to({alpha:0}, 500);
		createjs.Tween.get(gradientText).to({alpha:0}, 500);
		createjs.Tween.get(blueText).to({alpha:0}, 500);
	}

	function frame2() {
		console.log("draw and animate frame two.");
		// load and fade in gradientTextTwo
		fadeGradientTextTwo();
		// bouncing 12 months sign
		bouncey();
		// load and fade in greyText
		setTimeout(fadeGreyText, 500);
		//fade frame2
		setTimeout(fadeFrame2, 2500);
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 3000);
	}

	function fadeGradientTextTwo() {
		gradientTextTwo = new createjs.Bitmap(loader.getResult("gradientTextTwo"));
		gradientTextTwo.alpha = 0;
		createjs.Tween.get(gradientTextTwo).to({alpha:1}, 500);
	  stage.addChild(gradientTextTwo);
	}

	function fadeGreyText() {
		greyText = new createjs.Bitmap(loader.getResult("greyText"));
		greyText.alpha = 0;
		createjs.Tween.get(greyText).to({alpha:1}, 500);
		stage.addChild(greyText);
	}

	function bouncey() {
		twelveMonths = new createjs.Bitmap(loader.getResult("twelveMonths"));
		twelveMonths.y = -500;
		createjs.Tween.get(twelveMonths).to({y:30}, 500).to({y:-10},200).to({y:0}, 100);
		stage.addChild(twelveMonths);
	}

	function fadeFrame2() {
		createjs.Tween.get(gradientTextTwo).to({alpha:0}, 500);
		createjs.Tween.get(greyText).to({alpha:0}, 500);
		createjs.Tween.get(twelveMonths).to({alpha:0}, 500);
	}

	function frame3() {
		console.log("draw and animate frame three.");

		// find out find out more
		findOutMore()

		// fade in gradient text 3
		setTimeout(fadeGradientTextThree, 300);

		// fade in blue copy
		setTimeout(fadeBlueText, 600);

		// fade in limited offerText
		setTimeout(fadeOffer, 900);

		// fade grey Text
		setTimeout(fadeGreyTextTwo, 1200);

		// white sheen
		setTimeout(buttonSheen, 2000);

		setTimeout(stopAnimation, 9000);
	}

	function findOutMore() {
		findOutMore = new createjs.Bitmap(loader.getResult("findOutMore"));
		stage.addChild(findOutMore);
	}

	function fadeGradientTextThree() {
		gradientTextThree = new createjs.Bitmap(loader.getResult("gradientTextThree"));
		gradientTextThree.alpha = 0;
		createjs.Tween.get(gradientTextThree).to({alpha:1}, 500);
		stage.addChild(gradientTextThree);
	}

	function fadeBlueText() {
		blueTextTwo = new createjs.Bitmap(loader.getResult("blueTextTwo"));
		blueTextTwo.alpha = 0;
		createjs.Tween.get(blueTextTwo).to({alpha:1}, 500);
		stage.addChild(blueTextTwo);
	}

	function fadeOffer() {
		offerText = new createjs.Bitmap(loader.getResult("offerText"));
		offerText.alpha = 0;
		createjs.Tween.get(offerText).to({alpha:1}, 500);
		stage.addChild(offerText);
	}

	function fadeGreyTextTwo() {
		greyTextTwo = new createjs.Bitmap(loader.getResult("greyTextTwo"));
		greyTextTwo.alpha = 0;
		createjs.Tween.get(greyTextTwo).to({alpha:1}, 500);
		stage.addChild(greyTextTwo);
	}

	function buttonSheen() {
		var shape = new createjs.Shape().set({x:120,y:201});
	  shape.graphics.beginFill("#ffffff").drawEllipse(0, 0, 20, 35);
	  var blurFilter = new createjs.BlurFilter(5, 5, 4);
	  shape.filters = [blurFilter];
	  var bounds = blurFilter.getBounds();
	  shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
		shape.alpha = 0;
		createjs.Tween.get(shape).to({alpha:1}, 0).to({alpha: 1}, 500).to({alpha:0}, 100);
		createjs.Tween.get(shape).to({x:270}, 600);;
	  stage.addChild(shape);
	}

	function stopAnimation() {
		console.log("DONE");
		createjs.Ticker.removeEventListener("tick", handleTick);
	}

};
