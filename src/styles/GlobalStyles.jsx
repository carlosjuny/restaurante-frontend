import { createGlobalStyle } from "styled-components";
import "@fontsource/laila";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'FoodSimple';
    src: url('/fonts/FoodSimple.otf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  outline: none;  
  font-family: "laila"; 
}

html, body {
  width:100%;
  height: 100vh;
  background-color: #ffffff;
}

h1 {
  font-family: 'FoodSimple', sans-serif;
  margin-bottom: 60px;
  font-weight: 100;
}

a{
    color: inherit;
}

.carousel-indicators .active {
    opacity: 1;
    background-color: #E9D282 !important;
}

[data-bs-theme=dark].carousel .carousel-indicators [data-bs-target] {
  height: 2rem;
  border-radius: 1rem;
  background-color: #ffffff;
}

[data-bs-theme=dark].carousel .carousel-control-prev-icon {
    filter: invert(1) grayscale(100);
}

.carousel-control-next-icon, .carousel-control-prev-icon {
    width: 3rem ;
    height: 3rem ;
    background-color: #000;
    border-radius: 0rem;
}
.carousel-item {
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .carousel-caption {
      h5 {
        font-size: 2rem;
        color: #fff;
      }

      p {
        font-size: 1.5rem;
        color: #ddd;
      }
      
    }
  }

  .overlay-cart {
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export default GlobalStyles;