const ContactUSbutton = document.getElementById("ContactUsButton");
const ContactUsPage = document.getElementById("FS");
function SwitchTOContactPage(){
    ContactUsPage.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'})
}
ContactUSbutton.addEventListener("click", SwitchTOContactPage)