import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './Bar.style';

/** @namespace CounterApp/Component/Bar/Component */
export class BarComponent extends PureComponent {
    static propTypes = {
        counter: PropTypes.number.isRequired
    };

    render() {
        const { counter } = this.props;
        return (
            <div block="Bar">
                <p>{ `Counter: ${counter}` }</p>
            </div>
        );
    }
}

export default BarComponent;
