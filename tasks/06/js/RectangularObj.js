class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.vx = 2; 
    this.hue = 0
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(this.x, this.y,this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(this.x, this.y,this.width, this.height);
  }

update(micData) {
  if (micData) {
    this.width = 30 + micData.amplitude / 2;
    this.height = 40 + micData.frequency / 2;
  }

  // Move
  this.x += this.vx;

  if (this.x <= 0 || this.x + this.width >= this.context.canvas.width) {
    this.vx *= -1; 
  }
  //color
  this.hue = (this.hue + 2) % 360; 
  this.fill_color = `hsl(${this.hue}, 100%, 50%)`;
}
}
