import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        console.log('Component Mount');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                this.setState({ albums: response.data });
            })
    }

    renderAlbums() {
        console.log("test");
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }

}

/*const AlbumList = () => {
    return (
        <View>
            <Text>Album List</Text>
        </View>
    )
    
}*/

export default AlbumList;
