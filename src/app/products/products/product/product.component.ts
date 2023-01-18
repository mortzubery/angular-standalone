import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '../../../cart/currency.pipe';
import { IProduct } from '../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone:true,
  imports:[CurrencyPipe]
})
export class ProductComponent {
  @Input() product: IProduct;
}
