import { add } from '@scope/amod';

export function subtract(a: number, b: number): number {
  return add(a, -b);
}
