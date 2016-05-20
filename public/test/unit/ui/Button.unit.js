import Button from '../../../src/components/Button'
import {shallow} from 'enzyme';

describe("UNIT / Components / <Button />", ()=> {

    const defaultProps = {
        children: "It's a button"
    };

    const setup = function (props = {}) {

        _.defaultsDeep(props, defaultProps);

        let wrapper = shallow(<Button {...props} />);

        return {
            props,
            wrapper
        };
    };

    it(`should have caption which was passed as a children`, () => {

        const {wrapper} = setup();

        expect(wrapper.find('button').text()).to.eql("It's a button");

    });

});