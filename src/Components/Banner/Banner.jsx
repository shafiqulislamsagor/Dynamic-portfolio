import mizan from '../../assets/mizan.jpg'
const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center'>
            <div className='w-full md:w-1/2'>
                <h1>Hi , I am <br /> <span>Mizanur Rahman</span></h1>
                <h3>I am Gripic designer</h3>
                <h4>A Creative Designer From Bangladesh</h4>
                <p>I’m creative designer based in United States, and I’m very passionate and dedicated to my work</p>
            </div>
            <div className='flex-1'>
            <div className='h-72 w-72 md:h-80 md:w-80 mx-auto rounded-full border-green-400 border-2'>
                <img className='h-full w-full rounded-full' src={mizan} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;