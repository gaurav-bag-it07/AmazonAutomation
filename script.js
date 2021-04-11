const pup = require("puppeteer");

let pass = "Gauravbghl2k@";
let id = "gauravbaghel2k@gmail.com";
let search1 = "Amazon alexa";
let search2 = "amazon echo show";




let browserPromise = pup.launch({
    headless: false,
    defaultViewport: false
});
let tab;
let brow;
browserPromise.then(function(browser){
    brow = browser;
    let pagesPromise = browser.pages();
    return pagesPromise;
    }).then(function(pages){
        tab = pages[0];
        let pageOpenPromise = tab.goto("https://www.amazon.in/ap/signin?ie=UTF8&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26action%3Dsign-out%26path%3D%252Fgp%252Fyourstore%252Fhome%26ref_%3Dnav_AccountFlyout_signout%26signIn%3D1%26useRedirectOnSuccess%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.mode=checkid_setup&_encoding=UTF8&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&ignoreAuthState=1&disableLoginPrepopulate=1&ref_=ap_sw_aa");
        return pageOpenPromise;
    }).then(function(){
        let idPromise = tab.type(".a-input-text.a-span12.auth-autofocus.auth-required-field",id);
        return idPromise;
    }).then(function(){
        let contPromise = tab.click(".a-button-input");
        return contPromise;
    }).then(function(){
        let waitPromise = tab.waitForSelector("#ap_password",{visible:true});
        return waitPromise;
    })
    .then(function(){
        let passPromise = tab.type("#ap_password",pass);
        return passPromise;
    }).then(function(){
        let loginPromise = tab.click(".a-button-input");
        return loginPromise;
    })
    .then(function(){
        let waitmorePromise = tab.waitForSelector("#twotabsearchtextbox",{visible:true});
        return waitmorePromise;
    })
    .then(function(){
        let searchPromise = tab.type("#twotabsearchtextbox",search1);
        return searchPromise;
    })
    .then(function(){
        let enterPromise = tab.click("#nav-search-submit-button");
        return enterPromise;
    })
    // .then(function(){
    //     let loginPromise = tab.click(".a-button-input");
    //     return loginPromise;
    // })
    .then(function(){
        let waitmoorePromise = tab.waitForSelector("#B084KSRFXJ-amazons-choice-label",{visible:true});
        return waitmoorePromise;
    })
    
    .then(function(pages){
        
        let firstprodPromise = tab.goto("https://www.amazon.in/Echo-Dot-4th-Gen-Blue/dp/B084KSRFXJ/ref=sr_1_1?dchild=1&keywords=Amazon+alexa&qid=1618114887&sr=8-1");
        return firstprodPromise;
    })
    .then(function(){
        let waitmooorePromise = tab.waitForSelector("#add-to-cart-button",{visible:true});
        return waitmooorePromise;
    })
    .then(function(){
        let addtocPromise = tab.click("#add-to-cart-button");
        return addtocPromise;
    })
    .then(function(){
        let waitalilPromise = tab.waitForSelector("#hlb-view-cart-announce",{visible:true});
        return waitalilPromise;
    })
    .then(function(){
        let showcartPromise = tab.click("#hlb-view-cart-announce");
        return showcartPromise;
    })
    .then(function(){
        let waitendPromise = tab.waitForSelector("#twotabsearchtextbox",{visible:true});
        return waitendPromise;
    })
    .then(function(){
        let search2Promise = tab.type("#twotabsearchtextbox",search2);
        return search2Promise;
    })
    .then(function(){
        let enter1Promise = tab.click("#nav-search-submit-button");
        return enter1Promise;
    })
    .then(function(){
        let waitforhomePromise = tab.waitForSelector("#B07SMNPCGK-amazons-choice",{visible:true});
        return waitforhomePromise;
    })
    .then(function(pages){
        
        let secondprodPromise = tab.goto("https://www.amazon.in/Introducing-Echo-Show-8-display-screen/dp/B07SMNPCGK/ref=sr_1_1?dchild=1&keywords=amazon+echo+show&qid=1618118797&sr=8-1");
        return secondprodPromise;
    })
    .then(function(){
        let waitforechoPromise = tab.waitForSelector("#add-to-cart-button",{visible:true});
        return waitforechoPromise;
    })
    .then(function(){
        let addtocartPromise = tab.click("#add-to-cart-button");
        return addtocartPromise;
    })
    .then(function(){
        let waitalilmorePromise = tab.waitForSelector("#hlb-view-cart-announce",{visible:true});
        return waitalilmorePromise;
    })
    .then(function(){
        let showcartagainPromise = tab.click("#hlb-view-cart-announce");
        return showcartagainPromise;
    })
    .then(function(){
        let waitbeforebuyPromise = tab.waitForSelector(".a-button.a-button-normal.a-button-span12.a-button-primary",{visible:true});
        return waitbeforebuyPromise;
    })
    
    
    .catch(function(err){
        console.log("error occured");
    })
    
    
