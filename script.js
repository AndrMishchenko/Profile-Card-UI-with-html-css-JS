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

    const btnAbout = document.querySelector('.switch-about-nonActive');
    if(btnAbout){
        btnAbout.classList.remove('switch-about-nonActive');
        btnAbout.classList.add('switch-about')
    }

    const btnExperience = document.querySelector('.switch-experience-click');
    if(btnExperience){
        btnExperience.classList.remove('switch-experience-click');
        btnExperience.classList.add('switch-experience')
    }

    const btnContact = document.querySelector('.switch-contact-click')
    if(btnContact){
        btnContact.classList.remove('switch-contact-click');
        btnContact.classList.add('switch-contact')
    }

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
    const btnContact = document.querySelector('.switch-contact-click')
    if(btnContact){
        btnContact.classList.remove('switch-contact-click');
        btnContact.classList.add('switch-contact')
    }
    
    const btnAbout = document.querySelector('.switch-about');
    if(btnAbout){
        btnAbout.classList.remove('switch-about');
        btnAbout.classList.add('switch-about-nonActive')
    }

    const btnExperience = document.querySelector('.switch-experience');
    if(btnExperience){
        btnExperience.classList.remove('switch-experience');
        btnExperience.classList.add('switch-experience-click')
    }

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
    const experienceBlock = document.querySelector('.page-experience');    
    if(experienceBlock){
        mainPage.removeChild(experienceBlock)
    };

    const contactBlock = document.querySelector('.page-contact');
    if (contactBlock) {
        mainPage.removeChild(contactBlock);
    }

    const viewPageAbout = document.querySelector('.about-general-information');
    if(viewPageAbout){
        mainPage.removeChild(viewPageAbout) 
    };

    const btnContact = document.querySelector('.switch-contact')
    if(btnContact){
        btnContact.classList.remove('switch-contact');
        btnContact.classList.add('switch-contact-click')
    }

    const btnAbout = document.querySelector('.switch-about');
    if(btnAbout){
        btnAbout.classList.remove('switch-about');
        btnAbout.classList.add('switch-about-nonActive')
    }

    const btnExperience = document.querySelector('.switch-experience-click');
    if(btnExperience){
        btnExperience.classList.remove('switch-experience-click');
        btnExperience.classList.add('switch-experience')
    }

    /*page-contact*/
    const pageContact = document.createElement('div');
    pageContact.classList.add('page-contact');
    mainPage.insertBefore(pageContact, switchBtn);

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('title-cotact-inform');
    contactTitle.textContent = 'CONTACT';
    
    /*location*/
    const contactLocation = document.createElement('div');
    contactLocation.classList.add('location-contact-info');
    
    const contactLocationIMG = document.createElement('div');
    contactLocationIMG.classList.add('contact-location-img');

    const contactLocationBorder = document.createElement('div');
    contactLocationBorder.classList.add('border');

    const contactLocationAdress = document.createElement('div');
    contactLocationAdress.classList.add('contact-location-adress');
    contactLocationAdress.textContent = 'Algonquin Rd, Three Oaks Vintage, MI, 49128';

    /*phone*/
    const contactPhone = document.createElement('div');
    contactPhone.classList.add('conatact-phone');

    const contactPhoneIMG = document.createElement('div');
    contactPhoneIMG.classList.add('contact-phone-img');

    const contactPhoneBorder = document.createElement('div');
    contactPhoneBorder.classList.add('border-phone');

    const contactPhoneNumber = document.createElement('div');
    contactPhoneNumber.classList.add('contact-phone-number');
    contactPhoneNumber.textContent = '(269) 756-9809'

    /*email*/
    const contactEmail = document.createElement('div');
    contactEmail.classList.add('contact-email')

    const contactEmailIMG = document.createElement('div');
    contactEmailIMG.classList.add('contact-email-img');

    const contactEmailBorder = document.createElement('div');
    contactEmailBorder.classList.add('border-email')

    const contactEmailMail = document.createElement('div');
    contactEmailMail.classList.add('contact-email-mail');
    contactEmailMail.textContent = 'william@rocheald.com';

    /*button*/
    const contactButtonBlock = document.createElement('div');
    contactButtonBlock.classList.add('contact-button-block');
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button');
    contactButton.textContent = 'WORK TOGETHER';

    /*add page-contact*/
    pageContact.appendChild(contactTitle);
    pageContact.appendChild(contactLocation);
    pageContact.appendChild(contactPhone);
    pageContact.appendChild(contactEmail);
    pageContact.appendChild(contactButtonBlock);
    contactButtonBlock.appendChild(contactButton);
    /*add Location*/
    contactLocation.appendChild(contactLocationIMG);
    contactLocation.appendChild(contactLocationBorder);
    contactLocation.appendChild(contactLocationAdress);
    
    /*add phone*/
    contactPhone.appendChild(contactPhoneIMG);
    contactPhone.appendChild(contactPhoneBorder);
    contactPhone.appendChild(contactPhoneNumber);
    
    /*add email*/
    contactEmail.appendChild(contactEmailIMG);
    contactEmail.appendChild(contactEmailBorder);
    contactEmail.appendChild(contactEmailMail);
}
