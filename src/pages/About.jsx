import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1501392114/photo/beautiful-indian-young-woman-standing-with-big-white-empty-banner-or-poster-billboard-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=u8rKt7JoqMkC9QPkmGL8Y1D_iGFjO7rYysPmaqmvrJ0=')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Global Bazar</h1>
          <p className="text-lg text-gray-200">
            Your one-stop shop for quality products at unbeatable prices.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700">
            Explore Our Products
          </button>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          At Global Bazar, we began our journey with a simple idea: to bring the world’s best
          products closer to you. Since 2002, we have been on a mission to connect buyers with
          top-quality goods and exceptional service.
        </p>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-white p-6 shadow-md rounded-md">
            <span className="block text-blue-600 font-bold text-xl mb-2">2005</span>
            <p>Launched our first product line and introduced Global Bazar to the world.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <span className="block text-blue-600 font-bold text-xl mb-2">2015</span>
            <p>Expanded our platform to include global shipping and diverse categories.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <span className="block text-blue-600 font-bold text-xl mb-2">2024</span>
            <p>Reached 1 million satisfied customers worldwide.</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, & Values */}
      <section className="py-16 bg-gray-100 px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
            <img
              src="https://media.istockphoto.com/id/1190118814/photo/neon-shopping-cart-sign-on-brick-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=1HIX0e6oMRzpVSEqqj1TvbmOLEwIjbWgPrvUq0U5LGM="
              alt="Neon Shopping Cart"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="mb-4">
              At Global Bazar, we aim to make quality products accessible to everyone, everywhere.
              Our vision is to be the most trusted and loved marketplace for global shopping.
            </p>
            <p className="font-semibold">Our Core Values:</p>
            <ul className="list-disc list-inside">
              <li>Customer satisfaction</li>
              <li>Innovation and creativity</li>
              <li>Transparency and integrity</li>
              <li>Commitment to excellence</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
