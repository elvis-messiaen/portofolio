import {Component, OnDestroy, OnInit} from '@angular/core';
import {Produit} from "../../interface/produit";
import {FormBuilder} from "@angular/forms";
import {ProduitServiceService} from "../../services/produit-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  produits: Produit[] = [];
  subscription!: Subscription;

  constructor(private formBuilder: FormBuilder,
              private produitService: ProduitServiceService) { }

  ngOnInit(): void {

    this.subscription = this.produitService.produitSubject.subscribe({
      next: (produit: Produit[]) => {
        this.produits = produit;
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.produitService.getProduits()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
