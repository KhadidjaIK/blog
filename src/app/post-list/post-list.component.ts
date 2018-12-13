import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

   constructor() {
    }

    ngOnInit() {
    }

    posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            loveIts: 5,
            created_at: new Date()
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            loveIts: -1,
            created_at: new Date()
        },
        {
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            loveIts: 0,
            created_at: new Date()
        }
    ];

}
