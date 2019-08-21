import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { FireStoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {

  URL: any;

  posts: any;
  postImage: string;
  postName: string;
  postSubtitle: string;
  postContent: string;

  constructor(
    private route: ActivatedRoute,
    public seo: SeoService,
    private fireStoreService: FireStoreService,
    ) { }

  ngOnInit() {
    this.URL = this.route.snapshot.paramMap.get('url');
    this.fireStoreService.read_Posts().subscribe(data => {
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Image: e.payload.doc.data()['Image'],
          Name: e.payload.doc.data()['Name'],
          URL: e.payload.doc.data()['URL'],
          Subtitle: e.payload.doc.data()['Subtitle'],
          Content: e.payload.doc.data()['Content'],
        };
      });
      this.posts.forEach(posts => {
        if (posts.URL === this.URL) {
          this.seo.addSeo(
            posts.Name.concat(' - Blog - Meeting Marketing'),
            posts.Subtitle,
            posts.Image
          );
        } else {
          console.log(posts.URL);
          console.log(this.URL);
        }
      });
      console.log(this.posts);

    });
  }

  ViewRecord() {
    this.fireStoreService.read_Posts();
  }

}
