import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsermessageComponent } from './usermessage/usermessage.component';
import { MypageComponent } from './mypage/mypage.component';
import { LoginComponent } from './login/login.component';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PersonalProfileComponent,
    AboutComponent,
    MessageComponent,
    UsermessageComponent,
    MypageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    ToastrService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
