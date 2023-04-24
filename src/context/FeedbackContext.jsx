import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid' 
const FeedbackContext = createContext()

export const FeedbackProvider =({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'this is feedback 1',
            rating :10
        },
        {
            id:2,
            text: 'this is feedback 2',
            rating :8
        },
        {
            id:3,
            text: 'this is feedback 3',
            rating :6
        }
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    //update the data 
    const updateFeedback = (id, updItem)=>{
        console.log(id,updItem)
        setFeedback(feedback.map((item)=>item.id===id ? {...item,...updItem} :item))
    }

    //useed to add feedback
    const addFeedback=(newFeedback) =>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //Delete feedback
    const deleteFeedback = (id)=>{
        if(window.confirm("Are you surre you want to delete?"))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    //EDIT Feedback
    const editFeedback =(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{ 
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,




    }} >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
