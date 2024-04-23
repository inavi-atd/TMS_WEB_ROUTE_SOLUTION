import { atom } from "recoil";

/**
 * @desc 지도 객체 변수
 * @default {Object}
 * */
export const mapState = atom({
  key: "mapState",
  default: null,
});
/**
 * @desc 최적화 옵션 설정 타이틀값 반환 변수
 * @default {Object}
 */
export const optionState = atom({
  key: "optionState",
  default: { title: "시간 최적화", type: "time" }
});
/**
 * @desc 활성화 유무 판단 변수
 * @default {Object}
 */
export const activeState = atom({
  key: "activeState",
  default: {
    menuActive: 0,
    positionActive: 0,
    timeActive: 0,
    inputVehicleActive: 0,
    optimizationCriteriaActive: 0,
  },
});
/**
 * @desc dropdown 열기/닫기 동작 판단 변수
 * @default {Boolean}
 */
export const openState = atom({
  key: "openState",
  default: false
});

/**
 * @desc 에러 메세지를 담는 변수
 * @default {String}
 */
export const errorMessageState = atom({
  key: "errorMessageState",
  default: ""
});

/**
 * @desc 랜덤 색상값을 담는 변수
 * @default {Object}
 */
export const randomColorState = atom({
  key: "randomColorState",
  default: {}
});

/**
 * @desc 패널 전환 변수
 * @default {Boolean}
 */
export const panelViewState = atom({
  key: "panelViewState",
  default: false
})