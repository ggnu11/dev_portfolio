export const SCENE1_DELAY = 0.5;
export const SCENE2_DELAY = 2;
export const SCENE3_DELAY = 3;

export const FLY_UP_SPRING = { duration: 0.5, damping: 7, bounce: 0.25 };
export const SLIDE_SPRING = { duration: 0.5, ease: "easeInOut" as const };

export function getTotalDuration(
  durations: number[],
  durationOffset = 0.5
): number {
  return durations.reduce((sum, d) => sum + d, 0) - durationOffset;
}

export const SHAPE1_DURATIONS = [0.3, 0.8, 0.9];
export const SHAPE2_DURATIONS = [1];
export const SHAPE3_DURATIONS = [0.3, 0.8, 0.9];

export const scene3shape1Total = getTotalDuration(SHAPE1_DURATIONS);
export const scene3shape2Total = getTotalDuration(SHAPE2_DURATIONS);
export const scene3shape3Total = getTotalDuration(SHAPE3_DURATIONS);
