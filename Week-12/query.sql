-- Find the item that has minimum weight 

SELECT description 
FROM items
WHERE weight = (select MIN(weight) from items)



-- Find the different warehouses in “Pune” 

SELECT wname
FROM warehouses
WHERE LOCATION = 'Pune'


-- Find the details of items ordered by a customer “Mr. Patil”. 

SELECT o.ono, c.cname, i.DESCRIPTION, o.odate
FROM customer c
JOIN orders o 
	ON c.cno = o.cno
JOIN items i 
	ON c.cno = i.itemno
WHERE c.cname = 'Mr. Patil';


-- Find a Warehouse which has maximum stores.

SELECT MAX(count) AS store_count, warehouse_name
FROM (
	SELECT w.wid, w.wname warehouse_name, Count(s.store_name) AS count
	FROM warehouses warehouse_name
	JOIN stores s
	ON w.wid = s.warehouse
	GROUP BY w.wid
) AS T;


-- Find an item which is ordered for a minimum number of times

SELECT i.itemno itemno, i.description descrip, o.ono, COUNT(i.itemno) item_count
FROM items i
JOIN orders o
ON i.itemno=o.itemno
GROUP BY itemno
ORDER BY +item_count
LIMIT 1;



-- Find the detailed orders given by each customer

SELECT c.cno, c.cname, i.description, o.odate
FROM customer c 
JOIN orders o USING (cno)
JOIN items i USING (itemno)
