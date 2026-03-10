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
    // This creates a new HTML <img> element and stores it in this.beeElement so we can access it later
    this.beeElement = document.createElement('img');
    
    // Set the source of the image to the bee.svg file located in the assets folder
    this.beeElement.src = 'assets/bee.svg';
    
    // Set the CSS position property to 'absolute' so we can place it at specific x and y coordinates
    this.beeElement.style.position = 'absolute';
    
    // Set the left position of the bee using the x value passed into the constructor, add 'px' to make it a valid CSS value
    this.beeElement.style.left = this.x + 'px';
    
    // Set the top position of the bee using the y value passed into the constructor, add 'px' to make it a valid CSS value
    this.beeElement.style.top = this.y + 'px';
    
    // Set the width of the bee image using the width value passed into the constructor, add 'px' to make it a valid CSS value
    this.beeElement.style.width = this.width + 'px';
    
    // Set the height of the bee image using the height value passed into the constructor, add 'px' to make it a valid CSS value
    this.beeElement.style.height = this.height + 'px';
    
    // Add the 'bee' class to this element so we can style it from the CSS file (garden_style.css)
    // This allows us to change the bee's appearance using CSS rules instead of just JavaScript
    this.beeElement.classList.add('bee');
    
    // Append (add) the bee element to the document body so it appears on the page
    // Note: This will be changed later when we connect the bee to its beehive - bees should spawn at the beehive location
    document.body.appendChild(this.beeElement);
    
    // Return the bee element so other methods can use it if needed
    return this.beeElement;
  }
}

