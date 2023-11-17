import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SelectTimetable } from './selectTimetable.entity';
import { Meeting } from './meeting.entity';
  

@Entity({ name: 'meeting_date' })
export class MeetingDate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(type => Meeting, meeting => meeting.meeting_dates,{ primary: true, onDelete: 'CASCADE' })
  meeting_id: number;

  @Column()
  available_date: Date;

  @OneToMany(type => SelectTimetable, select_timetable => select_timetable.meeting_date_id)
  select_timetables: SelectTimetable[];
}