import { configure } from 'enzyme'; // enzyme 설정 함수 configure()를 임포트합니다.
import Adapter from 'enzyme-adapter-react-16.3';    // 리액트 16.3 생명주기 라이브러리를 임포트합니다.

configure({ adapter: new Adapter() });  // 테스트 환경에 enzyme을 새 버전 생명주기 함수와 함께 추가합니다.