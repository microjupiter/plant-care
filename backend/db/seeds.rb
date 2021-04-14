# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


alocasia = Species.create(name: 'Alocasia')
aloe = Species.create(name: 'Aloe')
philodendron = Species.create(name: 'Philodendron')
sansevieria = Species.create(name: 'Sansevieria')
cacti = Species.create(name: 'Cacti')

Plant.create([
  {
    :name => 'Polly',
    :notes => 'Alocasia Polly thrive in medium to bright, indirect sunlight. Be aware that they are not suited to low light or direct sunlight - which can scorch their leaves. Water: Alocasia Polly enjoy weekly watering sessions and frequent misting, keeping their soil moist but not wet.',
    :species_id => alocasia.id
  },
  {
    :name => 'Moonshine',
    :notes => 'Your Sansevieria Moonshine does not need much water, and overwatering can cause the plant to rot. Be sure to keep the leaves dry when watering and allow the soil to dry in between waterings. Reduce watering down to once a month during the winter. This plant does not require any extra humidity.',
    :species_id => sansevieria.id
  }
])