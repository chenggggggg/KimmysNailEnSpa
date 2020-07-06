import { Component, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class AppComponent {
  title = 'KimmysNailenSpa';


  @HostListener('window:scroll', ['$event'])


  onWindowScroll(e) {
    if (window.pageYOffset > 110) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
