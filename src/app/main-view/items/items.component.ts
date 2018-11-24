import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import * as $ from 'jquery';  
import { trigger, transition, style, animate, stagger, query, animateChild, state } from '@angular/animations';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  animations: [
    trigger('itemAnim', [
      state('void', style( {opacity: 0})),
      transition('void => *', [
        style({ opacity: 0}),
        animate(300)
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1}),
        animate(200, style( { transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class ItemsComponent implements OnInit {

  testArray :string[] = ['item 1', 'item 2', 'item3']

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {

  }

  public delete($event){
    let button = $event.target;
    //Get the id to delete:
    let li = $(button).closest('li');
    //li.remove();
    let id = li.attr('id');
    this.itemsService.deleteItem(id); 
  }

  public clickOutside(){
    console.log("click outside");
  }
}

