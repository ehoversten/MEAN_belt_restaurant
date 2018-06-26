import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn:"root"
})

export class RestaurantService {
    constructor(private http:HttpClient){}

    create(restaurant,cb){
        this.http.post("/api/restaurants",restaurant)
        .subscribe( data => cb(data) );
    }
    all(cb){
        this.http.get("/api/restaurants")
        .subscribe( data => cb(data) );
    }
    findById(id,cb){
        this.http.get("/api/restaurants/"+id )
        .subscribe( data => cb(data) );
    }
    destroy(restaurant,cb){
        this.http.delete("/api/restaurants/"+restaurant._id )
        .subscribe( data => cb(data) );
    }
    update(restaurant,cb){
      this.http.put("/api/restaurants/"+restaurant._id,restaurant )
      .subscribe( data => cb(data) );
    }
}
