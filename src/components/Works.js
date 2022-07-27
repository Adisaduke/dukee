import React from 'react'
import react from './assets/react.jpg'
import ui from './assets/ui.jpg'
import food from './assets/food.jpg'
import Expenses from './assets/Expenses.png'
import keeperr from './assets/keeperr.png'
import drumkiit from './assets/drumkiit.png'
import Trivia from './assets/Trivia.PNG'
import './styles/Works.scss'
import { Link } from 'react-router-dom'
import { ArrowBack, FontDownloadSharp } from '@material-ui/icons'

const Works = () => {
    return (
        <div className='works'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>


            <div className="work__section">

                <div className="cards">
                    <img src={Trivia} alt="" />
                    <a href="https://ten-trivia.netlify.app/" target="_blank" className='social_accounts'><button>See Work</button></a>
                    
                </div>

                <div className="cards">
                   <img src={Expenses} alt="" />
                   <a href="https://mellow-youtiao-25bc83.netlify.app/" target="_blank" className='social_accounts'><button>See Work</button></a>
                </div>

                <div className="cards">
                   <img src={drumkiit} alt="" />
                   <a href="https://leafy-concha-ae444d.netlify.app/" target="_blank" className='social_accounts'><button>See Work</button></a>
                </div>

                <div className="cards">
                   <img src={keeperr} alt="" />
                   <a href="https://pogqj.csb.app/" target="_blank" className='social_accounts'><button>See Work</button></a>
                </div>
            </div>
        </div>
    )
}

export default Works
