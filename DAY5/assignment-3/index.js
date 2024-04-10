const flightDetails = new Map(
    [
        ['AR123', { source: 'Mumbai', destination: 'Delhi', date: '2024-04-10', time: '12:00' }],
        ['AR456', { source: 'Hyderabad', destination: 'Bangalore', date: '2024-04-11', time: '18:00' }],
        ['AR321', { source: 'Pantnagar', destination: 'Delhi', date: '2024-04-27', time: '14:20' }],
        ['AR496', { source: 'Delhi', destination: 'Mumbai', date: '2024-04-27', time: '18:40' }]
    ]);


function checkFlightStatus(flightNumber) {

    const flight = flightDetails.get(flightNumber);

    if (flight) {

        const currentTime = new Date();
        const flightDateTime = new Date(`${flight.date} ${flight.time}`);

        if (currentTime > flightDateTime) {
            console.log(`The Flight ${flightNumber} has already left.`);
        } else {
            console.log(`The Flight ${flightNumber} is leaving at ${flight.time} from ${flight.source} to ${flight.destination}.`);
        }
    } else {
        console.log(`Invalid flight number: ${flightNumber}.`);
    }

}

const inputFlightNumber1 = 'AR456';
checkFlightStatus(inputFlightNumber1);



const inputFlightNumber2 = 'AR123';
checkFlightStatus(inputFlightNumber2);