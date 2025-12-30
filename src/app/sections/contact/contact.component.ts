import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppConfigService } from '../../core/services/app-config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private appConfig: AppConfigService, private sanitizer: DomSanitizer) { }

  get contact() {
    return this.appConfig.contact;
  }

  get mapUrl(): SafeResourceUrl | null {
    const url = this.appConfig.contact?.mapUrl;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  }
}