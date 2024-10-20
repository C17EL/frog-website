//sidebar
document.addEventListener("DOMContentLoaded", function () {
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', function () {
    
    sidebar.classList.toggle('show');

    toggleBtn.innerHTML = sidebar.classList.contains('show') ? '<span>&#x25C0;</span>' : '<span>&#x25B6;</span>';
    toggleBtn.style.left = sidebar.classList.contains('show') ? '250px' : '0';

});


// Store the currently displayed organ and fun fact
  //anatomy chart
    // Store the currently displayed organ and fun fact
// Store the currently displayed organ and fun fact
let currentOrgan = null;

const organInfo = document.getElementById('organ-info');
const funFact = document.getElementById('fun-fact');


const defaultFact =  "Did you know? Frogs can live without a heart for a period of time.";
funFact.innerHTML = defaultFact;
funFact.style.display = 'block';

function showOrganInfo(event, element) {
    const organ = element.getAttribute('data-organ');


    const organData = {
        heart: "The frog's heart pumps blood through the body. It has three chambers.",
        liver: "The liver of a frog processes toxins and stores nutrients.",
        brain: "The frog's brain controls bodily functions and processes sensory information.",
        lungs: "Frogs use their lungs to breathe air, but they can also breathe through their skin.",
        stomach: "The stomach is where the frog begins digesting its food, breaking it down with enzymes.",
        largeIntestines: "The large intestines absorb water and form waste before it is excreted.",
        smallIntestines: "The small intestines absorb nutrients from food as it is broken down.",
        gallBladder: "The gall bladder stores bile, which helps digest fats in the frog's food.",
        pancreas: "The pancreas produces digestive enzymes and regulates blood sugar levels."
    };

    const funFacts = {
        heart: " Frogs can live without a heart for a period of time.",
        liver: " The frog's liver can regenerate if part of it is removed.",
        brain: " Frogs have a relatively simple brain compared to other vertebrates.",
        lungs: " Some frogs can breathe through their skin, making them quite unique.",
        stomach: " Frogs can swallow prey whole, often using their eyes to help push food down.",
        largeIntestines: "Frogs have a shorter digestive tract compared to mammals.",
        smallIntestines: " The small intestine is where most nutrient absorption occurs.",
        gallBladder: " Some frogs can store excess bile in their gall bladder for later use.",
        pancreas: " The pancreas produces both digestive enzymes and hormones."
    };

    const rect = element.getBoundingClientRect();

    // Show the organ information
    organInfo.innerHTML = organData[organ] || 'Information not available.';
    organInfo.style.left = rect.right + 10 + 'px'; // 10px offset to the right of the clicked area
    organInfo.style.top = rect.top + (rect.height / 2) - (organInfo.offsetHeight / 2) + 'px'; // Center vertically next to the clicked area
    organInfo.style.display = 'block';


    // Show the fun fact
    funFact.innerHTML = funFacts[organ] || 'Fun fact not available.';
    
    funFact.style.display = 'block';

    // Update the current organ
    currentOrgan = organ;
}

function hideOrganInfo() {
    const organInfo = document.getElementById('organ-info');
    
    organInfo.style.display = 'none';
}

function clearCurrentOrgan() {
    currentOrgan = null;
    hideOrganInfo();

}

// Add event listeners for each area
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', event => {
        event.preventDefault();
        const clickedOrgan = area.getAttribute('data-organ');

        if (currentOrgan === clickedOrgan) {
            // If the clicked organ is the current organ, clear the organ info (toggle off)
            clearCurrentOrgan();
        } else {
            // Show organ info on click and lock the organ
            showOrganInfo(event, area);
        }
    });

    area.addEventListener('mouseleave', event => {
        const hoveredOrgan = area.getAttribute('data-organ');
        
        if (currentOrgan === hoveredOrgan) {
            // If mouse leaves the clicked organ, hide the organ info
            hideOrganInfo(); 
        }
    });
});

// Hide organ info if clicking outside of an organ area
document.addEventListener('click', event => {
    if (!event.target.closest('area')) {
        clearCurrentOrgan(); // Hide info if clicked outside
    }
});



   
    

   
//gallery
let currentImg = 0;
let timer;
const interval = 3000;
const imgs = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');

function changeSlide(n) {
    // Hide all images and remove active class from all dots
    imgs.forEach((img, index) => {
        img.classList.remove('active');
        dots[index].classList.remove('active');
    });

    // Update the current image index
    currentImg = n;

    // Show the current image and set the active dot
    imgs[currentImg].classList.add('active');
    dots[currentImg].classList.add('active');
}

timer = setInterval(() => {
    changeSlide((currentImg + 1) % imgs.length);
}, interval);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(timer); // Optional: Stop auto slide
        changeSlide(index);
    });
});
});


    
    

    
    
    

    






