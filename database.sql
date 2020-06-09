create database bootfinds;

\c bootfinds

create table users (
    id serial primary key,
    username text,
    email text,
    digested_password text,
    st_number integer,
    address_street text,
    address_suburb text,
    address_state text,
    postcode integer
);

create table items (
    id serial primary key,
    seller_id integer references users(id),
    item_name text,
    item_type text,
    quantity integer,
    price integer,
    image_url text,
    item_detail text
);