import css from "./Alert.module.css"
import clsx from 'clsx'

    const getBgColor = (variant) =>{

        switch(variant){
            case "info":
                return "blue";
            case "succes":
                return "green";
            case "error":
                return "red";
            case "warning":
                return "orange";
            default: 
            throw new Error(`Unsupported: , ${variant}`)
        }
    }

export const Alert =({variant, outlined, elevated, children}) =>{

    
    return(
        <>
             <p className= {
              clsx (
                css.alert,
                css[variant],
                {
                "is-outlined": outlined,
                "is-elevated": elevated
                
                })
             }>
                {children}
            </p>
     

        </>

    )


}