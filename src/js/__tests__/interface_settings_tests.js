import Settings from '../interface_settings';

test('class Settings initial Map container creation test', () => {
  const Intarface = new Settings();
  expect(Intarface.settings).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]));
});

test.each(['light', 'gray'])('class Settings .theme setter (proper values) test', (theme) => {
  const Intarface = new Settings();
  Intarface.theme = theme;
  expect(Intarface.settings.get('theme')).toBe(theme);
});

test('class Settings .theme setter (incorrect value) test', () => {
  const throwError = () => {
    const Intarface = new Settings();
    return Intarface.theme = 'some theme';
  };
  expect(throwError).toThrowError('Unsupported theme. Try help() for more info.');
});

test.each(['pop', 'rock', 'chillout', 'off'])('class Settings .music setter (proper values) test', (music) => {
  const Intarface = new Settings();
  Intarface.music = music;
  expect(Intarface.settings.get('music')).toBe(music);
});

test('class Settings .music setter (incorrect value) test', () => {
  const throwError = () => {
    const Intarface = new Settings();
    return Intarface.music = 'some theme';
  };
  expect(throwError).toThrowError('Unsupported music option. Try help() for more info.');
});

test.each(['normal', 'hard', 'nightmare'])('class Settings .difficulty setter (proper values) test', (difficulty) => {
  const Intarface = new Settings();
  Intarface.difficulty = difficulty;
  expect(Intarface.settings.get('difficulty')).toBe(difficulty);
});

test('class Settings .difficulty setter (incorrect value) test', () => {
  const throwError = () => {
    const Intarface = new Settings();
    return Intarface.difficulty = 'some theme';
  };
  expect(throwError).toThrowError('Unsupported difficulty. Try help() for more info.');
});

test('class Settings .help() method test', () => {
  const Intarface = new Settings();
  expect(Intarface.help()).toBe(console.log('theme: dark, light, gray'), console.log('music: trance, pop, rock, chillout, off'), console.log('difficulty: easy, normal, hard, nightmare'));
});
