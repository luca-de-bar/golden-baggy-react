import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";

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
            <Button variant="outline">+ Dettagli</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle>Menu Title</DrawerTitle>
            <DrawerDescription>This is the description for the menu.</DrawerDescription>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default MainItem;
