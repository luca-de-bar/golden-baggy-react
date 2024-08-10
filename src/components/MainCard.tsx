import React from "react";
import { Button } from "@/components/ui/button";
import BaggyButton from "@/components/ui/BaggyButton";
import { Drawer, DrawerContent, DrawerFooter, DrawerTrigger, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CardCarousel: React.FC = () => (
  <div className="flex justify-center mt-8 px-4">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl px-4"
    >
      <CarouselContent className="flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5 p-2">
            <div className="card-container w-full max-w-xs p-3 bg-gray-200 shadow-md rounded-lg shadow-black/30">
              <div className="card-content p-4 sm:p-6">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute z-20 left-0 top-[calc(57.5%-20px)] transform -translate-y-1/2 bg-white rounded-full p-3 w-12 h-12 text-3xl shadow-lg hover:bg-slate-950 hover:text-white text-black flex items-center justify-center" />
      <CarouselNext className="absolute z-20 right-0 top-[calc(57.5%-20px)] transform -translate-y-1/2 bg-white rounded-full p-3 w-12 h-12 text-3xl shadow-lg hover:bg-slate-950 hover:text-white text-black flex items-center justify-center" />
    </Carousel>
  </div>
);

const MainCard: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-16">
      {/* Video Background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted playsInline>
        <source src="/MainCardLoopVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Card Content */}
      <div className="flex flex-col items-center mt-8 relative z-10">
        <div className="w-full max-w-xs p-4 bg-white shadow-lg rounded-lg h-96 shadow-black/50">
          {/* Rectangular Card */}
          {/* Placeholder for the image */}
        </div>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-xl font-medium mb-2 text-white">ARISE</h3>
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="btn btnshop text-slate-900 bg-slate-300 mt-4">
                Preorder
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-black text-white">
              {/* Drawer with black background */}
              <div className="flex flex-col justify-center items-center">
                <DrawerTitle>Main Item Carousel</DrawerTitle>
                <DrawerDescription>This is the description of the main Item</DrawerDescription>
              </div>
              <CardCarousel /> {/* Inserted CardCarousel component */}
              <DrawerFooter>
                <div className="flex flex-row justify-center items-center py-4">
                  <Button variant="secondary" className="bg-slate-600 hover:bg-blue-500 transistion-all font-semibold">
                    Buy Now
                  </Button>
                </div>
                <DrawerClose asChild>
                  <div className="flex flex-row justify-center items-center py-4">
                    <BaggyButton>Close</BaggyButton>
                  </div>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        {/* New Title and Description Section */}
        <div className="mt-12 text-center max-w-md">
          <h2 className="text-lg font-semibold mb-2 text-white">Main Item Description</h2>
          <p className="text-white mt-5 mb-12 px-3">
            This is a brief description of the main item displayed in the card above. It provides additional details about the item, its features, and any other relevant
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
