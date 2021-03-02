const Photo = (props) => {
    const {
        server,
        id,
        secret
    } = props
    return (
        <li key={id}>
            <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />
        </li>
    );
}

export default Photo;