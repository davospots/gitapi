import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/shared/repo';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  providers: [GithubService]
})
export class RepositoryComponent implements OnInit {
  Users!: User;
  Repos: Repo[] = [];
  constructor(public userHttpService: GithubService) { }

  ngOnInit() {
   
  }
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
}

