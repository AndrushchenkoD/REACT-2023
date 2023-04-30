import AlbumsPage from "./pages/AlbumsPage";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";
import HomePage from "./pages/HomePage";
import {Link, Route, Routes} from "react-router-dom";

import Post from "./components/Post";

function App() {
    const bgB = {backgroundColor: 'blue'};
    return (
        <div>
            <div style={bgB}>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Albums'}>Albums</Link></li>
                    <li><Link to={'/Todos'}>Todos</Link></li>
                    <li><Link to={'/Comments'}>Comments</Link></li>
                </ul>
            </div>

            <div>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/Albums'} element={<AlbumsPage/>}/>
                    <Route path={'/Todos'} element={<TodosPage/>}/>
                    <Route path={'/Comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<Post/>}/>
                    </Route>

                </Routes>


            </div>
        </div>

    );
}

export default App;
