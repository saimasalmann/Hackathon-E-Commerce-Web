import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./card";

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {" "}
            <Card />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default CarouselPage;
