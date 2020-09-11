import React from 'react';
import whatsappIcons from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface Teacher{
    id: number;
    avatar: string,
    bio: string,
    cost: string,
    name: string,
    subject: string,
    whatsapp: string,

}

interface TeacherItemProps{
    teacher: Teacher,
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher})=>{
    function createNewConnection(){
        api.post('connections', {

            user_id: teacher.id,
        })
    }
    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Professor" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora 
                <strong>{teacher.cost}</strong>
                </p>
                <a onClick={createNewConnection} href={`https://wa.me/${'55'+teacher.whatsapp}/?text=Olá%20tudo%20bem%20`}>
                    <img src={whatsappIcons} alt="whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
