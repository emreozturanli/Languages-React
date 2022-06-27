import { useState } from "react"
import cardStyle from './card.module.scss'


export const Card = ({name,img,options}) => {
    const [isImage, setIsImage] = useState(true)

  return (
    <div className={cardStyle.unit} onClick={()=> setIsImage(!isImage)}>
       {isImage &&  <div>
            <img src={img} alt={name} className={cardStyle.image} />
            <p>{name}</p>
       </div>
       }
        
        
        { !isImage && <ul>
            {
                options.map((item)=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        }
    </div>
  )
}
