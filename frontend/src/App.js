

import React from 'react';
import './App.css';


class App extends React.Component {

    constructor(props) {
      super(props);
        this.state = {
            todoList:[],
            activeItem: {
                id:null,
                title:'',
                completed:false,
            },
            editing: false,
        }
        // bind
        this.fetchTasks = this.fetchTasks.bind(this)
    };

    componentWillMount(){
        this.fetchTasks()
    }

    // Make an api call and render data
    fetchTasks() {
        console.log('Fetching...')
    }

    render() {

    return(
        <div className="container">
            <div id="task-container">
               <form id="form" >
                    <div className="flex-wrapper">

                        <div style={{flex: 6}}>
                            <input className="form-control" id="title" type="text" placeholder="Add task... " />
                        </div>

                        <div style={{flex: 1}}>
                            <input className="btn btn-warning" id="title" name="Add" type="submit" />
                        </div>

                    </div>
               </form>
            </div>
        </div>
    )
    }
}

export default App;
