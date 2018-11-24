import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ItemsComponent } from './main-view/items/items.component';
import { AddItemComponent } from './main-view/add-item/add-item.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({ }).compileComponents();
  // }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'angular-src'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('angular-src');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-src!');
  // }));
});
