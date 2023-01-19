const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

/**
 * Convert degrees to radians.
 * @param degrees - The angle in degrees.
 * @returns the value of the degrees multiplied by the value of pi divided by 180.
 */
const degToRad = (degrees) => {
  return degrees * Math.PI / 180;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 12;
    const radius = width * 0.3

    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num);
      const angle = slice * i

      x = cx + radius * Math.sin(angle)
      y = cy + radius * Math.cos(angle)

      /* It saves the current state of the canvas. */
      context.save()

      context.translate(x, y)
      context.rotate(-angle)
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();

      /* It restores the state of the canvas to the state it was in before the last call to
      `context.save();` */
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
