import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;
  repos: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.data = this.apiService.getUser('faisalshk').subscribe(
      (response) => {
        console.log(response);
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    this.repos = this.apiService
      .getUserRepos('faisalshk')
      .subscribe((response) => {
        console.log(response);
        this.repos = response;
      });
  }
}
