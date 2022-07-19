import { Navigate, useRoutes } from 'react-router-dom';
import * as pages from '../pages'

export default function ConfigRoutes() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <pages.DashboardLayout />,
            children: [
                { path: 'accept-app', element: <pages.DashboardAcceptApp /> },
                { path: 'result', element: <pages.DashboardCurrentResult /> },
                { path: '404', element: <pages.NotFound /> },
            ],
        },
        { path: '/', element: <Navigate to="/dashboard/accept-app" /> },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}