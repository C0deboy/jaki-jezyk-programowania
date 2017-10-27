import imagePaths from '../../img/imagesNames';

class ImageLoader {
  load(LoadingCompleteHandler) {
    window.addEventListener('load', LoadingCompleteHandler);
    imagePaths.forEach((imageName) => {
      const preload = new Image();
      preload.src = '/img/' + imageName;
    });
    document.addEventListener('DOMContentLoaded', loadingImages);
  }
}

function loadingImages() {
  document.querySelector('.answers').innerHTML =
    '<div class="spinner">\n' +
    '  <div class="bounce1"></div>\n' +
    '  <div class="bounce2"></div>\n' +
    '  <div class="bounce3"></div>\n' +
    '</div>';
}
export default ImageLoader;
