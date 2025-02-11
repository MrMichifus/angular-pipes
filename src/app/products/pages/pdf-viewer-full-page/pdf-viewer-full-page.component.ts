import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer-full-page',
  templateUrl: './pdf-viewer-full-page.component.html',
  styleUrl: './pdf-viewer-full-page.component.css'
})
export class PdfViewerFullPageComponent {
  public pdfSrc: string = 'assets/statics/test.pdf';
}
