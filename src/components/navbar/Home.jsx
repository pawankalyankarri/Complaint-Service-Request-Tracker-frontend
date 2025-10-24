import plumbing from '../../assets/plumbing.jpg'
import electrical from '../../assets/electrical.jpeg'
import cleaning from '../../assets/cleaning.jpg'
import tv from '../../assets/tv.jpeg'
import fan from '../../assets/fan.jpg'
import mobile from '../../assets/mobile.jpeg'
const Home = () => {
    return(
        <div className='w-full h-full mb-5'>
           <div className='w-full h-full  grid-cols-3 gap-5 card'>
            <div className='card shadow rounded-md  '>
                <img src={plumbing} alt="" className='w-[50%]' />
            </div>
            <div className='card shadow rounded-md '>
                <img src={electrical} alt="" className='w-[50%]' />
            </div>
            <div className='card shadow rounded-md '>
                <img src={cleaning} alt="" className='w-[50%]' />
            </div>
            <div className='card shadow rounded-md '>
                <img src={tv} alt="" className='w-[50%]' />
            </div>
            <div className='card shadow rounded-md '>
                <img src={fan} alt="" className='w-[50%]' />
            </div>
            <div className='card shadow rounded-md '>
                <img src={mobile} alt="" className='w-[50%]' />
            </div>
           </div>
        </div>
    )
}
export default Home