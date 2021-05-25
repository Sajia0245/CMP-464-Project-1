import {Component} from "react";
import myImage from '../images/sajia.jpeg';
export default class Home extends Component {
    render() {
        return <>
        <h3>Sajia</h3>
            <img src={myImage} className="App-logo" alt="logo" />
        </>;
    }
}