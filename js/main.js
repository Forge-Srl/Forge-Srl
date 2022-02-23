const initHeader = () => {
    const header = document.getElementsByTagName('header')[0]
    const stickyOffset = window.innerHeight * 0.75

    window.onscroll = () => {
        if (window.pageYOffset > stickyOffset) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initHeader()
})
