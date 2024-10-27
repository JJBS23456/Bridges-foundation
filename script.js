document.getElementById('donate-form').addEventListener('submit', function(event) {
    const amount = document.getElementById('amount').value;
    if (amount < 5) {
        alert("Minimum donation amount is $5.");
        event.preventDefault();
    }
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Slick Slider for Testimonials
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        adaptiveHeight: true
    });

    // Donation Form Validation (Existing Code)
    document.getElementById('donate-form').addEventListener('submit', async function(event) {
        const paymentMethod = document.getElementById('payment-method').value;
        if (paymentMethod === 'stripe') {
            // Existing Stripe submission handling
            // ... (Your existing Stripe code)
        }
        // PayPal handling is managed by PayPal SDK
    });

    // Optional: Donation Progress Bar Update
    // If you implement a progress bar, add code here to update it dynamically
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Slick Slider for Testimonials
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        adaptiveHeight: true
    });

    // Update Donation Progress Bar
    const currentAmount = 346.81; // Replace with dynamic data
    const goalAmount = 6000;
    const progress = document.getElementById('progress');
    const currentAmountSpan = document.getElementById('current-amount');

    const progressPercentage = (currentAmount / goalAmount) * 100;
    progress.style.width = `${progressPercentage}%`;
    currentAmountSpan.textContent = `$${currentAmount.toLocaleString()}`;
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Slick Slider for Testimonials
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        adaptiveHeight: true
    });

    // Update Donation Progress Bar for Home Page
    const currentAmount = 75000; // Replace with dynamic data
    const goalAmount = 100000;
    const progress = document.getElementById('progress');
    const currentAmountSpan = document.getElementById('current-amount');

    const progressPercentage = (currentAmount / goalAmount) * 100;
    progress.style.width = `${progressPercentage}%`;
    currentAmountSpan.textContent = `$${currentAmount.toLocaleString()}`;

    // Update Donation Progress Bar for Project Page
    const projectCurrentAmount = 25000; // Replace with dynamic data
    const projectGoalAmount = 50000;
    const projectProgress = document.getElementById('project-progress');
    const projectCurrentAmountSpan = document.getElementById('project-current-amount');

    const projectProgressPercentage = (projectCurrentAmount / projectGoalAmount) * 100;
    if (projectProgress) {
        projectProgress.style.width = `${projectProgressPercentage}%`;
        projectCurrentAmountSpan.textContent = `$${projectCurrentAmount.toLocaleString()}`;
    }
});
// Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            const accordionContent = button.nextElementSibling;

            accordionItem.classList.toggle('active');

            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});
