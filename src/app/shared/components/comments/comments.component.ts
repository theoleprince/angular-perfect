import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments!: Comment[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.comments);
  }

}
