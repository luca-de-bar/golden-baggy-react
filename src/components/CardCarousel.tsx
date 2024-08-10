import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import "./CardCarousel.css";

const words = ["Arise V2", "Phoenix", "Dark Matter", "Vanity", "Pegasus", "Acedia", "Envy"];

export function CardCarousel() {
  return (
    <div className="flex justify-center my-16 w-full relative">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[110rem]"
      >
        <CarouselContent className="flex">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5 p-2">
              <div className="card-container w-full p-3 bg-gray-200 shadow-md rounded-lg shadow-black/30">
                <div className="card-content p-4 sm:p-6">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">{index + 1}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between items-center">
                <h3 className="text-xl font-medium mb-2 text-center">{words[index % words.length]}</h3>
                <Button variant="outline" className="btn btnshop">
                  + Details
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute z-20 left-0 sm:left-[5px] md:left-[10px] lg:left-[20px] top-[calc(42.1%-20px)] transform -translate-y-1/2 bg-slate-100 rounded-full p-1 w-12 h-12 text-4xl shadow-lg hover:bg-slate-950 hover:text-white text-black flex items-center justify-center" />
        <CarouselNext className="absolute z-20 right-0 sm:right-[5px] md:right-[10px] lg:right-[20px] top-[calc(42.1%-20px)] transform -translate-y-1/2 bg-slate-100 rounded-full p-1 w-12 h-12 text-4xl shadow-lg hover:bg-slate-950 hover:text-white text-black flex items-center justify-center" />
      </Carousel>
    </div>
  );
}
