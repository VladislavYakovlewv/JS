{
    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
    
    const filter = (allStudents, failedStudents) => {

        const result = allStudents;

        for(let i = 0; i < result.length; ++i){

            for(let j = 0; j < failedStudents.length; ++j){

                if(result[i] === failedStudents[j]){
                  result.splice(i, 1);
                  
                }

            }
        }
        
        return result;

    }
    
    console.log(filter(allStudents, failedStudents));
}