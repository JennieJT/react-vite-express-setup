import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { createTheme } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { mainNavbarItems } from '../mock/NavBarItems';
import { useNavigate } from "react-router-dom";


export default function MyAccordion() {
  const navigate = useNavigate();
  return (
    <>
      
        {mainNavbarItems.map((item, index) => (
          <Accordion key = {item.id}>
             <AccordionSummary
                expandIcon={<ArrowDropDownIcon />} 
                aria-controls="panel1-content"
                id="panel1-header"
                key = {item.id}
                onClick={() => {navigate(item.route)}}
              >
                <Typography>{item.label}</Typography>
              </AccordionSummary>
            {item.children && item.children.map((item2, index2) => (
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />} 
                aria-controls="panel1-content"
                id="panel1-header"
                key = {item2.id}
              >
                <Typography>{item2.label}</Typography>
              </AccordionSummary>
              ))}
         
        </Accordion>
        ))}

  
        

    </>
  );
}
