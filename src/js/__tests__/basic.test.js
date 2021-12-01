import getCoords from '../coords';

test.each([
  ['51.50851, 0.12572', '[51.50851, -0.12572]'],
  ['51.50851,0.12572', '[51.50851, -0.12572]'],
  ['[51.50851, 0.12572]', '[51.50851, -0.12572]'],
  ['траляля', false],
])(
  ('проверка введенных координат'),
  (input, expected) => {
    const result = getCoords(input);
    expect(result).toEqual(expected);
  },
);
