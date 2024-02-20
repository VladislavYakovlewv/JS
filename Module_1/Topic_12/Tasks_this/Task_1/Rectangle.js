'use strict';
{
  const rectangle = {
    width: 5,
    height: 5,

    set RectangleWidth(val) {
      if (typeof val === 'number') {
        this.width = val;
      }
    },
    set RectangleHeight(val) {
      if (typeof val === 'number') {
        this.height = val;
      }
    },
    get RectangleSquare() {
      return 0.5 * (this.width * this.height) + 'см';
    },
    get RectanglePerimeter() {
      return Math.round(Math.sqrt(Math.pow(0.5 * this.width, 2) +
      Math.pow(this.height, 2)) * 2) + this.width + 'см';
    },

  };


  console.log(rectangle.RectangleSquare);
  console.log(rectangle.RectanglePerimeter);
  // для себя
  console.log(rectangle.width);
  console.log(rectangle.height);
}
