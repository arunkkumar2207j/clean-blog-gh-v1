import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private posts = new BehaviorSubject<any>([
    {
      postTitle: `Man must explore, and this is exploration at its greatest`,
      postSubtitle: 'Problems look mighty small from 150 miles up',
      postedBy: 'Arun',
      postedDate: 'Sep 24 2018'
    },
    {
      postTitle: `I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.`,
      postSubtitle: '',
      postedBy: 'Arun',
      postedDate: 'Jan 24 2018'
    },
    {
      postTitle: `Science has not yet mastered prophecy`,
      postSubtitle: `We predict too much for the next year and yet far too little for the next ten.`,
      postedBy: 'Arun',
      postedDate: 'Feb 24 2018'
    },
    {
      postTitle: `Failure is not an option`,
      postSubtitle: `Many say exploration is part of our destiny, but it’s actually our duty to future generations.`,
      postedBy: 'Arun',
      postedDate: 'Mar 24 2018'
    },
    {
      postTitle: 'Man must explore, and this is exploration at its greatest',
      postSubtitle: 'Problems look mighty small from 150 miles up',
      postedBy: 'Arun',
      postedDate: 'Sep 24 2018'
    }
  ]);
  post = this.posts.asObservable();

  constructor() { }

  updatePost(post) {
    this.posts.next(post);
  }
}
