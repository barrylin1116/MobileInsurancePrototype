import { useRef, useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import { CSSSelector, SwiperOptions } from 'swiper/types';

/**
 * @description Swiper Hook
 * @param container Swiper container
 * @param options Swiper config options
 */
const useSwiper = (container: CSSSelector | HTMLElement, options?: SwiperOptions) => {
  const setup = useRef<boolean>(false);

  useEffect(() => {
    if (!setup.current) {
      (() => new Swiper(
        container,
        {
          modules: [Navigation, Pagination],
          ...options
        }
      ))();
      setup.current = true;
    }
  }, [container, options]);
};

export default useSwiper;
