let circles = [];
let drawingBoardA_global = null;


class CircularObj {
  constructor(x, y, radius, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.originalRadius = radius;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.isHovered = false;
  }

  update(mouseX, mouseY) {
    if (typeof mouseX === 'number' && typeof mouseY === 'number') {
      // distance from mouse to circle center
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      // hover detection
      if (dist < this.originalRadius) {
        this.isHovered = true;
        this.radius = this.originalRadius + 10; // grow
      } else {
        this.isHovered = false;
        this.radius = this.originalRadius; // shrink back
      }
    } else {
      this.isHovered = false;
      this.radius = this.originalRadius;
    }
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      true
    );
    this.context.fill(); // set the fill
    this.context.lineWidth = 2; //change stroke
    this.context.closePath();
    this.context.stroke();
  }

  //update() {
    //update circle
    //this.x += 1;
    //console.log("circle update");
  //}
}

function circleButtons() {
  addCircleBtn = document.getElementById("addCircle");
  removeCircleBtn = document.getElementById("removeCircle");
  
  addCircleBtn.addEventListener("click", function () {
      // Create a new circle with all required parameters including context
      if (drawingBoardA_global) {
        //colour
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${r},${g},${b})`;
        

        //size
        let randomRadius = 16 + Math.random() * 20;
        let c = new CircularObj(
          Math.random() * 350,
          Math.random() * 250,
          randomRadius,
          randomColor,
          "#000000",
          drawingBoardA_global.context
        );

        circles.push(c);
        drawingBoardA_global.addObj(c);
        console.log("Circle added. Total:", circles.length);
      }
  });

  removeCircleBtn.addEventListener("click", function () {
      if (circles.length > 0) {
          circles.pop();
          drawingBoardA_global.objectsOnCanvas.pop();
          console.log("Circle removed. Total:", circles.length);
      }
  });
}

