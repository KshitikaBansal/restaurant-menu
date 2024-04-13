document.addEventListener('DOMContentLoaded', function() {
    const menuData = [
        { category: 'Appetizers', name: 'Salad', description: 'Fresh garden salad', price: '$8.99' },
        { category: 'Appetizers', name: 'Soup', description: 'Tomato basil soup', price: '$6.99' },
        { category: 'Main Courses', name: 'Steak', description: 'Grilled sirloin steak', price: '$24.99' },
        { category: 'Main Courses', name: 'Pasta', description: 'Spaghetti with marinara sauce', price: '$16.99' },
        { category: 'Desserts', name: 'Cheesecake', description: 'New York style cheesecake', price: '$9.99' },
        { category: 'Desserts', name: 'Ice Cream', description: 'Vanilla and chocolate ice cream', price: '$5.99' },
        { category: 'Beverages', name: 'Soda', description: 'Assorted soft drinks', price: '$2.99' },
        { category: 'Beverages', name: 'Coffee', description: 'Regular or decaf', price: '$3.49' }
    ];

    const menuSections = document.querySelectorAll('section');
    menuSections.forEach(section => {
        const category = section.id;
        const menuItems = menuData.filter(item => item.category === category);
        const menuItemsContainer = section.querySelector('.menu-items');
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price}</p>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    });
});