import SubCom from "./subCom";

function NewCom(props){

    return (
    <>
        
        <h2>New Component {props.count}</h2>
        <SubCom count={props.count} />
    </>
    )
}

export default NewCom;


// export default {SubCom};