import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { puplicRoutes } from './routers';
import { DefaultLayout } from './Combonent/Layouts';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {puplicRoutes.map((route, index) => {
                        const Page = route.combonent;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
