import Vuex from 'vuex'

import * as api from '../lib/api';
import Point from '../lib/Point';
import md5 from 'crypto-js/md5';

const state = {
	points : [],
    isFetching : false,
    numPoints: null
};

const getters = {
    points : ( state ) => state.points,
    isFetching : ( state ) => state.isFetching,
    amount : ( state ) => state.numPoints,
    amountFetched: ( state ) => state.points.length
};

const mutations = {
	startFetching : ( state ) => state.isFetching = true,
    stopFetching : ( state ) => state.isFetching = false,
    setAmount: ( state, amount ) => state.numPoints = amount,
	addPoint : ( state, point ) => state.points.push( point )
};

const actions = {
	fetch : async ( context ) => {
        context.commit( 'startFetching' );

        context.commit( 'setAmount', api.getAmountPoints() );
        
        const it = api.getPoints();
       
        // We could map the x,y coordinates
        // to the screen coords already
        // but then there would be not
        // enough to do for the other compontent ;)
        for await ( const [ x, y ] of it ) {
            const p = Point.make({
                id: md5(`${x}${y}`).toString(),
                x: x,
                y: y
            });
            context.commit( 'addPoint', p );
        }

        context.commit( 'stopFetching' );
	}
};

export default new Vuex.Store( {
	state,
	getters,
	mutations,
	actions,
} );