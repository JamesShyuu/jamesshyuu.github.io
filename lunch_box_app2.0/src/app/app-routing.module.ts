import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './branch/login/login.component';
import { RegisterComponent } from './branch/register/register.component';
import { HomepageComponent } from './branch/homepage/homepage.component';
import { MemberCentreComponent } from './branch/member-centre/member-centre.component';
import { MangerCentreComponent } from './branch/manger-centre/manger-centre.component';
import { MemberEditInfoComponent } from './branch/member-edit-info/member-edit-info.component';
//import { MemberEditOrderComponent } from './branch/member-edit-order/member-edit-order.component';
import { MemberOrderComponent } from './branch/member-order/member-order.component';
import { MemberSearchOrderComponent } from './branch/member-search-order/member-search-order.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminAnalysisComponent } from './branch/admin-analysis/admin-analysis.component';
import { AdminNewProductComponent } from './branch/admin-new-product/admin-new-product.component';
import { AdminOrderListComponent } from './branch/admin-order-list/admin-order-list.component';
import { MemberCartComponent } from './branch/member-cart/member-cart.component';
import { MenuComponent } from './branch/menu/menu.component';
import { SystemErrorComponent } from './branch/system-error/system-error.component';
import { AboutUsComponent } from './branch/about-us/about-us.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'member', component: MemberCentreComponent},
  {path: 'manager', component: MangerCentreComponent},
  {path: 'edit-info', component: MemberEditInfoComponent},
  // {path: 'edit-order', component: MemberEditOrderComponent},
  {path: 'order', component: MemberOrderComponent},
  {path: 'search-order', component: MemberSearchOrderComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'analysis', component: AdminAnalysisComponent},
  {path: 'newproduct', component: AdminNewProductComponent},
  {path: 'orderlist', component: AdminOrderListComponent},
  {path: 'shopping-cart', component: MemberCartComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'system-error', component: SystemErrorComponent },
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
