import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data.posts)
    );
  }

}
