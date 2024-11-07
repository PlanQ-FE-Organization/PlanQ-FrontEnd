import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    userName: string;
    profileImg: string;
    streakDays: number;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, profileImg, streakDays }) => {
    const location = useLocation();

    const menuItems = [
        { name: '캘린더', icon: '📅', path: '/calendar' },
        { name: '성과 대시보드', icon: '📊', path: '/dashboard' },
        { name: '퀴즈 풀기', icon: '📝', path: '/solve-quiz' },
        { name: '퀴즈 모아보기', icon: '📚', path: '/quiz-collection' },
        { name: '성과 모아보기', icon: ' ',  path : '/achievement-collection'}
    ];

    return (
        <aside className= "sidebar" >
        {/* User profile section */ }
        < div className = "sidebar__profile" >
            <img src={ profileImg } alt = {`${userName} 프로필`} className = "sidebar__profile-img" />
            <div className="sidebar__user-info" >
                <span className="sidebar__user-name" > { userName } </span>
                    < span className = "sidebar__streak" > { streakDays }일 연속 학습 중 🔥</span>
            </div>
        </div>

{/* Sidebar menu items */ }
<nav className="sidebar__menu" >
{
    menuItems.map((item) => (
        <Link
            key= { item.name }
            to = { item.path }
            className = {`sidebar__menu-item ${location.pathname === item.path ? 'active' : ''}`}
    >
    <span className="sidebar__menu-icon" > { item.icon } </span>
        < span className = "sidebar__menu-text" > { item.name } </span>
            </Link>
        ))}
</nav>
    </aside>
  );
};

export default Sidebar;
