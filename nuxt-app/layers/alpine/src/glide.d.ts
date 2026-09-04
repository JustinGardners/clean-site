declare module '@glidejs/glide' {
  interface GlideOptions {
    type?: string;
    startAt?: number;
    perView?: number;
    focusAt?: number | 'center';
    gap?: number;
    autoplay?: number | boolean;
    hoverpause?: boolean;
    keyboard?: boolean;
    bound?: boolean;
    swipeThreshold?: number | boolean;
    dragThreshold?: number | boolean;
    perTouch?: number | boolean;
    touchRatio?: number;
    touchAngle?: number;
    animationDuration?: number;
    rewind?: boolean;
    rewindDuration?: number;
    animationTimingFunc?: string;
    direction?: 'ltr' | 'rtl';
    peek?: number | { before: number; after: number };
    breakpoints?: Record<number, GlideOptions>;
    classes?: {
      direction?: {
        ltr?: string;
        rtl?: string;
      };
      slider?: string;
      carousel?: string;
      swipeable?: string;
        dragging?: string;
        cloneSlide?: string;
      activeNav?: string;
      activeSlide?: string;
      disabledArrow?: string;
    };
    throttle?: number;
  }

  export default class Glide {
    constructor(selector: string | Element, options?: GlideOptions)
    mount(extensions?: Record<string, unknown>): this
  }
}
