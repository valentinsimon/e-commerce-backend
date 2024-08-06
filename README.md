
# E-Commerce - Back-End development
I developed the Back-End for an e-commerce platform, creating a robust and scalable infrastructure. I used Docker for containerization, ensuring a consistent development environment and simplifying deployment across different environments. I implemented AuthGuard and RoleGuard to handle authentication and authorization, ensuring that only authorized users could access specific functions based on their roles.

For data management, I utilized TypeORM, an ORM that streamlines database interactions and simplifies handling entities and relationships. Additionally, I integrated Cloudinary for efficient image uploading and management, enhancing performance and user experience by enabling cloud-based optimization and storage of multimedia resources.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

DB_TYPE= ...
DB_NAME= ...
DB_HOST= ...
DB_PORT= ...
DB_USERNAME= ...
DB_PASSWORD= ...

POSTGRES_DB= ...
POSTGRES_PASSWORD= ...

CLOUDINARY_CLOUD_NAME= ...
CLOUDINARY_API_KEY= ...
CLOUDINARY_API_SECRET= ...

JWT_SECRET= ...

## Installation
  npm install

    

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


## Authors

- [Valentin Simon](www.linkedin.com/in/valentin-simón-8973a130a)

- Contact Me: iamvalentindeveloper@gmail.com





## Tech Stack

Node, Express, TypeOrm, Swagger, Bcrypt, Cloudinary, Jest, Multer

