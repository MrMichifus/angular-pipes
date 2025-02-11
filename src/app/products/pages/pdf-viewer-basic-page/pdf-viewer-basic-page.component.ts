import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer-basic-page',
  templateUrl: './pdf-viewer-basic-page.component.html',
  styleUrl: './pdf-viewer-basic-page.component.css'
})
export class PdfViewerBasicPageComponent {
  public pdfSrc = 'assets/statics/test.pdf';
}
