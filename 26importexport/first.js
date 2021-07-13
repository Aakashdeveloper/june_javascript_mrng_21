let dbObj = {}

dbObj.user = [
    {
        name:'Alvin',
        city:'Boston'
    },
    {
        name:'Priya',
        city:'Paris'
    }
]

dbObj.dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name, city values(${data.name},${data.city})`}
}

//Es5
//module.exports = dbObj
//Es6
export default dbObj;