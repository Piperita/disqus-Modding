// ==UserScript==
// @name        disqus_full_stable
// @namespace   Pip
// @include     http://disqus.com/embed/*
// @version     1
// @grant       none
// ==/UserScript==

var timer0 = setTimeout(function(){
	/************************
	 ************************   Creates the pad for disqus proper, sadly unuseable
	 *** Adds launch-pad ****   via iFrame
	 ************************
	 ************************/
	a='<div class="wrap-around"><button title="Shows all threads with collapsed replies of the first layer" class="blockIT" id="toggleAll" onclick=showMain()>Show Main</button><div class="blockIT"><button title="Collapses all posts" class="inlineIT" id="plusbutton" onclick=toggleAll()>Coll. Posts</button><button title="Hides All replies" class="inlineIT" id="minusbutton" onclick=toggleRep()>Hides Replies </button></div><button title="Loads more post" class="blockIT" id="loadbutton" onclick=loadMore()>Show more</button></div>';
	$('#footer').before(a);
	
	p="<div class='pull-right' style='display: inline;'><button id='showMain' class='dropdown-toggle showMain'>Show only Main</button><button id='hideRep' class='dropdown-toggle hideRep'>Toggle Replies</button><button id='hideAll' class='dropdown-toggle hideAll'>Toggle Posts</button><button id='loadMore' class='dropdown-toggle loadMore'>Show more</button><button id='refreshButton' class='dropdown-toggle refreshButton' style='padding-right: 0px;'>[refresh]</button></div>";
	$('.sorting').after(p);
	
	/*************************    From patcullen (https://github.com/patcullen/injectCSS) 
	 *************************
	 *** require function ****    disqus blocks direct injection, therefore a full copy is necessary.
	 *************************    
	 *************************    Released under the MIT licence*/
	(function(window){

	var module = (function(){

		// We will only be manipulating one extra style block since older IE browsers have a limit of 32 style blocks per page
		var __dynamicStyleObject = null,

		/* Accepts a function where the entire contents is CSS wrapped in a multiline comment (much like this comment)
		 * Returns the style element that was created and injected.
		 * Example:
		 *		(function(){
		 *			require(['injectCSS'], function(injectCSS) {
		 *				injectCSS(function(){/*
		 *					.woohoo {
		 *						border: 3px solid #f0f;
		 *					}
		 *				* /});
		 *			// or
		 *				injectCSS('.foobar { border: 2px solid #f00; } ');
		 *			});
		 *		})();
		 */
		inject = function(input) {
			// first ensure that we have created a dom element to work with
			if (__dynamicStyleObject == null) {
				__dynamicStyleObject = window.document.createElement('style');
				__dynamicStyleObject.id = 'injectCSS';
				__dynamicStyleObject.innerHTML = '';
				document.body.appendChild(__dynamicStyleObject);
			}
		
			// interpret the input
			var content = null;
			if (typeof input === 'string') { 
				content = input;
			} else
			if (typeof input === 'function') { 
				content = input.toString().
					replace(/^[^\/]+\/\*!?/, '').
					replace(/\*\/[^\/]+$/, '');
			} else {
				throw 'Type (' + (typeof input) + ') is not supported by injectCSS.';
			}
		
			// now lets append CSS content inside
			if (content != null)
				__dynamicStyleObject.innerHTML += '\n' + content;
		
			// return our working node for the implementor to potentially poke holes in.
			return __dynamicStyleObject;
		}

		// incase someone uses a script include then throws in some requireJS later. we want to use the same style object always. a clean dom is a happy dom.
		if (window['injectCSS'] != undefined)
			return window['injectCSS'];
		// incase someone uses a script include then throws in some requireJS later. we want to use the same style object always. a clean dom is a happy dom.
		if (window.injectCSS != undefined)
			return window.injectCSS;
	
		return inject;
	
	});


	/* If RequireJS is not detected, a global variable called 'injectCSS' will be created.
	 *
	 */
	if (window['define'] !== undefined) {
		define(module);
	} else {
		window['injectCSS'] = module();
	}

	if (typeof define === 'function' && define.amd) {
		define('injectCSS', [], module);
	} else {
		window.injectCSS = module();
	}

	})( window );


	/*************************    
	 *************************
	 ******* Add Css *********    Reduces margins, formats launchpad,
	 *************************    
	 *************************/

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.inlineIT{
			display: inline;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.blockIT{
			display: block;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.titleIT{
			font-size: small;
			text-align: center;
			width: 60px;
			display:none;
		}
	    */});
	});


	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		button{
			background-color: #bbb;
			cursor:pointer;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#plusbutton{
			width: 28px;
			height: 28px;
			text-align: center;
			margin: 1px;
			padding:1px;
			font-size: 9px
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#minusbutton{
			width: 28px;
			height: 28px;
			text-align: center;
			margin: 1px;
			padding:1px;	
			font-size: 9px	
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#loadbutton{
			width: 58px;
			text-align: center;
			margin: 1px;
			padding:1px;
			font-size: 9px		
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#toggleAll{
			width: 58px;
			text-align: center;
			margin: 1px;
			padding:1px;	
			font-size: 9px;	
			margin: 1px;
			padding:1px;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.wrap-around{
			display: inline-block;
			border: 2px solid;
			position: fixed;
			bottom: 2%;
			right: 2%;
			background-color: #ddd;
		}
	    */});
	});


	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	.post{
		border-style: solid; 
		border-width: 2px;
		margin-bottom: 5px
	}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	.post-content{
		margin-bottom: 5px;
	}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	.post>.children{
		border-style: hidden; 
	}
	    */});
	});


	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	header{
		background-color: #ccc;
	}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	menu{
		background-color: #ccc;
	}
	    */});
	});
},1750)


	/*************************    
	 *************************
	 ******* Add Css *********    Reduces margins, formats launchpad,
	 *************************    
	 *************************/
