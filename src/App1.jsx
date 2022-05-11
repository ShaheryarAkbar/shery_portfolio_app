import React from 'react';
import Card from './Cards';
// import Sdata from './Sdata';
import img1 from './images/admin-dashboard-app.PNG';
import img2 from './images/admin-panel-dashboard-app.PNG';
import img3 from './images/Awesome-Github-Profile.PNG';
import img4 from './images/Daily-Quran-Verse-app.PNG';
import img5 from './images/Image-Gallery.PNG';
import img6 from './images/Notes-Keep-App.PNG';

const App = () => (
    <div>
    <h1 className="heading_style">Shaheryar Akbar's Portfolio</h1>
            {/* {
                Sdata.map((val, ind) => {
                    return <Card
                        key = {ind}
                        title = {val.title}
                        imgsrc = {val.imgsrc}
                        link = {val.link}
                    />
                })
            } */}
            <Card
                title = {"Admin-Dashboard-App"}
                imgsrc = {img1}
                link = {"https://shaheryarakbar.github.io/react_admin_panel/"}
            />
            <Card
                title = {"Admin-Panel-Dashboard-App"}
                imgsrc = {img2}
                link = {"https://shaheryarakbar.github.io/react_admin_panel_dashboard/"}
            />
            <Card
                title = {"Awesome-Github-Profile-App"}
                imgsrc = {img3}
                link = {"https://shaheryarakbar.github.io/awesome-github-profile/"}
            />
            <Card
                title = {"Daily-Quran-Verse-App"}
                imgsrc = {img4}
                link = {"https://islamstatus360.github.io/daily-quran-verse/"}
            />
            <Card
                title = {"Image-Gallery-App"}
                imgsrc = {img5}
                link = {"https://shaheryarakbar.github.io/imagegallery/"}
            />
            <Card
                title = {"Notes-Keep-App"}
                imgsrc = {img6}
                link = {"https://shaheryarakbar.github.io/react_note_keep_app/"}
            />
    </div> 
);

export default App;