import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Item } from '../structures/item'
import { hostUrl } from './hosturl';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private hostUrl: String = hostUrl() + '/items';
  public items: Item[]; //the items list

  constructor(private http: HttpClient) { 
    //Get the items
    this.getItems().subscribe( (data: any) => {
      this.items = data.items;

      //update hostUrl if necessary
      this.items.forEach(item => {
        this.setHostUrl(item); 
      });      
    });
  }
  private setHostUrl(item: Item){
    if (item.img.startsWith("/")){
      item.img = hostUrl() + item.img;
    }
  }

  private getItems(parentId?: String){
    let url: String = this.hostUrl;

    if (parentId){
      url +=`/${parentId}`;
    }

    return this.http.get(url.toString());
  }
  public addItem(formData: any, parentId?: String){
    //We create an observable for the component that uses this function (for handling error messages ect)
    return Observable.create((observer: Observer<any>) => {
      //Send the request
      let url: String = this.hostUrl + '/add';
      const headers = new HttpHeaders({'enctype': 'multipart/form-data'});
      this.http.post(url.toString(), formData, { headers: headers }).subscribe(
        
        //handle received data
        (data: any) => {
          if (data.success){
            
            //Add to the items list
            let newItem: Item = {
              id: data.item._id,
              name: data.item.name,
              img: data.item.img
            }
            this.setHostUrl(newItem);  
            this.items.push(newItem);

            //Send back to component
            observer.next(data);
            observer.complete();
          }
          else {
            observer.error(data.err); 
          }
        }
      ) 
    })
    
  }
  public deleteItem(id: string){
    // Temporaty code: Remove the desired element from the array 
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
    return;
    // ---

    this.http.delete(this.hostUrl + '/' + id).subscribe((data: any) =>{
        // Remove the item from the list
        if (data.success){ 
          // Remove the desired element from the array
          const index = this.items.findIndex((item) => item.id === id);
          this.items.splice(index, 1);
          //I removed the DOM element in items.component.ts using jquery
        }
    })
  }
}
