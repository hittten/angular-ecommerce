import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log('[HEADER] - OnInit');
  }

  ngDoCheck(): void {
    console.log('[HEADER] - DoCheck');
  }

  toggleNav(header: HTMLElement, icon: HTMLElement) {
    header.classList.toggle('nav-open');
    icon.textContent = header.classList.contains('nav-open') ? 'close' : 'menu';
  }
}
