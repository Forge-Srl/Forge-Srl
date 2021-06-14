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
        let prevX = null

        const nextSlideHandler = () => {
            if (nextIndex >= slidesCount) {
                nextIndex = 0
            }
            slider.scrollItem(nextIndex++)
        }
        const slide = () => { slideTimeout = window.setTimeout(nextSlideHandler, milliseconds) }

        const handleDragStart = currentX => {
            window.clearTimeout(slideTimeout)
            prevX = currentX
        }
        const handleDragEnd = currentX => {
            const showNext = currentX - prevX < 0
            prevX = null

            if (showNext && nextIndex < slidesCount) {
                nextSlideHandler()
            } else if (!showNext && nextIndex > 0) {
                nextIndex -= 2
                nextSlideHandler()
            }

            slide()
        }

        slider.ele.addEventListener('glider-animated', () => {
            window.clearTimeout(slideTimeout)
            slide()
        })
        slider.ele.addEventListener('glider-slide-visible', event => {
            // Sync dots navigation with auto-slide and drag
            nextIndex = event.detail.slide + 1
        })
        slider.track.addEventListener('mousedown', event => handleDragStart(event.clientX))
        slider.track.addEventListener('touchstart', event => handleDragStart(event.touches[0].clientX))
        slider.track.addEventListener('mouseup', event => handleDragEnd(event.clientX))
        slider.track.addEventListener('touchend', event => handleDragEnd(event.changedTouches[0].clientX))

        slide()
    }

    document.querySelectorAll('.glider').forEach(element => {
        const slider = new Glider(element, {
            slidesToShow: 1,
            slidesToScroll: 'auto',
            duration: .5,
            dots: '.dots',
            draggable: true,
            dragVelocity: 0.5,
        })

        autoSlide(slider, 5000)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initHeader()
    initSliders()
})
