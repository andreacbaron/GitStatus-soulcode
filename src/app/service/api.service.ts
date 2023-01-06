
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepos } from '../interfaces/github-repo';
import { GithubUser } from '../interfaces/github-user';



@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  private readonly baseURL: string = 'https://api.github.com/users/';
  private branchUrl = 'https://api.github.com/repos/'
  private userName!: string;

  constructor(
    private http: HttpClient // é um objeto resposavel por fazer a requisição no angular
  ) {}

  procurarUsuario(username: string) {
    return this.http.get<GithubUser>(`${this.baseURL}${username}`);
  }

  procurarRepo(username: string) {
    return this.http.get<GithubRepos[]>(`${this.baseURL}${username}/repos`);
  }

  getUSerName(): string {
    return this.userName;
  }

  setUserName(userName: string) {
    this.userName = userName;
  }



}
