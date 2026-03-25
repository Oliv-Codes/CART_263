class FreeStyleObj {
    constructor(x, y, length, f_color, s_color,context) {
      // We write instructions to set up a Flower here
      // Position and size information
      this.x = x;
      this.y = y;
      this.fill_color = f_color;
      this.stroke_color = s_color;
      this.theta = 0;
      this.length = length;
      this.yOffset = 20;
      this.angularSpeed = .07;
      this.context =context;
      this.hue = 0

    }
  
    display() {
      this.theta =0; //reset everytime
      this.context.fillStyle = this.fill_color; // change the color we are using
      this.context.strokeStyle = this.stroke_color; // change the color we are using
      this.context.beginPath();
      this.context.moveTo(this.x,this.y)
      for(let i =this.x; i< this.x+this.length; i++){
      this.context.lineTo(i,(Math.sin(this.theta)*5)+this.y)
      this.context.lineTo(i,(Math.sin(this.theta)*5)+this.y+this.yOffset)
      this.theta+=this.angularSpeed;
      }
      this.context.stroke(); //set the stroke
    }

    update(micData){
        //update freestyle based on microphone
        if (micData) {
          this.yOffset = 15 + micData.amplitude / 1;
          //this.length = 150 + micData.frequency;
        }
          //color
  this.hue = (this.hue + 2) % 360; 
  this.stroke_color = `hsl(${this.hue}, 100%, 50%)`;

    }
  }
  