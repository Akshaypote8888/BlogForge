import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Layout } from './Pages/layout/layout';
import { Dashboard } from './Pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

import { Posts } from './Pages/posts/posts';
import { Categories } from './Pages/categories/categories';
import { Authors } from './Pages/authors/authors';
import { Account } from './Pages/account/account';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component: Login
    },
    {
        path:'',
        component: Layout,
        canActivate:[authGuard],
        children:[
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'posts',
                component: Posts
            },
            {
                path: 'categories',
                component: Categories
            },
            {
                path: 'authors',
                component: Authors
            },
            {
                path: 'account',
                component: Account
            },
        ]
    }
];
