# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning database"

Project.destroy_all

puts "creating projects"
projects = []

projects << project1 = Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2019, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 3))
projects << project2 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2015, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 4))
projects << project3 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2020, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 5))
projects << project4 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2018, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 4))
projects << project5 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2019, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 5))
projects << project6 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2017, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 6))
projects << project7 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2018, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 4))
projects << project8 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2016, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 3))
projects << project9 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2017, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 3))
projects << project10 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2019, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 5))
projects << project11 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2015, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 5))
projects << project12 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2018, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 4))
projects << project13 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2019, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 7))
projects << project14 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2018, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 4))
projects << project15 =Project.new(category: Project::CATEGORY.sample, name: Faker::Company.name, date: 2019, location: Faker::Address.city, description: Faker::Lorem.sentence(word_count: 3))

projects.each do |project|
  project.save
  puts "created #{project.name}"
end


puts "finished"
