import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import HeaderOG from "../headers/light";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus-circle.svg";
import { PrimaryButton } from "components/misc/Buttons.js";

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;


const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-green-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const ButtonContainer = tw.div`mt-6 flex flex-row justify-around sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12 `;
const Card = tw.div`bg-green-200 rounded-b px-4 max-w-xs mx-auto sm:max-w-none sm:mx-0 flex items-center`;


const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:(text-green-500 cursor-pointer)`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-green-500`}
`;

export default ({
  heading ="Choose your salad",
  recipes = [
      
    {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg veg crips",
        content: "Tomato Salad & Carrot",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg veg crips",
        content: "Tomato Salad & Carrot",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Nelli",
        content: "Hamburger & Fries",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Jalapeno Poppers",
        content: "Crispy Soyabeans",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Cajun Chicken",
        content: "Roasted Chicken & Egg",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Chillie Cake",
        content: "Deepfried Chicken",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Guacamole Mex",
        content: "Mexican Chilli",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Carnet Nachos",
        content: "Chilli Crispy Nachos",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
        url: "#"
      }
    ]
  }) => {

    const [dayValue, setdayValue] = useState( [
      {day: "sun", item: ""},
      {day: "tue", item: ""},
      {day: "wed", item: ""},
      {day: "thur", item: ""},
      {day: "frid", item: ""},
      {day: "sat", item: ""},]
      );

    console.log(dayValue);

    let dayArr = dayValue.map((weekday, index) => (
      <CardContainer key={index}>
        <CardTitle>{weekday.day}</CardTitle>
        <Card  className="group flex items-center" >                            
          <CardText>                             
            <CardContent>Salad item will come here</CardContent>
          </CardText>
          <Container className="w-full ">
            protein details etc:- 
            & remove button
              </Container> 
        </Card>
      </CardContainer>
    ));

    //console.log('dayArr',dayArr)

    // console.log(dayArr);


    // const dayArr = dayValue.map((day,index)) =>{
    //   return (
    //   <CardContainer key={index}>
    //     <Card  className="group flex items-center" >
                            
    //       <CardText>
    //       <CardTitle>{day}</CardTitle>
                             
    //         <CardContent></CardContent>
    //       </CardText>
    //       <Container className="w-full ">
    //       Selected salad comes here
    //           </Container> 
    //     </Card>
    //   </CardContainer>)});
    

    let recipesOut = recipes.map((card, index) => (
      <CardContainer key={index}>
        <Card  className="group flex items-center" >                            
          <CardText>
          <CardTitle onClick={() => openInNewTab("https://www.google.com/search?q="+card.title)}>{card.title}</CardTitle>
                             
            <CardContent>{card.content}</CardContent>
          </CardText>
          <Container className="w-full ">
            <select defaultValue={0} >
                <option value="0">0 gm</option>
                <option value="10">10 gm</option>
                <option value="20">20 gm</option>
                <option value="40">40 gm</option>
              </select>
              <p>Select day</p>
              </Container> 
        </Card>
      </CardContainer>
    ));

    return (
      <AnimationRevealPage>
      <HeaderOG/>
        <ContentWithPaddingXl>
          <HeaderRow>
            <Header>{heading}</Header>
          </HeaderRow> 
          <TabContent>
              {dayArr}
            </TabContent>         
            <TabContent>
              {recipesOut}
            </TabContent>

            <br />
            <ButtonContainer>
            <PrimaryButton className="m-2" as="a" href="/makesalad">+ Make your salad</PrimaryButton>
            <PrimaryButton className="m-2 mr-5" as="a" href="/"> Next </PrimaryButton>
            </ButtonContainer>

              
           
            
            </ContentWithPaddingXl>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      {/* </Container> */}
      </AnimationRevealPage>
    );
  };

