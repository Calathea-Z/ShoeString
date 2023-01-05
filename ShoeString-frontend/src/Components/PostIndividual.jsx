import '../Styles/postIndividual.css';
import { motion } from 'framer-motion';
import {ImHeart} from 'react-icons/im'
import {FiMapPin} from 'react-icons/fi'
import {BsFillChatSquareTextFill} from 'react-icons/bs'

function PostIndividual({id_, username, userphoto, img, location, comment, likes}) {


  return (
    <div className='post-individual-full'>

      <div className='post-individual-header'>
        <p>{username}</p>
        <motion.img whileHover={{scale:1.3}} transition={{duration:.8}} className='profile-photo' src={userphoto} alt={username}/>
      </div>

      <div className='post-body'>
        <img className='post-photo' src={img} alt='Photo of location'/>
       </div> 
        <div className='post-individual-middle'>
            <div>
              <a href='#locationtag' className='location-button'><FiMapPin/>{' '}{location}</a>
            </div>
            <div>
              <motion.button whileHover={{scale:1.1}} transition={{duration:.8}} className='post-button'><ImHeart/></motion.button>
            </div>
        </div>
        <div className='post-individual-likes'>
            <p>Liked by <span>{likes}</span> fellow travelers</p>
        </div>
        <div className='post-individual-comment'>
        <p><span>{username}</span>{' '}{comment}</p>
        </div>
        <form className='post-comment-add' >
          <div className='post-icon'><BsFillChatSquareTextFill/></div>
          <input type='text' placeholder='Give some kudos or share some info....' className = 'post-individual-comment' />
          <motion.button whileHover={{scale:1.1}} transition={{duration:.8}} className='post-button'>Post</motion.button>
            
        </form>
    </div>
  )
}

export default PostIndividual
 