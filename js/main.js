/**
 * Wits Universal POS - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Sample data for charts (will be replaced with real data later)
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(74, 111, 255, 0.2)',
                borderColor: 'rgba(74, 111, 255, 1)',
                borderWidth: 1
            }
        ]
    };

    const productData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(74, 111, 255, 0.7)',
                    'rgba(40, 167, 69, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(108, 117, 125, 0.7)'
                ],
                borderWidth: 1
            }
        ]
    };

    // Initialize notification dropdowns
    const notificationButtons = document.querySelectorAll('.header-icons a');
    
    notificationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Toggle notification dropdown functionality will be added here
        });
    });

    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        performSearch(searchBar.value);
    });
    
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    function performSearch(query) {
        if (query.trim() === '') return;
        
        console.log('Searching for:', query);
        // Actual search implementation will be added later
        
        // Reset search field
        searchBar.value = '';
    }
    
    // Mobile sidebar toggle functionality
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header');
    header.prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
    
    // Responsiveness for smaller screens
    function checkWidth() {
        if (window.innerWidth <= 992) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    }
    
    window.addEventListener('resize', checkWidth);
    
    // Initialize chart placeholders with message
    const chartPlaceholders = document.querySelectorAll('.chart-placeholder');
    
    chartPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = '<p>Charts will be implemented using Chart.js in the next phase</p>';
    });
    
    // Log app initialization
    console.log('Wits Universal POS initialized successfully');
});