/**
 * Created by mkimg on 9/29/17.
 */
import * as $ from "jquery";

export default class NYPageScraper {
    constructor() {
        this.getNYLottoInfo()
    }

    async getNYLottoInfo() {
        let nyLottoData = ""
        // await $.get('https://allorigins.us/get?method=raw&url=' + encodeURIComponent('http://nylottery.ny.gov/wps/portal/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKDA0LcQsI8TQwtDC3dDDw9fUIsnZ2DHV3DzIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh8FVoLPBWAFeKwoyA2NMMh0VAQArIaCBQ!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_TA72D8L418VGD0ACUT1S5R2U05/ren/p=game=take5/=/') + '&callback=?', function(data){
        //     nyLottoData = data;
        // });
        //
        // console.log(nyLottoData)
        //
        //
        // var url = 'https://allorigins.us/get?method=raw&url=' + encodeURIComponent('http://nylottery.ny.gov/wps/portal/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKDA0LcQsI8TQwtDC3dDDw9fUIsnZ2DHV3DzIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh8FVoLPBWAFeKwoyA2NMMh0VAQArIaCBQ!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_TA72D8L418VGD0ACUT1S5R2U05/ren/p=game=lotto/=/') + '&callback=?'

//         let data = "empty"
//         await  $.ajax({ url: 'https://allorigins.us/get?method=raw&url=' + encodeURIComponent('http://nylottery.ny.gov/') + '&callback=?',  success: function(response) { data = response } });
// console.log(data)

        $.ajax(
            {
                url: 'https://allorigins.us/get?method=raw&url=' + encodeURIComponent('http://nylottery.ny.gov/wps/portal/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKDA0LcQsI8TQwtDC3dDDw9fUIsnZ2DHV3DzIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh8FVoLPBWAFeKwoyA2NMMh0VAQArIaCBQ!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_TA72D8L418VGD0ACUT1S5R2U05/ren/p=game=take5&action=winningnumbers') + '&callback=?',
                dataType: "html",
                success: function(data) {
                    console.log(data)
                },
                error: function(e)
                {
                    alert('Error: ' + e);
                }
            });


    }


}
