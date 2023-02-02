document.addEventListener('click', e => {
   
    e.preventDefault();

    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown-container]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = document.querySelector('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    // let dropDownBlur
    // if (isDropdownButton) {
    //     dropDownBlur = document.querySelector('[data-blur]')
    //     dropDownBlur.classList.toggle('active')
    // }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })

})