import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import ZoomInTransition from '../components/Transition';
import tick from '../assets/tick.gif';
import celebrationBackground from '../assets/celebrate.gif'


function ThankYouPopup({open,setOpen}) {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>

      <Dialog open={open} onClose={handleClose} TransitionComponent={ZoomInTransition} className='text-center'  >
        <div style={{ backgroundImage: `url(${celebrationBackground})`}}>
        <DialogTitle>Thank You!</DialogTitle>
        <div className='flex justify-center'>
            <img src={tick} className='w-16' alt='success tick' style={{ borderRadius: '50%', display: 'block' }} />
          </div>
        <DialogContent >
          <p  className="paragraph text-center text-base md:text-lg">Your message was received successfully!</p>
          <p  className="paragraph text-center text-base md:text-lg">Thanks for reaching out! I’ll get back to you soon. Looking forward to connecting!</p>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
  <Button onClick={handleClose} color="primary">
    <a href="#_" className="px-4 py-2.5 relative rounded group font-medium text-white inline-block">
      <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
      <span className="relative">ok</span>
    </a>
  </Button>
</DialogActions>
        </div>
        
      </Dialog>
    </div>
  );
}

export default ThankYouPopup;
