// common
import {useRecoilState} from "recoil";

// recoil
import {activeState, openState, optionState, panelViewState} from "recoils/commonState";

export const usePanel = () => {
    const [isActive, setIsActive] = useRecoilState(activeState);
    const [, setOption] = useRecoilState(optionState);
    const [view, setView] = useRecoilState(panelViewState);

    /**
     * @param {*} target type 값
     * @param {*} setValue value 값
     * @desc dropdown 메뉴 클릭시, 해당 패널로 전환 됩니다.
     */
  const onChangePanel = (target) => {
    // 선택한 dropdown의 옵션값에 따라 type 정보를 담습니다.
    setOption((prev) =>({
      ...prev,
      title: target.title,
      type: target.type
    }));

    // 🐽 dropdown 옵션 값 클릭 시, 열림/펼침 동작을 제어합니다.
    // setIsOpen(!isOpen);
  }

  /**
   * @desc 활성화 된 메뉴 클릭시, 패널 화면 유지되며, 타 메뉴 클릭시, 패널 기본값으로 전환 됩니다.
   * @param {*} idx 각 메뉴의 index
   */
  const onChangeCurrentPanel = (idx) => {
    // 1) 최적화 패널인 경우(기본값 view === true)
    if (view) {
      // 2) 메뉴 활성화 유무에 따른 패널 전환 판단
      if (isActive.menuActive !== idx) {
         // 2-1) 활성화 메뉴가 아닌 경우, 패널 전환 (타 페이지로의 이동)
        setView(false);
      }
    }
    setIsActive((prev) => ({
      ...prev,
      menuActive: idx,
    }));
  }

  return {
    onChangePanel,
    onChangeCurrentPanel
  }
}