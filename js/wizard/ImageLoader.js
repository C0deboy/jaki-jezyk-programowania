import imagePaths from '../../img/imagesNames';

class ImageLoader {
  static load(LoadingCompleteHandler) {
    window.addEventListener('load', LoadingCompleteHandler);
    imagePaths.forEach((imageName) => {
      const preload = new Image();
      preload.src = '/img/' + imageName;
    });
    document.addEventListener('DOMContentLoaded', loadingImages);
  }
}

function loadingImages() {
  document.querySelector('.answers').innerHTML = `<div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>`;
}
export default ImageLoader;
