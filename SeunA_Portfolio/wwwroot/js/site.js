//HmPg -- LoadingAnimation
const WelcomeMsgTextContainer = document.getElementById("WelcomeMsgTextContainer");
const designWebWelcomeMSGIconWrapper = document.getElementById("designWebWelcomeMSGIconWrapper");
const homePgSvgIcons = document.getElementById("homePgSvgIcons");

const WelcomeMsgAnimation = setTimeout(() => {
    //Welcome MSG - Container
    WelcomeMsgTextContainer.classList.remove("WelcomeMsgTextContainer");
    //design&Web - WelcomeMSGIconWrapper
    designWebWelcomeMSGIconWrapper.style.cssText = "display:block;";
    designWebWelcomeMSGIconWrapper.classList.add("designWebWelcomeMSGIconWrapper");
    //homePgSvgIcons 
    homePgSvgIcons.classList.add("homePgSvgIcons");
    homeSvgAnimation();

}, 3000);

//HomePg - SVG Animation
const homeSvgAnimation = function () {
    //css
    const CssFileIcon = document.getElementById("CssFileIcon");

    CssFileIcon.classList.add("CssFileIcon");

    //html
    const HtmlFileIcon = document.getElementById("HtmlFileIcon");

    HtmlFileIcon.classList.add("HtmlFileIcon");

    //js
    const JsFileIcon = document.getElementById("JsFileIcon");

    JsFileIcon.classList.add("JsFileIcon");

    //laptopIcon
    const laptopIcon = document.getElementById("laptopIcon");

    laptopIcon.classList.add("laptopIcon");

    //mobileIcon
    const mobileIcon = document.getElementById("mobileIcon");

    mobileIcon.classList.add("mobileIcon");

    //backgroundDesign
    const backgroundDesign = document.getElementById("backgroundDesign");

    backgroundDesign.classList.add("backgroundDesign");
}


/*Scroll Timeline--------
---------------------------------
-------------------------------*/
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
const ScrollTracker = document.querySelector(".scrollTracker");

const scrollTrackingTimeLine = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],

})

ScrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeLine,
    }
);


/*Back to Top Btn--------
---------------------------------
-------------------------------*/


window.addEventListener("scroll", () => {
    const TopBtn = document.getElementById("TopBtn");

    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
        TopBtn.style.display = "block";
        TopBtn.classList.add("topBtn");
    } else {
        TopBtn.style.display = "none";
    }

});


/*ContactMe Top Btn--------
---------------------------------
-------------------------------*/
const ContactMeBtn = document.getElementById("ContactMeContainerBtn");
const ContactCloseBtn = document.getElementById("ContactCloseBtn");
const RectangleBackground = document.getElementById("RectangleBackground");
const EmailBtn = document.getElementById("EmailBtn");
const LinkDinBtn = document.getElementById("LinkDinBtn");

const ShowContactMeSection = function () {
    if (ContactMeBtn) {
        RectangleBackground.classList.add("RectBackgroundAn");
        ContactMeBtn.classList.add("ContactMeContainerBtnHide");
        ContactCloseBtn.classList.add("ContactCloseBtnShowAnim");
        EmailBtn.classList.add("showContactBtn");
        LinkDinBtn.classList.add("showContactBtn");
    }
}
ContactMeBtn.addEventListener("click", ShowContactMeSection, false);

const HideContactMeSection = function () {
    if (ContactCloseBtn) {
        RectangleBackground.classList.remove("RectBackgroundAn");
        ContactMeBtn.classList.remove("ContactMeContainerBtnHide");
        ContactCloseBtn.classList.remove("ContactCloseBtnShowAnim");
        EmailBtn.classList.remove("showContactBtn");
        LinkDinBtn.classList.remove("showContactBtn");
    }
}
ContactCloseBtn.addEventListener("click", HideContactMeSection, false);


/*AboutMe Scroll--------
---------------------------------
-------------------------------*/
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".SlideIn");


const aboutAppearOptions = {
    // root: null, // Null is the viewport
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const AboutMeOnScroll = new IntersectionObserver(function (entries, AboutMeOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear")
            AboutMeOnScroll.unobserve(entry.target);
        }
    })

}, aboutAppearOptions);

