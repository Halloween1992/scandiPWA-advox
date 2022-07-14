import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { CategoryTreeType } from 'Type/Category.type';

import CategoryTabel from './CategoryTabel.component';

export const ProductListInfoDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/ProductListInfo/ProductListInfo.dispatcher'
);

export const CategoryDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/Category/Category.dispatcher'
);
/** @namespace CounterApp/Component/CategoryTabel/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
    category: _state.CategoryReducer.category,
    totalItems: _state.ProductListReducer.totalItems
});

/** @namespace CounterApp/Component/CategoryTabel/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({
    requestProductListInfo: (options) => ProductListInfoDispatcher.then(
        ({ default: dispatcher }) => dispatcher.handleData(_dispatch, options)
    ),
    requestCategory: (options) => CategoryDispatcher.then(
        ({ default: dispatcher }) => dispatcher.handleData(_dispatch, options)
    )
});

/** @namespace CounterApp/Component/CategoryTabel/Container */
export class CategoryTabelContainer extends PureComponent {
    static propTypes = {
        category: CategoryTreeType.isRequired,
        totalItems: PropTypes.number.isRequired,
        categoryIds: PropTypes.number,
        requestCategory: PropTypes.func.isRequired,
        requestProductListInfo: PropTypes.func.isRequired
    };

    static defaultProps = {
        categoryIds: -1
    };

    containerFunctions = {
        // getData: this.getData.bind(this)
    };

    containerProps() {
        const {
            category,
            totalItems

        } = this.props;

        return {
            category,
            totalItems
        };
    }

    requestCategory() {
        const {
            categoryIds,
            requestCategory
        } = this.props;

        requestCategory({
            categoryIds
        });
    }

    render() {
        return (
            <CategoryTabel
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabelContainer);
