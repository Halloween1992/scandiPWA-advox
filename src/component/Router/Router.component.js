/* eslint-disable array-func/prefer-array-from */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
/* eslint-disable @scandipwa/scandipwa-guidelines/no-jsx-variables */
/* eslint-disable max-lines */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */

import {
    lazy
} from 'react';

import { Router as SourceRouter } from 'SourceComponent/Router/Router.component';
import { BEFORE_ITEMS_TYPE } from 'SourceComponent/Router/Router.config';

import {
    BARCOMPONENT
} from './Router.config';

import './Router.style';

export const BarComponent = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "cart" */ 'Component/Bar'));

export * from 'SourceComponent/Router/Router.component';
/** @namespace CounterApp/Component/Router/Component/withStoreRegex */
export const withStoreRegex = (path) => window.storeRegexText.concat(path);

/** @namespace CounterApp/Component/Router/Component */
export class Router extends SourceRouter {
     [BEFORE_ITEMS_TYPE] = [...this.BEFORE_ITEMS_TYPE,

         {
             component: <BarComponent />,
             position: 1,
             name: BARCOMPONENT
         }

     ];
}

export default Router;
