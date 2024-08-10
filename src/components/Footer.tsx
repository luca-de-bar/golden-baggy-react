import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 2.25h9a5.25 5.25 0 0 1 5.25 5.25v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25Zm10.5 4.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
                  />
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 2.25H6a3.75 3.75 0 0 0-3.75 3.75v12A3.75 3.75 0 0 0 6 21.75h6.75V14.25H9.75v-3H12.75V9a3 3 0 0 1 3-3h3v3H15.75c-.414 0-.75.336-.75.75V11.25h3.75v3H15v7.5H18a3.75 3.75 0 0 0 3.75-3.75v-12A3.75 3.75 0 0 0 18 2.25Z"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 15.75l4.5-2.625-4.5-2.625v5.25ZM21 12c0 5.25-.675 6-6 6H9c-5.325 0-6-.675-6-6s.675-6 6-6h6c5.325 0 6 .675 6 6Z"
                  />
                </svg>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3h2.25v5.625a5.25 5.25 0 1 0 5.25 5.25V11.25a6.75 6.75 0 0 1-6.75-6.75ZM7.5 14.25a2.25 2.25 0 0 0 2.25 2.25v-3.75a1.125 1.125 0 0 1 1.125-1.125h.375v4.875a2.25 2.25 0 1 0-3.75-2.25Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <a href="mailto:info@tuodominio.com" className="hover:text-gray-400">
                Email: info@tuodominio.com
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                WhatsApp: +39 123 456 7890
              </a>
            </div>
          </div>

          {/* Other Info Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Info Legali</h3>
            <p className="text-gray-400 text-center md:text-left">P.IVA: 12345678901</p>
            <p className="text-gray-400 text-center md:text-left">© 2024 Tuo Nome. Tutti i diritti riservati.</p>
            <p className="text-gray-400 text-center md:text-left">Termini e Condizioni</p>
            <p className="text-gray-400 text-center md:text-left">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
