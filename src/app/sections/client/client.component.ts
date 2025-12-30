import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  clients = [
    { src: '/assets/Client-Logos/10.png', alt: 'QACC' },
    { src: '/assets/Client-Logos/1719502494_st.Regis.jpg', alt: 'STREGIS' },
    { src: '/assets/Client-Logos/1630652899922.jpg', alt: 'AL Badiya' },
    { src: '/assets/Client-Logos/16012123561541.png', alt: 'DTC' },
    { src: '/assets/Client-Logos/agency_1645620497.png', alt: 'AL ASMAKH' },
    { src: '/assets/Client-Logos/Alnoor-Institute.jpg', alt: 'Alnoor Institute' },
    { src: '/assets/Client-Logos/ashghal-logo.jpg', alt: 'Ashghal' },
    { src: '/assets/Client-Logos/hd-qatar-airways-logo-transparent-png-701751694710505xziguin6tj.png', alt: 'Qatar Airways' },
    { src: '/assets/Client-Logos/I9MG4WGT.jpg', alt: 'MARRIOTT DOHA' },
    { src: '/assets/Client-Logos/images.jpg', alt: 'Qas' },
    { src: '/assets/Client-Logos/images.png', alt: 'Katara' },
    { src: '/assets/Client-Logos/le-meridien-logo-png-transparent.png', alt: 'Meridian' },
    { src: '/assets/Client-Logos/Logo_mejorado_del_Aeropuerto_de_Doha.png', alt: 'Hamad International Airport' },
    { src: '/assets/Client-Logos/MercureLogo.svg.png', alt: 'Mercure' },
    { src: '/assets/Client-Logos/RIVERA.jpg', alt: 'RIVERA' },
    { src: '/assets/Client-Logos/Screenshot 2025-11-18 150929.png', alt: 'GWI' },
    { src: '/assets/Client-Logos/Screenshot 2025-11-18 151345.png', alt: 'AL Mana' },
    { src: '/assets/Client-Logos/Screen_Shot_2021-04-27_at_8.37.14_PM0.png', alt: 'Milaha' },
    { src: '/assets/Client-Logos/Shafallah logo.png', alt: 'Shafallah' },
    { src: '/assets/Client-Logos/smeet_w_l_l__logo.jpg', alt: 'Smeet' },
    { src: '/assets/Client-Logos/tdgi_g.png', alt: 'TDGISERV' },
    { src: '/assets/Client-Logos/tekfen-construction-logo-vector.png', alt: 'Tekfen-Construction' },
    { src: '/assets/Client-Logos/TREFFEN HOUSE.jpg', alt: 'TREFFEN HOUSE' },
    { src: '/assets/Client-Logos/600.png', alt: 'WoooD' }
  ];
}
