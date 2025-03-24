document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.nav-mobile-menu-button');
    const menuClose = document.querySelector('.nav-mobile-menu-close');
    const mobileMenu = document.querySelector('.nav-mobile-menu');
    const mobileMenuBody = document.querySelector('.nav-mobile-menu-body');
    
    // Clone os elementos necessários para o menu mobile
    const leftWrapper = document.querySelector('.left-wrapper').cloneNode(true);
    const rightWrapper = document.querySelector('.right-wrapper').cloneNode(true);
    
    // Adiciona os elementos clonados ao menu mobile
    mobileMenuBody.appendChild(leftWrapper);
    mobileMenuBody.appendChild(rightWrapper);
    
    // Função para abrir/fechar o menu
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Event listeners
    menuButton.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);
    
    // Fecha o menu ao clicar em um link
    mobileMenuBody.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}); 