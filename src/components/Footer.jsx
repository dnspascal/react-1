import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
function Footer(){
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id fuga odit eos explicabo saepe beatae, harum doloremque officia autem necessitatibus consequuntur laboriosam hic enim odio, facere, provident ipsam quaerat!</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaFacebookSquare className='' size={30}/>
                <FaInstagramSquare className='' size={30}/>
                <FaTwitterSquare className='' size={30}/>
                <FaGithubSquare className='' size={30}/>
                <FaDribbbleSquare className='' size={30}/>
            </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'> Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                        
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'> Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                        
                    </ul>
                </div>
                <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'> About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                        
                    </ul>
                </div>
                <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'> Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                        
                        
                    </ul>
                </div>
                
               

            </div>
            
            
        </div>
    )
}
export default Footer;