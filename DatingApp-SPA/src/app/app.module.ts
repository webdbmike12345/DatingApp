// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { RouterModule } from '@angular/router';
// import { JwtModule } from '@auth0/angular-jwt';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';
// import { AuthService } from './_services/auth.service';
// import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';
// import { ErrorInterceptorProvider,ErrorInterceptor } from './_services/error.interceptor';
// import { MemberListComponent } from './members/member-list/member-list.component';
// import { ListsComponent } from './lists/lists.component';
// import { MessagesComponent } from './messages/messages.component';
// import { appRoutes } from './routes';
// import { MemberCardComponent } from './members/member-card/member-card.component';

// export function tokenGetter(){
//    return localStorage.getItem('token');
// }

// // 'localhost:5000/api/auth'
// @NgModule({
//    declarations: [
//       AppComponent,
//       NavComponent,
//       HomeComponent,
//       RegisterComponent,
//       MemberListComponent,
//       ListsComponent,
//       MessagesComponent,
//       MemberCardComponent
//    ],
//    imports: [
//       BrowserModule,
//       HttpClientModule,
//       FormsModule,
//       BrowserAnimationsModule,
//       BsDropdownModule.forRoot(),
//       RouterModule.forRoot(appRoutes),
//       JwtModule.forRoot({
//          config: {
//             tokenGetter,
//             whitelistedDomains: ['localhost:5000'],
//             blacklistedRoutes: []
//          }
//       })
//    ],
//    providers: [
//       AuthService,
//       ErrorInterceptor
//    ],
//    bootstrap: [
//       AppComponent
//    ]
// })
// export class AppModule { }

import { AuthService } from './_services/auth.service';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider, ErrorInterceptor } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
 
 
export function tokenGetter() {
   return  localStorage.getItem('token');
 }


// export class CustomHammerConfig extends HammerGestureConfig {
//    overrides = {
//      pinch: { enable: false },
//      rotate: { enable: false }
//    };
//  }
// ,
//       { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      BrowserAnimationsModule,
      NgxGalleryModule,
      FileUploadModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      ErrorInterceptor,
      AlertifyService,
      AuthGuard,
      PreventUnsavedChanges,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }