import React, { useState } from 'react'
import './Support.css'
import './Faq.css'
import Header from '../Pages/Header'
import SideNav from '../Pages/SideNav'
import { Link } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Faq = () => {

    const faqData = [
        {
          question: "How can I track the status of a loan application?",
          answer: "To track the status of a loan application, access the New Applications name or page and choose or search for the applicant's name or Loan ID. The app will display the current stage of the application such as 'Pending', 'Docs. Reviewed', and 'Incomplete docs.'",
        },
        {
          question: "What documents are typically required for loan processing?",
          answer: "The documents required for loan processing vary depending on the loan type. However, common documents include identification proof, income statements, bank statements, employment verification, and collateral documentation (when applicable). You can access these files in the Document's sub-page under your client's information overview.",
        },
        {
          question: "What happens if a borrower misses a loan repayment?",
          answer: "If a borrower misses a loan repayment, it is essential to follow established collection procedures. Loan officers should access the due loans page to view overdue loans, send reminders via messages or email their clients, and initiate appropriate actions based on the institution's policies. It is crucial to maintain clear communication with borrowers to resolve any payment issues promptly.",
        },
        {
          question: "What should I do if I encounter a technical issue on the app?",
          answer: "You can reach out to the app's support team for assistance by calling the toll-free number on the support page or typing and sending a report from the support page. Describe the issue you are facing, providing any relevant details needed, and the support team will guide you through the resolution process.",
        },
    ];

    const [faqDrop, setFaqDrop] = useState(null);

    const handleClick = (index) => {
        if (faqDrop === index) {
            setFaqDrop(null)
        } else {
            setFaqDrop(index)
        }
    };

  return (
    <div>
        <Header />

        <div className='support-container'>
            <SideNav />

            <div className='support-content'>
                <div className='support-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='suportnav-icon'/>
                    <Link to='/support' className='support-link'>Support</Link>
                    <ArrowForwardIosOutlinedIcon className='suportnav-icon'/>
                    <Link to='/support/faq'>FAQs</Link>
                </div>
               
                <h1 className='faq-header'>FAQs</h1>

                <div className='faq-body'>
                    {faqData.map((data, index) => (
                        <div key={index}>
                        <div className='faq-divs' >
                            <div className='faq-quest'>
                                <p>{data.question}</p>
                                <div onClick={() => handleClick(index)}>
                                    <KeyboardArrowDownIcon className='faq-quest-icon'/>
                                </div>                        
                            </div>
                            
                        </div>
                        <div className='faq-ansdiv'>
                        {faqDrop === index && (
                            <p className='faq-ans'>{data.answer}</p>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                
            </div>
        </div>

        
    </div>
  )
}

export default Faq;