###  EXERCICIO 1

## A- Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

VARCHAR - define o tipo da variavel que a tabela vai receber o 255 é a quantidade max de caracteres que ele pode receber.
PRIMARY KEY -  é referente a chave ser primaria ou seja , ela não pode receber um valor igual ao que já esteja na tabela. 
NOT NULL - indica que o campo não pode ficar em branco .
DATE - grava informação  da data no formato YYYY-MM-DD 

### B - O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

SHOW DATABASE - usado para exibir  os bancos de dados instalados / Instanciados .

SHOW TABLES - exibe as tabelas que estão contidas dentro do banco de dados.

### C - O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando SHOW Actor e explique os resultados.

SHOW Actor	Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Actor' at line 1	0.125 sec

### EXERCICIO 2

### A - Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

INSERT INTO Actor (id, name, salary)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

### B - Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

O erro é referente a chave primaria , pois já consta um registro com o mesmo número de ID no banco de dados. 

### EXERCICIO 3

### A - 
SELECT * FROM Actor where gender = 'female'

### B -
SELECT salary from Actor where name = 'Tony Ramos'

### C -
SELECT * FROM Actor where gender = 'invalid'
Não trouxe nenhum resultado . Pois não existe resultado gravado no banco que atenda a condição desejada. 

### D - 

SELECT id,name,salary FROM Actor where salary < 500000;

### E - 
SELECT id, nome from Actor WHERE id = "002"

no banco de dados a tabela se chama name e não nome . Por isso retornou o erro. 
15:02:56	SELECT id, nome from Actor WHERE id = "002" LIMIT 0, 50	Error Code: 1054. Unknown column 'nome' in 'field list'	0.000 sec

### EXERCICIO 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

### A - 

A query acima está buscando todos os nomes que começam com A ou J e o salário seja maior que 300 mil .

### B - 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

### C -
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

### D - 
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

### EXERCICIO 5
# A -
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)

# B - 
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se eu fosse você",
    "Sinopse: Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
)

# C - 
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
)
# D - 
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
)

# E -
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)

### EXERCICIO 6

# A - 

SELECT id,title,rating FROM Movie WHERE id = '001'

# B - 
SELECT * from Movie WHERE title = 'Deus é Brasileiro'

# C -
SELECT id,title,synopsis from Movie WHERE rating > 7 

### EXERCICIO 7 

# A - 
SELECT * FROM Movie WHERE title LIKE "%vida%"

# B - 

SELECT * FROM Movie WHERE ( title LIKE '%Deus%' OR synopsis LIKE '%Deus%')

# C - 

SELECT * FROM Movie WHERE release_date < '2020-07-07';

# D - 

SELECT * FROM Movie WHERE (title LIKE '%Doce%' OR synopsis LIKE '%Doce%') AND rating > 7  AND release_date < '2020-07-07';
