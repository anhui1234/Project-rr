create table ShopCategory(
	id_ShopCategory bigint auto_increment,
	image Longblob,
    id_Category bigint,
    shopName nvarchar(255) not null,
    price nvarchar(255) not null,
    description text,
    primary key (id_ShopCategory),
    constraint lien_ket_1 foreign key(id_Category) references Category(id_Category)
);
create table Category(
	id_Category bigint auto_increment,
    Categoryl nvarchar(30) not null,
    primary key(id_Category)
);
