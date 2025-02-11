import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PdfViewerBasicPageComponent } from './pages/pdf-viewer-basic-page/pdf-viewer-basic-page.component';
import { PdfViewerFullPageComponent } from './pages/pdf-viewer-full-page/pdf-viewer-full-page.component';



@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    PdfViewerBasicPageComponent,
    PdfViewerFullPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ]
})
export class ProductsModule { }
