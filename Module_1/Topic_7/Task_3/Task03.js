{
    const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
    
    const addPrefix = (names, prefix) => {

        const prefix_names = [];
        for(let i = 0; i < names.length; ++i){
            prefix_names[i] = prefix + ' ' + names[i];
        }
        return prefix_names;

    }

    console.log(addPrefix(names, 'Mr'));
    
}