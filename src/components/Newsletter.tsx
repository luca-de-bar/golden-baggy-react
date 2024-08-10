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
