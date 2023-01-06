import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesRoutingModule } from './detalhes-routing.module';
import { DetalhesComponent } from '../detalhes.component';
import { MaterialModule } from 'src/app/material/material';


@NgModule({
  declarations: [DetalhesComponent],
  imports: [
    CommonModule,
    DetalhesRoutingModule,
    MaterialModule
  ]
})
export class DetalhesModule { }
