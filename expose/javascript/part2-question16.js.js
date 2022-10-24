const iterate_object = () => {
    let statistics = {
        redCars: 21,
        blueCars: 45,
        greenCars: 12,
        raceCars: 5,
        blackCars: 40,
        rareCars: 2
    }

    for (const [key, value] of Object.entries(statistics)) {
        console.log(`${key}: ${value}`);
        if (key[0] === 'r' || value % 2 !== 0)
            console.log(value);
    }

    return 0;
}
iterate_object();