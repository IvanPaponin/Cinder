const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0
}

const testSchema = new Schema({
  genre: Array,
  mood: Array,
  withWhom : Array,
  
  
});
const Test = model('test', testSchema);
async function  asnwersFabric(){
   
  const tests = {
   genre: ['Боевик',
     "Детектив",
     'Драма',
     "Исторический",
     'Биография',
     "Комедия",
     'Мелодрама',
     "Мюзикл",
     'Экшн',
     'Сказка',
     'Триллер',
     'Фантастика',
     "Хоррор",
   'Фильм-катастрофа'],
   mood: [
   'Веселое',
   'Романтичное ',
   'Сердитое',
   'Пофигистическое',
   'Приуныл',
   'Игривый',
   'Серьезное',
   'Плаксивое',
   'Мотивирующее',
 ],
 withWhom: [
   'С ним/ней',
   'С семьей',
   'С ребенком',
   'С большой компанией',
   'Один',
   'С другом'
 
 ]
 
 
 
 }
 await Test.create(tests)
}

function dbConnect(){
  mongoose.connect(process.env.DB_CONNECT, options, (err)=>{
    if(err) return console.log(err)
    console.log('success connected to mongo');
    asnwersFabric()
  })
}
// dbConnect()


module.exports = Test;
