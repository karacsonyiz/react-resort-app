import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello'}
class RoomProvider extends Component {
    /*
    constructor() {
        super();
        this.state = { data: [] };
      }
      */

    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

    /*
    componentDidMount(){
        let rooms = this.formatData(items)
        console.log(rooms)
    }
    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields,images,id}
            return room;
        });
        return tempItems;
    }

    */

    async componentDidMount() {
        const response = await fetch(`http://localhost:8080/api/rooms`);
        const json = await response.json();
        //this.setState({ data: json });

        let rooms = this.formatData({data: json})
        let featuredRooms = rooms.filter(room => room.featured === true);
        console.log(featuredRooms)
        this.setState({
            rooms,featuredRooms,sortedRooms:rooms,loading:false
        })
      }

      formatData(items){
          let tempItems = items.data.map(item =>{
              let id = item.id;
              let image = item.imgUrl
              let room ={...item}
              return room;
          })
          return tempItems;
      }


    render() {
        return (
        <RoomContext.Provider value={{...this.state}}>{this.props.children}</RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomContext, RoomConsumer}