import React from 'react';

// TODO remove dev env when done
export default function Logo() {
    const useLogoRetina = window.env === 'development' ? true : Boolean.valueOf('{{ settings.use_logo_retina }}'),
        useLogoImage = window.env === 'development' ? true : Boolean.valueOf('{{ settings.use_logo }}'),
        shopName = window.env === 'development' ? 'Shopper' : '{{ shop.name }}',
        imgSrc = window.env === 'development' ? 'theme/assets/logo.png' : "{{ 'logo.png' | asset_url }}",
        imgSrcRetina = window.env === 'development' ? 'theme/assets/logo_retina.png' : "{{ 'logo_retina.png' | asset_url }}";

    if (useLogoImage) {
        return (
            <a className="logo" href="/">
                {useLogoRetina ?
                    <img className="logo__img"
                         src={imgSrc}
                         srcSet={`${imgSrc} 1x, ${imgSrcRetina} 2x`}
                         alt={shopName}
                    />
                    :
                    <img className="logo__img" src={imgSrc} alt={shopName} />
                }
            </a>
        );
    }

    return (
        <a id="site-title" href="/">
            {shopName}
        </a>
    );
}
