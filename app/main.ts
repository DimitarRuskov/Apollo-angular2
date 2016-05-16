import {bootstrap}          from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_PIPES} from '@angular/core';
import {ROUTER_PROVIDERS}   from '@angular/router-deprecated';
import {HTTP_PROVIDERS}     from '@angular/http';

import {RootComponent}      from './root.component';
import {AuthService}        from './shared/services/auth.service';
import {UserService}        from './shared/services/user.service';

bootstrap(RootComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, AuthService, UserService]);
