// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
        },
        {
            // https get request from pexels.com
            protocol: 'https',
            hostname: 'pexels.com'
        },
        {
            protocol: 'https',
            hostname: 'kcxusa.com'
        },
        {
            protocol: 'https',
            hostname: 'upload.wikimedia.org'
        },
        {
            protocol: 'https',
            hostname: 'prochoicecarcare.com'
        },
        {
            protocol: 'https',
            hostname: 'psdetailproducts.com'
        }
      ]
    },
  };
  