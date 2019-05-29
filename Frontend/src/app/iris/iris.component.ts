import { Component, OnInit } from '@angular/core';
import { IrisService } from '../iris.service';
import { Iris } from '../Iris';
import { Espece } from '../Espece';

@Component({
  selector: 'app-iris',
  templateUrl: './iris.component.html',
  styleUrls: ['./iris.component.css']
})
export class IrisComponent implements OnInit {
  espece: Espece = { species: 8 };

  iris: Iris = {
    host_listings_count:  1,
    accommodates:  1,
    bathrooms:  1,
    bedrooms:  1,
    beds:  1,
    number_of_reviews:  1,
    metres:  40,
    neighbourhood_cleansed: "test",

    property_type: "test",

    room_type: "test",
    bed_type: "test",

    amenities: []
  };
  constructor(private irisService: IrisService) { }

  ngOnInit() {
  }

  // public predict() {
  //  this.irisService.predict(this.iris).subscribe((espece) => {
  //      this.espece = espece;
  //  });
}
