// page
import { Map } from "layouts/map/Map";
import { Panel } from "layouts/panel/Panel";
import { OptimizationPanel } from "layouts/panel/optimization/OptimizationPanel";
import { SideMenu } from "layouts/sidemenu/SideMenu";

// style
import "styles/layouts/_page.scss";
import { useRecoilState } from "recoil";
import { panelViewState } from "recoils/commonState";

export const IntroPage = () => {
  const [view, setView] = useRecoilState(panelViewState);

  return (
    <div className="container">
      <div className="left">
        <SideMenu />
        {!view ? (
          <Panel setView={setView} />
        ) : (
          <OptimizationPanel setView={setView} />
        )}
      </div>
      <div className="right">
        <Map />
      </div>
    </div>
  );
};
