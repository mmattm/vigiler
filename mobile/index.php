<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Vigiler ◊</title>
    <link rel="stylesheet" href="style.css">
   	
    <!-- Allow web app to be run in full-screen mode. -->
      <meta name="apple-mobile-web-app-capable"
            content="yes">
    
      <!-- Make the app title different than the page title. -->
      <meta name="apple-mobile-web-app-title"
            content="Vigiler">
    
      <!-- Configure the status bar. -->
      <meta name="apple-mobile-web-app-status-bar-style"
            content="black">
    
      <!-- Set the viewport. -->
      <meta name="viewport"
            content="initial-scale=1">
    
      <!-- Disable automatic phone number detection. -->
      <meta name="format-detection"
            content="telephone=no">
    
      <!-- ICONS -->
    
      <!-- iPad retina icon -->
      <link href="apple-touch-icon-precomposed-152.png"
            sizes="152x152"
            rel="apple-touch-icon-precomposed">
    
      <!-- iPad retina icon (iOS < 7) -->
      <link href="apple-touch-icon-precomposed-144.png"
            sizes="144x144"
            rel="apple-touch-icon-precomposed">
    
      <!-- iPad non-retina icon -->
      <link href="apple-touch-icon-precomposed-76.png"
            sizes="76x76"
            rel="apple-touch-icon-precomposed">
    
      <!-- iPad non-retina icon (iOS < 7) -->
      <link href="apple-touch-icon-precomposed-72.png"
            sizes="72x72"
            rel="apple-touch-icon-precomposed">
    
      <!-- iPhone 6 Plus icon -->
      <link href="apple-touch-icon-precomposed-180.png"
            sizes="120x120"
            rel="apple-touch-icon-precomposed">
    
      <!-- iPhone retina icon (iOS < 7) -->
      <link href="src/apple-touch-icon-precomposed-114.png"
            sizes="114x114"
            rel="apple-touch-icon-precomposed">
    
      <!-- iPhone non-retina icon (iOS < 7) -->
      <link href="apple-touch-icon-precomposed-57.png"
            sizes="57x57"
            rel="apple-touch-icon-precomposed">
    
      <!-- STARTUP IMAGES -->
    
      <!-- iPad retina portrait startup image -->
      <link href="apple-touch-startup-image-1536x2008.png"
            media="(device-width: 768px) and (device-height: 1024px)
                   and (-webkit-device-pixel-ratio: 2)
                   and (orientation: portrait)"
            rel="apple-touch-startup-image">
    
      <!-- iPad retina landscape startup image -->
      <link href="apple-touch-startup-image-1496x2048.png"
            media="(device-width: 768px) and (device-height: 1024px)
                   and (-webkit-device-pixel-ratio: 2)
                   and (orientation: landscape)"
            rel="apple-touch-startup-image">
    
      <!-- iPad non-retina portrait startup image -->
      <link href="apple-touch-startup-image-768x1004.png"
            media="(device-width: 768px) and (device-height: 1024px)
                   and (-webkit-device-pixel-ratio: 1)
                   and (orientation: portrait)"
            rel="apple-touch-startup-image">
    
      <!-- iPad non-retina landscape startup image -->
      <link href="apple-touch-startup-image-748x1024.png"
            media="(device-width: 768px) and (device-height: 1024px)
                   and (-webkit-device-pixel-ratio: 1)
                   and (orientation: landscape)"
            rel="apple-touch-startup-image">
    
      <!-- iPhone 6 Plus portrait startup image -->
      <link href="apple-touch-startup-image-1242x2148.png"
            media="(device-width: 414px) and (device-height: 736px)
                   and (-webkit-device-pixel-ratio: 3)
                   and (orientation: portrait)"
            rel="apple-touch-startup-image">
    
      <!-- iPhone 6 Plus landscape startup image -->
      <link href="apple-touch-startup-image-1182x2208.png"
            media="(device-width: 414px) and (device-height: 736px)
                   and (-webkit-device-pixel-ratio: 3)
                   and (orientation: landscape)"
            rel="apple-touch-startup-image">
    
      <!-- iPhone 6 startup image -->
      <link href="apple-touch-startup-image-750x1294.png"
            media="(device-width: 375px) and (device-height: 667px)
                   and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image">
    
      <!-- iPhone 5 startup image -->
      <link href="apple-touch-startup-image-640x1096.png"
            media="(device-width: 320px) and (device-height: 568px)
                   and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image">
    
      <!-- iPhone < 5 retina startup image -->
      <link href="apple-touch-startup-image-640x920.png"
            media="(device-width: 320px) and (device-height: 480px)
                   and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image">
    
      <!-- iPhone < 5 non-retina startup image -->
      <link href="apple-touch-startup-image-320x460.png"
            media="(device-width: 320px) and (device-height: 480px)
                   and (-webkit-device-pixel-ratio: 1)"
            rel="apple-touch-startup-image">
    
      <!-- HACKS -->
    
      <!-- Prevent text size change on orientation change. -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="script.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/easing/EasePack.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/utils/Draggable.min.js"></script>
    <script src="switch/switchery.js"></script>
    <link rel="stylesheet" href="switch/switchery.css" />
  </head>
  <body>
   <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<link href='http://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet' type='text/css'>

	
	<div class="app">
			<div id="notify">
				<h2>Specify the activity</h2>
        <div id="switches"></div>
       <!-- <div class="switch">
            <input type="checkbox" name="toggle" id="toggle">
            <label for="toggle"></label>

            <span class="label">Perceived Value</span>
        </div>
        <div class="switch">
             <input type="checkbox" name="toggle2" id="toggle2">
             <label for="toggle2"></label>

             <span class="label">StakeHolders ident.</span>
       </div>
       <div class="switch">
           <input type="checkbox" name="toggle3" id="toggle3">
           <label for="toggle3"></label>

           <span class="label">Blogs & Forum</span>
        </div>
        <div class="switch">
           <input type="checkbox" name="toggle4" id="toggle4">
           <label for="toggle4"></label>

            <span class="label">Rumors</span>
      	</div> -->
        <div class='button blue center notifybutton'>Notify your manager</div>
      </div>
			<div class="header">

				<span class="settings"></span>

				<img src="src/logo.png"/>

				<span class="chat"></span>

			</div>

			<div class="content">

			</div>	

			<div class="footer">
				<div id="swipe_strategy" class="rate" veille-id="1"></div>
				<div id="swipe_image" class="rate" veille-id="2"></div>
				<div id="swipe_tech" class="rate" veille-id="3"></div>
				<div id="swipe_employees" class="rate" veille-id="4"></div>
			</div>

	</div>	

  </body>
</html>
