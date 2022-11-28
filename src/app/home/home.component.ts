import { Component, OnInit } from '@angular/core';
import {Produit} from "../interface/produit";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produits: Produit [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
