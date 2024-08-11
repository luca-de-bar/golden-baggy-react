# Responsive React Components

This repository contains a set of responsive React components built with Tailwind CSS and ShadcnUI. These components are designed to be easily integrated into any project, offering flexibility and consistent styling across various screen sizes, however, if you intend to use these components in your project you will need to implement CSS changes to reflect those.

Please note : 
This `readme.md` contains documentation for components that are more challenging to understand since they are mostly custom for this project or they function through the combination of several components.
It does NOT contain documentation for all components created, however there is a dedicated annotated section in each component that explains in detail how the specific component works.

## Project Preview
This project is hosted on Github Pages at [THIS](https://luca-de-bar.github.io/golden-baggy-react-components/) link.

## Project Dependencies
- Vite + React + Typescript
- Shadcnui components
- TailwindCSS

## Components

### 1. `Cart`
A wrapper component that transforms any enclosed elements into a fully functioning shopping cart. It manages item addition, removal, and quantity updates. The cart is displayed in a sliding drawer.

**Usage:**
```jsx
import Cart from "./Cart";

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
import DrawerButton from "./DrawerButton";

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

The `CardCarousel` component dynamically generates a responsive carousel of product cards. Each card displays a product's main image and title, with a button that opens a detailed view in a drawer.

**Dependencies:**
- `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious` from `@/components/ui/carousel` (installed with shadcnui)
- `DrawerButton` from `./DrawerButton`
- Custom CSS from `CardCarousel.css`

**How It Works:**
- The component iterates over an `items` array, each object in the array containing details such as `title`, `description`, `images`, `price`, and `sizes` for a product.
- The main image from each product's `images` array is displayed on the card. The first image in the array is used as the primary display image.
- Each card includes a `DrawerButton`, which when clicked, opens a drawer with detailed information about the product provided in the items array. See DrawerButton documentation to fully understand how this component works.
- The length of the carousel in each drawer is determined by the number of images in the `images` array.
```jsx
const items = [
  {
    title: "Envy",
    description: "Rise from the ashes with this new brand look",
    images: [
      "https://via.placeholder.com/300x400.png?text=Image+1", //This one will be the main product image, just change the order of the image array to display another one
      "https://via.placeholder.com/300x400.png?text=Image+2",
      "https://via.placeholder.com/300x400.png?text=Image+3",
    ],
    price: "$99.99",
    sizes: ["S", "M", "L", "XL"],
  },
  // Additional items...
];
```
**Usage:**
```jsx
import { CardCarousel } from './CardCarousel';

<CardCarousel />
```


### 4. `CardColumns`

The `CardColumns` component creates two Cards Columns with a glitch effect.

**How It Works:**
- The component accepts an array of card objects as a prop. Each card object contains an `id`, `content`, and `glitchText`.
- The cards are split into two columns: the left column and the right column. If the number of cards is even, the left column will be longer.
- Each card is displayed as a rectangular box with an SVG icon in the center.
- When a user hovers over a card, the SVG icon fades out, revealing a glitch text effect that showcases the `glitchText` value.
- The glitch effect is managed by the CSS class `glitch` within `CardColumns.css`.
- The `CardColumns.css` file handles the styling of the glitch effect, transition animations, and the overall appearance of the cards.
- The `MisteryBox` component demonstrates the usage of `CardColumns` by passing an array of card data, determining the content and behavior of the cards.
```jsx
const cards = [
  { id: 1, content: "Card 1", glitchText: "ARISE" },
  { id: 2, content: "Card 2", glitchText: "PHOENIX" },
  { id: 3, content: "Card 3", glitchText: "VANITY" },
  { id: 4, content: "Card 4", glitchText: "ENVY" },
  { id: 5, content: "Card 5", glitchText: "ACEDIA" },
  { id: 6, content: "Card 6", glitchText: "PEGASUS" },
];
```
**Usage:**
```jsx
import CardColumns from './CardColumns';

<MisteryBox />
```

## 5. MainCard

The `MainCard` component is designed as a visually engaging feature section that highlights a key product or item. It is designed for landing pages or any section where you want to emphasize a particular product with a dynamic and interactive presentation.

### What It Does:
- **Main Feature Display**: The component showcases a product with a looping video background, a title, and a call-to-action button.
- **Interactive Drawer**: A `DrawerButton` is used to provide more details about the product. When clicked, it opens a drawer that reveals additional images, product information, available sizes, and pricing.
- **Product Description**: Below the main product card, there is a brief description area to further highlight the product's features and benefits.

### How It Works:
- **Video Background**: The component features a video that automatically plays in the background, setting the tone for the product being highlighted. This video is muted, loops, and covers the full width and height of the section.
- **Product Card**: The main product card is centrally positioned with the title "ARISE". This card serves as the focal point of the section.
- **Drawer Interaction**: The `DrawerButton` component opens a detailed view in a drawer, showcasing the product's images, description, price, and size options.
- **Customization**: The `DrawerButton` props (`title`, `description`, `images`, `price`, `sizes`) can be easily customized to reflect different products. See DrawerButton documentation for better usage

### How to Use:
- **Ideal Placement**: This component is ideal for use on a landing page or in any section where you want to prominently feature a product.
- **Customization**: Customize the `DrawerButton` with different product details to feature various products. Update the video source in the `<video>` tag to reflect the appropriate background video for your product.
  
### Usage:
```jsx
import MainCard from "./components/MainCard";

<MainCard />
```
This will render a hero section with a video background, a product card, and a button that opens a drawer with more product details.

### Dependencies
 - **DrawerButton** : This component is dependent on the `DrawerButton` component for the interactive drawer functionality.
 - **VideoFile** : Ensure that the video file for the background is available at the specified path or adjust the `src` attribute in the video tag accordingly.

## 6. InfoStrip

The `InfoStrip` component is a simple way to display important messages or promotional content in a horizontal strip with a marquee effect that scrolls across the screen. This component is particularly useful for highlighting special offers, announcements, or other important information.

### What It Does:
- **Scrolling Marquee**: The component displays a scrolling marquee that continuously moves text from right to left, ensuring that the message catches the user’s attention.
- **Customizable Text**: The text within the marquee can be easily customized to display any message or promotional content you want to highlight.
- **Responsive Design**: The component is responsive, ensuring that the marquee text is displayed properly across different screen sizes.

### How to Use:
- **Placement**: Include the `InfoStrip` component at the top or bottom of your webpage for maximum visibility. It can be used to inform users of special offers, shipping details, or any other relevant announcements.
- **Customization**: Modify the text within the marquee to suit your needs. The background color and text color can also be adjusted via the class names.

### Example Usage:
```jsx
import InfoStrip from "./components/InfoStrip";

<InfoStrip />
```

## 7. GetExclusive

The `GetExclusive` component is a promotional section designed to entice users to purchase premium items by offering them access to an exclusive section with unique, limited-edition products.

### What It Does:
- **Promotional Highlight**: It prominently displays a call-to-action (CTA) that encourages users to shop for premium items to unlock exclusive content.
- **Customizable Section**: The component includes a title, description, and a CTA button, all of which can be easily customized to fit the specific promotion or campaign.
- **Visually Engaging**: The section is styled with a dark background and bold, eye-catching text, making it stand out on the page.

### How to Use:
- **Placement**: Integrate the `GetExclusive` component within your webpage where you want to draw attention to a special offer or promotion.
- **Customization**: Modify the title, description, and button text to align with your promotional messaging. The URL linked to the CTA button can also be customized to direct users to the relevant section or product page.

### Example Usage:
```jsx
import GetExclusive from "./components/GetExclusive";

<GetExclusive />
```






