import {createContext,useState} from 'react'

export const activeContext = createContext(null);

export const ActiveProvider = (props)=>{
    const [activelink, setActivelink] = useState({'home':true,'skills':false,'projects':false,'contact':false})
    const handleActiveLink = (section)=> setActivelink({home:false,skills:false,projects:false,contact:false,[section]:true});
    return <activeContext.Provider value={{activelink, setActivelink, handleActiveLink}}>
            {props.children}
    </activeContext.Provider>
}