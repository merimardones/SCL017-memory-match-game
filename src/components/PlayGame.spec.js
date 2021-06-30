import {shuffle} from './PlayGame.js';


describe('Shuffle', () => {
    it('should shuffle the cards', () => {
        let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                expect(shuffle(cards) == cards).toBe(false);
            });
        });
      
   
  