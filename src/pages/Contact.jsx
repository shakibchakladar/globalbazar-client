const Contact = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-12 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Statistics Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">10,000+</h3>
              <p className="text-lg text-gray-700">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-lg text-gray-700">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-lg text-gray-700">Support Available</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-lg text-gray-700">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  