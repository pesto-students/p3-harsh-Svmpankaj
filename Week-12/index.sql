CREATE DATABASE student;


SHOW DATABASES;
USE student;

 CREATE TABLE CITIES(
        CITY CHAR(20) NOT NULL,
        STATE CHAR(20) NOT NULL,
        PRIMARY KEY (CITY) 
);

INSERT INTO CITIES VALUES   
        ('DELHI', 'DELHI'),
        ('NEW TOWN', 'WEST BENGAL'),
        ('RANCHI', 'JHARKHAND'), 
        ('PATNA', 'BIHAR'),
        ('PUNE', 'MAHARASHTRA'),
        ('BANHALORE', 'KARNATAKA'),
        ('MUMBAI', 'MAHARASHTRA'),
        ('KOLKATA', 'WEST BENGAL'),
        ('AHMEDABAD', 'GUJARAT'),
        ('JAIPUR', 'RAJASTHAN'),
        ('BHOPAL', 'MADHYA PRADESH'),
        ('ALLAHABAD', 'UTTAR PRADESH'),
        ('AGRA', 'UTTAR PRADESH'),
        ('LUCKNOW', 'UTTAR PRADESH'),
        ('KANPUR', 'UTTAR PRADESH'),
        ('BOKARO', 'JHARKHAND'),
        ('AMRITSAR', 'PUNJAB'),
        ('DHANBAD', 'JHARKHAND'),
        ('NOIDA', 'DELHI');



CREATE TABLE WAREHOUSES(
        WID INT(11) NOT NULL AUTO_INCREMENT,
        WNAME CHAR(30) NOT NULL,
        LOCATION CHAR(20) NOT NULL,
        EXTRA_CONTEXT json NOT NULL ,
        PRIMARY KEY (WID) 
);

INSERT INTO warehouses (WNAME, LOCATION, EXTRA_CONTEXT)
        VALUES( 'Delhi Sec-14', 'Delhi', '{"info": "some extra info"}'),
                ( 'Amritsar', 'Punjab', '{"info": "some extra info"}'),
                ( 'Mukhurji Nagar', 'Delhi', '{"info": "some extra info"}'),
                ( 'Bank More', 'Dhanbad', '{"info": "some extra info"}'),
                ( 'Pune West', 'Pune', '{"info": "some extra info"}'),
                ( 'AHMEDABAD', 'Bokaro', '{"info": "some extra info"}'),
                ( 'Lalpur', 'Ranchi', '{"info": "some extra info"}'),
                ( 'Purnea', 'Patna', '{"info": "some extra info"}'),
                ( 'New Town', 'New Town', '{"info": "some extra info"}'),
                ( 'Pune city', 'Pune', '{"info": "some extra info"}'),
                ( 'Kanpur', 'Kanpur', '{"info": "some extra info"}'),
                ( 'Bhopal', 'BHOPAL', '{"info": "some extra info"}'),
                ( 'Bengaluru city', 'Bengaluru', '{"info": "some extra info"}');





CREATE TABLE STORES(
        SID INT NOT NULL AUTO_INCREMENT, 
        STORE_NAME CHAR(20), 
        LOCATION_CITY CHAR(20)
        WAREHOUSE INT(11) NOT NULL,
        PRIMARY KEY(SID)
);

INSERT INTO stores (STORE_NAME, LOCATION_CITY,WAREHOUSE)
VALUES ('Hanuman Mansion', 'Delhi', 2),
       ('Barnawal stores', 'Pune', 6),
       ('Shakhi Market ', 'Kolkata', 4),
       ('Bank more', 'Bengaluru', 1),
       ('Purana bazar', 'Ranchi', 3),
       ('P&M Mall', 'Pune', 8),
       ('Laxmi Market', 'Bokaro', 5);





CREATE TABLE CUSTOMER(
        CNO INT AUTO_INCREMENT, 
        CNAME CHAR(50),
        ADDR VARCHAR(50),
        CU_CITY CHAR(20),
        PRIMARY KEY(CNO)
);

INSERT INTO customer (cname, addr, cu_city)
VALUES  ('Ram Dayal', 'Sec-6 Bokaro', 'Bokaro'),
        ('Mr. Patil', 'North delhi', 'Delhi'),
        ('Manoj Mishra', 'old street road pune', 'Pune'),
        ('Ankit Mehta', 'Purana bazar delhi', 'Ranchi'),
        ('Pooja Mishra', 'Ranchi', 'Ranchi'),
        ('Mohit Mahato', 'Purana bazar dhanbad', 'Ranchi'),
        ('Priya Gupta', 'nico park street New Town', 'New Town');






CREATE TABLE ORDERS(
        ONO INT NOT NULL AUTO_INCREMENT,
        CNO INT,
        ITEMNO INT, 
        ODATE DATE NOT NULL,
        PRIMARY KEY(ONO)
);

INSERT INTO orders (CNO, ITEMNO, ODATE)
VALUES (1, 2, '2022-05-21'),
       (2, 2, '2022-06-24'),
       (3, 2, '2022-06-25'),
       (4, 2, '2022-07-12'),
       (5, 1, '2022-07-20'),
       (6, 1, '2022-08-02'),
       (7, 4, '2022-08-05');






CREATE TABLE ITEMS(
        ITEMNO INT NOT NULL AUTO_INCREMENT, 
        DESCRIPTION VARCHAR(50) AS product, 
        WEIGHT DECIMAL(5,2), 
        COST DECIMAL(5,2),
        PRIMARY KEY(ITEMNO)
);

INSERT INTO items 
VALUES  (1, 'NIKE SHOES', 240.00, 899.00),
        (2, 'SMART WATCH', 70.00, 999.00 ),
        (3, 'CHAIR', 300, 499.00 ),
        (4, 'LAPTOP BAG', 100, 399.00 );