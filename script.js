document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelector('.news-items');
    const projectItems = document.querySelector('.project-container');
    const clientsItems = document.querySelector('.clients-container');
    const prevButtons = document.querySelectorAll('.slide-btn button:nth-child(1)'); // Кнопка "<"
    const nextButtons = document.querySelectorAll('.slide-btn button:nth-child(2)'); // Кнопка ">"

    let currentNewsIndex = 0;
    let currentProjectIndex = 0;
    let currentClientsIndex = 0;

    const newsItemWidth = newsItems.querySelector('.news-item').clientWidth;
    const projectItemWidth = projectItems.querySelector('.project-item').clientWidth;
    const clientsItemWidth = clientsItems.querySelector('.clients-item').clientWidth;

    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.closest('.news')) {
                slideNews('prev');
            } else if (button.closest('.projects')) {
                slideProject('prev');
            } else if (button.closest('.clients')) {
                slideClients('prev');
            }
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.closest('.news')) {
                slideNews('next');
            } else if (button.closest('.projects')) {
                slideProject('next');
            } else if (button.closest('.clients')) {
                slideClients('next');
            }
        });
    });

    function slideNews(direction) {
        if (direction === 'next' && currentNewsIndex < newsItems.children.length - 1) {
            currentNewsIndex++;
        } else if (direction === 'prev' && currentNewsIndex > 0) {
            currentNewsIndex--;
        }
        newsItems.style.transform = `translateX(-${currentNewsIndex * newsItemWidth}px)`;
    }

    function slideProject(direction) {
        if (direction === 'next' && currentProjectIndex < projectItems.children.length - 1) {
            currentProjectIndex++;
        } else if (direction === 'prev' && currentProjectIndex > 0) {
            currentProjectIndex--;
        }
        projectItems.style.transform = `translateX(-${currentProjectIndex * projectItemWidth}px)`;
    }

    function slideClients(direction) {
        if (direction === 'next' && currentClientsIndex < clientsItems.children.length - 1) {
            currentClientsIndex++;
        } else if (direction === 'prev' && currentClientsIndex > 0) {
            currentClientsIndex--;
        }
        clientsItems.style.transform = `translateX(-${currentClientsIndex * clientsItemWidth}px)`;
    }
});
