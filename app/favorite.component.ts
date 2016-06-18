import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'favorite',
    templateUrl:'app/favorite.template.html',
    styles: ['.fa-star{color:orange;} .fa-star-o{color:blue;}']
})
//comment//
export class FavoriteComponent{
  @Input('is-favorite') isFavorite: Boolean = false;
  
  @Output() change = new EventEmitter();
  
  onClick(){
      this.isFavorite = !this.isFavorite;
      this.change.emit({friendlyFavorites: this.isFavorite});
  }
        
}