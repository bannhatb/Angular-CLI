import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.makeForm()
  }

  makeForm(){
    this.form = this.formBuilder.group({
      ProductName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      CategoryId: ['', [Validators.required, Validators.min(1)]],
      Price: ['',[Validators.required, Validators.min(1)]],
      Amount: ['',[Validators.required, Validators.min(1)]],
      Supplier: ['',[Validators.required, Validators.minLength(2)]]
    })
  }

  get ProductName() { return this.form.get('ProductName')}
  get CategoryId() { return this.form.get('CategoryId')}
  get Price() { return this.form.get('Price')}
  get Amount() { return this.form.get('Amount')}
  get Supplier() {return this.form.get('Supplier')}

  submitData(){
    if(this.form.valid){
      const data = this.form.value
      this.productsService.addProduct(data)
      .subscribe(
        (res) => {
          alert('Add product success')
          this.router.navigate(['/'])
        },
        (err) => {
          alert('Add product fail. Detail: ' + JSON.stringify(err))
        }
      )
    }
  }

}
