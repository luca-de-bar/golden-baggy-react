/*
  WHAT IT DOES:
  - The `NewsletterCTA` component is a call-to-action section designed to encourage users to subscribe to a newsletter.

  HOW IT WORKS:
  - The component features a title, a brief description, an email input field, and a subscription button.
  - The form is styled to be responsive, with the input field and button aligning vertically on mobile devices and horizontally on larger screens.
  - The email input field includes focus styling to enhance the user experience when interacting with the form.
  - A small note at the bottom reassures users about privacy and the ability to unsubscribe at any time.

  HOW TO USE:
  - Place the `NewsletterCTA` component within a page where you want to encourage newsletter signups.
  - Customize the text content, placeholder, and button label as needed.

  EXAMPLE:

   <NewsletterCTA />
   
  - This will render a fully styled newsletter sign-up section on your page.
*/

const NewsletterCTA: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Stay Updated!</h2>
        <p className="text-lg sm:text-xl mb-8">Join our newsletter to get the latest updates on new products and upcoming sales.</p>

        <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input type="email" placeholder="Enter your email" className="px-4 py-3 w-full sm:w-auto text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
