import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {

  title = 'myapp works!';
  environmentName = environment.apiUrl
  constructor() { }

  ngOnInit() {
  }

}
