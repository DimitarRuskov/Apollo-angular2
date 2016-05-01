import {bootstrap}          from 'angular2/platform/browser';
import {provide, PLATFORM_PIPES} from 'angular2/core';
import {ROUTER_PROVIDERS}   from 'angular2/router';
import {HTTP_PROVIDERS}     from 'angular2/http';

import {RootComponent}      from './root.component';
import {TranslatePipe}      from './pipes/translate.pipe'
import {NotificationsService} from '../node_modules/angular2-notifications/components';

bootstrap(RootComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, NotificationsService, [provide(PLATFORM_PIPES, {useValue: [TranslatePipe], multi: true})]]);
