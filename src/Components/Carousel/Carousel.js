import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./Carousel.css";

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/6Onv3yRAxJAzFIZJpuwb5E/24e411a845cfcb4a8e2848e9912a9d29/Q_A_Kombi_Hero_screenshot.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/4NsNEojqcfzqch9Eoum1Gm/9aa7d73ac74b60358499211eff4fd074/engineering-wiki-V2.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/546F1MvF9KlFXBOO41AKLx/605f38de934bb47bcd89e6335eee1242/projects.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/1h9O767GwXx8lwWKS55G6o/aa28560fbd35d34a414522259fde3517/meeting-notes.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
