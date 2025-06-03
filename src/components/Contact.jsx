const Contact = () => {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">Contact Me</h1>
        <p className="text-gray-600 text-lg">I'd love to hear from you!</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <form
          action="https://getform.io/f/broookka"
          method="POST"
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="font-bold text-2xl text-gray-800 mb-6 text-center">
            Send Your Message
          </h2>

          <div className="space-y-6">
            <div className="relative">
              <label
                className="text-sm font-medium text-gray-700 block mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="shubham shinde"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-700"
              />
            </div>

            <div className="relative">
              <label
                className="text-sm font-medium text-gray-700 block mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="abcd@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-700"
              />
            </div>

            <div className="relative">
              <label
                className="text-sm font-medium text-gray-700 block mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                required
                name="Message"
                id="message"
                rows="4"
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-700 resize-none"
              />
            </div>

            <button
              className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <svg
                className="w-8 h-8 text-blue-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-gray-600">shubhamshinde8412@gmail.com</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <svg
                className="w-8 h-8 text-blue-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <p className="text-gray-600">Tasgaon, Maharashtra</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <svg
                className="w-8 h-8 text-blue-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+91 8010967706</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
