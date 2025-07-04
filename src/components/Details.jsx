function Details(props) {
    return <>
        <h1>{props.name}</h1>
        <img src={props.sprites.front_default} />
        <p>Poids: {props.weight / 10} kg</p>
        <p>Taille: {props.height * 10} cm</p>
    </>
}

export default Details 