import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function registerGSAPPlugins() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}
