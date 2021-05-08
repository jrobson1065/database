import { coccoData } from "./db.js";

const db1 = coccoData.bronze.create();

db1.newEntry().addField("name", "Kevin L");
db1.newEntry().addField("name", "John S");
// db1.newEntry().addField("name", "Rob C");
// db1.remove(1);
// db1.edit(0)
// db1.getById(0)
// db1.getByField("name", "Kevin L")
// console.log(db1.getAll());





const db2 = coccoData.silver.create();

db2.newEntry().addField("name", "Kevin L");
db2.newEntry().addField("name", "John S");
db2.newEntry().addField("name", "Rob C");
// db2.newEntry().addField("name", "Kyle G");
db2.edit(0).field("phone", "123-456-7890");
// console.log(db2.getById(0))
// db2.getByField("name", "Kevin L")
// console.log(db2.getAll());






const db3 = coccoData.gold.create();

db3.newEntry().addField("name", "Kevin L");
db3.newEntry().addField("name", "John S");
db3.newEntry().addField("name", "Rob C");
db3.newEntry().addField("name", "Kevin L");
db3.edit(0).field("phone", "123-456-7890");
// console.log(db3.getById(0));
// console.log(db3.getByField("name", "Kevin L").current.id);
// console.log(db3.getByField("name", "Kevin L").current.entry);
// console.log(db3.getByField("name", "Kevin L").next().current.id);
// db3.getByField("name", "Kevin L").next().current.addField("phone", "555-666-7777");
console.log(db3.getAll());
