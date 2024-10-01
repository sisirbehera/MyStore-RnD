import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RndMiscComponent } from './rnd-misc/rnd-misc.component';
import { SearchTypeHeadComponent } from './search-type-head/search-type-head.component';


const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'RnD', component: RndMiscComponent },
    { path: 'search', component: SearchTypeHeadComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
