import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, animateChild, query } from '@angular/animations';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  animations: [
    //important ! enable child animations (prevented by default)
    trigger('animateChild', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true})
      ])
    ])
  ]
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAddItem = false;
  
  openAddItem(){
    this.showAddItem = true;
  }

  closeAddItem(){
    this.showAddItem = false;
  }

}
