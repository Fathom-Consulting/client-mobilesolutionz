import React from 'react';
import Script from 'next/script';

const EmbedSocialFeed: React.FC = () => {
  return (
    <div className="mt-20 pt-16">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">Check us out on Instagram</h2>
      <div className="embedsocial-container">
        <div className="embedsocial-hashtag" data-ref="1c1d282ae20091a668fc2dedabce43a88cb75931">
        </div>
        
        <Script 
          id="EmbedSocialHashtagScript"
          src="https://embedsocial.com/cdn/ht.js"
          strategy="lazyOnload" 
        />
      </div>
    </div>
  );
};

export default EmbedSocialFeed;