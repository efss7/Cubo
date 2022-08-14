import { useEffect, useState } from "react"
import { deleteColum, insert, update, selectAll } from "../service/request"
import { ParticipationContext } from "./Context"


export const GlobalState = (props) => {
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [selectedPersonData, setSelectedPersonData] = useState()
    const [message, setMessage] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(()=> { selectAll(select,setLoader) },[])

    const select = (data) => {
        let updatedList = updatedIndexFn(data)
        setList(updatedList)
    }

    const create = (data) => {
        message && showMessage()
        if(checkTotalParticipation(list,data.participation) <= 100) {
            let updatedList = [...list,data]
            updatedList = updatedIndexFn(updatedList)
            setList(updatedList)
            insert(data)
        }else {
            showMessage()
        }
    }

    const deleteById = () => {
        message && showMessage()
        let updatedList = list.filter(a => 
            (a.id !== selectedPersonData.id)
            )
        updatedList = updatedIndexFn(updatedList)
        setList(updatedList)
        deleteColum(selectedPersonData)
    }

    const showEditFn = () => {
        setEdit(edit === false ? true : false)
    }

    const showMessage = () => {
        setMessage(message === false ? true : false)

    }

    const editTableDataFn = (first_name,last_name,participation) => {
        setSelectedPersonData({first_name,last_name,participation})
    }

    const editColum = (first_name, last_name,participation) => {
            message && showMessage()
            let updatedEditData = selectedPersonData
            updatedEditData.participation = +participation
            const updateList = list.map(people => 
                (people.id ===  updatedEditData.filter) ?
                {
                    id:people.id, 
                    first_name:people.first_name,
                    last_name:people.last_name, 
                    participation: updatedEditData.participation
                } :
                people
            )
        const totalParticipation = checkTotalParticipation(updateList,0)
        totalParticipation <= 100 && setList(updateList) 
        totalParticipation <= 100 && update(updatedEditData)
        totalParticipation > 100 && showMessage()
    }

    const updatedIndexFn = (list) => {
        return list.map((element,index) => {
            element.id = index + 1
            element.participation = +element.participation
            return element
        })
    }
    
    const checkTotalParticipation = (list,newParticipation) => {
        const totalParticipation = list.reduce((acc,curr) => {
            acc += curr.participation
            return acc
        },0)
        return Number(newParticipation) + totalParticipation
    }

    const params = {
        list,
        add: create,
        del: deleteById,
        edit,
        showEditFn,
        editTableDataFn,
        editParticipation: editColum,
        message, 
        setMessage,
        loader
    }

    return (
        <ParticipationContext.Provider value={params}>
            {props.children}
        </ParticipationContext.Provider>
    )}