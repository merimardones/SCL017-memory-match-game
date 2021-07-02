import {shuffle, play} from './PlayGame';

describe('Shuffle', () => {
    it('should shuffle the cards', () => {
        let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(shuffle(cards) == cards).toBe(false);
    });
}); 

describe('Play', () => {
    it('should render without crashing', () => {
      const content = play();
      expect(content instanceof HTMLElement).toBe(true);
    });
    it('should be a function', () => {
      expect(typeof play).toBe('function');
    });
});



  

  



