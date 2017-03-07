function Head(x, y, num) {
  this.x = x;
  this.y = y;
  this.r = 100;
  this.xdir = 2;
  this.n = num;
  
  this.shift = 50;


  this.change = function() {
    //this.r = this.r - 5;
    this.n = int(random(0, 5));
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.shift;

    console.log(this.y);

    if(this.y > 300) {
      this.shift = -150;
    } 

    if(this.y < 50) {
      this.shift = 150;
    }
    
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    image(trump[this.n], this.x, this.y, this.r, this.r);
    //image(trump[floor(random(trump.length))], this.x, this.y, this.r*2, this.r*2);
  
  }

}
