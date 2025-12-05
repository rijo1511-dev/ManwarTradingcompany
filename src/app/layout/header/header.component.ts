import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  scrollTo(targetId: string, event?: Event) {
    event?.preventDefault();

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.isOpen = false;
  }
}