import {
  rot13Input,
  rot13Output,
} from './constants.js';

const rotateChar = function(ch) {
  return rot13Input.indexOf(ch) > -1 ? rot13Output[rot13Input.indexOf(ch)] : ch;
};

const convertRot13 = function(sourceText) {
  return sourceText.split('').map(rotateChar).join('');
};

export {
  convertRot13,
};
