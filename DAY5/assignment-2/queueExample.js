const { Queue } = require('@datastructures-js/queue');

exports.getCustomerRequestQueue = () => {

    let customerRequestQueue = new Queue();
    let requestObj = {}

    requestObj = {
        name: "John",
        id: 1,
        contactNumber: "123456789",
        description: "Query about product",
        dateTime: new Date()
    }
    customerRequestQueue.enqueue(requestObj)


    requestObj = {
        name: "Alice",
        id: 2,
        contactNumber: "987654321",
        description: "Complaint about service",
        dateTime: new Date()
    }
    customerRequestQueue.enqueue(requestObj)

    requestObj = {
        name: "Bob",
        id: 3,
        contactNumber: "1234508765",
        description: "Complaint about product delivery",
        dateTime: new Date()
    }
    customerRequestQueue.enqueue(requestObj)

    console.log("Display all Customer Requests----------------------");
    for (let i = 0; i < customerRequestQueue.size(); i++) {
        console.log(customerRequestQueue.front())
    }

    let firstQueueItem = customerRequestQueue.front();
    console.log("Display first Requests----------", firstQueueItem)

    let deletedQueueItem = customerRequestQueue.dequeue();
    console.log("Delete first Requests-------------", deletedQueueItem)

    console.log("Display all Customer Requests after deleting first item----------------------");
    for (let i = 0; i < customerRequestQueue.size(); i++) {
        console.log(customerRequestQueue.front())
    }

}

