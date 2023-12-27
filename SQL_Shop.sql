create table Shop_Category(
	id_Shop_Category bigint auto_increment,
	image Nvarchar(80),
    id_Category bigint,
    shop_Name nvarchar(255) not null,
    price nvarchar(255) not null,
    description text,
    primary key (id_Shop_Category),
    constraint lien_ket_1 foreign key(id_Category) references Category(id_Category)
);
create table Category(
	id_Category bigint auto_increment,
    Categoryl nvarchar(30) not null,
    primary key(id_Category)
);
insert into Category(id_Category,Categoryl) values(1,'Laptop');
insert into Category(id_Category,Categoryl) values(2,'Máy tính bảng');
insert into Category(id_Category,Categoryl) values(3,'Điện thoại');
insert into Category(id_Category,Categoryl) values(4,'Phụ kiện');
insert into Shop_Category values(1,'iphone15.png',3,'Iphone 15','34000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c');
insert into Shop_Category values(2,'macbook.png',1,'Macbook Air 2023','40000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c');
insert into Shop_Category values(3,'airpods.png',4,'Airpods pro 2023','10000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c');
insert into Shop_Category values(4,'appleWatch.png',4,'Apple Watch 2023','9000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c');
