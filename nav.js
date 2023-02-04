// document.addEventListener('click', e => {
   
//     e.preventDefault();

//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropdownButton && e.target.closest('[data-dropdown-container]') != null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = document.querySelector('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })

// })

// function toggle() {
//     var blur = document.querySelector('[data-blur]')
//     var menu = document.querySelector('[data-dropdown]')
//     menu.classList.toggle('active')
//     blur.classList.toggle('active')
//     console.log('click')
// }

document.addEventListener('click', e => {

    var blur = document.querySelector('[data-blur]')
    var menu = document.querySelector('[data-dropdown]')
    var menuBtn = e.target.matches('[data-dropdown-button]')
    var menuCloseBtn = e.target.matches('[data-close-button]')

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