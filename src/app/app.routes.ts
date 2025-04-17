import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth/login', component: LoginPageComponent },
    { path: 'auth/register', component: RegisterPageComponent },
    {
        path: 'search',
        component: SearchPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'video/:id',
        component: VideoPageComponent,
        canActivate: [authGuard]
    },
    { path: '**', redirectTo: 'auth/login' }
];
