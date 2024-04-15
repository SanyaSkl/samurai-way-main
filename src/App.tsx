import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://cdn6.aptoide.com/imgs/5/d/1/5d187923c2f94bf506bc9444ddf02516_icon.png"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>

            </nav>
            <div className="content">
                <img
                    src="https://img-19.commentcamarche.net/wzKKufHO7dLH-WPFdXJHEmOmi7E=/1500x/smart/2d8c2b30aee345008ee860087f8bcdc9/ccmcms-commentcamarche/36120212.jpg"
                    alt="contentImg"/>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                </div>
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>

        </div>
    );
}

export default App;
