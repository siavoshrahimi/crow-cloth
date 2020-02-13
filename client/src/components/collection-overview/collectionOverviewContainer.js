import {connect} from 'react-redux';
import {compose} from "redux";

import withSpinner from "../with-spinner/withSpinner";
import collectionOverview from "./collectionOverview";

import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shopSelector";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
    }
)

const collectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(collectionOverview);

export default collectionOverviewContainer;