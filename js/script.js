/***
For internationalization data are into array
0 is French
1 is English
***/
var lang = "fr";
var langIndice = 0;

var jsonFile = "./data-sample.json";

var reverseOrder = true;

/***
HTML
***/

//HTML title
function htmlTitleUpdator(text) {
    "use strict";
    document.title = text;
}

/***
HEADER
***/

//Title of the site
function siteTitleUpdator(text) {
    var blogTitle = document.getElementsByClassName("blog-title");
    blogTitle[0].innerHTML = text;
}

//Site description
function siteDescriptionUpdator(text) {
    var titleDescr = document.getElementsByClassName("lead blog-description");
    titleDescr[0].innerHTML = text;
}

/***
FOOTER
***/

function footerAuthorUpdator(text, link) {
    var el = document.querySelector(".blog-footer p a.author");
    el.href = link;
    el.innerHTML = text;
}

/***
NAVBAR
***/

function addNavEl(title, link) {
    if (link === undefined) {
        link = "#";
    }
    var navNode = document.querySelector(".nav.blog-nav");

    var newEl = document.createElement("a");
    newEl.className = "nav-link";
    newEl.href = link;
    newEl.innerHTML = title;
    newEl.setAttribute("onclick", "makeActive(event)");

    navNode.appendChild(newEl);
}

function makeHomeActive() {
    navRemoveActive();
    var el = document.querySelector(".nav.blog-nav a");
    el.className = "nav-link active";
}

function makeActive(event) {
    navRemoveActive();
    removeColor();
    var el = event.target;
    var selector = event.target.hash;
    changeColor(selector);
    el.className = "nav-link active";
}

//Change title color when section is selected
function changeColor(selector) {
    if(selector == "#" || selector == "") return;
    var parentNode = document.querySelectorAll(selector + " h2");
    var elCount = parentNode.length;

    for (var i = 0; i < elCount; i++) {
        parentNode[i].className = (parentNode[i].className + " coloredTitle");
    }
}

//Remove title color
function removeColor() {
    var parentNode = document.getElementsByClassName("coloredTitle");

    var elCount = parentNode.length;
    if (elCount > 0) {
        for (var i = 0; i < elCount; i++) {
            //id = 0 because removing by the beginning
            parentNode[0].classList.remove("coloredTitle");
        }
    }
}

function navRemoveActive() {
    var elUnActive = document.getElementsByClassName("nav-link active")[0];
    if (elUnActive) elUnActive.className = "nav-link";
}

function langButtonUpdator() {
    var nav = document.querySelector(".nav.blog-nav");
    var count = nav.childElementCount - 1;
    nav.childNodes[5].setAttribute("onclick", "langSwitcher()");
    nav.childNodes[5].removeAttribute("href");
}

/***
LATBAR
***/

/***
ABOUTME
***/

function whoIAmTitleUpdator(text) {
    var el = document.querySelector(".sidebar-module.sidebar-module-inset h4");
    el.innerHTML = text;
}

function addWhoIAmChild(text) {
    var parentNode = document.querySelector(".sidebar-module.sidebar-module-inset .list-unstyled");
    var newElLi = document.createElement("li");
    newElLi.innerHTML = text;

    parentNode.appendChild(newElLi);
}

/***
LINKS
***/

function linkTitleUpdator(text) {
    var el = document.querySelector(".sidebar-module#link h4");
    el.innerHTML = text;
}

function addLinkChild(title, link) {
    var parentNode = document.querySelector(".sidebar-module#link .list-unstyled");
    var newElLi = document.createElement("li");
    var newElA = document.createElement("a");
    newElA.href = link;
    newElA.target = "_blank";
    newElA.innerHTML = title;

    newElLi.appendChild(newElA);
    parentNode.appendChild(newElLi);
}

/***
TAGS CLOUD
***/

function tagTitleUpdator(text) {
    var el = document.querySelector(".sidebar-module#cloud h4");
    el.innerHTML = text;
}

function addTagChild(tag, link, weight) {
    var parentNode = document.querySelector("#tags ul");
    var newElLi = document.createElement("li");
    var newElA = document.createElement("a");
    newElA.setAttribute("weight", weight);
    newElA.href = link;
    //newElA.target = "_blank";
    newElA.innerHTML = tag;

    newElLi.appendChild(newElA);
    parentNode.appendChild(newElLi);
}

