const menu = [
    {
        id: 1,
        title: "Keycaps",
        category: "keyboard parts",
        price: 39.99,
        img: "https://imageio.forbes.com/specials-images/imageserve/650c66986c3a8cbf342727ed/Assortment-of-different-colored-Esc-keycaps-made-form-metal/960x0.jpg?format=jpg&width=960",
        desc: `The physical covers that go over individual keys on a keyboard.`,
    },
    {
        id: 2,
        title: "Keyboard Switches",
        category: "keyboard parts",
        price: 29.99,
        img: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-switch-kit/pro-x-gallery-2.png?v=1",
        desc: `The mechanisms beneath each keycap that register keystrokes.`,
    },
    {
        id: 3,
        title: "Keyboard Cases",
        category: "keyboard parts",
        price: 19.99,
        img: "https://img.lazcdn.com/g/p/9383db0bf3ebe2709353c4413f049852.jpg_960x960q80.jpg_.webp",
        desc: `The outer shells that house the internal components of a keyboard, including the PCB and switches.`,
    },
    {
        id: 4,
        title: "Keyboard PCB (Printed Circuit Board)",
        category: "keyboard parts",
        price: 17.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9q0dRAiUCoBEQH7946JYHuBwXcPw1FnU_FpNM2k5d-w&s",
        desc: `The main circuit board that connects all the electronic components of a keyboard, including the switches and microcontroller.`,
    },
    {
        id: 5,
        title: "Keyboard Controller",
        category: "keyboard parts",
        price: 24.99,
        img: "https://www.gamespot.com/a/uploads/original/1179/11799911/2911629-ps4keyboard.jpg",
        desc: `The microcontroller responsible for processing keystrokes and sending them to the computer.`,
    },
    {
        id: 6,
        title: "Keyboard Stabilizer",
        category: "keyboard parts",
        price: 20.99,
        img: "https://cdn.shopify.com/s/files/1/0631/9590/6271/files/5_ee74896f-9c6d-41a4-862a-97fc508225ac.jpg?v=1652162572",
        desc: `Components used to stabilize larger keys (e.g., spacebar, enter key) to prevent wobbling and ensure consistent keypresses.`,
    },
    {
        id: 7,
        title: "Keyboard Cable",
        category: "keyboard parts",
        price: 15.98,
        img: "https://i.ebayimg.com/images/g/i2UAAOSwdohiYllB/s-l1200.webp",
        desc: `The cable connects the keyboard to the computer, allowing data transmission and providing power if necessary.`,
    },
    {
        id: 8,
        title: "Keyboard LEDs and Lighting Components",
        category: "keyboard parts",
        price: 36,
        img: "https://lzd-img-global.slatic.net/g/p/a8191d992d5479a1eae62f11db69f758.jpg_360x360q75.jpg_.webp",
        desc: `Components used to add lighting effects to keyboards, including RGB LEDs, backlighting, and underglow.`,
    },
    {
        id: 9,
        title: "Corsair K95 RGB Platinum XT",
        category: "pre-built keyboards",
        price: 179.99,
        img: "https://cdn.mos.cms.futurecdn.net/j5hNffGdJrnnKzrJhYG6X4.jpg",
        desc: `This full-size gaming keyboard features Cherry MX mechanical switches, customizable RGB lighting, dedicated macro keys, and a comfortable wrist rest.`,
    },
    {
        id: 10,
        title: "Logitech G Pro X",
        category: "pre-built keyboards",
        price: 139.99,
        img: "https://dynaquestpc.com/cdn/shop/products/500x_4eb5cce5-f33e-40f5-b5c6-3a68468552c0.jpg?v=1636612063&width=500",
        desc: `A compact tenkeyless (TKL) keyboard designed for esports professionals, customizable RGB lighting, and a detachable cable for portability.`,
    },
    {
        id: 11,
        title: "Ducky One 2 Mini",
        category: "pre-built keyboards",
        price: 109.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAyk8KpyD3yaflrGJlQv45HuaVCoyzji0flWeWUOJeQ&s",
        desc: `A compact 60% keyboard with a sleek design, and customizable RGB backlighting. It offers a minimalist layout without sacrificing functionality.`,
    },
    {
        id: 12,
        title: "Razer Huntsman Elite",
        category: "pre-built keyboards",
        price: 219.99,
        img: "https://assets2.razerzone.com/images/pnx.assets/bff6e0699f8b0f6c6a2fdd60408408dd/razer-huntsman-elite-usp7-mobile-compare-gaming-keyboard.jpg",
        desc: `This full-size gaming keyboard boasts Razer's opto-mechanical switches for fast and precise keystrokes, and a plush wrist rest.`,
    },
    {
        id: 13,
        title: "Anne Pro 2",
        category: "pre-built keyboards",
        price: 89,
        img: "https://i.ebayimg.com/images/g/dkoAAOSwrd1jIkn-/s-l1200.webp",
        desc: `A compact 60% keyboard with wireless connectivity, allowing for a clutter-free desk setup. It features customizable RGB lighting, and PBT keycaps.`,
    },
    {
        id: 14,
        title: "SteelSeries Apex Pro",
        category: "pre-built keyboards",
        price: 189.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdURns8EB3PoLmAXTGrNmtEYejPmKvB5pnBTW7B0CalA&s",
        desc: `Featuring OmniPoint adjustable mechanical switches, this full-size gaming keyboard allows users to customize actuation points for individual keys.`,
    },
  ];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
            <img src="${item.img}" alt="" class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
                <div class="buy-button">
                    <button class="buy-btn">Buy Now</button>
                </div>
            </div>
        </article>`;
    }).join("");
    sectionCenter.innerHTML = displayMenu;
    addBuyButtonEventListeners();
}

function displayMenuButtons() {
    const categories = menu.reduce((unique, item) => {
        if (!unique.includes(item.category)) {
            unique.push(item.category);
        }
        return unique;
    }, ['all']);

    const displayBtn = categories.map((category) => {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");
   
    container.innerHTML = displayBtn;
    addFilterButtonEventListeners();
}

function addBuyButtonEventListeners() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const productName = e.currentTarget.closest('.menu-item').querySelector('h4').textContent;
            alert(`You have purchased ${productName}`);
        });
    });
}


function addFilterButtonEventListeners() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = category === 'all' ? menu : menu.filter((menuItem) => menuItem.category === category);
            displayMenuItems(menuCategory);
        });
    });
}
