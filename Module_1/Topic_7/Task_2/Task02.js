{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
    const getAverageValue = (allСashbox) => {
        
        let result = 0;
        for (let i = 0; i < allСashbox.length; i++) {

            result += allСashbox[i];
        }

        return Math.floor(result / allСashbox.length);

    }

    console.log(getAverageValue(allСashbox)); 
}