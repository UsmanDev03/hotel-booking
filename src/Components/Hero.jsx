import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  // Controlled states for handling form search data
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/rooms", {
      state: { destination, checkIn, checkOut, guests },
    });
  };

  return (
    <div
      className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white 
      bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen min-h-[650px]'
    >
      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 max-w-3xl">
        {/* Top Tag */}
        <p className="inline-block bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mt-12 border border-white/20 shadow-sm">
          The Ultimate Hotel Experience
        </p>

        {/* Heading */}
        <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4 drop-shadow-md">
          Discover Your Perfect Getaway Destination
        </h1>

        {/* Description */}
        <p className="max-w-[540px] mt-3 text-sm md:text-base text-gray-200 leading-relaxed drop-shadow">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        {/* Search Bar Form */}
        <form
          onSubmit={handleSearch}
          className="bg-white/95 backdrop-blur-md text-gray-800 rounded-xl p-4 sm:p-5 mt-8 shadow-2xl flex flex-col md:flex-row items-stretch md:items-end gap-4 max-w-4xl"
        >
          {/* Destination */}
          <div className="flex-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-1.5">
              <img src={assets.locationIcon} alt="location" className="w-4 h-4 opacity-70" />
              <label htmlFor="destinationInput">Destination</label>
            </div>

            <input
              list="destinations"
              id="destinationInput"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
              placeholder="Where to?"
              required
            />

            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Check In */}
          <div className="w-full md:w-36">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-1.5">
              <img src={assets.calenderIcon} alt="calendar" className="w-4 h-4 opacity-70" />
              <label htmlFor="checkIn">Check in</label>
            </div>

            <input
              id="checkIn"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-700"
              required
            />
          </div>

          {/* Check Out */}
          <div className="w-full md:w-36">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-1.5">
              <img src={assets.calenderIcon} alt="calendar" className="w-4 h-4 opacity-70" />
              <label htmlFor="checkOut">Check out</label>
            </div>

            <input
              id="checkOut"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-700"
              required
            />
          </div>

          {/* Guests */}
          <div className="w-full md:w-20">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-1.5">
              <img src={assets.guestsIcon} alt="guests" className="w-4 h-4 opacity-70" />
              <label htmlFor="guests">Guests</label>
            </div>

            <input
              min={1}
              max={10}
              id="guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-center"
              placeholder="1"
              required
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 active:scale-[0.98] text-white rounded-lg px-6 py-2.5 font-medium text-sm transition-all shadow-md cursor-pointer h-[38px] md:self-end"
          >
            <img src={assets.searchIcon} alt="search" className="w-4 h-4 invert" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;