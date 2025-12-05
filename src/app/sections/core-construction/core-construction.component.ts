import { Component } from '@angular/core';

@Component({
  selector: 'app-core-construction',
  templateUrl: './core-construction.component.html',
  styleUrls: ['./core-construction.component.css']
})
export class CoreConstructionComponent { 
    ngOnInit() {
       this.scrollTo("core-construction");
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
