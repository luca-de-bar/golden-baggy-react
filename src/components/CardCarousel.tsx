import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import DrawerButton from "./DrawerButton";
import "./CardCarousel.css";


{
  /*
  DEPENDENCIES:
  - `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious` from "@/components/ui/carousel installed with shadcnui"
  - `DrawerButton` from "./DrawerButton"
  - Custom CSS from `CardCarousel.css`

  HOW IT WORKS:
  - The component dynamically generates each card from an `items` array, which contains product details like title, description, images, price, and sizes.
  - Each card shows the main image from the product's image array and the product title, simply put the image as first in the array to be the one for the main card.
  - Below the image, a `DrawerButton` opens a Drawer with the items.title, items.description, items.images, items.price and items.sizes. Simply change the array to change details for a specific product
  - The carousel is navigable using `CarouselNext` and `CarouselPrevious` components, which provide controls to move between the product cards.
  - The Carousel lenght inside the DrawerButton, is controlled by the number of images in the items.images array.
*/
}



const items = [
  {
    title: "Envy",
    description: "Rise from the ashes with this new brand look",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+3",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$99.99",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    title: "Phoenix",
    description: "Reborn from the flames",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+2", // Questa è l'immagine principale
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+3",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$109.99",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Vanity",
    description: "The essence of the universe in your style",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+3", // Questa è l'immagine principale
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$119.99",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    title: "Acedia",
    description: "The essence of the universe in your style",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+3", // Questa è l'immagine principale
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$119.99",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    title: "Pegasus",
    description: "The essence of the universe in your style",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+3", // Questa è l'immagine principale
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$119.99",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    title: "Arise Recolor",
    description: "The essence of the universe in your style",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+3", // Questa è l'immagine principale
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$119.99",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    title: "Seraph",
    description: "Rise from the ashes with this new brand look",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+3",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$99.99",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    title: "Lust",
    description: "Rise from the ashes with this new brand look",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+3",
      "https://via.placeholder.com/300x400.png?text=Image+4",
      "https://via.placeholder.com/300x400.png?text=Image+5",
      "https://via.placeholder.com/300x400.png?text=Image+6",
    ],
    price: "$99.99",
    sizes: ["S", "M", "L", "XL"],
  },
];

export function CardCarousel() {
  return (
    <div className="flex justify-center my-16 w-full relative">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[90rem]"
      >
        <CarouselContent className="flex">
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5 p-2">
              <div className="card-container w-full p-3 bg-gray-200 shadow-md rounded-lg shadow-black/30">
                <div className="card-content p-4 sm:p-6">
                  <img
                    src={item.images[0]} // Mostra l'immagine principale
                    alt={item.title}
                    className="object-cover w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between items-center">
                <h3 className="text-xl font-medium mb-2 text-center">{item.title}</h3>
                <DrawerButton
                  title={item.title}
                  description={item.description}
                  images={item.images}
                  price={item.price}
                  sizes={item.sizes}
                  buttonText="View Details"
                  buttonClassName=""
                />
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
