# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
Category.destroy_all
User.destroy_all

@admin0 = User.create!(username: 'alxwil95', email: 'alx_wil95@email.com', password: 'Th@Wils2021')
@admin1 = User.create!(username: 'ben_10', email: 'ben_10@email.com', password: 'Ben_10ison')
@admin2 = User.create!(username: 'global_girl', email: 'global_girl@email.com', password: 'Gl0bal_Gir!')
@admin3 = User.create!(username: 'th@travelingpug', email: 'thetravelingpug@email.com', password: 'Th@1TravelingPug')

puts "#{User.count} users created"

@general = Category.create!(title: 'general')
@resources = Category.create!(title: 'resources')
@events = Category.create!(title: 'events')

puts "#{Category.count} categories created"

@post0 = Post.create!(content: 'Welcome to On the Move, here you can find everything you\'ll need to make your move more enjoyable and easier', category: @general, user: @admin0, username: @admin0.username)
@post1 = Post.create!(content: 'It\'s official! Got the call today that I will be starting at Amazon in a few weeks. Time to start packing! Watch out Seattle, here we come. #seeyouinseattle #onthemove', category: @general, user: @admin1, username: @admin1.username)
@post2 = Post.create!(content: 'I have lived all over and this blog has helped make each and every move ten times easier than I ever could have imagined. Thanks to all my fellow movers for all the support!', category: @general, user: @admin2, username: @admin2.username)
@post3 = Post.create!(content: 'Bark, bark, bark bark, bark. #traveling', category: @general, user: @admin3, username: @admin3.username)
@post4 = Post.create!(content: 'Anyone in the Seattle area know of any reliable movers that can help my wife and I once we arrive? We\'ve got a lot to move', category: @resources, user: @admin1, username: @admin1.username)
@post5 = Post.create!(content: 'Moving in two weeks! Anyone in Kansas City know the best deals on equipment rentals?', category: @resources, user: @admin2, username: @admin2.username)
@post6 = Post.create!(content: 'Bark, bark bark, bark. Bark bark. Bark', category: @resources, user: @admin3, username: @admin3.username)
@post7 = Post.create!(content: 'What are some fun activities to do in the Seattle area? We love exploring the outdoors, nigthlife, and city setting.', category: @events, user: @admin1, username: @admin1.username)
@post8 = Post.create!(content: 'If anyone coming to Kansas City is interested I\'m hosting a huge going away party before I move. Come make some connections to make your move better!', category: @events, user: @admin2, username: @admin2.username)
@post9 = Post.create!(content: 'Bark bark bark bark bark bark bark! #adayatthepark', category: @events, user: @admin3, username: @admin3.username)

puts "#{Post.count} posts created"

Comment.create!(content: 'Seattle is such an exciting place, congrats!', post: @post1, user: @admin0, username: @admin0.username)
Comment.create!(content: 'Thanks, my wife and I are excited!', post: @post1, user: @admin1, username: @admin1.username)
Comment.create!(content: 'Banana boats bring beautiful ballerina\'s', post: @post1, user: @admin0, username: @admin0.username)
Comment.create!(content: 'We are glad to help. #keeponmoving', post: @post2, user: @admin0, username: @admin0.username)
Comment.create!(content: 'I paw-sitively love this!', post: @post3, user: @admin0, username: @admin0.username)

puts "#{Comment.count} comments created"
