import {Component, OnInit} from '@angular/core';
import {ProduitServiceService} from "../../services/produit-service.service";
import {Produit} from "../../interface/produit";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.scss']
})
export class SingleProduitComponent implements OnInit {

  currentProduit!: Produit;

  constructor(
    private produitService : ProduitServiceService,
    private activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {
    const produitId = this.activatedRoute.snapshot.paramMap.get('id');
    this.produitService.getProduitById(<string>produitId)
      .then(produit => this.currentProduit = produit)
      .catch(console.error);
  }

  rtn() {
    window.history.back();
  }

}
