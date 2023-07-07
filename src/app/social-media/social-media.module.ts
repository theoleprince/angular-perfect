import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SocialMediaModule { }
