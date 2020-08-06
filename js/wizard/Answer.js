import imagePaths from '../../img/imagesNames';

class Answer {
  constructor(text, imgName, next) {
    this.text = text;
    const imagePath = imagePaths.find((path) => path.includes(imgName));
    if (!imagePath) {
      throw new Error('Image ' + imgName + ' not found in imageNames.js');
    }
    this.imgPath = imagePath;
    this.next = next;
  }
}

export default Answer;
