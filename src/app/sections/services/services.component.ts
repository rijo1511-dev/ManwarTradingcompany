import { Component, AfterViewInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit, OnDestroy { 
  finishes: boolean = false;
  core: boolean = false;
  specialized: boolean = false;
  openServices(tabName: string) {
    switch (tabName) {
      case 'finishes':
        this.finishes = !this.finishes;
        this.core = false;
        this.specialized = false;
        break;
      case 'core':
        this.core = !this.core;
        this.finishes = false;
        this.specialized = false;
        break;
      case 'specialized':
        this.specialized = !this.specialized;
        this.finishes = false;
        this.core = false;
        break;
    }
  }
   
  @ViewChildren('serviceCard', { read: ElementRef }) serviceCards!: QueryList<ElementRef>;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    // IntersectionObserver to toggle in-view on each card
    const options = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('in-view');
        } else {
          el.classList.remove('in-view');
        }
      });
    }, options);
    this.serviceCards?.forEach(card => {
      if (card?.nativeElement) this.observer!.observe(card.nativeElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}