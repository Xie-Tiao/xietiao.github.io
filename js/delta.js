document.addEventListener('DOMContentLoaded', function () {
    const paymentDiv = document.getElementById('payment');
    const hoverImage = paymentDiv.querySelector('.hover-image');

    paymentDiv.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        hoverImage.style.left = `${mouseX + 10}px`;
    });
});