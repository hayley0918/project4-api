-- users

insert into users (username, email, digested_password, st_number, address_street, address_suburb, address_state, postcode) values ('haley', 'hayley@ga.co', '$2b$10$r8zXFvR6OacAyaU8uEeQIe/pjZwCiKc4MoasuUfXhXrqXk4zgiB/2', 1, 'hope st', 'brunswick', 'victoria', 3056);

insert into users (username, email, digested_password, st_number, address_street, address_suburb, address_state, postcode) values ('luca', 'luca@ga.co', '$2b$10$r8zXFvR6OacAyaU8uEeQIe/pjZwCiKc4MoasuUfXhXrqXk4zgiB/2', 2, 'park st', 'hawthorn', 'victoria', 3122);

insert into users (username, email, digested_password, st_number, address_street, address_suburb, address_state, postcode) values ('rom', 'rom@ga.co', '$2b$10$r8zXFvR6OacAyaU8uEeQIe/pjZwCiKc4MoasuUfXhXrqXk4zgiB/2', 3, 'wilson st', 'moonee ponds', 'victoria', 3039);

insert into users (username, email, digested_password, st_number, address_street, address_suburb, address_state, postcode) values ('lee', 'lee@ga.co', '$2b$10$r8zXFvR6OacAyaU8uEeQIe/pjZwCiKc4MoasuUfXhXrqXk4zgiB/2', 4, 'sturt st', 'essendon', 'victoria', 3040);

insert into users (username, email, digested_password, st_number, address_street, address_suburb, address_state, postcode) values ('kim', 'kim@ga.co', '$2b$10$r8zXFvR6OacAyaU8uEeQIe/pjZwCiKc4MoasuUfXhXrqXk4zgiB/2', 5, 'james st', 'boxhill', 'victoria', 3128);

-- items

insert into items (seller_id, item_name, item_type, quantity, price, image_url, item_detail) values (1, 'tv', 'electronic', 1, 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGtlgSZTqFH7BeYeBeBlkuGhRkBNQ152OY8Tpoa7a85U6PDZO8rTmhej1EsRk&usqp=CAc', 'good condition');

insert into items (seller_id, item_name, item_type, quantity, price, image_url, item_detail) values (1, 'fridge', 'furniture', 2, 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIvw-HTczeNxdToRdGqACBRiXGJoBnVqOlYsBsCmKD0NWsWB8v&usqp=CAU', 'working fine');

insert into items (seller_id, item_name, item_type, quantity, price, image_url, item_detail) values (2, 'couch', 'furniture', 3, 250, 'https://lh5.googleusercontent.com/proxy/xJploy6_XeXDs09iLKBvBFGvoUEdERHWCjJbHAYGT69FieNBU6Js5UYx1fJK2cjiZnazlnUvB58F6_Wu2R0v10Ck-mahnKePwIMV9Om66MCeB6lfhFD8wDvi01RSLzEkLLi6', 'clean');

insert into items (seller_id, item_name, item_type, quantity, price, image_url, item_detail) values (2, 'monitor', 'electronic', 2, 80, 'https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/ykYAAOSwRn9eNhvs/$_35.JPG', 'samsung monitor 22 inch');

insert into items (seller_id, item_name, item_type, quantity, price, image_url, item_detail) values (1, 'heater', 'electronic', 1, 50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo7wYMaM8kH8RwrShfVgmI1SEsFtrypcGhftdZzzs6JCs3xiT-&usqp=CAU', 'gas heater purchased 2019');