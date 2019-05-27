import { Component, OnInit } from '@angular/core';
import { IrisService } from '../iris.service';
import { Iris } from '../Iris';

@Component({
  selector: 'app-iris',
  templateUrl: './iris.component.html',
  styleUrls: ['./iris.component.css']
})
export class IrisComponent implements OnInit {
  iris: Iris ={
    "sepalLength":2,
    "sepalWidth":1,
    "petalLength":3,
    "petalWidth":4,
  };
  constructor(private irisService: IrisService) { }

  ngOnInit() {
  }
}
