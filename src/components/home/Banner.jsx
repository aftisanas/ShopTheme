import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <div className='banner__text'>
                    {/* <img src={model2} alt="..." className="banner__img"/> */}
            </div>
                    <div className="banner__text first">
                        <h1 className="banner__text__Subtitle">2023 SUMMER</h1>
                        <h1 className="banner__text__title">SHOP & THEME COLLECTION</h1>
                        <p className='banner__text__txt'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ea aut molestias!
                        </p>
                        <button className="banner__text__cta">START SHOPPING</button>
                    </div>
                <div className='banner__text'>
                    {/* <img src={model1} alt="..." className="banner__img"/> */}
                </div>
                    <div className="banner__text second">
                        <h1 className="banner__text__Subtitle">2023 SUMMER</h1>
                        <h1 className="banner__text__title">SHOP & THEME COLLECTION</h1>
                        <p className='banner__text__txt'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ea aut molestias!
                        </p>
                        <button className="banner__text__cta">START SHOPPING</button>
                    </div>
        </div>
    )
}

export default Banner