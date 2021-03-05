/**
 * Declares the 'Photo' component
 * @param {Object} props - Used to access passed down properties
 * @returns {JSX} li - list item hosting the photo with the dynamic URL
 */
const Photo = (props) => {
    const {
        server,
        id,
        secret
    } = props // Deconstructing the props to avoid having to use 'props.' in front of all
    return (
        <li>
            <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />
        </li>
    );
}

export default Photo;