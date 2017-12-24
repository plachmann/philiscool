import {Component, OnInit} from '@angular/core';
import {MenubarModule,MenuItem} from 'primeng/primeng';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
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
                label: 'About',
                icon: 'fa fa-user fa-fw',
                items: [{
                        label: 'Who is Phil?', 
                        icon: 'fa-question',
                    },
                    {
                        label: 'Why is he Cool?', 
                        icon: 'fa-question',
                    }
                ]
            },
           
            {
                label: 'What I Do',
                icon: 'fa fa-laptop'
            },
            {
                label: 'Blog',
                icon: 'fa-edit',
                items: [
                    {label: 'Professional', icon: 'fa-black-tie'},
                    {label: 'Personal', icon: 'fa-newspaper-o'}
                ]
            },
            {
                label: 'Contact Me',
                icon: 'fa fa-envelope'
            }
        ];
    }
}
