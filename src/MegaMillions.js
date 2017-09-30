/**
 * Created by mkimg on 9/29/17.
 */
import React, {Component} from 'react';

export default class MegaMillions extends Component {

    getDate() {
        let date = this.props.numbers.draw_date.split("T")[0];
        let d = new Date(date);
        return (d.getMonth() + 1) + "/" + (d.getDate() + 1) + "/" + d.getFullYear()
    }

    getNumbers() {
        let winningNumbers = this.props.numbers.winning_numbers.split(" ")
        return winningNumbers;
    }

    render() {
        return (
            <div>
                Winning numbers {this.getDate()}
                <br/>
                <div>
                </div>
            </div>
        )
    }
}