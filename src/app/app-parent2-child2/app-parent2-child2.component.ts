import { Component } from '@angular/core';

@Component({
  selector: 'app-app-parent2-child2',
  templateUrl: './app-parent2-child2.component.html',
  styleUrls: ['./app-parent2-child2.component.scss']
})
export class AppParent2Child2Component {

  constructor() {
    console.log("[APP-PARENT2-CHILD2] - constructor")
  }

  ngOnInit(): void {
    console.log('[APP-PARENT2-CHILD2] - OnInit');
  }
  ngDoCheck(): void {
    console.log('[APP-PARENT2-CHILD2] - DoCheck');
  }
}
