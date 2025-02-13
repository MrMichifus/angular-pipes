import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PdfViewerBasicPageComponent } from './pages/pdf-viewer-basic-page/pdf-viewer-basic-page.component';
import { PdfViewerFullPageComponent } from './pages/pdf-viewer-full-page/pdf-viewer-full-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', component: BasicsPageComponent },
  { path: 'numbers', component: NumbersPageComponent },
  { path: 'uncommon', component: UncommonPageComponent },
  { path: 'pdf-viewer-basic', component: PdfViewerBasicPageComponent },
  { path: 'pdf-viewer-advanced', component: PdfViewerFullPageComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
