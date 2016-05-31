import {Component} from 'angular2/core'
import {TacoService} from './taco.service';
import {FavoriteComponent} from './favorite.component'

@Component({
    selector:'tacos',
    template:`
        <h2>Tacos anonomyous{{title}}</h2>
        <ul>
        <li *ngFor="#tacs of tacquerias">
            {{tacs}}
        </li>
        </ul>
        <favorite [is-favorite]="post.isFav" (change)="onFavoriteChange($event)"></favorite>
    `,
    providers:[TacoService],
    directives:[FavoriteComponent]
})

export class TacoComponent{
    title: string = " super tacos";
    tacquerias: string[];
    constructor(tacoSer:TacoService){
        this.tacquerias = tacoSer.getTacos();
    }
    post = {
        title: "title",
        isFav: true
    }
    onFavoriteChange($event){
        console.log($event);
    }
}