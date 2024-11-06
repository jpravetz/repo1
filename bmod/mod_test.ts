import { add } from '@jpravetz/amod';
import { assertEquals } from '@std/assert';
import { subtract } from './mod.ts';

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
  assertEquals(subtract(2, 3), -1);
});
