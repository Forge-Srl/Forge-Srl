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

const initSliders = () => {
    const autoSlide = (slider, milliseconds) => {
        const slidesCount = slider.track.childElementCount
        let slideTimeout = null
        let nextIndex = 1

        const slideHandler = () => {
            if (nextIndex >= slidesCount) {
                nextIndex = 0
            }
            slider.scrollItem(nextIndex++)
        }
        const slide = () => { slideTimeout = setTimeout(slideHandler, milliseconds) }

        slider.ele.addEventListener('glider-animated', function() {
            window.clearInterval(slideTimeout)
            slide()
        })

        slide()
    }

    document.querySelectorAll('.glider').forEach(element => {
        const slider = new Glider(element, {
            slidesToShow: 1,
            slidesToScroll: 'auto',
            duration: .5,
            dots: '.dots'
        })

        autoSlide(slider, 5000)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initHeader()
    initSliders()
})
