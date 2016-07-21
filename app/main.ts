import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {RootComponent} from './root.component';

bootstrap(RootComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()])
 .catch((err: any) => console.error(err));
