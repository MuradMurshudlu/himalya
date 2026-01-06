// NOMOS - Ultra Responsive Infrastructure Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DYNAMIC BUSINESS STATUS
    const updateStatus = () => {
        const hour = new Date().getHours();
        const statusText = document.getElementById('open-status');
        const dot = document.querySelector('.dot');

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

    // 2. ADVANCED PARALLAX EFFECT (The "Matrix" Feel)
    // Bu effekt mausu tərpədəndə arxa planı və mətni fərqli dərinliklərdə hərəkət etdirir
    document.addEventListener('mousemove', (e) => {
        const img = document.querySelector('.hero-img');
        const text = document.querySelector('.content-box');
        
        // Maus koordinatları
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;

        // Arxa plan şəklinin hərəkəti (daha yavaş və dərindən)
        img.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.1)`;
        
        // Mətnin əks istiqamətdə yüngül hərəkəti (3D dərinlik yaradır)
        text.style.transform = `translateX(${-x / 2}px) translateY(${-y / 2}px)`;
    });

    // 3. SMOOTH REVEAL ANIMATION
    // Səhifə açılanda elementlərin professional şəkildə üzə çıxması
    const content = document.querySelector('.hero-core');
    content.style.opacity = '0';
    content.style.transition = 'opacity 2s ease-in-out';
    
    setTimeout(() => {
        content.style.opacity = '1';
    }, 100);

    console.log("NOMOS CORE: Visual Engine fully operational.");
});