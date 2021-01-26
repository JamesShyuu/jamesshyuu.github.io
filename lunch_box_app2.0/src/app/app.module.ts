import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomepageComponent } from './branch/homepage/homepage.component';
import { LoginComponent } from './branch/login/login.component';
import { RegisterComponent } from './branch/register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { MemberCentreComponent } from './branch/member-centre/member-centre.component';
import { MangerCentreComponent } from './branch/manger-centre/manger-centre.component';
import { DataService } from './service/dataService.service';
import { UtilsService } from './service/utilsService.service';
import { HttpService } from './service/http.service';
import { ValidationService } from './service/validtion.service';
import { MemberOrderComponent } from './branch/member-order/member-order.component';
import { MemberEditInfoComponent } from './branch/member-edit-info/member-edit-info.component';
// import { MemberEditOrderComponent } from './branch/member-edit-order/member-edit-order.component';
import { MemberSearchOrderComponent } from './branch/member-search-order/member-search-order.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ErrorComponent } from './components/error/error.component';
import { AdminOrderListComponent } from './branch/admin-order-list/admin-order-list.component';
import { AdminNewProductComponent } from './branch/admin-new-product/admin-new-product.component';
import { AdminAnalysisComponent } from './branch/admin-analysis/admin-analysis.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ErrorMsgService } from './service/error.service';
import { RegExpressionDirective } from './directive/reg-expression.directive';
import { ForgetPasswordComponent } from './components/subview/forget-password/forget-password.component';
import { EditOrderComponent } from './components/subview/edit-order/edit-order.component';
import { MemberCartComponent } from './branch/member-cart/member-cart.component';
import { MenuComponent } from './branch/menu/menu.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SuccessComponent } from './components/success/success.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SystemErrorComponent } from './branch/system-error/system-error.component';
import { AboutUsComponent } from './branch/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MemberCentreComponent,
    MangerCentreComponent,
    MemberOrderComponent,
    MemberEditInfoComponent,
    MemberSearchOrderComponent,
    ErrorComponent,
    AdminOrderListComponent,
    AdminNewProductComponent,
    AdminAnalysisComponent,
    LoadingSpinnerComponent,
    RegExpressionDirective,
    ForgetPasswordComponent,
    EditOrderComponent,
    MemberCartComponent,
    MenuComponent,
    NotificationComponent,
    SuccessComponent,
    ConfirmComponent,
    SystemErrorComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [DataService, 
      HttpService, 
      ValidationService, 
      UtilsService, 
      ErrorMsgService, 
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
