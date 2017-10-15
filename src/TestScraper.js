/**
 * Created by mkimg on 10/1/17.
 */

import * as $ from "jquery";

export default class TestScraper {
    constructor() {
        this.getTexasTripleChance()
        this.getLottoTexas()
        this.getTexasTwoStep()
        this.getAllOrNothing()
    }

    async getTexasTripleChance() {
        let myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Texas_Triple_Chance/Winning_Numbers/') + '&callback=?', function(data){
            myData = data;
        });

        let re2 = />\d\d\/\d\d\/\d\d\d\d</g
        let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g

        var m;
        var m1;

//        do {
            m = re.exec(myData);
            m1 = re2.exec(myData);
       //     if (m && m1) {
        console.log("Texas triple chance")
                console.log(m1[0]);
                console.log(m[0]);
         //   }
        //} while (m);



    }

    async getLottoTexas() {
        let myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Lotto_Texas/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });
        // console.log(myData)

         let re2 = />\d\d\/\d\d\/\d\d\d\d</g
         let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+ - [\d]+/g

        var m;
         var m1;

         // do {
        m = re.exec(myData);
         m1 = re2.exec(myData);
             // if (m && m1) {
        console.log("Lotto Texas")
        console.log(m1[0]);
        console.log(m[0]);
          // }
        // } while (m);


     }

    async getTexasTwoStep() {
        let myData = ""
        await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('https://www.txlottery.org/export/sites/lottery/Games/Texas_Two_Step/Winning_Numbers/') + '&callback=?', function (data) {
            myData = data;
        });
         // console.log(myData)

        let re2 = />\d\d\/\d\d\/\d\d\d\d</g
        let re = /<td>[\d]+ - [\d]+ - [\d]+ - [\d]+/g
        let bonusRe = /<td>[\d]+<\/td>/g
        //
        var m;
         var m1;
         var m2;
        //
        // do {
            m = re.exec(myData);
             m1 = re2.exec(myData);
             m2 = bonusRe.exec(myData)
        //     if (m && m1) {
        console.log("Texas Two step")
                 console.log(m1[0]);
                console.log(m[0]);
                console.log(m2[0]);
        //     }
        // } while (m);
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