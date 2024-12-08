import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Bed, Bath, Users, Home, Star, Check } from 'lucide-react';

const HomerProperty = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/photos/homer/HomerLaunder10.jpg',
    '/photos/homer/HomerLaunder11.jpg',
    '/photos/homer/HomerLaunder12.jpg',
    '/photos/homer/HomerLaunder13.jpg',
    '/photos/homer/HomerLaunder14.jpg',
    '/photos/homer/HomerLaunder15.jpg',
    '/photos/homer/HomerLaunder16.jpg',
    '/photos/homer/HomerLaunder17.jpg',
    '/photos/homer/HomerLaunder18.jpg',
    '/photos/homer/HomerLaunder19.jpg',
    '/photos/homer/HomerLaunder2.jpg',
    '/photos/homer/HomerLaunder20.jpg',
    '/photos/homer/HomerLaunder3.jpg',
    '/photos/homer/HomerLaunder4.jpg',
    '/photos/homer/HomerLaunder5.jpg',
    '/photos/homer/HomerLaunder6.jpg',
    '/photos/homer/HomerLaunder7.jpg',
    '/photos/homer/HomerLaunder8.jpg',
    '/photos/homer/HomerLaunder9.jpg'
  ];

  const amenities = [
    "Fully equipped kitchen with high-end appliances",
    "High-speed WiFi throughout",
    "Smart TV with streaming services",
    "In-unit washer and dryer",
    "Private patio with outdoor seating",
    "Dedicated workspace",
    "Secure building access",
    "Air conditioning",
    "Heated floors in bathrooms",
    "Premium linens and towels",
    "Coffee maker and complimentary coffee",
    "Pack 'n Play/travel crib available",
    "Free street parking nearby",
    "Building fitness center access"
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-4">Spacious 3BR Townhouse near Vibrant Yaletown</h1>
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <Star className="w-5 h-5 text-yellow-500" />
          <span>4.9 (42 reviews)</span>
          <span>·</span>
          <span>Yaletown, Vancouver, Canada</span>
        </div>

        {/* Photo Grid */}
        <div className="relative mb-12">
          <div className="grid grid-cols-4 gap-2 h-[600px]">
            <div className="col-span-2 row-span-2 relative">
              <Image
                src={images[0]}
                alt="Main property image"
                fill
                className="object-cover rounded-l-xl"
              />
            </div>
            <div className="relative">
              <Image
                src={images[1]}
                alt="Property image"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src={images[2]}
                alt="Property image"
                fill
                className="object-cover rounded-tr-xl"
              />
            </div>
            <div className="relative">
              <Image
                src={images[3]}
                alt="Property image"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src={images[4]}
                alt="Property image"
                fill
                className="object-cover rounded-br-xl"
              />
            </div>
          </div>
          <button
            onClick={() => setShowFullGallery(true)}
            className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg font-medium shadow-lg hover:bg-gray-50 transition-colors"
          >
            Show all photos
          </button>
        </div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Quick Facts */}
            <div className="flex gap-6 py-6 border-b">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>7 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span>3 bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span>3 baths</span>
              </div>
            </div>

            {/* Description */}
            <div className="py-8 border-b">
              <h2 className="text-2xl font-semibold mb-4">About this space</h2>
              <p className="text-gray-600 mb-4">
                Welcome to our spacious 3BR townhouse near vibrant Yaletown! This stylish retreat offers a modern kitchen, cozy living space, and three comfy bedrooms, ideal for families or groups. Located steps from Yaletown top restaurants, shops, and nightlife, it is perfect for exploring Vancouver.
              </p>
              <p className="text-gray-600 mb-4">
                The townhouse spans three floors of contemporary luxury. The main floor features an open-concept living area with floor-to-ceiling windows, flooding the space with natural light. The gourmet kitchen is equipped with high-end appliances and everything needed for preparing memorable meals.
              </p>
              <p className="text-gray-600">
                Each bedroom offers a unique atmosphere with premium bedding and ample storage. The master suite includes an ensuite bathroom with a rainfall shower. The private patio provides an outdoor oasis for morning coffee or evening relaxation.
              </p>
            </div>

            {/* Amenities */}
            <div className="py-8">
              <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="md:col-span-1">
            <div className="sticky top-8 bg-white rounded-xl border shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-2xl font-bold">$399</span>
                  <span className="text-gray-600"> / night</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">4.9</span>
                </div>
              </div>

              {/* Direct Booking Option */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium mb-3 hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Book Directly - Save 10%
              </button>

              {/* Airbnb Option */}
              <a 
                href="https://www.airbnb.com/rooms/1298798891023705536?source_impression_id=p3_1733617424_P36JLGxP1GUd99Ac"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg font-medium hover:bg-[#FF4B4F] transition-colors duration-300">
                  Book on Airbnb
                </button>
              </a>

              <p className="text-sm text-gray-500 text-center mt-4">
                Save up to 10% by booking directly with us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 bg-black z-50">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setShowFullGallery(false)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="h-full flex items-center justify-center">
            <button
              onClick={handlePrevImage}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={images[currentImageIndex]}
                alt={`Property image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            <button
              onClick={handleNextImage}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomerProperty;