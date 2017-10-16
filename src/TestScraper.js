/**
 * Created by mkimg on 10/1/17.
 */

import * as $ from "jquery";
import Game from "./Game"
export default class TestScraper {
    texasGames = [];
    constructor() {
        this.getLottoTexas()
        this.getTexasTwoStep()
        //  this.getTexasTripleChance()
         
        // this.getAllOrNothing()
        console.log(this.texasGames)
    }

    async getTexasTripleChance() {
        let rawData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Texas_Triple_Chance/Winning_Numbers/') + '&callback=?', function(data){
            rawData = data;
        });

        let re2 = />\d\d\/\d\d\/\d\d\d\d</g
        let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g

        var m;
        var m1;

       do {
            m = re.exec(rawData);
            m1 = re2.exec(rawData);
           if (m && m1) {
        console.log("Texas triple chance")
                console.log(m1[0]);
                console.log(m[0]);
           }
        } while (m);



    }

    async getLottoTexas() {
        let myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Lotto_Texas/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });

         let re2 = />\d\d\/\d\d\/\d\d\d\d</g
         let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g

        let numbersRaw = '';
        let dateRaw = '';

        let lottoTexasData = [];

         do {
            let tempGame = new Game();
            tempGame.name = "Lotto Texas";
            numbersRaw = re.exec(myData);
            dateRaw = re2.exec(myData);
                if (numbersRaw && dateRaw) {
        
                    let d = new Date(dateRaw[0].slice(1,dateRaw[0].length-1));
                    let month = d.getMonth() + 1;
                    let date = d.getDate();

                    
                    month <= 9 ? month = "0" + (month).toString() : month = month;
                    date <= 9 ? date = "0" + (date).toString() : date = date
                    let formatedDate = d.getFullYear() + "-" + month + "-" + date + "Taaaaa"
                    
                    tempGame.date = formatedDate;
                    
                    let numsWithDash = numbersRaw[0].slice(4,numbersRaw[0].length);
                    let formattedNums = numsWithDash.split(" - ").join(" ");
                    tempGame.winningNumbers = formattedNums;
                    lottoTexasData.push(tempGame);
          }
        } while (numbersRaw && dateRaw);

        this.texasGames.push(lottoTexasData);

     }

    async getTexasTwoStep() {
        let myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Texas_Two_Step/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });


        let re2 = />\d\d\/\d\d\/\d\d\d\d</g
        let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+/g
        let bonusRe = /<td>[\d]+<\/td>/g
        //
        let dateRaw;
        let numbersRaw;
        let bonusNumberRaw;
        let texasTwoStepData = [];
        
         do {
            let tempGame = new Game();
            tempGame.name = "Texas Two Step";
            numbersRaw = re.exec(myData);
            dateRaw = re2.exec(myData);
            bonusNumberRaw = bonusRe.exec(myData)
             if (numbersRaw && dateRaw && bonusNumberRaw) {

                let d = new Date(dateRaw[0].slice(1,dateRaw[0].length-1));
                let month = d.getMonth() + 1;
                let date = d.getDate();
                month <= 9 ? month = "0" + (month).toString() : month = month;
                date <= 9 ? date = "0" + (date).toString() : date = date
                let formatedDate = d.getFullYear() + "-" + month + "-" + date + "Taaaaa"
                
                tempGame.date = formatedDate;
                let numsWithDash = numbersRaw[0].slice(4,numbersRaw[0].length);
                let formattedNums = numsWithDash.split(" - ").join(" ");
                tempGame.winningNumbers = formattedNums;
                let bonusNum = bonusNumberRaw[0].slice(4,bonusNumberRaw[0].length).split("<")[0]
                tempGame.bonus = bonusNum;
                texasTwoStepData.push(tempGame)
            }
        } while (numbersRaw && dateRaw && bonusNumberRaw);
        this.texasGames.push(texasTwoStepData);
    }

    async getAllOrNothing() {
        // let myData = ""
        // await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/All_or_Nothing/Winning_Numbers/') + '&callback=?', function (data) {
        //     myData = data;
        // });
        // // console.log(myData)
        //
        // let re2 = />\d\d\/\d\d\/\d\d\d\d</g
        // let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g
        // let nightOrEvening = /<td>Night|Evening|Day<\/td>/g
        // //
        // var m;
        // var m1;
        // var m2;
        // //
        // // do {
        // m = re.exec(myData);
        // m1 = re2.exec(myData);
        // m2 = nightOrEvening.exec(myData)
        // //     if (m && m1) {
        // console.log("All or Nothing")
        // console.log(m1[0]);
        // console.log(m[0]);
        // console.log(m2[0]);
        // //     }
        // // } while (m);
    }

}