faders.forEach(fader => {
    AboutMeOnScroll.observe(fader);
});

sliders.forEach(slider => {
    AboutMeOnScroll.observe(slider);
});


/*Portfolio Projects Scroll--------
-----------------------------------
---------------------------------*/

const ProjectItem = document.querySelectorAll(".ProjectItem");

const optionProjectItemScroll = {
    threashold: 0,
    rootMargin: "-280px"

};

const ProjectItemScroll = new IntersectionObserver(function (entries, ProjectItemScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("showCenterProjectItem");
            ProjectItemScroll.unobserve(entry.target);
        }
    });
}, optionProjectItemScroll);

ProjectItem.forEach(ProjectItems => {
    ProjectItemScroll.observe(ProjectItems);
});

const projectItems = document.querySelectorAll(".ProjectItem");

window.addEventListener("scroll", getProjectItem);


function getProjectItem() {
    //console.log(window.innerHeight / 5 * 3);
    const triggerBtmScreen = window.innerHeight / 5 * 4;

    projectItems.forEach((Items) => {

        const projectItemTop = Items.getBoundingClientRect().top;

        if (projectItemTop < triggerBtmScreen) {
            Items.classList.add("showCenterProjectItem");
        } else {
            Items.classList.remove("showCenterProjectItem");
        }
    });
}


/*Individual Projects Page Scroll--
-----------------------------------
---------------------------------*/

const caseStudySummaryContainer = document.querySelectorAll(".caseStudySummaryContainer");

const caseStudyOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const caseStudyOnScroll = new IntersectionObserver(function (entries, caseStudyOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("caseStudy")
            AboutMeOnScroll.unobserve(entry.target);
        }
    })

}, caseStudyOptions);

caseStudySummaryContainer.forEach(caseStudySummary => {
    caseStudyOnScroll.observe(caseStudySummary);
});

//UXWireframesContent - Rows
const RowUXWireframes = document.querySelectorAll(".RowUXWireframes");

const RowUXWireframesOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const RowUXWireframesOnScroll = new IntersectionObserver(function (entries, RowUXWireframesOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("RowUX")
            AboutMeOnScroll.unobserve(entry.target);
        }
    })

}, RowUXWireframesOptions);

RowUXWireframes.forEach(RowUXFrame => {
    RowUXWireframesOnScroll.observe(RowUXFrame);
});

//Open Link New Tab

const LinkDinLinkBtn = document.getElementById("LinkDinLinkBtn");
LinkDinLinkBtn.addEventListener("click", OpenNewTabLinkDinLink);

function OpenNewTabLinkDinLink() {

    let ref = window.open('', "LinkDinLink");

}


const GitHubLinkBtn = document.getElementById("GitHubLinkBtn");
GitHubLinkBtn.addEventListener("click", OpenNewTabGitHubLink);

function OpenNewTabGitHubLink() {

    let ref = window.open('', "GitHubLink");

}


//Scroll Indicator
function scrollDetectIndicator() {
    const indicator = document.getElementById("dotIndicatore");
    var lastScroll = 0;

    window.onscroll = function () {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

        if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
           /* console.log("Scrolling DOWN");*/
            indicator.classList.add("fadeDownDotIndicator");
        } else {
            lastScroll = currentScroll;
           /* console.log("Scrolling UP");*/
            indicator.classList.remove("fadeDownDotIndicator");
        }
    };
}

scrollDetectIndicator();

//Click Scroll Indicator
const IndicatorIcon = document.getElementById("dotIndicatore");
IndicatorIcon.addEventListener("click", IndicatorClicked);

function IndicatorClicked() {
    window.location.href = "#AboutMeContainer";
}

const ContainerScrollIndicator = document.getElementById("Container-ScrollIndicator");
ContainerScrollIndicator.addEventListener("mouseover", IndicatorContainerFocused);
ContainerScrollIndicator.addEventListener("mouseout", IndicatorContainerNotFocused);

function IndicatorContainerFocused() {
    ContainerScrollIndicator.classList.add("Container-ScrollIndicator");
}

function IndicatorContainerNotFocused() {
    ContainerScrollIndicator.classList.remove("Container-ScrollIndicator");
}


