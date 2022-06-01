SQL non-SQL

SQL structured query language
关系型数据库

non-sql
no-sql
not only sql

SQL
MySQL
PostgresQL
SQLite

non-SQL

document-oriented -> mongodb
key-value -> redis
graph-oriented -> neo4j
column-family -> cassandra

mongo
humongous

{
\_id: ObjectId,

}

BSON - Binary JSON

[
{
_id: xxx1,
name: yyy,
age: 10,
dob: xxxx
},
{
_id: xxx2,
username: yyy
}
]

[0,100] 0....100
(0, 100) 1...99

A, B
A B 1:1
B A 1:1

A B 1:N
B A 1:1

A B 1:N
B A 1:N

A1 B1
A2 B2

A1 B1
A1 B2
A2 B1
A2 B2
M:N

students
teachers
courses

C -> S 1:N
S -> C 1:N
C - S M:N
T -> C 1:1
C -> T 1:1

T -> C 1:1
C -> T 1:N

S1,S2,
C1,C2

students collection
[
{
\_id: "S1",
courses: [
{
_id: "C1",
name: "New Course 1",
},
{
_id: "C2",
}
]
},
{
\_id: "S2",
courses: [
{
_id: "C1",
name: "New Course 1",
},
{
_id: "C2",
}
]
}
]

[
{
_id: "C1",
name: "New Course 1",
},
{
_id: "C2",
}
]

[
d1,d2,d3,d4
]

airplane

mapping
[
{name: 'apple', mapping: d3},d1,d2,d4
]

10000 10000
10000 10

[d1,d2,d3]
[d1,d3] first pipe
[d1,d3,d4] second pipe
[d1',d3',d4'] third pipe
[d1',d3',d4']
