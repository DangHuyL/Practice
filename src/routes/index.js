import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Live from '~/Pages/Live';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import { HeaderOnly } from '~/Combonent/Layouts';

const puplicRoutes = [
    { path: '/', combonent: Home },
    { path: '/following', combonent: Following },
    { path: '/live', combonent: Live },
    { path: '/profile', combonent: Profile },
    { path: '/upload', combonent: Upload, layout: HeaderOnly },
    { path: '/search', combonent: Search, layout: null },
];

const privaticeRoutes = [];

export { puplicRoutes, privaticeRoutes };
