import React, {Component} from 'react';
import Powerball from "./Powerball";
import MegaMillions from "./MegaMillion";
export default class ResultsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            powerballNumbers: [],
            megaMillionsNumbers: []
        };
    }

    async componentWillMount() {
        try {
            const response1 = await fetch(`https://data.ny.gov/resource/8vkr-v8vh.json`, {
                method: "GET",
            });
            let powerballData = await response1.json();
            let nums1 = [];
            powerballData.map((elem, index) => {
                nums1.push(elem);
            })

            const response2 = await fetch(`https://data.ny.gov/resource/h6w8-42p9.json`, {
                method: "GET",
            });
            let megaMillionsData = await response2.json();
            let nums2 = [];
            megaMillionsData.map((elem, index) => {
                nums2.push(elem);
            })
            this.setState({
                powerballNumbers: nums1,
                megaMillionsNumbers: nums2
            })
        }
        catch (err) {
            console.log(err);
        }
        alert(this.state.megaMillionsNumbers.length)
    }

    getPowerballNumbers() {
        if (this.state.powerballNumbers.length > 0) {
            return <Powerball numbers={this.state.powerballNumbers["0"]}/>
        }
    }

    getMegaMillionsNumbers() {
        if (this.state.megaMillionsNumbers.length > 0) {
            return <MegaMillions numbers={this.state.megaMillionsNumbers["0"]}/>
        }
    }


    render() {

        return (
            <ul>
                {this.getMegaMillionsNumbers()}
                {this.getPowerballNumbers()}

            </ul>
        )
    }
}
