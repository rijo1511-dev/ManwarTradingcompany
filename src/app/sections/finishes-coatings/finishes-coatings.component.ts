import { Component } from '@angular/core';

@Component({
  selector: 'app-finishes-coatings',
  templateUrl: './finishes-coatings.component.html',
  styleUrls: ['./finishes-coatings.component.css']
})
export class FinishesCoatingsComponent {
    ngOnInit() {
       this.scrollTo("finishes-coatings");
    }


    scrollTo(targetId: string) {

        const el = document.getElementById(targetId);
        if (!el) return;

        const header = document.querySelector('header'); // sticky header
        const headerHeight = header?.clientHeight ?? 0;

        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
  }
