import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubUser } from '../app/interfaces/GithubUser';
import { GithubRepos } from '../app/interfaces/GithubRepos';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL: string = 'https://api.github.com/users/' // readonly -> somente leitura

  constructor(
    private http: HttpClient // Objeto responsanvel por fazer as requisição HTTP no Angular -- Injeção de dependecia
  ) { }

  /***
   * Metodos HTTP
   * Leitura de dados -> GET
   * Criacão de dados -> POST
   * Atualização de dados -> PUT
   * Deleção de dados -> DELETE
   */

  procurarUsuario(username: string){
    /**
     * Objeto HTTP, resposnavel por fazer as requisições, póssui o método get(),
     * que serve para fazer requisições HTTP utilizando o método GET. Basta apenas passar a URL de acesso
     * como parâmatro
     * 
     */

    return  this.http.get<GithubUser>(`${this.baseURL}${username}`)

  }

  procurarRepositorios(username: string){
    return this.http.get<GithubRepos[]>(`${this.baseURL}${username}/repos`)
  }
}
