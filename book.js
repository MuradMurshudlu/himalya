document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Restoranın nömrəsi (Bunu Himalaya-nın real nömrəsi ilə dəyiş: 9055601555)
    const restaurantNumber = "9055601555";
    
    const status = document.getElementById('form-status');
    status.innerText = "REDIRECTING TO SECURE LINE...";

    // Kiçik bir gecikmə ilə zəng ekranına göndəririk ki, peşəkar görünsün
    setTimeout(() => {
        window.location.href = `tel:${restaurantNumber}`;
        status.innerText = "PLEASE COMPLETE YOUR RESERVATION VIA CALL.";
    }, 800);
});