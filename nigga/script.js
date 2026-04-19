let highestZIndex = 1;

class Paper {
  holdingPaper = false;

  prevMouseX = 0;
  prevMouseY = 0;

  mouseX = 0;
  mouseY = 0;

  currentPaperX = 0;
  currentPaperY = 0;

  init(paper) {

    // MOUSE DOWN
    paper.addEventListener('mousedown', (e) => {
      this.holdingPaper = true;

      paper.style.zIndex = highestZIndex;
      highestZIndex += 1;

      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    // MOUSE MOVE
    document.addEventListener('mousemove', (e) => {


this.mouseX = e.clientX;
this.mouseY = e.clientY;

this.velocityX = this.mouseX - this.prevMouseX;
this.velocityY = this.mouseY - this.prevMouseY;

if (this.holdingPaper) {


this.currentPaperX += this.velocityX;
this.currentPaperY += this.velocityY;

this.prevMouseX = this.mouseX;
this.prevMouseY = this.mouseY;

paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;


  }




      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;

      paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;  
    
    })

    // MOUSE UP
    window.addEventListener('mouseup', () => {
        console.log('Mouse button released');
      this.holdingPaper = false;    
    });
  }
}

// APPLY TO ALL PAPERS
const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});