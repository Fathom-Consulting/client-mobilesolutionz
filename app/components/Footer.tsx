export default function Footer() {
  return (
    <footer className="bg-[#606c38] text-white py-8">
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} Mobile Solutionz. All rights reserved.
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
              Fathom
            </a>
          </div>
        </div>
    </footer>
  )
}

