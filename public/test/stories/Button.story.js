import {storiesOf, action} from '@kadira/storybook';
import Button from '../../src/components/Button'

storiesOf('Button', module)
    .add('with caption', () => (
        <Button>It's a button</Button>
    ));