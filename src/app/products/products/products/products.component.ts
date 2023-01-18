import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IProduct } from '../../product';
import { ProductService } from '../../product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductComponent, CommonModule],
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService
      .getProducts()
      .pipe(map((res: any) => res.products));
  }
}
