import { getCoords } from '../location';

test.each([
  ['51.50851, 0.12572', { latitude: '51.50851', longitude: '0.12572' }],
  ['51.50851,0.12572', { latitude: '51.50851', longitude: '0.12572' }],
  ['[51.50851, 0.12572]', { latitude: '51.50851', longitude: '0.12572' }],
])(
  ('проверка введенных координат'),
  (input, expected) => {
    const result = getCoords(input);
    expect(result).toEqual(expected);
  },
);
