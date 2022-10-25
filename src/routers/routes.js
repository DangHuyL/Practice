import routes from '~/config/routes';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Live from '~/Pages/Live';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import { HeaderOnly } from '~/Combonent/Layouts';

const puplicRoutes = [
    { path: routes.Home, combonent: Home },
    { path: routes.Following, combonent: Following },
    { path: routes.Live, combonent: Live },
    { path: routes.Profile, combonent: Profile },
    { path: routes.Upload, combonent: Upload, layout: HeaderOnly },
    { path: routes.Search, combonent: Search, layout: null },
];

const privaticeRoutes = [];

export { puplicRoutes, privaticeRoutes };
