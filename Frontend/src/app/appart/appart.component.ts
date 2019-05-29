import { Component, OnInit } from '@angular/core';
import { AppartService } from '../appart.service';
import { Appart } from '../Appart';
import { Prix } from '../Prix';
import * as caracteristiques from '../Caracteristiques';


@Component({
  selector: 'app-appart',
  templateUrl: './appart.component.html',
  styleUrls: ['./appart.component.css']
})
export class AppartComponent implements OnInit {
  prix: Prix = { dollars: 0 };
  
  neighbourhood_cleansed = caracteristiques.NEIGHBOURHOOD_CLEANSED;
  property_type = caracteristiques.PROPERTY_TYPE;
  room_type = caracteristiques.ROOM_TYPE;
  bed_type = caracteristiques.BED_TYPE;
  amenities = caracteristiques.AMENITIES;

  appart: Appart = {
    host_listings_count: 1,
    accommodates: 1,
    bathrooms: 1,
    bedrooms: 1,
    beds: 1,
    number_of_reviews: 1,
    metres: 40,
    
    neighbourhood_cleansed: this.neighbourhood_cleansed[0],

    property_type: this.property_type[0],

    room_type: this.room_type[0],

    bed_type: this.bed_type[0],

    amenities: []
  };


  constructor(private appartService: AppartService) { }

  ngOnInit() {}

//   public predict() {
//     this.appartService.predict(this.appart).subscribe((prix) => {
//         this.prix = prix;
//     });
// 
}