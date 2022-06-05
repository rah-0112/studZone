import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (threshold = 0.4) => {
    const animation = useAnimation();
    const [element, view] = useInView({
        threshold: threshold,
    });
    if (view) {
        animation.start("show");
    } else {
        animation.start("hidden");
    }
    return [element, animation];
};
