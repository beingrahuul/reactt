export default function Title(props){
    return(
        <>
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="sub">{props.subtile}</h2>
        </>
    )
}