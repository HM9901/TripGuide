import { HFLayout } from '~/layouts';
import config from '~/config';

import Hotel from '~/pages/Hotel';
import Flight from '~/pages/Flight';
import Car from '~/pages/Car';

// Public routes
const publicRoutes = [
    { path: config.routes.hotel, component: Hotel },
    { path: config.routes.flight, component: Flight },
    { path: config.routes.car, component: Car, layout: HFLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
