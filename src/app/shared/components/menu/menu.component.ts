import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Prueba PDF Viewer Básico',
            icon: 'pi pi-shopping-bag',
            routerLink: 'pdf-viewer-basic'
          },
          {
            label: 'Prueba PDF Viewer Avanzado',
            icon: 'pi pi-shopping-cart',
            routerLink: 'pdf-viewer-advanced'
          },
          {
            label: 'Custom Pipes',
            icon: 'pi pi-spin pi-apple',
            routerLink: 'order'
          }
        ]
      }
    ];
  }
}
