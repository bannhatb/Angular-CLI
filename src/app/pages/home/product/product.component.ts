import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:any
  @Output() deleteProductEvent = new EventEmitter<number>() ////khi kich hoat su kien output thi bao cho [page] cha de load lai
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onDeletedProduct(){
    if(window.confirm('Ban thuc su muon xoa'))
    {
      this.productsService.deleteProductById(this.product.Id)
      .subscribe(
        (res:any) => {
          this.deleteProductEvent.emit(this.product.Id)
        },
        (err) => {
          alert('Delete fail. Detail: '+ JSON.stringify(err))
        }
      )
    }
  }

}
