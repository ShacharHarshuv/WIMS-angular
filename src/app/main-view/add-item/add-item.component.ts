import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { transition, style, animate, trigger, animateChild, query, group, state } from '@angular/animations'
import { ItemsService } from '../../services/items.service';
import * as $ from 'jquery' 
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  animations: [
    trigger('opacityIn', [
      state('void', style({
        'background-color': 'rgba(0, 0, 0, 0)'
      })),
      transition('void <=> *', animate(300))
    ]),
    trigger('swipeInOut', [
      state('void', style({
        transform: 'translateY(100%)'
      })),
      state('*', style({
        transform: 'translateY(0)'
      })),
      transition('void <=> *', animate(300))
    ])
  ]
  
})
export class AddItemComponent implements OnInit {

  //Property edit
  name: string;
  img: File;  
  error: string; 

  //events
  @Output() closed = new EventEmitter(); 

  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
  }

  submitAdd(){
    let newItem = {
      name: this.name,
      img: this.img,
    }

    let formData = new FormData($("#myForm")[0])    

    this.itemsService.addItem(formData).subscribe( 
      (data: any) => {
        this.error = undefined;
        this.close();
      }, 
      (error: any) => {
        this.error = error;
        setTimeout(() => {
          this.error = undefined;
        }, 5000);
      }
    );
  }

  close(){
    //inform parent this component is closed
    this.closed.emit(); 
  }
}
