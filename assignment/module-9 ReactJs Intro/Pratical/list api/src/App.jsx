import React from 'react';
const App = () => {
    return (
        <>
            <div className="app">
                <h1>The "React Way" to Render a List</h1>
                <ul>
                    <li><input type='checkbox'/><a href='#'>Use Array.Map</a></li>
                    <li><input type='checkbox'/><a href='#'>Not a for loop</a></li>
                    <li><input type='checkbox'/><a href='#'>Give each item a unique key</a></li>
                    <li><input type='checkbox'/><a href='#'>Avoid using array index as the key</a></li>
                </ul>
            </div>
        </>
        );
    };
export default App;