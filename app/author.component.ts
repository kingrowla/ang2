import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
@Component({
    selector: 'authors',
    template:`
        <h2>{{title}}</h2>
        <ul>
        <li *ngFor="#auths of authors">
            {{auths}}
        </li>
        </ul>
    `,
    providers:[AuthorService]
})

export class AuthorComponent{
    title: string = "This is some authors";
    authors: string[];
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}