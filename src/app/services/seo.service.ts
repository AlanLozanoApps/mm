import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  addSeo(title, description, img, url = '', author = 'Meeting Marketing') {
    // Set HTML Document Title
    const urlMaster = 'https://meeting-marketing.web.app/';
    url = urlMaster.concat(url);

    // Seo basics
    this.title.setTitle(title);
    this.meta.updateTag({ rel: 'canonical', href: url });
    this.meta.updateTag({ name: 'author', content: author });
    this.meta.updateTag({ name: 'description', content: description });

    // SSR esentials
    this.meta.updateTag({ itemprop: 'url', content: url });
    this.meta.updateTag({ itemprop: 'name', content: author });

    // Add Twitter Card Metatags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: author });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: img });
  }

}
