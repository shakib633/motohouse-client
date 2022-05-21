import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="m-2 p-2 rounded shadow-lg"> 
                <h4>Difference Between JavaScript And nodejs ?</h4>
                <p><span className="fw-bold">JavaScript:</span> JavaScript a programming language. We use JavaScript mainly to write scripts on a website that makes web pages more dynamic in nature. It is basically used on the client-side. Javascript is used in frontend development. Javascript is capable enough to add HTML and play with the DOM. Javascript can only be run in the browsers. Some very popular JavaScript frameworks are TypedJS, RamdaJS, etc.</p>
                <p><span className="fw-bold">Nodejs:</span> Nodejs is a runtime environment for Javascript that lets a user run this programming language on the server-side as well. It is is used in server-side development. Nodejs is used in server-side development. Nodejs does not have capability to add HTML tags. Nodejs can run Javascript outside the browser with the help of NodeJS. Some very commonly used Node.JS modules are Express, Lodash, etc. All of these modules need to be imported from the npm.</p>
            </div>
            <div className="m-2 p-2 rounded shadow-lg"> 
            <h4>When Should You Use Node js And when Should You Use MongoDb ?</h4>
            <p><span className="fw-bold">Using MongoDb :</span>MongoDB facilitates storing the database in JSON(javascript object notation) (or simply when data is in form of key-value pair) this is very fast and efficient so you should use it when you have key-value pair to store(JSON data) one of the best advantages of MongoDB is you can store a collection inside another collection (in a relational database it can be said as a table inside another table) this neglects the use of “join” You can also store an array inside a field (neglect the use of the foreign key of the relational model) in this, you can use concepts like mongo population to join data of multiple fields if required and most importantly it supports More users at a time and is also useful if you have a large number of fields </p>
            <p><span className="fw-bold"> using Nodejs :</span> Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional websites and back-end API services but was designed with real-time, push-based architectures in mind. Node.js, being single-threaded, maybe a bad choice for web servers doubling as computational servers, since heavy computation will block the server's responsiveness. However, Node.js itself isn't bad: The technology is quite mature and widely used for many different types of servers</p>

            </div>
            <div className=",-2 p-2 rounded shadow-lg"> 
            <h4>Difference Between Sql & NoSql database ?</h4>
            <p><span className="fw-bold">SQL :</span> Databases are categorized as Relational Database Management System (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. SQL databases are best suited for complex queries. SQL databases are relational. Vertically Scalable. SQL databases are better for multi-row transactions. MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database.</p>
            <p><span className="fw-bold">NoSQL :</span>NoSQL databases are categorized as Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries. NoSQL databases are non-relational. Horizontally scalable. NoSQL is better for unstructured data like documents or JSON. MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of nosql database

</p>

            </div>
        </div>
    );
};

export default Blogs;