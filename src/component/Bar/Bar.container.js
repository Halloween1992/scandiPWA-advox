import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import BarComponent from './Bar.component';

/** @namespace CounterApp/Component/Bar/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    counter: state.CounterReducer.counter
});

/** @namespace CounterApp/Component/Bar/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace CounterApp/Component/Bar/Container */
export class BarContainer extends PureComponent {
    static propTypes = {
        counter: PropTypes.number

    };

    static defaultProps = {

        counter: 0
    };

    containerProps() {
        const {
            counter

        } = this.props;

        return {

            counter
        };
    }

    render() {
        return (
            <BarComponent
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer);
