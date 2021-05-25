import {Component} from "react";
import resume from '../../download/resume.pdf';
export default class About extends Component {
    render() {
        return <>
            <h3>My name is Sajia Sulaiman and I have finished my bachelor degree from Lehman college in 2021 with 3.60 gpa.
                My hobbies is explore new places, watching movies, playing games and learn to new things </h3>
            <div>
                <a href={resume} download="resume.pdf"> Download Here </a>
            </div>
        </>

    }
}
