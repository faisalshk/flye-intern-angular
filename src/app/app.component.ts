import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;
  repos: any = [];
  username: string = '';
  page: number = 1;
  itemsPerPageSize = 10;
  constructor(private apiService: ApiService) {}

  // user click event data
  getUsername() {
    this.data = this.apiService.getUser(this.username).subscribe(
      (response: any) => {
        console.log(response);
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    this.getRepoData(this.username);
  }
  //getting repo data
  getRepoData(username: any) {
    this.repos = this.apiService
      .getUserRepos(username)
      .subscribe((response: any) => {
        this.repos = response;
      });
  }
  ngOnInit() {}
}
