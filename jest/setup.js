import { configure as configureEnzyme } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configureEnzyme({ adapter: new EnzymeAdapter() });
