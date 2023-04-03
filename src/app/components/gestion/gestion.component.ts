import { ProductoService } from 'src/app/shared/service/producto.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  product: Product = new Product();
  stars = [1, 2, 3, 4, 5]
  rating = 0;

  constructor(
    private activatedRouter: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      let id = params['id'];
      if (id) this.productoService.findById(id).subscribe((product) => {
        this.product = product;
      });
    })
  }

  public save(): void {
    this.productoService.save(this.product).subscribe((response) => {
      this.router.navigate(['/productos']);
    })
  }

  public update(): void {
    this.productoService.update(this.product).subscribe((response) => {
      this.router.navigate(['/productos']);
    })
  }

  updateRating(r: any): void {
    this.rating = r;
  }

}
