import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from '../shared/repo';
import { User } from '../shared/user';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  Users!: User;
  Repos: Repo[] = [];

  constructor(private httpClient: HttpClient) { }
  searchGithub(userQuery: string) {
    interface userInterface {
      login: string;
      followers: any;
      following: any;
      public_repos: any;
      avatar_url: any;
      location: any;
      html_url:any;
      name:string;
      bio:string;
    }
    let dataURL = `https://api.github.com/users/${userQuery} `;

    let promise = new Promise((resolve, reject) => {
      this.httpClient
        .get<userInterface>(dataURL)
        .toPromise()
        .then(
          (result) => {
            this.Users = result;
            console.log(this.Users);

            resolve(result);
          },
          (error) => {
            console.log();
            reject();
          }
        );
    });
    return promise;
  }
  searchRepos(userQuery: string) {
    interface repoInterface {
      name: string;
      description: string;
      created_at: Date;
      html_url:string;
    }

    let dataURL = `https://api.github.com/users/${userQuery}/repos`;

    let promise = new Promise((resolve, reject) => {
      this.httpClient
        .get<repoInterface[]>(dataURL)
        .toPromise()
        .then(
          (results) => {
            this.Repos = [];
            for (let i = 0; i < results.length; i++) {
              let repo = new Repo(
                results[i].name,
                results[i].description,
                results[i].created_at,
                results[i].html_url
              );
              this.Repos.push(repo);
            }
            console.log(results);
            resolve(results);
          },
          (error) => {
            console.log();
            reject();
          }
        );
    });
    return promise;
  }
}


