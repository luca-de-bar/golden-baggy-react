import React from "react";
import { Button } from "@/components/ui/button";
import './DrawerButton.css'
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CardCarousel: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="flex justify-center mt-8 px-4">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl px-4"
    >
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-1/2 sm:basis-1/2 md:basis-2/6 lg:basis-1/8 xl:basis-1/4 p-2 carousel-item">
            <div
              className="card-container w-full max-w-xs p-3 bg-gray-100 shadow-md rounded-lg shadow-black/30"
              style={{ aspectRatio: "3/4", minWidth: "150px", minHeight: "200px" }}
            >
              <div className="card-content p-4 sm:p-6">
                <img src={image} alt={`Product Image ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute z-20 left-0 top-[calc(57.5%-20px)] transform -translate-y-1/2 bg-gray-800 rounded-full p-3 w-12 h-12 text-3xl shadow-lg hover:bg-gray-900 hover:text-white text-white flex items-center justify-center" />
      <CarouselNext className="absolute z-20 right-0 top-[calc(57.5%-20px)] transform -translate-y-1/2 bg-gray-800 rounded-full p-3 w-12 h-12 text-3xl shadow-lg hover:bg-gray-900 hover:text-white text-white flex items-center justify-center" />
    </Carousel>
  </div>
);

const DrawerButton: React.FC<{
  title: string;
  description: string;
  images: string[];
  price: string;
  sizes: string[];
}> = ({ title, description, images, price, sizes }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="text-white bg-gray-800 hover:bg-gray-900 mt-4 py-2 px-6 rounded-lg">View Details</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white text-black p-6 w-full">
        <DrawerClose asChild>
          <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </DrawerClose>
        <DrawerTitle className="text-3xl font-semibold mb-4">{title}</DrawerTitle>
        <DrawerDescription className="text-gray-700 mb-6">{description}</DrawerDescription>
        <CardCarousel images={images} />
        <div className="mt-8 flex flex-col items-center md:items-center w-full">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Price: {price}</h3>
          <div className="mt-6 w-full max-w-lg">
            <h4 className="text-lg font-medium text-gray-600 text-center">Select Size:</h4>
            <div className="flex justify-center flex-wrap gap-3 mt-3">
              {sizes.map((size, index) => (
                <Button key={index} variant="outline" className="px-5 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-900 hover:text-white transition-colors">
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center w-full">
            <Button className="bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition duration-300 shadow-md">Add to Cart</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerButton;
