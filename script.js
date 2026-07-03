/* =====================================================
   GOLTU QR WEBSITE
   Configuration
===================================================== */

const CONFIG = {

    birthday: "2025-12-25",

    lostDate: "2026-07-01",

    phone: "+919999999999",

    whatsapp: "919999999999"

};

/* =====================================================
   Greeting
===================================================== */

function greeting(){

    const hour = new Date().getHours();

    let text = "";

    if(hour < 12){

        text = "☀️ Good Morning! Thank you for stopping to help me.";

    }
    else if(hour < 17){

        text = "🌼 Good Afternoon! Thank you for scanning my QR code.";

    }
    else{

        text = "🌙 Good Evening! Thank you for helping me.";

    }

    document.getElementById("greeting").innerHTML = text;

}

greeting();


/* =====================================================
   Random Cute Messages
===================================================== */

const messages=[

"🥺 I miss my family very much.",

"🐟 I really love boiled fish.",

"🍗 Chicken is my favourite!",

"❤️ Please help me get back home.",

"😺 I'm friendly but may be a little scared.",

"🛏️ I miss sleeping on my comfy bed.",

"🐾 Thank you for caring about me."

];

function randomMessage(){

    const random=Math.floor(Math.random()*messages.length);

    document.getElementById("randomMessage").innerHTML=

    messages[random];

}

randomMessage();


/* =====================================================
   Age
===================================================== */

function calculateAge(){

    const birth=new Date(CONFIG.birthday);

    const today=new Date();

    let years=today.getFullYear()-birth.getFullYear();

    let months=today.getMonth()-birth.getMonth();

    let days=today.getDate()-birth.getDate();

    if(days<0){

        months--;

        const previousMonth=new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days+=previousMonth.getDate();

    }

    if(months<0){

        years--;

        months+=12;

    }

    document.getElementById("age").innerHTML=

    `${years} year(s) ${months} month(s) ${days} day(s)`;

}

calculateAge();


/* =====================================================
   Birthday Countdown
===================================================== */

function birthdayCountdown(){

    const birth=new Date(CONFIG.birthday);

    const today=new Date();

    let nextBirthday=new Date(

        today.getFullYear(),

        birth.getMonth(),

        birth.getDate()

    );

    if(nextBirthday<today){

        nextBirthday.setFullYear(today.getFullYear()+1);

    }

    const diff=

    Math.ceil(

    (nextBirthday-today)/(1000*60*60*24)

    );

    document.getElementById("birthdayCountdown").innerHTML=

    `🎂 ${diff} day(s) to my birthday`;

}

birthdayCountdown();


/* =====================================================
   Days Lost
===================================================== */

function daysLost(){

    const lost=new Date(CONFIG.lostDate);

    const today=new Date();

    const diff=Math.floor(

    (today-lost)/(1000*60*60*24)

    );

    document.getElementById("daysLost").innerHTML=

    `${diff} day(s)`;

}

daysLost();


/* =====================================================
   Copy Phone Number
===================================================== */

const copyButton=document.getElementById("copyPhone");

copyButton.addEventListener("click",()=>{

navigator.clipboard.writeText(CONFIG.phone);

copyButton.innerHTML="✅ Number Copied!";

setTimeout(()=>{

copyButton.innerHTML="📋 Copy Number";

},2000);

});


/* =====================================================
   Share Location
===================================================== */

const share=document.getElementById("shareLocation");

share.addEventListener("click",()=>{

if(!navigator.geolocation){

alert("Location not supported.");

return;

}

share.innerHTML="📍 Getting Location...";

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat=position.coords.latitude;

const lon=position.coords.longitude;

const maps=

`https://maps.google.com/?q=${lat},${lon}`;

const message=

`Hi! I found Goltu 🐱

My location:

${maps}`;

const url=

`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

share.innerHTML="📍 I Found Goltu";

},

()=>{

alert("Location permission denied.");

share.innerHTML="📍 I Found Goltu";

}

);

});


/* =====================================================
   Automatic Gallery
===================================================== */

const gallery=document.getElementById("gallery");

let position=0;

function autoGallery(){

const width=gallery.clientWidth;

position+=width*0.85;

if(position>=gallery.scrollWidth-gallery.clientWidth){

position=0;

}

gallery.scrollTo({

left:position,

behavior:"smooth"

});

}

setInterval(autoGallery,4000);


/* =====================================================
   Dark Mode after Sunset
===================================================== */



/* =====================================================
   Small Fade-in Animation
===================================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";

setTimeout(()=>{

document.body.style.opacity="1";

},100);

});


/* =====================================================
   Console Message
===================================================== */

console.log("🐱 Goltu says: Thank you for helping me!");