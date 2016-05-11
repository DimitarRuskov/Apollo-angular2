import {bootstrap}          from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_PIPES} from '@angular/core';
import {ROUTER_PROVIDERS}   from '@angular/router';
import {HTTP_PROVIDERS}     from '@angular/http';

import {RootComponent}      from './root.component';
import {NotificationsService} from '../node_modules/angular2-notifications/components';

bootstrap(RootComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, NotificationsService]);
