export default function Footer() {
  return (
    <footer className="bg-[#606c38] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile Solutionz</h3>
            <p>
              Premium mobile car detailing services in Medford and throughout
              Southern Oregon.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              Phone:{' '}
              <a
                href="tel:+15413265822"
                className="hover:underline"
              >
                +1 (541) 326-5822
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:iconicion@gmail.com"
                className="hover:underline"
              >
                iconicion@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div>
            © {new Date().getFullYear()} Mobile Solutionz. All rights reserved.
          </div>

          {/* “Site created by” + pill link with shine effect */}
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Site created by</span>
            <a
              href="https://dtfathom.notion.site/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative inline-block px-4 py-2 rounded-full font-semibold
                text-[#606c38] bg-[#f0ead2] border border-[#606c38]
                overflow-hidden transition-all duration-300 ease-out
                
                before:absolute before:content-[''] 
                before:right-0 before:top-0 before:h-full before:w-6
                before:bg-white before:opacity-10 
                before:translate-x-12 before:rotate-6 
                before:duration-700
               
                hover:shadow-[0_0_10px_#606c38]
                hover:before:-translate-x-40
              "
            >
              Fathom Consulting
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

