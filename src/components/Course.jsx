import React from 'react';
import style from '../App.module.css'




const Course = (props) => {


        return <div>
            <div className={style.course} >
                <div><b>Курс:</b> {props.courseCcy}</div>
                <div><b>Базовый курс:</b> {props.courseBaseCcy}</div>
                <div><b>Покупка:</b> {props.courseBuy}</div>
                <div><b>Продажа:</b> {props.courseSale}</div>

            </div>
        </div>


}

export default Course;