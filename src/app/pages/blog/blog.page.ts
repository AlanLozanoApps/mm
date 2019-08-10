import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  posts: any;
  postImage: string;
  postName: string;
  postSubtitle: string;
  postContent: string;

  constructor(private fireStoreService: FireStoreService) { }

  ngOnInit() {
    this.fireStoreService.read_Posts().subscribe(data => {

      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Image: e.payload.doc.data()['Image'],
          Name: e.payload.doc.data()['Name'],
          Subtitle: e.payload.doc.data()['Subtitle'],
          Content: e.payload.doc.data()['Content'],
        };
      });
      console.log(this.posts);

    });
  }

  CreateRecord() {
    const record = {};
    record['Image'] = this.postImage;
    record['Name'] = this.postName;
    record['Subtitle'] = this.postSubtitle;
    record['Content'] = this.postContent;
    this.fireStoreService.create_NewPost(record).then(resp => {
      this.postName = '';
      this.postSubtitle = undefined;
      this.postContent = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.fireStoreService.delete_Post(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditImage = record.Image;
    record.EditName = record.Name;
    record.EditSubtitle = record.Subtitle;
    record.EditContent = record.Content;
  }

  UpdateRecord(recordRow) {
    const record = {};
    record['Image'] = recordRow.EditImage;
    record['Name'] = recordRow.EditName;
    record['Subtitle'] = recordRow.EditSubtitle;
    record['Content'] = recordRow.EditContent;
    this.fireStoreService.update_Post(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
