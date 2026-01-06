document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DYNAMIC STATUS INDICATOR
    const statusText = document.getElementById('open-status');
    const dot = document.querySelector('.dot');
    
    const updateStatus = () => {
        const hour = new Date().getHours();
        // 11 AM to 10 PM
        if (hour >= 11 && hour <= 22) {
            if(statusText) statusText.innerText = "SYSTEM OPEN";
            if(dot) {
                dot.style.background = "#00ff41";
                dot.style.boxShadow = "0 0 15px #00ff41";
            }
        } else {
            if(statusText) statusText.innerText = "SYSTEM CLOSED";
            if(dot) {
                dot.style.background = "#ff4100";
                dot.style.boxShadow = "0 0 15px #ff4100";
            }
        }
    };
    updateStatus();

    // 2. CONTACT REVEAL ANIMATION
    const contactElements = document.querySelectorAll('.contact-info section');
    contactElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    console.log("CONTACT MODULE: Optimized for Hamilton.");
});