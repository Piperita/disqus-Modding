#About this script
[To be added without the curses I plan to use right now regarding this system ;)]

#How to use
To use it on Equestria Daily or other websites themselves without using the disqus-site itself, an add-on like GreaseMonkey (Firefox) or TamperMonkey(Chrome) is inevitable as cross-domain scripting is not possible from the console.
With such an add-on installed use the link below which should launch an install-prompt: 

####<b><a href="https://github.com/Piperita/disqus-Modding/raw/master/full/GreaseMonkey/full_stable.user.js">CLICK HERE</a></b>

Alternatively, <a href="https://cdn.rawgit.com/Piperita/disqus-Modding/master/full/Raw/full_stable.js">here</a> is the raw text for the script that can be launched via console at disqus itself or can be taken and edited according to the MIT licence.

# Functionalities
##Launchpad
Adds buttons to disqus-pages with the following functionalities:
* <b>"Show Main"</b> collapses all replies and only shows the main-threads. Depending on the status of replies (middle right button), only the first layer of replies is collapsed with further layers invisible (standard), the replies are completely hidden (with "Hide Replies") or all further layers are visible in a collapsed state (after "Exp. Posts" has been launched"). Please note, that this function eats quite a lot of ressources when launched on bigger pages; my old laptop got around to a bit over 1000 posts before stalling and registering the script as "not reacting" during processing and at 1700 posts the message occured twice before finishing.
* <b>"Exp. Posts"</b> (and after launch "Coll. Posts") does what its name says: It expands all posts by removing (or adding) the "collapsed"-class from/to all posts.
* <b>"Hide Replies"</b> (and after launch "Show Replies") makes all replies regardless of layer invisible.
* <b>"Show More"</b> launches the dreaded button (that hopefully soon gets modded back to pages).
* <b>"Refresh"</b> re-initializes the buttons and adds them to freshly  loaded comments

The buttons are at three different positions:
* Besides the sort-button
* At the header of every post
* At a dedicated launchpad. Please note that this is only functional at disqus itself and not when using it through an iFrame.

The second and third functions only target the display without much processing and are therefore instantaneous even at posts with over 2000 replies.

##CSS-tweaks
*Highlights header and footer of individual posts
*reduces margins between posts
*adds a border around posts

##Upcoming features
* An editor to get HTML Codes easily into the input-areas
* A WYSIWYG-display from the editor
