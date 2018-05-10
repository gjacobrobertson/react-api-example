import { URLSearchParams } from 'url';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.URLSearchParams = URLSearchParams;
configure({ adapter: new Adapter() });
