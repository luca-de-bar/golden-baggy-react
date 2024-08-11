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

**Usage:**
```jsx
<DrawerButton
  title="Product Name"
  description="Product Description"
  images={["image1.jpg", "image2.jpg"]}
  price="$99.99"
  sizes={["S", "M", "L"]}
  buttonText="Shop Now"
/>
```


