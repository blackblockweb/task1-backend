
const fs = require("fs")


 const addPerson = (id ,fname , lname , age , city) => {

      const allData = loadData()

      const duplicatedDate = allData.filter((obj) => {
        return obj.id === id 
      })

      if (duplicatedDate.length == 0) {
        allData.push({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
         })
   
         savaAllData(allData)
      } else {
        console.log("ERROR DUPLICATED ID")
      }

 }

//   Load data

 const loadData = () => {
    try {
        const DataJson = fs.readFileSync("data10.json").toString()
        return  JSON.parse(DataJson)
    }
    catch {
        return []
    }
    
  }

//   save data

const savaAllData = (allData) => {
    const AllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , AllDataJson )
}

// delete data

const deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
       return obj.id !== id 
      
    })
    savaAllData(dataToKeep)
    
    console.log("you have already deleted an Item")
 }

//  read

const  readData = (id)=> {
    const allData = loadData()

    const itemNeeded =  allData.find((obj) => {
        return  obj.id == id

    })
    if (itemNeeded) {
        console.log(itemNeeded.id)
    }else{
        console.log( "The ID does not exist.")
    }

}

// list

const listData = () =>{
    const allData = loadData()

    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname, obj.age, obj.city)
        
    });
}

//  export

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
  }