import { convertRot13 } from './logic.js';

const handleBtnConvert = function() {
  const sourceText = document.querySelector('#container .source-text').value;
  const convertedText = convertRot13(sourceText);
  document.querySelector('#container .destination-text').value = convertedText;
};

export {
  handleBtnConvert,
};
