import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './author.component'
import {TacoComponent} from './taco.component'

@Component({
    selector: 'my-app',
    template: '<h1>BA Angular 2 app</h1><courses></courses><p><authors></authors><br><tacos></tacos></p>',
    directives: [CoursesComponent, AuthorComponent, TacoComponent]
})

export class AppComponent { }