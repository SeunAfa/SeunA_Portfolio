window.addEventListener("load", () => {

    SVGLogoPageAnimation();
});


function SVGLogoPageAnimation() {
    const CircleLogoFill = document.getElementById("CircleLogoFill");
    CircleLogoFill.classList.add("CircleLogoFill");

    const CircleLogoStroke = document.getElementById("CircleLogoStroke");
    CircleLogoStroke.classList.add("CircleLogoStroke");

    const SFill = document.getElementById("SFill");
    SFill.classList.add("SFill");

    const SOutline = document.getElementById("SOutline");
    SOutline.classList.add("SOutline");

    const AFill = document.getElementById("AFill");
    AFill.classList.add("AFill");

    const AOutline = document.getElementById("AOutline");
    AOutline.classList.add("AOutline");

    sliderReavelContnet();
}

const sliderReavelContnet = setTimeout(() => {
    const RevealTop = document.getElementById("RevealTop");
    RevealTop.classList.add("sliderReavelTop");

    const RevealBottom = document.getElementById("RevealBottom");
    RevealBottom.classList.add("sliderReavelBottom");

    hideSharedLayout();

}, 2000);


const hideSharedLayout = setTimeout(() => {
    const header = document.getElementById("header");
    header.style.cssText = "display:block";
    const render = document.getElementById("render");
    render.style.cssText = "display:block";

    const loadingPageWrapper = document.getElementById("loadingPage_Wrapper");
    loadingPageWrapper.style.cssText = "display:none;transition:all 4s;";

    const ContainerSVGLogoPageAnimation = document.getElementById("ContainerSVGLogoPageAnimation");
    ContainerSVGLogoPageAnimation.style.cssText = "display:none";

    fadeInHeaderIcons();

}, 4000);


const fadeInHeaderIcons = function () {
    const LogoBtn = document.getElementById("LogoBtn");
    LogoBtn.classList.add("LogoBtn");

    const menuIcon = document.getElementById("menuIcon");
    menuIcon.classList.add("menuIcon");
}