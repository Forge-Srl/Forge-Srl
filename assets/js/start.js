const advertiser = (lines) => {
    const maxLength = Math.max(...lines.map(l => l.length))
    console.log('')
    console.log(`%c+${'-'.repeat(maxLength+2)}+`, 'font-family: monospace;')
    lines.forEach(line => {
        console.log(`%c| ${line.padEnd(maxLength, ' ')} |`, 'font-family: monospace;')
    })
    console.log(`%c+${'-'.repeat(maxLength+2)}+`, 'font-family: monospace;')
    console.log('')
}

document.addEventListener("DOMContentLoaded", function() {
    console.log('%c{FORGE}', 'font-size: 6em; font-family: monospace; color: #F08819')
    advertiser([
        'Vuoi lavorare con noi?',
        new URL('/lavora-con-noi', window.location.href).toString(),
    ])
    window.whiteRabbit = {
        follow: () => {
            console.log('Loading...')
            const rabbitHole = document.createElement('script')
            rabbitHole.src = new URL('/assets/js/rabbit-hole.js', window.location.href).toString()
            document.body.append(rabbitHole)
        },
        onFollowLoaded: (rabbitHole) => {
            rabbitHole.start()
            console.log('Welcome!')
        }
    }
    console.log('%cFollow the `whiteRabbit` out of the `window`...', 'font-family: monospace; font-style: italic;')
})