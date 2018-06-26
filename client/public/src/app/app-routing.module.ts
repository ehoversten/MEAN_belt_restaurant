import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { NewRestaurantComponent } from "./new-restaurant/new-restaurant.component";
import {EditComponent} from "./edit/edit.component";
import {ReviewComponent} from "./review/review.component";

const routes: Routes = [
    { path:"restaurants", component:RestaurantsComponent },
    { path:"restaurants/new", component:NewRestaurantComponent },
    { path:"restaurants/:id",component:RestaurantComponent },
    { path:"restaurants/:id/edit",component:EditComponent },
    { path:"restaurants/:id/reviews",component:ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
