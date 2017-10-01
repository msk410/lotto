
import React, {Component} from 'react';

export default class Results extends Component {

    getDate() {
        let date = this.props.numbers[0].date.split("T")[0];
        let d = new Date(date);
        return (d.getMonth() + 1) + "/" + (d.getDate() + 1) + "/" + d.getFullYear()
    }

    render() {
        return (
            <div>
                {this.props.numbers[0].name}  {this.getDate()}
                <br/>
                <div>
                    {this.props.numbers[0].winningNumbers.map((elem, index) => {
                        return <div style={{
                            'background': 'white', 'display': 'inline-block', 'width': '20px', 'height': 'auto',
                            'border': '1px solid black', 'borderRadius': '50%', 'padding': "2px"
                        }}>
                            {elem[0] === "0" ? elem[1] : elem}
                        </div>

                    })}
                    {this.props.numbers[0].bonus.length != 0 ? <div style={{
                        'background': 'red', 'width': '20px', 'height': 'auto',
                        'border': '1px solid black', 'borderRadius': '50%', 'display': 'inline-block'
                    }}>
                        {this.props.numbers[0].bonus[0] === "0" ? this.props.numbers[0].bonus[1] : this.props.numbers[0].bonus}
                    </div> : ""}
                    {this.props.numbers[0].extra.length !==0 ? (this.props.numbers[0].extra[0] === "0" ? " x " + this.props.numbers[0].extra[1] : " x " + this.props.numbers[0].extra) : ""}
                </div>
            </div>
        )
    }
}
