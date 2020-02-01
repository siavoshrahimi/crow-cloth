import React from "react";
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import {updateCollections} from "../../redux/shop/shopAction";

import {firestore,convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";


import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionOverview from '../../components/collection-overview/collectionOverview';
import CollectionPage from "../collection/collection";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);



class ShopPage extends React.Component{
    state={isLoading: true};
     unsubscribeFromSnapshot = null;

     componentDidMount() {
         const {updateCollections} = this.props;
         const collectionRef = firestore.collection('collections');

         this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
             const collectionMap = convertCollectionsSnapshotToMap(snapshot);
             updateCollections(collectionMap);
             this.setState({isLoading:false});
         })
     }
     componentWillUnmount() {
         this.unsubscribeFromSnapshot.unsubscribe();
     }

    render() {
        const {match} = this.props;
        const {isLoading} = this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={props => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />}
                />
                <Route path={`${match.path}/:collectionId`}
                       render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}
                />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})




export default connect(null,mapDispatchToProps)(ShopPage);