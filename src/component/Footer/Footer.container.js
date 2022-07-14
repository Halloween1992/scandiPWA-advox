/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/boolean-prop-naming */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FooterContainer as SourceFooterContainer } from 'SourceComponent/Footer/Footer.container';
import { decrement, increment } from 'Store/Counter/Counter.action';

import Footer from './Footer.component';
/** @namespace CounterApp/Component/Footer/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    copyright: state.ConfigReducer.copyright,
    device: state.ConfigReducer.device,
    newsletterActive: state.ConfigReducer.newsletter_general_active
});

/** @namespace CounterApp/Component/Footer/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});
/** @namespace CounterApp/Component/Footer/Container */
export class FooterContainer extends SourceFooterContainer {
    static propTypes = {
        ...this.propTypes,
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    };

    static defaultProps = {
        counter: 0,
        ...this.defaultProps
    };

    containerFunctions = {
        ...this.containerFunctions,
        incrementHandler: this.incrementHandler.bind(this),
        decrementHandler: this.decrementHandler.bind(this)
    };

    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement();
    }

    render() {
        return (
             <Footer
               { ...this.containerProps() }
               { ...this.containerFunctions }
             />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
