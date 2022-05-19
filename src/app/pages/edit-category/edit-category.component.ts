import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  //get id nhu nao de lay duoc du lieu
  categoryId: string = this.activatedRoute.snapshot.paramMap.get('id') || '-1'
  @Output() category:any
  form: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.makeForm()
    this.getCategory()
  }

  makeForm(){
    this.form = this.formBuilder.group({
      //dinh nghia cac input cua form
      id: ['', Validators.required],
      categoryName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    })
  }
  get id() { return this.form.get('id')}
  get categoryName() { return this.form.get('categoryName') }

  getCategory(){
    //lam nhu nao de lay duoc category theo id
    this.categoriesService.getCategoryById(this.categoryId)
    .subscribe(
      (res:any) => {
        this.form.patchValue({
          id: res.object.id,
          categoryName: res.object.categoryName
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
        id: this.categoryId,
        categoryName: val.categoryName
      }
      this.categoriesService.updateCategory(data)
      .subscribe(
        (res) => {
          alert('Updae category success')
          this.router.navigate(['/'])
        },
        (err) => {
          alert('Update category fail. Detail: ' + JSON.stringify(err))
        }
      )
    }
  }

}
