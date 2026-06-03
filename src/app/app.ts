import { Component } from '@angular/core';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './course-detail/course-detail';

@Component({
  selector: 'app-root',
  imports: [CourseList, CourseDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  courses = [
    {
      id: 1,
      title: 'Angular Basics',
      description: 'Learn Angular Fundamentals',
      duration: '20 Hours'
    },
    {
      id: 2,
      title: 'React Basics',
      description: 'Learn React Fundamentals',
      duration: '18 Hours'
    },
    {
      id: 3,
      title: 'Node JS',
      description: 'Backend Development',
      duration: '25 Hours'
    }
  ];

  selectedCourse = this.courses[0];

  selectCourse(course: any) {
    this.selectedCourse = course;
  }
}