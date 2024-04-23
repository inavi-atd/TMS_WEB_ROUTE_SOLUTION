import {useRecoilState} from "recoil";
import {randomColorState} from "recoils/commonState";

const useRandomColor = () => {
  const [, setRandomColor] = useRecoilState(randomColorState);

  /**
   * @desc '최적화 실행' 버튼 클릭시 동작. 리스트 및 지도 내 클러스터링의 랜덤 색상 변경 함수
   * @param {*} el 최적화 실행 데이터 전체 리스트
   * @returns  리스트 뱃지 및 지도 내 클러스터링 색상 변경
   */
  const onChangeRandomColor = (el) => {
    // let colors = [
    //   "#7ca6c1",
    //   "#bd6b85",
    //   "#be876d",
    //   "#6f6cc1",
    //   "#c0b16d",
    //   "#83c1a7",
    //   "#b46cc2",
    //   "#be7b6d",
    //   "#82c192",
    //   "#bf9c6d",
    // ];
    let colors = [];
    for (let i = 0; i < el.length; i++) {
      const randomColor = `hsla(${Math.random() * 360}, 100%, 30%, .6)`;
      colors.push(randomColor);
    }
    return setRandomColor(colors);
  }
  return {
    onChangeRandomColor
  }
}

export default useRandomColor;