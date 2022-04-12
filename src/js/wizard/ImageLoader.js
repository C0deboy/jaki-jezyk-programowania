import imagePaths from '../../../img/imagesNames';

const cachedImages = [];

class ImageLoader {
  static load(LoadingCompleteHandler) {
    document.addEventListener('DOMContentLoaded', loadingImages);
    window.addEventListener('load', LoadingCompleteHandler);
    imagePaths.forEach((imagePath) => {
      const preloadedImage = new Image();
      preloadedImage.src = '/img/' + imagePath;
      cachedImages.push(preloadedImage);
    });
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
