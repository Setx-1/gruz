let popup = function(){
    let buttons = document.querySelectorAll('[data-popup]')
    if(!buttons)return;

    let remove = function(){
        let popupRemove = document.querySelector('.popup');
        if(!popupRemove)return;
        popupRemove.remove();
    }

    let create = function(){
        
        let elemPopup= document.querySelector('.popup');


            if(elemPopup){
                elemPopup.querySelector('.popup_content').innerHTML = ''
                return elemPopup;
            }

        
        
        
            elemPopup = document.createElement('div');
            let elemContent = document.createElement('div');
            let elemOver = document.createElement('div');
       
            elemPopup.classList.add('popup');
            elemContent.classList.add('popup_content');
            elemOver.classList.add('popup_overlay');

            elemOver.addEventListener('click',remove);

            elemPopup.appendChild(elemOver);
            elemPopup.appendChild(elemContent);

            return elemPopup;
    }

    let show = function(event){
        let id= event.target.dataset.popup;
        
        if(!id)return;
        let content = document.querySelector(`#${id}`)
        
        let popup = create();

        popup.classList.add('active')

        popup.querySelector('.popup_content').innerHTML = content.innerHTML;

        document.body.appendChild(popup)

    }
    buttons.forEach(function(a){
        a.addEventListener('click',function(event){
            show(event);
        })
    })
}
window.addEventListener('load',function(){
    popup();
});

//slider

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:2500,
        easing:'ease',
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
        centerMode:true,
        swipe:true,
        touchThresshold:20,
        touchMove:true,
        variableWidth:true,

    });
});
    



// move to перемещение / прокрутка при клике
 const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
 if(menuLinks.length > 0){
     menuLinks.forEach(menuLink =>{
         menuLink.addEventListener('click',onMenuLinkClick);
     });
     function onMenuLinkClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
           const gotoBlock = document.querySelector(menuLink.dataset.goto); 
           const gotoBlockValue = gotoBlock.getBoundingClientRect().top +pageYOffset -document.querySelector('header').offsetHeight;
         
           if (iconMenu.classList.contains('_active')){
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
           }

           window.scrollTo({
               top: gotoBlockValue,
               behavior: 'smooth'
           });
           e.preventDefault();
        }

     }
 }
 // burger menu
 const iconMenu = document.querySelector('.menu_icon');
 const menuBody = document.querySelector('.nav_menu');
 if(iconMenu){
     iconMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
     });
 }