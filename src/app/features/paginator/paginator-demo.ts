import { Component } from '@angular/core';
import { NwbPageEvent } from 'projects/ng-wizi-bulma/src/public_api';

@Component({
    providers: [],
    templateUrl: './paginator-demo.html',
    standalone: false
})
export class PaginatorDemo {
  length = 10000;
  pageSize = 25;
  pageSizeOptions = [5, 10, 25, 100];

  constructor() {}

  pageChange(pageEvent: NwbPageEvent) {
    console.log('Page change', pageEvent);
  }
}
