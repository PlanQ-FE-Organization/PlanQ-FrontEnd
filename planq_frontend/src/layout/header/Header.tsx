import React from 'react';
import Logo from '../../assetss/logo/PlanqLogo.svg'; // 로고 이미지 경로에 맞게 수정

const Header: React.FC = () => {
    return (
        <header className="header" style={{ paddingBottom: '40px' }}>
            <img src={Logo} alt="PlanQ 로고" className="header__logo" />
        </header>
    );
};

export default Header;
