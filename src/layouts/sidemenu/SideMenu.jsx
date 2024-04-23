// common
import { useRecoilValue } from "recoil";

// style
import "styles/layouts/_sidemenu.scss";

// assets
import logoImage from "assets/images/logo.png";

// components
import { Button } from "components/atoms/button/Button";

// constants
import { sideMenuItem } from "constants/sidemenu/sideMenuConst";

// function
import { activeState } from "recoils/commonState";
import { usePanel } from "hooks/panel/usePanel";

export const SideMenu = ({ icon, onClick }) => {
  const isActive = useRecoilValue(activeState);
  const { onChangeCurrentPanel } = usePanel();

  return (
    <div className="side-menu-wrap">
      <div className="side-menu-inner">
        <div className="side-menu-header">
          <h1 className="logo">
            <a href="#/" className="logo_link">
              <img src={logoImage} alt="iNavi TMS" className="logo_img" />
              iNavi TMS
            </a>
          </h1>
        </div>
        <div className="side-menu-container">
          <div className="side-menu-scroll">
            <ul className="side-menu">
              {sideMenuItem.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={
                      isActive.menuActive === idx
                        ? "side-menu-item active"
                        : "side-menu-item"
                    }
                  >
                    <Button
                      icon={item.icon}
                      onClick={() => {
                        onChangeCurrentPanel(idx);
                      }}
                    >
                      {item.title}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
