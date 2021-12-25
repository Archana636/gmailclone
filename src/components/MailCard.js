import React, {useState} from 'react'
import './css/MailCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { CheckBox, Star,MoreVert, Reply, Forward} from '@material-ui/icons';
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';
import { Avatar, IconButton} from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
// import ForwardIcon from '@material-ui/icons/Forward';
// import ReactHtmlParser from 'react-html-parser'
import Modal from 'react-modal'
import PhotoIcon from '@material-ui/icons/Photo';
import ScreenLockRotationIcon from '@material-ui/icons/ScreenLockRotation';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      color: "#fff",
      marginLeft: "5px",
      fontSize: theme.typography.pxToRem(15),
      fontWeight: 400,
    },
  }));

   function SimpleAccordion() {

    const [modalOpen, setModalOpen] = useState(false);
    const [focus, setFocus] = useState(false);
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [recipient, setRecipient] = useState("")

    const [forward, setForward] = useState(false)

    const handleReply = () => {
      setModalOpen(true)
      setForward(false)
    }
    const handleForward = () => {
      setModalOpen(true)
      setForward(true)
    }

    const classes = useStyles();
    return (
        <div>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className='accordMid'>
                <div className='accordLeft'>
                 <CheckBox/>
                 <Star />
                 <Typography className={classes.heading}
                 >username</Typography>
                </div>
                <div className = "accordMidMain">
                <Typography className = {classes.heading}>
                  subject
                </Typography>
                <p className = {classes.heading}>Click Here to see Mail Content</p>
                </div>
                <div className = "accordMidDate">
                  <Typography className={classes.heading}>
                     time
                  </Typography>
                </div>
             </div>
             </AccordionSummary>
             <AccordionDetails>
             <div className = "accordDetails">
            <div className = "accordDetailsTop">
            <p>subject</p>
            <div className = "accordDetailsTopRight">
            <PrintIcon />
            <LaunchIcon />
            </div>
              </div>
              <div className = "accordDetailsInfo">
                <Avatar/>
                <div className = "sendersInfo">
                  <h4>Name of the sender<small>Mail</small></h4>
                  <small></small>
                </div>
                <div className = "sendersInfoDate">
                  <div className = "sendersInfoDateOption">
                <small>Date</small>
                    <Star />
                    <ReplyIcon />
                    <MoreVert />
                 </div>
                 </div>
              </div>
              <div className = "mailContent">
                <div className = "mailContentAccord">
                  content
                </div>
              <ReplyMails/>
              <ForwardMails/>
              <Modal
                   isOpen={modalOpen}
                   onRequestClose = {() => setModalOpen(false)}
                   shouldCloseOnOverlayClick={false}
                   style={{
                   overlay: {
                   width: 680,
                   height: "auto",
                   backgroundColor: "rgba(0,0,0,0.8)",
                   zIndex: "1000",
                   top: "50%",
                   left: "50%",
                   marginTop: "-250px",
                   marginLeft: "-350px",
                   borderRadius: "none"
               },
               content: {
                   margin: 0,
                   padding: 0,
                   border: "none"
               }
               }}

          >
               <div className = "modalContainer">
                      <div className = "modalContainerTop">
                            <div className = "modalHeader">
                      <p>{forward ? 'Forward' : "Reply"}</p>
                      <div 
                      className = "modalHeaderIcons">  
                          <IconButton onClick = {()=>
                          setModalOpen(false)
                        }>
                              <CloseIcon />
                          </IconButton>
                      </div>
                  </div>
                  <div onClick = {() => setFocus(true)}
                   className = "modalRecipient">
                      {/* <input
                        style = {{
                        display: "none"
                        }} 
                        id = "sender"
                        value = {sender}
                      /> */}
                      <p>{focus ? "To" : "Recipients"}</p>
                      <input 
                        id = "recipient"
                        value = {recipient}
                        onChange = {(e) => setRecipient(e.target.value)}
                        type = "text"
                      />
                  </div>
                  <div className = "modalRecipient">
                      <input 
                        id = "subject"
                        value = {subject}
                        onChange = {(e) => setSubject(e.target.value)}
                        type = "text"
                        placeholder = "Subject"
                      />
                  </div>
                  <div className = "quill">
                      <ReactQuill 
                      id = "content"
                      value = {content}
                      onChange = {(value) => setContent(value)}
                      placeholder = {forward ? 'Add content then forward mail...' : "Add reply to this mail..."}
                      />
                  </div>
                </div>
                    <div className = "modalContainerBottom">
                        <div className = "modalBottom">
                        <button>{forward ? "Forward" : "Reply"}</button>
                        <TextFormatIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <SentimentSatisfiedIcon />
                        <PhotoIcon />
                        <ScreenLockRotationIcon />
                        <div className = "modalBottomLast">
                            <MoreVertIcon />
                            <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  
                  </div>
          </Modal>

              <div className='mailReplyLinks'>
                <div onClick = {handleReply}
               className='mailReplyLink'>
                <Reply/>
                 <a  href = "#">Reply</a>
                </div>
                <div onClick = {handleForward}
                 className='mailReplyLink'>
                <Forward/>
                 <a  href = "#">Forward</a>
                </div>
                </div>
                  </div>
                  </div>
            </AccordionDetails>
          </Accordion>
         </div>
      );
    }
    const ReplyMails = () => {
  return <h1>replt mails</h1>
    }
    const ForwardMails = () => {
      return <h1>replt mails</h1>
    }

function MailCard() {
    return (
        <div className='mailCards'>
         <SimpleAccordion/>
        </div>
    )
}

export default MailCard
