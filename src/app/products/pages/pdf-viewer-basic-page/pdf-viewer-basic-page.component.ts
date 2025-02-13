import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer-basic-page',
  templateUrl: './pdf-viewer-basic-page.component.html',
  styleUrl: './pdf-viewer-basic-page.component.css'
})
export class PdfViewerBasicPageComponent {
  public pdfSrc: string = 'http://localhost:4200/assets/statics/test-UCV.pdf';
}
