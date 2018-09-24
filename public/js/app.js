import { handleBtnConvert } from './convertHandle.js';

const initPage = function() {
  const form = document.querySelector('#container .form-convert');
  // see https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
  form.addEventListener('submit', evt => evt.preventDefault());
  document.querySelector('.btn-convert')
    .addEventListener('click', handleBtnConvert);
};

export{
  initPage,
};

