import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './partial/footer/footer.component';
import { FooterHomeComponent } from './partial/footer-home/footer-home.component';
import { HeaderComponent } from './partial/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { BillerComponent } from './component/biller/biller.component';
import { ConsumerComponent } from './component/consumer/consumer.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { MerchantComponent } from './component/merchant/merchant.component';
import { PartnersComponent } from './component/partners/partners.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './component/terms-condition/terms-condition.component';
import { WhatPayComponent } from './component/what-pay/what-pay.component';
import { WhyPayComponent } from './component/why-pay/why-pay.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BlogDetailsComponent } from './component/blog-details/blog-details.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent},
  {path:"biller",component:BillerComponent},
  {path:"merchant",component:MerchantComponent},
  {path:"consumer",component:ConsumerComponent},
  {path:"about",component:AboutComponent},
  {path:"partners",component:PartnersComponent},
  {path:"why-pay",component:WhyPayComponent},
  {path:"what-pay",component:WhatPayComponent},
  {path:"blogs",component:BlogsComponent},
  { path: 'blogs/:id', component: BlogDetailsComponent },
  {path:"contact-us",component:ContactUsComponent},
  {path:"terms-condition",component:TermsConditionComponent},
  {path:"privacy-policy",component:PrivacyPolicyComponent},
  { path: '**', pathMatch: 'full', 
      component: ErrorComponent },
];

export function httpTranslatLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterHomeComponent,
    AboutComponent,
    BillerComponent,
    BlogsComponent,
    ContactUsComponent,
    ErrorComponent,
    HomeComponent,
    MerchantComponent,
    PartnersComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    WhatPayComponent,
    WhyPayComponent,
    ConsumerComponent,
    BlogDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslatLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
