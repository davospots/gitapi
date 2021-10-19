import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  Users!: User;
  Repos: Repository[] = [];
  constructor(public userHttpService: GitService) { }

  ngOnInit() {
    this.searchGit('kimutaimeshack');
  }
  searchGit(searchTerm: string) {
    this.userHttpService.searchGits(searchTerm).then(
      (success) => {
        this.Users = this.userHttpService.Users;
      },
      (error) => {
        console.log(error);
      }
    );
    this.userHttpService.searchRepos(searchTerm).then((success) => {
      this.Repos = this.userHttpService.Repos;
    });
  }
}

