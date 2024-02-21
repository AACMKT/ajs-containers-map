export default class ErrorRepository {
  constructor() {
    this.repository = new Map([
      ['1', 'SyntaxError'],
      ['2', 'ReferenceError'],
      ['3', 'TypeError'],
      ['4', 'RuntimeError'],
    ]);
  }

  translate(code) {
    if (!this.repository.has(String(code))) {
      return 'Unknown error';
    }
    return this.repository.get(String(code));
  }
}
