import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { ReviewComponent } from './review/review.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import {ReviewService} from "./review.service";
import {RestaurantService} from "./restaurant.service";

@NgModule({
  declarations: [
      AppComponent,
      RestaurantsComponent,
      RestaurantComponent,
      NewRestaurantComponent,
      EditComponent,
      DetailComponent,
      ReviewComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers:[
      ReviewService,
      RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
