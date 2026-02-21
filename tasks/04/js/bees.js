class Bee {
    constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
// Display bee
  renderBee() {
    // Create an image element for the bee
    this.beeElement = document.createElement('img');
    this.beeElement.src = 'assets/bee.svg';
    this.beeElement.style.position = 'absolute';
    this.beeElement.style.left = this.x + 'px';
    this.beeElement.style.top = this.y + 'px';
    this.beeElement.style.width = this.width + 'px';
    this.beeElement.style.height = this.height + 'px';
    //this is so that i can change bee size from css
    this.beeElement.classList.add('bee');
    
    // Append to the document body, I think you gotta change the this.beElement when we conncect it with the beehive. I'm leaving it this way because I got it to render in the garden like this.
    document.body.appendChild(this.beeElement);
    
    return this.beeElement;
  }
}

