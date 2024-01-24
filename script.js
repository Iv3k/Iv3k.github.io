// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to each game's gallery
    document.querySelectorAll('.gallery').forEach(function(gallery) {
        let currentIndex = 0;

        // Function to show the selected image
        function showImage(index) {
            const images = gallery.querySelectorAll('img');

            if (index >= 0 && index < images.length) {
                images[currentIndex].classList.remove('active');
                currentIndex = index;
                images[currentIndex].classList.add('active');
            }
        }

        // Add click event to each image in the gallery
        gallery.querySelectorAll('img').forEach(function(image, index) {
            image.addEventListener('click', function() {
                showImage(index);
            });
        });

        // Show the first image by default
        showImage(currentIndex);
    });

    function fillStars() {
        const skills = document.querySelectorAll('.skill');

        skills.forEach(skill => {
            const rating = parseInt(skill.getAttribute('data-rating'), 10);
            const starsContainer = skill.querySelector('.rating');

            for (let i = 0; i < 5; i++) {
                const starImg = document.createElement('img');
                starImg.src = i < rating ? 'images/star-filled.png' : 'images/star-empty.png';
                starsContainer.appendChild(starImg);
            }
        });
    }

    // Call the fillStars function when the page loads
    fillStars();
});

function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    document.getElementById('body').classList.add('modal-open'); // Add this line
    var modalImg = document.getElementById("modalImg");
    
    // Check if the image is vertical
    var img = new Image();
    img.src = imgSrc;
    img.onload = function() {
        if (img.width < img.height) {
            modalImg.classList.add("vertical");
        } else {
            modalImg.classList.remove("vertical");
        }
        modal.style.display = "block";
        modalImg.src = imgSrc;
    };
}

function closeModal() {
    var modal = document.getElementById("myModal");
    document.getElementById('body').classList.remove('modal-open'); // Add this line
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "none";
    modalImg.classList.remove("vertical");
}

var scrollToTopButton = document.getElementById('scrollToTop');
var footer = document.querySelector('footer');

window.addEventListener('scroll', function () {
    // Show/hide the "scroll to top" button based on scroll position
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        scrollToTopButton.style.display = 'block';

        // Adjust position based on the footer
        var footerOffset = footer.offsetTop;
        var windowHeight = window.innerHeight;
        var buttonBottom = windowHeight - (footerOffset - window.scrollY);
        
        if (buttonBottom > 0) {
            scrollToTopButton.style.bottom = buttonBottom + 'px';
        } else {
            scrollToTopButton.style.bottom = '10px'; // Default distance from the bottom
        }
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function () {
    // Smoothly scroll to the top when the button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// For smaller screens
document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});