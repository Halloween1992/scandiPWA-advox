import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { CategoryTreeType } from 'Type/Category.type';

import './CategoryTabel.style';

/** @namespace CounterApp/Component/CategoryTabel/Component */
export class CategoryTabelComponent extends PureComponent {
    static propTypes = {
        category: CategoryTreeType.isRequired,
        totalItems: PropTypes.number.isRequired
    };

    render() {
        const {
            category: { name, productCount },
            totalItems

        } = this.props;

        return (
            <div block="CategoryTabel">
                { `name:${name}` }
                { `productCount:${productCount}` }
                { `totalItems:${totalItems}` }
            </div>
        );
    }
}

export default CategoryTabelComponent;
