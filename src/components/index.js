import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { alpha, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100vh',
    backgroundColor: alpha('#919EAB', 0.12),
}));

export default function DashboardLayout() {
    const [isMobile, setIsMobile] = useState(false);
    const funcSetIsMobile = () => {
        setIsMobile(!isMobile)
    }
    return (
        <RootStyle>
            <CssBaseline />
            <Sidebar isMobile={isMobile} funcSetIsMobile={funcSetIsMobile} />
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}
