import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './color.css';

class Avatar extends Component {
    render() {
        return (
            <img src="https://pp.userapi.com/c621821/v621821469/1e7e4/nKv_kwjY49s.jpg"
                 className="Avatar Center"/>

        )
    }

}

class Profile extends Component {
    render() {
        return (
            <div className="row" style={{padding: 10}}>
                <div className="col-md-2">
                    <Avatar/>
                </div>
                <div className="col-md-9 CenterItem" style={{paddingTop: 3}}>
                    <div>
                        <p className="TextMedium" style={{marginBottom: 0}}>бАЗАРОВ кИРИЛЛ
                            лЕОНИДОВИЧ</p>
                        <p className="TextMedium textSubtitleColor" style={{marginTop: 0}}>
                            Владелец</p>
                    </div>
                </div>

            </div>
        )
    }
}

class RedButton extends Component {
    render() {
        return (
            <button className="Red-button btn Center">Создать документ</button>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2"><b className="Logo Center"><span
                    className="redColor">R</span>EACTIVE</b>
                </div>
                <div className="col-md-2"><RedButton/></div>
                <div className="col-md-5"/>
                <div className="col-md-3"><Profile/></div>
            </div>
        )
    }

}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="container-fluid">
                    <Header/>
                </div>
            </div>
        );
    }
}

export default App;
