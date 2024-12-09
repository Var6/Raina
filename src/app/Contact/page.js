import React from 'react'

function page() {
  return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        {/* ... other form fields ... */}
        <div className="mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-gray-700 text-sm text-center">
        Feel free to reach out to us with any questions or inquiries.
      </p>
      <p className="text-gray-700 text-sm text-center">Email: contact@example.com</p>
      <p className="text-gray-700 text-sm text-center">Phone: +123-456-7890</p>
    </div>
  )
}

export default page