import React, { useEffect } from 'react'

const Page1 = () => {
    const imagesLen = 73
    const baseUrl = 'http://teabag.digital/spin-test/360s_00'
    let scrollThreshold = window.innerHeight * 3 / imagesLen
    let currImage = 0
    const scrollProgress = () => {

        const spinner = document.getElementById('spinner')
        currImage = Math.floor(window.pageYOffset / scrollThreshold)
        spinner.src = baseUrl + (currImage < 10 ? '0' : '') + currImage + '.jpg'
        if (currImage > imagesLen) {
            currImage = imagesLen
            /* Remove scroll spy */
            window.removeEventListener('scroll', scrollProgress)
        }

    }
    useEffect(() => {
        for (let i = 0; i < imagesLen; i++) {
            let img = new Image()
            img.src = baseUrl + (i < 10 ? '0' : '') + i + '.jpg'

        }
        window.addEventListener('scroll', () => {
            scrollProgress()
        }, { passive: true })
        if (document.documentElement.scrollTop < 1600) {
            window.removeEventListener('scroll', scrollProgress)
        }
    }, []);

    return (
        <div className="firstScreen" id="first">
            <div
                style={{

                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "black",
                }}
                className="sticky"
            >
                <img
                    id='spinner'
                    src="http://teabag.digital/spin-test/360s_0000.jpg" alt={""}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        zIndex: -1,
                        left: 0,
                    }}
                />
                <h3>
                    ADIDAS 360
                </h3>
            </div>
        </div>
    )
}

export default Page1