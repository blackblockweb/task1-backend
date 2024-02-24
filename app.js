const data = require("./data")
const yargs = require("yargs")

yargs.command ({
    command : "add",
    describe : "to add an item",
    builder: {
      fname : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lname : {
        describe: "this is the last name description in add command",
        demandOption: true,
        type : "string"
     }
    },
    handler:(x)=> {
      data.addPerson(x.id , x.fname , x.lname,x.age , x.city)
    }
})

// delete
yargs.command({
    command : "delete",
    describe : "to delete an item",
    handler:(x)=> {
       data.deleteData(x.id)
    }
  
  })

//   read

yargs.command ({
    command : "read",
    describe : "to read data",
    builder: {
      id : {
         describe: "this is id desc in read command",
         demandOption: true,
         type : "string"
      }
    },
    handler:(x)=> {
      data.readData(x.id)
    }
})

// list

yargs.command ({
    command : "list",
    describe : "to list data",
    handler:(x)=> {
      data.listData()
    }
})

  
  
  
  yargs.parse()

