import loadingImg from '../loading.png';

const Loading = () => {
    return (
        <div className="loading-div">
             <img src={loadingImg} alt="Rotating loading icon" height="100px" className="rotate" />
             <h2>Loading</h2>
        </div>
    );
}

export default Loading;