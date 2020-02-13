import {connect} from 'react-redux';
import {compose} from "redux";

import {createStructuredSelector} from "reselect";
import {selectCollectionIsLoaded} from "../../redux/shop/shopSelector";

import CollectionPage from './collection';
import withSpinner from "../../components/with-spinner/withSpinner";


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage);


export default CollectionPageContainer;