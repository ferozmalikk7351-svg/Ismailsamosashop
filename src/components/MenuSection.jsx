import React from 'react';

const MenuSection = () => {
    const menuItems = [
        {
            id: 1,
            name: "Aloo Samosa",
            urduName: "آلو سموسہ",
            description: "Our signature crispy pastry filled with perfectly spiced mashed potatoes. Served with our signature green yogurt chutney & sweet imli alo bukhara chutney.",
            originalPrice: 60,
            price: 50,
            badge: "Ramadan Special",
            popular: true,
            image: "/samosa_menu_card.png"
        },
        {
            id: 2,
            name: "Chicken Aloo Samosa",
            urduName: "چکن آلو سموسہ",
            description: "A perfect blend of minced chicken and spiced potatoes in a crispy golden shell. Served with our signature green yogurt & sweet tamarind chutney.",
            price: 80,
            image: "/samosa_menu_card.png"
        },
        {
            id: 3,
            name: "Chicken Samosa",
            urduName: "چکن سموسہ",
            description: "Premium minced chicken cooked in our secret 1989 spice blend, wrapped in a perfectly crispy pastry. Served with our signature chutneys.",
            price: 100,
            image: "/samosa_menu_card.png"
        },
        {
            id: 4,
            name: "Samosa Patti (Dozen)",
            urduName: "سموسہ پٹی",
            description: "Fresh, homemade pastry sheets to make your own perfect samosas at home.",
            price: 200,
            image: "/samosa_patti.png"
        },
        {
            id: 5,
            name: "Shami Kabab (Dozen)",
            urduName: "شامی کباب",
            description: "Traditional slow-cooked beef and lentil patties, rich in authentic flavors.",
            price: 550,
            image: "/shami_kabab_premium_1772274479753.png",
            popular: true
        }
    ];

    return (
        <section className="section bg-light" id="menu">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Premium Menu</h2>
                    <p className="section-subtitle">Crafted with authentic recipes since 1989</p>
                    <div className="title-divider"></div>
                </div>

                <div className="menu-grid">
                    {menuItems.map((item) => (
                        <div className={`menu-card ${item.popular ? 'popular-card' : ''}`} key={item.id}>
                            {item.image && (
                                <div className="menu-card-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                            )}

                            <div className="menu-card-content">
                                <div className="menu-card-header">
                                    <div>
                                        <h3 className="menu-item-name">{item.name}</h3>
                                        <div className="menu-item-urdu urdu-text">{item.urduName}</div>
                                    </div>
                                    <div className="menu-item-price-container">
                                        {item.originalPrice && (
                                            <span className="price-original">Rs. {item.originalPrice}</span>
                                        )}
                                        <span className="price-current">Rs. {item.price}</span>
                                    </div>
                                </div>

                                <p className="menu-item-desc">{item.description}</p>

                                <div className="menu-card-footer">
                                    {item.badge && <span className="menu-badge">{item.badge}</span>}
                                    <a
                                        href={`https://wa.me/923226923192?text=I would like to order ${item.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-order-small"
                                    >
                                        Quick Order
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
