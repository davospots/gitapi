
import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/shared/repo';
import { User } from 'src/app/shared/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Users!: User;
  Repos: Repo[] = [];
  constructor(public userHttpService: GithubService) { }

  
  searchGithub(userQuery: string) {
    this.userHttpService.searchGithub(userQuery).then(
      (success) => {
        this.Users = this.userHttpService.Users;
      },
      (error) => {
        console.log(error);
      }
    );
    this.userHttpService.searchRepos(userQuery).then((success) => {
      this.Repos = this.userHttpService.Repos;
    });
  }

  

  ngOnInit(): void {
  }

}
