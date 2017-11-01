import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("OnClick method triggered")
    this.isFavorite.isSelected = !this.isFavorite.isSelected;
  }

}
