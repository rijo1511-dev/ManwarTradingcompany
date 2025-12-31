import { Component, AfterViewInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-testimony-message',
  templateUrl: './testimony-message.component.html',
  styleUrls: ['./testimony-message.component.css']
})
export class TestimonyMessageComponent implements AfterViewInit, OnDestroy {
  messages = [
    {
      name: 'Mohamed Ahmed H A Al Jaber',
      role: 'Chairman, Manawer Trading & Contracting',
      text: `Guided by the vision of Mohamed Ahmed H A Al Jaber, we are committed to contributing to Qatar’s continued growth as a regional economic power. Living in one of the world’s fastest-growing economies, we are proud to have actively participated in its development over the past four decades. Our success is built on consistent standards, strong local and international partnerships, and a selective recruitment process that ensures highly qualified staff deliver the best services.`
    },
    {
      name: 'General Manager',
      role: null,
      text: `Manawer Trading & Contracting is a professional organization dedicated to serving our clients with honesty, integrity, and accountability. We are committed to transforming our organization into a world-class entity, ensuring sustained growth and long-term success. With a keen focus on engineering trends and modern infrastructure technologies, we leverage skills and innovation to achieve the goals of our valued clients.`
    }
  ];

  activeIndex = 0;
  intervalId: any = null;
  intervalMs = 4000; // time between message changes
  isPaused = false;
  maxHeightPx = 0;
  viewportWidthPx = 0;
  private resizeUnlisten: (() => void) | null = null;
  prevIndex: number | null = null;
  animationMs = 600;

  @ViewChildren('messageItem') messageItems!: QueryList<ElementRef>;
  @ViewChild('viewport') viewport!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Measure message heights, choose the tallest so each message is fully visible
    setTimeout(() => {
      let max = 0;
      this.messageItems.forEach(el => {
        const h = el.nativeElement.offsetHeight;
        if (h > max) max = h;
      });
      // default value in case measurement fails
      if (max === 0) max = 220;
      // ensure a minimum user-friendly height so content is not too small
      if (max < 200) max = 220;
      this.maxHeightPx = max;
      this.renderer.setStyle(this.viewport.nativeElement, 'height', `${this.maxHeightPx}px`);
      // ensure each message item has consistent height and vertical centering
      this.messageItems.forEach(el => {
        // set consistent height for each item so the viewport remains stable
        this.renderer.setStyle(el.nativeElement, 'height', `${this.maxHeightPx}px`);
        // set simple flex column inside each item for vertical centering
        this.renderer.setStyle(el.nativeElement, 'display', 'flex');
        this.renderer.setStyle(el.nativeElement, 'flexDirection', 'column');
        this.renderer.setStyle(el.nativeElement, 'justifyContent', 'center');
        // keep text left-aligned inside the testmony
        this.renderer.setStyle(el.nativeElement, 'alignItems', 'flex-start');
        // make sure each item fills the viewport width so only one shows at a time
        this.renderer.setStyle(el.nativeElement, 'minWidth', '100%');
      });
      // measure viewport width and set item widths, then start the auto-scroll
      this.viewportWidthPx = this.viewport.nativeElement.clientWidth || this.viewport.nativeElement.offsetWidth || this.viewport.nativeElement.getBoundingClientRect().width;
      this.messageItems.forEach(el => {
        this.renderer.setStyle(el.nativeElement, 'minWidth', `${this.viewportWidthPx}px`);
        this.renderer.setStyle(el.nativeElement, 'width', `${this.viewportWidthPx}px`);
      });

      // update transform based on new measurement
      this.start();

      // add a window resize listener to recompute sizes
      this.resizeUnlisten = this.renderer.listen('window', 'resize', () => {
        // recalc width
        const w = this.viewport.nativeElement.clientWidth || this.viewport.nativeElement.offsetWidth || this.viewport.nativeElement.getBoundingClientRect().width;
        this.viewportWidthPx = w;
        // set item widths
        this.messageItems.forEach(el => {
          this.renderer.setStyle(el.nativeElement, 'minWidth', `${this.viewportWidthPx}px`);
          this.renderer.setStyle(el.nativeElement, 'width', `${this.viewportWidthPx}px`);
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.clearTimer();
    if (this.resizeUnlisten) {
      this.resizeUnlisten();
      this.resizeUnlisten = null;
    }
  }

  start(): void {
    this.clearTimer();
    this.intervalId = setInterval(() => this.next(), this.intervalMs);
    this.isPaused = false;
  }

  holdTimeout: any = null;

  clearTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.holdTimeout) {
      clearTimeout(this.holdTimeout);
      this.holdTimeout = null;
    }
  }

  pause(): void {
    this.clearTimer();
    this.isPaused = true;
  }

  resume(): void {
    if (!this.isPaused) return;
    this.start();
  }

  togglePause(): void {
    if (this.isPaused) this.resume(); else this.pause();
  }

  onKeyDown(event: KeyboardEvent): void {
    // Only right arrow moves forward; left arrow is ignored because we enforce a single direction
    const k = event.key;
    if (k === 'ArrowRight') {
      event.preventDefault();
      this.manualNext();
      return;
    }
    // Space toggles pause/resume
    if (k === ' ' || k === 'Spacebar' || (event as any).code === 'Space') {
      event.preventDefault();
      this.togglePause();
    }
  }

  // Keep prev() as no-op to avoid accidental calls — we enforce only forward motion
  prev(): void { /* intentionally left blank */ }

  manualNext(): void {
    this.next();
    this.clearTimer();
    // Hold for 8 seconds before restarting auto-scroll
    this.holdTimeout = setTimeout(() => {
      this.start();
    }, 8000);
  }

  next(): void {
    // record previous index so we can play a vanish animation
    this.prevIndex = this.activeIndex;
    this.activeIndex = (this.activeIndex + 1) % this.messages.length;
    // clear prevIndex after animation completes
    setTimeout(() => { this.prevIndex = null; }, this.animationMs);
  }

  // (removed duplicate handler) - previous duplicate onKeyDown function removed to avoid a compile error

  getTransform(): string {
    // use pixel translate to move the list horizontally, keep transform in px to avoid percent calculation issues
    const px = this.activeIndex * this.viewportWidthPx;
    return `translateX(-${px}px)`;
  }
}
