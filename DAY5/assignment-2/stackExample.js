const { Stack } = require("@datastructures-js/stack")

exports.getBrowserHistoryStack = () => {

    let browserHistoryStack = new Stack()
    let requestObj = {}

    requestObj = {
        userId: "1234NM",
        url: "https://example.com",
        dateTime: new Date()
    }
    browserHistoryStack.push(requestObj)

    requestObj = {
        userId: "1234NM",
        url: "https://google.com",
        dateTime: new Date()
    }
    browserHistoryStack.push(requestObj)

    requestObj = {
        userId: "1234NM",
        url: "https://facebook.com",
        dateTime: new Date()
    }
    browserHistoryStack.push(requestObj)

    requestObj = {
        userId: "1234NM",
        url: "https://youtube.com",
        dateTime: new Date()
    }
    browserHistoryStack.push(requestObj)

    console.log("Display all browser History:----------------------");
    for (let i = 0; i < browserHistoryStack.size(); i++) {
        console.log(browserHistoryStack.peek())
    }

    let firstStackItem = browserHistoryStack.peek();
    console.log("Display first History Object----------", firstStackItem)

    let deletedStackItem = browserHistoryStack.pop();
    console.log("Delete first History Object-------------", deletedStackItem)

    console.log("Display all Browser History after deleting first item----------------------");
    for (let i = 0; i < browserHistoryStack.size(); i++) {
        console.log(browserHistoryStack.peek())
    }

}