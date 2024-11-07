import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar'; // Sidebar 컴포넌트 import
// import './Layout.css';

const Layout: React.FC = () => {
    return (
        <div className="layout">
            {/* Sidebar 영역 */}
            <Sidebar
                userName="사용자 이름"
                profileImg="/path/to/profile.jpg"
                streakDays={20}
            />

            {/* 메인 콘텐츠 영역 */}
            <div className="layout__content">
                {/* Header 영역 */}

                {/* Outlet으로 하위 페이지 내용 렌더링 */}
                <main className="layout__main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
