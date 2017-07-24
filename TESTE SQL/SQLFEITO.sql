create database Cliente;
use cliente;

create table tb_customer(
/**A chave primeira da tabela tb_customer é  id_customer*/
id_customer  int primary key not null auto_increment,
nm_customer   varchar(50),
cpf_cnpj numeric(11,2));

create table dm_address_type(
/**A chave primeira da tabela dm_address_tyoe é  cd_address type*/
cd_address_type char(1) primary key not null,
ds_address_type varchar(50));

create table tb_customer_address(
id_customer int not null,
cd_address_type char(1) not null,
/**Trazendo a chave estrangeira */
constraint id_customerfk FOREIGN KEY (id_customer) REFERENCES  tb_customer (id_customer),
constraint cd_addressfk FOREIGN KEY (cd_address_type) REFERENCES  tb_customer_address (cd_address_type),
street varchar(50),
lot int,
reference varchar(50),
zip_code varchar(100));

/**drop table dm_address_type;*/
drop table tb_customer;

select*from dm_address_type;

insert into dm_address_type(cd_address_type,ds_address_type)
values("R","Residêncial"),
	   ("C","Comercial"),
       ("O","Outros");
       
insert into tb_customer(nm_customer,cpf_cnpj)
values("Joãozinho Silva",888777666.55);

select * from tb_customer;