document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DYNAMIC STATUS (Works on all pages)
    const updateStatus = () => {
        const statusText = document.getElementById('open-status');
        const dot = document.querySelector('.dot');
        if(!statusText || !dot) return;

        const hour = new Date().getHours();
        if (hour >= 11 && hour <= 22) { 
            statusText.innerText = "OPEN NOW";
            dot.style.background = "#00ff41";
            dot.style.boxShadow = "0 0 10px #00ff41";
        } else {
            statusText.innerText = "CLOSED";
            dot.style.background = "#ff4100";
            dot.style.boxShadow = "0 0 10px #ff4100";
        }
    };
    updateStatus();

    // 2. PARALLAX (Only if elements exist)
    document.addEventListener('mousemove', (e) => {
        const img = document.querySelector('.hero-img');
        const content = document.querySelector('.content-box') || document.querySelector('.about-content');
        
        if(img) {
            const x = (window.innerWidth / 2 - e.pageX) / 30;
            const y = (window.innerHeight / 2 - e.pageY) / 30;
            img.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.1)`;
            if(content) {
                content.style.transform = `translateX(${-x / 2}px) translateY(${-y / 2}px)`;
            }
        }
    });

    // 3. PAGE REVEAL
    const mainContent = document.querySelector('main');
    if(mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 1.5s ease-in-out';
        setTimeout(() => { mainContent.style.opacity = '1'; }, 100);
    }
});