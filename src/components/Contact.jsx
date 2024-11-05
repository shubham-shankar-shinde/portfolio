const Contact = () => {
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <h1 className="text-3xl font-bold mb-5 ">Contact Me</h1>
        <span>Please fill out form below to contact me </span>
        <div className="flex flex-col justify-center items-center mt-5">
          <form
            action="https://getform.io/f/broookka"
            method="POST"
            className="bg-slate-200 w-96 p-6 rounded-xl"
          >
            <h1 className="font-semibold text-xl">Send Your Message </h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mt-5" htmlFor="name">
                Full Name{" "}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Full Name "
                className="shadow appearance-none rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <label className="block text-gray-700 mt-5" htmlFor="email">
                Email Address{" "}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address "
                className="shadow appearance-none rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <label className="block text-gray-700 mt-5" htmlFor="msg">
                Message{" "}
              </label>
              <textarea
                required
                name="Message"
                id="msg"
                placeholder="Enter Your Message"
                className="shadow appearance-none rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              class="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
