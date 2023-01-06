
import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-pdf',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  public userName!: string;

  constructor(private githubApiService: GithubApiService) {}

  ngOnInit(): void {
    this.userName = this.githubApiService.getUSerName();
    console.log(this.userName, 'ibag userName')
  }


}