var timer1 = setTimeout(function(){
	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.inlineIT{
			display: inline;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.blockIT{
			display: block;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.titleIT{
			font-size: small;
			text-align: center;
			width: 60px;
			display:none;
		}
	    */});
	});


	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		button{
			background-color: #bbb;
			cursor:pointer;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#plusbutton{
			width: 28px;
			height: 28px;
			text-align: center;
			margin: 1px;
			padding:1px;
			font-size: 9px
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#minusbutton{
			width: 28px;
			height: 28px;
			text-align: center;
			margin: 1px;
			padding:1px;	
			font-size: 9px	
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#loadbutton{
			width: 58px;
			text-align: center;
			margin: 1px;
			padding:1px;
			font-size: 9px		
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		#toggleAll{
			width: 58px;
			text-align: center;
			margin: 1px;
			padding:1px;	
			font-size: 9px;	
			margin: 1px;
			padding:1px;
		}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
		.wrap-around{
			display: inline-block;
			border: 2px solid;
			position: fixed;
			bottom: 2%;
			right: 2%;
			background-color: #ddd;
		}
	    */});
	});


	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	.post{
		border-style: solid; 
		border-width: 2px;
		margin-bottom: 5px
	}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	.post-content{
		margin-bottom: 5px;
	}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	.post>.children{
		border-style: hidden; 
	}
	    */});
	});


	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	header{
		background-color: #ccc;
	}
	    */});
	});

	require(['injectCSS'], function(injectCSS) {
	    injectCSS(function(){/*
	menu{
		background-color: #ccc;
	}
	    */});
	});
},1750)


