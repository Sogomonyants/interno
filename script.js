const anchors_header = document.querySelectorAll(".header__nav a");
const anchors_footer = document.querySelectorAll(".explore a");

anchors_header.forEach(header => {
    header.addEventListener('click', function(event){
        event.preventDefault();
        anchors(header);
    });
})

anchors_footer.forEach(footer => {
    footer.addEventListener('click', function(event){
        event.preventDefault();
        anchors(footer);
    });
});


function anchors(links){
    const id = links.getAttribute('href');
    const element = document.querySelector(id);
    
    function scroll(height){
        window.scroll({
            top: element.offsetTop - height,
            behavior: 'smooth'
        });
    }
    
    var width = window.innerWidth;
            
    if(width <= 500){
        scroll(175);
    } else {
        scroll(106);
    }
}

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

function scrollPosition() {
    return window.scrollY || document.documentElement.scrollTop;
}

function containHide() {
    return header.classList.contains('hide');
}
 
window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //console.log('scroll down');
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //console.log('scroll up');
        header.classList.remove('hide');
    }
 
    lastScroll = scrollPosition();
})

