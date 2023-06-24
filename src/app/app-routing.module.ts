import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { MessageComponent } from './message/message.component';
import { UsermessageComponent } from './usermessage/usermessage.component';
import { MypageComponent } from './mypage/mypage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PersonalProfileComponent,
  },
  {
    path: 'saklineheem',
    component: PersonalProfileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'message',
    component: MessageComponent,
  },
  {
    path: 'Allmessage',
    component: UsermessageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'myPage',
    component: MypageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
