INSERT INTO `type_user`(`id`, `name`, `state`) VALUES (1, 'Usuario', '1');
INSERT INTO `type_user`(`id`, `name`, `state`) VALUES (2, 'Vendedor', '1');
INSERT INTO `category`(`id`, `description`, `state`) VALUES (1, 'En oferta', '1');
INSERT INTO `category`(`id`, `description`, `state`) VALUES (2, 'Nuevo', '1');
INSERT INTO `brand`(`id`, `description`, `state`) VALUES (1, 'AMD', '1');
INSERT INTO `brand`(`id`, `description`, `state`) VALUES (2, 'Intel', '1');


INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (1,'Glennis','Blenkinsop','gblenkinsop0@samsung.com','yTHt1i9aw3',1,'user_1.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (2,'Fredericka','Veld','fveld1@baidu.com','IGthecBH',1,'user_2.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (3,'Rhoda','McSporrin','rmcsporrin2@ameblo.jp','efVbHpUKP',1,'user_3.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (4,'Korella','Huggan','khuggan3@friendfeed.com','I41ZQclneB',1,'user_4.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (5,'Finley','Colbridge','fcolbridge4@va.gov','ZYqS3Wxy',1,'user_5.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (6,'Archibald','Mathewson','amathewson5@google.fr','CntsbKgN',1,'user_6.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (7,'Erhart','De Gowe','edegowe6@uol.com.br','aD4jrO54nbOw',1,'user_7.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (8,'Dino','Doddridge','ddoddridge7@ox.ac.uk','y9bRYe',1,'user_8.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (9,'Mickey','Gurry','mgurry8@webs.com','2XuK0cna',1,'user_9.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (10,'Kimberley','Pitkins','kpitkins9@hibu.com','UwKSRgXCUOpc',1,'user_10.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (11,'Paula','Colbridge','paulamonta@gmail.com','$2b$10$4nmLrTJ6cPNcCXwUwaiuiOmir5q0qFzj/YYmAm5Ua83uNJYtx8MLy',1,'avatar-1658787730877.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (12,'Alejandro','Colbridge','alejo@gmail.com','$2b$10$xGz6lVFGdR15u2LItxEPzuSu8rt9okfooBE4mrPYA83DfPeYkKUda',1,'avatar-1658787836377.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (13,'Clara','Colbridge','clara@gmail.com','$2b$10$VxlmP6LmbG.gyTfgftBuveRnS7PYauZXAsfvwjfH4TUYh16RBocyq',1,'avatar-1659280435913.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (14,'Jesus','Colbridge','Jesus@gmail.com','$2b$10$.Uf9hiQ5VR5Vjynkjth.2O9GCH7xG891tki2GF4d36iDRTDYYO5Wi',1,'avatar-1659280493541.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (15,'Clara','Colbridge','claraacevedo400@gmai','$2b$10$hCgn2gF7E/wZYdzvoRWe7OOadlB33KGmv676wtna3j/u6b0iiDmE6',1,'avatar-1659292953096.jpg');
INSERT INTO users(id,firstname,lastname,email,password,type_id,image) VALUES (17,'Dayana','Colbridge','Dayana@gmailcom','$2b$10$Gk8zNkTnDw1fP50Fo3pblug1uKT71PMroD2UtxslahG7VPVg5/8XW',1,'avatar-1659296339593.jpg');


INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (1,'Procesador AMD RYZEN 3 3200G',629900,20,1,'Este procesador es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución, tiene memoria caché de 4 MB rápida y volátil. Procesador gráfico Radeon Vega 8 Graphics con potencia  de 65 W. Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.','AMD-RYZEN-3-3200G.jpg',1,10);
INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (2,'Procesador AMD RYZEN 5 3400G',949900,10,1,'Este procesador es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución, tiene memoria caché de 4 MB, rápida y volátil. Procesador gráfico Radeon RX Vega 11 Graphic, con potencia de 65 W. Cuenta con 8 hilos que favorecen la ejecución de múltiples programas a la vez.','AMD-RYZEN-5-3400G-1.jpg',1,10);
INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (3,'Procesador Intel CORE ci5 7th',599900,30,1,'Este procesador brinda una experiencia perfecta y muy veloz gracias a los tiempos de arranque y la cpacidad de respuesta,tiene memoria de cache de 6 MB. CUneta con Intel HD Graphics 630, con potencia de 65 W.Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo.','INTEL-Ci5-7th.jpg',2,10);
INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (4,'Procesador Intel CORE i5 10th',799900,20,1,'Este procesador ejecuta programas de edición de videos, creación de contenido, streaming y videojuegos sin afectar el rendimiento, tiene memoria caché de 12 MB. Procesador gráfico Intel UHD Graphics 630, con potencia  de 65 W. Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo.','INTEL-Ci5-10th.jpg',2,10);
INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (5,'Procesador Intel CORE i9 12th',2799900,0,2,'Este procesador ejecuta programas de edición de videos, creación de contenido, streaming y videojuegos sin afectar el rendimiento, tiene memoria caché de 25 MB. Procesador gráfico Intel UHD Graphics 630, con potencia  de 125 W. Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo.','INTEL-Ci9-12th.jpg',2,10);
INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (6,'Procesador AMD RYZEN 7 5800X',1699900,0,2,'Este procesador ofrece un rendimiento ultrarrápido de más de 100 FPS en los juegos más populares del mundo, tiene 8 núcleos y 16 hilos de procesamiento, basado en la arquitectura AMD Zen 3 4.6 GHz Max Boost, desbloqueado para overclocking, 36 MB de caché, soporte DDR4-3200.','AMD-RYZEN-7-5800x.jpg',1,10);
INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (7,'Procesador Intel CORE i7 12th',1799900,0,2,'Este procesador ofrece más espacio en caché y la arquitectura de hipersubprocesos con un alto rendimiento para aplicaciones exigentes con mejores gráficos y un impulso turbo más rápido, tiene 25 MB de caché L3 para aumentar el procesamiento de instrucciones y el rendimiento del sistema','INTEL-Ci7-12th.jpg',2,10);
INSERT INTO product(id,name,price,discount,category_id,description,image,brand_id,stock) VALUES (8,'Procesador AMD-RYZEN 9-5950X',1969000,20,2,'Este procesador ws ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución, tiene memoria caché de 64 MB, rápida y volátil. Soporta memoria RAM DDR4, su potencia es de 105 W.Cuenta con 24 hilos que favorecen la ejecución de múltiples programas a la vez.','AMD-RYZEN-9-5950X.png',1,NULL);

INSERT INTO `purchase`(`id`, `date`, `number`, `user_id`, `domicilio`) VALUES (1, '2022-08-21 21:18:33', 1, 1, 'Cochabamba 310');
INSERT INTO `purchase`(`id`, `date`, `number`, `user_id`, `domicilio`) VALUES (2, '2022-08-21 21:18:33', 1, 1, 'Lomas 100');
INSERT INTO `purchase`(`id`, `date`, `number`, `user_id`, `domicilio`) VALUES (3, '2022-08-21 21:18:33', 1, 1, 'Dean funes 333');
INSERT INTO `purschase_detail`(`id`, `compra_id`, `product_id`, `amount`, `priceUnit`, `priceTotal`) VALUES (1, 1, 1, '1', '629900,00', '629900,00');
INSERT INTO `purschase_detail`(`id`, `compra_id`, `product_id`, `amount`, `priceUnit`, `priceTotal`) VALUES (2, 1, 1, '1', '629900,00', '629900,00');
INSERT INTO `purschase_detail`(`id`, `compra_id`, `product_id`, `amount`, `priceUnit`, `priceTotal`) VALUES (3, 1, 1, '1', '629900,00', '629900,00');
