const FooterSection = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8 pb-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/3 sm:text-center text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-2">Feel free to reach out to us for any inquiries.</p>
          </div>
          <div className="md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="md:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center">
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.794C21 6.89 16.071 3 12 3s-9 3.89-9 9.794C3 17.219 6.383 21 12 21c1.364 0 2.657-.281 3.857-.794a5.898 5.898 0 0 0 2.143-1.575c.138-.155.264-.32.374-.5l1.554-3.693a.75.75 0 0 0-1.373-.648l-1.244 2.961a.75.75 0 0 1-.602.461 3.697 3.697 0 0 1-1.337-.984A4.879 4.879 0 0 1 12 15.206a4.904 4.904 0 0 1-3.673-1.694A3.723 3.723 0 0 1 7 11.794c0-1.042.417-2.046 1.152-2.79.736-.745 1.758-1.204 2.848-1.204h.004a.75.75 0 0 1 .75.75V11M10.343 11.17a1.75 1.75 0 1 1 2.414-2.414 1.75 1.75 0 0 1-2.414 2.414z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 6.343a2 2 0 0 1 0 2.828 2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828 2 2 0 0 1 2.828 0zM7.121 16.121a2 2 0 0 1 0-2.828 2 2 0 0 1 2.828 0 2 2 0 0 1 0 2.828 2 2 0 0 1-2.828 0zM19.879 16.121a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828 2 2 0 0 1 2.828 0zM7.121 6.343a2 2 0 0 1 0 2.828 2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828 2 2 0 0 1 2.828 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  