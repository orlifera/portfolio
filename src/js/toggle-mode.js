//wanted to use the js for the HTML code too, but form some reason i cant figure out why some divs 
//are not showing up in the DOM, so i had to use the HTML to toggle the mode

//switch function to toggle between light and dark mode

const switchTheme = () => {
    //get root element and data theme value 
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme

    //if dataTheme is light, change to dark, else change to light. Whatever is set, we apply the opposite
    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    //set the new theme to the root element
    rootElem.setAttribute('data-theme', newTheme);

    //set the local storage to the new theme
    localStorage.setItem('theme', newTheme);

}

//event listener to listen for the click on the switch button

document.querySelector('#theme-switcher').addEventListener('click', switchTheme);