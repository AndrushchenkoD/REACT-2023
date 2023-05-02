import React, {Component} from 'react';
import Posts from "./components/Posts";
import Comments from "./components/Comments";


class App extends Component {


    render() {
        return (
            <div>
               <Posts/>
                <hr/>
               <Comments/>
            </div>
        );
    }
}

export default App;
