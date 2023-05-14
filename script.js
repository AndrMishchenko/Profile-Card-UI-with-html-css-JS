/*Получаю весь блок в котором находится инфа*/
const mainPage = document.querySelector('.about-page')

/*получаю блок в котором находятся кнопки для перехода на разные странички*/
const switchBtn = document.querySelector('.switch')

/*получаю страницу about на которой вся инфа*/
const viewPageAbout = document.querySelector('.about-general-information');

/*получаю кнопку about*/
const btnAbout = document.querySelector('.switch-about');
btnAbout.addEventListener('click', clickBtnAbout);

/* получаю кнопку Experience*/
const btnExperience = document.querySelector('.switch-experience');
btnExperience.addEventListener('click', clickBtnExperience);

/* получаю кнопку Contact*/
const btnContact = document.querySelector('.switch-contact')
btnContact.addEventListener('click', clickBtnContact)

function clickBtnAbout(){
    const experienceBlock = document.querySelector('.page-experience') 
    const contactBlock = document.querySelector('.page-contact')
    mainPage.insertBefore(viewPageAbout, switchBtn);
    
    if(experienceBlock){
        mainPage.removeChild(experienceBlock)
    }if(contactBlock){
        mainPage.removeChild(contactBlock)
    }
    }

function clickBtnExperience(){
    const contactBlock = document.querySelector('.page-contact')

    const pageExperince = document.createElement('div');
    pageExperince.classList.add('page-experience');
    pageExperince.textContent = 'sfsdf'
   
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.textContent = 'new div'
    pageExperince.appendChild(newDiv)
    
    if(contactBlock){
        mainPage.removeChild(contactBlock)
    }
        
    mainPage.insertBefore(pageExperince, switchBtn);
    
       
    if(viewPageAbout){
        mainPage.removeChild(viewPageAbout)
    }
}


function clickBtnContact(){
    const pageContact = document.createElement('div');
    const experienceBlock = document.querySelector('.page-experience');    
    pageContact.classList.add('page-contact');
    mainPage.insertBefore(pageContact, switchBtn);

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('title-cotact-inform');
    contactTitle.textContent = 'Contact'

    const contactLocation = document.createElement('div');
    contactLocation.classList.add('location-contact-info');
    
    const contactLocationIMG = document.createElement('div');
    contactLocationIMG.classList.add('contact-location-img');

    const contactLocationBorder = document.createElement('div');
    contactLocationBorder.classList.add('border');

    pageContact.appendChild(contactTitle)
    pageContact.appendChild(contactLocation)
    contactLocation.appendChild(contactLocationIMG)
    contactLocation.appendChild(contactLocationBorder)

    if(experienceBlock){
        mainPage.removeChild(experienceBlock)
    }if(viewPageAbout){
        mainPage.removeChild(viewPageAbout)
    }
}
