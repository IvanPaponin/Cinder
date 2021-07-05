const { disconnect, connect } = require('../db/connect')
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

connect()


const foodSchema = new mongoose.Schema({
  photo: String
});


const FoodModel = mongoose.model('food', imageSchema);


const food = [
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/45056/321046130_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/45822/320235817_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/45056/321046125_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/45822/320235808_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/29454/331262596_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/29454/331268492_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/45822/320235829_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/45822/320235879_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/45822/320235883_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/id_product/32449/318607768_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/32449/325103071_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/23830/318680055_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/23830/318680064_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/23830/318680055_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/18585/331351927_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/23830/326037107_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/18585/331172007_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/18585/331172010_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/42887/322783696_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/42887/322783698_m650.jpg",
  },
  {
    photo: "https://www.delivery-club.ru/media/cms/relation_product/37646/315940622_m650.jpg",
  },
]

async function seed() {
  connect()
  await Promise.all(food.map((el) => FoodModel.create(el)))
  disconnect()
}

seed()

module.exports = FoodModel
