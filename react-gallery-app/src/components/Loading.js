import loadingImg from '../loading.png';

/**
 * Declares the 'Loading' Component that will return a loading screen when fetching
 * @returns {JSX} "loading-div" - The container with the loading screen components
 */
const Loading = () => {
    return (
        <div className="loading-div">
             <img src={loadingImg} alt="Rotating loading icon" height="100px" className="rotate" />
             <h2>Loading</h2>
        </div>
    );
}

export default Loading;