/***
CONTENT
***/

function addPostChildRow(parentNodeQuery, title, metaData, content) {
    var newElDiv = document.createElement("div");
    newElDiv.className = "col-md-6";
    var newElDivPost = document.createElement("div");
    newElDivPost.className = "blog-post";
    var newElTitle = document.createElement("h2");
    newElTitle.className = "blog-post-title";
    newElTitle.innerHTML = title;
    var newElMeta = document.createElement("p");
    newElMeta.className = "blog-post-meta";
    newElMeta.innerHTML = metaData;
    var newElContent = document.createElement("p");
    newElContent.innerHTML = content;

    newElDivPost.appendChild(newElTitle);
    newElDivPost.appendChild(newElMeta);
    newElDivPost.appendChild(newElContent);
    newElDiv.appendChild(newElDivPost);

    var parentNode = document.querySelector(parentNodeQuery);
    parentNode.appendChild(newElDiv);
}

function addPostChildLign(parentNodeQuery, title, metaData, content) {
    var newElDivPost = document.createElement("div");
    newElDivPost.className = "blog-post";
    var newElTitle = document.createElement("h2");
    newElTitle.className = "blog-post-title";
    newElTitle.innerHTML = title;
    var newElMeta = document.createElement("p");
    newElMeta.className = "blog-post-meta";
    newElMeta.innerHTML = metaData;
    var newElContent = document.createElement("p");
    newElContent.innerHTML = content;

    newElDivPost.appendChild(newElTitle);
    newElDivPost.appendChild(newElMeta);
    newElDivPost.appendChild(newElContent);

    var parentNode = document.querySelector(parentNodeQuery);
    parentNode.appendChild(newElDivPost);
}

/***
PRESENTATION
***/

function addPresentation(content) {
    var newElDivPost = document.createElement("div");
    newElDivPost.className = "blog-post";
    newElDivPost.innerHTML = content;

    var parentNode = document.querySelector("#presentation");
    parentNode.appendChild(newElDivPost);
}

/***
STUDIES
***/

/***
WORKEXPERIENCES
***/

/***
ABOUT
***/

function removeCloudContainer() {
    document.getElementById("cloud").remove();
}

function langSwitcher() {
    (langIndice == 0) ? lang = "fr": lang = "en";
    (lang == "en") ? langIndice = 0: langIndice = 1;

    init();
    //Reload Tags
    TagCanvas.Reload("tagsCloudCanvas");
}

/***
GENERAL
***/

