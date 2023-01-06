import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUser } from 'src/app/interfaces/github-user';
import { GithubApiService } from 'src/app/service/api.service';
import { __values } from 'tslib';

export interface PeriodicElement {
  nome: string;
  comits: string;
  branchs: number;
  detalhes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
  { nome: 'soulcode', comits: '6', branchs: 1, detalhes: '→=' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  githubForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
  });

  gUser!: GithubUser;
  repos:
    | import('/Users/reinaldobaron/Documents/projeto-final/git-stats/src/app/interfaces/github-rapo').GithubRapo[]
    | undefined;
  constructor(
    private fb: FormBuilder,
    private gitbubService: GithubApiService,
    private snackBar: MatSnackBar, //componentes de mateBar
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.procurar();
  }

  procurar() {
    // const username = this.githubForm.get('username')?.value;
    // const username = this.gitbubService.getUSerName();
    const username = this.route.snapshot.params['username'];
    this.gitbubService.setUserName(username);

    this.gitbubService.procurarUsuario(username).subscribe(
      (user) => {
        console.log(user, 'reponse');
        this.gUser = user;
      },

      (erro) => {
        if (erro instanceof HttpErrorResponse) {
          if (erro.status == 404) {
            // this.snackBar.open(`O usuario ${username} não encontrado :(`);
            this.router.navigate(['/']);
          }
        }
      }
    );

    console.log(username, 'ibag username');
    this.gitbubService.procurarRepo(username).subscribe((repos) => {
      this.repos = repos;
    });

    this.repos?.forEach((repos) => {
      // this.gitbubService.countBranch(username, repos.name).subscribe(res => this.countBranches.push(res))
    });
    // this.gitbubService.countBranch(username, )
  }

  displayedColumns: string[] = ['nome', 'comits', 'branchs', 'detalhes'];
  dataSource = ELEMENT_DATA;

  navigateToPdf(): void {
    this.router.navigate(['pdf']);
  }
}
