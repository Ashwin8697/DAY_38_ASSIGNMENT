# EduLearn Course Management

## Run Project

npm install

ng serve

Open:
http://localhost:4200

## Components

1. CourseListComponent
2. CourseDetailComponent

## Property Binding

Used to pass selected course data.

Example:
[course]="selectedCourse"

## Event Binding

Used on View Details button.

Example:
(click)="viewDetails(course)"

## Two-Way Binding

Used for editing course title.

Example:
[(ngModel)]="course.title"
