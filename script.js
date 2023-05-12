const contact = document.querySelector('.switch-contact')
contact.addEventListener('click', showContactMenu);

const aboutPage = document.querySelector('.about-page');

const aboutGeneralInformation = document.querySelector('.about-general-information');
const switchButton = document.querySelector('.switch');

function showContactMenu(){
    if(aboutGeneralInformation){
        aboutPage.removeChild(aboutGeneralInformation);

        const contactMenu = document.createElement('div');
        contactMenu.classList.add('contact-menu');
        contactMenu.textContent = 'sdfsdfs'
        aboutPage.insertBefore(contactMenu, switchButton);
    }
}

const about = document.querySelector('.switch-about');
about.addEventListener('click', showAbout)

function showAbout(){
    const getContactMenu = document.querySelector('.contact-menu');
    const getExperienceMenu = document.querySelector('.experience-menu');
    if(getContactMenu){
        aboutPage.removeChild(getContactMenu)
        aboutPage.insertBefore(aboutGeneralInformation, switchButton)
    }if(getExperienceMenu){
        aboutPage.removeChild(getExperienceMenu)
        aboutPage.insertBefore(aboutGeneralInformation, switchButton)
    }
}

const experience = document.querySelector('.switch-experience');
experience.addEventListener('click', showExperienceMenu);

function showExperienceMenu(){
    if(aboutGeneralInformation){
        aboutPage.removeChild(aboutGeneralInformation)

        const experienceMenu = document.createElement('div');
        experienceMenu.classList.add('experience-menu');
        experienceMenu.textContent = 'dfsdfertrf'
        aboutPage.insertBefore(experienceMenu, switchButton)
    }
}
