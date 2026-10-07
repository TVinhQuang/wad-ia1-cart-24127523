import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

const standardOptions = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('returns a number', () => {
  const items = [{ name: 'Sổ tay', price: 45000, qty: 1 }]
  assert.equal(typeof cartTotal(items, standardOptions), 'number')
})

test('charges shipping just below the threshold', () => {
  const items = [{ name: 'Item', price: 499999, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 529999)
})

test('gives free shipping exactly at the threshold', () => {
  const items = [{ name: 'Item', price: 500000, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 500000)
})

test('gives free shipping just above the threshold', () => {
  const items = [{ name: 'Item', price: 500001, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 500001)
})

test('uses the subtotal before VAT to determine free shipping', () => {
  const items = [{ name: 'Item', price: 470000, qty: 1 }]
  assert.equal(cartTotal(items, standardOptions), 537600)
})

test('returns zero for an empty cart without requiring shipping options', () => {
  assert.equal(cartTotal([], { vatRate: 0.08 }), 0)
})

test('accepts a zero price and charges shipping for a nonempty cart', () => {
  const items = [{ name: 'Free item', price: 0, qty: 1 }]
  assert.equal(cartTotal(items, standardOptions), 30000)
})

test('throws RangeError for a negative price later in the cart', () => {
  const items = [
    { name: 'Valid item', price: 180000, qty: 1 },
    { name: 'Invalid item', price: -1, qty: 1 },
  ]
  assert.throws(() => cartTotal(items, standardOptions), RangeError)
})

const invalidQuantities = [
  ['zero', 0],
  ['negative', -1],
  ['fractional', 1.5],
  ['a numeric string', '2'],
  ['NaN', NaN],
  ['Infinity', Infinity],
]

for (const [description, qty] of invalidQuantities) {
  test(`throws RangeError when qty is ${description}`, () => {
    const items = [{ name: 'Invalid quantity', price: 45000, qty }]
    assert.throws(() => cartTotal(items, standardOptions), RangeError)
  })
}

test('rounds the final total down to whole dong', () => {
  const items = [{ name: 'Item', price: 101, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 0, shipFee: 0 }
  assert.equal(cartTotal(items, options), 109)
})

test('rounds the final total up to whole dong', () => {
  const items = [{ name: 'Item', price: 107, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 0, shipFee: 0 }
  assert.equal(cartTotal(items, options), 116)
})

test('combines all items before rounding the final total', () => {
  const items = [
    { name: 'First item', price: 4, qty: 1 },
    { name: 'Second item', price: 4, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 0, shipFee: 0 }
  assert.equal(cartTotal(items, options), 9)
})

test('adds subtotal, VAT, and shipping before rounding once', () => {
  const items = [{ name: 'Item', price: 10.2, qty: 1 }]
  const options = { vatRate: 0.02, freeShipFrom: 100, shipFee: 0.2 }
  assert.equal(cartTotal(items, options), 11)
})
