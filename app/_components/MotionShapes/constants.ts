export const SCENE1_AT = 0.5;
export const SCENE2_AT = 2;
export const SCENE3_AT = 3;

export const FLY_UP_SPRING = {
  type: "spring" as const,
  duration: 0.5,
  damping: 7,
  bounce: 0.25,
};

export const SLIDE_TRANSITION = {
  duration: 0.5,
  ease: "easeInOut" as const,
};

export const HOVER_SPRING = {
  type: "spring" as const,
  duration: 0.1,
  damping: 7,
  bounce: 0.25,
};

export const SHAPE1_DURATIONS = { dot: 0.3, bar: 0.8, chevron: 0.9 };
export const SHAPE2_DURATIONS = { circle: 1 };
export const SHAPE3_DURATIONS = { dot: 0.3, bar: 0.8, circle: 0.9 };

// overlap between bar end and chevron/circle start
const OVERLAP = 0.3;

export const shape1DrawTime =
  SHAPE1_DURATIONS.dot + SHAPE1_DURATIONS.bar + SHAPE1_DURATIONS.chevron - OVERLAP;
export const shape2DrawTime = SHAPE2_DURATIONS.circle;
export const shape3DrawTime =
  SHAPE3_DURATIONS.dot + SHAPE3_DURATIONS.bar + SHAPE3_DURATIONS.circle - OVERLAP;

export function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
