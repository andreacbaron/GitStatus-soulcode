import { GithubUser } from '../../interfaces/github-user';

import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  public userName!: string;
  public githubUser!: GithubUser;

  constructor(private githubApiService: GithubApiService) {}

  ngOnInit(): void {
    this.userName = this.githubApiService.getUSerName();
    console.log(this.userName, 'ibag userName');
    this.getUser();
  }

  private getUser(): void {
    this.githubApiService
      .procurarUsuario(this.userName)
      .subscribe((res) => (this.githubUser = res));
  }
}
