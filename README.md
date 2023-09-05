README

# Course Hub App

This repository contains a application where users can share and view courses they have learned. 

![image](https://github.com/risakatelynt/studybuddy/assets/124533180/bae82320-3106-49fa-84f2-cdcd6434995f)

![image](https://github.com/risakatelynt/studybuddy/assets/124533180/2fef6947-ae16-4706-8097-ae2d4eebc421)

![image](https://github.com/risakatelynt/studybuddy/assets/124533180/7c2854bf-a45f-40a7-b476-baee5af3aeda)

## Features

- Add descriptions, notes, and images for courses.
- Rate and review courses.
- View and discover courses reviewed by other users.
- Search and filter courses based on different criteria.

## Technologies Used

- Angular: Typescript framework for building user interfaces.
- Django: Python web framework for building backend applications.
- Bootstrap: CSS framework for responsive web design.
- HTML: Markup language for structuring web pages.
- SCSS: Style sheet language for specifying the visual presentation of a document.

## Installation

1. Clone the repository:

```
git clone https://github.com/risakatelynt/CourseHub.git
```

2. Install the required dependencies in frontend:

```
npm install   # Install Angular and Node.js dependencies
```

3. Setup and activate a virtual environment in backend:

```
python3 -m venv env
source env/bin/activate   # For Unix/Linux
env\Scripts\activate   # For Windows
```

4. Install the Python dependencies:

```
pip install -r requirements.txt
```

5. Set up the database:

```
python manage.py migrate
```

6. Start the development server:

```
python manage.py runserver
npm start
```

7. Access the application in your browser:

```
http://127.0.0.1:8000/
http://localhost:4200/
```

## Configuration

To configure the application, modify the following files:

- `server/config.js`: Configure the MongoDB connection settings.

## Usage

1. Sign up for a new account or log in with existing credentials.
2. Explore the courses available in the application.
3. Add a new course by providing a description, notes, and images.

