import { Component } from '@angular/core';

@Component({
  selector: 'app-specialized-technical',
  templateUrl: './specialized-technical.component.html',
  styleUrls: ['./specialized-technical.component.css']
})
export class SpecializedTechnicalComponent {
     ngOnInit() {
       this.scrollTo("specialized-technical");
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
