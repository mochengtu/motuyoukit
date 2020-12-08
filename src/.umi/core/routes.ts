// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/lm259/Codes/PrivateKit/EggKit/ReactEgg/client/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/class/context/Search",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__context__Search' */'@/pages/class/context/Search.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/context/consumer",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__context__consumer' */'@/pages/class/context/consumer.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/context",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__context__index' */'@/pages/class/context/index.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/context/lists",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__context__lists' */'@/pages/class/context/lists.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/dva/Search",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__dva__Search' */'@/pages/class/dva/Search.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/dva",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__dva__index' */'@/pages/class/dva/index.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/dva/lists",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__dva__lists' */'@/pages/class/dva/lists.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__index' */'@/pages/class/index.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/lazy/demo",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__lazy__demo' */'@/pages/class/lazy/demo.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/lazy",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__lazy__index' */'@/pages/class/lazy/index.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/new",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__new' */'@/pages/class/new.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/class/old",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__class__old' */'@/pages/class/old.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/:id",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__id' */'@/pages/[id].tsx'), loading: LoadingComponent})
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
