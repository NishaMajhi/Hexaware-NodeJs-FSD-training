const axios = require('axios');

async function getCustomerByCountry(countryName) {
    try {
        const response = await axios.get('https://www.w3schools.com/angular/customers.php');
        const customers = response.data.records;
        const filteredCustomers = customers.filter(customer => customer.Country === countryName);
        return filteredCustomers;
    } catch (error) {
        console.error("Error fetching customers data:", error.message);
    }
}

// Example usage
getCustomerByCountry("Germany")
    .then(customers => {
        console.log("Customers from Germany:", customers);
    });



/*-------output----------------

Customers from Germany: [
    { 
        Name: 'Alfreds Futterkiste', 
        City: 'Berlin', 
        Country: 'Germany'
    },
    {
        Name: 'Blauer See Delikatessen',
        City: 'Mannheim',
        Country: 'Germany'
    }
]

*/