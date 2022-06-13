const db = require('./db')

const init = () => {
    try {
        db.query(`
            begin;
                create table if not exists program(p_id varchar(6) primary key, no_of_years int);
                create table if not exists department(d_id varchar(6) primary key, hod varchar(25), p_id varchar(6), foreign key (p_id) references program(p_id));
                create table if not exists person(id varchar(6) primary key, name varchar(25), dob date, mail_id varchar(50), phone_no int, address varchar(50), gender varchar(15), d_id varchar(6), img_link varchar(150), foreign key (d_id) references department (d_id));
                create table if not exists semester(sem_no int , d_id varchar(6), fees int, max_credit int, foreign key (d_id) references department(d_id), primary key(sem_no, d_id));
                create table if not exists staff(id varchar(6) primary key, join_date date, designation varchar(20), exp_years int, foreign key (id) references person (id));
                create table if not exists staff_sub_expert(sub_expert varchar(25), id varchar(6), foreign key (id) references staff (id), primary key(sub_expert, id));
                create table if not exists student(id varchar(6) primary key,batch integer,fee_paid integer,cgpa float, foreign key (id) references person (id));
                create table if not exists papers(paper_name varchar(30) primary key, credits int);
                create table if not exists paper_detail(sem_no int, d_id varchar(6), id varchar(6), paper_name varchar(50), primary key(sem_no, d_id, id, paper_name), foreign key (sem_no,d_id) references semester (sem_no,d_id), foreign key (id) references staff (id), foreign key (paper_name) references papers (paper_name));
                create table if not exists common_paper(paper_name varchar(30), foreign key (paper_name) references papers (paper_name));
                create table if not exists elective_paper(paper_name varchar(30), foreign key (paper_name) references papers (paper_name));
                create table if not exists core_paper(paper_name varchar(30), foreign key (paper_name) references papers(paper_name));
                create table if not exists fee(receipt_no int primary key,id varchar(6),foreign key(id) references student(id));
                create table if not exists fee_amount(receipt_no int primary key,amount int,sem_no int,foreign key(receipt_no) references fee(receipt_no));
                create table if not exists parent(p_id varchar(6) primary key,id varchar(6),email_id varchar(30),name varchar(30),relationship varchar(6),foreign key(id) references student(id));
                create table if not exists parent_mobiles(p_id varchar(6), mobile int, foreign key(p_id) references parent(p_id),primary key(p_id, mobile));
                create table if not exists academics(id varchar(6),sem_no int,d_id varchar(6),total_credit int,points int, foreign key(id) references student(id),foreign key(sem_no,d_id) references semester(sem_no,d_id));
                create table if not exists s_paper(id varchar(6),stf_id varchar(6),sem_no int,d_id varchar(6),paper_name varchar(30),ca1 int ,ca2 int,ca3 int,assignment int,tutorial int,sem_mark int,foreign key (id) references student(id), foreign key(sem_no, d_id, stf_id, paper_name) references paper_detail(sem_no, d_id, id, paper_name), primary key(id, sem_no, d_id, paper_name));
                create table if not exists elective_sem(id varchar(6),sem_no int,d_id varchar(6),paper_name varchar(30),foreign key(id, sem_no, d_id, paper_name) references s_paper(id, sem_no, d_id, paper_name));
                create table if not exists arrear_sem(id varchar(6),sem_no int,d_id varchar(6),paper_name varchar(30),foreign key(id, sem_no, d_id, paper_name) references s_paper(id, sem_no, d_id, paper_name));
                create table if not exists mandatory_sem(id varchar(6),sem_no int,d_id varchar(6),paper_name varchar(30),foreign key(id, sem_no, d_id, paper_name) references s_paper(id, sem_no, d_id, paper_name));
            end transaction;
        `);
    } catch (e) {
        console.error(e);
    }
}

module.exports = init;