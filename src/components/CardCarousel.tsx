import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const words = ["Word1", "Word2", "Word3", "Word4", "Word5", "Word6", "Word7"]

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
                <button type="button" className="bg-slate-950 py-2 font-semibold text-white hover:bg-slate-500 flex justify-between gap-3 rounded-md">Carrello
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
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
