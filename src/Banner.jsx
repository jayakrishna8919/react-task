import pic from './lady.png'

function Banner(){

    return (
        <div className='banner'>
            <div className="text">
                <h3>SPRING/SUMMER COLLECTION 2017</h3>
            <h1>Get up to 30% off</h1>
            <h1>New Arrivals</h1>
            </div>
            <button className='shopnowbtn'>SHOP NOW</button>

            <img src={pic} alt="" />
        </div>
    )

}
export default Banner;