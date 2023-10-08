document.addEventListener('DOMContentLoaded', function(){
    const headerLinks = document.querySelectorAll('[data-header-links]');
    const buttons = document.querySelectorAll('[data-tab-button]');
    const menu = document.querySelectorAll('[data-menu-links]');

    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener('mouseover', function (link) {
            const el = link.target || link.srcElement;
            const id = el.id;
            if(id == 'mouseoverclose'){
                escondeTodasAbas();
            }
            else{
                const idLink = document.querySelector('[data-header-id='+id+']');
                escondeTodasAbas();
                idLink.classList.toggle('header__links__list--is-active');
            }
        })
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const element = botao.target || link.srcElement;
            const idButton = element.id;
            const idNumButton = document.querySelector('[data-tab-id='+idButton+']');
            const idDiv = document.querySelector('[data-div-id='+idButton+']');
            escondeFileira();
            removeBotaoAtivo();
            idNumButton.classList.add('more-films__columns--is-active');
            idDiv.classList.add('more-films__buttons--is-active');
        })
    }

    window.onclick = function(event) {
        if (!event.target.matches('.menuToggle__links__a')) {
            var dropdowns = document.getElementsByClassName("menuToggle__links__list");
            for (let i = 0; i < dropdowns.length; i++) {
                escondeTodasAbasMenu();
            }
        } else {
            for (let i = 0; i < menu.length; i++) {
                    const element = event.target;
                    const idButton = element.id;
                    const idDiv = document.querySelector('[data-menu-id='+idButton+']');
                    idDiv.classList.toggle('menuToggle__links__list--is-active');
            }
        }
    }   
})

function escondeTodasAbas(){
    const linksContainer = document.querySelectorAll('[data-header-id]');
    for (let i = 0; i < linksContainer.length; i++) {
        linksContainer[i].classList.remove('header__links__list--is-active');
        
    }
}

function escondeFileira(){
    const tabContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('more-films__columns--is-active');
        
    }
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-div-id]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('more-films__buttons--is-active');
    }
}

function escondeTodasAbasMenu(){
    const linksContainer = document.querySelectorAll('[data-menu-id]');
    for (let i = 0; i < linksContainer.length; i++) {
        linksContainer[i].classList.remove('menuToggle__links__list--is-active');
        
    }
}