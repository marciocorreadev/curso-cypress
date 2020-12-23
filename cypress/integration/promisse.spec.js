it('Sem testes, ainda', () => { });

// Callback
// const getDomething = callback => { 
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// };

// const system = async () => {
//     console.log('init');
//     getDomething(some => {
//         console.log(`Something is ${some}`)
//         console.log('end');
//     })


const getDomething = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12);
        }, 1000)
    })
};

// Then Catch
const system =  () => {
    console.log('init');
    getDomething().then((some) => {
        console.log(`Something is ${some}`)
        console.log('end');
    })
}

// async await
const systemTwo = async () => {
    console.log('init');
    const some = await getDomething();
    console.log(`Something is ${some}`)
    console.log('end');
}



system();
systemTwo();