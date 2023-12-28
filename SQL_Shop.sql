create table Shop_Category(
	id_Shop_Category bigint auto_increment,
	image Nvarchar(80),
    id_Category bigint,
    shop_Name nvarchar(255) not null,
    price nvarchar(255) not null,
    description text,
    priority bit,
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
insert into Shop_Category values(1,'iphone15.png',3,'Iphone 15','34000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c',1);
insert into Shop_Category values(2,'macbook.png',1,'Macbook Air 2023','40000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c',1);
insert into Shop_Category values(3,'airpods.png',4,'Airpods pro 2023','10000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c',1);
insert into Shop_Category values(4,'appleWatch.png',4,'Apple Watch 2023','9000000','Iphone 15 với những cải tiến so với thế hệ tiền nhiệm như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c',1);
insert into Shop_Category values(5,'oppoFindN3.png',3,'Oppo Find N3','23000000','OPPO Find N3 Flip 5G Hồng được OPPO cho ra mắt chính thức tại thị trường Việt Nam vào tháng 10/2023. Sản phẩm được hãng đầu tư mạnh mẽ về camera với độ phân giải lên đến 50 MP, cấu hình sử dụng chip Dimensity 9200 5G và thiết kế được thay đổi với bản lề gập mở tốt hơn cùng màu hồng sang trọng và nữ tính',0);
insert into Shop_Category values(6,'vivov27e.png',3,'Vivo V27E','6000000','vivo V27e một trong những chiếc điện thoại tầm trung nổi bật của vivo trong năm 2023. Với thiết kế độc đáo và khả năng chụp ảnh - quay phim ấn tượng, vì thế máy đã mang lại cho vivo nhiều niềm tự hào khi ra mắt tại thị trường Việt Nam, hứa hẹn mang đến trải nghiệm tuyệt vời đến với người dùng.',0);
insert into Shop_Category values(7,'xiaomi13lite.png',3,'Xiaomi 13 Lite','9000000','Hãng Xiaomi đã ra mắt mẫu điện thoại Xiaomi 13 Lite 5G, tiếp tục thành công từ dòng flagship Xiaomi 13 series. Được xem là dòng sản phẩm tầm trung, Xiaomi 13 Lite 5G có nhiều điểm nổi bật như sử dụng chipset mới từ Qualcomm và hệ thống camera đáng chú ý trong phân khúc.',0);
insert into Shop_Category values(8,'samsunggalaxys23ultra.png',3,'Samsung Galaxy S23 Ultra','23000000','Samsung Galaxy S23 Ultra 5G 256GB là chiếc smartphone cao cấp nhất của nhà Samsung, sở hữu cấu hình không tưởng với con chip khủng được Qualcomm tối ưu riêng cho dòng Galaxy và camera lên đến 200 MP, xứng danh là chiếc flagship Android được mong đợi nhất trong năm 2023.',0);
insert into Shop_Category values(9,'xiaomi13tpro.png',3,'Xiaomi 13T Pro','8000000','Xiaomi 13T Pro 5G là mẫu máy thuộc phân khúc tầm trung đáng chú ý tại thị trường Việt Nam. Điện thoại ấn tượng nhờ được trang bị chip Dimensity 9200+, camera 50 MP có kèm sự hợp tác với Leica cùng kiểu thiết kế tinh tế đầy sang trọng.',0);
insert into Shop_Category values(20,'samsunggalaxyzflip4.png',3,'Samsung Galaxay ZFlip 4','11000000','Samsung Galaxy Z Flip4 128GB đã chính thức ra mắt thị trường công nghệ, đánh dấu sự trở lại của Samsung trên con đường định hướng người dùng về sự tiện lợi trên những chiếc điện thoại gập. Với độ bền được gia tăng cùng kiểu thiết kế đẹp mắt giúp Flip4 trở thành một trong những tâm điểm sáng giá cho nửa cuối năm 2022.',0);
insert into Shop_Category values(18,'samsunggalaxya34.png',3,'Samsung Galaxay A34','8000000','Samsung Galaxy A34 5G là mẫu điện thoại mới thuộc phân khúc tầm trung được nhà Samsung cho ra mắt vào tháng 03/2023. Với sự kết hợp hoàn hảo giữa vẻ ngoài cuốn hút với cấu hình mạnh mẽ, chiếc máy là sự lựa chọn hoàn hảo đáp ứng tốt nhu cầu sử dụng của đa dạng đối tượng người dùng hiện nay.',0);
insert into Shop_Category values(16,'opporeno10pro.png',3,'Oppo Reno10 Pro','8000000','OPPO Reno10 Pro 5G là một trong những sản phẩm của OPPO được ra mắt trong 2023. Với thiết kế đẹp mắt, màn hình lớn và hiệu năng mạnh mẽ, Reno10 Pro chắc chắn sẽ là lựa chọn đáng cân nhắc dành cho những ai đang tìm kiếm chiếc máy tầm trung để phục vụ tốt mọi nhu cầu.',0);
insert into Shop_Category values(14,'samsunggalaxyzfold5.png',3,'Samsung Galaxay ZFold 5','43000000','Samsung Galaxy Z Fold5 là mẫu điện thoại cao cấp được ra mắt vào tháng 07/2023 với nhiều điểm đáng chú ý như thiết kế gập độc đáo, hiệu năng mạnh mẽ nhờ chip Snapdragon 8 Gen 2 for Galaxy cùng camera quay chụp sắc nét.',0);

