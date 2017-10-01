/**
 * Created by mkimg on 9/30/17.
 */
import React, {Component} from 'react';

export default class NyLotto extends Component {

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
                New York Lotto
                Winning numbers {this.getDate()}
                <br/>
                <div>
                    {this.getNumbers().map((elem, index) => {
                        if (index < 5) {
                            return <div style={{
                                'background': 'white', 'display': 'inline-block', 'width': '20px', 'height': 'auto',
                                'border': '1px solid black', 'borderRadius': '50%', 'padding': "2px"
                            }}>
                                {elem}
                            </div>
                        }
                    })}
                    <div style={{
                        'background': 'red', 'width': '18px', 'height': 'auto',
                        'border': '1px solid black', 'borderRadius': '50%', 'display': 'inline-block'
                    }}>
                        {this.props.numbers.bonus}
                    </div>
                </div>
            </div>
        )
    }
}
