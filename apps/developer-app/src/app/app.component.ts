import { Component } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';

@Component({
  selector: 'tss-job-interview-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'developer-app';

  constructor(private router: Router) {
  }

  public isTabActive(url: string): boolean {
    const urlCurrent = window.location.href;
    return ('/' + urlCurrent.split('/')[3] === url);
  }
}
