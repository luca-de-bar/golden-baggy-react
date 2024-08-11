# Responsive React Components for Golden Baggy project (feel free to use)

This repository contains a set of responsive React components built with Tailwind CSS. These components are designed to be easily integrated into any project, offering flexibility and consistent styling across various screen sizes.

## Components

### 1. `Cart`
A wrapper component that transforms any enclosed elements into a fully functioning shopping cart. It manages item addition, removal, and quantity updates. The cart is displayed in a sliding drawer.

**Usage:**
```jsx
<Cart>
  <Button>Add to Cart</Button>
</Cart>
```

### 2. `DrawerButton`
A customizable button that triggers a drawer with detailed product information, including a carousel of images, product description, price, and size options.
The images array inside the DrawerButton control how long the CardCarousel inside the Drawer should be, feel free to add or remove.

Default Text for the button is "View Details" you can change it by providing some text in the `buttonText` field, has some default css but you can customize the button with `buttonClassName`.

**Usage:**
```jsx
<DrawerButton
  title="Product Name"
  description="Product Description"
  images={["image1.jpg", "image2.jpg"]}
  price="$99.99"
  sizes={["S", "M", "L"]}
  buttonText="Shop Now"
  buttonClassName="custom-tailwindCSS-class"
/>
```

### 3. `CardCarousel`

The `CardCarousel` component dynamically generates a responsive carousel of product cards. Each card displays a product's main image and title, with a button that opens a detailed view in a drawer. This component is perfect for showcasing multiple products in a visually appealing, interactive format.

**Dependencies:**
- `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious` from `@/components/ui/carousel` (installed with shadcnui)
- `DrawerButton` from `./DrawerButton`
- Custom CSS from `CardCarousel.css`

**How It Works:**
- The component iterates over an `items` array, each object in the array containing details such as `title`, `description`, `images`, `price`, and `sizes` for a product.
- The main image from each product's `images` array is displayed on the card. The first image in the array is used as the primary display image.
- Each card includes a `DrawerButton`, which when clicked, opens a drawer with detailed information about the product provided in the items array. See DrawerButton documentation to fully understand how this component works.
- The length of the carousel in each drawer is determined by the number of images in the `images` array.

**Usage:**
```jsx
import { CardCarousel } from './CardCarousel';

const items = [
  {
    title: "Envy",
    description: "Rise from the ashes with this new brand look",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+1",
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+3",
    ],
    price: "$99.99",
    sizes: ["S", "M", "L", "XL"],
  },
  // Additional items...
];

export function App() {
  return <CardCarousel items={items} />;
}
```



