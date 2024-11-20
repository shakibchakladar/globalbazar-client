import React from "react";

const Testimonial = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
        Testimonials
      </h2>
      <p className="text-center text-gray-500 mb-12">
        --- What Our Clients Say ---
      </p>

      <div className="flex justify-center gap-10 md:flex-row flex-col">
        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
          <div
            className="flex justify-center mb-3 w-20 h-20 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/happy-successful-business-colleagues-meeting-outside_1262-21161.jpg?t=st=1732041513~exp=1732045113~hmac=ccee94c1f7f9617cae19766ecae19f9081fb32665e64b9324ab153ac70deef47&w=360')",
            }}
          />
          <div className="flex justify-center mb-3">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-gray-300">★</span>
          </div>
          <p className="text-lg text-gray-700 text-center mb-4">
            "This service was incredible! I am so happy with the experience, and
            I will definitely use it again."
          </p>
          <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
          <p className="text-sm text-gray-500">Client</p>
        </div>

        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
          <div
            className="flex justify-center mb-3 w-20 h-20 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/happy-successful-business-colleagues-meeting-outside_1262-21161.jpg?t=st=1732041513~exp=1732045113~hmac=ccee94c1f7f9617cae19766ecae19f9081fb32665e64b9324ab153ac70deef47&w=360')",
            }}
          />
          <div className="flex justify-center mb-3">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-gray-300">★</span>
          </div>
          <p className="text-lg text-gray-700 text-center mb-4">
            "Absolutely amazing experience! The team was professional and
            exceeded my expectations."
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
          <p className="text-sm text-gray-500">Client</p>
        </div>

        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
          <div
            className="flex justify-center mb-3 w-20 h-20 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/happy-successful-business-colleagues-meeting-outside_1262-21161.jpg?t=st=1732041513~exp=1732045113~hmac=ccee94c1f7f9617cae19766ecae19f9081fb32665e64b9324ab153ac70deef47&w=360')",
            }}
          />
          <div className="flex justify-center mb-3">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-gray-300">★</span>
            <span className="text-gray-300">★</span>
          </div>
          <p className="text-lg text-gray-700 text-center mb-4">
            "A fantastic service! Fast and reliable. Highly recommend to anyone
            looking for top-notch support."
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Sam Wilson</h3>
          <p className="text-sm text-gray-500">Client</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
