import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category:any
  @Output() deleteCategoryEvent = new EventEmitter<number>()
  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
  }

  onDeletedCategory(){
    if(window.confirm("Ban thuc su muon xoa")){
      this.categoriesService.deleteCategory(this.category.id)
      .subscribe(
        (res:any) => {
          this.deleteCategoryEvent.emit(this.category.id)
        },
        (err) => {
          alert("Delete fail. Detail: " + JSON.stringify(err))
        }
      )
    }
  }

}
