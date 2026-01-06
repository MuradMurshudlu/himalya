const MENU_DATA = {
    "SIGNATURE BBQ": [
        { name: "Steak Tikka Bourdain", desc: "Beef steak marinated in griddle-roasted aromatic spices." },
        { name: "Chicken Tikka Boti", desc: "Tender chunks of boneless chicken in special marinade." },
        { name: "Lamb Seekh Kabab", desc: "Grilled ground lamb with fresh coriander." }
    ],
    "CURRIES": [
        { name: "Goat Masala (Bhuna)", desc: "Bone-in goat meat in a zesty, thick gravy." },
        { name: "Butter Chicken", desc: "Boneless chicken in a creamy tomato sauce." },
        { name: "Chicken Tikka Masala", desc: "Chargrilled chicken in a rich, spicy gravy." }
    ],
    "TANDOOR": [
        { name: "Garlic Naan", desc: "Topped with fresh garlic and cilantro." },
        { name: "Bullet Naan", desc: "Spicy rocket topped with fresh green chilies." }
    ],
    "DESSERTS": [
        { name: "Mango Lassi", desc: "Sweet yogurt-based mango drink." },
        { name: "Ras Malai", desc: "Cheese patties soaked in sweetened milk." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('menu-inject');
    
    for (const [category, items] of Object.entries(MENU_DATA)) {
        const section = document.createElement('div');
        section.className = 'category-block';
        
        section.innerHTML = `
            <h2 class="cat-title">${category}</h2>
            <div class="items-container">
                ${items.map(item => `
                    <div class="menu-item">
                        <div class="item-header">
                            <span class="item-name">${item.name.toUpperCase()}</span>
                        </div>
                        <p class="item-desc">${item.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(section);
    }
});