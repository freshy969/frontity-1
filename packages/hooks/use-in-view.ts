import { useInView, IntersectionOptions } from "react-intersection-observer";

/**
 * Object returned by {@link useInView} hook.
 */
interface UseInViewResponse {
  /**
   * React reference object pointing to the DOM element.
   */
  ref: (node?: Element | null) => void;
  /**
   * Boolean indicating if the element is visible.
   */
  inView: boolean;
  /**
   * Boolean indicating if [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) is supported.
   */
  supported: boolean;
}

/**
 * React hook that tracks when an element enters or leaves the viewport. It also checks if `IntersectionObserver` is supported by the browser.
 *
 * Uses [`react-intersection-observer`](https://github.com/thebuilder/react-intersection-observer) under the hood.
 *
 * @param options - Object containing options (see: [react-intersection-observer#options](https://github.com/thebuilder/react-intersection-observer#options)).
 *
 * @returns Object of type {@link UseInViewResponse}.
 */
export default (options?: IntersectionOptions): UseInViewResponse => {
  if (
    typeof window !== "undefined" &&
    typeof window.IntersectionObserver === "undefined"
  ) {
    return { ref: undefined, inView: true, supported: false };
  }

  const [ref, inView] = useInView(options);

  return { ref, inView, supported: true };
};
