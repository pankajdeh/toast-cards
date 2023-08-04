import React from "react";
import {FcLike} from "react-icons/fc"

const Card = ({course}) => {

    return (
         <div  className="w-full bg-slate-600 relative ">
                <div>
                    <img src={course.image.url} className="w-[350px]"></img>
                    
                    <div>
                        <button className="absolute  ">
                            <FcLike fontSize="1.75rem"/>
                        </button>
                    </div>
                </div>
                <div>
                    <p>{course.title}</p>
                    <p>{course.description}</p>
                </div>

        </div>
    )

}
// 
export default Card  