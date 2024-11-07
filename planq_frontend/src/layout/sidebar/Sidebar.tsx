import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/layout/_sidebar.scss'; // SCSS 파일 경로에 맞게 수정
import {ReactComponent as SidebarCalendar } from "../../assetss/sidebar/SidebarCalendar.svg"
import {ReactComponent as SidebarAchievementDashboard } from "../../assetss/sidebar/SidebarAchievementDashboard.svg"
import {ReactComponent as SidebarCollectionAchievement } from "../../assetss/sidebar/SidebarCollectionAchievement.svg"
import {ReactComponent as SidebarCollectionQuiz } from "../../assetss/sidebar/SidebarCollectionQuiz.svg"
import {ReactComponent as SidebarSolveQuiz } from "../../assetss/sidebar/SidebarSolveQuiz.svg"
import Header from '../header/Header'; // 헤더 컴포넌트 import


interface SidebarProps {
    userName: string;
    profileImg: string;
    streakDays: number;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, profileImg, streakDays }) => {
    const location = useLocation();

    const menuItems = [
        { name: '캘린더', icon: <SidebarCalendar/>, path: '/calendar' },
        { name: '성과 대시보드', icon: <SidebarAchievementDashboard/>, path: '/dashboard' },
        { name: '퀴즈 풀기', icon: <SidebarSolveQuiz/>, path: '/solve-quiz' },
        { name: '퀴즈 모아보기', icon: <SidebarCollectionQuiz/>, path: '/quiz-collection' },
        { name: '성과 모아보기', icon: <SidebarCollectionAchievement/>,  path : '/achievement-collection'}
    ];

    return (
      <aside className="_sidebar">
          <Header/>
        <div className="_sidebar__profile">
          <img
            src={profileImg}
            alt={`${userName} 프로필`}
            className="_sidebar__profile-img"
          />
          <div className="_sidebar__profile__user-info">
            <span className="_sidebar__profile__user-info-name">
              {userName}
            </span>
            <span className="_sidebar__profile__user-info-streak">
              {streakDays}일 연속 학습 중 🔥
            </span>
          </div>
        </div>

        <nav className="_sidebar__menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`_sidebar__menu-item ${location.pathname === item.path ? "active" : ""}`}
            >
              <span className="_sidebar__menu-item-icon"> {item.icon} </span>
              <span className="_sidebar__menu-item-text"> {item.name} </span>
            </Link>
          ))}
        </nav>
      </aside>
    );
};

export default Sidebar;
