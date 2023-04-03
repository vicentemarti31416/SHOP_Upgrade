import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { ProductoService } from 'src/app/shared/service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  products: Product[] = [];
  stars = [1, 2, 3, 4, 5]
  rating = 0;
  isActive: boolean = false;

  constructor(
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.searchProduct('');
  }

  searchProduct(event: any): void {
    this.productoService.findAll().subscribe((productos) => {
      this.products = productos.filter((product) => product.name.toLowerCase().trim().includes(event.toLowerCase().trim()));
    });

  }

  updateRating(r: any): void {
    this.rating = r;
  }

  changeActive(): void {
    this.isActive = !this.isActive;
  }

}
