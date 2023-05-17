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
   
    const pageExperinceTitle = document.createElement('div');
    pageExperinceTitle.classList.add('expirience-title');
    pageExperinceTitle.textContent = 'WORK EXPERIENCE'
    pageExperince.appendChild(pageExperinceTitle)
    
    /*block first work*/
    const pageExperinceFirstWork = document.createElement('div');
    pageExperinceFirstWork.classList.add('block-first-work');
    pageExperince.appendChild(pageExperinceFirstWork);

    const firstWorkYear = document.createElement('div');
    firstWorkYear.classList.add('first-work');
    firstWorkYear.textContent = '2014';
    pageExperinceFirstWork.appendChild(firstWorkYear);

    const divisionBlockDot = document.createElement('div');
    divisionBlockDot.classList.add('border-expirience');
    pageExperinceFirstWork.appendChild(divisionBlockDot)

    const firstWorkDot = document.createElement('div');
    firstWorkDot.classList.add('first-work-dot');
    divisionBlockDot.appendChild(firstWorkDot);

    const firstWorkBorder = document.createElement('div');
    firstWorkBorder.classList.add('first-work-border');
    divisionBlockDot.appendChild(firstWorkBorder)

    const firstWorkJobInformation = document.createElement('div');
    firstWorkJobInformation.classList.add('first-work-job-information');
    pageExperinceFirstWork.appendChild(firstWorkJobInformation)

    const titleFirstJob = document.createElement('div');
    titleFirstJob.classList.add('title-first-job');
    titleFirstJob.textContent = 'Front-end Developer at JotForm';
    firstWorkJobInformation.appendChild(titleFirstJob);

    const infoFirstJob = document.createElement('div');
    infoFirstJob.classList.add('info-first-job');
    infoFirstJob.textContent = 'Disrupt stumptown retro everyday carry unicorn.';
    firstWorkJobInformation.appendChild(infoFirstJob)

    /*block second work*/
    const pageExperinceSecondWork = document.createElement('div');
    pageExperinceSecondWork.classList.add('block-second-work');
    pageExperince.appendChild(pageExperinceSecondWork);

    const secondWorkYear = document.createElement('div');
    secondWorkYear.classList.add('second-work');
    secondWorkYear.textContent = '2016';
    pageExperinceSecondWork.appendChild(secondWorkYear);

    const secondDivisionBlockDot = document.createElement('div');
    secondDivisionBlockDot.classList.add('border-expirience');
    pageExperinceSecondWork.appendChild(secondDivisionBlockDot)

    const secondWorkDot = document.createElement('div');
    secondWorkDot.classList.add('second-work-dot');
    secondDivisionBlockDot.appendChild(secondWorkDot);

    const secondWorkBorder = document.createElement('div');
    secondWorkBorder.classList.add('second-work-border');
    secondDivisionBlockDot.appendChild(secondWorkBorder)

    const secondWorkJobInformation = document.createElement('div');
    secondWorkJobInformation.classList.add('second-work-job-information');
    pageExperinceSecondWork.appendChild(secondWorkJobInformation)

    const titleSecondJob = document.createElement('div');
    titleSecondJob.classList.add('title-second-job');
    titleSecondJob.textContent = 'UI Developer at GitHub';
    secondWorkJobInformation.appendChild(titleSecondJob);

    const infoSecondJob = document.createElement('div');
    infoSecondJob.classList.add('info-second-job');
    infoSecondJob.textContent = 'Developed new conversion funnels and disrupt.';
    secondWorkJobInformation.appendChild(infoSecondJob);

    /*block third job*/
    const pageExperinceThirdWork = document.createElement('div');
    pageExperinceThirdWork.classList.add('block-third-work');
    pageExperince.appendChild(pageExperinceThirdWork);

    const thirdWorkYear = document.createElement('div');
    thirdWorkYear.classList.add('third-work');
    thirdWorkYear.textContent = '2018';
    pageExperinceThirdWork.appendChild(thirdWorkYear);

    const thirdDivisionBlockDot = document.createElement('div');
    thirdDivisionBlockDot.classList.add('border-expirience');
    pageExperinceThirdWork.appendChild(thirdDivisionBlockDot)

    const thirdWorkDot = document.createElement('div');
    thirdWorkDot.classList.add('third-work-dot');
    thirdDivisionBlockDot.appendChild(thirdWorkDot);

    const thirdWorkBorder = document.createElement('div');
    thirdWorkBorder.classList.add('third-work-border');
    thirdDivisionBlockDot.appendChild(thirdWorkBorder)

    const thirdWorkJobInformation = document.createElement('div');
    thirdWorkJobInformation.classList.add('third-work-job-information');
    pageExperinceThirdWork.appendChild(thirdWorkJobInformation)

    const titleThirdJob = document.createElement('div');
    titleThirdJob.classList.add('title-third-job');
    titleThirdJob.textContent = 'Illustrator at Google';
    thirdWorkJobInformation.appendChild(titleThirdJob);

    const infoThirdJob = document.createElement('div');
    infoThirdJob.classList.add('info-third-job');
    infoThirdJob.textContent = 'Onboarding illustrations for App.';
    thirdWorkJobInformation.appendChild(infoThirdJob);

    /*block fourth job*/
    const pageExperinceFourthWork = document.createElement('div');
    pageExperinceFourthWork.classList.add('block-fourth-work');
    pageExperince.appendChild(pageExperinceFourthWork);

    const fourthWorkYear = document.createElement('div');
    fourthWorkYear.classList.add('fourth-work');
    fourthWorkYear.textContent = '2018';
    pageExperinceFourthWork.appendChild(fourthWorkYear);

    const fourthDivisionBlockDot = document.createElement('div');
    fourthDivisionBlockDot.classList.add('border-expirience');
    pageExperinceFourthWork.appendChild(fourthDivisionBlockDot)

    const fourthWorkDot = document.createElement('div');
    fourthWorkDot.classList.add('fourth-work-dot');
    thirdDivisionBlockDot.appendChild(fourthWorkDot);

    const fourthWorkBorder = document.createElement('div');
    fourthWorkBorder.classList.add('fourth-work-border');
    fourthDivisionBlockDot.appendChild(fourthWorkBorder)

    const fourthWorkJobInformation = document.createElement('div');
    fourthWorkJobInformation.classList.add('fourth-work-job-information');
    pageExperinceFourthWork.appendChild(fourthWorkJobInformation)

    const titleFourtJob = document.createElement('div');
    titleFourtJob.classList.add('title-fourth-job');
    titleFourtJob.textContent = 'Illustrator at Google';
    fourthWorkJobInformation.appendChild(titleFourtJob);

    const infoFourtJob = document.createElement('div');
    infoFourtJob.classList.add('info-fourth-job');
    infoFourtJob.textContent = 'Onboarding illustrations for App.';
    fourthWorkJobInformation.appendChild(infoFourtJob);

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
