import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
 

const routes: Routes = [
  {   path:'admin',component:AdminComponent,
      children:[
        {path:'products',component:ProductsComponent}
      ]

  },
];

export const AdminRouting = RouterModule.forRoot(routes);
 