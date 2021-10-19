import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public githubProfile:any;
  public githubRepos!: any[];
  public errorMessage!: string;

  public userQuery!: string;

  constructor(private githubService: GithubService) { }

  public searchUser(){
    
  }

  ngOnInit(): void {
  }

}
