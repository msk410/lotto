import React, {Component} from 'react';
import Results from "./Results"
import Game from "./Game"
export default class ResultsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            powerballNumbers: [],
            megaMillionsNumbers: [],
            cash4Life: [],
            nyLotto: [],
            take5: [],
            nyLottories: []
        };
    }

    async componentWillMount() {
        try {
            let lottoData = [];
            //powerball
            const response1 = await fetch(`https://data.ny.gov/resource/8vkr-v8vh.json`, {
                method: "GET",
            });
            let powerballData = await response1.json();
            let nums1 = [];
            powerballData.map((elem, index) => {
                let tempGame = new Game("Powerball", elem.draw_date, elem.winning_numbers.split(" ").splice(0,5),
                    elem.winning_numbers.split(" ")[5], elem.multiplier)
                nums1.push(tempGame);
            })

            //megamillions
            const response2 = await fetch(`https://data.ny.gov/resource/h6w8-42p9.json`, {
                method: "GET",
            });
            let megaMillionsData = await response2.json();
            let nums2 = [];
            megaMillionsData.map((elem, index) => {
                let tempGame = new Game("Mega Millions", elem.draw_date, elem.winning_numbers.split(" "),
                    elem.mega_ball, elem.multiplier)
                nums2.push(tempGame);
            })

            //cash 4 life
            const response3= await fetch(`https://data.ny.gov/resource/7pxf-c5iz.json`, {
                method: "GET",
            });
            let c4lData = await response3.json();
            let nums3 = [];
            c4lData.map((elem, index) => {
                let tempGame = new Game("Cash 4 Life", elem.draw_date, elem.winning_numbers.split(" "),
                    elem.cash_ball, "")
                nums3.push(tempGame);
            })
            const response4 = await fetch(`https://data.ny.gov/resource/etu4-7qqz.json`, {
                method: "GET",
            });
            let nyLotto = await response4.json();
            let nums4 = [];
            nyLotto.map((elem, index) => {
                let tempGame = new Game("New York Lotto", elem.draw_date, elem.winning_numbers.split(" "),
                    elem.bonus, "")
                nums4.push(tempGame);
            })
            const response5 = await fetch(`https://data.ny.gov/resource/hh4x-xmbw.json`, {
                method: "GET",
            });
            let take5 = await response5.json();
            let nums5 = [];
            take5.map((elem, index) => {
                let tempGame = new Game("Take 5", elem.draw_date, elem.winning_numbers.split(" "),
                    "", "")
                nums5.push(tempGame);
            })

            lottoData.push(nums2);
            lottoData.push(nums1);
            lottoData.push(nums4);
            lottoData.push(nums3);
            lottoData.push(nums5);

            this.setState({
                // powerballNumbers: nums1,
                // megaMillionsNumbers: nums2,
                // cash4Life: nums3,
                // nyLotto: nums4,
                // take5: nums5
                nyLottories: lottoData
            })
        }
        catch (err) {
            console.log(err);
        }

    }

    render() {

        return (
            <ul>
                {this.state.nyLottories.map((elem, index) => {
                    return <Results numbers={elem}/>
                })}

            </ul>
        )
    }
}