var timer2 = setTimeout(function(){
	/*************************    
	 *************************
	 *****Adds functions******    Button-functionality
	 *************************    
	 *************************/
	ddd=0;	
	ccc=0;

//** Simulates click on "Show more" **
	function loadMore(){
		$('.load-more').children().click()
	}

//** Hides/Shows replies **
	function toggleRep(){
		if (ccc==0){
			$('ul.children').hide();
			ccc=1;
			$('#minusbutton')[0].title="Shows all replies";
			$('#minusbutton')[0].innerHTML="Show replies";
		} else{
			$('ul.children').show();
			ccc=0;
			$('#minusbutton')[0].title="Hides all replies";
			$('#minusbutton')[0].innerHTML="Hide replies";
		}
	}

//** Collapses replies, shows main-posts **
	function showMain(){
		$('.post').addClass('collapsed');
		f=$('.collapsed')
		for(i=0; i<f.length;i++){
			if(f[i].parentElement.classList.contains("post-list") && f[i].classList.contains("minimized")==0){
				f[i].children[1].children[0].children[0].children[0].click();
			}	
		}
	}

//** Hides/Shows all posts via native disqus-functions **
	function toggleAll(){
		if (ddd==0){
			$('.post').addClass('collapsed');
			ddd=1;
			$('#plusbutton')[0].title="Expands all posts";
			$('#plusbutton')[0].innerHTML="Exp. Posts";
			//$('ul.children').show()
		} else{
			$('.post').removeClass('collapsed');
			ddd=0;
			$('#plusbutton')[0].title="Collapses all posts";
			$('#plusbutton')[0].innerHTML="Coll. Posts";
		}
	}

	/*************************    
	 *************************
	 *****Adds functions******    Links functionalities to buttons (launchpad)
	 *************************    
	 *************************/

	document.getElementById("loadbutton").onclick = loadMore;
	document.getElementById("minusbutton").onclick = toggleRep;
	document.getElementById("toggleAll").onclick = showMain;
	document.getElementById("plusbutton").onclick = toggleAll;
	
	document.getElementById("loadMore").onclick = loadMore;
	document.getElementById("hideRep").onclick = toggleRep;
	document.getElementById("showMain").onclick = showMain;
	document.getElementById("hideAll").onclick = toggleAll;
},2000)



	/*************************    
	 *************************  Creates functionality to the refresh-button
	 *****Adds functions******  stores functions and adds buttons to all headers
	 *************************   
	 *************************/
	function refresh(){
		ddd=0;	
		ccc=0;
		function getButtons(){
			$('.deleteOnPrompt').remove()
			b=$('header').parent("div.post-body").children("header")
		  	x="<div class='pull-right deleteOnPrompt' style='display: inline;'><button class='parent-link showMain'>Show main | </button><button class='parent-link hideRep' >Toggle Replies | </button><button class='parent-link hideAll'>Toggle Posts | </button><button class='parent-link loadMore'>Show more |</button><button class='parent-link refreshButton' style='padding-right: 0px;'>[refresh]</button></div>";
		  	b.append(x);
		}

		function loadMore(){
			$('.load-more').children().click()
		}

		function toggleRep(){
			if (ccc==0){
				$('ul.children').hide();
				ccc=1;
				$('#minusbutton')[0].title="Shows all replies";
				$('#minusbutton')[0].innerHTML="Show replies";
			} else{
				$('ul.children').show();
				ccc=0;
				$('#minusbutton')[0].title="Hides all replies";
				$('#minusbutton')[0].innerHTML="Hide replies";
			}
		}

		function showMain(){
			$('.post').addClass('collapsed');
			f=$('.collapsed')
			for(i=0; i<f.length;i++){
				if(f[i].parentElement.classList.contains("post-list") && f[i].classList.contains("minimized")==0){
					f[i].children[1].children[0].children[0].children[0].click();
				}	
			}
		}

		function toggleAll(){
			if (ddd==0){
				$('.post').addClass('collapsed');
				ddd=1;
				$('#plusbutton')[0].title="Expands all posts";
				$('#plusbutton')[0].innerHTML="Exp. Posts";
				//$('ul.children').show()
			} else{
				$('.post').removeClass('collapsed');
				ddd=0;
				$('#plusbutton')[0].title="Collapses all posts";
				$('#plusbutton')[0].innerHTML="Coll. Posts";
			}
		}
		
		getButtons()
		console.log('1')
		lll=document.getElementsByClassName("loadMore")
		var timer40 = setTimeout(function(){
			for (i=0;i<lll.length;i++){
				console.log(i +'_____'+lll.length)
				document.getElementsByClassName("loadMore")[i].onclick = loadMore;
				document.getElementsByClassName("hideRep")[i].onclick = toggleRep;
				document.getElementsByClassName("showMain")[i].onclick = showMain;
				document.getElementsByClassName("hideAll")[i].onclick = toggleAll;
				document.getElementsByClassName("refreshButton")[i].onclick = refresh;		
			}
		},250)
	}

		var timer4 = setTimeout(function(){
			refresh()			
		},3500)
