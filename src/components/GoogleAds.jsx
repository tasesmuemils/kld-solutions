'use client';
import React from 'react';
import Script from 'next/script';

export default function GoogleAds({ ADS_ID }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
      />

      <Script id='google-ads-init' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );
}
