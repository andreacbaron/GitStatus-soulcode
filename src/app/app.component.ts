import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubRepos } from './interfaces/GithubRepos';
import { GithubUser } from './interfaces/GithubUser';
import { GithubApiService } from '../app/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser // ! -> faz com que uma propriedade da classe possa fizar vazia, temporariamente, está recebendo undefined

  repos: GithubRepos[] = []


  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService,
    private snackbar: MatSnackBar // componente do Material para mostrar mensagens

  ) {}


  procurar(){
    const username = this.githubForm.get('username')?.value // recuperando o nome de usuário que deve ser procurado
    /**
     * Ordem das funções dentro do subscribe
     * 1º -> Sucesso
     * 2º -> Erro
     * 3º -> Completo
     */
    this.githubService.procurarUsuario(username).subscribe(
      (user) => {
        this.gUser = user
      },
      (erro) => {
        //HttpErrorResponse
        // precisa saber se o meu erro vem dessa classe
        if(erro instanceof HttpErrorResponse){
            if(erro.status == 404){
              this.snackbar.open(`Usuário ${username} não encontrado :'(`, 'X') // abrindo o snackbar na tela 
            }
        }
      }
    )
    this.githubService.procurarRepositorios(username).subscribe(
      (repos) => {

        this.repos = repos
      }
    )

  
  }

}
