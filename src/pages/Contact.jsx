import React from 'react'


const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto  px-8 text-center">
      <h2 className="text-3xl  font-bold mb-4">GET IN TOUCH WITH US</h2>
      <p className="text-gray-700 mb-12">
        If you have any questions or require assistance, please don't hesitate
        to reach out. Simply send us a message via our chat widget, and our
        dedicated team will respond to you at the earliest opportunity.
      </p>

      <form className="text-left space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase text-gray-500 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-500 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase text-gray-500 mb-2">
            Message
          </label>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 text-sm uppercase hover:bg-gray-900"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact