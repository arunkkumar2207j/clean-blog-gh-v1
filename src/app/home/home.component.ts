import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle: string;
  subTitle: string;
  posts = [];
  constructor( private _data: DataService) { }

  ngOnInit() {
    this.pageTitle = 'Clean Blog';
    this.subTitle = 'A Clean Blog Theme by Start Bootstrap (Arun)';
    this._data.post.subscribe(res => this.posts = res);
    // this._data.updatePost(this.posts);
  }

}
