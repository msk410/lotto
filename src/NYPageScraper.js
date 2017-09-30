/**
 * Created by mkimg on 9/29/17.
 */
export default class NYPageScraper {
    constructor() {
        this.getPageData()
    }

    async getPageData() {
        try {
            const response = await
                fetch(`http://www.google.com`, {
                    method: "GET",
                });
            let nyLottoHTMLData = await
                response.text();
            console.log(nyLottoHTMLData);
        } catch (err) {
            console.log(err);
        }



    }

    makeHttpObject() {
        try {return new XMLHttpRequest();}
        catch (error) {}
        try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (error) {}
        try {return new ActiveXObject("Microsoft.XMLHTTP");}
        catch (error) {}

        throw new Error("Could not create HTTP request object.");

    var request = makeHttpObject();
    request.open("GET", "http://www.google.com", true);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            alert(request.responseText);
    }

}
