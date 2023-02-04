document.addEventListener('click', e => {

    const blur = document.querySelector('[data-blur]')
    const menu = document.querySelector('[data-dropdown]')
    const menuBtn = e.target.matches('[data-dropdown-button]')
    const menuCloseBtn = e.target.matches('[data-close-button]')

    // open dropdown menu (click menu button)
    if (menuBtn) {
        menu.classList.toggle('active')
        blur.classList.toggle('active')
    }

    //close dropdown menu (click X button or outside menu window)
    if (menuCloseBtn || !e.target.closest('[data-dropdown]') && !menuBtn) {
        menu.classList.remove('active')
        blur.classList.remove('active')
        console.log('click')
    }
})