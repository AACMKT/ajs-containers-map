import ErrorRepository from '../error_rep';

test.each([
  [1, 'SyntaxError'],
  [2, 'ReferenceError'],
  [3, 'TypeError'],
  [4, 'RuntimeError'],
  [5, 'Unknown error'],
])('class ErrorRepository translate() method for %s error response test', (err, description) => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(err)).toBe(description);
});
