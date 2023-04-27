import { Route } from "react-router-dom";

import {lazy} from 'react';

export const Todo=lazy(()=>import('../src/Todo') )

export const commonRoutes=[{name:'Todo',path:'/todo',component:Todo}]