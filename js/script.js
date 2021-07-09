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
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:500,
        easing:'ease',
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
    });
});
    