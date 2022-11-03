const {createInstance} = require('./connection.js')

async function divNumbers(num1, num2){
    const {instance, accounts} = await createInstance();

    //this txn emits event. From contract we are returning the result in event hence to access the value
    // console res.events.event_name.returnValues.param_name
    const res = await instance.methods.divNum(num1, num2).send({from: accounts[0] });
    console.log("Event value:", res.events.success.returnValues.value);

    // if you want to just receive the return value then use .call method
    // const res = await instance.methods.addNum(num1, num2).call({from: accounts[0] });

    console.log(res);
}

divNumbers(4, 2);
