import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { MaterialModule } from 'src/app/material/material';
import { PdfComponent } from '../pdf.component';

@NgModule({
  declarations: [PdfComponent],
  imports: [CommonModule, PdfRoutingModule, MaterialModule],
})
export class PdfModule {}
