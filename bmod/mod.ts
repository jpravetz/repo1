import { add } from '@jpravetz/amod';

export function subtract(a: number, b: number): number {
  return add(a, -b);
}
