export default class Settings {
  constructor() {
    this.themes = ['dark', 'light', 'gray'];
    this.musics = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulties = ['easy', 'normal', 'hard', 'nightmare'];
    this.info = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    Object.setPrototypeOf(this.themes, ['theme']);
    Object.setPrototypeOf(this.musics, ['music']);
    Object.setPrototypeOf(this.difficulties, ['difficulty']);
  }

  help() {
    [this.themes, this.musics, this.difficulties].forEach((setting) => { console.log(`${Object.getPrototypeOf(setting)[0]}: ${setting.join(', ')}`); });
  }

  /**
     * @param {string} newTheme
     */
  set theme(newTheme) {
    if (this.themes.includes(newTheme)) {
      this.info.set('theme', newTheme);
      console.log('theme changed');
    } else {
      throw new Error('Unsupported theme. Try help() for more info.');
    }
  }

  /**
     * @param {string} newMusic
     */
  set music(newMusic) {
    if (this.musics.includes(newMusic)) {
      this.info.set('music', newMusic);
      console.log('ambient music changed');
    } else {
      throw new Error('Unsupported music option. Try help() for more info.');
    }
  }

  /**
     * @param {string} newDifficulty
     */
  set difficulty(newDifficulty) {
    if (this.difficulties.includes(newDifficulty)) {
      this.info.set('difficulty', newDifficulty);
      console.log('difficulty changed');
    } else {
      throw new Error('Unsupported difficulty. Try help() for more info.');
    }
  }

  get settings() {
    return this.info;
  }
}
