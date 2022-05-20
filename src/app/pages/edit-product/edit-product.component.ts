import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  form: FormGroup
  productId:string = this.activatedRoute.snapshot.paramMap.get('id') || '-1'
  @Input() product:any
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.makeForm()
    this.getProduct()
  }

  makeForm(){
    this.form = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      categoryId: ['', [Validators.required, Validators.min(1)]],
      price: ['',[Validators.required, Validators.min(1)]],
      amount: ['',[Validators.required, Validators.min(1)]],
      supplier: ['',[Validators.required, Validators.minLength(2)]]
    })
  }

  get productName() { return this.form.get('productName')}
  get categoryId() { return this.form.get('categoryId')}
  get price() { return this.form.get('price')}
  get amount() { return this.form.get('amount')}
  get supplier() {return this.form.get('supplier')}

  getProduct(){
    this.productsService.getProductById(this.productId)
    .subscribe(
      (res:any) => {
        this.form.patchValue({
          productName: res.object.productName,
          categoryId: res.object.categoryId,
          price: res.object.price,
          amount: res.object.amount,
          supplier: res.object.supplier
        })
      },
      (err:any) => {
        console.log(err)
      }
    )
  }
  submitData(){
    if(this.form.valid){
      const val = this.form.value
      const data = {
        id: this.productId,
        productName: val.productName,
        categoryId: val.categoryId,
        price: val.price,
        amount: val.amount,
        supplier: val.supplier
      }
      this.productsService.updateProduct(data)
      .subscribe(
        (res) => {
          alert('Edit product success')
          this.router.navigate(['/'])
        },
        (err) => {
          alert('Edit product fail. Detail: ' + JSON.stringify(err))
        }
      )
    }
  }

}
