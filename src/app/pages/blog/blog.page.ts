import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo.service';

declare var $: any;

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

  constructor(
    public seo: SeoService,
    private fireStoreService: FireStoreService
  ) {
    this.seo.addSeo(
      'Blog - Meeting Marketing',
      'Hablemos sobre eventos',
      '/assets/images/eventos-industriales.jpeg'
    );
  }

  ngOnInit() {
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
      console.log(this.posts);

    });
  }

  slugify(text: any) {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');

    return text.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  CreateRecord() {
    const record = {};
    record['Image'] = this.postImage;
    record['Name'] = this.postName;
    record['URL'] = this.slugify(this.postName);
    record['Subtitle'] = this.postSubtitle;
    record['Content'] = this.postContent;
    this.fireStoreService.create_NewPost(record).then(resp => {
      this.postImage = '';
      this.postName = '';
      this.postSubtitle = '';
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

  ViewRecord(record) {
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
    record['URL'] = this.slugify(recordRow.EditName);
    record['Subtitle'] = recordRow.EditSubtitle;
    record['Content'] = recordRow.EditContent;
    this.fireStoreService.update_Post(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
