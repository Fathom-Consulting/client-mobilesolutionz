// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
        },
        {
            protocol: 'https',
            hostname: 'kcxusa.com'
        },
        {
            protocol: 'https',
            hostname: '3dproducts.com'
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
  