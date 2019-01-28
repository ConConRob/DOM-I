const siteContent = { 
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
//==================HEADER/NAV=====================
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Give the nav links text
const navLinks = qsa('nav a');
//loop all the
for (let key in siteContent.nav){
  if (!(key === 'img-src')) {
    navLinks[(key[key.length-1])-1].innerText = siteContent.nav[key];
    //PART OF STEP 5 change nav links to green
    navLinks[(key[key.length-1])-1].classList.add('green');
  }
}
//add 2 new items in the nav
const navHeader = qs('header nav');
//beginning nav element
const linkBeginning = document.createElement('a');
linkBeginning.innerText = 'Beginning';
linkBeginning.classList.add('green');
navHeader.appendChild(linkBeginning);
//Team nav element
const linkTeam = linkBeginning.cloneNode(true);
linkTeam.innerText = 'Team';
navHeader.appendChild(linkTeam);

//============= CTA ==============
//h1 text
const title = qs('h1');
title.innerText = siteContent.cta.h1;
//button text
const buttonHeader = qs('.cta button');
buttonHeader.innerText = siteContent.cta.button;
//header image add image
const imageHeader = qs('.cta img');
imageHeader.src = siteContent.cta["img-src"];

//==========MAIN CONTENT========
// headers 
const headersContent = qsa('.text-content h4');
headersContent[0].innerText = siteContent["main-content"]['features-h4'];
headersContent[1].innerText = siteContent["main-content"]['about-h4'];
headersContent[2].innerText = siteContent["main-content"]['services-h4'];
headersContent[3].innerText = siteContent["main-content"]['product-h4'];
headersContent[4].innerText = siteContent["main-content"]['vision-h4'];
//paragraphs
const paragraphsContent = qsa('.text-content p');
paragraphsContent[0].innerText = siteContent["main-content"]['features-content'];
paragraphsContent[1].innerText = siteContent["main-content"]['about-content'];
paragraphsContent[2].innerText = siteContent["main-content"]['services-content'];
paragraphsContent[3].innerText = siteContent["main-content"]['product-content'];
paragraphsContent[4].innerText = siteContent["main-content"]['vision-content'];
//mid image 
const imageContent =qs('.main-content .middle-img');
imageContent.src = siteContent["main-content"]['middle-img-src'];
//==================CONTACT=====================
//header 
const headerContact = qs('.contact h4');
headerContact.innerText = siteContent['contact']['contact-h4'];
//Paragraphs
const paragraphsContact = qsa('.contact p');
//paragraphsContact[0].innerText = siteContent['contact']['address'];
//better then using the sitecontent 
paragraphsContact[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA'
paragraphsContact[1].innerText = siteContent['contact']['phone'];
paragraphsContact[2].innerText = siteContent['contact']['phone'];

//=================FOOTER=======================
//paragraph
const paragraphFooter = qs('footer p');
paragraphFooter.innerText = siteContent.footer.copyright;

function qs(tag){
  return document.querySelector(tag);
}
function qsa(tag){
  return document.querySelectorAll(tag);
}