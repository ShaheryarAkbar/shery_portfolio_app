import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

const App = () => (
    <div>
    <h1 className="heading_style">List of Netflix Series 2021</h1>
    {Sdata.map((val) => {
        return(
            <Card
                key = {val.id}
                sname = {val.sname}
                imgsrc = {val.imgsrc}
                title =  {val.title}
                link = {val.link}
            />
        );
    })}
    </div> 
);

export default App;