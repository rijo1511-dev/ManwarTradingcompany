import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface AppConfig {
    contact: {
        phone: string;
        fax: string;
        email: string;
        address: string;
        mapUrl: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    private config: AppConfig | null = null;

    constructor(private http: HttpClient) { }

    loadConfig(): Promise<void> {
        return lastValueFrom(this.http.get<AppConfig>('assets/appsettings.json'))
            .then(config => {
                this.config = config;
            })
            .catch(err => {
                console.error('Could not load appsettings.json', err);
            });
    }

    get contact() {
        return this.config?.contact;
    }
}
