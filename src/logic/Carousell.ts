import { useEffect } from "react";

export default function initSlider() {
  if (typeof document != undefined) {
    document.addEventListener("DOMContentLoaded", function () {
      const nextButton = document.querySelector("[data-carousel-next]");
      const prevButton = document.querySelector("[data-carousel-prev]");
      const nextButton2 = document.querySelector("[data-carousel-next]");
      const prevButton2 = document.querySelector("[data-carousel-prev]");
      const carouselItems = document.querySelectorAll("[data-carousel-item]");
      let currentIndex = 0;
      let intervalId: any;

      function nextSlide() {
        carouselItems[currentIndex].classList.add("hidden");
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.remove("hidden");
      }
      nextButton?.addEventListener("click", function () {
        nextSlide();
      });
      nextButton2?.addEventListener("click", function () {
        stopCarousel();
      });
      prevButton2?.addEventListener("click", function () {
        stopCarousel();
      });
      prevButton?.addEventListener("click", function () {
        carouselItems[currentIndex].classList.add("hidden");
        currentIndex =
        (currentIndex - 1 + carouselItems.length) %
        carouselItems.length;
        carouselItems[currentIndex].classList.remove("hidden");
      });
      
      function startCarousel() {
        intervalId = setInterval(nextSlide, 4000);
      }
      
      function stopCarousel() {
        clearInterval(intervalId);
      }
      
      nextSlide()
      nextSlide()
      nextSlide()
      startCarousel();
  
      return () => {
        stopCarousel();
      };
    })
         
    
  };
}