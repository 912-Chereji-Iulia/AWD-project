import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Welcome to the World of Dance';
  introText = 'Dance is a beautiful form of art, expression, and culture. Let’s explore it together!';
  images = [
    'assets/dans1.jpg',
    'assets/IMG_3782.jpg',
    'assets/IMG_3784.jpg',
    'assets/IMG_3786.JPG',
    'assets/IMG_3789.jpg',
    'assets/IMG_3790.jpg',
  ];
  typesOfDance = [
    'Ballet',
    'Jazz',
    'Hip Hop',
    'Contemporary',
    'Ballroom'
  ];
  historyText = 'Dance has existed since the dawn of human culture. It is both a form of social interaction and a way to express emotions and ideas through movement.';
  funFact = 'Did you know? Dance is one of the oldest human activities, predating written history.';
  activeIndex = 0; // Track the current image

  toggleMenu(): void {
    const navbar: HTMLElement | null = document.querySelector('.navbar ul');
    
    if (navbar) {
      const isVisible: boolean = navbar.style.display === 'flex';
      navbar.style.display = isVisible ? 'none' : 'flex';
    }
  }
  
  
  // Move to the next image
  nextImage(): void {
    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; // Loop back to the first image
    }
  }

  // Move to the previous image
  prevImage(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.images.length - 1; // Loop back to the last image
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
