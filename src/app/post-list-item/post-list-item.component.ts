import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postLoveIts: number;
    @Input() postCreated_at: Date;

    constructor() {
    }

    ngOnInit() {
    }

    getColor() {
        if (this.postLoveIts > 0) {
            return 'green';
        } else if (this.postLoveIts < 0) {
            return 'red';
        } else {
            return 'black';
        }
    }

    getBlackColor() {
        return 'black';
    }

    onLoveIt() {
        this.postLoveIts++;
        console.log('le nombre de j\'aime est : ' + this.postLoveIts);
    }

    onDontLoveIt() {
        this.postLoveIts--;
        console.log('je n\'aime pas : ' + this.postLoveIts);
    }

}
