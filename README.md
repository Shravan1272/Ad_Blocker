firstly made 3 files 
1) manifest.json:
    manifest.json is the only essential file an extension needs.
    In this case, it will contain metadata about the extension,
    the permissions it needs to operate, and the script it should run in the background.
    permissions establish what the extension is allowed to do, such as getting the URL of the current page, or adding JavaScript to a website.
    When we’re publishing our extension somewhere like the Chrome Web Store, we’ll be asked to justify each permission we’re requesting access to, in order to ensure the security and privacy of our users.
    Here, we’re asking for permissions for tabs and webNavigation in order to know when we’re visiting a new website, as well as what that website is. We need this to check if the website is LinkedIn so we can launch our adblocking script.
    Lastly, we ask for permission to modify the https://www.linkedin.com/ webpage, so that we can insert our script.
   


2) background.js:
    setting up our event listener that will trigger an action every time the user loads a new webpage.
    then check if that website is LinkedIn, and if it is, we’ll block ads.
    Get the URL when a new page loads, strip the unnecessary stuff embedded in URL and check if the domain itself actually matches linkedin.com.
    If it does, we inject the contents of linkedin.js into the website, which will work to remove our ads. If it doesn’t, we just don’t do anything.

3) linkedin.js
   So as we know generally LinkedIn adds a line that says “Promoted” to the post in order to indicate that it is an ad.
   so simply looking through the page for elements that contain the word “Promoted” in them is all we need to find an ad in JS.
   to actually remove the ad, we need to find the ancestor (n-th parent) element that wraps around the entire post and get rid of that.
   With Dev Tools, we can actually right-click on the element and select “Remove Element” to see the result

    
