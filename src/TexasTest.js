/**
 * Created by mkimg on 10/1/17.
 */

import * as $ from "jquery";
import Game from "./Game"
export default class TestScraper {
    

     async getAllData() {
        let texasGames = [];
  
        let rawData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Texas_Triple_Chance/Winning_Numbers/') + '&callback=?', function(data){
            rawData = data;
        });

        let re2 = />\d\d\/\d\d\/\d\d\d\d</g
        let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g

        let numbersRaw;
        let dateRaw;
        let texasTripleChanceData = [];
       do {
           let tempGame = new Game();
           tempGame.name = "Texas Triple Chance"
            numbersRaw = re.exec(rawData);
            dateRaw = re2.exec(rawData);
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
            tempGame.winningNumbers = formattedNums.split(" ");
            texasTripleChanceData.push(tempGame);
           }
        } while (numbersRaw && dateRaw);
         texasGames.push(texasTripleChanceData);
       // return texasTripleChanceData;

        

        let myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Lotto_Texas/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });

        re2 = />\d\d\/\d\d\/\d\d\d\d</g
        re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g

        numbersRaw = '';
        dateRaw = '';

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
                    tempGame.winningNumbers = formattedNums.split(" ");
                    lottoTexasData.push(tempGame);
          }
        } while (numbersRaw && dateRaw);

        texasGames.push(lottoTexasData);
     
        myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Texas_Two_Step/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });


        re2 = />\d\d\/\d\d\/\d\d\d\d</g
        re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+/g
        let bonusRe = /<td>[\d]+<\/td>/g
        
        dateRaw;
        numbersRaw;
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
                tempGame.winningNumbers = formattedNums.split(" " );
                let bonusNum = bonusNumberRaw[0].slice(4,bonusNumberRaw[0].length).split("<")[0]
                tempGame.bonus = bonusNum;
                texasTwoStepData.push(tempGame)
            }
        } while (numbersRaw && dateRaw && bonusNumberRaw);
        texasGames.push(texasTwoStepData);
      
         myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/All_or_Nothing/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });
        let allOrNothingData = [];
        
         re2 = />\d\d\/\d\d\/\d\d\d\d</g
         re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g
        let nightOrEvening = />Night<|>Evening<|>Day<|>Morning</g
        //
         numbersRaw;
         dateRaw;
        var gameNameRaw;
        //
        do {
        let tempGame = new Game();
        tempGame.name = "All or Nothing ";
        numbersRaw = re.exec(myData);
        dateRaw = re2.exec(myData);
        gameNameRaw = nightOrEvening.exec(myData)
        if (numbersRaw && dateRaw && gameNameRaw) {
            let d = new Date(dateRaw[0].slice(1,dateRaw[0].length-1));
            let month = d.getMonth() + 1;
            let date = d.getDate();
            month <= 9 ? month = "0" + (month).toString() : month = month;
            date <= 9 ? date = "0" + (date).toString() : date = date
            let formatedDate = d.getFullYear() + "-" + month + "-" + date + "Taaaaa"
            
            tempGame.date = formatedDate;
            tempGame.name += gameNameRaw[0].slice(1, gameNameRaw[0].length-1);
            let numsWithDash = numbersRaw[0].slice(4,numbersRaw[0].length);
            let formattedNums = numsWithDash.split(" - ").join(" ");
            tempGame.winningNumbers = formattedNums.split(" ");

            allOrNothingData.push(tempGame);
            }
        } while (numbersRaw && dateRaw && gameNameRaw);
        texasGames.push(allOrNothingData);
         myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Pick_3/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });
        let pick3Data = [];
        
         re2 = />\d\d\/\d\d\/\d\d\d\d</g
         re = /[\d]+ - [\d]+ - [\d]+|<td>&nbsp;<\/td><td>&nbsp;<\/td>/g
         nightOrEvening = /<!-- MORNING|<!-- DAY|<!-- NIGHT|<!-- EVENING/g
        let extraRe = /<strong>[\d]+/g
        //
         numbersRaw;
         dateRaw;
         gameNameRaw;
        let extraRaw;
        
       do {
        let tempGame = new Game();
        tempGame.name = "Pick 3 ";
        numbersRaw = re.exec(myData)[0];
        dateRaw = re2.exec(myData);
        extraRaw = extraRe.exec(myData);
        gameNameRaw = nightOrEvening.exec(myData)
        if (numbersRaw && dateRaw && gameNameRaw) {

            let d = new Date(dateRaw[0].slice(1,dateRaw[0].length-1));
            let month = d.getMonth() + 1;
            let date = d.getDate();
            month <= 9 ? month = "0" + (month).toString() : month = month;
            date <= 9 ? date = "0" + (date).toString() : date = date
            let formatedDate = d.getFullYear() + "-" + month + "-" + date + "Taaaaa"
            tempGame.date = formatedDate;
            let formattedNums = "";
            tempGame.name += gameNameRaw[0].slice(5, gameNameRaw[0].length);
            if(numbersRaw === "<td>&nbsp;</td><td>&nbsp;</td>") {
                formattedNums = "Not Ready Yet"
            } else formattedNums = numbersRaw.split(" - ").join(" ");
            tempGame.winningNumbers = formattedNums.split(" ");
            tempGame.extraText = "Sum It Up!: "
            let numsArray = tempGame.winningNumbers;

            let sum = 0;
            for(let i = 0; i < numsArray.length; i++) {
                sum += Number(numsArray[i]);
            }
            tempGame.extra = sum;

            pick3Data.push(tempGame);
            }
       } while (numbersRaw && dateRaw && gameNameRaw);
       texasGames.push(pick3Data);
     myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Daily_4/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });
        let daily4Data = [];
        
         re2 = />\d\d\/\d\d\/\d\d\d\d</g
         re = /[\d]+ - [\d]+ - [\d]+ - [\d]+|<td>&nbsp;<\/td><td>&nbsp;<\/td>|[\d]+	- [\d]+ - [\d]+ - [\d]+/g
         nightOrEvening = /<!-- MORNING|<!-- DAY|<!-- NIGHT|<!-- EVENING/g
         extraRe = /<strong>[\d]+/g
        //
         numbersRaw;
         dateRaw;
         gameNameRaw;
         extraRaw;
       do {
        let tempGame = new Game();
        tempGame.name = "Daily 4 ";
        numbersRaw = re.exec(myData)[0];
        dateRaw = re2.exec(myData);
        extraRaw = extraRe.exec(myData);
        gameNameRaw = nightOrEvening.exec(myData)
        if (numbersRaw && dateRaw && gameNameRaw) {

            let d = new Date(dateRaw[0].slice(1,dateRaw[0].length-1));
            let month = d.getMonth() + 1;
            let date = d.getDate();
            month <= 9 ? month = "0" + (month).toString() : month = month;
            date <= 9 ? date = "0" + (date).toString() : date = date
            let formatedDate = d.getFullYear() + "-" + month + "-" + date + "Taaaaa"
            tempGame.date = formatedDate;
            let formattedNums = "";
            tempGame.name += gameNameRaw[0].slice(5, gameNameRaw[0].length);
            if(numbersRaw === "<td>&nbsp;</td><td>&nbsp;</td>") {
                formattedNums = "Not Ready Yet"
            } else if(numbersRaw.includes("	")) {
                numbersRaw = numbersRaw.split("-");
                formattedNums = numbersRaw.map((elem, index) => elem.trim())
                formattedNums = formattedNums.join(" ");
            } else formattedNums = numbersRaw.split(" - ").join(" ");
            tempGame.winningNumbers = formattedNums.split(" ");
            tempGame.extraText = "Sum It Up!: "
            let numsArray = tempGame.winningNumbers;

            let sum = 0;
            for(let i = 0; i < numsArray.length; i++) {
                sum += Number(numsArray[i]);
            }
            tempGame.extra = sum;

            daily4Data.push(tempGame);
            }
       } while (numbersRaw && dateRaw && gameNameRaw);
       texasGames.push(daily4Data);
    myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Cash_Five/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });
        let cashFiveData = [];
        
         re2 = />\d\d\/\d\d\/\d\d\d\d</g
         re = /[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g
         numbersRaw;
         dateRaw;
        
        do {
        let tempGame = new Game();
        tempGame.name = "Cash Five";
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
            let numsWithDash = numbersRaw[0];
            let formattedNums = numsWithDash.split(" - ").join(" ");
            tempGame.winningNumbers = formattedNums.split(" ");

            cashFiveData.push(tempGame);
            }
        } while (numbersRaw && dateRaw);
        texasGames.push(cashFiveData);
        return texasGames;
    }

}


