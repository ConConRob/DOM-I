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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Give the nav links text
const navLinks = qsa('nav a');
// navLinks[0].innerText = 'Services';
// navLinks[1].innerText = 'Prodecut'
// navLinks[2].innerText = 'Vision'
// navLinks[3].innerText = 'Features'
// navLinks[4].innerText = 'About'
// navLinks[5].innerText = 'Contact'
for (let key in siteContent.nav){

  if (!(key === 'img-src')) {
    navLinks[(key[key.length-1])-1].innerText = siteContent.nav[key];
  }
  
}

//============= CTA ==============
//h1 text
const title = qs('h1');
title.innerHTML = 'DOM<br> Is<br> Awesome';
//button text
const buttonHeader = qs('.cta button');
buttonHeader.innerText = 'Get Started';
//header image add image
const imageHeader = qs('.cta img');
imageHeader.src = 'img/header-img.png';

//==========MAIN CONTENT========
// headers 
const headersContent = qsa('.text-content h4');
headersContent[0].innerText = 'Features'
headersContent[1].innerText = 'About'
headersContent[2].innerText = 'Services'
headersContent[3].innerText = 'Product'
headersContent[4].innerText = 'Vision'
//paragraphs
const paragraphsContent = qsa('.text-content p');
paragraphsContent[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsContent[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsContent[2].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsContent[3].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsContent[4].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
//mid image 
const imageContent =qs('.main-content .middle-img');
imageContent.src = 'img/mid-page-accent.jpg'

//==================CONTACT=====================
//header 
const headerContact = qs('.contact h4');
headerContact.innerText = 'Contact';
//Paragraphs
const paragraphsContact = qsa('.contact p');
paragraphsContact[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA'
paragraphsContact[1].innerText = '1 (888) 888-8888';
paragraphsContact[2].innerText = 'sales@greatidea.io';

//=================FOOTER=======================
//paragraph
const paragraphFooter = qs('footer p');
paragraphFooter.innerText = 'Copyright Great Idea! 2018';

function qs(tag){
  return document.querySelector(tag);
}
function qsa(tag){
  return document.querySelectorAll(tag);
}