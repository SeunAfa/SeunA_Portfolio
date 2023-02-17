//var fadeInAll_NavLinks00 = document.getElementsByClassName("SideNav_navLinksText")[0];
//var fadeInAll_NavLinks01 = document.getElementsByClassName("SideNav_navLinksText")[1];
//var fadeInAll_NavLinks02 = document.getElementsByClassName("SideNav_navLinksText")[2];

const menuBtn = document.querySelector(".menu-btn");
let menOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menOpen) {
        //Show SideNav
        menuBtn.classList.add("open");
        menOpen = true;
        ShowSideNav();
    } else {
        //Hide SideNav
        menuBtn.classList.remove("open");
        menOpen = false;
        HideSideNav();
    }
});

const body = document.getElementsByTagName("body")[0];

function ShowSideNav() {
    $("#SideNav").animate({
        marginLeft: "0px",
        opacity: "1",
        transition: "ease all 2s"
    }, "fast");
    body.style.cssText = "height: 896px;width: 100 %; overflow: hidden;overflow-y: hidden; ";
    //fadeInAll_NavLinks00.style.cssText = "margin-left:0px;transition: ease all 2s;transition-delay:1;";
    //fadeInAll_NavLinks01.style.cssText = "margin-left:0px;transition: ease all 2s;transition-delay:1;";
    //fadeInAll_NavLinks02.style.cssText = "margin-left:0px;transition: ease all 2s;transition-delay:1;";
}
function HideSideNav() {
    $("#SideNav").animate({
        marginLeft: "-450px",
        opacity: "0",
        transition: "ease all 2s"
    }, "fast");
    body.style.cssText = "";
    //fadeInAll_NavLinks00.style.cssText = "margin-left:-325px;transition: ease all 2s;transition-delay:1;";
    //fadeInAll_NavLinks01.style.cssText = "margin-left-325px;transition: ease all 2s;transition-delay:1;";
    //fadeInAll_NavLinks02.style.cssText = "margin-left:-325px;transition: ease all 2s;transition-delay:1;";
}




