import { Component } from '@angular/core';

@Component({
  selector: 'app-app-parent2',
  templateUrl: './app-parent2.component.html',
  styleUrls: ['./app-parent2.component.scss']
})
export class AppParent2Component {

  constructor() {
    console.log("[APP-PARENT2] - constructor")
  }

  ngOnInit(): void {
    console.log('[APP-PARENT2] - OnInit');
  }
  ngDoCheck(): void {
    console.log('[APP-PARENT2] - DoCheck');
  }
}
