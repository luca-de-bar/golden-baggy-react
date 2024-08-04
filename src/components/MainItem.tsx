import React from 'react';
import { Button } from "@/components/ui/button";
import BaggyButton from '@/components/ui/BaggyButton';

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CardCarousel: React.FC = () => (
  <div className="flex justify-center mt-8">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl px-4"
    >
      <CarouselContent className="flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem 
            key={index} 
            className="basis-1/2 sm:basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2"
          >
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-6">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

const MainItem: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-full max-w-xs p-4 bg-white shadow-md rounded-lg h-96"> {/* Rectangular Card */}
        {/* Placeholder for the image */}
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h3 className="text-xl font-medium mb-2">ARISE</h3>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className='btn btnshop'>+ Dettagli</Button>
          </DrawerTrigger>
          <DrawerContent className="bg-black text-white"> {/* Drawer with black background */}
            <div className='flex flex-col justify-center items-center'>
              <DrawerTitle>Main Item Carousel</DrawerTitle>
              <DrawerDescription>This is the description of the main Item</DrawerDescription>
            </div>
            <CardCarousel /> {/* Inserted CardCarousel component */}
            <DrawerFooter>
              <div className='flex flex-row justify-center items-center py-4'>
                <Button variant="secondary" className='bg-slate-600 hover:bg-blue-500 transistion-all font-semibold'>Buy Now</Button>
              </div>
              <DrawerClose asChild>
                <div className='flex flex-row justify-center items-center py-4'>
                  <BaggyButton>Close</BaggyButton>
                </div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default MainItem;
