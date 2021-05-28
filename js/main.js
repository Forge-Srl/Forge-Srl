document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementsByTagName('header')[0]
    const stickyOffset = window.innerHeight

    window.onscroll = () => {
        if (window.pageYOffset > stickyOffset) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
    }
})
