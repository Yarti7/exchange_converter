import React from 'react';
import useAxios from "axios-hooks";
import Course from "./Course";


const CourseContainer = (props) => {

    const [{data, loading, error}, refetch] = useAxios(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5 "
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;


    return <div>
        <div>
            <h2>Свежие курсы</h2>
            <button onClick={refetch}>Обновить</button>
            {data.map((items) => {

                    return (
                        <Course courseCcy={items.ccy} courseBaseCcy={items.base_ccy} courseBuy={items.buy}
                                courseSale={items.sale}/>
                    )

            })}

            <Course/>
            <div>
                {/*  <pre>{JSON.stringify(data, null, 2)}</pre>*/}
            </div>
        </div>
    </div>

}

export default CourseContainer;