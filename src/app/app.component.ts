import {Component, OnInit} from '@angular/core';
import {MenubarModule,MenuItem} from 'primeng/primeng';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    
    items: MenuItem[];

    constructor() {}
 
    ngOnInit() {
        this.setMenuItems();
    }

    private setMenuItems() {
        this.items = [
            {
                label: 'Here\'s Phil',
                icon: 'fa fa-user fa-fw',
                routerLink: ['/']
            },
           
            {
                label: 'What I Do',
                icon: 'fa fa-laptop'
            },
            {
                label: 'Blog',
                icon: 'fa-edit',
                routerLink: ['/blog'],
                items: [
                    {label: 'Professional', icon: 'fa-black-tie', routerLink: ['/blog']},
                    {label: 'Personal', icon: 'fa-newspaper-o', routerLink: ['/blog']}
                ]
            },
            {
                label: 'Contact Me',
                icon: 'fa fa-envelope',
                routerLink: ['/contact']
            }
        ];
    }
}