function removeAllChildren(selector) {
    var parentNode = document.querySelector(selector);
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

//The heart : parse the JSON file dans alter the DOM
function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var data = JSON.parse(response);
        var elementId;

        /*Section Remove*/
        removeAllChildren(".nav.blog-nav");//removeNavEl();
        removeAllChildren("#presentation");//removePresentation();
        removeAllChildren(".sidebar-module.sidebar-module-inset .list-unstyled");//removeWhoIAmChildren();
        removeAllChildren(".sidebar-module#link .list-unstyled");//removeLinkChildren();
        removeAllChildren("#studies .row");//removeStudyChildren();
        removeAllChildren("#work-experiences");//removeWorkChildren();
        removeAllChildren("#about");//removeAboutChild();
        removeAllChildren("#tags ul");//removeTagChildren();

        /*Update section*/

        /*Header*/
        htmlTitleUpdator(data.site[langIndice].htmlTitle);
        siteTitleUpdator(data.site[langIndice].title);
        siteDescriptionUpdator(data.site[langIndice].description);

        /*navBar*/
        var navElCount = Object.keys(data.navBar[langIndice].array).length;
        for (var i = 0; i < navElCount; i++) {
            var current = data.navBar[langIndice].array[i];
            addNavEl(current.text, current.link);
        }

        langButtonUpdator();

        /*Footer*/
        var current = data.me[langIndice];
        footerAuthorUpdator(current.firstName + " " + current.familyName.toUpperCase(), current.city);

        /*Presentation*/
        var current = data.me[langIndice];
        addPresentation(current.presentation);

        /*Studies*/
        var elCount = Object.keys(data.studies[langIndice].array).length;
        for (var i = 0; i < elCount; i++) {
            (reverseOrder == true) ? elementId = elCount - i - 1: elementId = i;
            var current = data.studies[langIndice].array[elementId];
            var metaData = "de " + current.beginDate + " à " + current.endDate + " - " + current.description
            addPostChildRow("#studies .row", current.title, metaData, current.content);
        }

        /*Work-experiences*/
        var elCount = Object.keys(data.workExperiences[langIndice].array).length;
        for (var i = 0; i < elCount; i++) {
            (reverseOrder == true) ? elementId = elCount - i - 1: elementId = i;
            var current = data.workExperiences[langIndice].array[elementId];
            var metaData = "de " + current.beginDate + " à " + current.endDate + " - " + current.description
            addPostChildLign("#work-experiences", current.title, metaData, current.content);
        }

        /*About Site*/
        var elCount = Object.keys(data.about[langIndice]).length;
        if (elCount) {
            var current = data.about[langIndice];
            var metaData = current.date;
            addPostChildLign("#about", current.title, metaData, current.content);
        }

        /*About me*/
        (langIndice == 0) ? whoIAmTitleUpdator("Qui suis-je"): whoIAmTitleUpdator("Who I am");
        var current = data.me[langIndice];
        addWhoIAmChild(current.firstName + " " + current.familyName);
        addWhoIAmChild(current.dateOfBirth);
        addWhoIAmChild(current.nationality);
        addWhoIAmChild(current.drivingLicence);
        data2img("canvasEMail", current.emailAddress);
        data2img("canvasPhone", current.phoneNumber);

        /*Links*/
        (langIndice == 0) ? linkTitleUpdator("Liens"): linkTitleUpdator("Links");
        var elCount = Object.keys(data.links[langIndice].array).length;
        for (var i = 0; i < elCount; i++) {
            var current = data.links[langIndice].array[i];
            addLinkChild(current.text, current.link);
        }

        /*Tags*/
        (langIndice == 0) ? tagTitleUpdator("Tags"): tagTitleUpdator("Tags");
        var elCount = Object.keys(data.tags[langIndice].array).length;
        for (var i = 0; i < elCount; i++) {
            var current = data.tags[langIndice].array[i];
            addTagChild(current.tag, "#", current.weight);
        }
        tagCloud();
    });
}

//To "protect" some personnal data, convert text into html5 canvas
function data2img(parentNodeId, data, width, height) {
    if (width === undefined) {
        width = 150;
    }
    if (height === undefined) {
        height = 20;
    }
    var c = document.getElementById(parentNodeId);
    c.width = width;
    c.height = height;
    var ctx = c.getContext("2d");
    ctx.font = "16px Arial";
    ctx.fillText(data, 5, 15);
}

//Function to load the JSON File before parse it
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", jsonFile, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
            var my_JSON_object = JSON.parse(xobj.responseText);
        }
    };
    xobj.send(null);
}

function tagCloud() {
    TagCanvas.textFont = "Impact, 'Arial Black', sans-serif";
    TagCanvas.textColour = "#00f";
    TagCanvas.textHeight = 25;
    TagCanvas.outlineColour = "#f60";
    TagCanvas.outlineThickness = 5;
    TagCanvas.outlineOffset = 1;
    TagCanvas.outlineMethod = "block";
    TagCanvas.maxSpeed = 0.06;
    TagCanvas.minBrightness = 0.1;
    TagCanvas.depth = 0.95;
    TagCanvas.pulsateTo = 0.2;
    TagCanvas.pulsateTime = 0.75;
    TagCanvas.decel = 0.9;
    TagCanvas.reverse = true;
    TagCanvas.hideTags = false;
    TagCanvas.shadow = "#ccf";
    TagCanvas.shadowBlur = 3;
    TagCanvas.wheelZoom = false;
    TagCanvas.fadeIn = 800;
    TagCanvas.weightSizeMin = 8;
    TagCanvas.weightSizeMax = 20;
    TagCanvas.weightMode = "both";
    TagCanvas.weightFrom = "weight";
    TagCanvas.weightGradient = {
        0: "#f00",
        0.33: "#ff0",
        0.66: "#0f0",
        1: "#00f"
    };
    try {
        TagCanvas.Start("tagsCloudCanvas", "tags", {
            textColour: null,
            textHeight: 25,
            weight: true
        });
    } catch (e) {
        // something went wrong
        removeCloudContainer();
    }
}
