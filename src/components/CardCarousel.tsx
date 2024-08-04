//This component is used to display the available items on the shop at this moment. Do NOT display the MainItem :)
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const words = ["Arise V2", "Phoenix", "Dark Matter", "Vanity", "Pegasus", "Acedia", "Envy"]

export function CarouselSize() {
  return (
    <div className="flex justify-center mt-8"> {/* Wrapper per il centro orizzontale e margine superiore */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl"
      >
        <CarouselContent className="flex">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem 
              key={index} 
              className="basis-1/2 sm:basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2"
            >
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-6">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
              <div className="p-4 flex flex-col justify-between items-center">
                <h3 className="text-xl font-medium mb-2">{words[index % words.length]}</h3>
                <button type="button" className="bg-slate-950 py-2 px-5 font-semibold text-white hover:bg-slate-600 transition-all flex justify-between gap-3 rounded-md">
                  + Dettagli
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
