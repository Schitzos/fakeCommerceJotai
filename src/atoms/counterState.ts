import {atom} from 'recoil';

export const counterState = atom({
  key: 'Counter',
  default: 1,
});
