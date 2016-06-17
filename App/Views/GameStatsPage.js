//http://data.nba.com/data/10s/json/cms/noseason/game/${gameDate}/${gameId}/boxscore.json

import React, {Component,} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

import ScrollableTabView, {
    DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import TeamMap from '../Utilities/TeamMap';
import GameStatsTeam from './GameStatsTeam';

class GameStatsPage extends React.Component {

    constructor(props){
        super(props);
    }

    // componentWillMount(){
    //     this.getGameStats();
    // }
    //
    // getGameStats(){
    //     var game = this.props.game;
    //     var date = game.date;
    //     var gameID = game.id;
    //     var url = 'http://data.nba.com/data/10s/json/cms/noseason/game/' + date + '/' + gameID + '/boxscore.json';
    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((jsonResponse) => {
    //         console.log(jsonResponse);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

    render(){
        var game = this.props.game;
        return(
            <View style={styles.main}>
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar style={{marginTop: 62, backgroundColor: '#0288D1', borderColor: '#0288D1'}}/>}
                    tabBarActiveTextColor='#FFFFFF'
                    tabBarInactiveTextColor='#e5e5e5'
                    tabBarUnderlineColor='#b3dbf1'
                >
                    <GameStatsTeam tabLabel='Teams' game={game}/>
                    <Text tabLabel='Players'> there </Text>
                </ScrollableTabView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    main: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FCFCFC',
    }
});

module.exports = GameStatsPage;